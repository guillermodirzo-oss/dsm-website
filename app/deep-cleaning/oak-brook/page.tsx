import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Deep Cleaning Oak Brook IL",
  description:
    "Professional deep cleaning in Oak Brook, IL. DSM Cleaning Solutions delivers premium deep cleans for Oak Brook luxury homes. 5-star rated, 48-hour guarantee. Book today.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning/oak-brook" },
  openGraph: {
    title: "Deep Cleaning Oak Brook IL | DSM Cleaning Solutions",
    description:
      "Professional deep cleaning in Oak Brook, IL. DSM Cleaning Solutions delivers premium deep cleans for Oak Brook luxury homes. 5-star rated, 48-hour guarantee. Book today.",
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning/oak-brook",
    siteName: "DSM Cleaning Solutions",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Deep Cleaning",
  name: "Deep Cleaning in Oak Brook, IL",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.dsmcleaningsolutions.com/#business",
    name: "DSM Cleaning Solutions",
    telephone: "+18152462113",
  },
  areaServed: {
    "@type": "City",
    name: "Oak Brook",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description:
    "Premium deep cleaning in Oak Brook, IL. Thorough, detail-first service for luxury homes. Eco-friendly, fully insured, 48-hour satisfaction guarantee.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does deep cleaning cost in Oak Brook, IL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deep cleaning in Oak Brook starts around $225 after seasonal discounts. Most Oak Brook homes Ã¢â‚¬â€ which tend toward larger square footage and premium finishes Ã¢â‚¬â€ fall in the $350Ã¢â‚¬â€œ$550+ range. We provide a detailed free estimate before every job with no surprises.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve all of Oak Brook, IL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes Ã¢â‚¬â€ we serve all of Oak Brook (60523), including areas near Oakbrook Center, Butler National Golf Club, and residential neighborhoods throughout the village. We also serve neighboring Hinsdale, Burr Ridge, Elmhurst, and Downers Grove.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a deep cleaning take in Oak Brook?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deep cleanings in Oak Brook typically take 4Ã¢â‚¬â€œ7 hours depending on the size and condition of the home. Luxury homes with multiple bathrooms, large kitchens, and extensive square footage may require additional time. We never compromise thoroughness for speed.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Deep Cleaning", item: "https://www.dsmcleaningsolutions.com/deep-cleaning" },
    { "@type": "ListItem", position: 3, name: "Deep Cleaning in Oak Brook", item: "https://www.dsmcleaningsolutions.com/deep-cleaning/oak-brook" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.dsmcleaningsolutions.com/#business",
  name: "DSM Cleaning Solutions",
  telephone: "(815) 246-2113",
  url: "https://www.dsmcleaningsolutions.com",
  areaServed: "Oak Brook",
};

const faqs = [
  {
    question: "How much does deep cleaning cost in Oak Brook, IL?",
    answer:
      "Deep cleaning in Oak Brook starts around $225 after seasonal discounts. Most Oak Brook homes Ã¢â‚¬â€ which tend toward larger square footage and premium finishes Ã¢â‚¬â€ fall in the $350Ã¢â‚¬â€œ$550+ range. We provide a detailed free estimate before every job with no surprises.",
  },
  {
    question: "Do you serve all of Oak Brook, IL?",
    answer:
      "Yes Ã¢â‚¬â€ we serve all of Oak Brook (60523), including areas near Oakbrook Center, Butler National Golf Club, and residential neighborhoods throughout the village. We also serve neighboring Hinsdale, Burr Ridge, Elmhurst, and Downers Grove.",
  },
  {
    question: "How long does a deep cleaning take in Oak Brook?",
    answer:
      "Deep cleanings in Oak Brook typically take 4Ã¢â‚¬â€œ7 hours depending on the size and condition of the home. Luxury homes with multiple bathrooms, large kitchens, and extensive square footage may require additional time. We never compromise thoroughness for speed.",
  },
];

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
      "Clean window sills and tracks",
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

