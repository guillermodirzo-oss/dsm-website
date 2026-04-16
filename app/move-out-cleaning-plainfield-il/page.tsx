import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Move Out Cleaning Services Plainfield IL",
  description:
    "Move-out cleaning in Plainfield, IL built to get your deposit back. DSM Cleaning Solutions serves 60544 & 60585. Landlord-approved, eco-friendly.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/move-out-cleaning-plainfield-il" },
  openGraph: {
    title: "Move Out Cleaning Services Plainfield IL",
    description:
      "Move-out cleaning in Plainfield, IL built to get your deposit back. DSM Cleaning Solutions serves 60544 & 60585. Landlord-approved, eco-friendly.",
    url: "https://www.dsmcleaningsolutions.com/move-out-cleaning-plainfield-il",
  },
};

const faqs = [
  {
    question: "How long does a move-out cleaning take in Plainfield, IL?",
    answer:
      "A move-out clean in Plainfield typically takes 4–7 hours for an average-sized home. Larger homes — like those in Grande Park or Lakewood Falls — may take longer. We&apos;ll give you an accurate time estimate when you contact us.",
  },
  {
    question: "Do you serve the Settlers Ridge and Springbank neighborhoods in Plainfield for move-out cleaning?",
    answer:
      "Yes — we provide move-out cleaning throughout all of Plainfield, including Settlers Ridge, Springbank, Lakewood Falls, Grande Park, and all areas in zip codes 60544 and 60585.",
  },
  {
    question: "How much does move-out cleaning cost in Plainfield, IL?",
    answer:
      "Move-out cleaning in Plainfield starts around $150–$250 for a typical home, varying based on size and condition. We provide a free, no-obligation quote tailored to your specific Plainfield property.",
  },
  {
    question: "Does move-out cleaning in Plainfield include inside cabinets?",
    answer:
      "Yes — our Plainfield move-out cleaning is comprehensive. We clean inside all kitchen and bathroom cabinets and drawers, closets, and all built-in storage to meet landlord inspection standards.",
  },
  {
    question: "Is DSM Cleaning Solutions insured for move-out cleaning in Plainfield, IL?",
    answer:
      "Yes — DSM Cleaning Solutions is fully insured and bonded for every job in Plainfield, IL. You and your landlord can book with complete confidence.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Move Out Cleaning",
  name: "Move-Out Cleaning in Plainfield, IL",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.dsmcleaningsolutions.com/#business",
    name: "DSM Cleaning Solutions",
    telephone: "+18152462113",
  },
  areaServed: {
    "@type": "City",
    name: "Plainfield",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description:
    "Move-out cleaning in Plainfield, IL built to get your deposit back. DSM Cleaning Solutions serves 60544 & 60585. Landlord-approved, eco-friendly.",
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
      "Clean inside/outside oven",
      "Wipe stovetop and drip pans",
      "Clean inside/outside refrigerator",
      "Clean inside microwave",
      "Scrub sink",
      "Wipe all cabinet fronts and clean inside",
      "Clean countertops and backsplash",
      "Clean dishwasher interior",
      "Mop and scrub floors",
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Scrub/disinfect toilet",
      "Deep scrub shower and tub including grout",
      "Clean/polish all faucets",
      "Scrub and disinfect sink",
      "Clean mirrors and glass",
      "Wipe inside all cabinets",
      "Mop floor and clean grout lines",
    ],
  },
  {
    room: "Bedrooms & Living Areas",
    items: [
      "Clean inside all closets",
      "Wipe all baseboards and door frames",
      "Clean window sills/tracks/glass",
      "Wipe all light switches and outlet covers",
      "Clean ceiling fans",
      "Vacuum all carpets",
      "Sweep and mop hard floors",
    ],
  },
  {
    room: "Whole Home",
    items: [
      "Clean all doors and door knobs",
      "Wipe all windowsills",
      "Dust and wipe all light fixtures",
      "Clean vents and registers",
      "Remove all trash and debris",
      "Final walkthrough inspection",
    ],
  },
];

