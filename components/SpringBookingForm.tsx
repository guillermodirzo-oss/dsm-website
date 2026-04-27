"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SpringBookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const baseUrl =
    "https://dsmcleaningsolutions.bookingkoala.com/leads/form/lead-form?embed=true";
  const [iframeSrc, setIframeSrc] = useState(baseUrl);

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

    // Load iFrame resizer
    const script = document.createElement("script");
    script.src =
      "https://dsmcleaningsolutions.bookingkoala.com/resources/iframeResizer.min.js";
    script.defer = true;
    document.body.appendChild(script);

    // Listen for BookingKoala form submission and fire Meta Lead event then redirect
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
        // Fire Meta Pixel Lead event
        if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).fbq) {
          (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", "Lead");
        }
        router.push("/quote-thank-you");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("message", handleMessage);
    };
  }, [router, searchParams]);

  return (
    <div className="w-full">
      <iframe
        id="iFrameResizer1"
        style={{ border: 0 }}
        src={iframeSrc}
        height="1000px"
        width="100%"
        scrolling="yes"
        title="Get Your Spring Cleaning Quote — DSM Cleaning Solutions"
      />
    </div>
  );
}
