"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { submitToHubspot } from "@/lib/submitToHubspot";

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

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition placeholder-gray-400 bg-white";
const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5";

export default function PlainfieldForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [firstname, setFirstname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [sqft, setSqft] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  function handleNext(e: React.FormEvent) {
    e.preventDefault();
    submitToHubspot({
      firstname,
      phone,
      mobilephone: phone,
      email,
      service_type: "Deep Cleaning",
    }).catch(() => {});
    setStep(2);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      await submitToHubspot({
        firstname,
        email,
        phone,
        mobilephone: phone,
        service_type: "Deep Cleaning",
        bedrooms,
        bathrooms,
        square_footage: sqft,
      });
      router.push("/quote-thank-you");
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full">
      {/* Progress */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-semibold text-brand-green">Step {step} of 2</span>
          <span className="text-xs text-gray-400">{step === 1 ? "Your info" : "Home details"}</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
          <div
            className="bg-brand-green h-1.5 rounded-full transition-all duration-500"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>
        {step === 1 && (
          <p className="text-xs text-gray-400">Step 2 just asks about your home — takes 30 seconds</p>
        )}
      </div>

      {step === 1 ? (
        <form onSubmit={handleNext} noValidate>
          <div className="space-y-4">
            <div>
              <label htmlFor="pf-firstname" className={labelClass}>First Name</label>
              <input
                id="pf-firstname"
                type="text"
                required
                autoComplete="given-name"
                placeholder="Jane"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="pf-phone" className={labelClass}>Phone Number</label>
              <input
                id="pf-phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="(815) 000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="pf-email" className={labelClass}>Email Address</label>
              <input
                id="pf-email"
                type="email"
                required
                autoComplete="email"
                placeholder="jane@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-xl px-4 py-3">
              <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-700">Service: <strong>Deep Cleaning</strong></span>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full font-bold text-white rounded-full py-3.5 px-6 text-base transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#E8721C", boxShadow: "0 4px 15px rgba(232,114,28,0.35)" }}
          >
            Get My Free Quote →
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-4">
            <div>
              <label htmlFor="pf-bedrooms" className={labelClass}>Bedrooms</label>
              <select
                id="pf-bedrooms"
                required
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className={inputClass}
              >
                <option value="" disabled>Select bedrooms…</option>
                {BEDROOM_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pf-bathrooms" className={labelClass}>Bathrooms</label>
              <select
                id="pf-bathrooms"
                required
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
                className={inputClass}
              >
                <option value="" disabled>Select bathrooms…</option>
                {BATHROOM_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pf-sqft" className={labelClass}>Square Footage</label>
              <select
                id="pf-sqft"
                required
                value={sqft}
                onChange={(e) => setSqft(e.target.value)}
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
