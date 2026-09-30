import type { Metadata } from "next";
import { REAL_REVIEWS, REVIEW_COUNT, pickReviews, reviewAttribution } from "@/lib/realReviews";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import Offer from "@/components/Offer";
import { DEEP_OFFER } from "@/lib/siteConstants";
import { DEEP_CLEANING_TIERS, formatPrice, startingPrice } from "@/lib/pricing";
import StickyBar from "./StickyBar";
import DeepCleanChecklist from "./DeepCleanChecklist";

// Regenerate at most hourly so FALL75 drops out of the HTML on its own after
// it ends. <Offer> also hides it in the browser at the deadline. See
// components/Offer.tsx. Every offer line below has a fallback, so after the
// offer ends this reads as a plain deep cleaning page with regular prices.
export const revalidate = 3600;

const OFF = `$${DEEP_OFFER.discount}`;
const ENTRY_PRICE = formatPrice(startingPrice(DEEP_CLEANING_TIERS));

// ─── Metadata ────────────────────────────────────────────────────────────────
// No offer wording here: ad and social previews cache the title long after
// an offer ends. Offers stay in the page body, inside <Offer>.
export const metadata: Metadata = {
  title: {
    absolute: "Deep Cleaning From a Local Family Team | DSM Cleaning Solutions",
  },
  description:
    "Deep cleaning from a family-owned team in Romeoville. Inside the oven, the grout and the baseboards. Serving Plainfield, Bolingbrook, Crest Hill, Shorewood and Lockport too.",
  robots: { index: false, follow: false },
};

// ─── Static data ─────────────────────────────────────────────────────────────
const trustBullets = [
  { icon: "★", text: "5.0 Stars on Google" },
  { icon: "🏠", text: "Family-owned & based in Romeoville" },
  { icon: "✅", text: "48-Hour Satisfaction Guarantee" },
  {
    icon: "📍",
    text: "Romeoville · Plainfield · Bolingbrook · Crest Hill · Shorewood · Lockport",
  },
];

const problemCards = [
  {
    icon: "🍳",
    title: "Kitchen Grease Buildup",
    desc: "Cabinet tops, oven exterior, hood vents, and countertop surfaces collect grease all year. Regular cleaning skips them every time — and it builds up fast.",
  },
  {
    icon: "🤧",
    title: "Hidden Allergens",
    desc: "Baseboards, window sills, ceiling fans, and under furniture collect dust, pet dander, and mold that weekly visits don't reach.",
  },
  {
    icon: "🚿",
    title: "Bathroom Mineral Deposits",
    desc: "Hard water stains behind faucets, around drains, and on shower glass need the right products and technique — not just a wipe-down.",
  },
];

const regularItems: { text: string; included: boolean }[] = [
  { text: "Dust ceiling fans & remove cobwebs", included: true },
  { text: "Dust window sills & ledges", included: true },
  { text: "Wipe & clean mirrors & light switches", included: true },
  { text: "Dust blinds", included: true },
  { text: "Vacuum floors (carpet & hard surfaces)", included: true },
  { text: "Mop hard surface floors", included: true },
  { text: "Clean bathroom surfaces", included: true },
  { text: "Wipe counters", included: true },
  { text: "Inside oven", included: false },
  { text: "Baseboards hand-scrubbed", included: false },
  { text: "Door & door frames wiped", included: false },
  { text: "Interior microwave", included: false },
  { text: "Hood & light switches cleaned", included: false },
  { text: "Cabinet faces wiped", included: false },
  { text: "Bathroom grout scrubbed", included: false },
  { text: "Soap scum & mildew removal", included: false },
  { text: "Toilet area sanitized", included: false },
  { text: "Sink & fixtures polished", included: false },
];


const workPhotos = [
  {
    src: "/work-photos/shower-deep-clean-romeoville-il.jpg",
    alt: "Deep cleaned glass shower — Romeoville IL",
    caption: "Shower deep clean — Romeoville",
  },
  {
    src: "/work-photos/double-vanity-bathroom-clean-naperville-il.jpg",
    alt: "Double vanity bathroom after deep cleaning — Naperville IL",
    caption: "Master bath — Naperville",
  },
  {
    src: "/work-photos/double-sink-bathroom-deep-clean-plainfield-il.jpg",
    alt: "Double sink bathroom after deep cleaning — Plainfield IL",
    caption: "Full bathroom — Plainfield",
  },
  {
    src: "/work-photos/living-room-hardwood-floors-plainfield-il.jpg",
    alt: "Gleaming hardwood floors after professional cleaning — Plainfield IL",
    caption: "Hardwood floors — Plainfield",
  },
  {
    src: "/work-photos/master-bedroom-airbnb-cleaning-bolingbrook-il.jpg",
    alt: "Clean master bedroom — Bolingbrook IL",
    caption: "Master bedroom — Bolingbrook",
  },
  {
    src: "/work-photos/bathtub-shower-deep-clean-plainfield-il.jpg",
    alt: "Full bathroom deep clean with tub and shower — Plainfield IL",
    caption: "Bathroom deep clean — Plainfield",
  },
];

