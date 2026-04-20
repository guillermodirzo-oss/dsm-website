"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ThankYouClient() {
  useEffect(() => {
    // Single event_id shared by browser pixel + server CAPI for deduplication
    const eventId = crypto.randomUUID();

    // Read Facebook cookies for better match quality
    const fbp = document.cookie.match(/_fbp=([^;]+)/)?.[1];
    const fbc = document.cookie.match(/_fbc=([^;]+)/)?.[1];

    // ── Browser-side: Facebook Pixel Purchase ───────────────────────────────
    // eventID passed as 4th arg so Meta can deduplicate against the server event
    if (typeof (window as any).fbq === "function") {
      (window as any).fbq(
        "track",
        "Purchase",
        {
          content_name: "Booking Completed",
          content_category: "House Cleaning",
          value: 200,
          currency: "USD",
        },
        { eventID: eventId }
      );
    }

    // ── Browser-side: GA4 purchase ──────────────────────────────────────────
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "purchase", {
        event_category: "booking",
        event_label: "booking_completed",
        value: 200,
        currency: "USD",
      });
    }

    // ── Server-side: CAPI Purchase via Stape CAPIG ──────────────────────────
    // Fire-and-forget — if this fails the browser pixel event above still counted
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName: "Purchase",
        eventId,
        eventSourceUrl: window.location.href,
        eventData: {
          value: 200,
          currency: "USD",
          content_name: "Booking Completed",
          content_category: "House Cleaning",
        },
        userData: { fbp, fbc },
      }),
    }).catch(() => {
      // Silent — never block the user experience
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

          {/* Top accent bar */}
          <div className="h-2 bg-gradient-to-r from-brand-green to-brand-green-light" />

          <div className="px-8 py-10 text-center">

            {/* Checkmark icon */}
            <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              You&apos;re All Booked!
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Thank you for choosing DSM Cleaning Solutions. We will be in touch shortly to confirm your appointment details.
            </p>

            {/* What happens next */}
            <div className="text-left mb-10">
              <h2 className="text-lg font-bold text-gray-900 mb-5 text-center">What Happens Next?</h2>
              <div className="space-y-4">
                {[
                  { step: "1", text: "You will receive a confirmation email within 1 business day" },
                  { step: "2", text: "Our team will reach out to confirm your appointment time" },
                  { step: "3", text: "Sit back and relax — we will handle the rest!" },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white text-sm font-bold">
                      {step}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gray-50 rounded-2xl px-6 py-5 mb-8 text-center">
              <p className="text-sm text-gray-500 mb-1">Have questions? Call us:</p>
              <a href="tel:+18152462113" className="text-2xl font-bold text-brand-green hover:text-orange-500 transition-colors">
                (815) 246-2113
              </a>
            </div>

            {/* Star review */}
            <div className="bg-orange-50 border border-orange-100 rounded-2xl px-6 py-5 mb-8 text-center">
              <div className="flex justify-center gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs font-semibold text-orange-600 mb-2">★★★★★ 5.0 · 47 reviews</p>
              <p className="text-sm text-gray-600 italic mb-1">
                &ldquo;DSM did an amazing job on our home. Highly recommend!&rdquo;
              </p>
              <p className="text-xs text-gray-400 font-medium">— Sarah M., Romeoville</p>
            </div>

            {/* Back link */}
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-green transition-colors font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to DSM Cleaning Solutions
            </Link>

          </div>
        </div>

        {/* Logo wordmark below card */}
        <p className="text-center text-xs text-gray-400 mt-6">
          DSM Cleaning Solutions · Romeoville, IL · (815) 246-2113
        </p>

      </div>
    </div>
  );
}
