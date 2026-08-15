import type { Metadata } from "next";
import Link from "next/link";
import { REAL_REVIEWS, REVIEW_COUNT, REVIEW_RATING, pickReviews, reviewAttribution } from "@/lib/realReviews";
import Image from "next/image";
import CityDeepCleanForm from "@/components/CityDeepCleanForm";
import { StickyMobileBar } from "@/components/HomepageScrollWidgets";
import {
  DEEP_CLEANING_TIERS,
  OFFERS,
  isOfferActive,
  discountedPrice,
  formatPrice,
  tierLabel,
} from "@/lib/pricing";

// Re-render hourly so the SUMMER75 offer expires on its own after
// OFFERS.deep.endDate without anyone shipping a change. Same pattern as
// app/pricing/page.tsx.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Deep Cleaning Romeoville & Plainfield IL",
  description:
    "Professional deep cleaning for homes in Romeoville, Plainfield & Bolingbrook. Perfect before a big event, after winter, or for a fresh start. Free quote.",
  alternates: {
    canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning",
  },
  openGraph: {
    title: "Deep Cleaning Service in Romeoville & Plainfield IL | DSM Cleaning Solutions",
    description:
      "Professional deep cleaning for homes in Romeoville, Plainfield & Bolingbrook. Perfect before a big event, after winter, or for a fresh start. Free quote.",
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning",
  },
  twitter: { card: "summary_large_image", images: ["/hero-image.png"] },
};

