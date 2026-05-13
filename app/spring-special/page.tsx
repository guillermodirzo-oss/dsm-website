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
const COUPON = "SPRING75";
const NAVY = "#1B2B5E";
const ORANGE = "#E8721C";

export default function SpringSpecialPage() {
  return (
    <>
      {/* ─── GLOBAL STYLES ─── */}
      <style>{`
        /* Hide BookingKoala branding */
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
        /* CLS: reserve image space before images load */
        .img-1-1 { aspect-ratio: 1 / 1; }
        /* CLS: prevent font layout shift */
        @font-face { font-display: swap; }
        /* Non-interactive trust elements */
        .trust-static {
          cursor: default;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          pointer-events: none;
        }
        /* Mobile hero height cap — keeps form in first viewport */
        @media (max-width: 1023px) {
          .mobile-hero { max-height: 200px; overflow: visible; }
          .mobile-hero h1 { font-size: 1.25rem; line-height: 1.3; margin-bottom: 4px; }
          .mobile-hero .badge { margin-bottom: 4px; }
          .mobile-hero .offer-pill { margin-bottom: 6px; font-size: 0.875rem; padding: 6px 14px; }
          .mobile-hero .trust-line { font-size: 0.75rem; }
        }
      `}</style>

      {/* ════════════════════════════════════════
          SECTION 1 — STICKY TOP HEADER (~60px)
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
            <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: ORANGE }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {PHONE}
          </a>
          <span className="font-semibold text-xs sm:text-sm whitespace-nowrap" style={{ color: ORANGE }}>
            47 Five-Star Reviews <span className="text-yellow-400">★★★★★</span>
          </span>
        </div>
      </div>

      {/* ════════════════════════════════════════
          SECTION 2 — HERO
          Mobile: compact strip, max ~200px tall
            order: badge → h1 → offer pill → trust line
          Desktop: left column, full size
      ════════════════════════════════════════ */}
      <section className="bg-white pt-3 pb-0 lg:py-10 px-4">
        <div className="max-w-5xl mx-auto">
          {/*
            DOM order: A (hero) → B (form) → C (image)
            Mobile (single col): A stacks above B — hero then form ✓
            Desktop (2-col grid): A col-1/row-1, B col-2/rows-1-2, C col-1/row-2
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 items-start">

            {/* ── A: Hero text ── */}
            <div className="mobile-hero order-1 lg:order-none">

              {/* Urgency badge */}
              <div
                className="badge inline-flex items-center gap-2 rounded-full px-3 py-1 lg:px-4 lg:py-1.5 border"
                style={{ backgroundColor: "rgba(232,114,28,0.08)", borderColor: "rgba(232,114,28,0.35)" }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ backgroundColor: ORANGE }} />
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: ORANGE }}>
                  May Only — Limited Spots Available
                </span>
              </div>

              {/* H1 */}
              <h1 className="font-bold text-gray-900 leading-tight tracking-tight lg:text-4xl xl:text-5xl mt-1 lg:mt-3 lg:mb-2">
                Get Your Home{" "}
                <span style={{ color: ORANGE }}>Spring Deep Cleaned</span>
              </h1>

              {/*
                OFFER PILL — real anchor link.
                Uses data-scroll-form attribute so the injected <script> at the
                bottom of the page attaches a proper getElementById scrollIntoView
                handler. This bypasses any Next.js router interception of href="#...".
              */}
              <a
                href="#quote-form"
                data-scroll-form="true"
                className="offer-pill inline-block rounded-full text-white font-bold cursor-pointer mt-1 lg:mt-0 lg:text-lg lg:px-5 lg:py-2 lg:mb-3"
                style={{ backgroundColor: ORANGE }}
              >
                🎉 $75 OFF + Free Oven Cleaning This May
              </a>

              {/* Trust line — ONE line on mobile */}
              <p className="trust-line text-gray-500 mt-1 lg:mt-0 lg:text-base">
                Family-owned &bull; Insured &bull; 47 Five-Star Reviews
              </p>
              {/* Extended service area — desktop only */}
              <p className="hidden lg:block text-gray-500 text-sm mt-1">
                Serving Romeoville, Plainfield, Bolingbrook, Lockport, Shorewood, Crest Hill &amp; suburbs
              </p>
            </div>

            {/* ── B: QUOTE FORM ──
                id="quote-form" — this is the scroll target for ALL anchor links.
                On mobile: immediately below the compact hero.
                On desktop: right column, spans 2 rows.
            ── */}
            <div id="quote-form" className="order-2 lg:order-none lg:row-span-2 pt-2 lg:pt-0">

              {/*
                "Get Your Free Quote" is a plain <h2>, NOT a button or anchor.
                Shown on mobile only — on desktop the orange card header serves this role.
              */}
              <h2 className="lg:hidden text-lg font-bold text-center text-gray-900 mb-2">
                Get Your Free Quote
              </h2>

              {/* Form card */}
              <div
                className="bg-white rounded-3xl overflow-hidden border border-gray-100"
                style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }}
              >
                {/* Orange sub-header — desktop only (on mobile the h2 above replaces this) */}
                <div className="hidden lg:block px-6 py-4 text-center" style={{ backgroundColor: ORANGE }}>
                  <p className="text-white font-bold text-lg">Get Your Free Quote</p>
                  <p className="text-orange-100 text-sm mt-1">Fill out your info to lock in the $75 discount</p>
                </div>

                {/* BookingKoala iframe — min-height reserves space to prevent CLS */}
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
              <p className="text-center mt-3">
                <a
                  href="https://www.dsmcleaningsolutions.com/book"
                  className="underline text-gray-400 hover:text-gray-600 transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  Prefer to book directly? Book online instantly →
                </a>
              </p>
            </div>

            {/* ── C: Image + trust bullets ──
                Hidden on mobile — decorative, adds no conversion value.
                Desktop: left column, row 2 (below hero text).
            ── */}
            <div className="order-3 lg:order-none hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-6 img-1-1">
                <Image
                  src="/spring-ad-hero.png"
                  alt="DSM Cleaning Solutions — $75 Off Spring Deep Cleaning in Romeoville, Plainfield & suburbs"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "✓ Family-Owned Business",
                  "✓ Fully Insured & Bonded",
                  "✓ Eco-Friendly Products",
                  "✓ 48-Hour Guarantee",
                ].map((item) => (
                  <div key={item} className="trust-static flex items-center gap-2 text-sm font-medium text-gray-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          EVERYTHING BELOW IS SECTION 4+
          All content below the form, on all viewports.
      ════════════════════════════════════════ */}

      {/* TRUST / CREDIBILITY BAR */}
      <section className="bg-white border-y border-gray-100 py-8 px-4 mt-4">
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

      {/* WHAT'S INCLUDED */}
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

          <div className="bg-white border border-green-200 rounded-2xl p-4 mb-7 flex items-start gap-3 max-w-2xl">
            <span className="text-2xl flex-shrink-0">🛡️</span>
            <div>
              <p className="font-bold text-gray-900 text-sm mb-1">Backed by our 48-hour satisfaction guarantee.</p>
              <p className="text-gray-500 text-sm">Not happy? We come back and make it right — no questions asked.</p>
            </div>
          </div>

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

      {/* BEFORE / AFTER */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="font-bold text-xs uppercase tracking-widest mb-2 text-center" style={{ color: ORANGE }}>
            Real Results
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 tracking-tight text-center">
            See the Difference a Deep Clean Makes
          </h2>
          <div className="max-w-xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200 img-1-1">
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

      {/* SOCIAL PROOF / REVIEWS */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="font-bold text-xs uppercase tracking-widest mb-2 text-center" style={{ color: ORANGE }}>
            Real Reviews
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 tracking-tight text-center">
            47 Families Trust DSM Cleaning Solutions
          </h2>
          <p className="trust-static text-gray-500 text-sm text-center mb-8">
            Proudly serving homeowners in Romeoville, Plainfield, Bolingbrook, Lockport, Shorewood &amp; Crest Hill
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { text: "DSM did an incredible deep clean before we listed our home for sale. Every room was spotless — I was genuinely impressed. Worth every penny.", name: "Jennifer M.", location: "Naperville, IL" },
              { text: "Used DSM for a move-out clean on my Plainfield home. Got my full security deposit back! Thorough, professional, and eco-friendly products.", name: "Mike T.", location: "Plainfield, IL" },
              { text: "I have a biweekly cleaning with DSM and couldn't be happier. Reliable, trustworthy, and my house has never looked better.", name: "Jennifer R.", location: "Naperville, IL" },
              { text: "DSM Cleaning Solutions is absolutely amazing! They transformed my home — every corner was spotless. Being a family-owned business, they truly care about quality.", name: "Sarah M.", location: "Romeoville, IL" },
            ].map((review) => (
              <div key={review.name + review.location} className="trust-static bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">&ldquo;{review.text}&rdquo;</p>
                <p className="text-gray-500 text-xs font-semibold">— {review.name}, <span className="text-gray-400">{review.location}</span></p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
            {[
              { icon: "🏠", label: "Family Owned & Operated" },
              { icon: "✓", label: "Fully Insured & Bonded" },
              { icon: "🌿", label: "Eco-Friendly Products" },
            ].map((badge) => (
              <div key={badge.label} className="trust-static rounded-2xl p-4 text-center">
                <span className="text-2xl block mb-2">{badge.icon}</span>
                <span className="text-gray-500 font-semibold text-xs leading-tight">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAVINGS BREAKDOWN */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="font-bold text-xs uppercase tracking-widest mb-2 text-center" style={{ color: ORANGE }}>
            Your Offer
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 tracking-tight text-center">
            Here&apos;s Exactly What You Save This May
          </h2>

          <div className="rounded-2xl p-6 mb-6 shadow-xl max-w-xl mx-auto" style={{ backgroundColor: NAVY }}>
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
            <div className="border-t mt-4 pt-4 flex items-center justify-between" style={{ borderColor: "rgba(147,175,212,0.25)" }}>
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

          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 text-center max-w-xl mx-auto">
            <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
              <span className="font-bold" style={{ color: ORANGE }}>This month only:</span> take $75 off your
              first deep clean plus receive a free oven cleaning.{" "}
              <span className="font-bold text-gray-900">Offer expires May 31.</span>
            </p>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
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
          STICKY MOBILE CTA BAR
          Exact inline styles per spec.
          data-scroll-form triggers JS handler below.
          Hidden on lg+ (desktop).
      ════════════════════════════════════════ */}
      <div
        className="lg:hidden"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: "12px 16px",
          background: "#e07b00",
          boxShadow: "0 -4px 20px rgba(224,123,0,0.4)",
        }}
      >
        <a
          href="#quote-form"
          data-scroll-form="true"
          style={{
            display: "block",
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
            textDecoration: "none",
            padding: "10px 0",
          }}
        >
          Claim Your $75 Off → Get Free Quote
        </a>
      </div>
      {/* Spacer prevents content hiding behind sticky bar */}
      <div className="lg:hidden" style={{ height: "72px" }} />

      {/* MINIMAL FOOTER */}
      <footer className="bg-gray-100 py-4 px-4 border-t border-gray-200">
        <p className="text-center text-gray-500 text-xs">
          &copy; 2026 DSM Cleaning Solutions. Serving{" "}
          <Link href="/deep-cleaning-romeoville-il" className="hover:underline">Romeoville</Link>,{" "}
          <Link href="/deep-cleaning-plainfield-il" className="hover:underline">Plainfield</Link>,{" "}
          Bolingbrook, Lockport, Shorewood &amp; Crest Hill, IL. All rights reserved.
        </p>
      </footer>

      {/* ════════════════════════════════════════
          SCROLL FIX SCRIPT
          Runs client-side after hydration.
          Attaches getElementById scrollIntoView to every
          element with data-scroll-form="true".
          Bypasses Next.js router link interception completely.
      ════════════════════════════════════════ */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function () {
  function scrollToForm(e) {
    e.preventDefault();
    e.stopPropagation();
    var el = document.getElementById('quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function attachHandlers() {
    var btns = document.querySelectorAll('[data-scroll-form="true"]');
    btns.forEach(function (btn) {
      btn.addEventListener('click', scrollToForm);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachHandlers);
  } else {
    attachHandlers();
  }
})();
          `,
        }}
      />
    </>
  );
}
