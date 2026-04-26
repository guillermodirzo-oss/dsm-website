import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Spring Cleaning Special — $75 Off",
  description:
    "Get $75 off your spring deep cleaning in Naperville, Hinsdale, Burr Ridge, Oak Brook & Downers Grove. Free oven cleaning included — a $40 value. Family-owned, fully insured. Limited April spots.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/spring-special" },
};

const PHONE = "(815) 246-2113";
const PHONE_HREF = "tel:+18152462113";
const BOOK_URL = "https://dsmcleaningsolutions.bookingkoala.com/booknow";
const COUPON = "SPRING75";

export default function SpringSpecialPage() {
  return (
    <>
      {/* ─── BOOKINGKOALA BADGE HIDE ─── */}
      <style>{`
        [class*="powered"],
        [class*="bookingkoala"],
        [class*="bk-brand"],
        [class*="powered-by"],
        img[alt*="BookingKoala"],
        img[src*="bookingkoala"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          overflow: hidden !important;
        }
      `}</style>

      {/* ─── SECTION 1: STICKY TOP BAR ─── */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm py-2 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          {/* Logo */}
          <a href="/" aria-label="DSM Cleaning Solutions — Home">
            <Image
              src="/Logo.png"
              alt="DSM Cleaning Solutions — house cleaning Plainfield and Romeoville IL"
              width={150}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>
          <a
            href={PHONE_HREF}
            className="text-gray-800 font-bold text-sm sm:text-base hover:text-orange-500 transition-colors flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {PHONE}
          </a>
          <span className="text-orange-500 font-semibold text-xs sm:text-sm whitespace-nowrap">
            38 Five-Star Reviews <span className="text-yellow-400">★★★★★</span>
          </span>
        </div>
      </div>

      {/* ─── SECTION 2: HERO ─── */}
      <section className="bg-white pt-8 pb-10 px-4 overflow-hidden">
        <div className="max-w-2xl mx-auto">

          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse flex-shrink-0" />
            <span className="text-orange-600 text-xs font-bold uppercase tracking-wider">April Only — Limited Spots Available</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-3">
            Get Your Home<br />Spring Deep Cleaned
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-orange-500 mb-4">
            $75 OFF + Free Oven Cleaning This April
          </p>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
            Family-owned &bull; Fully insured &bull; Serving Naperville, Hinsdale, Burr Ridge, Oak Brook, Downers Grove &amp; surrounding suburbs
          </p>

          {/* Coupon code display */}
          <div className="flex items-center gap-3 bg-gray-50 border border-orange-300 rounded-2xl px-4 py-3 mb-5">
            <span className="text-2xl">🎟️</span>
            <div>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-0.5">Your coupon code</p>
              <p className="text-gray-900 font-bold text-xl tracking-widest">{COUPON}</p>
            </div>
            <div className="ml-auto bg-orange-100 border border-orange-300 rounded-xl px-3 py-1">
              <span className="text-orange-600 font-bold text-sm">$75 OFF</span>
            </div>
          </div>

          {/* Single primary CTA */}
          <a
            id="claim-offer-btn"
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-xl shadow-orange-200 transition-all duration-200 w-full mb-3"
          >
            Book Now — Use Code {COUPON}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <p className="text-gray-400 text-sm text-center font-medium">⚡ Limited April spots — filling fast</p>

          {/* Hero Image */}
          <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src="/spring-ad-hero-updated.png"
              alt="DSM Cleaning Solutions — $75 Off Spring Deep Cleaning"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: OFFER VALUE BREAKDOWN ─── */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-2">What You Get</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
            A Complete Home Deep Clean — Nothing Missed
          </h2>

          {/* Change 6: Lead with value, then guarantee, then offer */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            A complete home deep clean — every room, every surface, every detail. Baseboards, inside appliances, ceiling fans, bathrooms, kitchen — nothing missed.
          </p>

          {/* Guarantee callout */}
          <div className="bg-white border border-green-200 rounded-2xl p-4 mb-6 flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🛡️</span>
            <div>
              <p className="font-bold text-gray-900 text-sm mb-1">Backed by our 48-hour satisfaction guarantee.</p>
              <p className="text-gray-500 text-sm">Not happy? We come back and make it right, no questions asked.</p>
            </div>
          </div>

          {/* Checklist */}
          <ul className="space-y-3 mb-8">
            {[
              "Full deep cleaning of your entire home",
              "Every baseboard wiped and scrubbed by hand",
              "Grout and tile detailed in every bathroom",
              "Full kitchen deep clean — inside and out",
              "Window sills, door frames, vents, light switches",
              "Bathrooms sanitized top to bottom — no shortcuts",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                <span className="text-green-500 text-lg flex-shrink-0 mt-0.5">✅</span>
                <span>{item}</span>
              </li>
            ))}
            <li className="flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-xl p-3 -mx-1">
              <span className="text-lg flex-shrink-0 mt-0.5">✅</span>
              <span className="font-bold text-gray-900 text-sm sm:text-base">
                FREE Oven Cleaning —{" "}
                <span className="text-orange-500">$40 value, added at no charge</span>
              </span>
            </li>
          </ul>

          {/* Before/After Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-8">
            <Image
              src="/spring-ad-before-after.png"
              alt="Before and After — DSM Deep Cleaning Results"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Savings breakdown box — navy accent */}
          <div className="bg-[#1e3a5f] text-white rounded-2xl p-6 mb-5 shadow-xl">
            <h3 className="font-bold text-base uppercase tracking-wider text-blue-200 mb-4">Your April Savings Breakdown</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm sm:text-base">
                <span className="text-blue-100">Deep Cleaning starting price</span>
                <span className="font-semibold text-white">from $300</span>
              </div>
              <div className="flex items-center justify-between text-sm sm:text-base">
                <span className="text-blue-100">Your April discount</span>
                <span className="font-bold text-orange-400">− $75</span>
              </div>
              <div className="flex items-center justify-between text-sm sm:text-base">
                <span className="text-blue-100">Free Oven Cleaning</span>
                <span className="font-bold text-orange-400">− $40 value</span>
              </div>
              <div className="border-t border-blue-400/40 pt-3 mt-3">
                <div className="flex items-center justify-between">
                  <span className="text-blue-200 text-xs">Your total savings</span>
                  <span className="font-bold text-orange-400 text-lg">$115+ in savings</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold text-white text-base">You pay</span>
                  <div className="text-right">
                    <span className="font-bold text-white text-2xl">from $225</span>
                    <p className="text-blue-300 text-xs">Goes lower with recurring service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon code inside breakdown box */}
            <div className="border-t border-blue-400/40 mt-4 pt-4 flex items-center justify-between">
              <div>
                <p className="text-blue-300 text-xs uppercase tracking-wider mb-1">Coupon Code</p>
                <p className="text-orange-400 font-bold text-xl tracking-widest">{COUPON}</p>
              </div>
              <span className="bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-bold px-3 py-1.5 rounded-xl">
                Apply at checkout
              </span>
            </div>
          </div>

          {/* Time-limited offer framing */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 mb-6 text-center">
            <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
              <span className="font-bold text-orange-600">This month only:</span> take $75 off your first deep clean plus receive a free oven cleaning. Use code{" "}
              <span className="font-bold tracking-widest text-orange-600">{COUPON}</span> at booking.{" "}
              <span className="font-bold text-gray-900">Offer expires April 30.</span>
            </p>
          </div>

          {/* Single CTA */}
          <a
            id="book-now-btn-2"
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-base py-4 px-6 rounded-2xl shadow-lg shadow-orange-200 transition-all duration-200 w-full"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Now — Use Code {COUPON}
          </a>
          <p className="text-center text-gray-400 text-xs mt-3">
            Prefer to call? <a href={PHONE_HREF} className="text-gray-600 font-semibold hover:text-orange-500 transition-colors">{PHONE}</a> — Mon–Sun 8am–6pm
          </p>
        </div>
      </section>

      {/* ─── SECTION 4: TRUST / REVIEWS ─── */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-2 text-center">Real Reviews</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 tracking-tight text-center">
            38 Families Trust DSM Cleaning Solutions
          </h2>
          <p className="text-gray-500 text-sm text-center mb-8">
            Proudly serving homeowners in Naperville, Hinsdale, Burr Ridge, Oak Brook &amp; Downers Grove
          </p>

          {/* Review cards */}
          <div className="space-y-4 mb-8">
            {[
              {
                text: "DSM Cleaning Solutions is absolutely amazing! They transformed my home — every corner was spotless. Being a family-owned business, they truly care about quality.",
                name: "Sarah M.",
                location: "Romeoville, IL",
              },
              {
                text: "Used DSM for a move-out clean on my Plainfield home. Got my full security deposit back! Thorough, professional, and eco-friendly products.",
                name: "Mike T.",
                location: "Plainfield, IL",
              },
              {
                text: "I have a biweekly cleaning with DSM and couldn't be happier. Reliable, trustworthy, and my house has never looked better.",
                name: "Jennifer R.",
                location: "Naperville, IL",
              },
              {
                text: "DSM did an incredible deep clean before we listed our home for sale. Every room was spotless — I was genuinely impressed. Worth every penny.",
                name: "Jennifer M.",
                location: "Naperville, IL",
              },
            ].map((review) => (
              <div key={review.name + review.location} className="bg-gray-50 rounded-2xl p-5 border border-gray-200 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">&ldquo;{review.text}&rdquo;</p>
                <p className="text-gray-500 text-xs font-semibold">
                  — {review.name}, <span className="text-gray-400">{review.location}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: "🏠", label: "Family Owned & Operated" },
              { icon: "✓", label: "Fully Insured & Bonded" },
              { icon: "🌿", label: "Eco-Friendly Products" },
            ].map((badge) => (
              <div key={badge.label} className="bg-orange-50 border border-orange-100 rounded-2xl p-4 text-center">
                <span className="text-2xl block mb-2">{badge.icon}</span>
                <span className="text-gray-700 font-semibold text-xs leading-tight">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: GUARANTEE ─── */}
      <section className="bg-[#1e3a5f] py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-xl shadow-orange-500/30">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 tracking-tight">
            Our Promise To You
          </h2>
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-5">
            If we miss anything during your deep clean, contact us within 48 hours and we will come back and re-clean
            any missed areas at <span className="text-white font-bold">absolutely no charge</span>.
            No hassle. No arguments. No excuses.
          </p>
          <p className="text-blue-300 text-sm sm:text-base leading-relaxed">
            Available across the western suburbs — Naperville, Hinsdale, Burr Ridge, Oak Brook, Downers Grove, and beyond.
          </p>
        </div>
      </section>

      {/* ─── SECTION 6: FINAL CTA ─── */}
      <section className="bg-orange-500 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight leading-tight">
            Spring doesn&apos;t wait.<br />Neither should your home.
          </h2>
          <p className="text-white/80 text-sm mb-6">
            Coupon code: <span className="font-bold tracking-widest bg-white/20 px-2 py-0.5 rounded-lg">{COUPON}</span>
          </p>
          <a
            id="book-now-btn-3"
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-bold text-lg py-4 px-8 rounded-2xl shadow-xl hover:bg-orange-50 active:scale-95 transition-all duration-200 w-full mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Now — Use Code {COUPON}
          </a>
          <div>
            <p className="text-white/80 text-sm mb-1">Prefer to call?</p>
            <a
              href={PHONE_HREF}
              className="text-2xl font-bold text-white hover:text-orange-100 transition-colors block mb-1"
            >
              {PHONE}
            </a>
            <p className="text-white/70 text-xs">Mon–Sun 8am–6pm</p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: MINIMAL FOOTER ─── */}
      <footer className="bg-gray-100 py-4 px-4 border-t border-gray-200">
        <p className="text-center text-gray-500 text-xs">
          &copy; 2026 DSM Cleaning Solutions. Serving Naperville, Plainfield, Hinsdale, Burr Ridge, Oak Brook &amp; Downers Grove, IL. All rights reserved.
        </p>
      </footer>
    </>
  );
}