const trustCards = [
  { icon: "Ã°Å¸Å’Â¿", title: "Eco-Friendly", desc: "Non-toxic, biodegradable products Ã¢â‚¬â€ safe for Oak Brook families and pets." },
  { icon: "Ã°Å¸â€ºÂ¡Ã¯Â¸Â", title: "Fully Insured & Bonded", desc: "Background-checked team. Your Oak Brook home is fully covered." },
  { icon: "Ã¢Å“â€¦", title: "48-Hour Guarantee", desc: "Not satisfied? We re-clean at no charge within 48 hours." },
  { icon: "Ã°Å¸â€˜Â¨Ã¢â‚¬ÂÃ°Å¸â€˜Â©Ã¢â‚¬ÂÃ°Å¸â€˜Â§", title: "Family Owned", desc: "Local southwest suburbs business, not a national franchise." },
  { icon: "Ã°Å¸â€œâ€¦", title: "7 Days a Week", desc: "Premium scheduling flexibility for Oak Brook homeowners." },
  { icon: "Ã°Å¸â€œÂ", title: "Serving Oak Brook", desc: "All of Oak Brook Ã¢â‚¬â€ zip code 60523." },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/deep-cleaning" className="hover:text-white">Deep Cleaning</Link>
              <span>/</span>
              <span className="text-white">Oak Brook</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Deep Cleaning in Oak Brook, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions delivers premium, detail-first deep cleaning to Oak Brook&apos;s luxury
              homes Ã¢â‚¬â€ methodical, eco-friendly, and backed by our 48-hour satisfaction guarantee.
              Serving all of Oak Brook, zip code 60523.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block bg-white text-brand-green font-bold py-4 px-8 rounded-lg hover:bg-brand-green-50 transition-colors text-lg text-center">
                Get a Free Quote
              </Link>
              <a href="tel:+18152462113" className="inline-block bg-transparent text-white font-bold py-4 px-8 rounded-lg border-2 border-white hover:bg-white/10 transition-colors text-lg text-center">
                Ã°Å¸â€œÅ¾ (815) 246-2113
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600">
            {["Ã¢Å“â€¦ Fully Insured & Bonded", "Ã°Å¸Å’Â¿ Eco-Friendly Products", "Ã°Å¸â€˜Â¨Ã¢â‚¬ÂÃ°Å¸â€˜Â©Ã¢â‚¬ÂÃ°Å¸â€˜Â§ Family Owned", "Ã¢Â­Â 5-Star Rated Ã‚Â· 47 Reviews", "Ã¢Å“â€Ã¯Â¸Â 48-Hour Satisfaction Guarantee"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Professional Deep Cleaning Services in Oak Brook, IL</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Deep cleaning in Oak Brook, IL demands a premium standard Ã¢â‚¬â€ and DSM Cleaning Solutions is built
            to meet it. We serve all of Oak Brook (60523), covering the full village from neighborhoods near
            the iconic Oakbrook Center and Butler National Golf Club to every residential enclave throughout
            this prestigious DuPage County community.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Oak Brook homeowners expect reliability and results Ã¢â‚¬â€ and that&apos;s exactly what our team delivers.
            Our deep cleaning process is methodical and thorough: we work room by room, surface by surface,
            with professional-grade eco-friendly products and a comprehensive checklist. No room gets
            overlooked, no corner gets skipped.
          </p>
          <p className="text-gray-600 leading-relaxed">
            As a family-owned business based in the southwest suburbs, we&apos;ve built our reputation on earning
            trust one job at a time. We&apos;re not a franchise Ã¢â‚¬â€ we&apos;re a dedicated team personally invested in
            the quality of every clean we perform in Oak Brook.
          </p>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Our Deep Cleaning in Oak Brook, IL</h2>
            <p className="section-subheading mx-auto">
              A complete room-by-room breakdown of every deep cleaning job we perform in Oak Brook.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {checklist.map((section) => (
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
        </div>
      </section>

      {/* WHY CHOOSE DSM */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Oak Brook Homeowners Choose DSM Cleaning Solutions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustCards.map((card) => (
              <div key={card.title} className="text-center p-6 rounded-xl bg-brand-green-50 border border-brand-green-100">
                <span className="text-4xl block mb-3">{card.icon}</span>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">How Much Does Deep Cleaning Cost in Oak Brook, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Deep cleaning in Oak Brook starts around $225 after seasonal discounts. Oak Brook&apos;s luxury
            homes Ã¢â‚¬â€ many with expansive square footage, high-end kitchens, and multiple full baths Ã¢â‚¬â€
            typically place most deep cleans in the $350Ã¢â‚¬â€œ$550+ range. Properties with finished basements,
            four or more bedrooms, or additional living spaces may be priced accordingly.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Every Oak Brook client receives a free, no-obligation estimate before we start. Transparent
            pricing, no hidden fees Ã¢â‚¬â€ just an honest quote from a team that values your trust.
          </p>
          <Link href="/contact" className="btn-primary">Get My Free Oak Brook Quote</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Oak Brook Deep Cleaning FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 border border-gray-200 rounded-xl group">
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

      {/* NEARBY AREAS */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">We Also Offer Deep Cleaning in Nearby Cities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning/hinsdale" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Hinsdale</h3>
              <p className="text-sm text-gray-600">Serving 60521 &amp; 60522.</p>
            </Link>
            <Link href="/deep-cleaning/burr-ridge" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Burr Ridge</h3>
              <p className="text-sm text-gray-600">Serving all of Burr Ridge (60527).</p>
            </Link>
            <Link href="/deep-cleaning/downers-grove" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Downers Grove</h3>
              <p className="text-sm text-gray-600">Serving 60515 &amp; 60516.</p>
            </Link>
            <Link href="/deep-cleaning/naperville" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Naperville</h3>
              <p className="text-sm text-gray-600">Serving 60540, 60563, 60564 &amp; 60565.</p>
            </Link>
            <Link href="/westmont-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">House Cleaning in Westmont</h3>
              <p className="text-sm text-gray-600">Serving all of Westmont (60559).</p>
            </Link>
            <Link href="/deep-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">View Full Deep Cleaning Service</h3>
              <p className="text-sm text-gray-600">Learn more about what&apos;s included in every deep clean.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Your Deep Cleaning in Oak Brook Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Get a free quote for deep cleaning in Oak Brook, IL. We serve all of 60523 and every
                neighborhood Ã¢â‚¬â€ backed by our 48-hour satisfaction guarantee.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                Ã°Å¸â€œÅ¾ (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned Ã‚Â· Eco-friendly Ã‚Â· Fully insured Ã‚Â· Satisfaction guaranteed</p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}