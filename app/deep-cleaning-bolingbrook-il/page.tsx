import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Deep Cleaning Bolingbrook IL | DSM Cleaning Solutions",
  description:
    "Professional deep cleaning in Bolingbrook, IL. DSM Cleaning Solutions delivers thorough, detail-oriented deep cleans for homes across Bolingbrook. 5-star rated. Book today.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning-bolingbrook-il" },
  openGraph: {
    title: "Deep Cleaning Bolingbrook IL | DSM Cleaning Solutions",
    description:
      "Professional deep cleaning in Bolingbrook, IL. DSM Cleaning Solutions delivers thorough, detail-oriented deep cleans for homes across Bolingbrook. 5-star rated. Book today.",
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning-bolingbrook-il",
  },
};

const faqs = [
  {
    question: "How long does a deep clean take in Bolingbrook?",
    answer:
      "Most deep cleaning jobs in Bolingbrook take 3–6 hours depending on the size and current condition of your home. A 2-bedroom home may take around 3 hours, while a larger home in Stillwater or Lakewood Estates could take 5–6 hours or more.",
  },
  {
    question: "Do I need to be home during the deep clean?",
    answer:
      "You don't have to be home. Many Bolingbrook clients provide a key or access code. Every member of our team is background-checked, insured, and bonded — your home is fully protected whether you're present or not.",
  },
  {
    question: "What areas of Bolingbrook do you serve?",
    answer:
      "We serve all of Bolingbrook, including Naperville Acres, Americana Estates, Pheasant Chase, Stillwater, and Lakewood Estates across zip codes 60440 and 60490. If you're in Bolingbrook, we come to you.",
  },
  {
    question: "Is your deep cleaning service insured in Bolingbrook?",
    answer:
      "Yes — DSM Cleaning Solutions is fully insured and bonded in Illinois, including all of Bolingbrook. We carry liability insurance on every job so you can book with complete peace of mind.",
  },
  {
    question: "How often should Bolingbrook homes get deep cleaned?",
    answer:
      "We recommend a professional deep clean at least once or twice a year for most Bolingbrook homes. If you have pets, allergies, or a busy household, every 3–4 months is ideal. Many clients pair a deep clean with our recurring standard cleaning service.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Deep Cleaning",
  name: "Deep Cleaning in Bolingbrook, IL",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.dsmcleaningsolutions.com/#business",
    name: "DSM Cleaning Solutions",
    telephone: "+18152462113",
  },
  areaServed: {
    "@type": "City",
    name: "Bolingbrook",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description:
    "Professional deep cleaning in Bolingbrook IL by DSM Cleaning Solutions. Family owned, fully insured. 48-hr guarantee. Call (815) 246-2113.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Deep Cleaning", item: "https://www.dsmcleaningsolutions.com/deep-cleaning" },
    { "@type": "ListItem", position: 3, name: "Bolingbrook, IL", item: "https://www.dsmcleaningsolutions.com/deep-cleaning-bolingbrook-il" },
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
  { icon: "🌿", title: "Eco-Friendly", desc: "Non-toxic, biodegradable products safe for kids and pets." },
  { icon: "🛡️", title: "Fully Insured & Bonded", desc: "Background-checked team. Your Bolingbrook home is fully protected." },
  { icon: "✅", title: "48-Hour Guarantee", desc: "We re-clean anything that isn't right within 48 hours." },
  { icon: "👨‍👩‍👧", title: "Family Owned", desc: "Local southwest suburbs business — not a national franchise." },
  { icon: "📅", title: "7 Days a Week", desc: "Flexible scheduling to fit your Bolingbrook lifestyle." },
  { icon: "📍", title: "Serving Bolingbrook", desc: "All neighborhoods — zip codes 60440 & 60490." },
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
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/deep-cleaning" className="hover:text-white">Deep Cleaning</Link>
              <span>/</span>
              <span className="text-white">Bolingbrook</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Deep Cleaning in Bolingbrook, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions delivers a thorough, top-to-bottom deep clean for homes across
              Bolingbrook — from Naperville Acres to Stillwater and Lakewood Estates. Every surface
              scrubbed, every grout line restored, every appliance cleaned inside and out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-white btn-lg">Get a Free Quote</Link>
              <a href="tel:+18152462113" className="btn-outline-white btn-lg">📞 (815) 246-2113</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600">
            {["✅ Fully Insured & Bonded", "🌿 Eco-Friendly Products", "👨‍👩‍👧 Family Owned", "⭐ 5-Star Rated", "✔️ Satisfaction Guaranteed"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Professional Deep Cleaning Services in Bolingbrook, IL</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Deep cleaning in Bolingbrook, IL is our specialty — and DSM Cleaning Solutions brings the
            same meticulous, detail-focused approach to every home we serve. Whether you live in
            Naperville Acres, Americana Estates, Pheasant Chase, or Stillwater, our team covers zip
            codes 60440 and 60490 with a comprehensive clean that goes far beyond your regular
            maintenance routine.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Bolingbrook families choose DSM because we treat every home like our own. We&apos;re not a
            national franchise — we&apos;re a family-owned business based right here in the southwest
            suburbs, and we take pride in the results we deliver. From degreasing the kitchen hood
            vent to scrubbing grout lines in your master shower, nothing gets overlooked. Residents
            near the Promenade Bolingbrook, Hidden Lakes, and Bolingbrook Golf Club trust us to
            keep their homes in pristine condition.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you&apos;re preparing for the spring season, getting ready to host guests, or simply
            want a thorough reset after months of normal use, our Bolingbrook deep cleaning service is
            the answer. We use only eco-friendly, non-toxic products — safe for your children, your
            pets, and your home environment.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Our Deep Cleaning in Bolingbrook, IL</h2>
            <p className="section-subheading mx-auto">
              Every room in your Bolingbrook home — cleaned top to bottom.
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
            <h2 className="section-heading">Why Bolingbrook Residents Choose DSM Cleaning Solutions</h2>
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
          <h2 className="section-heading mb-6">How Much Does Deep Cleaning Cost in Bolingbrook, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Deep cleaning in Bolingbrook starts around $200 for smaller homes and goes up based on
            the size of your home, the number of bedrooms and bathrooms, and how long it&apos;s been since
            your last professional clean. A 3–4 bedroom home in Lakewood Estates or Americana Estates
            typically falls in the $250–$350 range.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We always provide a free, no-obligation estimate before any work begins. There are no
            surprises — you&apos;ll know exactly what to expect before we arrive at your Bolingbrook home.
          </p>
          <Link href="#contact" className="btn-primary">Get My Free Bolingbrook Quote</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Frequently Asked Questions</h2>
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

      {/* NEARBY CITIES */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">We Also Offer Deep Cleaning in Nearby Cities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning-plainfield-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Plainfield</h3>
              <p className="text-sm text-gray-600">Serving all of Plainfield — zip codes 60544 & 60585.</p>
            </Link>
            <Link href="/deep-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Naperville</h3>
              <p className="text-sm text-gray-600">Serving 60540, 60563, 60564 & 60565.</p>
            </Link>
            <Link href="/deep-cleaning-romeoville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Romeoville</h3>
              <p className="text-sm text-gray-600">Serving all of Romeoville, IL (60446).</p>
            </Link>
            <Link href="/deep-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Learn More About Our Deep Cleaning</h3>
              <p className="text-sm text-gray-600">See everything that&apos;s included in every deep clean.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Your Deep Cleaning in Bolingbrook Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Ready for a home that&apos;s clean from top to bottom? Get your free deep cleaning quote for
                Bolingbrook, IL — we respond within 1 business day and back every job with our
                48-hour satisfaction guarantee.
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
