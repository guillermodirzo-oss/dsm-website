"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const PIXEL_ID = "604766394322878";

export default function FacebookPixel() {
  const pathname = usePathname();

  // Fire PageView on every route change — browser pixel + server-side CAPI duplicate
  useEffect(() => {
    const eventId = crypto.randomUUID();
    const fbp = document.cookie.match(/_fbp=([^;]+)/)?.[1];
    const fbc = document.cookie.match(/_fbc=([^;]+)/)?.[1];

    // Browser-side PageView with eventID for deduplication
    if (typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "PageView", {}, { eventID: eventId });
    }

    // Server-side CAPI PageView via Stape CAPIG (fire-and-forget)
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName: "PageView",
        eventId,
        eventSourceUrl: window.location.href,
        userData: { fbp, fbc },
      }),
    }).catch(() => {});
  }, [pathname]);

  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://capi.dsmcleaningsolutions.com/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
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