const faqs = [
  {
    q: "What does a deep cleaning include?",
    a: "We clean inside the oven, degrease the stovetop and hood vent, scrub bathroom grout, wipe baseboards, clean window sills and inside glass, dust ceiling fans, vacuum under furniture, and more. Every room gets full attention from top to bottom.",
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
    q: "What if my quote comes in higher than the range listed?",
    a: "The ranges listed cover typical homes in that bedroom count. If your home runs bigger, has more bathrooms, or needs extra attention, your quote might land higher. We always confirm your exact price before we book anything. No surprises.",
  },
  {
    q: "Is your deep cleaning eco-friendly?",
    a: "Yes. We use plant-based, non-toxic products on every job. Safe for your family and pets. No harsh chemical smell when we leave.",
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
    "Professional deep cleaning for homes in Romeoville, Plainfield, Bolingbrook, Naperville, and surrounding communities. Includes oven cleaning, grout scrubbing, baseboard wiping, and full room detail.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "200",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: "200",
      maxPrice: "375",
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

const checklist = [
  {
    room: "Kitchen",
    items: [
      "Clean inside/outside oven",
      "Degrease stovetop burners and hood vent",
      "Clean inside microwave",
      "Wipe all cabinet fronts",
      "Scrub sink and faucet",
      "Clean countertops and backsplash",
      "Wipe refrigerator exterior",
      "Mop and scrub floors",
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Scrub/disinfect toilet",
      "Deep scrub shower/tub with grout cleaning",
      "Clean/polish faucets and fixtures",
      "Wash sink and vanity",
      "Clean mirrors",
      "Wipe cabinets and shelves",
      "Mop floors and clean grout lines",
    ],
  },
  {
    room: "Bedrooms & Living Areas",
    items: [
      "Dust all surfaces and shelves",
      "Wipe baseboards and door frames",
      "Clean window sills and inside glass",
      "Vacuum under/behind furniture",
      "Clean ceiling fans and light fixtures",
      "Dust blinds and windowsills",
    ],
  },
  {
    room: "Whole Home",
    items: [
      "Vacuum all carpets and rugs",
      "Mop all hard floors",
      "Wipe all doors and door frames",
      "Clean all visible baseboards",
      "Dust vents and registers",
    ],
  },
];

export default function DeepCleaningPage() {
  // Evaluated at render time. With revalidate = 3600 above, the offer stops
  // showing within an hour of OFFERS.deep.endDate passing, with no code change.
  const offerLive = isOfferActive("deep");
  const deepOffer = OFFERS.deep;

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
          style={{ objectPosition: "center 30%" }}
        />
        {/* Same two overlays as the homepage hero: a dark gradient for text
            legibility over a busy photo, plus a faint orange tint. */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/45 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <nav className="text-sm mb-6 opacity-80 flex items-center justify-center gap-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Deep Cleaning</span>
          </nav>

          {/* Order is H1, subheading, rating, offer, CTAs: the same sequence
              as the homepage hero, verified to clear the fold at 390px. */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Deep Cleaning That Gets Inside the Oven.
          </h1>
          <p className="text-lg md:text-xl font-semibold mb-5 opacity-95 max-w-2xl mx-auto">
            Grout lines, baseboards, ceiling fans, behind the stovetop. Deep cleaning in Romeoville, Plainfield, Naperville, Bolingbrook and the southwest suburbs.
          </p>

          {/* Rating. Counts come from lib/realReviews.ts, never hardcoded. */}
          <Link href="/reviews" className="inline-flex items-center justify-center gap-2 mb-5 hover:underline">
            <span style={{ color: "#FFA869" }} className="text-xl">★★★★★</span>
            <span className="text-sm opacity-90">{REVIEW_RATING} · {REVIEW_COUNT} Google Reviews</span>
          </Link>

          {/* Offer. Solid DSM orange now that the backdrop is a dark photo
              overlay, matching the homepage badge exactly rather than the
              cream variant needed against the old flat gradient. Terms mirror
              /book and the homepage, including the $40 oven cleaning value.
              Gated on isOfferActive() so the block disappears with no code
              change once OFFER.endDate passes. */}
          {offerLive && (
            <div className="mb-6">
              <a
                href="#quote-form"
                className="inline-block rounded-full px-5 py-2.5 text-sm sm:text-base font-bold text-white shadow-lg hover:brightness-110 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95 transition-all duration-200"
                style={{ backgroundColor: "#E8622A" }}
              >
                $75 off your first deep clean, plus free oven cleaning, a $40 value.
              </a>
              <p className="mt-2 text-sm text-white/70">
                Use code <span className="font-bold text-white">SUMMER75</span> through August 31.
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
      <section className="bg-white border-b py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-gray-700 font-medium">
          <span>✅ Family Owned &amp; Operated</span>
          <span>✅ Eco-Friendly Products</span>
          <span>✅ Fully Insured</span>
          <span>✅ 48-Hour Satisfaction Guarantee</span>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <p className="text-gray-700 leading-relaxed mb-4">
            DSM Cleaning Solutions has been serving homeowners in Romeoville, Plainfield, Bolingbrook, and Naperville for over 5 years. These are our home communities. When you hire us for a deep clean, you get a team that knows the area, cares about the work, and shows up on time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our deep cleaning is built for homes that need more than a weekly maintenance clean. That means getting inside the oven, scrubbing bathroom grout, cleaning behind the stovetop grates, wiping every baseboard, and dusting ceiling fans in every room.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We use eco-friendly, non-toxic products on every job. Safe for your whole family including pets. And if anything is not right after we leave, contact us within 48 hours and we will come back to fix it at no charge.
          </p>
        </div>
      </section>

      {/* ANCHOR REVIEW. Text-only: its previous paired photo,
          marble-bathroom-deep-cleaning.jpg, is also used on the homepage, and
          every image on this page now has to be unique to it. */}
      <section className="py-10 px-4" style={{ backgroundColor: "#FFF4EE" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ color: "#E8622A" }} className="text-5xl font-serif leading-none mb-3">&ldquo;</p>
          <p className="text-gray-800 text-lg leading-relaxed italic mb-4">
            {REAL_REVIEWS[5].text}
          </p>
          <p className="font-semibold text-gray-700">{REAL_REVIEWS[5].name}</p>
          <div className="flex justify-center mt-2">
            <span style={{ color: "#FFA869" }}>★★★★★</span>
          </div>
        </div>
      </section>

      {/* WHY DSM */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            Why Homeowners in Our Area Choose DSM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">We Are Local</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                DSM is a small, family-run business based in the southwest suburbs, not a franchise. Romeoville, Plainfield, Bolingbrook, and Naperville are our home communities. Memo answers his own phone. Call or text him directly.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">We Get Every Detail</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our deep clean is not a surface wipe-down. We get into the spots that usually get skipped: inside the oven, behind the toilet, grout lines, ceiling fan blades, baseboards, and window sills. Every room gets real attention.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">Eco-Friendly Products</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use plant-based, non-toxic cleaning products on every job. Safe for kids, pets, and sensitive surfaces. You will not come home to a harsh chemical smell.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">48-Hour Guarantee</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                If something is not right, contact us within 48 hours and we will come back to make it right. No hassle, no charge. We stand behind every job we do.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Image
              src="/work-photos/google-post-image-cleaning-service-25.jpg"
              alt="DSM Cleaning Solutions team member cleaning a light fixture during a deep clean visit"
              width={940}
              height={788}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-xl shadow-md mx-auto"
              style={{ maxWidth: "560px", width: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* CHECKLIST. Photos sit beside the specific claim they prove instead
          of in a standalone gallery: the Kitchen card gets the cooktop and
          microwave shots, the Bathrooms card gets the grout and fixture
          shots. Bedrooms/Living Areas and Whole Home have no candidate
          photos and stay text-only. */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
            What We Clean in Your Home
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            Every deep clean includes all of the following
          </p>

          <div className="space-y-6 mb-10">
            {/* Kitchen: checklist promises inside-the-oven, degreased
                stovetop, and inside-microwave. Cooktop and microwave photos
                back that up directly. */}
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
                    src="/work-photos/cooktop-grates-deep-cleaning.jpg"
                    alt="Gas cooktop with degreased burner grates and polished stainless steel after a DSM Cleaning Solutions deep clean"
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

            {/* Bathrooms: checklist promises grout cleaning and polished
                faucets and fixtures, both things a standard clean skips. */}
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
            <a
              href="#quote-form"
              style={{ backgroundColor: "#E8721C" }}
              className="text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition inline-block"
            >
              Book Your Deep Clean
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Deep Cleaning Pricing
            </h2>
            {offerLive && deepOffer && (
              <p className="text-sm font-bold" style={{ color: "#E8622A" }}>
                ${deepOffer.discount} off every deep clean with code {deepOffer.code}, through August 31.
              </p>
            )}
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
                const sale = discountedPrice(tier.price, "deep");
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

      {/* 3-REVIEW BLOCK */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            What Our Clients Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {pickReviews(3, 0).map((review) => (
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
        </div>
      </section>

      {/* FINAL CTA + FORM */}
      <section
        id="quote-form"
        style={{ background: "linear-gradient(135deg, #E8721C 0%, #c45a10 100%)" }}
        className="py-16 px-4"
      >
        <div className="max-w-2xl mx-auto text-center text-white mb-8">
          <h2 className="text-2xl font-bold mb-2">Get a Free Deep Cleaning Quote</h2>
          <p className="opacity-90">
            Serving Romeoville, Plainfield, Bolingbrook, Naperville, and surrounding communities. Fill out the form and we will get back to you fast.
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-1">
              <span style={{ color: "#FFD8BC" }} className="text-2xl">★★★★★</span>
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
            <Link href="/deep-cleaning/hinsdale" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Hinsdale IL</Link>
            <Link href="/deep-cleaning/oak-brook" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Oak Brook IL</Link>
            <Link href="/deep-cleaning/downers-grove" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Downers Grove IL</Link>
            <Link href="/deep-cleaning/burr-ridge" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Burr Ridge IL</Link>
          </div>
        </div>
      </section>

      {/* Sticky mobile "Book Now" bar, fades in after 300px scroll. Points at
          this page's own quote form instead of /book, matching the two
          above-fold CTAs which also go to #quote-form rather than a
          different page. */}
      <StickyMobileBar bookHref="#quote-form" />
    </>
  );
}
