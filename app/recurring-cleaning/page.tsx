import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { REAL_REVIEWS, reviewAttribution } from "@/lib/realReviews";
import LeadForm from "@/components/LeadForm";
import { StickyMobileBar } from "@/components/HomepageScrollWidgets";
import Offer from "@/components/Offer";
import {
  STANDARD_CLEANING_TIERS,
  FREQUENCY_DISCOUNTS,
  recurringDiscountedPrice,
  formatPrice,
} from "@/lib/pricing";
import { DEEP_OFFER, REVIEW_COUNT, REVIEW_RATING } from "@/lib/siteConstants";
import { STANDARD_CHECKLIST } from "@/lib/standardChecklist";
import { PRICE_LOCK_FAQ, RECURRING_CITY_LIST } from "@/lib/recurringCities";

// Regenerate at most hourly so the FALL75 line in section 7 drops out of the
// HTML on its own after it ends. <Offer> also hides it in the browser at the
// deadline. See components/Offer.tsx.
export const revalidate = 3600;

// Every recurring price on this page comes from these two tiers plus
// recurringDiscountedPrice(), never a hand-typed number.
const SMALLEST_TIER = STANDARD_CLEANING_TIERS.find((t) => t.beds === "1 bed")!;
const TYPICAL_TIER = STANDARD_CLEANING_TIERS.find((t) => t.beds === "3 bed")!;

const SMALLEST_WEEKLY = formatPrice(recurringDiscountedPrice(SMALLEST_TIER, "weekly"));
const TYPICAL_ONE_TIME = formatPrice(TYPICAL_TIER.price);
const TYPICAL_WEEKLY = formatPrice(recurringDiscountedPrice(TYPICAL_TIER, "weekly"));
const TYPICAL_BIWEEKLY = formatPrice(recurringDiscountedPrice(TYPICAL_TIER, "biweekly"));
const TYPICAL_MONTHLY = formatPrice(recurringDiscountedPrice(TYPICAL_TIER, "monthly"));

const PAGE_TITLE = "Maid Service Romeoville IL | Weekly & Biweekly Cleaning | DSM";
// 149 characters as rendered with the current REVIEW_RATING/REVIEW_COUNT.
const PAGE_DESCRIPTION = `Weekly, every two weeks or monthly house cleaning in Romeoville and nearby suburbs. Save up to 20% per visit. Rated ${REVIEW_RATING} by ${REVIEW_COUNT} neighbors. Book online.`;

export const metadata: Metadata = {
  // absolute: the root layout's title template would otherwise add the brand twice.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "https://www.dsmcleaningsolutions.com/recurring-cleaning",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://www.dsmcleaningsolutions.com/recurring-cleaning",
  },
  twitter: { card: "summary_large_image", images: ["/hero-image.png"] },
};

const scheduleCards = [
  {
    id: "weekly" as const,
    name: "Weekly",
    tagline: "20% off every visit",
    price: TYPICAL_WEEKLY,
  },
  {
    id: "biweekly" as const,
    name: "Every Two Weeks",
    tagline: "15% off every visit",
    price: TYPICAL_BIWEEKLY,
    popular: true,
  },
  {
    id: "monthly" as const,
    name: "Monthly",
    tagline: "10% off every visit",
    price: TYPICAL_MONTHLY,
  },
];

// Shared with the recurring city pages. See lib/standardChecklist.ts.
const checklist = STANDARD_CHECKLIST;

