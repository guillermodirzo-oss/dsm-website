"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  getOrCreateExternalId,
  getCookie,
  getStoredRawEmail,
  getStoredHashedEmail,
  getStoredRawPhone,
} from "@/lib/pixelHelpers";

export default function QuoteThankYouClient() {
  useEffect(() => {
    // Single event_id shared by browser pixel + server CAPI for deduplication
    const eventId = crypto.randomUUID();

    // Read Facebook cookies + stable external_id for better match quality
    const fbp        = getCookie("_fbp");
    const fbc        = getCookie("_fbc");
    const externalId = getOrCreateExternalId();

    // ── Advanced matching — read email captured from BookingForm pre-capture ──
    // storeUserSignal() was called in BookingForm when the user entered their
    // email. sessionStorage survives a router.push() redirect within the same
    // tab, so the raw email is available here.
    const rawEmail    = getStoredRawEmail();   // sessionStorage — raw for CAPI
    const hashedEmail = getStoredHashedEmail(); // localStorage  — hashed for fbq
    const rawPhone    = getStoredRawPhone();    // sessionStorage — raw for CAPI

    // ── Browser-side: set advanced matching before firing the event ──────────
    if (hashedEmail && typeof (window as any).fbq === "function") {
      try {
        (window as any).fbq("setUserProperties", "604766394322878", { em: hashedEmail });
      } catch { /* ignore */ }
    }

    // ── Browser-side: Facebook Pixel Lead ───────────────────────────────────
    // eventID passed as 4th arg so Meta can deduplicate against the server event
    if (typeof (window as any).fbq === "function") {
      (window as any).fbq(
        "track",
        "Lead",
        {
          content_name: "Quote Request Submitted",
          content_category: "House Cleaning",
          value: 0,
          currency: "USD",
        },
        { eventID: eventId }
      );
      console.debug(
        "[Pixel] Lead (thank-you) | id:", eventId,
        "| em:", rawEmail ? "✓" : "✗ (not captured)",
        "| ph:", rawPhone ? "✓" : "✗"
      );
    }

    // ── Browser-side: GA4 generate_lead ─────────────────────────────────────
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "generate_lead", {
        event_category: "quote_form",
        event_label: "quote_submitted",
        value: 0,
        currency: "USD",
      });
    }

    // ── Server-side: CAPI Lead ───────────────────────────────────────────────
    // Fire-and-forget — if this fails the browser pixel event above still counted.
    // em + ph are raw values — /api/track hashes them before sending to Meta.
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName: "Lead",
        eventId,
        eventSourceUrl: window.location.href,
        eventData: {
          content_name: "Quote Request Submitted",
          content_category: "House Cleaning",
          value: 0,
          currency: "USD",
        },
        userData: {
          fbp,
          fbc,
          external_id: externalId,
          em: rawEmail  || undefined,   // raw — server hashes before sending to Meta
          ph: rawPhone  || undefined,   // raw — server normalises + hashes
        },
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

            {/* Envelope / checkmark icon */}
            <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-orange-50 border-4 border-orange-100 flex items-center justify-center">
              <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              We Got Your Request!
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Thanks for reaching out to DSM Cleaning Solutions. We will get back to you within 1 business day with your free estimate.
            </p>

            {/* What happens next */}
            <div className="text-left mb-10">
              <h2 className="text-lg font-bold text-gray-900 mb-5 text-center">What Happens Next?</h2>
              <div className="space-y-4">
                {[
                  { step: "1", text: "Our team reviews your cleaning request" },
                  { step: "2", text: "We prepare your free custom estimate" },
                  { step: "3", text: "We reach out within 1 business day to confirm details" },
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
              <p className="text-sm text-gray-500 mb-1">Need help sooner? Call us now:</p>
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
                &ldquo;Got a fast response and great price. Booked same week!&rdquo;
              </p>
              <p className="text-xs text-gray-400 font-medium">— Mike T., Plainfield</p>
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