const trustCards = [
  { icon: "💰", title: "Deposit-Back Focused", desc: "Designed to meet landlord standards in Plainfield, IL." },
  { icon: "🛡️", title: "Fully Insured & Bonded", desc: "Background-checked team. Every job fully covered." },
  { icon: "✅", title: "48-Hour Guarantee", desc: "If your landlord isn&apos;t satisfied, we re-clean at no charge." },
  { icon: "👨‍👩‍👧", title: "Family Owned", desc: "Local southwest suburbs business — your trusted neighbors." },
  { icon: "📅", title: "Flexible Scheduling", desc: "Book around your move-out timeline in Plainfield." },
  { icon: "📍", title: "Serving Plainfield", desc: "All neighborhoods — zip codes 60544 & 60585." },
];

export default function MoveOutCleaningPlainfieldPage() {
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
              <Link href="/move-out-cleaning" className="hover:text-white">Move-Out Cleaning</Link>
              <span>/</span>
              <span className="text-white">Plainfield</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Move-Out Cleaning in Plainfield, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions delivers a landlord-approved, deposit-back move-out clean for
              Plainfield homes and apartments. We serve all of 60544 and 60585 — from Settlers Ridge
              to Grande Park — with a comprehensive clean built to pass any inspection.
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
          <h2 className="section-heading mb-6">Move-Out Cleaning in Plainfield, IL — Built to Get Your Deposit Back</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Move-out cleaning in Plainfield, IL is one of DSM Cleaning Solutions&apos; most requested services
            — and it&apos;s easy to understand why. Plainfield renters in Settlers Ridge, Lakewood Falls,
            Springbank, and across zip codes 60544 and 60585 trust us to deliver the kind of deep,
            comprehensive clean that meets even the strictest landlord standards and maximizes the
            chance of getting their full security deposit back.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Our Plainfield move-out cleaning service isn&apos;t a surface-level wipe-down. We clean inside
            every appliance, inside every cabinet, inside every closet — every corner of the empty
            home that a landlord or property manager is likely to inspect. The goal is simple: leave
            the property in better condition than when you first moved in.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We also serve landlords and property managers in Plainfield who need a reliable turnover
            cleaning between tenants, and home sellers who want their property looking its absolute
            best before listing. Whatever your reason for booking, DSM brings the same thorough
            standard to every move-out job.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Our Move-Out Cleaning in Plainfield, IL</h2>
            <p className="section-subheading mx-auto">
              A comprehensive checklist designed to pass landlord inspection in Plainfield.
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
            <h2 className="section-heading">Why Plainfield Residents Choose DSM Cleaning Solutions</h2>
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
          <h2 className="section-heading mb-6">How Much Does Move-Out Cleaning Cost in Plainfield, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Move-out cleaning in Plainfield starts around $150–$250 for most homes, depending on size,
            number of bathrooms, and current condition. Larger homes in Lakewood Falls or Grande Park
            with multiple bathrooms and extensive kitchen appliances may be priced higher. We recommend
            booking at least 3–5 days before your move-out date to secure your preferred time slot.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Every Plainfield client receives a free, no-obligation estimate before booking. We&apos;re
            transparent about our pricing — no surprises, no hidden add-ons after the job.
          </p>
          <Link href="#contact" className="btn-primary">Get My Free Plainfield Quote</Link>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">We Also Offer Move-Out Cleaning in Nearby Cities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/move-out-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Naperville</h3>
              <p className="text-sm text-gray-600">Serving 60540, 60563, 60564 & 60565.</p>
            </Link>
            <Link href="/move-out-cleaning-romeoville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Romeoville</h3>
              <p className="text-sm text-gray-600">Serving all of Romeoville, IL (60446).</p>
            </Link>
            <Link href="/move-out-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">View Full Move-Out Cleaning Service</h3>
              <p className="text-sm text-gray-600">Learn more about our complete move-out checklist.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Your Move-Out Cleaning in Plainfield Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Moving out in Plainfield, IL? Get your free quote today. We serve all of 60544 and 60585
                and back every move-out job with our satisfaction guarantee — your deposit back or
                we re-clean at no charge.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned · Eco-friendly · Fully insured · Deposit-back focused</p>
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
