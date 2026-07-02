import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Airbnb Cleaning Services Naperville IL",
  description:
    "Airbnb turnover cleaning in Naperville IL by DSM Cleaning Solutions. Fast, reliable service for Airbnb and VRBO hosts. Fully insured. Free quote.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/airbnb-cleaning-naperville-il" },
  openGraph: {
    title: "Airbnb Cleaning Services Naperville IL | DSM Cleaning Solutions",
    description:
      "Airbnb turnover cleaning in Naperville IL by DSM Cleaning Solutions. Fast, reliable service for Airbnb and VRBO hosts. Fully insured. Free quote.",
    url: "https://www.dsmcleaningsolutions.com/airbnb-cleaning-naperville-il",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "Airbnb Cleaning Naperville IL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "Do you offer Airbnb cleaning in Naperville, IL?",
    answer:
      "Yes — DSM Cleaning Solutions offers professional Airbnb and short-term rental turnover cleaning throughout Naperville across all four zip codes: 60540, 60563, 60564, and 60565. We work around your guest check-out and check-in schedule, including same-day turnovers when available.",
  },
  {
    question: "How fast can you do a turnover clean in Naperville?",
    answer:
      "Most Naperville Airbnb turnovers are completed within 2–4 hours depending on the size of your property. We coordinate directly around your check-out and check-in times, and same-day service is available for qualifying properties. Call (815) 246-2113 to discuss your specific turnover window.",
  },
  {
    question: "Do you restock supplies during Airbnb turnovers in Naperville?",
    answer:
      "Yes — we can restock toiletries, replace paper products (toilet paper, paper towels), reset and fold towels and linens, and stage the property exactly how you want it for your next guest. Just let us know your restocking preferences when you book.",
  },
  {
    question: "How do I set up recurring Airbnb cleaning in Naperville?",
    answer:
      "Setting up recurring Airbnb turnover cleaning in Naperville is easy. Contact us to discuss your booking frequency and turnover windows. We&apos;ll establish a reliable schedule that keeps your property guest-ready between every booking — no scrambling to find a cleaner at the last minute.",
  },
  {
    question: "What is the cost of Airbnb cleaning in Naperville, IL?",
    answer:
      "Airbnb turnover cleaning in Naperville starts around $80–$120 for a 1-bedroom property and $130–$250+ for larger homes depending on size and services requested. Linen changes, restocking, and same-day turnovers may affect pricing. Contact us for a free custom quote based on your Naperville rental property.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Airbnb & Short-Term Rental Cleaning",
  name: "Airbnb Cleaning in Naperville, IL",
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
    "Airbnb & short-term rental turnover cleaning in Naperville, IL. Same-day service, linen reset, supply restocking. DSM Cleaning Solutions. Free estimate.",
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
      "Run or hand-wash dishes",
      "Wipe all countertops",
      "Clean stovetop and appliance exteriors",
      "Clean inside microwave",
      "Scrub sink and faucet",
      "Restock supplies if provided",
      "Sweep and mop floor",
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Disinfect toilet inside and out",
      "Scrub shower and tub",
      "Clean sink and vanity",
      "Polish mirror",
      "Replace and fold fresh towels",
      "Restock toiletries",
      "Scrub floor",
    ],
  },
  {
    room: "Bedrooms",
    items: [
      "Strip and remake beds with fresh linens",
      "Fluff and stage pillows",
      "Dust all surfaces",
      "Vacuum carpets or mop hard floors",
      "Empty trash",
      "Check closets and nightstands",
    ],
  },
  {
    room: "Living & Staging",
    items: [
      "Vacuum upholstery and rugs",
      "Wipe tables and surfaces",
      "Clean interior windows and glass",
      "Tidy throw pillows and blankets",
      "Check all amenities are in place",
      "Guest-ready final walkthrough",
    ],
  },
];

