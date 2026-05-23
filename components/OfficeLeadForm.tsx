"use client";

import { useState } from "react";
import { submitOfficeLeadToHubspot } from "@/lib/submitOfficeLeadToHubspot";

type Step1 = {
  firstName: string;
  email: string;
  phone: string;
  businessName: string;
  serviceType: string;
};

type Step2 = {
  numberOfRooms: string;
  squareFootage: string;
  numberOfRestrooms: string;
  floorType: string;
};

type Step3 = {
  cleaningFrequency: string;
  preferredTime: string;
  additionalNotes: string;
};

const SERVICE_OPTIONS = [
  "Office Cleaning",
  "Commercial Cleaning",
  "Post-Construction Cleaning",
  "Medical / Professional Office Cleaning",
];

const ROOM_OPTIONS = ["1–5", "6–10", "11–20", "21–50", "50+"];

const SQFT_OPTIONS = [
  "Under 1,000 sq ft",
  "1,000 – 2,499 sq ft",
  "2,500 – 4,999 sq ft",
  "5,000 – 9,999 sq ft",
  "10,000+ sq ft",
];

const RESTROOM_OPTIONS = ["1", "2", "3", "4", "5+"];

const FLOOR_OPTIONS = ["Carpet", "Hardwood / Laminate", "Tile", "Mixed"];

const FREQUENCY_OPTIONS = ["One-Time", "Weekly", "Bi-Weekly", "Monthly"];

const TIME_OPTIONS = [
  "Before Business Hours (before 8am)",
  "During Business Hours",
  "After Business Hours (after 6pm)",
  "Weekends Only",
];

