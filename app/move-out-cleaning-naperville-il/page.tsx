import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Move-Out Cleaning Naperville IL | 5-Star Rated",
  description:
    "Professional move-out cleaning in Naperville. Spotless results backed by our 48-hr guarantee. 5.0 stars, 47 reviews. Call (815) 246-2113.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/move-out-cleaning-naperville-il" },
  openGraph: {
    title: "Move-Out Cleaning Naperville IL | 5-Star Rated | DSM Cleaning",
    description:
      "Professional move-out cleaning in Naperville. Spotless results backed by our 48-hr guarantee. 5.0 stars, 47 reviews. Call (815) 246-2113.",
    url: "https://www.dsmcleaningsolutions.com/move-out-cleaning-naperville-il",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "How long does a move-out cleaning take in Naperville, IL?",
    answer:
      "Move-out cleaning in Naperville typically takes 4Ã¢â‚¬â€œ8 hours depending on the size of the property. Larger homes in White Eagle or Ashbury may take 6Ã¢â‚¬â€œ8 hours. Condos or townhomes near Downtown Naperville are often completed in 4Ã¢â‚¬â€œ5 hours.",
  },
  {
    question: "Do you serve the Cress Creek and Hobson West neighborhoods in Naperville for move-out cleaning?",
    answer:
      "Yes Ã¢â‚¬â€ we serve all of Naperville for move-out and move-in cleaning, including Cress Creek, Hobson West, Ashbury, White Eagle, and every area in zip codes 60540, 60563, 60564, and 60565.",
  },
  {
    question: "How much does move-out cleaning cost in Naperville, IL?",
    answer:
      "Move-out cleaning in Naperville starts around $150Ã¢â‚¬â€œ$250 for most homes and scales up for larger properties. We always provide a free, no-obligation estimate before your move-out date. Call (815) 246-2113 for a quick quote.",
  },
  {
    question: "Does your Naperville move-out cleaning help get the security deposit back?",
    answer:
      "Yes Ã¢â‚¬â€ that&apos;s exactly what our move-out cleaning is designed for. We follow a comprehensive checklist built to meet Naperville landlord and property manager standards, giving you the best possible chance of receiving your full deposit.",
  },
  {
    question: "Is DSM Cleaning Solutions insured for move-out cleaning in Naperville, IL?",
    answer:
      "Yes Ã¢â‚¬â€ DSM Cleaning Solutions is fully insured and bonded throughout Illinois, including Naperville. Every move-out cleaning job is covered so you and your landlord can proceed with confidence.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Move Out Cleaning",
  name: "Move-Out Cleaning in Naperville, IL",
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
    "Professional move-out cleaning in Naperville, IL. DSM Cleaning Solutions helps renters, landlords & home sellers. Free estimate Ã¢â‚¬â€ (815) 246-2113.",
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
  { icon: "Ã°Å¸â€™Â°", title: "Deposit-Back Focused", desc: "Built to meet Naperville landlord inspection standards." },
  { icon: "Ã°Å¸â€ºÂ¡Ã¯Â¸Â", title: "Fully Insured & Bonded", desc: "Background-checked team. Every job fully protected." },
  { icon: "Ã¢Å“â€¦", title: "48-Hour Guarantee", desc: "We re-clean at no charge if the landlord isn&apos;t satisfied." },
  { icon: "Ã°Å¸â€˜Â¨Ã¢â‚¬ÂÃ°Å¸â€˜Â©Ã¢â‚¬ÂÃ°Å¸â€˜Â§", title: "Family Owned", desc: "Local southwest suburbs business, not a national chain." },
  { icon: "Ã°Å¸â€œâ€¦", title: "Flexible Scheduling", desc: "We work around your Naperville move-out timeline." },
  { icon: "Ã°Å¸â€œÂ", title: "Serving Naperville", desc: "All four zip codes Ã¢â‚¬â€ 60540, 60563, 60564 & 60565." },
];