const trustCards = [
  { icon: "⚡", title: "Fast Turnovers", desc: "Same-day turnover cleaning available for Naperville hosts on tight schedules." },
  { icon: "🛏️", title: "Linen Reset", desc: "Fresh sheets, folded towels, and staged bedrooms ready for every guest." },
  { icon: "📦", title: "Supply Restocking", desc: "We restock your toiletries, paper products, and essentials between guests." },
  { icon: "🛡️", title: "Fully Insured", desc: "Background-checked team. Every Naperville Airbnb clean fully covered." },
  { icon: "📅", title: "Flexible Scheduling", desc: "We coordinate around your Naperville check-out and check-in windows." },
  { icon: "👨‍👩‍👧", title: "Family Owned", desc: "Local southwest suburbs business — reliable, consistent, and trustworthy." },
];

export default function AirbnbCleaningNapervillePage() {
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
              <Link href="/airbnb-cleaning" className="hover:text-white">Airbnb Cleaning</Link>
              <span>/</span>
              <span className="text-white">Naperville</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Airbnb &amp; Short-Term Rental Cleaning in Naperville, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions provides fast, reliable Airbnb turnover cleaning for Naperville
              hosts — coordinated around your check-out and check-in schedule. From linen resets to
              full staging, we keep your Naperville rental guest-ready every time.
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
            {["✅ Fully Insured & Bonded", "🌿 Eco-Friendly Products", "👨‍👩‍👧 Family Owned", "⭐ 5-Star Rated", "⚡ Same-Day Turnovers"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Professional Airbnb Cleaning Services in Naperville, IL</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Airbnb cleaning in Naperville, IL is a completely different service than a standard house
            clean — and DSM Cleaning Solutions is built for it. We understand that Naperville hosts
            need fast, reliable turnovers that leave properties looking pristine for every guest.
            Whether your rental is a downtown condo near the Riverwalk, a townhome in Hobson West,
            or a single-family home in White Eagle, we arrive prepared to turn it around quickly
            and thoroughly across all Naperville zip codes (60540, 60563, 60564, and 60565).
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Naperville draws visitors year-round — for Centennial Beach in summer, Naper Settlement
            events, and business travel to the Chicago area&apos;s western suburbs. As a host in a
            competitive market, your property&apos;s cleanliness directly affects your reviews and
            your booking rate. Our Airbnb turnover service covers everything: full cleaning, fresh
            linens, staged towels, restocked essentials, and a final guest-ready walkthrough.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We coordinate directly with your Airbnb or VRBO calendar, work around your check-out
            and check-in windows, and can accommodate same-day turnovers when needed. Based right
            next door in Romeoville, DSM is always close by and always reliable.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Our Airbnb Turnover Cleaning in Naperville</h2>
            <p className="section-subheading mx-auto">
              Every turnover covers every room — so your Naperville rental is guest-ready from the moment we leave.
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
            <h2 className="section-heading">Why Naperville Airbnb Hosts Trust DSM Cleaning Solutions</h2>
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
          <h2 className="section-heading mb-6">How Much Does Airbnb Cleaning Cost in Naperville, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Airbnb turnover cleaning in Naperville starts around $80–$120 for a 1-bedroom property
            and scales to $130–$250+ for larger homes and properties with additional services. Linen
            changes, supply restocking, and same-day turnovers may affect the final price depending
            on your specific setup.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We provide every Naperville Airbnb host with a free, no-obligation custom quote based
            on your property size and turnover requirements. Many hosts set up a recurring agreement
            that keeps their costs predictable and their calendar fully covered. Call (815) 246-2113
            or contact us to get started.
          </p>
          <Link href="/contact" className="btn-primary">Get My Free Naperville Airbnb Quote</Link>
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
            <Link href="/airbnb-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Airbnb Cleaning — Full Service</h3>
              <p className="text-sm text-gray-600">Learn everything included in our short-term rental cleaning service.</p>
            </Link>
            <Link href="/deep-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Naperville</h3>
              <p className="text-sm text-gray-600">Comprehensive deep cleaning for all Naperville zip codes.</p>
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
              <h2 className="text-4xl font-bold mb-4">Book Your Naperville Airbnb Turnover Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Keep your Naperville rental guest-ready with reliable, fast turnover cleaning from
                DSM Cleaning Solutions. We serve all four Naperville zip codes and back every clean
                with our satisfaction guarantee.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned · Eco-friendly · Fully insured · Fast turnovers</p>
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
