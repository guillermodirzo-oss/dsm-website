import type { Metadata } from "next";
import Link from "next/link";
import { reviewAttribution, reviewByName } from "@/lib/realReviews";
import Image from "next/image";
import CityDeepCleanForm from "@/components/CityDeepCleanForm";
import { StickyMobileBar } from "@/components/HomepageScrollWidgets";
import Offer from "@/components/Offer";
import {
  DEEP_CLEANING_TIERS,
  formatPrice,
  startingPrice,
  topPrice,
  tierLabel,
} from "@/lib/pricing";
import { offerPrice } from "@/lib/offers";
import { REVIEW_COUNT, REVIEW_RATING, GOOGLE_PROFILE_URL } from "@/lib/siteConstants";
import { DEEP_OFFER } from "@/lib/offers";
import { DEEP_CHECKLIST } from "@/lib/deepChecklist";
import HeroRating from "@/components/HeroRating";
import ReviewCard from "@/components/ReviewCard";
import { FREQUENCY_DISCOUNTS, formatDiscount } from "@/lib/pricing";
import ServiceVideoSection from "@/components/ServiceVideoSection";
import { DEEP_VIDEO } from "@/lib/serviceVideos";

// Regenerate at most hourly so FALL75 drops out of the HTML on its own after
// it ends. <Offer> also hides it in the browser at the deadline. See
// components/Offer.tsx.
export const revalidate = 3600;

// "From" price and review figures come from the rate card and siteConstants,
// so the snippet can't drift from the page.
const DEEP_FROM = formatPrice(startingPrice(DEEP_CLEANING_TIERS));
const PAGE_TITLE = `Deep Cleaning Romeoville IL | From ${DEEP_FROM} | ${REVIEW_RATING} Stars`;
const WEEKLY_OFF = formatDiscount(FREQUENCY_DISCOUNTS.weekly);
const PAGE_DESCRIPTION = `Deep house cleaning in Romeoville and the southwest suburbs, from ${DEEP_FROM}. Every room done in detail. Rated ${REVIEW_RATING} by ${REVIEW_COUNT} neighbors. Book online today.`;

export const metadata: Metadata = {
  // absolute: the root layout's title template would otherwise add the brand twice.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning",
  },
  twitter: { card: "summary_large_image", images: ["/hero-image.png"] },
};

