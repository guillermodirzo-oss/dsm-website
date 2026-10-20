import type { Metadata } from "next";
import { REAL_REVIEWS, REVIEW_COUNT, pickReviews, reviewAttribution, reviewByName } from "@/lib/realReviews";
import { SERVICE_CITIES } from "@/lib/siteConstants";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import Offer from "@/components/Offer";
import { DEEP_OFFER } from "@/lib/offers";
import { DEEP_CLEANING_TIERS, formatPrice, startingPrice } from "@/lib/pricing";
import { WORK_PHOTOS } from "@/lib/workPhotos";
import StickyBar from "./StickyBar";
import ServiceVideoSection from "@/components/ServiceVideoSection";
import { DEEP_VIDEO } from "@/lib/serviceVideos";
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
    "Deep cleaning from a family-owned team in Romeoville. The grout, the baseboards and the spots a regular clean skips. Serving Joliet, Naperville, Plainfield, Bolingbrook and nearby towns too.",
  robots: { index: false, follow: false },
};

// ─── Static data ─────────────────────────────────────────────────────────────
// Towns named on this page. Joliet and Naperville are the biggest follower
// cities on Facebook after Chicago. The "more nearby towns" count is the rest
// of SERVICE_CITIES, so it stays right when the service area changes.
const NAMED_TOWNS = ["Romeoville", "Joliet", "Naperville", "Plainfield", "Bolingbrook", "Shorewood", "Lockport"];
const MORE_TOWNS = SERVICE_CITIES.length - NAMED_TOWNS.length;
const TOWNS_LINE = `${NAMED_TOWNS.slice(0, -1).join(", ")} and ${NAMED_TOWNS[NAMED_TOWNS.length - 1]}, plus ${MORE_TOWNS} more nearby towns`;

const trustBullets = [
  { icon: "★", text: "5.0 Stars on Google" },
  { icon: "🏠", text: "Family-owned & based in Romeoville" },
  { icon: "✅", text: "48-Hour Satisfaction Guarantee" },
  {
    icon: "📍",
    text: `${NAMED_TOWNS.join(" · ")} + ${MORE_TOWNS} more nearby towns`,
  },
];

