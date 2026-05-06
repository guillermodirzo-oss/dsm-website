"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SpringBookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const baseUrl =
    "https://dsmcleaningsolutions.bookingkoala.com/leads/form/lead-form?embed=true";
  const [iframeSrc, setIframeSrc] = useState(baseUrl);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // UTM passthrough — append any UTM params from the landing page URL to the iframe src
    const utmKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ];
    const parts: string[] = [];
    utmKeys.forEach((key) => {
      const val = searchParams.get(key);
      if (val) parts.push(`${key}=${encodeURIComponent(val)}`);
    });
    if (parts.length > 0) {
      setIframeSrc(`${baseUrl}&${parts.join("&")}`);
    }

    // Load iFrame resizer script, then INITIALIZE it on our iframe.
    // Previously the script was loaded but iFrameResize() was never called —
    // the parent-side listener was never started so the contentWindow inside
    // the BookingKoala form could not handshake, causing a blank form.
    const script = document.createElement("script");
    script.src =
      "https://dsmcleaningsolutions.bookingkoala.com/resources/iframeResizer.min.js";
    script.async = true;
    script.onload = () => {
      if (
        typeof (window as unknown as Record<string, unknown>).iFrameResize ===
          "function" &&
        iframeRef.current
      ) {
        (
          window as unknown as {
            iFrameResize: (opts: Record<string, unknown>, el: HTMLIFrameElement) => void;
          }
        ).iFrameResize(
          {
            log: false,
            checkOrigin: false,
            heightCalculationMethod: "bodyOffset",
            scrolling: "omit",
          },
          iframeRef.current
        );
      }
    };
    document.body.appendChild(script);

    // Listen for BookingKoala form submission → fire Meta Lead event then redirect
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://dsmcleaningsolutions.bookingkoala.com") return;
      const data = event.data;
      if (
        data === "form_submitted" ||
        data === "success" ||
        data?.type === "success" ||
        data?.event === "formSubmitted" ||
        data?.status === "success" ||
        data?.submitted === true
      ) {
        if (
          typeof window !== "undefined" &&
          (window as unknown as Record<string, unknown>).fbq
        ) {
          (window as unknown as { fbq: (...args: unknown[]) => void }).fbq(
            "track",
            "Lead"
          );
        }
        router.push("/quote-thank-you");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      // Guard against the script not yet being appended (e.g. fast unmount)
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      window.removeEventListener("message", handleMessage);
    };
  }, [router, searchParams]);

  return (
    <div className="w-full">
      <iframe
        ref={iframeRef}
        id="iFrameResizer1"
        style={{ border: 0 }}
        src={iframeSrc}
        height="900"
        width="100%"
        scrolling="no"
        title="Get Your Spring Cleaning Quote — DSM Cleaning Solutions"
      />
    </div>
  );
}
