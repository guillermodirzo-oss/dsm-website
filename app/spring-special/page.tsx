import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import SpringBookingForm from "@/components/SpringBookingForm";

export const metadata: Metadata = {
  title: "Spring Cleaning Special — $75 Off",
  description:
    "Get $75 off your spring deep cleaning in Romeoville, Plainfield, Bolingbrook, Lockport, Shorewood & Crest Hill. Free oven cleaning included — a $40 value. Family-owned, fully insured. Limited May spots.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/spring-special" },
  openGraph: {
    title: "Spring Cleaning Special — $75 Off | DSM Cleaning Solutions",
    description:
      "Get $75 off your spring deep cleaning in Romeoville, Plainfield, Bolingbrook, Lockport, Shorewood & Crest Hill. Free oven cleaning included — a $40 value. Limited May spots.",
    url: "https://www.dsmcleaningsolutions.com/spring-special",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "DSM Cleaning Solutions — Spring Cleaning Special $75 Off" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spring Cleaning Special — $75 Off | DSM Cleaning Solutions",
    description: "Get $75 off your spring deep cleaning + free oven cleaning in Romeoville, Plainfield & surrounding suburbs. Limited spots.",
    images: ["/hero-image.png"],
  },
};

const PHONE = "(815) 246-2113";
const PHONE_HREF = "tel:+18152462113";
const BOOK_URL = "/book";
const COUPON = "SPRING75";
const NAVY = "#1B2B5E";
const ORANGE = "#E8721C";

