import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Condo Cleaning Services Naperville IL",
  description:
    "Condo cleaning services in Naperville IL by DSM Cleaning Solutions. Trusted, insured, eco-friendly. Free estimate.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/condo-cleaning-naperville-il" },
  openGraph: {
    title: "Condo Cleaning Services Naperville IL | DSM Cleaning Solutions",
    description:
      "Condo cleaning services in Naperville IL by DSM Cleaning Solutions. Trusted, insured, eco-friendly. Free estimate.",
    url: "https://www.dsmcleaningsolutions.com/condo-cleaning-naperville-il",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "Condo Cleaning Naperville IL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "Do you clean condos in Naperville, IL?",
    answer:
      "Yes — DSM Cleaning Solutions cleans condos throughout Naperville across all four zip codes: 60540, 60563, 60564, and 60565. We serve downtown Naperville condos, high-rise buildings, and low-rise condo communities throughout the city.",
  },
  {
    question: "What is included in condo cleaning in Naperville?",
    answer:
      "Our condo cleaning includes a complete top-to-bottom clean: kitchen (counters, sink, stovetop, microwave, appliance exteriors, cabinet fronts, floor), bathrooms (toilet, shower/tub, sink, mirror, floor), all living and bedroom areas (vacuuming, mopping, dusting surfaces, baseboards, window sills), and general tasks like emptying trash, wiping light switches, and cleaning interior glass.",
  },
  {
    question: "How much does condo cleaning cost in Naperville, IL?",
    answer:
      "Condo cleaning in Naperville typically starts around $90–$140 for a 1-bedroom condo and $130–$200+ for a 2-bedroom depending on size and condition. We always provide a free, no-obligation estimate before any job. Contact us or call (815) 246-2113 for your personalized Naperville condo cleaning quote.",
  },
  {
    question: "Do you clean high-rise condos in Naperville?",
    answer:
      "Yes — we clean both high-rise and low-rise condos throughout Naperville. Our team is experienced with building access requirements, HOA regulations, and the specific needs of condo living, including working within building hours and respecting shared spaces.",
  },
  {
    question: "Can I schedule recurring condo cleaning in Naperville?",
    answer:
      "Absolutely — recurring condo cleaning is one of our most popular services in Naperville. We offer weekly, biweekly, and monthly plans that keep your condo consistently clean on a schedule that fits your life. Contact us to set up your recurring Naperville condo cleaning plan.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Condo Cleaning",
  name: "Condo Cleaning in Naperville, IL",
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
    "Condo cleaning in Naperville, IL. High-rise and low-rise condos across 60540, 60563, 60564 & 60565. Eco-friendly, fully insured, recurring plans available.",
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
      "Clean stovetop and appliance exteriors",
      "Clean inside microwave",
      "Scrub sink and faucet",
      "Wipe cabinet fronts",
      "Clean refrigerator exterior",
      "Sweep and mop floor",
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Scrub and disinfect toilet",
      "Clean shower, tub, and grout",
      "Wash sink and vanity",
      "Polish all mirrors",
      "Wipe fixtures and towel bars",
      "Scrub and mop floor",
    ],
  },
  {
    room: "Bedrooms & Living",
    items: [
      "Dust all surfaces and shelving",
      "Wipe baseboards and door frames",
      "Clean window sills and inside glass",
      "Vacuum all carpets and rugs",
      "Sweep and mop hard floors",
      "Wipe light switches and handles",
    ],
  },
  {
    room: "Condo Extras",
    items: [
      "Clean balcony or patio surfaces",
      "Wipe entry door interior",
      "Clean interior glass and sliding doors",
      "Empty all trash and recycling",
      "Wipe utility closet exterior",
      "Final walkthrough inspection",
    ],
  },
];

