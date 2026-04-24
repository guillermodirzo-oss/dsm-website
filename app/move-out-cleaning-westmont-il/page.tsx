import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Move Out Cleaning Services Westmont IL",
  description:
    "Move-out cleaning in Westmont IL by DSM Cleaning Solutions. Get your deposit back. Call (815) 246-2113.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/move-out-cleaning-westmont-il" },
  openGraph: {
    title: "Move Out Cleaning Services Westmont IL",
    description:
      "Move-out cleaning in Westmont IL by DSM Cleaning Solutions. Get your deposit back. Call (815) 246-2113.",
    url: "https://www.dsmcleaningsolutions.com/move-out-cleaning-westmont-il",
  },
};

const faqs = [
  {
    question: "Can you help me get my security deposit back in Westmont, IL?",
    answer:
      "Yes — our Westmont move-out cleaning is specifically designed to meet landlord and property manager inspection standards. We clean every surface, inside every appliance, and inside every cabinet so your Westmont property looks move-in ready and gives you the best possible chance of getting your full security deposit back.",
  },
  {
    question: "How far in advance should I book move-out cleaning in Westmont?",
    answer:
      "We recommend booking at least 3–5 days before your move-out date to secure your preferred time slot in Westmont. That said, we do our best to accommodate last-minute requests — give us a call at (815) 246-2113 and we'll see what we can do.",
  },
  {
    question: "Do you clean inside appliances during Westmont move-out cleans?",
    answer:
      "Yes — appliances are a central part of our move-out cleaning checklist. We clean inside and outside the oven, inside and outside the refrigerator (including all drawers and shelves), inside the microwave, and the dishwasher interior. These are the areas Westmont landlords and property managers inspect most closely.",
  },
  {
    question: "How long does a Westmont move-out clean take?",
    answer:
      "A move-out clean in Westmont typically takes 4–6 hours for an average-sized home in zip code 60559. Larger homes or properties that haven't been professionally cleaned recently may take longer. We'll give you an accurate time estimate when you contact us.",
  },
  {
    question: "Do you serve all of Westmont, IL 60559?",
    answer:
      "Yes — we serve all of Westmont, including zip code 60559 and all neighborhoods: Westmont Downtown, Oakwood Estates, the Waterfall Glen area, the Cass Avenue Corridor, and the Williams Street District. We serve Westmont regularly as part of our DuPage and Will County route.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Move Out Cleaning",
  name: "Move-Out Cleaning in Westmont, IL",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.dsmcleaningsolutions.com/#business",
    name: "DSM Cleaning Solutions",
    telephone: "+18152462113",
  },
  areaServed: {
    "@type": "City",
    name: "Westmont",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description:
    "Move-out cleaning in Westmont IL by DSM Cleaning Solutions. Get your deposit back. Call (815) 246-2113.",
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
  { icon: "💰", title: "Deposit-Back Focused", desc: "Designed to meet landlord inspection standards in Westmont, IL." },
  { icon: "🛡️", title: "Fully Insured & Bonded", desc: "Background-checked team. Every Westmont job fully covered." },
  { icon: "✅", title: "48-Hour Guarantee", desc: "If your landlord isn't satisfied, we re-clean at no charge." },
  { icon: "👨‍👩‍👧", title: "Family Owned", desc: "Based in the southwest Chicago suburbs — your local neighbors." },
  { icon: "📅", title: "Flexible Scheduling", desc: "Book around your move-out timeline in Westmont." },
  { icon: "📍", title: "Serving Westmont", desc: "All neighborhoods in zip code 60559." },
];

export default function MoveOutCleaningWestmontPage() {
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
              <span className="text-white">Westmont</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Move-Out Cleaning Services in Westmont, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Moving out of your Westmont home or rental? DSM Cleaning Solutions delivers a thorough,
              landlord-inspection-ready clean throughout Westmont — including Westmont Downtown, Oakwood
              Estates, the Cass Avenue Corridor, and the Williams Street District. Get your full
              deposit back.
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
          <h2 className="section-heading mb-6">Professional Move-Out Cleaning in Westmont, IL</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>Move-out cleaning in Westmont, IL</strong> is about one thing: getting your security deposit back.
            Landlords and property managers throughout Westmont (zip code 60559) conduct thorough
            move-out inspections — and with established homes along the Cass Avenue Corridor and
            in Oakwood Estates, the focus is always on the same high-risk areas: oven interior,
            refrigerator drawers, bathroom grout, cabinet interiors, and ceiling fans. Our move-out
            cleaning service covers every one of them.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We&apos;re a family-owned cleaning company from the southwest Chicago suburbs, and we&apos;ve
            helped renters across Westmont Downtown, Oakwood Estates, and the Williams Street
            District pass their move-out inspections and recover their full deposits. Our team
            follows a detailed, landlord-focused checklist that covers every room — not just the
            surfaces your landlord can see from the doorway.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every job is backed by our 48-hour satisfaction guarantee — if your landlord flags
            anything within 48 hours, we come back and make it right at no charge. We serve
            Westmont alongside nearby{" "}
            <Link href="/move-out-cleaning-bolingbrook-il" className="text-brand-green font-semibold hover:underline">Bolingbrook</Link> and{" "}
            <Link href="/move-out-cleaning-joliet-il" className="text-brand-green font-semibold hover:underline">Joliet</Link>, and we treat
            every move-out job with the same attention to detail. Learn more on our main{" "}
            <Link href="/move-out-cleaning" className="text-brand-green font-semibold hover:underline">move-out cleaning page</Link>.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Our Move-Out Cleaning in Westmont, IL</h2>
            <p className="section-subheading mx-auto">
              A complete, landlord-ready clean for your Westmont property.
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
            <h2 className="section-heading">Why Westmont Renters Choose DSM Cleaning Solutions</h2>
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
          <h2 className="section-heading mb-6">How Much Does Move-Out Cleaning Cost in Westmont, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Move-out cleaning in Westmont typically ranges from $150 to $300 for most homes and
            apartments in zip code 60559, depending on the size and condition of the property.
            A 2-bedroom apartment in Westmont Downtown might run $150–$200, while a larger
            single-family home in Oakwood Estates could run $250–$325.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Every estimate is free and no-obligation. We&apos;ll give you an honest quote upfront
            based on your home&apos;s specific details — and you&apos;ll know exactly what you&apos;re getting
            before we start.
          </p>
          <Link href="/contact" className="btn-primary">Get My Free Westmont Quote</Link>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/move-out-cleaning-joliet-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Joliet</h3>
              <p className="text-sm text-gray-600">Serving all Joliet zip codes including 60431 &amp; 60435.</p>
            </Link>
            <Link href="/move-out-cleaning-bolingbrook-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Bolingbrook</h3>
              <p className="text-sm text-gray-600">Serving zip codes 60440 &amp; 60490.</p>
            </Link>
            <Link href="/move-out-cleaning-lockport-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Lockport</h3>
              <p className="text-sm text-gray-600">Serving all of Lockport (60441).</p>
            </Link>
            <Link href="/move-out-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Our Full Move-Out Cleaning Service</h3>
              <p className="text-sm text-gray-600">See everything included in every move-out clean.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Get Your Free Westmont Move-Out Quote</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Don&apos;t leave your deposit on the table. Get your free move-out cleaning quote for
                Westmont, IL — we respond within 1 business day and back every job with our
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