export default function SpringSpecialPage() {
  return (
    <>
      {/* ─── HIDE BOOKINGKOALA BRANDING + GLOBAL PAGE FIXES ─── */}
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
        /* Smooth anchor scrolling — fixes dead-click anchor links */
        html { scroll-behavior: smooth; }
        /* Prevent CLS from font loading */
        @font-face { font-display: swap; }
        /* Non-interactive trust elements — remove tappable appearance */
        .trust-static { cursor: default; user-select: none; -webkit-tap-highlight-color: transparent; pointer-events: none; }
      `}</style>

      {/* ════════════════════════════════════════
          SECTION 1 — STICKY TOP BAR (white)
      ════════════════════════════════════════ */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm py-2 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          <a href="/" aria-label="DSM Cleaning Solutions — Home">
            <Image
              src="/Logo.png"
              alt="DSM Cleaning Solutions — house cleaning in Romeoville and surrounding suburbs"
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
            <svg
              className="w-3.5 h-3.5 flex-shrink-0"
              style={{ color: ORANGE }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {PHONE}
          </a>

          <span className="font-semibold text-xs sm:text-sm whitespace-nowrap" style={{ color: ORANGE }}>
            37 Five-Star Reviews{" "}
            <span className="text-yellow-400">★★★★★</span>
          </span>
        </div>
      </div>

      {/* ════════════════════════════════════════
          SECTION 2 — HERO (two-column, white bg)
      ════════════════════════════════════════ */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          {/*
            3-column grid trick for mobile reordering:
            Div A (text)  → order-1 mobile | col-1 row-1 desktop
            Div B (form)  → order-2 mobile | col-2 rows-1-2 desktop  (Change 1)
            Div C (image) → order-3 mobile | col-1 row-2 desktop
            This puts the form above the promo image on mobile (87% of traffic).
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* ── Div A: Headline content — mobile: first, desktop: col-1/row-1 ── */}
            <div className="order-1 lg:order-none">
              {/* Urgency badge — mb reduced on mobile to pull form up */}
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-3 border"
                style={{ backgroundColor: "rgba(232,114,28,0.08)", borderColor: "rgba(232,114,28,0.35)" }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse flex-shrink-0"
                  style={{ backgroundColor: ORANGE }}
                />
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: ORANGE }}>
                  May Only — Limited Spots Available
                </span>
              </div>

              {/* Headline — tighter mb on mobile */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-2">
                Get Your Home<br />
                <span style={{ color: ORANGE }}>Spring Deep Cleaned</span>
              </h1>

              {/* Real anchor link to form — fixes dead clicks on this button-styled element */}
              <a
                href="#quote-form"
                className="inline-block px-5 py-2 rounded-full text-white font-bold text-base sm:text-lg mb-3 cursor-pointer"
                style={{ backgroundColor: ORANGE }}
              >
                🎉 $75 OFF + Free Oven Cleaning This May
              </a>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Family-owned &bull; Fully insured &bull; Serving Romeoville, Plainfield, Bolingbrook,
                Lockport, Shorewood, Crest Hill &amp; surrounding suburbs
              </p>
            </div>

            {/* ── Div B: Form — mobile: SECOND (before image), desktop: right col spans 2 rows ── */}
            {/* id="quote-form" is the scroll target for all anchor links on this page */}
            <div id="quote-form" className="order-2 lg:order-none lg:row-span-2">
              <div
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
                style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }}
              >
                {/* Form header */}
                <div className="px-6 py-4 text-center" style={{ backgroundColor: ORANGE }}>
                  <p className="text-white font-bold text-lg">Get Your Free Quote</p>
                  <p className="text-orange-100 text-sm mt-1">Fill out your info to lock in the $75 discount</p>
                </div>

                {/* BookingKoala lead form — min-height reserves space to prevent CLS */}
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center" style={{ minHeight: "520px" }}>
                      <span className="text-gray-400 text-sm">Loading form…</span>
                    </div>
                  }
                >
                  <SpringBookingForm />
                </Suspense>
              </div>

              {/* Secondary direct-booking link */}
              <p className="text-center mt-4">
                <a
                  href="https://www.dsmcleaningsolutions.com/book"
                  className="underline text-gray-400 hover:text-gray-600 transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  Prefer to book directly? Book online instantly →
                </a>
              </p>
            </div>

            {/* ── Div C: Image + trust — mobile: THIRD (after form), desktop: col-1/row-2 ── */}
            <div className="order-3 lg:order-none">
              {/* Hero image — explicit aspect-ratio prevents CLS while loading */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-6" style={{ aspectRatio: "1 / 1" }}>
                <Image
                  src="/spring-ad-hero.png"
                  alt="DSM Cleaning Solutions — $75 Off Spring Deep Cleaning in Romeoville, Plainfield & suburbs"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Trust bullets */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  "✓ Family-Owned Business",
                  "✓ Fully Insured & Bonded",
                  "✓ Eco-Friendly Products",
                  "✓ 48-Hour Guarantee",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 — TRUST / CREDIBILITY BAR
      ════════════════════════════════════════ */}
      <section className="bg-white border-y border-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: "🏠", label: "Family Owned", desc: "Local & personal service" },
              { icon: "🛡️", label: "Fully Insured", desc: "Licensed and bonded" },
              { icon: "🌿", label: "Eco-Friendly", desc: "Safe for kids & pets" },
              { icon: "✅", label: "Satisfaction Guaranteed", desc: "48-hour re-clean promise" },
            ].map((item) => (
              <div key={item.label} className="trust-static flex flex-col items-center gap-2 p-4">
                <span className="text-3xl">{item.icon}</span>
                <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 — WHAT'S INCLUDED
      ════════════════════════════════════════ */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="font-bold text-xs uppercase tracking-widest mb-2" style={{ color: ORANGE }}>
            What You Get
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
            A Complete Home Deep Clean — Nothing Missed
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
            Every room, every surface, every detail. Baseboards, inside appliances, ceiling fans,
            bathrooms, kitchen — we go where regular cleaning doesn&apos;t.
          </p>

          {/* Guarantee callout */}
          <div className="bg-white border border-green-200 rounded-2xl p-4 mb-7 flex items-start gap-3 max-w-2xl">
            <span className="text-2xl flex-shrink-0">🛡️</span>
            <div>
              <p className="font-bold text-gray-900 text-sm mb-1">Backed by our 48-hour satisfaction guarantee.</p>
              <p className="text-gray-500 text-sm">Not happy? We come back and make it right — no questions asked.</p>
            </div>
          </div>

          {/* Checklist grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-2xl">
            {[
              "Full deep cleaning of your entire home",
              "Every baseboard wiped and scrubbed by hand",
              "Grout and tile detailed in every bathroom",
              "Full kitchen deep clean — inside and out",
              "Window sills, door frames, vents, light switches",
              "Bathrooms sanitized top to bottom — no shortcuts",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                <span className="text-green-500 text-base flex-shrink-0 mt-0.5">✅</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Free oven bonus */}
          <div
            className="inline-flex items-start gap-3 rounded-2xl p-4 border max-w-2xl w-full"
            style={{ backgroundColor: "rgba(232,114,28,0.06)", borderColor: "rgba(232,114,28,0.3)" }}
          >
            <span className="text-xl flex-shrink-0 mt-0.5">✅</span>
            <span className="font-bold text-gray-900 text-sm sm:text-base">
              FREE Oven Cleaning —{" "}
              <span style={{ color: ORANGE }}>$40 value, added at no charge this May</span>
            </span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 5 — BEFORE / AFTER
      ════════════════════════════════════════ */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="font-bold text-xs uppercase tracking-widest mb-2 text-center" style={{ color: ORANGE }}>
            Real Results
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 tracking-tight text-center">
            See the Difference a Deep Clean Makes
          </h2>
          <div className="max-w-xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200" style={{ aspectRatio: "1 / 1" }}>
            <Image
              src="/spring-ad-before-after.png"
              alt="Before and After — DSM Deep Cleaning Results in Romeoville, IL"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            Real results from a DSM customer home in the Romeoville / southwest suburbs area
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 6 — SOCIAL PROOF / REVIEWS
      ════════════════════════════════════════ */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="font-bold text-xs uppercase tracking-widest mb-2 text-center" style={{ color: ORANGE }}>
            Real Reviews
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 tracking-tight text-center">
            37 Families Trust DSM Cleaning Solutions
          </h2>
          <p className="text-gray-500 text-sm text-center mb-8">
            Proudly serving homeowners in Romeoville, Plainfield, Bolingbrook, Lockport, Shorewood &amp; Crest Hill
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                text: "DSM did an incredible deep clean before we listed our home for sale. Every room was spotless — I was genuinely impressed. Worth every penny.",
                name: "Jennifer M.",
                location: "Naperville, IL",
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
                text: "DSM Cleaning Solutions is absolutely amazing! They transformed my home — every corner was spotless. Being a family-owned business, they truly care about quality.",
                name: "Sarah M.",
                location: "Romeoville, IL",
              },
            ].map((review) => (
              <div key={review.name + review.location} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
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
          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
            {[
              { icon: "🏠", label: "Family Owned & Operated" },
              { icon: "✓", label: "Fully Insured & Bonded" },
              { icon: "🌿", label: "Eco-Friendly Products" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="trust-static rounded-2xl p-4 text-center"
              >
                <span className="text-2xl block mb-2">{badge.icon}</span>
                <span className="text-gray-500 font-semibold text-xs leading-tight">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 7 — SAVINGS BREAKDOWN
      ════════════════════════════════════════ */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="font-bold text-xs uppercase tracking-widest mb-2 text-center" style={{ color: ORANGE }}>
            Your Offer
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 tracking-tight text-center">
            Here&apos;s Exactly What You Save This May
          </h2>

          {/* Savings box — keeps navy as a card element */}
          <div
            className="rounded-2xl p-6 mb-6 shadow-xl max-w-xl mx-auto"
            style={{ backgroundColor: NAVY }}
          >
            <h3 className="font-bold text-xs uppercase tracking-wider mb-4" style={{ color: "#93afd4" }}>
              Your May Savings Breakdown
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm sm:text-base">
                <span style={{ color: "#c7d9ef" }}>Deep Cleaning starting price</span>
                <span className="font-semibold text-white">from $300</span>
              </div>
              <div className="flex items-center justify-between text-sm sm:text-base">
                <span style={{ color: "#c7d9ef" }}>Your May discount</span>
                <span className="font-bold" style={{ color: ORANGE }}>− $75</span>
              </div>
              <div className="flex items-center justify-between text-sm sm:text-base">
                <span style={{ color: "#c7d9ef" }}>Free Oven Cleaning</span>
                <span className="font-bold" style={{ color: ORANGE }}>− $40 value</span>
              </div>
              <div className="border-t pt-3 mt-3" style={{ borderColor: "rgba(147,175,212,0.25)" }}>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "#93afd4" }}>Your total savings</span>
                  <span className="font-bold text-lg" style={{ color: ORANGE }}>$115+ in savings</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold text-white text-base">You pay</span>
                  <div className="text-right">
                    <span className="font-bold text-white text-2xl">from $225</span>
                    <p className="text-xs" style={{ color: "#93afd4" }}>Goes lower with recurring service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon code */}
            <div
              className="border-t mt-4 pt-4 flex items-center justify-between"
              style={{ borderColor: "rgba(147,175,212,0.25)" }}
            >
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#93afd4" }}>Coupon Code</p>
                <p className="font-bold text-xl tracking-widest" style={{ color: ORANGE }}>{COUPON}</p>
              </div>
              <span
                className="text-xs font-bold px-3 py-1.5 rounded-xl border"
                style={{ backgroundColor: "rgba(232,114,28,0.15)", borderColor: "rgba(232,114,28,0.3)", color: "#fbb97c" }}
              >
                Apply at checkout
              </span>
            </div>
          </div>

          {/* Time-limited framing */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 text-center max-w-xl mx-auto">
            <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
              <span className="font-bold" style={{ color: ORANGE }}>This month only:</span> take $75 off your
              first deep clean plus receive a free oven cleaning.{" "}
              <span className="font-bold text-gray-900">Offer expires May 31.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 8 — GUARANTEE + FINAL CTA
      ════════════════════════════════════════ */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Guarantee — trust-static prevents tap-highlight on non-interactive elements */}
          <div className="trust-static text-center mb-12">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-xl"
              style={{ backgroundColor: ORANGE, boxShadow: "0 10px 30px rgba(232,114,28,0.3)" }}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 tracking-tight">Our Promise To You</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 max-w-xl mx-auto">
              If we miss anything during your deep clean, contact us within 48 hours and we will come back and
              re-clean any missed areas at{" "}
              <span className="text-gray-900 font-bold">absolutely no charge</span>.
              No hassle. No arguments. No excuses.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Available across the southwest suburbs — Romeoville, Plainfield, Bolingbrook, Lockport, Shorewood, Crest Hill, and beyond.
            </p>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          STICKY MOBILE CTA BAR — Change 3
          87% mobile traffic; fixed bar keeps
          the offer visible at all scroll depths.
          Hidden on md+ screens (desktop).
      ════════════════════════════════════════ */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 py-3"
        style={{ backgroundColor: ORANGE, boxShadow: "0 -4px 20px rgba(232,114,28,0.35)" }}
      >
        <a
          href="#quote-form"
          className="flex items-center justify-center w-full text-white font-extrabold text-base py-3.5 rounded-2xl"
          style={{ backgroundColor: "rgba(0,0,0,0.18)" }}
        >
          Claim Your $75 Off → Book in 60 Seconds
        </a>
      </div>
      {/* Spacer so footer content isn't hidden behind the sticky bar on mobile */}
      <div className="h-20 md:hidden" />

      {/* ════════════════════════════════════════
          SECTION 9 — MINIMAL FOOTER
      ════════════════════════════════════════ */}
      <footer className="bg-gray-100 py-4 px-4 border-t border-gray-200">
        <p className="text-center text-gray-500 text-xs">
          &copy; 2026 DSM Cleaning Solutions. Serving{" "}
          <Link href="/deep-cleaning-romeoville-il" className="hover:underline">Romeoville</Link>,{" "}
          <Link href="/deep-cleaning-plainfield-il" className="hover:underline">Plainfield</Link>,{" "}
          Bolingbrook, Lockport, Shorewood &amp; Crest Hill, IL.
          All rights reserved.
        </p>
      </footer>
    </>
  );
}
