import type { Metadata } from "next";
import { deepCityTitle } from "@/lib/seoTitles";
import { DEEP_CLEANING_TIERS, startingPrice, topPrice } from "@/lib/pricing";
import Link from "next/link";
import HeroRating from "@/components/HeroRating";
import { REAL_REVIEWS, REVIEW_COUNT, REVIEW_RATING, pickReviews, reviewAttribution } from "@/lib/realReviews";
import Image from "next/image";
import CityDeepCleanForm from "@/components/CityDeepCleanForm";
import { DEEP_CLEANING_PRICING_COPY } from "@/lib/pricingCopy";
import { cities } from "@/lib/cityData";
import { listWithAnd } from "@/lib/recurringCities";
import { GOOGLE_REVIEWS_URL } from "@/lib/siteConstants";
import { WORK_PHOTOS } from "@/lib/workPhotos";

export const metadata: Metadata = {
  title: { absolute: deepCityTitle("Bolingbrook") },
  description:
    "Professional deep cleaning in Bolingbrook, IL. Thorough service for every home. Eco-friendly, fully insured, 48-hour satisfaction guarantee. Free quote.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning-bolingbrook-il" },
  openGraph: {
    title: deepCityTitle("Bolingbrook"),
    description:
      "Professional deep cleaning in Bolingbrook, IL. Thorough service for every home. Eco-friendly, fully insured, 48-hour satisfaction guarantee. Free quote.",
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning-bolingbrook-il",
  },
  twitter: { card: "summary_large_image", title: deepCityTitle("Bolingbrook"), images: ["/hero-image.png"] },
};

// LOCAL FACTS. The zip codes and neighborhoods are read from the Bolingbrook
// entry in lib/cityData.ts, the same entry /bolingbrook-il and
// /recurring-cleaning-bolingbrook-il read, so the three pages can never list
// different ones. Never type a zip code or a neighborhood into this page.
const hub = cities.find((c) => c.slug === "bolingbrook-il");
if (!hub) throw new Error('No "bolingbrook-il" entry in lib/cityData.ts');
const HUB_PATH = `/${hub.slug}`;
const ZIPS = listWithAnd(hub.zips); // "60440 and 60490"
const NEIGHBORHOODS = listWithAnd(hub.neighborhoods);

