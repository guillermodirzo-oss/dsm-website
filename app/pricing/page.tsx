import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  DEEP_CLEANING_TIERS,
  STANDARD_CLEANING_TIERS,
  MOVE_OUT_TIERS,
  OFFER,
  isOfferActive,
  discountedPrice,
  startingPrice,
  formatPrice,
  tierLabel,
  recurringPrice,
  formatDiscount,
  DISCOUNTED_FREQUENCIES,
  STANDARD_FREQUENCIES,
  type PriceTier,
  type ServiceKey,
} from "@/lib/pricing";

// Re-render hourly so the SUMMER75 offer expires on its own after
// OFFER.endDate without anyone shipping a change.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "House Cleaning Prices Romeoville IL",
  description:
    "Transparent cleaning prices for homes in Romeoville, Plainfield & Bolingbrook IL. See rates for standard, deep, and move-out cleaning. No hidden fees.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/pricing" },
  openGraph: {
    title: "House Cleaning Prices Romeoville & Plainfield IL | DSM Cleaning Solutions",
    description:
      "Transparent flat-rate pricing for house cleaning in Plainfield, Romeoville & surrounding suburbs. Standard, deep & move-out cleaning. No hidden fees.",
    url: "https://www.dsmcleaningsolutions.com/pricing",
    siteName: "DSM Cleaning Solutions",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "DSM Cleaning Solutions — House Cleaning Prices in Romeoville & Plainfield IL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Cleaning Prices Romeoville & Plainfield IL | DSM Cleaning Solutions",
    description:
      "Transparent flat-rate pricing for house cleaning in Plainfield, Romeoville & surrounding suburbs. No hidden fees.",
    images: ["/hero-image.png"],
  },
};

// Prices interpolate from lib/pricing.ts so these answers cannot go stale.
const faqs = [
  {
    q: "How much does standard cleaning cost?",
    a: `Standard cleaning starts at ${formatPrice(
      startingPrice(STANDARD_CLEANING_TIERS)
    )} for a 2-bedroom home. Your price depends on square footage and the number of bathrooms. Use our online booking form for an exact quote.`,
  },
  {
    q: "How much does deep cleaning cost?",
    a: `Deep cleaning starts at ${formatPrice(
      startingPrice(DEEP_CLEANING_TIERS)
    )}. It covers what a standard clean skips, like inside the oven, grout lines, baseboards, doors and window sills. Pricing varies with home size, and you get an exact quote online.`,
  },
  {
    q: "How much does move-out cleaning cost?",
    a: `Move-out cleaning starts at ${formatPrice(
      startingPrice(MOVE_OUT_TIERS)
    )} for a 2-bedroom home. It is built to pass a landlord walkthrough, so it includes inside the fridge, cabinets and every appliance. Pricing varies with home size and the number of bathrooms.`,
  },
  {
    q: "Do you charge by the hour or flat rate?",
    a: "We charge flat rates, never by the hour. Your price is calculated from your home size, the number of bedrooms and bathrooms, and the service you pick. No surprises.",
  },
  {
    q: "Are there any hidden fees?",
    a: "Never. We bring all supplies and equipment at no extra charge. The price quoted is exactly what you pay.",
  },
];

// Built from the same faqs array the page renders, so the visible answer and
// the schema answer cannot drift apart.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

type ServiceCard = {
  icon: string;
  name: string;
  scope: string | null;
  badge: string | null;
  color: string;
  headerBg: string;
  badgeBg: string | null;
  href: string;
  tagline: string;
  service: ServiceKey;
  tiers: PriceTier[];
  photo: string;
  photoAlt: string;
};