const reviews = pickReviews(3, 2);

// ─── Page ────────────────────────────────────────────────────────────────────
export default function DeepCleanOfferPage() {
  return (
    <>
      {/* ── Minimal header — logo + phone only, zero nav links ── */}
      <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <span className="font-bold text-gray-900 text-lg">
          DSM Cleaning Solutions
        </span>
        <a
          href="tel:8152462113"
          className="text-sm font-medium text-orange-600 hover:text-orange-700"
        >
          (815) 246-2113
        </a>
      </header>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — Hero (above the fold)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-gray-900 to-slate-800 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* Left column — headline + trust bullets */}
            <div className="text-white">
              {/* Pill tag — clickable anchor to first form */}
              <a
                href="#quote-form-top"
                className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 cursor-pointer hover:opacity-90 transition-opacity"
              >
                ⚡ Limited Weekly Spots — Book Now
              </a>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <Offer service="deep" fallback="Deep Cleaning From a Local Family Team">
                  {OFF} Off Your First Deep Clean
                </Offer>
              </h1>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                <Offer
                  service="deep"
                  fallback={
                    <>
                      Inside the oven, the grout and the baseboards. Deep cleaning
                      starts at {ENTRY_PRICE}, and we confirm your price before we book.
                    </>
                  }
                >
                  Book by {DEEP_OFFER.endDate} with code {DEEP_OFFER.code} and get{" "}
                  {OFF} off plus {DEEP_OFFER.bonus}, a ${DEEP_OFFER.bonusValue} value.
                </Offer>
              </p>

              {/* Trust bullets — 2-col compact grid on mobile, single col on md+ */}
              <ul className="grid grid-cols-2 gap-2 md:flex md:flex-col md:gap-3">
                {trustBullets.map((b) => (
                  <li
                    key={b.text}
                    className="flex items-start gap-1.5 text-xs md:text-sm text-gray-300"
                  >
                    <span className="flex-shrink-0">{b.icon}</span>
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column — form card */}
            <div
              id="quote-form-top"
              className="bg-white rounded-3xl shadow-2xl p-6 md:p-8"
            >
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  <Offer service="deep" fallback="Get Your Free Deep Cleaning Quote">
                    Claim Your{" "}
                    <a
                      href="#quote-form-top"
                      className="text-orange-600 hover:underline"
                    >
                      {OFF} Discount
                    </a>
                  </Offer>
                </h2>
                <p className="text-sm text-gray-500">
                  <Offer
                    service="deep"
                    fallback={<>Deep cleaning starts at {ENTRY_PRICE}. Limited spots each week.</>}
                  >
                    {OFF} off + free oven cleaning with code {DEEP_OFFER.code} through{" "}
                    {DEEP_OFFER.endDate}. Limited spots.
                  </Offer>
                </p>
              </div>
              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-1 w-full mb-4">
                <span className="bg-gray-100 text-xs text-gray-600 px-1 py-1 rounded-full flex justify-center items-center text-center">⭐ Google 5.0</span>
                <span className="bg-gray-100 text-xs text-gray-600 px-1 py-1 rounded-full flex justify-center items-center text-center">🛡️ Fully Insured</span>
                <span className="bg-gray-100 text-xs text-gray-600 px-1 py-1 rounded-full flex justify-center items-center text-center">🏠 Family-Owned</span>
              </div>
              <LeadForm defaultService="Deep Cleaning" step1Label="Free quote in 60 seconds" />
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — Reveal The Problem
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Regular Cleaning Misses More Than You Think
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              If your home hasn&apos;t had a deep clean in 6+ months — or ever
              — here&apos;s what&apos;s building up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {problemCards.map((card) => (
              <div
                key={card.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Sound familiar? That&apos;s what a deep clean fixes.
              <Offer service="deep">
                {" "}And through {DEEP_OFFER.endDate}, you can get one for{" "}
                <strong>{OFF} less plus {DEEP_OFFER.bonus}</strong>.
              </Offer>
            </p>
            <a
              href="#quote-form-bottom"
              className="inline-flex items-center justify-center font-bold text-white rounded-full py-3.5 px-8 text-base transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "#E8721C",
                boxShadow: "0 4px 15px rgba(232,114,28,0.35)",
              }}
            >
              <Offer service="deep" fallback="Get My Deep Clean Quote →">
                Fix It for{" "}
                <span className="mx-1 underline underline-offset-2">{OFF} Less</span>{" "}
                →
              </Offer>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3 — Deep Clean vs Regular Clean Comparison
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            What&apos;s Actually Included in a Deep Clean
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Regular Cleaning */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-700 text-base">
                  Regular Cleaning
                </h3>
              </div>
              <ul className="px-6 py-5 space-y-3">
                {regularItems.map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm">
                    <span
                      className={`flex-shrink-0 font-bold text-sm mt-0.5 ${
                        item.included ? "text-gray-400" : "text-red-400"
                      }`}
                    >
                      {item.included ? "✓" : "✗"}
                    </span>
                    <span
                      className={
                        item.included ? "text-gray-600" : "text-gray-400"
                      }
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DSM Deep Clean */}
            <div className="bg-white rounded-2xl border-2 border-brand-green overflow-hidden">
              <div className="bg-brand-green px-6 py-4">
                <h3 className="font-bold text-white text-base">
                  DSM Deep Clean ⭐
                </h3>
              </div>
              <DeepCleanChecklist
                ovenItem={
                  <Offer
                    service="deep"
                    fallback={<span className="font-medium text-gray-800">Inside oven</span>}
                  >
                    <span className="text-orange-600 font-semibold">
                      Inside oven, FREE through {DEEP_OFFER.endDate}
                    </span>
                  </Offer>
                }
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="#quote-form-bottom"
              className="text-orange-600 font-semibold hover:underline text-sm"
            >
              <Offer service="deep" fallback="Ready? Get your free quote →">
                Ready? Claim your{" "}
                <span className="underline underline-offset-2">{OFF} off</span> →
              </Offer>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4 — Social Proof
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            What Homeowners in Your Area Are Saying
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900 text-sm">
                    {r.name}
                  </span>
                  <span className="text-xs text-gray-400 bg-white border border-gray-200 rounded-full px-2.5 py-0.5 flex-shrink-0">
                    Google Review
                  </span>
                </div>
                <div className="text-amber-400 tracking-widest text-sm">
                  ★★★★★
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400">
            5.0 stars from {REVIEW_COUNT} Google reviews
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 5 — Real Work Photos
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Real Results from Real Homes in Your Area
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every photo below is from an actual DSM Cleaning Solutions job —
              no stock photos, no filters.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {workPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200 shadow-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 to-transparent px-3 py-3">
                  <p className="text-white text-xs font-semibold">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#quote-form-bottom"
              className="inline-flex items-center justify-center font-bold text-white rounded-full py-3.5 px-8 text-base transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "#E8721C",
                boxShadow: "0 4px 15px rgba(232,114,28,0.35)",
              }}
            >
              <Offer service="deep" fallback="Get My Free Quote →">
                Claim Your {OFF} Off →
              </Offer>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 6 — Scarcity + Second Form
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 pb-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Limit Deep Clean Bookings to Keep Quality High
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We personally handle every job and only take on 6 deep cleans per
              week across Romeoville, Plainfield, Bolingbrook, Crest Hill,
              Shorewood, and Lockport. We limit bookings to maintain quality —
              request yours to check availability for your area.
            </p>
            <p className="text-sm text-gray-400 mt-3">
              📅 Most homes are scheduled within 3–5 days of requesting.
            </p>
          </div>

          {/* Featured review above the second form. Jan Forster is index 1 in
              REAL_REVIEWS; the text is never copied into this file. */}
          <blockquote className="max-w-xl mx-auto mb-8 text-center">
            <p className="text-gray-600 italic leading-relaxed text-base">
              &ldquo;{REAL_REVIEWS[1].text}&rdquo;
            </p>
            <footer className="mt-3 text-sm font-semibold text-gray-700">
              {reviewAttribution(REAL_REVIEWS[1])}{" "}
              <span className="text-amber-400 not-italic">★★★★★</span>
              <span className="font-normal text-gray-400"> · Google Review</span>
            </footer>
          </blockquote>

          <div className="max-w-xl mx-auto">
            <div
              id="quote-form-bottom"
              className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                <Offer service="deep" fallback="Request Your Deep Clean">
                  Lock In Your{" "}
                  <a
                    href="#quote-form-bottom"
                    className="text-orange-600 hover:underline"
                  >
                    {OFF} Discount
                  </a>
                </Offer>{" "}
                Before Spots Fill Up
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                <Offer service="deep" fallback={<>Starting at {ENTRY_PRICE}</>}>
                  {OFF} Off + Free Oven Cleaning through {DEEP_OFFER.endDate}
                </Offer>{" "}
                · 48-Hour Guarantee · Family-Owned
              </p>
              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-1 w-full mb-4">
                <span className="bg-gray-100 text-xs text-gray-600 px-1 py-1 rounded-full flex justify-center items-center text-center">⭐ Google 5.0</span>
                <span className="bg-gray-100 text-xs text-gray-600 px-1 py-1 rounded-full flex justify-center items-center text-center">🛡️ Fully Insured</span>
                <span className="bg-gray-100 text-xs text-gray-600 px-1 py-1 rounded-full flex justify-center items-center text-center">🏠 Family-Owned</span>
              </div>
              <LeadForm defaultService="Deep Cleaning" step1Label="Free quote in 60 seconds" />
            </div>
            {/* Phone CTA — below second form only */}
            <p className="text-sm text-gray-400 text-center mt-3">
              📞 Prefer to call?{" "}
              <a
                href="tel:8152462113"
                className="text-gray-500 hover:text-gray-700 font-medium"
              >
                (815) 246-2113
              </a>{" "}
              · Mon to Sun, 7am to 9pm
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 7 — FAQ
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Questions Before You Book?
          </h2>
          <div className="divide-y divide-gray-200">
            {[
              {
                q: "Do I need to be home during the cleaning?",
                a: "No — many of our clients give us access and come home to a spotless house. We are fully insured and background-checked for your peace of mind.",
              },
              {
                q: "How long does a deep clean take?",
                a: "Most homes take between 3–5 hours depending on size and condition. We'll give you a better estimate when you request your quote.",
              },
              {
                q: "Are you insured?",
                a: "Yes — DSM Cleaning Solutions is fully insured. You're covered from the moment we walk in the door.",
              },
              {
                q: "What if I'm not 100% happy?",
                a: "Call us within 48 hours and we'll come back and make it right — completely free. That's our guarantee, no questions asked.",
              },
              {
                q: "How fast can I get scheduled?",
                a: "Most homes are scheduled within 3–5 days of your request. Spots fill weekly — the sooner you request, the better.",
              },
            ].map((item) => (
              <div key={item.q} className="py-4">
                <p className="font-semibold text-gray-900 mb-1">{item.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 8 — Guarantee
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-5">🛡️</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our 48-Hour Satisfaction Promise
          </h2>
          <p className="text-gray-500 leading-relaxed mb-5">
            If we miss anything during your deep clean, call us within 48 hours
            and we&apos;ll come back and make it right — completely free. No
            questions asked. That&apos;s the DSM guarantee.
          </p>
          <p className="text-sm text-gray-400">
            Proudly serving Romeoville, Plainfield, Bolingbrook, Crest Hill,
            Shorewood, and Lockport, IL
          </p>
        </div>
      </section>

      {/* ── Minimal footer — business name, phone, copyright only ── */}
      <footer className="bg-gray-900 text-white py-6 px-4 text-center text-sm">
        <div className="font-semibold mb-1">DSM Cleaning Solutions</div>
        <a
          href="tel:8152462113"
          className="text-orange-400 hover:text-orange-300"
        >
          (815) 246-2113
        </a>
        <div className="text-gray-400 mt-2">
          © 2026 DSM Cleaning Solutions · Romeoville, IL · Family-Owned
        </div>
      </footer>

      {/* Sticky mobile CTA bar. The label is gated here on the server because
          StickyBar is a client component. */}
      <StickyBar
        label={
          <Offer service="deep" fallback="Deep Cleaning · Limited Spots Each Week">
            💥 {OFF} OFF Deep Cleaning · Limited Spots
          </Offer>
        }
      />
    </>
  );
}