export default function OfficeLeadForm() {
  const [step, setStep] = useState(1);
  const [step1, setStep1] = useState<Step1>({
    firstName: "",
    email: "",
    phone: "",
    businessName: "",
    serviceType: "",
  });
  const [step2, setStep2] = useState<Step2>({
    numberOfRooms: "",
    squareFootage: "",
    numberOfRestrooms: "",
    floorType: "",
  });
  const [step3, setStep3] = useState<Step3>({
    cleaningFrequency: "",
    preferredTime: "",
    additionalNotes: "",
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

  function handleStep3Change(e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) {
    setStep3((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleNext1(e: React.FormEvent) {
    e.preventDefault();
    // Fire Step 1 immediately — creates the HubSpot contact even if they abandon
    submitOfficeLeadToHubspot({
      firstName: step1.firstName,
      email: step1.email,
      phone: step1.phone,
      businessName: step1.businessName,
      serviceType: step1.serviceType,
      numberOfRooms: "",
      squareFootage: "",
      numberOfRestrooms: "",
      floorType: "",
      cleaningFrequency: "",
      preferredTime: "",
      additionalNotes: "",
    }).catch(() => {}); // fire-and-forget
    setStep(2);
  }

  function handleNext2(e: React.FormEvent) {
    e.preventDefault();
    setStep(3);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      await submitOfficeLeadToHubspot({
        firstName: step1.firstName,
        email: step1.email,
        phone: step1.phone,
        businessName: step1.businessName,
        serviceType: step1.serviceType,
        numberOfRooms: step2.numberOfRooms,
        squareFootage: step2.squareFootage,
        numberOfRestrooms: step2.numberOfRestrooms,
        floorType: step2.floorType,
        cleaningFrequency: step3.cleaningFrequency,
        preferredTime: step3.preferredTime,
        additionalNotes: step3.additionalNotes,
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
          Thank you! We&apos;ll contact you within 24 hours to schedule a walkthrough of your space.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-brand-green">Step {step} of 3</span>
          <span className="text-xs text-gray-400">
            {step === 1 ? "Your info" : step === 2 ? "Space details" : "Scheduling"}
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <div
            className="bg-brand-green h-1.5 rounded-full transition-all duration-500"
            style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
          />
        </div>
      </div>

      {/* Step 1 — Contact + Business Info */}
      {step === 1 && (
        <form onSubmit={handleNext1} noValidate>
          <div className="space-y-4">
            <div>
              <label htmlFor="of-firstname" className={labelClass}>First Name</label>
              <input
                id="of-firstname"
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
                placeholder="Jane"
                value={step1.firstName}
                onChange={handleStep1Change}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="of-email" className={labelClass}>Email Address</label>
              <input
                id="of-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jane@yourbusiness.com"
                value={step1.email}
                onChange={handleStep1Change}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="of-phone" className={labelClass}>Phone Number</label>
              <input
                id="of-phone"
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
              <label htmlFor="of-business" className={labelClass}>Business Name</label>
              <input
                id="of-business"
                name="businessName"
                type="text"
                required
                autoComplete="organization"
                placeholder="Acme Corp"
                value={step1.businessName}
                onChange={handleStep1Change}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="of-service" className={labelClass}>Service Type</label>
              <select
                id="of-service"
                name="serviceType"
                required
                value={step1.serviceType}
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
      )}

      {/* Step 2 — Space Details */}
      {step === 2 && (
        <form onSubmit={handleNext2} noValidate>
          <div className="space-y-4">
            <div>
              <label htmlFor="of-rooms" className={labelClass}>Number of Rooms / Offices</label>
              <select
                id="of-rooms"
                name="numberOfRooms"
                required
                value={step2.numberOfRooms}
                onChange={handleStep2Change}
                className={inputClass}
              >
                <option value="" disabled>Select number of rooms…</option>
                {ROOM_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="of-sqft" className={labelClass}>Approximate Square Footage</label>
              <select
                id="of-sqft"
                name="squareFootage"
                required
                value={step2.squareFootage}
                onChange={handleStep2Change}
                className={inputClass}
              >
                <option value="" disabled>Select square footage…</option>
                {SQFT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="of-restrooms" className={labelClass}>Number of Restrooms</label>
              <select
                id="of-restrooms"
                name="numberOfRestrooms"
                required
                value={step2.numberOfRestrooms}
                onChange={handleStep2Change}
                className={inputClass}
              >
                <option value="" disabled>Select number of restrooms…</option>
                {RESTROOM_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="of-floor" className={labelClass}>Floor Type</label>
              <select
                id="of-floor"
                name="floorType"
                required
                value={step2.floorType}
                onChange={handleStep2Change}
                className={inputClass}
              >
                <option value="" disabled>Select floor type…</option>
                {FLOOR_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
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
              className="flex-1 font-bold text-white rounded-full py-3.5 px-6 text-base transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#E8721C", boxShadow: "0 4px 15px rgba(232,114,28,0.35)" }}
            >
              Next →
            </button>
          </div>
        </form>
      )}

      {/* Step 3 — Scheduling Preference */}
      {step === 3 && (
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-4">
            <div>
              <label htmlFor="of-frequency" className={labelClass}>Cleaning Frequency</label>
              <select
                id="of-frequency"
                name="cleaningFrequency"
                required
                value={step3.cleaningFrequency}
                onChange={handleStep3Change}
                className={inputClass}
              >
                <option value="" disabled>Select frequency…</option>
                {FREQUENCY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="of-time" className={labelClass}>Preferred Cleaning Time</label>
              <select
                id="of-time"
                name="preferredTime"
                required
                value={step3.preferredTime}
                onChange={handleStep3Change}
                className={inputClass}
              >
                <option value="" disabled>Select preferred time…</option>
                {TIME_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="of-notes" className={labelClass}>
                Additional Notes <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                id="of-notes"
                name="additionalNotes"
                rows={3}
                maxLength={500}
                placeholder="Any special requirements, access instructions, or questions…"
                value={step3.additionalNotes}
                onChange={handleStep3Change}
                className={`${inputClass} resize-none`}
              />
              <p className="text-xs text-gray-400 mt-1 text-right">
                {step3.additionalNotes.length}/500
              </p>
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
              onClick={() => setStep(2)}
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
              {submitting ? "Sending…" : "Request My Free Quote →"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
