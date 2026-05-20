"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookingForm() {
  const router = useRouter();

  useEffect(() => {
    // Load the iFrame resizer script after component mounts
    const script = document.createElement("script");
    script.src = "https://dsmcleaningsolutions.bookingkoala.com/resources/iframeResizer.min.js";
    script.defer = true;
    document.body.appendChild(script);

    // Listen for BookingKoala form submission success and redirect to /quote-thank-you.
    // BookingKoala sends a postMessage from the iframe when the lead form is submitted.
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from BookingKoala
      if (event.origin !== "https://dsmcleaningsolutions.bookingkoala.com") return;
      const data = event.data;
      // Handle both string and object payloads that indicate successful submission
      if (
        data === "form_submitted" ||
        data === "success" ||
        data?.type === "success" ||
        data?.event === "formSubmitted" ||
        data?.status === "success" ||
        data?.submitted === true
      ) {
        router.push("/quote-thank-you");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      // Guard against the script being removed before cleanup runs
      // (e.g. fast navigation, React Strict Mode double-invoke in dev).
      // SpringBookingForm uses the same pattern.
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      window.removeEventListener("message", handleMessage);
    };
  }, [router]);

  return (
    <div className="w-full">
      <iframe
        id="iFrameResizer0"
        style={{ border: 0 }}
        src="https://dsmcleaningsolutions.bookingkoala.com/leads/form/lead-form?embed=true"
        height="1000px"
        width="100%"
        scrolling="yes"
        title="Book a Cleaning - DSM Cleaning Solutions"
      />
    </div>
  );
}
