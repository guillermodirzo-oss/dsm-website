import type { Metadata } from "next";
import Link from "next/link";
import { REAL_REVIEWS, REVIEW_COUNT, pickReviews, reviewAttribution } from "@/lib/realReviews";
import Image from "next/image";
import CityDeepCleanForm from "@/components/CityDeepCleanForm";
import { DEEP_CLEANING_PRICING_COPY } from "@/lib/pricingCopy";

export const metadata: Metadata = {
  title: "Deep Cleaning Minooka IL",
  description:
    "Professional deep cleaning in Minooka, IL. DSM Cleaning Solutions - family owned, eco-friendly, fully insured. 48-hr satisfaction guarantee. Free quote.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning-minooka-il" },
  openGraph: {
    title: "Deep Cleaning Services Minooka IL | DSM Cleaning Solutions",
    description:
      "Professional deep cleaning in Minooka, IL. DSM Cleaning Solutions - family owned, eco-friendly, fully insured. 48-hr satisfaction guarantee. Free quote.",
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning-minooka-il",
  },
  twitter: { card: "summary_large_image", images: ["/hero-image.png"] },
};

const faqs = [
  {
    q: "What does a deep cleaning include in Minooka?",
    a: "We clean inside the oven, degrease the stovetop and hood vent, scrub bathroom grout, wipe baseboards, clean window sills and inside glass, dust ceiling fans, vacuum under furniture, and more. Every room gets full attention.",
  },
  {
    q: "How long does a deep clean take in Minooka?",
    a: "Most Minooka homes take 3 to 5 hours. Larger homes or homes that have not been deep cleaned in a while may take longer. We take the time needed to do the job right.",
  },
  {
    q: "Do you travel to Minooka for cleaning?",
    a: "Yes. We serve Minooka and surrounding areas in Grundy and Kendall County. Getting a cleaning team out to Minooka is easy. Fill out the form or give us a call.",
  },
  {
    q: "What if my quote comes in higher than the range listed?",
    a: "The ranges listed cover typical homes in that bedroom count. If your home runs bigger, has more bathrooms, or needs extra attention, your quote might land higher. We always confirm your exact price before we book anything. No surprises.",
  },
  {
    q: "Which areas of Minooka do you clean?",
    a: "We serve all of Minooka including the downtown area, Ridge Road area, and surrounding neighborhoods throughout Minooka, IL 60447.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Deep Cleaning Services Minooka IL",
  serviceType: "Deep Cleaning",
  areaServed: {
    "@type": "City",
    name: "Minooka",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  provider: { "@id": "https://www.dsmcleaningsolutions.com/#business" },
  description:
    "Professional deep cleaning for homes in Minooka, IL. Includes oven cleaning, grout scrubbing, baseboard wiping, and full room detail.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "200",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: "200",
      maxPrice: "350",
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
    { "@type": "ListItem", position: 2, name: "Deep Cleaning", item: "https://www.dsmcleaningsolutions.com/deep-cleaning-minooka-il" },
    { "@type": "ListItem", position: 3, name: "Minooka IL" },
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

export default function DeepCleaningMinookaPage() {
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
            <span>Deep Cleaning Minooka IL</span>
          </nav>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                Deep Cleaning Services in Minooka, IL
              </h1>
              <div className="flex items-center gap-2 mb-3">
                <span style={{ color: "#FFA869" }} className="text-xl">★★★★★</span>
                <span className="text-sm opacity-90">5.0 — {REVIEW_COUNT} reviews on Google</span>
              </div>
              <p className="text-lg font-semibold mb-2">
                Professional deep cleaning that comes to you in Minooka.
              </p>
              <p className="opacity-90 mb-6 leading-relaxed">
                DSM Cleaning Solutions serves Minooka, IL with thorough, professional deep cleaning for every room in your home. Family owned, eco-friendly products, and a 48-hour satisfaction guarantee on every job.
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
            <div className="flex-shrink-0 w-full md:w-80">
              <Image
                src="/work-photos/double-vanity-bathroom-clean-naperville-il.jpg"
                alt="Deep cleaned bathroom in Minooka IL"
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
          <span>✅ Fully Insured</span>
          <span>✅ 48-Hour Satisfaction Guarantee</span>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <p className="text-gray-700 leading-relaxed mb-4">
            Finding a quality cleaning service willing to come to Minooka can be a challenge. DSM does. We serve homeowners throughout Minooka and make booking simple. Whether you are near downtown or along Ridge Road, we can get your home clean.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our deep cleaning goes room by room with no shortcuts. Kitchen cleaning means inside the oven and degreasing the hood vent, not just wiping the counters. Bathroom cleaning means scrubbing grout lines and disinfecting every surface. Living areas get dusted ceiling fans, clean baseboards, and vacuumed under furniture.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We use eco-friendly, non-toxic products on every job and back every clean with a 48-hour satisfaction guarantee. If anything is not right, we come back and fix it at no charge.
          </p>
        </div>
      </section>

      {/* ANCHOR REVIEW */}
      <section className="py-10 px-4" style={{ backgroundColor: "#FFF4EE" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ color: "#E8622A" }} className="text-5xl font-serif leading-none mb-3">&ldquo;</p>
          <p className="text-gray-800 text-lg leading-relaxed italic mb-4">
            I&apos;m so glad DSM Cleaning Services was recommended to us by our realtor! They are fantastic, and their website makes arranging cleanings so easy. I highly recommend them -- I will be using them many more times!
          </p>
          <p className="font-semibold text-gray-700">Julie Gaubatz</p>
          <div className="flex justify-center mt-2">
            <span style={{ color: "#FFA869" }}>★★★★★</span>
          </div>
        </div>
      </section>

      {/* WHY DSM */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            Why Minooka Homeowners Choose DSM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">We Come to Minooka</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A lot of cleaning services do not travel to Minooka. We do. DSM serves the area and makes it easy to get a professional deep clean without having to search far and wide.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">No Shortcuts</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We clean inside the oven, behind the stovetop, grout lines, baseboards, ceiling fans, and window sills. Every room gets the full treatment, not just a surface wipe.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">Eco-Friendly Products</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use plant-based, non-toxic products on every job. Safe for your family and pets. No harsh chemical smell left behind when we are done.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">48-Hour Guarantee</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                If something is not right after we leave, contact us within 48 hours and we will come back to fix it. No charge. We stand behind our work.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Image
              src="/work-photos/google-post-image-cleaning-service-1.jpg"
              alt="DSM Cleaning Solutions team in Minooka IL"
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
            What We Clean in Your Minooka Home
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            Every deep clean includes all of the following
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
            Deep Cleaning Prices in Minooka IL
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

      {/* 3-REVIEW BLOCK */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            What Minooka Clients Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {pickReviews(3, 7).map((review) => (
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
          <h2 className="text-2xl font-bold mb-2">Get a Free Deep Cleaning Quote in Minooka</h2>
          <p className="opacity-90">
            Fill out the form below and we will get back to you fast. No commitment required.
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-1">
              <span style={{ color: "#FFD8BC" }} className="text-2xl">★★★★★</span>
            </div>
            <p className="text-sm text-gray-500">Trusted by Minooka homeowners — {REVIEW_COUNT} five-star reviews</p>
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
              href="/deep-cleaning-joliet-il"
              className="px-5 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-brand-green hover:text-brand-green transition"
            >
              Deep Cleaning Joliet IL
            </Link>
            <Link
              href="/deep-cleaning-shorewood-il"
              className="px-5 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-brand-green hover:text-brand-green transition"
            >
              Deep Cleaning Shorewood IL
            </Link>
            <Link
              href="/deep-cleaning-new-lenox-il"
              className="px-5 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-brand-green hover:text-brand-green transition"
            >
              Deep Cleaning New Lenox IL
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
