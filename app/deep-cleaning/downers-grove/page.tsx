import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Deep Cleaning Downers Grove IL",
  description:
    "Professional deep cleaning in Downers Grove, IL. DSM Cleaning Solutions delivers reliable, thorough deep cleans for Downers Grove families. 5-star rated, 48-hour guarantee. Book today.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning/downers-grove" },
  openGraph: {
    title: "Deep Cleaning Downers Grove IL | DSM Cleaning Solutions",
    description:
      "Professional deep cleaning in Downers Grove, IL. DSM Cleaning Solutions delivers reliable, thorough deep cleans for Downers Grove families. 5-star rated, 48-hour guarantee. Book today.",
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning/downers-grove",
    siteName: "DSM Cleaning Solutions",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Deep Cleaning",
  name: "Deep Cleaning in Downers Grove, IL",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.dsmcleaningsolutions.com/#business",
    name: "DSM Cleaning Solutions",
    telephone: "+18152462113",
  },
  areaServed: {
    "@type": "City",
    name: "Downers Grove",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description:
    "Reliable deep cleaning in Downers Grove, IL for busy families. Eco-friendly, fully insured, 48-hour satisfaction guarantee.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does deep cleaning cost in Downers Grove, IL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deep cleaning in Downers Grove starts around $225 after seasonal discounts. Most homes in Downers Grove — a mix of 1940s-era homes and newer builds — fall in the $250–$425 range depending on size and condition. We provide free, no-obligation estimates before every job.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve all of Downers Grove, IL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we serve all of Downers Grove across both zip codes: 60515 and 60516. From downtown Downers Grove and the Metra BNSF area to neighborhoods near Lyman Woods and Belmont Prairie, our team covers the full village. We also serve nearby Oak Brook, Westmont, Lisle, and Woodridge.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a deep cleaning take in Downers Grove?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most deep cleanings in Downers Grove take 3–5 hours for a typical single-family home. Larger homes or those with more bathrooms and finished basements may take up to 6 hours. We always finish what we start — no room gets skipped.",
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
    { "@type": "ListItem", position: 3, name: "Deep Cleaning in Downers Grove", item: "https://www.dsmcleaningsolutions.com/deep-cleaning/downers-grove" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DSM Cleaning Solutions",
  telephone: "(815) 246-2113",
  url: "https://www.dsmcleaningsolutions.com",
  areaServed: "Downers Grove",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
  },
};

