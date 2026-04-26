import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Deep Cleaning Naperville IL | DSM Cleaning Solutions",
  description:
    "Professional deep cleaning in Naperville, IL. DSM Cleaning Solutions serves 60540, 60563, 60564 & 60565. Eco-friendly, fully insured, 48-hour guarantee. Free quote today.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning/naperville" },
  openGraph: {
    title: "Deep Cleaning Naperville IL | DSM Cleaning Solutions",
    description:
      "Professional deep cleaning in Naperville, IL. DSM Cleaning Solutions serves 60540, 60563, 60564 & 60565. Eco-friendly, fully insured, 48-hour guarantee. Free quote today.",
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning/naperville",
    siteName: "DSM Cleaning Solutions",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Deep Cleaning",
  name: "Deep Cleaning in Naperville, IL",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.dsmcleaningsolutions.com/#business",
    name: "DSM Cleaning Solutions",
    telephone: "+18152462113",
  },
  areaServed: {
    "@type": "City",
    name: "Naperville",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description:
    "Top-rated deep cleaning in Naperville, IL. DSM Cleaning Solutions serves 60540, 60563, 60564 & 60565. Eco-friendly, fully insured. Free quote today.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does deep cleaning cost in Naperville, IL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deep cleaning in Naperville starts around $225 after seasonal discounts. Most homes in Naperville fall in the $250–$400 range depending on square footage, bedroom/bathroom count, and condition. Larger homes in White Eagle or Hobson West may be priced higher. Contact us for a free, personalized estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve all of Naperville, IL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we serve all of Naperville across zip codes 60540, 60563, 60564, and 60565. This includes neighborhoods like Cress Creek, Hobson West, Ashbury, White Eagle, River Run, and Tall Grass. No part of Naperville is outside our service area.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a deep cleaning take in Naperville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deep cleaning in Naperville typically takes 3–6 hours based on your home's size and condition. A townhome near Downtown Naperville or Cress Creek might take 3–4 hours, while a larger home in White Eagle or Hobson West could take 5–6 hours or more.",
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
    { "@type": "ListItem", position: 3, name: "Deep Cleaning in Naperville", item: "https://www.dsmcleaningsolutions.com/deep-cleaning/naperville" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DSM Cleaning Solutions",
  telephone: "(815) 246-2113",
  url: "https://www.dsmcleaningsolutions.com",
  areaServed: "Naperville",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
  },
};