const trustCards = [
  { icon: "🏙️", title: "Condo Specialists", desc: "Experience with all condo types — high-rise, low-rise, and downtown Naperville buildings." },
  { icon: "🌿", title: "HOA-Friendly Products", desc: "Eco-friendly, low-residue products safe for all building surfaces and shared spaces." },
  { icon: "🛡️", title: "Fully Insured & Bonded", desc: "Background-checked team. Complete liability coverage on every Naperville condo clean." },
  { icon: "👨‍👩‍👧", title: "Family Owned", desc: "Not a national franchise — a local southwest suburbs business you can trust." },
  { icon: "📅", title: "Recurring Plans", desc: "Weekly, biweekly, or monthly condo cleaning. Set it and forget it." },
  { icon: "✅", title: "48-Hour Guarantee", desc: "Not satisfied? We come back and re-clean within 48 hours at no charge." },
];

export default function CondoCleaningNapervillePage() {
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
              <Link href="/standard-cleaning-naperville-il" className="hover:text-white">Naperville Cleaning</Link>
              <span>/</span>
              <span className="text-white">Condo Cleaning</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Condo Cleaning Services in Naperville, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions provides professional condo cleaning throughout Naperville, IL —
              from downtown high-rises near the Riverwalk to low-rise condo communities in Cress
              Creek and Hobson West. Eco-friendly, fully insured, and backed by our 48-hour guarantee.
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
          <h2 className="section-heading mb-6">Professional Condo Cleaning Services in Naperville, IL</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Condo cleaning in Naperville, IL comes with its own set of considerations that set it
            apart from standard house cleaning — and DSM Cleaning Solutions understands every one of
            them. We serve condo owners and renters across all four Naperville zip codes (60540, 60563,
            60564, and 60565), from downtown condos near the iconic Naperville Riverwalk to low-rise
            buildings in White Eagle and Ashbury. Our team is experienced with HOA product requirements,
            building access procedures, and the specific demands of condo living.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Naperville&apos;s condo market includes a wide range of property types — newer luxury
            high-rises, established mid-rise buildings, and attached condo communities throughout
            the city. Regardless of building type, our cleaning approach is always thorough. We
            use eco-friendly, low-residue products that are safe for all surface types and compliant
            with most HOA building guidelines. No harsh chemical smells, no residue on floors or
            surfaces — just a clean, fresh condo from top to bottom.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Based in neighboring Romeoville, DSM is close to Naperville and ready to serve your
            condo on a schedule that works for you. Whether you need a one-time deep clean, a
            recurring monthly plan, or a move-out clean before handing over your keys, we have
            a solution for every Naperville condo owner.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Our Condo Cleaning in Naperville</h2>
            <p className="section-subheading mx-auto">
              Every room, every surface — plus condo-specific extras like balconies and entry doors.
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
            <h2 className="section-heading">Why Naperville Condo Owners Choose DSM Cleaning Solutions</h2>
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
          <h2 className="section-heading mb-6">How Much Does Condo Cleaning Cost in Naperville, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Condo cleaning in Naperville starts around $90–$140 for a 1-bedroom unit and
            $130–$200+ for a 2-bedroom condo, depending on square footage and current condition.
            Recurring cleaning plans are often priced at a discounted rate compared to one-time
            cleans. Move-out condo cleaning — which includes deeper work like inside appliances
            and cabinets — is quoted separately based on scope.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Every estimate is free and no-obligation. We&apos;ll give you a clear, honest quote
            upfront — no hidden fees, no surprise charges. Call us at (815) 246-2113 or use
            the contact form to get your personalized Naperville condo cleaning estimate today.
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
            <Link href="/standard-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Naperville</h3>
              <p className="text-sm text-gray-600">Recurring or one-time cleaning across all Naperville zip codes.</p>
            </Link>
            <Link href="/apartment-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Apartment Cleaning Services</h3>
              <p className="text-sm text-gray-600">Professional cleaning for apartments throughout Naperville and beyond.</p>
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
              <h2 className="text-4xl font-bold mb-4">Book Your Naperville Condo Cleaning Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Get a free, no-obligation quote for condo cleaning in Naperville, IL. We serve every
                Naperville zip code and back every job with our 48-hour satisfaction guarantee.
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