const faqs = [
  {
    question: "How much does deep cleaning cost in Downers Grove, IL?",
    answer:
      "Deep cleaning in Downers Grove starts around $225 after seasonal discounts. Most homes in Downers Grove — a mix of 1940s-era homes and newer builds — fall in the $250–$425 range depending on size and condition. We provide free, no-obligation estimates before every job.",
  },
  {
    question: "Do you serve all of Downers Grove, IL?",
    answer:
      "Yes — we serve all of Downers Grove across both zip codes: 60515 and 60516. From downtown Downers Grove and the Metra BNSF area to neighborhoods near Lyman Woods and Belmont Prairie, our team covers the full village. We also serve nearby Oak Brook, Westmont, Lisle, and Woodridge.",
  },
  {
    question: "How long does a deep cleaning take in Downers Grove?",
    answer:
      "Most deep cleanings in Downers Grove take 3–5 hours for a typical single-family home. Larger homes or those with more bathrooms and finished basements may take up to 6 hours. We always finish what we start — no room gets skipped.",
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
  { icon: "🌿", title: "Eco-Friendly", desc: "Non-toxic products — safe for Downers Grove families, kids, and pets." },
  { icon: "🛡️", title: "Fully Insured & Bonded", desc: "Background-checked team. Your home is fully covered on every visit." },
  { icon: "✅", title: "48-Hour Guarantee", desc: "Not satisfied? We re-clean at no charge within 48 hours." },
  { icon: "👨‍👩‍👧", title: "Family Owned", desc: "Local southwest suburbs business — not a national franchise." },
  { icon: "📅", title: "7 Days a Week", desc: "Flexible scheduling for busy Downers Grove families." },
  { icon: "📍", title: "Serving Downers Grove", desc: "All of Downers Grove — zip codes 60515 & 60516." },
];

export default function DeepCleaningDownersGrovePage() {
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
              <span className="text-white">Downers Grove</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Deep Cleaning in Downers Grove, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions brings reliable, top-to-bottom deep cleaning to Downers Grove
              families — thorough from the first room to the last, eco-friendly, and backed by our
              48-hour satisfaction guarantee. Serving all of Downers Grove, 60515 &amp; 60516.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block bg-white text-brand-green font-bold py-4 px-8 rounded-lg hover:bg-brand-green-50 transition-colors text-lg text-center">
                Get a Free Quote
              </Link>
              <a href="tel:+18152462113" className="inline-block bg-transparent text-white font-bold py-4 px-8 rounded-lg border-2 border-white hover:bg-white/10 transition-colors text-lg text-center">
                📞 (815) 246-2113
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600">
            {["✅ Fully Insured & Bonded", "🌿 Eco-Friendly Products", "👨‍👩‍👧 Family Owned", "⭐ 5-Star Rated · 47 Reviews", "✔️ 48-Hour Satisfaction Guarantee"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Professional Deep Cleaning Services in Downers Grove, IL</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Deep cleaning in Downers Grove, IL means showing up on time, doing the work thoroughly, and
            leaving the home genuinely cleaner — not just surface-level tidy. That&apos;s the standard DSM
            Cleaning Solutions holds itself to in every home we clean across Downers Grove&apos;s 60515 and
            60516 zip codes.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Downers Grove has a wonderful variety of housing — classic bungalows and two-flats near the
            downtown and Metra BNSF corridor, alongside newer construction throughout the 60516 area and
            near Lyman Woods. Our team is experienced with both, adapting our deep cleaning approach to
            the unique character of each home while maintaining the same high standard throughout.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Busy families in Downers Grove rely on DSM because we follow through on what we promise —
            every room, every time. We use eco-friendly, non-toxic products safe for kids and pets, and
            we back every single deep clean with our 48-hour satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Our Deep Cleaning in Downers Grove, IL</h2>
            <p className="section-subheading mx-auto">
              A complete room-by-room breakdown of every deep cleaning job we perform in Downers Grove.
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
            <h2 className="section-heading">Why Downers Grove Families Choose DSM Cleaning Solutions</h2>
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
          <h2 className="section-heading mb-6">How Much Does Deep Cleaning Cost in Downers Grove, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Deep cleaning in Downers Grove starts around $225 after seasonal discounts. The village&apos;s
            mix of property sizes means pricing varies — compact historic homes near downtown may run
            $225–$300, while larger newer builds with finished basements and multiple bathrooms typically
            fall in the $350–$425 range.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We provide every Downers Grove client with a free, no-obligation estimate before any work
            begins. Straightforward pricing, no hidden fees, and a satisfaction guarantee built in.
          </p>
          <Link href="/contact" className="btn-primary">Get My Free Downers Grove Quote</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Downers Grove Deep Cleaning FAQs</h2>
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
            <Link href="/deep-cleaning/oak-brook" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Oak Brook</h3>
              <p className="text-sm text-gray-600">Serving all of Oak Brook (60523).</p>
            </Link>
            <Link href="/deep-cleaning/hinsdale" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Hinsdale</h3>
              <p className="text-sm text-gray-600">Serving 60521 &amp; 60522.</p>
            </Link>
            <Link href="/deep-cleaning/burr-ridge" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Burr Ridge</h3>
              <p className="text-sm text-gray-600">Serving all of Burr Ridge (60527).</p>
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
              <h2 className="text-4xl font-bold mb-4">Book Your Deep Cleaning in Downers Grove Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Get a free quote for deep cleaning in Downers Grove, IL. We serve both zip codes and every
                neighborhood — backed by our 48-hour satisfaction guarantee.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned · Eco-friendly · Fully insured · Satisfaction guaranteed</p>
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
