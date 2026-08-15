import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import ReviewCard from "@/components/ReviewCard";
import { REVIEW_COUNT, REVIEW_RATING, pickReviews, reviewAttribution } from "@/lib/realReviews";
import { StickyMobileBar } from "@/components/HomepageScrollWidgets";
import {
  MOVE_OUT_TIERS,
  OFFERS,
  isOfferActive,
  discountedPrice,
  formatPrice,
  tierLabel,
} from "@/lib/pricing";

// Re-render hourly so the MOVE75 offer expires on its own after
// OFFERS.moveout.endDate without anyone shipping a change. Same pattern as
// app/deep-cleaning/page.tsx and app/pricing/page.tsx.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Move-Out & Move-In Cleaning Romeoville",
  description:
    "Moving out? DSM Cleaning Solutions handles the deep clean so you get your security deposit back. Serving Romeoville, Plainfield & Bolingbrook.",
  keywords: [
    "move out cleaning Romeoville IL",
    "move in cleaning Romeoville IL",
    "move out cleaners Romeoville",
    "move in move out cleaning Romeoville",
    "apartment move out cleaning Romeoville",
    "empty house cleaning Romeoville",
    "rental cleaning Romeoville IL",
    "real estate cleaning Romeoville",
    "listing cleaning service Romeoville",
    "turnover cleaning Romeoville",
    "move out cleaning Plainfield IL",
  ],
  alternates: {
    canonical: "https://www.dsmcleaningsolutions.com/move-out-cleaning",
  },
  openGraph: {
    title: "Move Out Cleaning Services Plainfield IL | DSM Cleaning Solutions",
    description:
      "Moving out in Plainfield, Romeoville or Naperville IL? We'll get your deposit back. Landlord-ready clean guaranteed. 5-stars. 48-hr guarantee. Book your move-out date now.",
    url: "https://www.dsmcleaningsolutions.com/move-out-cleaning",
    siteName: "DSM Cleaning Solutions",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "DSM Cleaning Solutions, Move-Out Cleaning in Plainfield IL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Move Out Cleaning Services Plainfield IL | DSM Cleaning Solutions",
    description:
      "Move-out cleaning in Romeoville, Naperville, Plainfield & Bolingbrook. 5.0-star rated, 48-hr guarantee.",
    images: ["/hero-image.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Move Out Cleaning",
  name: "Move-Out and Move-In Cleaning Service",
  provider: {
    "@type": "LocalBusiness",
    name: "DSM Cleaning Solutions",
    telephone: "+18152462113",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Romeoville",
      addressRegion: "IL",
      postalCode: "60446",
    },
  },
  areaServed: ["Romeoville, IL", "Plainfield, IL", "Naperville, IL", "Bolingbrook, IL"],
  description:
    "Professional move-out cleaning for homes in Romeoville and surrounding areas. Designed to help tenants get their full security deposit back. 48-hour guarantee.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a move-out cleaning include in Romeoville, IL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our move-out cleaning covers every room in the empty home: deep-cleaning all kitchen appliances (inside and out), scrubbing all bathrooms, cleaning inside all cabinets and drawers, washing windows, cleaning all baseboards and door frames, vacuuming and mopping all floors, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Will a move-out cleaning help me get my security deposit back?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our move-out cleaning is specifically designed to meet landlord and property manager standards. Many of our clients receive their full security deposit back after using our service.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should I book a move-out cleaning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend booking at least 3–5 days before your move-out date to ensure availability. For last-minute needs, call us directly at (815) 246-2113 and we'll do our best to accommodate you.",
      },
    },
    {
      "@type": "Question",
      name: "Do you clean empty apartments in Romeoville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We specialize in empty apartment and house cleaning for both tenants moving out and tenants moving in. We serve Romeoville, Plainfield, Naperville, Bolingbrook, and surrounding areas.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer move-in cleaning in Plainfield, IL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We serve both Romeoville and Plainfield, IL with full move-in and move-out cleaning services. Starting fresh in a perfectly clean home is our specialty.",
      },
    },
  ],
};

