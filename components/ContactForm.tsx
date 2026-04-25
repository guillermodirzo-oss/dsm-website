"use client";

import { useState } from "react";
import { fireLeadEvent } from "@/lib/pixelHelpers";

interface ContactFormProps {
  dark?: boolean;
}

export default function ContactForm({ dark = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "";
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value ?? "";

    // Fire Meta Pixel + CAPI Lead event with email + phone for advanced matching.
    // fireLeadEvent hashes email browser-side (for fbq) and sends raw to our
    // server (for CAPI) — no plain-text PII ever reaches Meta's servers.
    fireLeadEvent(email, phone).catch(() => {
      // Pixel failures must never block form submission
    });

    // TODO: Replace this simulation with a real form submission endpoint
    // e.g. Formspree, Netlify Forms, or a custom /api/contact route.
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`rounded-xl p-8 text-center ${dark ? "bg-white/10 text-white" : "bg-brand-green-50 border border-brand-green-100"}`}>
        <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-xl font-bold mb-2 ${dark ? "text-white" : "text-gray-900"}`}>Thank You!</h3>
        <p className={dark ? "text-white/80" : "text-gray-600"}>
          We received your request and will contact you within 1 business day. Or call us now at{" "}
          <a href="tel:+18152462113" className="font-bold text-brand-green hover:underline">(815) 246-2113</a>.
        </p>
      </div>
    );
  }

  const inputClass = `w-full px-4 py-3 rounded-lg border ${dark ? "bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white" : "bg-white border-gray-300 text-gray-900 focus:border-brand-green"} focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-colors`;
  const labelClass = `block text-sm font-medium mb-1.5 ${dark ? "text-white" : "text-gray-700"}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="(815) 555-0100"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="jane@example.com"
          className={inputClass}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="zip" className={labelClass}>Zip Code *</label>
          <input
            type="text"
            id="zip"
            name="zip"
            required
            placeholder="60446"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>Service Type *</label>
          <select id="service" name="service" required className={inputClass}>
            <option value="">Select a service...</option>
            <option value="standard">Standard House Cleaning</option>
            <option value="deep">Deep Cleaning</option>
            <option value="move-out">Move-Out / Move-In Cleaning</option>
            <option value="recurring">Recurring / Maid Service</option>
            <option value="eco">Eco-Friendly Green Cleaning</option>
            <option value="apartment">Apartment Cleaning</option>
            <option value="post-construction">Post-Construction Cleaning</option>
            <option value="airbnb">Airbnb / Short-Term Rental Cleaning</option>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message (optional)</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your home — number of bedrooms, bathrooms, any special requests..."
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary btn-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Get My Free Quote"}
      </button>
      <p className={`text-xs text-center ${dark ? "text-white/60" : "text-gray-500"}`}>
        No obligation. We respond within 1 business day. Or call{" "}
        <a href="tel:+18152462113" className={`font-semibold ${dark ? "text-white" : "text-brand-green"} hover:underline`}>(815) 246-2113</a>.
      </p>
    </form>
  );
}
