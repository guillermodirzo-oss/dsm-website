"use client";

import { useState } from "react";
import { submitToHubspot } from "@/lib/submitToHubspot";

type Step1 = {
  firstname: string;
  email: string;
  phone: string;
  service_type: string;
};

type Step2 = {
  bedrooms: string;
  bathrooms: string;
  square_footage: string;
};

const SERVICE_OPTIONS = [
  "Standard Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out Cleaning",
];

const BEDROOM_OPTIONS = ["1", "2", "3", "4", "5", "6+"];

const BATHROOM_OPTIONS = ["1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5+"];

const SQFT_OPTIONS = [
  "Under 1,000 sq ft",
  "1,000 – 1,500 sq ft",
  "1,500 – 2,000 sq ft",
  "2,000 – 2,500 sq ft",
  "2,500 – 3,000 sq ft",
  "3,000 – 3,500 sq ft",
  "3,500 – 4,000 sq ft",
  "4,000 – 4,500 sq ft",
  "4,500 – 5,000 sq ft",
  "5,000+ sq ft",
];

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [step1, setStep1] = useState<Step1>({
    firstname: "",
    email: "",
    phone: "",
    service_type: "",
  });
  const [step2, setStep2] = useState<Step2>({
    bedrooms: "",
    bathrooms: "",
    square_footage: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function handleStep1Change(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setStep1((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleStep2Change(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setStep2((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleNext(e: React.FormEvent) {
    e.preventDefault();
    // Fire Step 1 data immediately — HubSpot can create the contact even if they abandon Step 2
    submitToHubspot({
      firstname: step1.firstname,
      email: step1.email,
      phone: step1.phone,
      mobilephone: step1.phone,
      service_type: step1.service_type,
    }).catch(() => {}); // fire-and-forget, never block the UI
    setStep(2);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      await submitToHubspot({
        firstname: step1.firstname,
        email: step1.email,
        phone: step1.phone,
        mobilephone: step1.phone,
        service_type: step1.service_type,
        bedrooms: step2.bedrooms,
        bathrooms: step2.bathrooms,
        square_footage: step2.square_footage,
      });
      setSuccess(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition placeholder-gray-400 bg-white";

  const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5";

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">You&apos;re all set!</h3>
        <p className="text-gray-600 text-sm max-w-xs">
          Thank you! We&apos;ll reach out within 24 hours with your free quote.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-brand-green">Step {step} of 2</span>
          <span className="text-xs text-gray-400">{step === 1 ? "Your info" : "Home details"}</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <div
            className="bg-brand-green h-1.5 rounded-full transition-all duration-500"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleNext} noValidate>
          <div className="space-y-4">
            <div>
              <label htmlFor="lf-firstname" className={labelClass}>First Name</label>
              <input
                id="lf-firstname"
                name="firstname"
                type="text"
                required
                autoComplete="given-name"
                placeholder="Jane"
                value={step1.firstname}
                onChange={handleStep1Change}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="lf-email" className={labelClass}>Email Address</label>
              <input
                id="lf-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jane@example.com"
                value={step1.email}
                onChange={handleStep1Change}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="lf-phone" className={labelClass}>Phone Number</label>
              <input
                id="lf-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="(815) 000-0000"
                value={step1.phone}
                onChange={handleStep1Change}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="lf-service" className={labelClass}>Service Type</label>
              <select
                id="lf-service"
                name="service_type"
                required
                value={step1.service_type}
                onChange={handleStep1Change}
                className={inputClass}
              >
                <option value="" disabled>Select a service…</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full font-bold text-white rounded-full py-3.5 px-6 text-base transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#E8721C", boxShadow: "0 4px 15px rgba(232,114,28,0.35)" }}
          >
            Next →
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-4">
            <div>
              <label htmlFor="lf-bedrooms" className={labelClass}>Bedrooms</label>
              <select
                id="lf-bedrooms"
                name="bedrooms"
                required
                value={step2.bedrooms}
                onChange={handleStep2Change}
                className={inputClass}
              >
                <option value="" disabled>Select bedrooms…</option>
                {BEDROOM_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="lf-bathrooms" className={labelClass}>Bathrooms</label>
              <select
                id="lf-bathrooms"
                name="bathrooms"
                required
                value={step2.bathrooms}
                onChange={handleStep2Change}
                className={inputClass}
              >
                <option value="" disabled>Select bathrooms…</option>
                {BATHROOM_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="lf-sqft" className={labelClass}>Square Footage</label>
              <select
                id="lf-sqft"
                name="square_footage"
                required
                value={step2.square_footage}
                onChange={handleStep2Change}
                className={inputClass}
              >
                <option value="" disabled>Select square footage…</option>
                {SQFT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {error && (
            <p className="mt-4 text-sm text-red-600 text-center">
              Something went wrong. Please call us at{" "}
              <a href="tel:+18152462113" className="font-semibold underline">(815) 246-2113</a>.
            </p>
          )}

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-shrink-0 font-semibold text-gray-600 rounded-full py-3.5 px-5 text-sm border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
            >
              ← Back
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 font-bold text-white rounded-full py-3.5 px-6 text-base transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: "#E8721C", boxShadow: "0 4px 15px rgba(232,114,28,0.35)" }}
            >
              {submitting ? "Sending…" : "Get My Free Quote →"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