export default function MoveOutCleaningNapervillePage() {
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
              <span className="text-white">Naperville</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Move-Out Cleaning in Naperville, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions delivers professional move-out and move-in cleaning throughout
              Naperville. Whether you&apos;re a renter trying to secure your deposit, a landlord turning
              over a unit, or a home seller preparing to list Ã¢â‚¬â€ we cover all four Naperville zip codes
              with a thorough, landlord-approved clean.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-white btn-lg">Get a Free Quote</Link>
              <a href="tel:+18152462113" className="btn-outline-white btn-lg">Ã°Å¸â€œÅ¾ (815) 246-2113</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600">
            {["Ã¢Å“â€¦ Fully Insured & Bonded", "Ã°Å¸Å’Â¿ Eco-Friendly Products", "Ã°Å¸â€˜Â¨Ã¢â‚¬ÂÃ°Å¸â€˜Â©Ã¢â‚¬ÂÃ°Å¸â€˜Â§ Family Owned", "Ã¢Â­Â 5-Star Rated", "Ã¢Å“â€Ã¯Â¸Â Satisfaction Guaranteed"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Professional Move-Out Cleaning Services in Naperville, IL</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Professional move-out cleaning in Naperville, IL demands a level of thoroughness that goes
            well beyond a regular cleaning visit Ã¢â‚¬â€ and DSM Cleaning Solutions is built exactly for this.
            We serve Naperville renters and landlords across all four zip codes (60540, 60563, 60564, and
            60565), covering neighborhoods from Cress Creek to White Eagle with a comprehensive move-out
            clean that&apos;s designed to satisfy even the most detail-oriented property manager.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Naperville renters move through some of the most competitive rental markets in the Chicago
            suburbs, and your deposit matters. Our move-out cleaning team doesn&apos;t just wipe surfaces Ã¢â‚¬â€
            we clean inside the oven, inside the refrigerator, inside every cabinet and closet, and along
            every baseboard and window track. We follow the same comprehensive checklist on every
            Naperville move-out job, ensuring nothing is missed.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We also serve Naperville home sellers, real estate agents, and landlords who want a property
            looking its absolute best. Our move-out cleaning is eco-friendly and uses non-toxic products Ã¢â‚¬â€
            safe for the incoming tenant and the environment. Every job is backed by our 48-hour
            satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Our Move-Out Cleaning in Naperville, IL</h2>
            <p className="section-subheading mx-auto">
              Every corner of your Naperville property Ã¢â‚¬â€ cleaned to landlord-inspection standards.
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
          <h2 className="section-heading mb-6">How Much Does Move-Out Cleaning Cost in Naperville, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Move-out cleaning in Naperville starts around $150Ã¢â‚¬â€œ$250 and varies based on the size of
            the property, the number of bathrooms, and overall condition. Larger homes in Ashbury or
            White Eagle with four or more bedrooms typically fall in the $300Ã¢â‚¬â€œ$450 range.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We recommend contacting us at least 3Ã¢â‚¬â€œ5 days before your move-out date to lock in your
            preferred time slot. For urgent requests, call us directly at (815) 246-2113 and we&apos;ll
            do our best to accommodate your Naperville move-out timeline. All estimates are free and
            no-obligation.
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

      {/* NEARBY CITIES */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">We Also Offer Move-Out Cleaning in Nearby Cities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/move-out-cleaning-plainfield-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Plainfield</h3>
              <p className="text-sm text-gray-600">Serving 60544 & 60585.</p>
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
              <h2 className="text-4xl font-bold mb-4">Book Your Move-Out Cleaning in Naperville Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Moving out in Naperville? Get your free quote today. We serve all four zip codes and
                back every move-out job with our satisfaction guarantee. Deposit back or we re-clean
                at no charge.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                Ã°Å¸â€œÅ¾ (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned Ã‚Â· Eco-friendly Ã‚Â· Fully insured Ã‚Â· Deposit-back focused</p>
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