// These cards say what a regular clean skips, so they may only name things
// that are on the deep checklist and NOT on the standard checklist
// (lib/standardChecklist.ts): baseboards, doors and door frames, grout, the
// floor under and behind furniture, inside window glass, light fixtures, and
// degreasing the stovetop, hood vent and burners (lib/deepChecklist.ts). They
// never name anything DSM does not offer: no hard water or mineral deposit
// removal, nothing behind or under appliances, no walls, no caulking.
const problemCards = [
  {
    icon: "🍳",
    title: "Kitchen Grease Buildup",
    desc: "Kitchen baseboards, door frames and the doors themselves collect grease all year. Regular cleaning skips them every time, and it builds up fast.",
  },
  {
    icon: "🤧",
    title: "Hidden Allergens",
    desc: "Baseboards, door frames, and the floor under furniture collect dust and pet dander that weekly visits don't reach.",
  },
  {
    icon: "🚿",
    title: "Bathroom Grout Buildup",
    desc: "Grout lines in the shower, around the tub and across the floor hold on to soap scum and mildew. They need scrubbing by hand, not just a wipe-down.",
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
  { text: "Cabinet faces wiped", included: true },
  // The next five are on the standard checklist (lib/standardChecklist.ts),
  // so they are never shown as skipped.
  { text: "Interior microwave", included: true },
  { text: "Hood & light switches cleaned", included: true },
  { text: "Soap scum & mildew removal", included: true },
  { text: "Toilet area sanitized", included: true },
  { text: "Sink & fixtures polished", included: true },
  // Deep cleaning only.
  { text: "Baseboards hand-scrubbed", included: false },
  { text: "Door & door frames wiped", included: false },
  { text: "Bathroom grout scrubbed", included: false },
];


// Alt text comes from lib/workPhotos.ts and names no town. The captions name
// no town either: no photo is confirmed as taken in a specific town.
const workPhotos = [
  { ...WORK_PHOTOS.glassShowerGrayTile, caption: "Shower deep clean" },
  { ...WORK_PHOTOS.doubleVanityBathroom, caption: "Master bath" },
  { ...WORK_PHOTOS.greenDoubleSinkBathroom, caption: "Full bathroom" },
  { ...WORK_PHOTOS.emptyRoomGrayPlank, caption: "Hardwood floors" },
  { ...WORK_PHOTOS.furnishedBedroomBalcony, caption: "Master bedroom" },
  { ...WORK_PHOTOS.greenTubBathroom, caption: "Bathroom deep clean" },
];

// Courtney Horne leads: her review is Facebook post 10 (Nov 23), so ad and post
// visitors see the same words here. Then Thomas Cheng and Julie Gilligan. None of
// them is the featured review above the second form (Jan Forster, index 1).
const reviews = [reviewByName("Courtney Horne"), ...pickReviews(2, 2)];

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
      <section className="bg-gradient-to-br from-gray-900 to-slate-800 py-4 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-start">

            {/* Left column — headline + trust bullets */}
            <div className="text-white">
              {/* Pill tag — clickable anchor to first form */}
              <a
                href="#quote-form-top"
                className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold px-3 py-1 md:py-1.5 rounded-full mb-2 md:mb-5 cursor-pointer hover:opacity-90 transition-opacity"
              >
                ⚡ Limited Weekly Spots. Book Now
              </a>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-2 md:mb-4">
                <Offer service="deep" fallback="Deep Cleaning From a Local Family Team">
                  {OFF} Off Your Deep Clean
                </Offer>
              </h1>

              <p className="text-gray-300 text-sm md:text-lg leading-snug md:leading-relaxed md:mb-4">
                <Offer
                  service="deep"
                  fallback={
                    <>
                      The grout, the baseboards and the spots a regular clean skips. Deep cleaning
                      starts at {ENTRY_PRICE}, and we confirm your price before we book.
                    </>
                  }
                >
                  Get the house caught up before the holidays. Book by{" "}
                  {DEEP_OFFER.endDate} with code {DEEP_OFFER.code} and get{" "}
                  {OFF} off plus {DEEP_OFFER.bonus}, a ${DEEP_OFFER.bonusValue} value.
                </Offer>
              </p>

              {/* Trust bullets. Desktop only here; on phones they sit under the form so the
                  form shows without scrolling (the form card chips cover the same trust). */}
              <ul className="hidden md:flex md:flex-col md:gap-3">
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
              className="bg-white rounded-3xl shadow-2xl p-5 md:p-8"
            >
              <div className="mb-3 md:mb-4">
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
                    {OFF} off + {DEEP_OFFER.bonus} with code {DEEP_OFFER.code} through{" "}
                    {DEEP_OFFER.endDate}. Limited spots.
                  </Offer>
                </p>
              </div>
              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-1 w-full mb-3 md:mb-4">
                <span className="bg-gray-100 text-xs text-gray-600 px-1 py-1 rounded-full flex justify-center items-center text-center">⭐ Google 5.0</span>
                <span className="bg-gray-100 text-xs text-gray-600 px-1 py-1 rounded-full flex justify-center items-center text-center">🛡️ Insured &amp; Bonded</span>
                <span className="bg-gray-100 text-xs text-gray-600 px-1 py-1 rounded-full flex justify-center items-center text-center">🏠 Family-Owned</span>
              </div>
              <LeadForm defaultService="Deep Cleaning" step1Label="Free quote in 60 seconds" />
            </div>

            {/* Phone copy of the trust bullets, below the form */}
            <ul className="grid grid-cols-2 gap-2 md:hidden">
              {trustBullets.map((b) => (
                <li key={b.text} className="flex items-start gap-1.5 text-xs text-gray-300">
                  <span className="flex-shrink-0">{b.icon}</span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Deep cleaning video, under the hero so the form stays first on phones */}
      <ServiceVideoSection
        video={DEEP_VIDEO}
        kicker="Deep Cleaning"
        heading="What a Deep Clean Adds, in Under a Minute"
        cta={{
          href: "#quote-form-bottom",
          label: (
            <Offer service="deep" fallback="Get My Free Quote">
              Claim My {OFF} Off
            </Offer>
          ),
        }}
      />

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
              If your home hasn&apos;t had a deep clean in 6+ months, or ever,
              here&apos;s what&apos;s building up.
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
              {/* Inside the oven is an add-on, free only while the offer runs.
                  The whole row is inside <Offer> with no fallback, so it is
                  gone once the offer ends. */}
              <DeepCleanChecklist
                bonusRow={
                  <Offer service="deep">
                    <li className="flex items-start gap-3 text-sm">
                      <span className="flex-shrink-0 font-bold text-green-600 text-sm mt-0.5">
                        ✓
                      </span>
                      <span className="text-orange-600 font-semibold">
                        Inside oven cleaning, FREE through {DEEP_OFFER.endDate}
                      </span>
                    </li>
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
              Every photo below is from an actual DSM Cleaning Solutions job.
              No stock photos, no filters.
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
              Deep Clean Spots Fill Up Every Week
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We personally handle every job, so there are only so many deep
              clean spots each week across {TOWNS_LINE}. Request yours to check
              availability for your area.
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
                <span className="bg-gray-100 text-xs text-gray-600 px-1 py-1 rounded-full flex justify-center items-center text-center">🛡️ Insured &amp; Bonded</span>
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
                a: "No. Many of our clients give us access and come home to a spotless house. We're insured and bonded, and every cleaner is background-checked.",
              },
              {
                q: "How long does a deep clean take?",
                a: "Most homes take 3 to 5 hours depending on size and condition. We'll give you a better estimate when you request your quote.",
              },
              {
                q: "Are you insured?",
                a: "Yes. DSM Cleaning Solutions is insured and bonded, and our cleaners are background-checked and drug tested.",
              },
              {
                q: "What if you miss something?",
                a: "Tell us within 48 hours and we'll come back and re-clean it for free. That's our guarantee.",
              },
              {
                q: "How fast can I get scheduled?",
                a: "It depends on the week, since our spots fill up. Send your request and we'll tell you the first open date for your area.",
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
            and we&apos;ll come back and make it right, completely free. No
            questions asked. That&apos;s the DSM guarantee.
          </p>
          <p className="text-sm text-gray-400">
            Proudly serving {TOWNS_LINE}
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
