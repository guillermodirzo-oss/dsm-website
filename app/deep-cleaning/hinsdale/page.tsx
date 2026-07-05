import type { Metadata } from "next";
import Link from "next/link";
import CityDeepCleanForm from "@/components/CityDeepCleanForm";

export const metadata: Metadata = {
  title: "Deep Cleaning Hinsdale IL | DSM Cleaning Solutions",
  description:
    "Professional deep cleaning in Hinsdale, IL. DSM Cleaning Solutions delivers white-glove deep cleans for Hinsdale's historic and luxury homes. 5-star rated, 48-hour guarantee. Book today.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning/hinsdale" },
  openGraph: {
    title: "Deep Cleaning Hinsdale IL | DSM Cleaning Solutions",
    description:
      "Professional deep cleaning in Hinsdale, IL. DSM Cleaning Solutions delivers white-glove deep cleans for Hinsdale's historic and luxury homes. 5-star rated, 48-hour guarantee. Book today.",
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning/hinsdale",
  },
  twitter: { card: "summary_large_image", images: ["/hero-image.png"] },
};

const faqs = [
  {
    q: "What does a deep cleaning include in Hinsdale?",
    a: "We clean inside the oven, degrease the stovetop and hood vent, scrub bathroom grout, wipe baseboards, clean window sills and inside glass, dust ceiling fans, vacuum under furniture, and more. We take extra care with premium surfaces and finishes.",
  },
  {
    q: "How long does a deep clean take in Hinsdale?",
    a: "Most Hinsdale homes take 4 to 6 hours depending on size. Larger or more detailed homes may take longer. We do not rush and we take care with your home throughout.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "You do not need to be home. Many of our Hinsdale clients provide a key or lockbox code. We handle everything and lock up securely when we leave.",
  },
  {
    q: "How much does a deep cleaning cost in Hinsdale IL?",
    a: "Pricing for Hinsdale homes typically starts around $250. A 3 to 4 bedroom home generally runs $350 to $500 depending on size and scope. Contact us for a free, accurate quote.",
  },
  {
    q: "Do you have experience cleaning historic and luxury homes?",
    a: "Yes. We understand that Hinsdale homes often have premium finishes, hardwood floors, and custom fixtures that need careful handling. We use appropriate products and techniques for every surface.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Deep Cleaning Services Hinsdale IL",
  serviceType: "Deep Cleaning",
  areaServed: {
    "@type": "City",
    name: "Hinsdale",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  provider: { "@id": "https://www.dsmcleaningsolutions.com/#business" },
  description:
    "Professional deep cleaning for luxury and historic homes in Hinsdale, IL. Careful, detail-oriented service with eco-friendly products.",
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
    { "@type": "ListItem", position: 2, name: "Deep Cleaning", item: "https://www.dsmcleaningsolutions.com/deep-cleaning/hinsdale" },
    { "@type": "ListItem", position: 3, name: "Hinsdale IL" },
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

export default function DeepCleaningHinsdalePage() {
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
            <span>Deep Cleaning Hinsdale IL</span>
          </nav>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                Deep Cleaning Services in Hinsdale, IL
              </h1>
              <div className="flex items-center gap-2 mb-3">
                <span style={{ color: "#FFA869" }} className="text-xl">★★★★★</span>
                <span className="text-sm opacity-90">5.0 — 42 reviews on Google</span>
              </div>
              <p className="text-lg font-semibold mb-2">
                Detail-oriented deep cleaning for Hinsdale&apos;s finest homes.
              </p>
              <p className="opacity-90 mb-6 leading-relaxed">
                DSM Cleaning Solutions provides careful, professional deep cleaning for homes in Hinsdale, IL. We understand that Hinsdale homes have premium finishes that need the right care. Eco-friendly products, fully insured, and a 48-hour satisfaction guarantee on every job.
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
                alt="Deep cleaned bathroom in Hinsdale IL"
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
            Hinsdale is one of the Chicago area&apos;s most established communities, with homes that range from historic estates to newer custom builds. We approach every Hinsdale home with the level of care those homes deserve. That means the right products for the right surfaces and attention to every detail.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our deep cleaning covers downtown Hinsdale, West Hinsdale, and surrounding neighborhoods. We clean inside ovens, scrub grout lines, polish fixtures, wipe baseboards, dust ceiling fans, and clean window sills in every room. Nothing gets skipped.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We use eco-friendly, non-toxic products that are safe for your home and your family. We are fully insured and back every clean with a 48-hour satisfaction guarantee. If something is not right, we come back at no charge.
          </p>
        </div>
      </section>

      {/* ANCHOR REVIEW */}
      <section className="py-10 px-4" style={{ backgroundColor: "#FFF4EE" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ color: "#E8622A" }} className="text-5xl font-serif leading-none mb-3">&ldquo;</p>
          <p className="text-gray-800 text-lg leading-relaxed italic mb-4">
            We have high standards for our home and DSM met every one of them. Detailed, careful, and professional from start to finish.
          </p>
          <p className="font-semibold text-gray-700">Margaret D., Hinsdale IL</p>
          <div className="flex justify-center mt-2">
            <span style={{ color: "#FFA869" }}>★★★★★</span>
          </div>
        </div>
      </section>

      {/* WHY DSM */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            Why Hinsdale Homeowners Choose DSM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">We Respect Your Home</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hinsdale homes have premium finishes, hardwood floors, and custom details. We use appropriate products for every surface and handle your home with care throughout the entire clean.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">Detail-Oriented Service</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We go room by room with no shortcuts. Inside the oven, grout lines, baseboards, ceiling fans, window sills. Every surface in every room gets attention.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">Eco-Friendly Products</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use plant-based, non-toxic cleaning products on every job. Safe for your family and gentle on premium finishes. No harsh chemical smell when we are done.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">48-Hour Guarantee</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                If anything is not right after we leave, contact us within 48 hours and we will come back to fix it. No charge, no questions. We stand behind every job.
              </p>
            </div>
          </div>
          <div className="text-center">
            <img
              src="/Work%20Pictures/Google%20Post%20Image%20-%20Cleaning%20Service%20(1).png"
              alt="DSM Cleaning Solutions team in Hinsdale IL"
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
            What We Clean in Your Hinsdale Home
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
            Deep Cleaning Prices in Hinsdale IL
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pricing for deep cleaning in Hinsdale typically starts around $250. A 3 to 4 bedroom home generally runs $350 to $500 depending on the size and scope of the job. Every quote is free and there are no hidden fees.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We price by the job so you know the total before we start. Fill out the form below or call us for a fast, accurate quote.
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
            What Hinsdale Clients Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex mb-3">
                <span style={{ color: "#FFA869" }}>★★★★★</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">
                &ldquo;Excellent service. My home looked immaculate after DSM came through. Kitchen and bathrooms were the highlight.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-600">Edward K., Hinsdale IL</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex mb-3">
                <span style={{ color: "#FFA869" }}>★★★★★</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">
                &ldquo;Worth every dollar. The team was respectful of our home and did a fantastic job.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-600">Claire B., Hinsdale IL</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex mb-3">
                <span style={{ color: "#FFA869" }}>★★★★★</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">
                &ldquo;Professional and reliable. Exactly the standard we were looking for.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-600">William S., Hinsdale IL</p>
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
          <h2 className="text-2xl font-bold mb-2">Get a Free Deep Cleaning Quote in Hinsdale</h2>
          <p className="opacity-90">
            Fill out the form below and we will get back to you fast with pricing. No commitment required.
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-1">
              <span style={{ color: "#FFD8BC" }} className="text-2xl">★★★★★</span>
            </div>
            <p className="text-sm text-gray-500">Trusted by Hinsdale homeowners — 42 five-star reviews</p>
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
              href="/deep-cleaning/oak-brook"
              className="px-5 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-brand-green hover:text-brand-green transition"
            >
              Deep Cleaning Oak Brook IL
            </Link>
            <Link
              href="/deep-cleaning/burr-ridge"
              className="px-5 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-brand-green hover:text-brand-green transition"
            >
              Deep Cleaning Burr Ridge IL
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
