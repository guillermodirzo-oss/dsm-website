"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const PIXEL_ID = "604766394322878";

// Get or create a stable anonymous external_id in localStorage.
// This persists across sessions so Meta can recognise returning visitors
// and stitch browser + server events together without PII.
function getOrCreateExternalId(): string {
  try {
    const KEY = "dsm_eid";
    let eid = localStorage.getItem(KEY);
    if (!eid) {
      eid = crypto.randomUUID();
      localStorage.setItem(KEY, eid);
    }
    return eid;
  } catch {
    // localStorage blocked (private browsing etc.) — use a session-only fallback
    return crypto.randomUUID();
  }
}

// Read a named cookie value from document.cookie
function getCookie(name: string): string | undefined {
  return document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))?.[1];
}

export default function FacebookPixel() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait until fbq is ready (it should always be by the time useEffect runs,
    // but guard defensively so nothing throws on slow connections)
    if (typeof (window as any).fbq !== "function") return;

    // One shared eventID for both the browser pixel call and the CAPI call.
    // This lets Meta deduplicate the two signals and count exactly 1 event.
    const eventId = crypto.randomUUID();

    const fbp = getCookie("_fbp");
    const fbc = getCookie("_fbc");
    const externalId = getOrCreateExternalId();

    // ── Browser-side PageView ──────────────────────────────────────────────
    // eventID is passed as the 4th argument so Meta can match this with the
    // server-side CAPI call below and deduplicate to a single event.
    (window as any).fbq("track", "PageView", {}, { eventID: eventId });

    // ── Server-side CAPI PageView (fire-and-forget) ────────────────────────
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
          // ph (hashed phone) and em (hashed email) are added by the server
          // route whenever those values are available from form submissions.
        },
      }),
    }).catch(() => {
      // Silent — pixel failures must never affect the user experience
    });
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
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // ── Step 1: capture fbclid → _fbc cookie ──────────────────────
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

            // ── Step 2: initialise pixel (no PageView) ─────────────────────
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