const serviceCards: ServiceCard[] = [
  {
    icon: "🏠",
    name: "Standard Cleaning",
    scope: null,
    badge: null,
    color: "border-brand-green-100",
    headerBg: "bg-brand-green-50",
    badgeBg: null,
    href: "/standard-cleaning",
    tagline: "Recurring or one-time routine cleaning",
    service: "standard",
    tiers: STANDARD_CLEANING_TIERS,
    photo: "/work-photos/kitchen-standard-cleaning.jpg",
    photoAlt:
      "Clean kitchen with polished stainless steel appliances and clear countertops after standard house cleaning by DSM Cleaning Solutions",
  },
  {
    icon: "🧹",
    name: "Deep Cleaning",
    // Internal pricing mechanics are not shown to customers. This says what
    // they actually get for the higher price instead.
    scope:
      "Covers what standard skips: inside the oven, grout lines, baseboards, doors and window sills.",
    badge: "Most Popular",
    color: "border-orange-200",
    headerBg: "bg-orange-50",
    badgeBg: "bg-orange-500",
    href: "/deep-cleaning",
    tagline: "Detail clean for baselines and move-ins",
    service: "deep",
    tiers: DEEP_CLEANING_TIERS,
    photo: "/work-photos/oven-interior-deep-cleaning.jpg",
    photoAlt:
      "Oven interior cleaned down to bare enamel during a DSM Cleaning Solutions deep clean",
  },
  {
    icon: "📦",
    name: "Move-In / Move-Out Cleaning",
    scope:
      "Everything in a deep clean plus inside the fridge, inside cabinets and drawers, and every appliance.",
    badge: null,
    color: "border-blue-100",
    headerBg: "bg-blue-50",
    badgeBg: null,
    href: "/move-out-cleaning",
    tagline: "Landlord-approved · deposit-back focused",
    service: "moveout",
    tiers: MOVE_OUT_TIERS,
    photo: "/work-photos/empty-room-move-out-cleaning.jpg",
    photoAlt:
      "Empty bedroom with fresh vacuum lines in the carpet after a DSM Cleaning Solutions move-out cleaning",
  },
];


// Worked example for the recurring block. Both the tier and the frequency are
// looked up from the data, so the sentence cannot drift from the rate card.
const RECURRING_EXAMPLE_TIER =
  STANDARD_CLEANING_TIERS.find((t) => t.beds === "3 bed") ?? STANDARD_CLEANING_TIERS[0];
const RECURRING_EXAMPLE_FREQUENCY =
  STANDARD_FREQUENCIES.find((f) => f.popular) ?? STANDARD_FREQUENCIES[1];