const faqs = [
  {
    question: "How much does deep cleaning cost in Naperville, IL?",
    answer:
      "Deep cleaning in Naperville starts around $225 after seasonal discounts. Most homes in Naperville fall in the $250–$400 range depending on square footage, bedroom/bathroom count, and condition. Larger homes in White Eagle or Hobson West may be priced higher. Contact us for a free, personalized estimate.",
  },
  {
    question: "Do you serve all of Naperville, IL?",
    answer:
      "Yes — we serve all of Naperville across zip codes 60540, 60563, 60564, and 60565. This includes neighborhoods like Cress Creek, Hobson West, Ashbury, White Eagle, River Run, and Tall Grass. No part of Naperville is outside our service area.",
  },
  {
    question: "How long does a deep cleaning take in Naperville?",
    answer:
      "Deep cleaning in Naperville typically takes 3–6 hours based on your home's size and condition. A townhome near Downtown Naperville or Cress Creek might take 3–4 hours, while a larger home in White Eagle or Hobson West could take 5–6 hours or more.",
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
  { icon: "🌿", title: "Eco-Friendly", desc: "Non-toxic, biodegradable products — safe for Naperville families." },
  { icon: "🛡️", title: "Fully Insured & Bonded", desc: "Background-checked team. Every job fully covered." },
  { icon: "✅", title: "48-Hour Guarantee", desc: "Not satisfied? We re-clean at no charge within 48 hours." },
  { icon: "👨‍👩‍👧", title: "Family Owned", desc: "Local southwest suburbs business, not a national franchise." },
  { icon: "📅", title: "7 Days a Week", desc: "Scheduling that works around your busy Naperville life." },
  { icon: "📍", title: "Serving Naperville", desc: "All neighborhoods — 60540, 60563, 60564 & 60565." },
];

export default function DeepCleaningNapervillePage() {
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
              <span className="text-white">Naperville</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Deep Cleaning in Naperville, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions brings a thorough, detail-first deep clean to Naperville homes across
              all four zip codes. From White Eagle to Cress Creek, we scrub every surface, grout line,
              and appliance — backed by our 48-hour satisfaction guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="inline-block bg-white text-brand-green font-bold py-4 px-8 rounded-lg hover:bg-brand-green-50 transition-colors text-lg text-center">
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
          <h2 className="section-heading mb-6">Professional Deep Cleaning Services in Naperville, IL</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Deep cleaning in Naperville, IL requires a team that understands the high standards Naperville
            homeowners expect — and that&apos;s exactly what DSM Cleaning Solutions delivers. We serve the full
            city across zip codes 60540, 60563, 60564, and 60565, covering neighborhoods like Cress Creek,
            Hobson West, Ashbury, and White Eagle with a comprehensive, room-by-room deep clean.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Naperville is home to some of the most beautiful neighborhoods in the Chicago area — and those
            homes deserve a cleaning service that matches. Whether you live near the iconic Riverwalk, the
            Centennial Beach area, or in one of Naperville&apos;s newer subdivisions, our team arrives fully
            equipped and ready to tackle every inch of your home.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We use professional-grade, eco-friendly cleaning products throughout every deep cleaning job —
            no harsh chemicals that linger after we leave. DSM is family-owned and based right in the
            southwest suburbs, giving us a community commitment that national cleaning chains simply
            can&apos;t match.
          </p>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Our Deep Cleaning in Naperville, IL</h2>
            <p className="section-subheading mx-auto">
              A complete room-by-room breakdown of every deep cleaning job we perform in Naperville.
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
            <h2 className="section-heading">Why Naperville Residents Choose DSM Cleaning Solutions</h2>
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
          <h2 className="section-heading mb-6">How Much Does Deep Cleaning Cost in Naperville, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Deep cleaning in Naperville starts around $225 after seasonal discounts and varies based on
            the size of your home and its current condition. Most Naperville homes — particularly the
            larger single-family homes in Ashbury or White Eagle — fall in the $280–$420 range. Condos
            and townhomes near Downtown Naperville are typically at the lower end of the scale.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We provide every client with a free, no-obligation estimate before we start. You&apos;ll know
            exactly what to expect — no hidden fees, no surprises.
          </p>
          <Link href="#contact" className="btn-primary">Get My Free Naperville Quote</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Naperville Deep Cleaning FAQs</h2>
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

      {/* NEARBY AREAS WE SERVE */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Nearby Areas We Serve</h2>
          <p className="text-gray-500 text-sm mb-6">DSM Cleaning Solutions also provides deep cleaning throughout the western suburbs.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/deep-cleaning/hinsdale" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Hinsdale</h3>
              <p className="text-sm text-gray-600">Serving 60521 &amp; 60522.</p>
            </Link>
            <Link href="/deep-cleaning/oak-brook" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Oak Brook</h3>
              <p className="text-sm text-gray-600">Serving all of Oak Brook (60523).</p>
            </Link>
            <Link href="/deep-cleaning/burr-ridge" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Burr Ridge</h3>
              <p className="text-sm text-gray-600">Serving all of Burr Ridge (60527).</p>
            </Link>
            <Link href="/deep-cleaning/downers-grove" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Downers Grove</h3>
              <p className="text-sm text-gray-600">Serving 60515 &amp; 60516.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Your Deep Cleaning in Naperville Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Get a free quote for deep cleaning in Naperville, IL. We serve all four zip codes and
                every neighborhood — and we back every job with our 48-hour satisfaction guarantee.
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
