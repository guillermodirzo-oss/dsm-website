"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { storeUserSignal, isValidEmail } from "@/lib/pixelHelpers";

export default function BookingForm() {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load the iFrame resizer script after component mounts
    const script = document.createElement("script");
    script.src = "https://dsmcleaningsolutions.bookingkoala.com/resources/iframeResizer.min.js";
    script.defer = true;
    document.body.appendChild(script);

    // Listen for BookingKoala form submission success and redirect to /quote-thank-you.
    // BookingKoala sends a postMessage from the iframe when the lead form is submitted.
    // NOTE: Cross-origin iframes cannot share form field values, so we capture email
    // separately via the pre-capture field above the iframe (see JSX below).
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
        // Store email one final time right before redirect so it survives
        // into the /quote-thank-you session (sessionStorage is tab-scoped).
        const emailVal = emailRef.current?.value ?? "";
        if (isValidEmail(emailVal)) {
          storeUserSignal(emailVal).catch(() => {});
        }
        router.push("/quote-thank-you");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("message", handleMessage);
    };
  }, [router]);

  // Store email as soon as the user leaves the email field (blur).
  // This means the email is captured even if they navigate away before
  // the BK iframe form is submitted.
  const handleEmailBlur = () => {
    const emailVal = emailRef.current?.value ?? "";
    if (isValidEmail(emailVal)) {
      storeUserSignal(emailVal).catch(() => {});
    }
  };

  return (
    <div className="w-full">
      {/*
        Email pre-capture field — sits above the BookingKoala iframe.
        BookingKoala collects email inside its own cross-origin iframe, which
        means our JavaScript cannot read it. This field captures the email
        BEFORE the BK form is submitted so we can pass it to the Meta Pixel
        Lead event that fires on the /quote-thank-you page.

        Styling note: we keep this visually minimal so it feels like a natural
        lead-in to the booking form below, not a duplicate input.
      */}
      <div className="px-4 pt-4 pb-3 bg-gray-50 border-b border-gray-100">
        <label
          htmlFor="bk-email-precapture"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Email address for your quote confirmation
        </label>
        <input
          ref={emailRef}
          id="bk-email-precapture"
          type="email"
          name="email"
          placeholder="you@example.com"
          onBlur={handleEmailBlur}
          autoComplete="email"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-colors"
        />
        <p className="mt-1 text-xs text-gray-500">
          We&apos;ll send your free estimate here. No spam — ever.
        </p>
      </div>

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
