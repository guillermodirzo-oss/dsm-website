import type { Metadata } from "next";
import Link from "next/link";
import CityDeepCleanForm from "@/components/CityDeepCleanForm";

export const metadata: Metadata = {
  title: "Deep Cleaning Services Shorewood IL | DSM Cleaning Solutions",
  description:
    "Professional deep cleaning in Shorewood, IL. DSM Cleaning Solutions - family owned, eco-friendly, fully insured. 48-hr satisfaction guarantee. Free quote.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning-shorewood-il" },
  openGraph: {
    title: "Deep Cleaning Services Shorewood IL | DSM Cleaning Solutions",
    description:
      "Professional deep cleaning in Shorewood, IL. DSM Cleaning Solutions - family owned, eco-friendly, fully insured. 48-hr satisfaction guarantee. Free quote.",
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning-shorewood-il",
  },
  twitter: { card: "summary_large_image", images: ["/hero-image.png"] },
};

const faqs = [
  {
    q: "What does a deep cleaning include in Shorewood?",
    a: "We clean inside the oven, degrease the stovetop and hood vent, scrub bathroom grout, wipe baseboards, clean window sills and inside glass, dust ceiling fans, and much more. It covers every room from top to bottom.",
  },
  {
    q: "How long does a deep clean take in Shorewood?",
    a: "Most homes in Shorewood take 3 to 5 hours. Larger homes or homes that have not been deep cleaned in a while may take longer. We do not rush the job.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "You do not need to be home. Many of our Shorewood clients leave a key or a lockbox code. We handle everything and you can come back to a clean house.",
  },
  {
    q: "How much does a deep cleaning cost in Shorewood IL?",
    a: "Pricing starts around $200 for smaller homes. A 3 to 4 bedroom home typically runs $250 to $350 depending on size and condition. Contact us for a free quote.",
  },
  {
    q: "Do you serve all parts of Shorewood?",
    a: "Yes. We serve all neighborhoods including Shorewood Glen, River Crossing, Brentwood Lakes, and surrounding areas throughout Shorewood, IL 60404.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Deep Cleaning Services Shorewood IL",
  serviceType: "Deep Cleaning",
  areaServed: {
    "@type": "City",
    name: "Shorewood",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  provider: { "@id": "https://www.dsmcleaningsolutions.com/#business" },
  description:
    "Professional deep cleaning for homes in Shorewood, IL. Includes oven cleaning, grout scrubbing, baseboard wiping, and full room detail.",
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
    { "@type": "ListItem", position: 2, name: "Deep Cleaning", item: "https://www.dsmcleaningsolutions.com/deep-cleaning-shorewood-il" },
    { "@type": "ListItem", position: 3, name: "Shorewood IL" },
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

export default function DeepCleaningShorewoodPage() {
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
            <span>Deep Cleaning Shorewood IL</span>
          </nav>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                Deep Cleaning Services in Shorewood, IL
              </h1>
              <div className="flex items-center gap-2 mb-3">
                <span style={{ color: "#FFA869" }} className="text-xl">★★★★★</span>
                <span className="text-sm opacity-90">5.0 — 42 reviews on Google</span>
              </div>
              <p className="text-lg font-semibold mb-2">
                A real deep clean for Shorewood homes. Every room, every detail.
              </p>
              <p className="opacity-90 mb-6 leading-relaxed">
                DSM Cleaning Solutions serves Shorewood, IL with thorough, professional deep cleaning. We cover everything from oven scrubbing to grout lines to baseboards. Family owned, eco-friendly products, and a 48-hour satisfaction guarantee on every job.
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
                alt="Deep cleaned bathroom in Shorewood IL"
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
            Shorewood is a growing community in Will County, and we have been proud to serve families here for years. Whether you are in Shorewood Glen, River Crossing, Brentwood Lakes, or another part of town, we can come to you and get your home clean from top to bottom.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our deep cleaning service is built for homes that need more than a quick pass. We spend real time in each room. In the kitchen that means inside the oven, behind the stovetop grates, and inside the microwave. In the bathrooms we scrub grout, disinfect toilets, and polish fixtures. In living areas we dust ceiling fans, wipe baseboards, and clean window sills.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We use eco-friendly, non-toxic products on every job. Your family and pets are safe. And if anything is not right after we leave, let us know within 48 hours and we will come back to fix it at no charge.
          </p>
        </div>
      </section>

      {/* ANCHOR REVIEW */}
      <section className="py-10 px-4" style={{ backgroundColor: "#FFF4EE" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ color: "#E8622A" }} className="text-5xl font-serif leading-none mb-3">&ldquo;</p>
          <p className="text-gray-800 text-lg leading-relaxed italic mb-4">
            DSM did an amazing job on our home in Shorewood. We had not done a deep clean in months and they made everything look brand new.
          </p>
          <p className="font-semibold text-gray-700">Rachel A., Shorewood IL</p>
          <div className="flex justify-center mt-2">
            <span style={{ color: "#FFA869" }}>★★★★★</span>
          </div>
        </div>
      </section>

      {/* WHY DSM */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            Why Shorewood Homeowners Choose DSM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">We Are Local</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                DSM is based in the area and we know Shorewood neighborhoods well. We are not a franchise. When you call us, you are working with a small, family-run team that cares about doing good work.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">We Do Not Cut Corners</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our deep clean is not a surface wipe-down. We get into the spots that usually get skipped: inside the oven, behind the toilet, grout lines, ceiling fans, and window sills. Every room gets real attention.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">Eco-Friendly Products</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use plant-based, non-toxic cleaning products on every job. Safe for kids, pets, and sensitive surfaces. You will not come home to a chemical smell.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                If something is not right, contact us within 48 hours and we will come back to make it right. No hassle, no charge. We stand behind our work.
              </p>
            </div>
          </div>
          <div className="text-center">
            <img
              src="/Work%20Pictures/Google%20Post%20Image%20-%20Cleaning%20Service%20(1).png"
              alt="DSM Cleaning Solutions team in Shorewood IL"
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
            What We Clean in Your Shorewood Home
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
            Deep Cleaning Prices in Shorewood IL
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pricing for deep cleaning in Shorewood starts around $200 for smaller homes. A 3 to 4 bedroom home typically runs $250 to $350 depending on the size and condition of the home. Every quote is free and there are no hidden fees.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We price by the job, not by the hour, so you know the cost up front. Fill out the form below or give us a call and we will get you a quote fast.
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
            What Shorewood Clients Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex mb-3">
                <span style={{ color: "#FFA869" }}>★★★★★</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">
                &ldquo;Really pleased with the results. Prompt, professional, and very thorough. Would recommend to anyone in the area.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-600">Daniel H., Shorewood IL</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex mb-3">
                <span style={{ color: "#FFA869" }}>★★★★★</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">
                &ldquo;The team was great. Cleaned things I always miss when I clean myself. Baseboards and door frames were spotless.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-600">Emily W., Shorewood IL</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex mb-3">
                <span style={{ color: "#FFA869" }}>★★★★★</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">
                &ldquo;Local and reliable. We will be booking DSM again for sure.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-600">Mark T., Shorewood IL</p>
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
          <h2 className="text-2xl font-bold mb-2">Get a Free Deep Cleaning Quote in Shorewood</h2>
          <p className="opacity-90">
            Fill out the form below and we will get back to you fast with pricing. No commitment required.
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-1">
              <span style={{ color: "#FFD8BC" }} className="text-2xl">★★★★★</span>
            </div>
            <p className="text-sm text-gray-500">Trusted by Shorewood homeowners — 42 five-star reviews</p>
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
              href="/deep-cleaning-plainfield-il"
              className="px-5 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-brand-green hover:text-brand-green transition"
            >
              Deep Cleaning Plainfield IL
            </Link>
            <Link
              href="/deep-cleaning-minooka-il"
              className="px-5 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-brand-green hover:text-brand-green transition"
            >
              Deep Cleaning Minooka IL
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
