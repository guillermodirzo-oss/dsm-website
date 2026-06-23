import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Apartment Cleaning Services Naperville IL",
  description:
    "Professional apartment cleaning in Naperville IL by DSM Cleaning Solutions. Move-out specialists. Fully insured. Call (815) 246-2113.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/apartment-cleaning-naperville-il" },
  openGraph: {
    title: "Apartment Cleaning Services Naperville IL | DSM Cleaning Solutions",
    description:
      "Professional apartment cleaning in Naperville IL by DSM Cleaning Solutions. Move-out specialists. Fully insured. Call (815) 246-2113.",
    url: "https://www.dsmcleaningsolutions.com/apartment-cleaning-naperville-il",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "Apartment Cleaning Naperville IL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "Do you clean apartments in Naperville, IL?",
    answer:
      "Yes — DSM Cleaning Solutions cleans apartments throughout Naperville across all four zip codes: 60540, 60563, 60564, and 60565. Whether you live in a studio near Downtown Naperville or a 3-bedroom apartment in Hobson West, we come to you.",
  },
  {
    question: "What is included in apartment cleaning in Naperville?",
    answer:
      "Our apartment cleaning covers every room: kitchen (counters, appliances, sink, stovetop, microwave, cabinet fronts, floors), bathrooms (toilet, shower/tub, sink, mirror, floor), bedrooms and living areas (vacuum, mop, dust all surfaces, wipe baseboards and window sills), and general tasks like emptying trash, wiping light switches, and cleaning interior glass.",
  },
  {
    question: "How much does apartment cleaning cost in Naperville, IL?",
    answer:
      "Apartment cleaning in Naperville starts around $80–$100 for a studio, $100–$150 for a 1-bedroom, and $130–$200+ for a 2–3 bedroom apartment depending on current condition. Move-out apartment cleaning starts higher due to the deeper scope. Contact us for a free, no-obligation estimate.",
  },
  {
    question: "Do you offer move-out apartment cleaning in Naperville?",
    answer:
      "Yes — move-out apartment cleaning is one of our most requested services in Naperville. We follow a comprehensive checklist that covers the inside of every appliance, cabinet, closet, and baseboard — designed to meet Naperville landlord inspection standards and help you recover your full security deposit.",
  },
  {
    question: "How far in advance should I book apartment cleaning in Naperville?",
    answer:
      "For regular recurring apartment cleaning, 2–3 days&apos; notice is usually enough. For move-out apartment cleaning, we recommend booking 3–5 days before your move-out date to secure your preferred time slot. For urgent requests, call us directly at (815) 246-2113 and we&apos;ll do our best to accommodate you.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Apartment Cleaning",
  name: "Apartment Cleaning in Naperville, IL",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.dsmcleaningsolutions.com/#business",
    name: "DSM Cleaning Solutions",
    telephone: "+18152462113",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Romeoville",
      addressRegion: "IL",
      postalCode: "60446",
      addressCountry: "US",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Naperville",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description:
    "Professional apartment cleaning in Naperville, IL. DSM Cleaning Solutions serves studios, 1-, 2-, and 3-bedroom apartments across zip codes 60540, 60563, 60564 & 60565. Move-out specialists. Free estimate.",
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

const checklist = [
  {
    room: "Kitchen",
    items: [
      "Wipe all countertops and backsplash",
      "Clean stovetop and drip pans",
      "Clean inside and outside microwave",
      "Wipe all appliance exteriors",
      "Scrub sink and faucet",
      "Wipe cabinet fronts and handles",
      "Sweep and mop floor",
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Scrub and disinfect toilet",
      "Clean shower and tub",
      "Wash sink and vanity",
      "Clean mirrors and glass",
      "Wipe all fixtures",
      "Scrub floor and grout",
    ],
  },
  {
    room: "Bedrooms & Living",
    items: [
      "Dust all surfaces and shelves",
      "Wipe baseboards and door frames",
      "Clean window sills and inside glass",
      "Vacuum all carpets and rugs",
      "Sweep and mop hard floors",
      "Wipe light switches and outlets",
    ],
  },
  {
    room: "Move-Out Add-Ons",
    items: [
      "Clean inside all cabinets and closets",
      "Clean inside oven and refrigerator",
      "Wipe all doors and door knobs",
      "Clean all window glass",
      "Remove all debris and trash",
      "Final walkthrough inspection",
    ],
  },
];

const trustCards = [
  { icon: "🏠", title: "Apartment Specialists", desc: "Experience with studios, 1-, 2-, and 3-bedroom apartments throughout Naperville." },
  { icon: "🛡️", title: "Fully Insured & Bonded", desc: "Background-checked team. Every job fully covered in Naperville." },
  { icon: "✅", title: "48-Hour Guarantee", desc: "Not satisfied? We re-clean at no charge within 48 hours." },
  { icon: "👨‍👩‍👧", title: "Family Owned", desc: "Local southwest suburbs business — not a national franchise." },
  { icon: "📅", title: "Flexible Scheduling", desc: "7 days a week, 8am–6pm. We work around your Naperville schedule." },
  { icon: "💰", title: "Deposit-Back Focused", desc: "Move-out cleaning built to meet Naperville landlord standards." },
];

export default function ApartmentCleaningNapervillePage() {
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

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/apartment-cleaning" className="hover:text-white">Apartment Cleaning</Link>
              <span>/</span>
              <span className="text-white">Naperville</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Apartment Cleaning Services in Naperville, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions provides professional apartment cleaning throughout Naperville,
              IL — from studio apartments near Downtown to 3-bedroom units in Hobson West and
              Ashbury. Fully insured, eco-friendly, and backed by our 48-hour guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-white btn-lg">Get a Free Quote</Link>
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
          <h2 className="section-heading mb-6">Professional Apartment Cleaning in Naperville, IL</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Apartment cleaning in Naperville, IL has its own set of demands — and DSM Cleaning Solutions
            is built for it. We serve renters and property managers across all four Naperville zip codes
            (60540, 60563, 60564, and 60565), handling everything from routine recurring cleans to
            comprehensive move-out cleaning built to satisfy landlord inspections. Whether you live
            near the Naperville Riverwalk or in a complex off Route 59, we bring the same professional
            standard to every apartment we clean.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Apartment cleaning differs from house cleaning in important ways. Naperville apartments
            often have shared hallways, HOA cleaning restrictions, and specific property manager
            checklists. Our team is experienced with these requirements — we use eco-friendly,
            residue-free products approved for all surface types, and we work efficiently within
            smaller square footage without cutting corners. Studios, 1-bedroom, 2-bedroom, and
            3-bedroom apartments all receive the same thorough attention.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Based in neighboring Romeoville, DSM Cleaning Solutions is just minutes from Naperville
            and serves the entire city on a consistent schedule. Our family-owned team treats every
            Naperville apartment like our own — because this community is our community.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Our Apartment Cleaning in Naperville</h2>
            <p className="section-subheading mx-auto">
              A complete room-by-room breakdown — standard cleaning and move-out add-ons available.
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
            <h2 className="section-heading">Why Naperville Apartment Renters Choose DSM</h2>
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
          <h2 className="section-heading mb-6">How Much Does Apartment Cleaning Cost in Naperville, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Apartment cleaning in Naperville is priced based on the size of your unit and the type
            of clean you need. Standard recurring cleans for a studio or 1-bedroom typically start
            around $80–$130. Two-bedroom and three-bedroom apartments generally range from $130–$200+.
            Move-out apartment cleaning — which includes the inside of appliances, cabinets, and
            closets — starts higher due to the added scope and is quoted individually.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We always provide a free, no-obligation estimate before any job. There are no hidden
            fees, no surprise charges — just a straightforward quote from a local family-owned
            business that Naperville renters trust. Contact us or call (815) 246-2113 to get
            your personalized Naperville apartment cleaning quote.
          </p>
          <Link href="/contact" className="btn-primary">Get My Free Naperville Quote</Link>
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

      {/* NEARBY SERVICES */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Cleaning Services in Naperville</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/apartment-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Apartment Cleaning — Full Service</h3>
              <p className="text-sm text-gray-600">Learn everything included in our apartment cleaning service.</p>
            </Link>
            <Link href="/move-out-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Naperville</h3>
              <p className="text-sm text-gray-600">Deposit-back move-out cleaning across 60540, 60563, 60564 & 60565.</p>
            </Link>
            <Link href="/naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">All Naperville Cleaning Services</h3>
              <p className="text-sm text-gray-600">View every cleaning service DSM offers throughout Naperville, IL.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Your Naperville Apartment Cleaning Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Ready for a spotless apartment in Naperville? Whether you need a one-time clean or
                regular service, DSM Cleaning Solutions serves all four Naperville zip codes and
                backs every job with our 48-hour satisfaction guarantee.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned · Eco-friendly · Fully insured · Satisfaction guaranteed</p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