const faqs = [
  {
    question: "What does a move-out cleaning include in Romeoville, IL?",
    answer:
      "Our move-out cleaning covers every room: deep-cleaning all kitchen appliances inside and out, scrubbing all bathrooms, cleaning inside all cabinets and drawers, washing windows, cleaning all baseboards and door frames, vacuuming and mopping all floors, and more.",
  },
  {
    question: "Will a move-out cleaning help me get my security deposit back?",
    answer:
      "Yes, our move-out cleaning is specifically designed to meet landlord and property manager standards. Many of our clients receive their full security deposit back after using our service.",
  },
  {
    question: "How far in advance should I book a move-out cleaning?",
    answer:
      "We recommend booking at least 3–5 days before your move-out date to ensure availability. For last-minute needs, call us directly at (815) 246-2113 and we'll do our best to accommodate you.",
  },
  {
    question: "Do you clean empty apartments in Romeoville?",
    answer:
      "Yes! We specialize in empty apartment and house cleaning for both tenants moving out and new tenants moving in. We serve Romeoville, Plainfield, Naperville, Bolingbrook, and surrounding areas.",
  },
  {
    question: "Do you offer move-in cleaning in Plainfield, IL?",
    answer:
      "Absolutely. We serve both Romeoville and Plainfield, IL with full move-in and move-out cleaning services. Starting fresh in a perfectly clean home is our specialty.",
  },
];

const moveOutChecklist = [
  {
    room: "Kitchen",
    items: [
      "Clean inside and outside of oven",
      "Wipe down stovetop, burners, and drip pans",
      "Clean inside and outside of refrigerator",
      "Clean inside microwave (inside/outside/underneath)",
      "Scrub sink and polish faucet",
      "Wipe all cabinet fronts and clean inside",
      "Clean countertops and backsplash thoroughly",
      "Clean dishwasher interior",
      "Mop and scrub floors",
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Scrub and disinfect toilet (inside/outside/base)",
      "Deep scrub shower and tub, including grout",
      "Clean and polish all faucets and fixtures",
      "Scrub and disinfect sink",
      "Clean mirrors and glass",
      "Wipe inside all cabinets and medicine chests",
      "Mop floor and clean grout lines",
      "Wipe down all tile surfaces",
    ],
  },
  {
    room: "Bedrooms & Living Areas",
    items: [
      "Clean inside all closets (walls, shelves, floors)",
      "Wipe all baseboards and door frames",
      "Clean window sills, tracks, and glass",
      "Wipe all light switches and outlet covers",
      "Clean ceiling fans if present",
      "Vacuum all carpets thoroughly",
      "Sweep and mop hard floors",
      "Remove any cobwebs",
    ],
  },
  {
    room: "Whole Home",
    items: [
      "Clean all doors and door knobs",
      "Wipe all windowsills throughout",
      "Dust and wipe all light fixtures",
      "Clean vents and registers",
      "Remove all trash and debris",
      "Final walkthrough inspection",
    ],
  },
];

