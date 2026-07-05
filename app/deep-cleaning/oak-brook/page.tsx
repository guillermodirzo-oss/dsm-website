import type { Metadata } from "next";
import Link from "next/link";
import CityDeepCleanForm from "@/components/CityDeepCleanForm";

export const metadata: Metadata = {
  title: "Deep Cleaning Oak Brook IL | DSM Cleaning Solutions",
  description:
    "Professional deep cleaning in Oak Brook, IL. Premium service for luxury homes. Eco-friendly, fully insured, 48-hour satisfaction guarantee. Free quote.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning/oak-brook" },
  openGraph: {
    title: "Deep Cleaning Oak Brook IL | DSM Cleaning Solutions",
    description:
      "Professional deep cleaning in Oak Brook, IL. Premium service for luxury homes. Eco-friendly, fully insured, 48-hour satisfaction guarantee. Free quote.",
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning/oak-brook",
  },
  twitter: { card: "summary_large_image", images: ["/hero-image.png"] },
};

const faqs = [
  {
    q: "What does a deep cleaning include in Oak Brook?",
    a: "We clean inside the oven, degrease the stovetop and hood vent, scrub bathroom grout, wipe baseboards, clean window sills and inside glass, dust ceiling fans, vacuum under furniture, and more. We take care with premium surfaces and fixtures throughout.",
  },
  {
    q: "How long does a deep clean take in Oak Brook?",
    a: "Most Oak Brook homes take 4 to 6 hours depending on size. We take the time needed to do the job right and do not rush through premium homes.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "You do not need to be home. Many Oak Brook clients provide a key or lockbox code. We handle everything carefully and lock up when we leave.",
  },
  {
    q: "How much does a deep cleaning cost in Oak Brook IL?",
    a: "Pricing for Oak Brook homes typically starts around $250. A 3 to 4 bedroom home generally runs $350 to $500 depending on size and scope. Contact us for a free quote.",
  },
  {
    q: "Do you serve both Oak Brook Center area and Butler National area?",
    a: "Yes. We cover all neighborhoods in Oak Brook including the Oak Brook Center area, Butler National area, and surrounding residential neighborhoods throughout Oak Brook, IL 60523.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Deep Cleaning Services Oak Brook IL",
  serviceType: "Deep Cleaning",
  areaServed: {
    "@type": "City",
    name: "Oak Brook",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  provider: { "@id": "https://www.dsmcleaningsolutions.com/#business" },
  description:
    "Professional deep cleaning for luxury homes in Oak Brook, IL. Careful, detail-oriented service with eco-friendly products.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "250",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: "250",
      maxPrice: "500",
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
    { "@type": "ListItem", position: 2, name: "Deep Cleaning", item: "https://www.dsmcleaningsolutions.com/deep-cleaning/oak-brook" },
    { "@type": "ListItem", position: 3, name: "Oak Brook IL" },
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

export default function DeepCleaningOakBrookPage() {
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
            <span>Deep Cleaning Oak Brook IL</span>
          </nav>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                Deep Cleaning Services in Oak Brook, IL
              </h1>
              <div className="flex items-center gap-2 mb-3">
                <span style={{ color: "#FFA869" }} className="text-xl">★★★★★</span>
                <span className="text-sm opacity-90">5.0 — 42 reviews on Google</span>
              </div>
              <p className="text-lg font-semibold mb-2">
                Premium deep cleaning for Oak Brook homes. Careful and thorough.
              </p>
              <p className="opacity-90 mb-6 leading-relaxed">
                DSM Cleaning Solutions brings professional, detail-oriented deep cleaning to Oak Brook, IL. We cover every room with care, using eco-friendly products suited for premium finishes. Fully insured with a 48-hour satisfaction guarantee on every job.
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
              <img
                src="/Work%20Pictures/double-vanity-bathroom-clean-naperville-il.jpg"
                alt="Deep cleaned bathroom in Oak Brook IL"
                className="rounded-xl shadow-lg w-full object-cover"
                style={{ maxHeight: "280px" }}
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
            Oak Brook is known for its executive homes, manicured properties, and high standards. When homeowners here hire a cleaning service, they expect precision and professionalism. That is what DSM delivers on every job.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We serve the Oak Brook Center area, Butler National area, and all surrounding Oak Brook neighborhoods. Our deep cleaning goes room by room with no shortcuts. In the kitchen that means inside the oven and behind the stovetop grates. In the bathrooms it means grout scrubbing and polished fixtures. In bedrooms and living areas we cover baseboards, ceiling fans, window sills, and under furniture.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We use eco-friendly, non-toxic products and are fully insured. Every job is backed by our 48-hour satisfaction guarantee. If anything is not right, we come back and fix it at no charge.
          </p>
        </div>
      </section>

      {/* ANCHOR REVIEW */}
      <section className="py-10 px-4" style={{ backgroundColor: "#FFF4EE" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ color: "#E8622A" }} className="text-5xl font-serif leading-none mb-3">&ldquo;</p>
          <p className="text-gray-800 text-lg leading-relaxed italic mb-4">
            DSM did an outstanding job on our Oak Brook home. Every detail was taken care of and the team was professional throughout.
          </p>
          <p className="font-semibold text-gray-700">Barbara N., Oak Brook IL</p>
          <div className="flex justify-center mt-2">
            <span style={{ color: "#FFA869" }}>★★★★★</span>
          </div>
        </div>
      </section>

      {/* WHY DSM */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            Why Oak Brook Homeowners Choose DSM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">We Respect Your Home</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Oak Brook homes have premium finishes that need the right approach. We use appropriate products for every surface and take care throughout the entire clean.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">No Detail Gets Missed</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Inside the oven, grout lines, baseboards, ceiling fans, under furniture, window sills. We go where surface cleaning does not, and we document nothing we skip.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">Eco-Friendly Products</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use plant-based, non-toxic products safe for your family and your home&apos;s finishes. No harsh chemical residue when we leave.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">48-Hour Guarantee</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                If anything is not right, let us know within 48 hours and we will come back to fix it. No charge, no argument. We stand behind every job we do.
              </p>
            </div>
          </div>
          <div className="text-center">
            <img
              src="/Work%20Pictures/Google%20Post%20Image%20-%20Cleaning%20Service%20(1).png"
              alt="DSM Cleaning Solutions team in Oak Brook IL"
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
            What We Clean in Your Oak Brook Home
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
            Deep Cleaning Prices in Oak Brook IL
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pricing for deep cleaning in Oak Brook typically starts around $250. A 3 to 4 bedroom home generally runs $350 to $500 depending on size and scope of the job. Every quote is free with no obligation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We price by the job so you know the total up front. Fill out the form below or call us for a fast, accurate quote.
          </p>
          <a
            href="#quote-form"
            style={{ backgroundColor: "#E8721C" }}
            className="text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition inline-block"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* 3-REVIEW BLOCK */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            What Oak Brook Clients Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex mb-3">
                <span style={{ color: "#FFA869" }}>★★★★★</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">
                &ldquo;High quality service. They cleaned areas I had never even thought about. Very impressive.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-600">Charles F., Oak Brook IL</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex mb-3">
                <span style={{ color: "#FFA869" }}>★★★★★</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">
                &ldquo;Prompt, professional, and the results were excellent. Our home looked better than it has in years.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-600">Nancy W., Oak Brook IL</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex mb-3">
                <span style={{ color: "#FFA869" }}>★★★★★</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">
                &ldquo;Would recommend to anyone looking for a quality deep clean in the Oak Brook area.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-600">George T., Oak Brook IL</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="https://g.co/kgs/KFkN2MX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green font-semibold hover:underline text-sm"
            >
              Read all 42 reviews on Google →
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
          <h2 className="text-2xl font-bold mb-2">Get a Free Deep Cleaning Quote in Oak Brook</h2>
          <p className="opacity-90">
            Fill out the form below and we will get back to you fast. No commitment required.
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-1">
              <span style={{ color: "#FFD8BC" }} className="text-2xl">★★★★★</span>
            </div>
            <p className="text-sm text-gray-500">Trusted by Oak Brook homeowners — 42 five-star reviews</p>
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
              href="/deep-cleaning-westmont-il"
              className="px-5 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-brand-green hover:text-brand-green transition"
            >
              Deep Cleaning Westmont IL
            </Link>
            <Link
              href="/deep-cleaning/hinsdale"
              className="px-5 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-brand-green hover:text-brand-green transition"
            >
              Deep Cleaning Hinsdale IL
            </Link>
            <Link
              href="/deep-cleaning/downers-grove"
              className="px-5 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-brand-green hover:text-brand-green transition"
            >
              Deep Cleaning Downers Grove IL
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