// The visible FAQ and the FAQPage schema both read this array.
const faqs = [
  {
    q: "How long does a deep cleaning take in Bolingbrook, IL?",
    a: "Most deep cleaning jobs in Bolingbrook take 3-6 hours depending on the size and condition of your home. A 2-bedroom home may take around 3 hours while a larger 4-bedroom home could take 5-6 hours.",
  },
  {
    q: "Do you come to my part of Bolingbrook?",
    a: `Yes. We clean homes in both Bolingbrook zip codes, ${ZIPS}. We're based next door in Romeoville, so it's a short drive for us.`,
  },
  {
    q: "What if my quote comes in higher than the range listed?",
    a: "The ranges listed cover typical homes in that bedroom count. If your home runs bigger, has more bathrooms, or needs extra attention, your quote might land higher. We always confirm your exact price before we book anything. No surprises.",
  },
  {
    q: "Do I need to be home during the deep cleaning in Bolingbrook?",
    a: "You don't have to be home. Many Bolingbrook clients provide a key or access code. Every member of our team is background-checked, insured, and bonded, so your home is fully protected.",
  },
  {
    q: "Is DSM Cleaning Solutions insured in Bolingbrook, IL?",
    a: "Yes, DSM Cleaning Solutions is fully insured and bonded in Illinois, including all of Bolingbrook. We carry liability insurance on every job so you can book with complete peace of mind.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Deep Cleaning in Bolingbrook, IL",
  serviceType: "Deep Cleaning",
  areaServed: {
    "@type": "City",
    name: "Bolingbrook",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  provider: { "@id": "https://www.dsmcleaningsolutions.com/#business" },
  description: `Professional deep cleaning for homes in Bolingbrook, IL, zip codes ${ZIPS}. Grout scrubbing, baseboard wiping, and full room detail.`,
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
    { "@type": "ListItem", position: 3, name: "Deep Cleaning in Bolingbrook, IL", item: "https://www.dsmcleaningsolutions.com/deep-cleaning-bolingbrook-il" },
  ],
};

const checklist = [
  {
    room: "Kitchen",
    items: [
      "Clean oven exterior",
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
      "Wipe cabinet fronts and open shelves",
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

export default function DeepCleaningBolingbrookPage() {
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

      {/* HERO */}
      <section
        className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm mb-4 opacity-80">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/deep-cleaning" className="hover:underline">Deep Cleaning</Link>
            <span className="mx-2">/</span>
            <span>Bolingbrook</span>
          </nav>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                Deep Cleaning Services in Bolingbrook, IL
              </h1>
              <HeroRating className="mb-3">{REVIEW_RATING} · {REVIEW_COUNT} Google Reviews</HeroRating>
              <p className="text-lg font-semibold mb-2">
                A deep clean from the team next door in Romeoville.
              </p>
              <p className="opacity-90 mb-6 leading-relaxed">
                We go room by room through your Bolingbrook home and take care of the buildup a quick clean leaves behind. Family owned since 2020, with eco-friendly products and a 48-hour satisfaction guarantee.
              </p>
              <div className="flex flex-wrap gap-3">
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
            {/* Shared photo, used on every deep city page. Its alt text never names a town. */}
            <div className="flex-shrink-0 w-full md:w-80">
              <Image
                src={WORK_PHOTOS.doubleVanityBathroom.src}
                alt={WORK_PHOTOS.doubleVanityBathroom.alt}
                width={1920}
                height={2560}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-xl shadow-lg w-full object-cover"
                style={{ maxHeight: "340px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-gray-700 font-medium">
          <span>✅ Family Owned &amp; Operated</span>
          <span>✅ Eco-Friendly Products</span>
          <span>✅ Insured &amp; Bonded</span>
          <span>✅ 48-Hour Satisfaction Guarantee</span>
        </div>
      </section>

      {/* LOCAL SECTION. The intro and the paragraph under the heading are the
          owner's copy. Zip codes and neighborhoods are printed from
          lib/cityData.ts. The owner's draft of the second paragraph also
          listed cabinet fronts, light switches and vents among the things a
          regular clean doesn't reach. All three are on the standard checklist,
          so the owner approved dropping them (2026-10-12). Don't add them back. */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <p className="text-gray-700 leading-relaxed mb-4">
            Bolingbrook is right next door to our home base in Romeoville, so getting to you is a short drive. We deep clean homes in both Bolingbrook zip codes, {ZIPS}, including {NEIGHBORHOODS}.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Deep Cleaning for Bolingbrook Homes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A deep clean is where we catch up on everything a regular clean doesn&apos;t reach: baseboards, door frames and the grime that builds up around faucets and tubs. If you want to keep it that way after, we also{" "}
            <Link href="/recurring-cleaning-bolingbrook-il" className="text-brand-green font-semibold hover:underline">clean homes in Bolingbrook every week, every two weeks or every month</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Every product we bring is eco-friendly and non-toxic, safe for kids and pets. If something isn&apos;t right, tell us within 48 hours and we&apos;ll come back and fix it free. For regular visits and everything else we do in town, see our{" "}
            <Link href={HUB_PATH} className="text-brand-green font-semibold hover:underline">house cleaning in Bolingbrook</Link> page.
          </p>
        </div>
      </section>

      {/* ANCHOR REVIEW. A real Google review from lib/realReviews.ts, never typed here. */}
      <section className="py-10 px-4" style={{ backgroundColor: "#FFF4EE" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ color: "#E8622A" }} className="text-5xl font-serif leading-none mb-3">&ldquo;</p>
          <p className="text-gray-800 text-lg leading-relaxed italic mb-4">
            {REAL_REVIEWS[7].text}
          </p>
          <p className="font-semibold text-gray-700">{REAL_REVIEWS[7].name}</p>
          <div className="flex justify-center mt-2">
            <span style={{ color: "#FFA869" }}>★★★★★</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">One of our {REVIEW_COUNT} five-star Google reviews</p>
        </div>
      </section>

      {/* WHY DSM */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            Why Bolingbrook Homeowners Choose DSM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">We&apos;re Right Next Door</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our home base is in Romeoville, the next town over. Bolingbrook is a short drive for our team.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">The Work a Quick Clean Skips</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Baseboards, door frames and grout lines all get done by hand, and we vacuum under and behind the furniture. Every item on the checklist below gets done on every deep clean.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">Safe for Kids and Pets</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every product we use is eco-friendly and non-toxic. You won&apos;t walk back in to a harsh chemical smell.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">Insured, Bonded and Guaranteed</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                DSM is insured and bonded, and every cleaner is background-checked and drug tested. If we miss something, tell us within 48 hours and we fix it free.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Image
              src={WORK_PHOTOS.woodCabinetKitchen.src}
              alt={WORK_PHOTOS.woodCabinetKitchen.alt}
              width={940}
              height={788}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-xl shadow-md mx-auto"
              style={{ maxWidth: "560px", width: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
            What We Clean in Your Bolingbrook Home
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            Every deep clean includes all of the following. Inside the oven and inside the kitchen cabinets are add-ons.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {checklist.map((section) => (
              <div key={section.room} className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-3 border-b pb-2">{section.room}</h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-brand-green mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            How Much Does Deep Cleaning Cost in Bolingbrook, IL?
          </h2>
          <div className="text-gray-600 leading-relaxed mb-4">{DEEP_CLEANING_PRICING_COPY}</div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your price depends on three things: how big your home is, how many bedrooms it has, and how many bathrooms it has. The ranges above cover typical homes in that bedroom range. If your home runs bigger or has extra bathrooms, your quote might land higher. We&rsquo;ll always confirm your exact price with you before we book anything. No surprises after we show up.
          </p>
          <p className="text-gray-600 text-sm mb-4">Want your exact price right now? See it in about 2 minutes below. Prefer we call you instead? Fill out the quick form.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book" className="text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition inline-block text-center" style={{ backgroundColor: "#E8622A" }}>See Your Exact Price</Link>
            <a href="#quote-form" className="font-bold px-8 py-3 rounded-lg border-2 transition inline-block text-center hover:bg-orange-50" style={{ borderColor: "#E8622A", color: "#E8622A" }}>Get a Free Quote</a>
          </div>
        </div>
      </section>

      {/* 3-REVIEW BLOCK. Reviewer cities are unknown, so the heading does not
          claim these clients are in Bolingbrook. */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            What Our Clients Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {pickReviews(3, 4).map((review) => (
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
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green font-semibold hover:underline text-sm"
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
          <h2 className="text-2xl font-bold mb-2">Book Your Deep Cleaning in Bolingbrook Today</h2>
          <p className="opacity-90">
            Fill out the form and we&apos;ll get back to you with your price. There&apos;s no deposit, and it&apos;s free to reschedule.
          </p>
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg font-bold text-gray-700 mb-6">We Also Serve Nearby Cities</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/deep-cleaning-romeoville-il"
              className="px-5 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-brand-green hover:text-brand-green transition"
            >
              Deep Cleaning Romeoville IL
            </Link>
            <Link
              href="/deep-cleaning-naperville-il"
              className="px-5 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-brand-green hover:text-brand-green transition"
            >
              Deep Cleaning Naperville IL
            </Link>
            <Link
              href="/deep-cleaning-plainfield-il"
              className="px-5 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-brand-green hover:text-brand-green transition"
            >
              Deep Cleaning Plainfield IL
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
