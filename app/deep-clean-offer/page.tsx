import type { Metadata } from "next";
import { REAL_REVIEWS, REVIEW_COUNT, pickReviews, reviewAttribution, reviewByName } from "@/lib/realReviews";
import { SERVICE_CITIES } from "@/lib/siteConstants";
import Image from "next/image";
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
          SECTION 1 — Hero, then the booking form right under it
          On phones the top of the booking form must show without scrolling.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-gray-900 to-slate-800 pt-4 pb-5 md:pt-14 md:pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-white md:text-center">
          <a
            href="#book"
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
                      starts at {ENTRY_PRICE}, and you see your exact price before you book.
                    </>
                  }
                >
                  Get the house caught up before the holidays. Book by{" "}
                  {DEEP_OFFER.endDate} with code {DEEP_OFFER.code} and get{" "}
                  {OFF} off plus {DEEP_OFFER.bonus}, a ${DEEP_OFFER.bonusValue} value.
                </Offer>
              </p>

          {/* Trust bullets. Desktop here; on phones they sit under the booking form. */}
          <ul className="hidden md:flex md:flex-wrap md:justify-center md:gap-x-6 md:gap-y-2 md:mt-6">
            {trustBullets.map((b) => (
              <li key={b.text} className="flex items-start gap-1.5 text-sm text-gray-300">
                <span className="flex-shrink-0">{b.icon}</span>
                <span>{b.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Booking form: the same BookingKoala embed as /book, unchanged. A
          finished booking lands on /thank-you, which records the booking. */}
      <section id="book" className="bg-white pt-4 pb-10 md:pt-10 md:pb-16 scroll-mt-2">
        <div className="max-w-3xl mx-auto px-3 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-2 text-sm mb-1.5">
            <span className="text-amber-400 tracking-wide">★★★★★</span>
            <span className="font-bold text-gray-900">5.0 · {REVIEW_COUNT} Google Reviews</span>
            <span className="hidden sm:inline text-gray-500">· Insured &amp; Bonded · Family-Owned</span>
          </div>
          {/* Widget hints. It won't show dates until a ZIP is entered, and its
              total is the pre-coupon price. */}
          <div className="text-center mb-3 md:mb-5 space-y-0.5 text-xs md:text-sm text-gray-500 leading-snug">
            <p>Enter your ZIP code first. The calendar won&apos;t show dates until you do.</p>
            <Offer service="deep">
              <p>
                The total shows before your discount. Enter{" "}
                <strong className="text-gray-700">{DEEP_OFFER.code}</strong> at checkout and {OFF} comes
                off. Your oven is included free.
              </p>
            </Offer>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white relative">
            <div
              id="bk-skeleton"
              className="absolute inset-0 bg-white z-10 pointer-events-none"
              style={{ minHeight: "1800px" }}
            >
              <div className="p-6 space-y-4 animate-pulse">
                <div className="h-6 bg-gray-100 rounded-full w-1/2 mx-auto" />
                <div className="h-4 bg-gray-100 rounded-full w-3/4 mx-auto" />
                <div className="h-10 bg-gray-100 rounded-xl w-full mt-4" />
                <div className="h-10 bg-gray-100 rounded-xl w-full" />
                <div className="h-10 bg-gray-100 rounded-xl w-3/4" />
                <div className="h-12 bg-orange-100 rounded-xl w-full mt-6" />
                <p className="text-center text-sm text-gray-400 pt-2">Loading booking form…</p>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `<iframe
                  src="https://dsmcleaningsolutions.bookingkoala.com/booknow?embed=true"
                  title="Book your deep clean with DSM Cleaning Solutions"
                  style="border:none;height:1800px;display:block"
                  width="100%"
                  scrolling="auto"
                  onload="var s=document.getElementById('bk-skeleton');if(s)s.style.display='none';"
                ></iframe>`,
              }}
            />
          </div>

          {/* Phone copy of the trust bullets */}
          <ul className="grid grid-cols-2 gap-2 mt-5 md:hidden">
            {trustBullets.map((b) => (
              <li key={b.text} className="flex items-start gap-1.5 text-xs text-gray-600">
                <span className="flex-shrink-0">{b.icon}</span>
                <span>{b.text}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-500 text-center mt-6">
            📞 Rather talk to a real person?{" "}
            <a href="tel:8152462113" className="text-gray-800 font-semibold hover:underline">
              (815) 246-2113
            </a>{" "}
            · Mon to Sun, 7am to 9pm
          </p>
        </div>
      </section>

      {/* Deep cleaning video, under the hero so the form stays first on phones */}
      <ServiceVideoSection
        video={DEEP_VIDEO}
        kicker="Deep Cleaning"
        heading="What a Deep Clean Adds, in Under a Minute"
        cta={{
          href: "#book",
          label: (
            <Offer service="deep" fallback="Book My Deep Clean">
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
              href="#book"
              className="inline-flex items-center justify-center font-bold text-white rounded-full py-3.5 px-8 text-base transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "#E8721C",
                boxShadow: "0 4px 15px rgba(232,114,28,0.35)",
              }}
            >
              <Offer service="deep" fallback="Book My Deep Clean →">
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
              href="#book"
              className="text-orange-600 font-semibold hover:underline text-sm"
            >
              <Offer service="deep" fallback="Ready? Book your deep clean →">
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
              href="#book"
              className="inline-flex items-center justify-center font-bold text-white rounded-full py-3.5 px-8 text-base transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "#E8721C",
                boxShadow: "0 4px 15px rgba(232,114,28,0.35)",
              }}
            >
              <Offer service="deep" fallback="Book My Deep Clean →">
                Claim Your {OFF} Off →
              </Offer>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 6 — Scarcity + button back to the booking form
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 pb-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Deep Clean Spots Fill Up Every Week
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We personally handle every job, so there are only so many deep
              clean spots each week across {TOWNS_LINE}. Pick your
              day in the booking form while there&apos;s still room this week.
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

          <div className="max-w-xl mx-auto text-center">
            <a
              href="#book"
              className="inline-flex items-center justify-center font-bold text-white rounded-full py-4 px-9 text-base transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#E8622A", boxShadow: "0 8px 30px rgba(232,98,42,0.35)" }}
            >
              <Offer service="deep" fallback="Book My Deep Clean →">
                Book Now and Save {OFF} →
              </Offer>
            </a>
            <p className="text-sm text-gray-400 mt-4">
              📞 Prefer to call?{" "}
              <a href="tel:8152462113" className="text-gray-500 hover:text-gray-700 font-medium">
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
                a: "Most homes take 3 to 5 hours depending on size and condition.",
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
                a: "It depends on the week, since our spots fill up. Enter your ZIP code in the booking form to see the open dates.",
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