export default function MoveOutCleaningPage() {
  // Evaluated at render time. With revalidate = 3600 above, the offer stops
  // showing within an hour of OFFERS.moveout.endDate passing, with no code
  // change.
  const offerLive = isOfferActive("moveout");
  const moveOutOffer = OFFERS.moveout;

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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
              { "@type": "ListItem", position: 2, name: "Move-Out / Move-In Cleaning", item: "https://www.dsmcleaningsolutions.com/move-out-cleaning" },
            ],
          }),
        }}
      />

      {/* HERO. Full-bleed background photo behind the text, same pattern as
          app/deep-cleaning/page.tsx: fill plus a dark overlay. This is the
          only image on the page eager-loaded above the fold. */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/work-photos/empty-living-room-hardwood-archway.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 55%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/45 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <nav className="text-sm mb-6 opacity-80 flex items-center justify-center gap-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Move-Out / Move-In Cleaning</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Get Your Full Deposit Back.
          </h1>
          <p className="text-lg md:text-xl font-semibold mb-5 opacity-95 max-w-2xl mx-auto">
            Move-out and move-in cleaning built to pass a landlord walkthrough. Romeoville, Plainfield, Naperville, Bolingbrook and the southwest suburbs.
          </p>

          {/* Rating. Counts come from lib/realReviews.ts, never hardcoded. */}
          <Link href="/reviews" className="inline-flex items-center justify-center gap-2 mb-5 hover:underline">
            <span style={{ color: "#FFA869" }} className="text-xl">★★★★★</span>
            <span className="text-sm opacity-90">{REVIEW_RATING} · {REVIEW_COUNT} Google Reviews</span>
          </Link>

          {/* Offer. Real anchor, not a styled div, so it is keyboard
              focusable and works without JS. Gated on isOfferActive("moveout")
              so it disappears with no code change once OFFERS.moveout.endDate
              passes. */}
          {offerLive && (
            <div className="mb-6">
              <a
                href="#quote-form"
                className="inline-block rounded-full px-5 py-2.5 text-sm sm:text-base font-bold text-white shadow-lg hover:brightness-110 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95 transition-all duration-200"
                style={{ backgroundColor: "#E8622A" }}
              >
                $75 off your move-out clean.
              </a>
              <p className="mt-2 text-sm text-white/70">
                Use code <span className="font-bold text-white">MOVE75</span> through September 30.
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#quote-form"
              style={{ backgroundColor: "#E8721C" }}
              className="text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+18152462113"
              className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-green-900 transition"
            >
              Call (815) 246-2113
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600">
            {["💰 Deposit-Back Guarantee", "🏠 Apartments & Houses", "🌿 Eco-Friendly", "🛡️ Fully Insured", "📅 Flexible Scheduling"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Who This Is For</h2>
            <p className="section-subheading mx-auto">
              Based right here in the southwest suburbs, not a national franchise. Memo answers his own phone. Call or text him directly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏠",
                title: "Renters & Tenants",
                desc: "Moving out of a rental in Romeoville or Plainfield? We clean to the standard your landlord actually checks: appliances, cabinets, closets, grout. Built to help you get your deposit back.",
              },
              {
                icon: "🔑",
                title: "Landlords & Property Managers",
                desc: "Turning a unit for new tenants? We get it market-ready fast, with a flat rate and scheduling that works around your turnover window.",
              },
              {
                icon: "🏡",
                title: "Home Buyers & Sellers",
                desc: "Moving into a new home or getting one ready to list? We clean it before you unpack, or before the first showing.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-brand-green-50 rounded-xl p-6 border border-brand-green-100 text-center">
                <span className="text-5xl block mb-4">{item.icon}</span>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Move-Out Cleaning Checklist</h2>
            <p className="section-subheading mx-auto">
              Every corner of your empty home, cleaned to landlord inspection standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moveOutChecklist.map((section) => (
              <div key={section.room} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-brand-green mb-4 border-b border-brand-green-100 pb-2">
                  {section.room}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Oven photo beside the kitchen checklist, proving the "inside
              and outside of oven" line above is real. */}
          <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h3 className="font-bold text-xl text-gray-900 mb-2">Every Kitchen Appliance, Inside and Out</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                The oven gets opened and scrubbed, not wiped down from the outside. Same for the microwave, the stovetop, and the dishwasher. It is the difference between a move-out clean that passes inspection and one that does not.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/work-photos/oven-interior-open-door-clean-1200.jpg"
                alt="Oven door open showing a spotless interior cavity and racks after a DSM Cleaning Solutions move-out clean"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-2xl shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FRIDGE PROOF. The clearest line between move-out and deep cleaning:
          deep cleaning does not open the fridge, move-out does. Placed right
          after the checklist, not buried at the bottom of the page. */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/work-photos/fridge-interior-shelves-spotless-1200.jpg"
              alt="Empty refrigerator with wiped-clean glass shelves after a DSM Cleaning Solutions move-out clean"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-2xl shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="font-bold uppercase tracking-widest text-xs mb-2" style={{ color: "#E8622A" }}>
              What Deep Cleaning Skips
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">We Clean Inside the Fridge</h2>
            <p className="text-gray-600 leading-relaxed">
              A landlord opens the fridge before anything else. Move-out cleaning covers the inside of the refrigerator, every shelf and drawer, on top of everything a deep clean already covers. It is the difference that gets your deposit back.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING. Full MOVE_OUT_TIERS ladder, struck pricing when MOVE75 is
          live, same treatment as /pricing and /deep-cleaning so a visitor
          never sees two different numbers for the same job. */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Move-Out Cleaning Pricing
            </h2>
            {offerLive && moveOutOffer && (
              <p className="text-sm font-bold" style={{ color: "#E8622A" }}>
                ${moveOutOffer.discount} off your move-out clean with code {moveOutOffer.code}, through September 30.
              </p>
            )}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Example Prices
            </p>
            <div className="space-y-3">
              {MOVE_OUT_TIERS.map((tier) => {
                const label = tierLabel(tier);
                const sale = discountedPrice(tier.price, "moveout");
                return (
                  <div key={label} className="flex items-center justify-between gap-3 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm text-gray-600 leading-tight">{label}</span>
                    {/* min-h keeps the row the same height whether or not a
                        struck price is present, so CLS stays at 0. */}
                    <span className="text-lg font-bold text-gray-900 whitespace-nowrap flex-shrink-0 min-h-[1.75rem] flex items-center gap-2">
                      {sale === null ? (
                        <>Starting at {formatPrice(tier.price)}</>
                      ) : (
                        <>
                          <s className="text-sm font-medium text-gray-400">
                            <span className="sr-only">Regular price </span>
                            {formatPrice(tier.price)}
                          </s>
                          <span style={{ color: "#E8622A" }}>
                            <span className="sr-only">Sale price </span>
                            {formatPrice(sale)}
                          </span>
                        </>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm mt-6 text-center">
            Your price depends on bedrooms, bathrooms and square footage. We confirm your exact price before booking anything. No surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <Link href="/book" className="text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition inline-block text-center" style={{ backgroundColor: "#E8622A" }}>See Your Exact Price</Link>
            <a href="#quote-form" className="font-bold px-8 py-3 rounded-lg border-2 transition inline-block text-center hover:bg-orange-50" style={{ borderColor: "#E8622A", color: "#E8622A" }}>Get a Free Quote</a>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="section-heading">Move-Out Cleaning Results</h2>
            <p className="section-subheading mx-auto">
              Real jobs across Plainfield, Romeoville, and the southwest suburbs: fresh vacuum lines, an empty closet, a spotless toilet. The details a landlord actually checks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/work-photos/empty-bedroom-gray-carpet-2-1200.jpg"
                alt="Empty bedroom with fresh vacuum lines fanning out across the carpet after a DSM Cleaning Solutions move-out clean"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/work-photos/closet-move-out-cleaning.jpg"
                alt="Empty walk-in closet with bare shelving and a polished hardwood floor after a DSM Cleaning Solutions move-out clean"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/work-photos/toilet-bowl-spotless-closeup-2.jpg"
                alt="Close-up of a spotless toilet bowl after a DSM Cleaning Solutions move-out clean"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Move-Out Cleaning Reviews</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pickReviews(3, 4).map((review) => (
              <ReviewCard
                key={review.name}
                name={reviewAttribution(review)}
                text={review.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Move-Out Cleaning FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-brand-green">
                  <h3 className="text-left pr-4">{faq.question}</h3>
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Services You May Need</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <Link href="/deep-cleaning" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning</h3>
              <p className="text-sm text-gray-600">Perfect if your new home needs a thorough first clean.</p>
            </Link>
            <Link href="/recurring-cleaning" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Recurring Maid Service</h3>
              <p className="text-sm text-gray-600">Set up a regular cleaning schedule in your new home.</p>
            </Link>
            <Link href="/plainfield-il" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Plainfield, IL Cleaning</h3>
              <p className="text-sm text-gray-600">Move-out cleaning available throughout Plainfield.</p>
            </Link>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">We Offer Move-Out Cleaning Across the Area</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/move-out-cleaning-plainfield-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Plainfield, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Plainfield, zip codes 60544 & 60585.</p>
            </Link>
            <Link href="/move-out-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Naperville, IL</h3>
              <p className="text-sm text-gray-600">Serving 60540, 60563, 60564 & 60565.</p>
            </Link>
            <Link href="/move-out-cleaning-romeoville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Romeoville, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Romeoville (60446), our home base.</p>
            </Link>
            <Link href="/move-out-cleaning-bolingbrook-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Bolingbrook, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Bolingbrook, zip codes 60440 & 60490.</p>
            </Link>
            <Link href="/move-out-cleaning-joliet-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Joliet, IL</h3>
              <p className="text-sm text-gray-600">Serving all Joliet zip codes: 60431, 60432, 60433, 60435 & 60436.</p>
            </Link>
            <Link href="/move-out-cleaning-lockport-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Lockport, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Lockport (60441).</p>
            </Link>
            <Link href="/move-out-cleaning-shorewood-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Shorewood, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Shorewood (60404).</p>
            </Link>
            <Link href="/move-out-cleaning-lemont-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Lemont, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Lemont (60439).</p>
            </Link>
            <Link href="/move-out-cleaning-homer-glen-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Homer Glen, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Homer Glen (60491).</p>
            </Link>
            <Link href="/move-out-cleaning-westmont-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Westmont, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Westmont (60559).</p>
            </Link>
            <Link href="/move-out-cleaning-minooka-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Minooka, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Minooka (60447).</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA + FORM. id="quote-form" so the hero and pricing CTAs,
          plus the offer block, all scroll to this same section. */}
      <section id="quote-form" className="py-16 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Your Move-Out Clean Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Get a free quote for move-out or move-in cleaning in Romeoville, Plainfield, and the southwest suburbs. Fast, thorough, and landlord-approved.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-brand-green-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned. Fully insured. Deposit-back cleaning. Eco-friendly.</p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-1">
                  <span style={{ color: "#FFD8BC" }} className="text-2xl">★★★★★</span>
                </div>
                <p className="text-sm text-gray-500">{REVIEW_RATING} average from {REVIEW_COUNT} Google reviews</p>
              </div>
              <LeadForm defaultService="Move-In / Move-Out Cleaning" />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile "Book Now" bar, fades in after 300px scroll. Points at
          this page's own quote form instead of /book, matching the pattern
          on /deep-cleaning. 69% of traffic is mobile. */}
      <StickyMobileBar bookHref="#quote-form" />
    </>
  );
}