const faqs = [
  {
    q: "What does a deep cleaning include?",
    a: "We degrease the stovetop and hood vent, scrub bathroom grout, wipe baseboards, clean window sills and inside glass, dust ceiling fans, vacuum under furniture, and more. Cleaning inside the oven or inside cabinets is an add-on. Every room gets the same attention, not just the kitchen and baths.",
  },
  {
    q: "How long does a deep clean take?",
    a: "Most homes take 3 to 5 hours. Larger homes or homes that have not been deep cleaned in a while may take longer. We do not rush. We take the time to do each room right.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "You do not need to be home. Many of our clients leave a key or lockbox code. We take care of everything and lock up when we are done.",
  },
  {
    q: "How much does a deep clean cost?",
    a: `Deep cleaning starts at ${DEEP_FROM}. Your price depends on bedrooms, bathrooms and square footage. Enter your home's details in the booking form and you see your exact price before you book. There's no deposit.`,
  },
  {
    q: "Is cleaning inside the oven included?",
    a: "Inside the oven is an add-on you can pick when you book, and so are inside kitchen cabinets and eco-friendly products. Every deep clean degreases the stovetop, burners and hood.",
  },
  {
    q: "Do I need a deep clean before recurring cleaning?",
    a: "No. Many new clients start with a deep clean to get the house caught up, but it's not required. You can start with regular visits.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Deep Cleaning Services",
  serviceType: "Deep Cleaning",
  areaServed: [
    { "@type": "City", name: "Romeoville", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Plainfield", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Bolingbrook", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Naperville", containedInPlace: { "@type": "State", name: "Illinois" } },
  ],
  provider: { "@id": "https://www.dsmcleaningsolutions.com/#business" },
  description:
    "Professional deep cleaning for homes in Romeoville, Plainfield, Bolingbrook, Naperville, and surrounding communities. Includes grout scrubbing, baseboard wiping, and full room detail.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: String(startingPrice(DEEP_CLEANING_TIERS)),
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: String(startingPrice(DEEP_CLEANING_TIERS)),
      maxPrice: String(topPrice(DEEP_CLEANING_TIERS)),
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
    { "@type": "ListItem", position: 2, name: "Deep Cleaning", item: "https://www.dsmcleaningsolutions.com/deep-cleaning" },
  ],
};

// Reviews from people who booked a deep clean. Text comes from lib/realReviews.ts.
const DEEP_REVIEWS = [
  reviewByName("Courtney Horne"),
  reviewByName("Julie Gilligan"),
  reviewByName("Claire Farnsworth"),
];

// The deep cleaning checklist is shared by every deep cleaning page. See
// lib/deepChecklist.ts. Never type a checklist into this page.
const checklist = DEEP_CHECKLIST;

export default function DeepCleaningPage() {
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

      {/* HERO. Full-bleed background photo behind the text, matching the
          homepage hero pattern: fill plus a dark overlay, rather than the
          small side thumbnail this used to be. This is the only image on the
          page eager-loaded above the fold. */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/work-photos/kitchen-living-open-concept-island.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 68%" }}
        />
        {/* Same two overlays as the homepage hero: a dark gradient for text
            legibility over a busy photo, plus a faint orange tint. */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/45 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-6 pb-16 sm:py-0">
          <nav className="text-xs sm:text-sm mb-3 sm:mb-5 opacity-80 flex items-center justify-center gap-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Deep Cleaning</span>
          </nav>

          {/* Same order as the homepage hero: keyword H1 in small type, the
              outcome headline, what's included, rating, offer, booking button.
              Spacing is tight on phones so the button clears the fold at 390px. */}
          <h1 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-orange-200 mb-2 sm:mb-3">
            Deep House Cleaning in Romeoville and the Southwest Suburbs
          </h1>
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight mb-4">
            Get Your Whole House{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-400">
              Caught Up.
            </span>
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/85 mb-3 max-w-2xl mx-auto leading-relaxed">
            Grout, baseboards, door frames, the stovetop and the floor under the furniture. The spots a regular clean skips, done in one visit by a local family team.
          </p>

          <HeroRating href="/reviews" className="mb-3 sm:mb-4">{`${REVIEW_RATING} · ${REVIEW_COUNT} Google Reviews`}</HeroRating>

          {/* FALL75, gated by <Offer> so it comes down on its own when it ends. */}
          <Offer service="deep">
            <div className="mb-4 sm:mb-6">
              <Link
                href="/book"
                className="inline-block rounded-2xl bg-brand-green-darker px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg hover:underline"
              >
                {`Before the holidays: $${DEEP_OFFER.discount} off plus ${DEEP_OFFER.bonus}, a $${DEEP_OFFER.bonusValue} value. Use code `}
                <span className="font-extrabold tracking-wide">{DEEP_OFFER.code}</span>
                {` through ${DEEP_OFFER.endDate}.`}
              </Link>
            </div>
          </Offer>

          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Link
              href="/book"
              className="w-full md:w-auto inline-block font-extrabold text-base text-white text-center py-4 px-9 rounded-full active:scale-95 transition-all duration-200 shadow-2xl"
              style={{ backgroundColor: "#E8622A", boxShadow: "0 8px 30px rgba(232,98,42,0.5)" }}
            >
              See My Price &amp; Book
            </Link>
            <a href="tel:+18152462113" className="btn-outline-white text-base md:py-4 md:px-9 w-full md:w-auto">
              📞 (815) 246-2113
            </a>
          </div>

          <p className="mt-4 text-white/90 text-sm font-medium">
            No deposit. Exact price before you book. <span className="whitespace-nowrap">48-hour guarantee.</span>
          </p>

          <a href="#video" className="inline-flex items-center gap-2 mt-3 text-white font-semibold text-sm hover:underline underline-offset-4">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
              <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
            </span>
            See what a deep clean adds in 47 seconds
          </a>
        </div>
      </section>

      {/* REVIEWS UP TOP. Deep cleaning reviews only, so visitors hear from
          people who booked this exact service. No review appears twice on the
          page. */}
      <section id="reviews" className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Real Google Reviews</p>
            <h2 className="section-heading text-3xl md:text-5xl">What Deep Clean Customers Say</h2>
            <Link href="/reviews" className="inline-flex items-center justify-center gap-2 mt-3 hover:opacity-80 transition-opacity">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
              <span className="text-gray-500 font-medium">{REVIEW_RATING} average from {REVIEW_COUNT} Google reviews</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {DEEP_REVIEWS.map((review) => (
              <ReviewCard key={review.name} name={reviewAttribution(review)} text={review.text} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-brand-green font-semibold hover:underline">
              Read all {REVIEW_COUNT} reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* QUICK ANSWERS. The three questions people ask before they book:
          what's included, what it costs, and whether they need to be home. */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-3xl md:text-4xl text-center mb-8 md:mb-10">Quick Answers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">What&apos;s included?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Everything in a regular clean, plus scrubbed grout, baseboards, doors and door frames, a degreased stovetop, burners and hood, light fixtures, inside window glass, and vacuuming under and behind the furniture.
              </p>
              <a href="#checklist" className="inline-block mt-3 text-sm font-semibold text-brand-green hover:underline">See the room-by-room list →</a>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">What does it cost?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Deep cleans start at {DEEP_FROM}. Your price depends on bedrooms, bathrooms and square footage, and you see the exact total in the booking form before you book. No deposit.
              </p>
              <a href="#pricing" className="inline-block mt-3 text-sm font-semibold text-brand-green hover:underline">See example prices →</a>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Do I need to be home?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                No. Plenty of our clients leave a key or a lockbox code and come home to a clean house. We lock up when we&apos;re done.
              </p>
              <a href="/book" className="inline-block mt-3 text-sm font-semibold text-brand-green hover:underline">See my price &amp; book →</a>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO: the deep cleaning sales video (lib/serviceVideos.tsx), shared by every deep cleaning page. */}
      <ServiceVideoSection video={DEEP_VIDEO} kicker="Deep Cleaning" heading="What a Deep Clean Adds, in Under a Minute" />

      {/* ZERO RISK. Every reason it's safe to book, in one place. Each line is
          a confirmed business fact (CONTEXT.md). */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Zero Risk</p>
            <h2 className="section-heading text-3xl md:text-5xl">Booking Us Is the Easy Part</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {[
              { icon: "💵", label: "No Deposit", desc: "Pay on cleaning day by cash, check or card." },
              { icon: "🏷️", label: "Price Before You Book", desc: "You see your exact price before anything is booked." },
              { icon: "🔑", label: "No Need to Be Home", desc: "Leave a key or lockbox code. We lock up when we're done." },
              { icon: "📅", label: "Free to Reschedule", desc: "Plans change. Move your clean at no charge." },
              { icon: "🛡️", label: "Insured & Bonded", desc: "Background-checked, drug-tested team." },
              { icon: "✅", label: "48-Hour Guarantee", desc: "Something missed? Tell us within 48 hours and we come back free." },
            ].map((item) => (
              <div key={item.label} className="bg-orange-50/60 border border-orange-100 rounded-2xl p-4 md:p-6 text-center">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <p className="font-bold text-gray-900 text-sm md:text-base">{item.label}</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/book" className="btn-primary btn-lg">
              See My Price &amp; Book
            </Link>
          </div>
        </div>
      </section>

      {/* CHECKLIST. Photos sit beside the specific claim they prove instead
          of in a standalone gallery: the Kitchen card gets the cooktop and
          microwave shots, the Bathrooms card gets the grout and fixture
          shots. Bedrooms/Living Areas and Whole Home have no candidate
          photos and stay text-only. */}
      <section id="checklist" className="py-14 px-4 bg-gray-50 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
            What We Clean in Your Home
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            Every deep clean includes all of the following. Our{" "}
            <Link href="/cleaning-checklist" className="text-brand-green font-semibold hover:underline">full cleaning checklist</Link>{" "}
            compares it with standard and move-out cleaning.
          </p>

          <div className="space-y-6 mb-10">
            {/* Kitchen: checklist promises a degreased stovetop and
                inside-microwave. Cooktop and microwave photos back that up
                directly. Inside the oven is an add-on, so no oven photo. */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-3 border-b pb-2">{checklist[0].room}</h3>
                <ul className="space-y-1">
                  {checklist[0].items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src="/work-photos/gas-cooktop-grates-closeup-1200.jpg"
                    alt="Five-burner gas cooktop with clean grates on a marble countertop after a DSM Cleaning Solutions deep clean"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src="/work-photos/microwave-interior-spotless-1200.jpg"
                    alt="Microwave interior open showing a spotless cavity and clean glass tray after a DSM Cleaning Solutions deep clean"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bathrooms: checklist promises grout cleaning, which a standard
                clean skips, and polished faucets and fixtures, which a
                standard clean also does (lib/standardChecklist.ts). */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-3 border-b pb-2">{checklist[1].room}</h3>
                <ul className="space-y-1">
                  {checklist[1].items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src="/work-photos/shower-glass-tiled-closeup-1200.jpg"
                    alt="Glass-enclosed shower with mosaic tile and clean grout lines after a DSM Cleaning Solutions deep clean"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src="/work-photos/stainless-sink-basin-spotless.jpg"
                    alt="Polished faucet and spotless stainless sink basin after a DSM Cleaning Solutions deep clean"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bedrooms & Living Areas and Whole Home: no matching photo
                evidence, so these stay text-only rather than force a filler
                image in. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-3 border-b pb-2">{checklist[2].room}</h3>
                <ul className="space-y-1">
                  {checklist[2].items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-3 border-b pb-2">{checklist[3].room}</h3>
                <ul className="space-y-1">
                  {checklist[3].items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/book"
              style={{ backgroundColor: "#E8622A" }}
              className="text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition inline-block"
            >
              See My Price &amp; Book
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-14 px-4 bg-white scroll-mt-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Deep Cleaning Pricing
            </h2>
            <Offer service="deep">
              <p className="text-sm font-bold" style={{ color: "#E8622A" }}>
                ${DEEP_OFFER.discount} off every deep clean with code {DEEP_OFFER.code}, through {DEEP_OFFER.endDate}.
              </p>
            </Offer>
          </div>

          {/* Same tier ladder and struck-price treatment as /pricing, so a
              visitor never sees two different numbers for the same job. */}
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Example Prices
            </p>
            <div className="space-y-3">
              {DEEP_CLEANING_TIERS.map((tier) => {
                const label = tierLabel(tier);
                return (
                  <div key={label} className="flex items-center justify-between gap-3 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm text-gray-600 leading-tight">{label}</span>
                    {/* min-h keeps the row the same height whether or not a
                        struck price is present, so CLS stays at 0. */}
                    <span className="text-lg font-bold text-gray-900 whitespace-nowrap flex-shrink-0 min-h-[1.75rem] flex items-center gap-2">
                      <Offer service="deep" fallback={<>Starting at {formatPrice(tier.price)}</>}>
                        <s className="text-sm font-medium text-gray-400">
                          <span className="sr-only">Regular price </span>
                          {formatPrice(tier.price)}
                        </s>
                        <span style={{ color: "#E8622A" }}>
                          <span className="sr-only">Sale price </span>
                          {formatPrice(offerPrice(tier.price, "deep"))}
                        </span>
                      </Offer>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm mt-6 text-center">
            Your price depends on bedrooms, bathrooms and square footage. Enter your home in the booking form and you see the exact total before you book.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <Link href="/book" className="text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition inline-block text-center" style={{ backgroundColor: "#E8622A" }}>See My Price &amp; Book</Link>
            <a href="#quote-form" className="font-bold px-8 py-3 rounded-full border-2 transition inline-block text-center hover:bg-orange-50" style={{ borderColor: "#E8622A", color: "#E8622A" }}>Rather Get a Quote?</a>
          </div>
        </div>
      </section>

      {/* WHY DSM. A local family business, and how to keep the house caught up afterward. */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">
            Why Homeowners Around Here Choose DSM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-5">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">A Local Family Business</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  DSM is run by Guillermo and Rocío from Romeoville, not a franchise. We&apos;ve cleaned homes across Romeoville, Plainfield, Bolingbrook, Naperville and the southwest suburbs since 2020. Memo answers his own phone, so call or text him directly.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">Keep It That Way</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  After a deep clean, most of the hard work is done. Recurring visits every week, every two weeks or once a month keep it there, at up to {WEEKLY_OFF} off each visit.{" "}
                  <Link href="/recurring-cleaning" className="text-brand-green font-semibold hover:underline">See recurring cleaning</Link>
                </p>
              </div>
            </div>
            <Image
              src="/work-photos/google-post-image-cleaning-service-25.jpg"
              alt="DSM Cleaning Solutions team member cleaning a light fixture during a deep clean visit"
              width={940}
              height={788}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-xl shadow-md mx-auto w-full"
              style={{ maxWidth: "560px" }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
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
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600 text-center">
            Helpful guides:{" "}
            <Link href="/blog/how-to-prepare-your-home-for-a-deep-clean" className="text-brand-green font-semibold hover:underline">how to prepare your home for a deep clean</Link>,{" "}
            <Link href="/blog/what-is-included-in-a-deep-house-cleaning" className="text-brand-green font-semibold hover:underline">what&apos;s included in a deep house cleaning</Link>, and{" "}
            <Link href="/standard-vs-deep-cleaning" className="text-brand-green font-semibold hover:underline">standard vs. deep cleaning</Link>.
          </p>
        </div>
      </section>

      {/* FINAL CTA + FORM */}
      <section
        id="quote-form"
        style={{ background: "linear-gradient(135deg, #E8721C 0%, #c45a10 100%)" }}
        className="py-16 px-4"
      >
        <div className="max-w-2xl mx-auto text-center text-white mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Get the House Caught Up?</h2>
          <p className="opacity-90 mb-5">
            See your exact price and pick your day online. Rather talk it through first? Send the form below and we&apos;ll get back to you fast.
          </p>
          <Link
            href="/book"
            className="inline-block font-extrabold text-base py-4 px-9 rounded-full bg-white shadow-xl active:scale-95 transition-all duration-200"
            style={{ color: "#C2410C" }}
          >
            See My Price &amp; Book
          </Link>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-1">
              <span style={{ color: "#E8622A" }} className="text-2xl">★★★★★</span>
            </div>
            <p className="text-sm text-gray-500">{REVIEW_RATING} average from {REVIEW_COUNT} Google reviews</p>
          </div>
          <CityDeepCleanForm />
        </div>
      </section>

      {/* NEARBY CITIES */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-lg font-bold text-gray-700 mb-6">Deep Cleaning by City</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/deep-cleaning-plainfield-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Plainfield IL</Link>
            <Link href="/deep-cleaning-romeoville-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Romeoville IL</Link>
            <Link href="/deep-cleaning-bolingbrook-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Bolingbrook IL</Link>
            <Link href="/deep-cleaning-naperville-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Naperville IL</Link>
            <Link href="/deep-cleaning-joliet-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Joliet IL</Link>
            <Link href="/deep-cleaning-lockport-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Lockport IL</Link>
            <Link href="/deep-cleaning-lemont-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Lemont IL</Link>
            <Link href="/deep-cleaning-westmont-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Westmont IL</Link>
            <Link href="/deep-cleaning-shorewood-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Shorewood IL</Link>
            <Link href="/deep-cleaning-homer-glen-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Homer Glen IL</Link>
            <Link href="/deep-cleaning-new-lenox-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">New Lenox IL</Link>
            <Link href="/deep-cleaning-minooka-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Minooka IL</Link>
            <Link href="/deep-cleaning-hinsdale-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Hinsdale IL</Link>
            <Link href="/deep-cleaning-oak-brook-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Oak Brook IL</Link>
            <Link href="/deep-cleaning-downers-grove-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Downers Grove IL</Link>
            <Link href="/deep-cleaning-burr-ridge-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Burr Ridge IL</Link>
          </div>
        </div>
      </section>

      {/* Sticky mobile "Book Now" bar, fades in after 300px scroll, pointing at
          /book like every other booking button on the page. */}
      <StickyMobileBar />
    </>
  );
}
