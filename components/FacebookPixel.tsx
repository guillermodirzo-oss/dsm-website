"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  getOrCreateExternalId,
  getCookie,
  getStoredRawEmail,
  getStoredHashedEmail,
  getStoredRawPhone,
} from "@/lib/pixelHelpers";

const PIXEL_ID = "604766394322878";

export default function FacebookPixel() {
  const pathname = usePathname();

  useEffect(() => {
    // The pixel init script is strategy="lazyOnload", so window.fbq usually does
    // NOT exist yet when this effect first runs. Bailing out here would silently
    // drop the PageView, so instead we wait for fbq to appear and fire then.
    //
    // Firing exactly once per pathname is guaranteed by three things:
    //   1. `fired` flips to true before fire() does any work, so a second call
    //      is impossible even if two checks were somehow queued.
    //   2. The poll is cleared the moment it succeeds.
    //   3. The cleanup below runs on every pathname change and on unmount, so a
    //      pending poll from the previous path can never fire against the new one.
    let fired = false;
    let pollId: ReturnType<typeof setInterval> | null = null;

    const stopPolling = () => {
      if (pollId !== null) {
        clearInterval(pollId);
        pollId = null;
      }
    };

    const fire = () => {
      if (fired) return;
      fired = true;

      // One shared eventID for both the browser pixel call and the CAPI call.
      // This lets Meta deduplicate the two signals and count exactly 1 event.
      const eventId = crypto.randomUUID();

      const fbp        = getCookie("_fbp");
      const fbc        = getCookie("_fbc");
      const externalId = getOrCreateExternalId();

      // ── Advanced matching — enrich pixel with email if we have it ──────────
      // getStoredHashedEmail() reads from localStorage (survives across sessions).
      // getStoredRawEmail() reads from sessionStorage (current tab only, for CAPI).
      // getStoredRawPhone() reads from sessionStorage (current tab only, for CAPI).
      const hashedEmail = getStoredHashedEmail();
      const rawEmail    = getStoredRawEmail();
      const rawPhone    = getStoredRawPhone();

      // Call setUserProperties with the hashed email so that Meta can apply
      // advanced matching to ALL subsequent track() calls on this page.
      // This is the key fix for the low email coverage (19%) in Events Manager.
      if (hashedEmail) {
        try {
          (window as any).fbq("setUserProperties", PIXEL_ID, { em: hashedEmail });
        } catch {
          /* ignore if pixel not ready */
        }
      }

      // ── Browser-side PageView ──────────────────────────────────────────────
      // eventID is passed as the 4th argument so Meta can match this with the
      // server-side CAPI call below and deduplicate to a single event.
      (window as any).fbq("track", "PageView", {}, { eventID: eventId });

      // ── Server-side CAPI PageView (fire-and-forget) ────────────────────────
      // em and ph are raw values — /api/track hashes them server-side before
      // forwarding to Meta. Raw PII is only transmitted over HTTPS to our server.
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventName: "PageView",
          eventId,
          eventSourceUrl: window.location.href,
          userData: {
            fbp,
            fbc,
            external_id: externalId,
            em: rawEmail   || undefined,  // raw — server hashes before sending to Meta
            ph: rawPhone   || undefined,  // raw — server normalises + hashes
          },
        }),
      }).catch(() => {
        // Silent — pixel failures must never affect the user experience
      });
    };

    // fbq is created as a synchronous queueing stub by the init script below, so
    // as soon as it is a function our calls are safely queued and flushed once
    // fbevents.js arrives. That makes polling for it sufficient — no event is lost.
    const fbqReady = () => typeof (window as any).fbq === "function";

    if (fbqReady()) {
      fire();
    } else {
      // ~30s ceiling (150 * 200ms). If the pixel is blocked by an extension or
      // never loads, we stop polling rather than spin for the life of the page.
      let attempts = 0;
      pollId = setInterval(() => {
        attempts += 1;
        if (fbqReady()) {
          stopPolling();
          fire();
        } else if (attempts >= 150) {
          stopPolling();
        }
      }, 200);
    }

    return () => {
      fired = true; // block any in-flight callback from firing for a stale path
      stopPolling();
    };
  }, [pathname]);

  return (
    <>
      {/*
        Inline script runs synchronously on every page load.
        Two responsibilities:
          1. Capture fbclid from the URL and write the _fbc cookie immediately,
             before the async pixel JS has a chance to do it — this is the key
             fix for low fbc coverage.
          2. Initialise the pixel (fbq init only — NO PageView here).
             The PageView is fired in useEffect above so it always carries an
             eventID for server-side deduplication. Having it here too would
             cause every page load to register two PageViews in Meta.
      */}
      {/*
        fbclid capture is kept at afterInteractive on purpose. It writes a cookie
        and makes no network request, so it costs nothing measurable, and running
        it early is what keeps _fbc coverage high for ad clicks that bounce fast.
        Only the expensive part — fbevents.js — is deferred to lazyOnload below.
      */}
      <Script
        id="facebook-fbclid-capture"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // ── Capture fbclid → _fbc cookie ──────────────────────────────
            // Facebook ads append ?fbclid=XXX to click URLs. The standard pixel
            // JS captures this, but it loads async so the fbclid can be lost if
            // the user navigates quickly. We capture it synchronously here.
            (function() {
              try {
                var fbclid = new URLSearchParams(window.location.search).get('fbclid');
                if (fbclid && !document.cookie.match(/_fbc=/)) {
                  var fbc = 'fb.1.' + Date.now() + '.' + encodeURIComponent(fbclid);
                  var exp = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toUTCString();
                  document.cookie = '_fbc=' + fbc + '; path=/; expires=' + exp + '; SameSite=Lax';
                }
              } catch(e) {}
            })();
          `,
        }}
      />
      <Script
        id="facebook-pixel"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            // ── Initialise pixel (no PageView) ─────────────────────────────
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '${PIXEL_ID}');
            // PageView is intentionally omitted here — see useEffect above.
          `,
        }}
      />
      {/* noscript fallback for users with JS disabled */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