// Text is identical between the visible FAQ and the FAQPage schema below, so
// this is the one place either ever gets written.
const faqs = [
  {
    q: "How much does recurring cleaning cost?",
    a: `A typical 3 bed / 2 bath home runs ${TYPICAL_ONE_TIME} one-time. On a recurring plan that same home is ${TYPICAL_WEEKLY} weekly (20% off), ${TYPICAL_BIWEEKLY} every two weeks (15% off), or ${TYPICAL_MONTHLY} monthly (10% off). Smaller homes start lower. A 1 bed / 1 bath home runs ${SMALLEST_WEEKLY} on a weekly plan. Your exact price depends on bedrooms, bathrooms and square footage, and we confirm it before you book.`,
  },
  {
    q: "Do I need a deep clean before starting recurring cleaning?",
    a: "No. You can start recurring cleaning right away, no deep clean required. That said, if your home hasn't been professionally cleaned in a while, a lot of our clients start with one deep clean to get everything to the same baseline, then switch to recurring to keep it there. We'll tell you honestly if we think your home would benefit from that.",
  },
  {
    q: "What's the difference between recurring and deep cleaning?",
    a: "Recurring cleaning follows the checklist above every visit. It's built to keep a clean home clean. Deep cleaning goes further: it gets inside the oven, scrubs bathroom grout, wipes baseboards and door frames, and vacuums under and behind furniture. If your home hasn't had that kind of attention in a while, deep cleaning is the better starting point.",
  },
  {
    q: "Can I skip or reschedule a visit?",
    a: "Yes, anytime. There's no fee to skip, cancel or reschedule. Just let us know as early as you can so we can adjust the schedule. If you skip enough visits that your actual frequency drops (say, from weekly to monthly), your price adjusts to match the new frequency.",
  },
  // Shared with the recurring city pages, so the wording is identical everywhere.
  PRICE_LOCK_FAQ,
  {
    q: "What areas do you serve?",
    a: "We're based in Romeoville and clean homes across the southwest and west suburbs: Romeoville, Plainfield, Naperville, Bolingbrook, Joliet, Lockport, Shorewood, New Lenox, Lemont, Homer Glen, Westmont, Hinsdale, Oak Brook, Downers Grove, Burr Ridge, and Minooka. Not sure if we come to you? Give us a call at (815) 246-2113.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Recurring House Cleaning",
  serviceType: "Recurring house cleaning",
  areaServed: [
    { "@type": "City", name: "Romeoville", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Plainfield", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Bolingbrook", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Naperville", containedInPlace: { "@type": "State", name: "Illinois" } },
  ],
  provider: { "@id": "https://www.dsmcleaningsolutions.com/#business" },
  description:
    "Weekly, every two weeks, or monthly house cleaning for homes in Romeoville, Plainfield, Bolingbrook, Naperville, and surrounding communities. Same checklist every visit, with recurring discounts up to 20%.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: String(SMALLEST_TIER.price),
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: String(recurringDiscountedPrice(SMALLEST_TIER, "weekly")),
      maxPrice: String(TYPICAL_TIER.price),
      priceCurrency: "USD",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Recurring Cleaning", item: "https://www.dsmcleaningsolutions.com/recurring-cleaning" },
  ],
};

export default function RecurringCleaningPage() {
  // Anchor review: Thomas Cheng's review, found by name rather than a
  // hardcoded array index so this can't silently point at the wrong review
  // if REAL_REVIEWS is ever reordered.
  const anchorReview = REAL_REVIEWS.find((r) => r.name === "Thomas Cheng")!;

  // Three-review block. Donna Slas's review is sourced from
  // evidence/reviews/Screenshot (1471).png and shown in full, since it is
  // already short.
  const threeReviews = [
    REAL_REVIEWS.find((r) => r.name === "Donna Slas")!,
    REAL_REVIEWS.find((r) => r.name === "Courtney Horne")!,
    REAL_REVIEWS.find((r) => r.name === "Jae Mac")!,
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. HERO. Same full-bleed photo + dark overlay pattern as /deep-cleaning
          and the homepage. H1, rating, subhead, price anchor, then CTAs — all
          verified to clear the fold at 390px width. */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/work-photos/kitchen-island-marble-long.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 60%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/45 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <nav className="text-sm mb-6 opacity-80 flex items-center justify-center gap-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Recurring Cleaning</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Romeoville Maid Service That Keeps Your Home Clean Every Week
          </h1>

          {/* Rating. Directly under the H1, per spec. Counts come from
              lib/realReviews.ts, never hardcoded. */}
          <Link href="/reviews" className="inline-flex items-center justify-center gap-2 mb-4 hover:underline">
            <span style={{ color: "#FFA869" }} className="text-xl">★★★★★</span>
            <span className="text-sm opacity-90">{REVIEW_RATING} · {REVIEW_COUNT} Google Reviews</span>
          </Link>

          <p className="text-lg md:text-xl font-semibold mb-3 opacity-95 max-w-2xl mx-auto">
            Pick weekly, every two weeks, or monthly. Same checklist every visit, and you save up to 20%.
          </p>

          <p className="text-sm md:text-base mb-6 opacity-80">
            Most 3 bedroom homes run {TYPICAL_BIWEEKLY} every two weeks.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/book"
              style={{ backgroundColor: "#E8721C" }}
              className="text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Book Online
            </Link>
            <a
              href="#quote-form"
              className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-green-900 transition"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR. Every claim here is made elsewhere on the site already:
          since 2020 and 500+ clients on /about and the homepage, insured and
          the satisfaction guarantee on every service page, 5.0 from
          REVIEW_RATING. */}
      <section className="bg-white border-b py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-gray-700 font-medium">
          <span>✅ Family Owned Since 2020</span>
          <span>✅ 500+ Local Clients</span>
          <span>✅ Fully Insured &amp; Bonded</span>
          <span>✅ {REVIEW_RATING} Stars</span>
          <span>✅ 48-Hour Satisfaction Guarantee</span>
          <span>✅ Price Locked 12 Months</span>
        </div>
      </section>

      {/* 3. ANCHOR REVIEW. Text-only, matching /deep-cleaning's own anchor
          review treatment. Verbatim from lib/realReviews.ts. */}
      <section className="py-10 px-4" style={{ backgroundColor: "#FFF4EE" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ color: "#E8622A" }} className="text-5xl font-serif leading-none mb-3">&ldquo;</p>
          <p className="text-gray-800 text-lg leading-relaxed italic mb-4">
            {anchorReview.text}
          </p>
          <p className="font-semibold text-gray-700">{reviewAttribution(anchorReview)}</p>
          <div className="flex justify-center mt-2">
            <span style={{ color: "#FFA869" }}>★★★★★</span>
          </div>
        </div>
      </section>

      {/* 4. PICK YOUR SCHEDULE */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
            Pick Your Schedule
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            Every plan follows the exact same checklist. The only difference is how often we come.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {scheduleCards.map((card) => (
              <div
                key={card.id}
                className={`bg-gray-50 rounded-2xl border p-6 text-center relative ${
                  card.popular ? "border-brand-green shadow-md" : "border-gray-100"
                }`}
              >
                {card.popular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide"
                    style={{ backgroundColor: "#E8622A" }}
                  >
                    Most Popular
                  </span>
                )}
                <h3 className="font-bold text-lg text-gray-900 mb-1">{card.name}</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: "#E8622A" }}>{card.tagline}</p>
                <p className="text-3xl font-bold text-gray-900 mb-1">{card.price}</p>
                <p className="text-xs text-gray-500 mb-5">typical 3 bed / 2 bath home</p>
                <Link
                  href="/book"
                  className="block w-full text-white font-bold py-3 rounded-lg hover:opacity-90 transition"
                  style={{ backgroundColor: "#E8721C" }}
                >
                  Book This Schedule
                </Link>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed text-sm">
              One-time price for the same home is {TYPICAL_ONE_TIME}. Smaller homes start at {SMALLEST_WEEKLY} a visit on a weekly plan. Your exact price depends on bedrooms, bathrooms and square footage, and you&apos;ll see it before you book.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm mt-2 font-semibold">
              The discount starts with your very first clean.
            </p>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE CLEAN EVERY VISIT. Details/summary per room, same
          collapsible pattern as the FAQ below, so it's tap-friendly at any
          width. First room open by default so the page shows real content
          without a tap. */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
            What We Clean Every Visit
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            The same checklist, every time. Tap a room to see the full list.
          </p>

          <div className="space-y-4 mb-8">
            {checklist.map((section, i) => {
              const photos: Record<string, { src: string; alt: string }[]> = {
                "All Rooms": [
                  { src: "/work-photos/living-room-fireplace-hardwood-1200.jpg", alt: "Furnished living room with a stone fireplace and hardwood floor after recurring house cleaning" },
                  { src: "/work-photos/bedroom-furnished-natural-light-1200.jpg", alt: "Furnished bedroom with natural light after recurring house cleaning" },
                  { src: "/work-photos/dining-room-table-chairs-1200.jpg", alt: "Furnished dining room with a set table and bright natural light after recurring house cleaning" },
                ],
                Kitchen: [
                  { src: "/work-photos/kitchen-dark-cabinets-island-1200.jpg", alt: "Furnished kitchen with a dark island and hardwood floor after recurring house cleaning" },
                  { src: "/work-photos/living-kitchen-combo-hardwood-1200.jpg", alt: "Furnished living and kitchen combo with a glossy hardwood floor after recurring house cleaning" },
                ],
                Bathrooms: [
                  { src: "/work-photos/bathroom-double-vanity-white-2-1200.jpg", alt: "Bathroom double vanity with a tidy countertop and fresh towels after recurring house cleaning" },
                ],
              };
              const roomPhotos = photos[section.room];
              return (
                <details key={section.room} open={i === 0} className="bg-white rounded-xl border border-gray-200 group">
                  <summary className="px-5 py-4 font-bold text-gray-800 cursor-pointer hover:bg-gray-50 list-none flex justify-between items-center rounded-xl">
                    {section.room}
                    <span className="text-gray-400 ml-4 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <div className={`grid grid-cols-1 ${roomPhotos ? "lg:grid-cols-2" : ""} gap-5 items-start`}>
                      <ul className="space-y-1.5">
                        {section.items.map((item) => (
                          <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-green-600 mt-0.5">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {roomPhotos && (
                        <div className={`grid ${roomPhotos.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-3`}>
                          {roomPhotos.map((p) => (
                            <div key={p.src} className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
                              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </details>
              );
            })}
          </div>

          <div className="text-center bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-gray-700 mb-4">
              Want the inside of the oven and fridge, baseboards and the deep stuff done too? That&apos;s our deep clean.
            </p>
            <Link
              href="/deep-cleaning"
              className="inline-block font-bold px-6 py-3 rounded-lg border-2 transition hover:bg-orange-50"
              style={{ borderColor: "#E8622A", color: "#E8622A" }}
            >
              See What&apos;s Included in a Deep Clean
            </Link>
          </div>
        </div>
      </section>

      {/* 6. MID-PAGE CTA */}
      <section className="py-14 px-4" style={{ backgroundColor: "#E8622A" }}>
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to stop spending your weekends cleaning?
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/book"
              className="bg-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
              style={{ color: "#E8622A" }}
            >
              Book Online
            </Link>
            <a
              href="#quote-form"
              className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* 7. START WITH A DEEP CLEAN? Gated on isOfferActive() so the offer
          mention disappears with no code change once OFFERS.deep.endDate
          passes, same pattern as /deep-cleaning. */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Start With a Deep Clean?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You don&apos;t need a deep clean to start. But if it&apos;s been a while, a lot of our clients start with one, then we keep it that way.
          </p>
          <Offer service="deep">
            <p className="text-sm font-bold mb-4" style={{ color: "#E8622A" }}>
              ${DEEP_OFFER.discount} off your first deep clean, plus {DEEP_OFFER.bonus}, through {DEEP_OFFER.endDate}.
            </p>
          </Offer>
          <Link
            href="/deep-cleaning"
            className="inline-block font-bold px-6 py-3 rounded-lg hover:opacity-90 transition text-white"
            style={{ backgroundColor: "#E8721C" }}
          >
            Learn About Deep Cleaning
          </Link>
        </div>
      </section>

      {/* 8. THREE REVIEW BLOCK. */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            What Our Clients Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {threeReviews.map((review) => (
              <div key={review.name} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex mb-3">
                  <span style={{ color: "#FFA869" }}>★★★★★</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-600">{reviewAttribution(review)}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://g.co/kgs/KFkN2MX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 font-semibold hover:underline text-sm"
            >
              Read all {REVIEW_COUNT} reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* 9. FAQ. Text here must stay byte-identical to the `faqs` array used
          in faqSchema above. */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-lg">
                <summary className="px-5 py-4 font-semibold text-gray-800 cursor-pointer hover:bg-gray-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-gray-400 ml-4">+</span>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                  {faq.q === "What areas do you serve?" && (
                    <>
                      {" "}
                      <Link href="/service-areas" className="text-brand-green font-semibold hover:underline">
                        See all service areas →
                      </Link>
                    </>
                  )}
                </div>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600 text-center">
            Helpful guides:{" "}
            <Link href="/standard-vs-deep-cleaning" className="text-brand-green font-semibold hover:underline">standard vs. deep cleaning</Link>, and{" "}
            <Link href="/blog/first-time-hiring-cleaning-service-bolingbrook" className="text-brand-green font-semibold hover:underline">what to expect the first time you hire a cleaner</Link>.
          </p>
        </div>
      </section>

      {/* 10. FINAL CTA + FORM. Service preselected to Recurring Cleaning. */}
      <section
        id="quote-form"
        style={{ background: "linear-gradient(135deg, #E8721C 0%, #c45a10 100%)" }}
        className="py-16 px-4"
      >
        <div className="max-w-2xl mx-auto text-center text-white mb-8">
          <h2 className="text-2xl font-bold mb-2">Get a Free Recurring Cleaning Quote</h2>
          <p className="opacity-90">
            Serving Romeoville, Plainfield, Bolingbrook, Naperville, and surrounding communities. Fill out the form and we will get back to you fast.
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-1">
              <span style={{ color: "#E8622A" }} className="text-2xl">★★★★★</span>
            </div>
            <p className="text-sm text-gray-500">{REVIEW_RATING} average from {REVIEW_COUNT} Google reviews</p>
          </div>
          <LeadForm defaultService="Recurring Cleaning" />
        </div>
      </section>

      {/* 11. NEARBY CITIES. Same pattern as /deep-cleaning's city pill list,
          linking to each city's general page. Romeoville has no separate
          general page — /romeoville-il redirects to the homepage — so it
          points straight there. */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-lg font-bold text-gray-700 mb-6">Maid Service Near You</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {RECURRING_CITY_LIST.map((c) => (
              <Link key={c.key} href={c.path} className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">{`Maid Service in ${c.name}`}</Link>
            ))}
          </div>
          <h2 className="text-lg font-bold text-gray-700 mb-6">Recurring Cleaning by City</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Romeoville IL</Link>
            <Link href="/plainfield-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Plainfield IL</Link>
            <Link href="/bolingbrook-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Bolingbrook IL</Link>
            <Link href="/naperville-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Naperville IL</Link>
            <Link href="/joliet-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Joliet IL</Link>
            <Link href="/lockport-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Lockport IL</Link>
            <Link href="/lemont-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Lemont IL</Link>
            <Link href="/westmont-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Westmont IL</Link>
            <Link href="/shorewood-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Shorewood IL</Link>
            <Link href="/homer-glen-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Homer Glen IL</Link>
            <Link href="/new-lenox-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">New Lenox IL</Link>
            <Link href="/minooka-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Minooka IL</Link>
            <Link href="/hinsdale-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Hinsdale IL</Link>
            <Link href="/oak-brook-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Oak Brook IL</Link>
            <Link href="/downers-grove-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Downers Grove IL</Link>
            <Link href="/burr-ridge-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Burr Ridge IL</Link>
          </div>
        </div>
      </section>

      {/* Sticky mobile "Book Now" bar, fades in after 300px scroll. Points at
          this page's own quote form, matching /deep-cleaning. */}
      <StickyMobileBar bookHref="#quote-form" />
    </>
  );
}