export default function PricingPage() {
  // Evaluated at render time. With revalidate = 3600 above, the offer stops
  // showing within an hour of OFFER.endDate passing, with no code change.
  const offerLive = isOfferActive();
  const recurringExample = {
    tier: RECURRING_EXAMPLE_TIER,
    frequency: RECURRING_EXAMPLE_FREQUENCY,
    price: recurringPrice(RECURRING_EXAMPLE_TIER.price, RECURRING_EXAMPLE_FREQUENCY),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-medium">Pricing</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Transparent, Flat-Rate Pricing
            </h1>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              No hourly guessing. No hidden fees. Your price is calculated upfront based on your
              home size, bedrooms, bathrooms, and service type, and you pay exactly that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-brand-green font-bold py-4 px-8 rounded-lg hover:bg-brand-green-50 transition-colors text-lg text-center"
              >
                Get My Instant Quote
              </Link>
              <a
                href="tel:+18152462113"
                className="inline-block bg-transparent text-white font-bold py-4 px-8 rounded-lg border-2 border-white hover:bg-white/10 transition-colors text-lg text-center"
              >
                📞 (815) 246-2113
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600">
            {[
              "💰 Flat-Rate, Never Hourly",
              "🚫 No Hidden Fees",
              "🧴 All Supplies Included",
              "✅ Instant Online Quote",
              "🛡️ Fully Insured & Bonded",
            ].map((item) => (
              <span key={item} className="whitespace-nowrap">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE PRICING CARDS ─── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Pricing by Service Type</h2>
            <p className="section-subheading mx-auto">
              All prices shown are &ldquo;starting at&rdquo; examples based on common home sizes.
              Use our booking form for your exact quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {serviceCards.map((svc) => (
              <div
                key={svc.name}
                className={`bg-white rounded-2xl border-2 ${svc.color} overflow-hidden shadow-sm relative`}
              >
                {svc.badge && (
                  <div className={`absolute top-4 right-4 ${svc.badgeBg} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>
                    {svc.badge}
                  </div>
                )}

                {/* Card Header */}
                <div className={`${svc.headerBg} px-6 py-5 border-b border-gray-100`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{svc.icon}</span>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">{svc.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{svc.tagline}</p>
                    </div>
                  </div>
                  {svc.scope && (
                    <div className="mt-3 bg-white/70 rounded-lg px-3 py-2 text-xs font-semibold text-gray-700 border border-gray-200">
                      ℹ️ {svc.scope}
                    </div>
                  )}
                  {/* Offer context sits once per card, not on every price row. */}
                  {svc.service === OFFER.appliesTo && offerLive && (
                    <p
                      className="mt-3 text-xs font-bold"
                      style={{ color: "#E8622A" }}
                    >
                      ${OFFER.discount} off every deep clean with code {OFFER.code}, through August 31.
                    </p>
                  )}
                </div>

                {/* Work photo. Sits inside the card body between the header and
                    the price ladder: the header keeps the offer and the colour
                    coding high on mobile, then the photo sets context, then the
                    numbers answer the question.

                    Explicit width and height plus h-auto reserve the 4:3 box
                    before the file loads, so this cannot shift layout. No
                    priority prop: these are below the fold. */}
                <div className="px-6 pt-5">
                  <Image
                    src={svc.photo}
                    alt={svc.photoAlt}
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-auto rounded-xl border border-gray-100"
                  />
                </div>

                {/* Pricing Examples */}
                <div className="px-6 py-5">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Example Prices
                  </p>
                  <div className="space-y-3">
                    {svc.tiers.map((tier) => {
                      const label = tierLabel(tier);
                      const sale = discountedPrice(tier.price, svc.service);
                      return (
                        <div key={label} className="flex items-center justify-between gap-3">
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

                  {/* Recurring frequency discounts. Standard cleaning only:
                      deep and move-out are one-time services and take no
                      frequency discount. Kept deliberately quiet in grey so it
                      reads as information, not as a second promotion competing
                      with the SUMMER75 offer on the deep cleaning card. */}
                  {svc.service === "standard" && (
                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        Book recurring and save
                      </p>
                      <div className="space-y-1.5">
                        {DISCOUNTED_FREQUENCIES.map((freq) => (
                          <div
                            key={freq.id}
                            className={`flex items-baseline justify-between gap-3 rounded-lg px-2.5 py-1.5 ${
                              freq.popular ? "bg-gray-50" : ""
                            }`}
                          >
                            <span className="text-sm text-gray-600">
                              {freq.label}
                              {freq.popular && (
                                <span
                                  className="ml-2 text-[11px] font-semibold"
                                  style={{ color: "#E8622A" }}
                                >
                                  Most popular
                                </span>
                              )}
                            </span>
                            <span className="text-sm font-bold text-gray-900 whitespace-nowrap flex-shrink-0">
                              {formatDiscount(freq.discount)} off
                            </span>
                          </div>
                        ))}
                      </div>
                      {/* One worked example turns the percentages into real
                          money. Both figures derive from the tier and frequency
                          data, never hand-written. */}
                      <p className="mt-3 text-xs text-gray-500 leading-relaxed">
                        A {recurringExample.tier.beds} / {recurringExample.tier.baths} home is{" "}
                        <span className="font-semibold text-gray-700">
                          {formatPrice(recurringExample.tier.price)}
                        </span>{" "}
                        one-time, or{" "}
                        <span className="font-semibold text-gray-700">
                          {formatPrice(recurringExample.price)}
                        </span>{" "}
                        {recurringExample.frequency.label.toLowerCase()}.
                      </p>
                    </div>
                  )}

                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <Link
                      href={svc.href}
                      className="text-brand-green font-semibold text-sm hover:underline flex items-center gap-1"
                    >
                      View full {svc.name.toLowerCase()} details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instant quote CTA under cards */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Prices vary based on your specific home. Get your exact quote in seconds. No commitment required.
            </p>
            <Link
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Get My Instant Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CALCULATOR NOTE / INSTANT QUOTE ─── */}
      <section className="py-14 bg-orange-50 border-t border-orange-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-5xl block mb-4">🧮</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Want to Know Your Exact Price?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Use our online booking form to get an instant quote based on your specific home size
            and service type. No obligation, and it takes less than 2 minutes.
          </p>
          <Link
            href="/book"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-lg inline-block mb-4"
          >
            Get My Instant Quote
          </Link>
          <p className="text-sm text-gray-500">
            Or call us directly at{" "}
            <a href="tel:+18152462113" className="font-bold text-brand-green hover:underline">
              (815) 246-2113
            </a>{" "}
            and we&apos;re happy to walk you through pricing over the phone.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Pricing FAQs</h2>
            <p className="section-subheading mx-auto">
              Common questions about how we price our cleaning services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-brand-green">
                  <h3 className="text-left pr-4">{faq.q}</h3>
                  <svg
                    className="w-5 h-5 text-brand-green flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-16 bg-brand-green">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book? Get Your Free Quote Now.
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Flat-rate pricing. No surprises. All supplies included. Serving Plainfield,
            Romeoville, Naperville, Bolingbrook & the southwest Chicago suburbs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-green font-bold px-8 py-4 rounded-full hover:bg-brand-green-50 transition-colors shadow-md text-base"
            >
              Get Instant Quote
            </Link>
            <a
              href="tel:+18152462113"
              className="text-white font-semibold text-base border-2 border-white/50 rounded-full px-8 py-4 hover:bg-white/10 transition-colors"
            >
              📞 Call (815) 246-2113
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
