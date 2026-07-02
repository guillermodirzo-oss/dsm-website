import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Move Out Cleaning Services Joliet IL",
  description:
    "Move-out cleaning in Joliet, IL. DSM Cleaning Solutions helps you get your deposit back. Fully insured. Free estimate.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/move-out-cleaning-joliet-il" },
  openGraph: {
    title: "Move Out Cleaning Services Joliet IL",
    description:
      "Move-out cleaning in Joliet, IL. DSM Cleaning Solutions helps you get your deposit back. Fully insured. Free estimate.",
    url: "https://www.dsmcleaningsolutions.com/move-out-cleaning-joliet-il",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "Will your move-out cleaning help me get my deposit back in Joliet?",
    answer:
      "Yes - our Joliet move-out cleaning is specifically designed to meet landlord inspection standards. We clean every surface, inside every appliance, and inside every cabinet so your property looks move-in ready and maximizes your chances of getting your full security deposit back.",
  },
  {
    question: "How far in advance should I book move-out cleaning in Joliet?",
    answer:
      "We recommend booking at least 3-5 days before your move-out date to secure your preferred time slot. That said, we do our best to accommodate last-minute requests in Joliet - give us a call at (815) 246-2113 and we'll see what we can do.",
  },
  {
    question: "Do you clean appliances during Joliet move-out cleans?",
    answer:
      "Yes - appliances are a key part of our move-out cleaning. We clean inside and outside the oven, inside and outside the refrigerator, inside the microwave, and the dishwasher interior. These are the areas landlords inspect most closely.",
  },
  {
    question: "How long does a move-out clean take in Joliet?",
    answer:
      "A move-out clean in Joliet typically takes 4-7 hours for an average-sized home. Larger homes or properties in neighborhoods like Rock Run or White Oak Subdivision that haven't been professionally cleaned recently may take longer. We'll give you an accurate time estimate when you contact us.",
  },
  {
    question: "Do you offer same-day move-out cleaning in Joliet?",
    answer:
      "We try our best to accommodate urgent requests in Joliet. Same-day availability depends on our schedule, so call us as early as possible at (815) 246-2113. We understand moving timelines can be tight and we'll do everything we can to help.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Move Out Cleaning",
  name: "Move-Out Cleaning in Joliet, IL",
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
    name: "Joliet",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description:
    "Move-out cleaning in Joliet, IL. DSM Cleaning Solutions helps you get your deposit back. Fully insured. Free estimate.",
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
  { icon: "", title: "Deposit-Back Focused", desc: "Designed to meet landlord inspection standards in Joliet, IL." },
  { icon: "", title: "Fully Insured & Bonded", desc: "Background-checked team. Every Joliet job fully covered." },
  { icon: "", title: "48-Hour Guarantee", desc: "If your landlord isn't satisfied, we re-clean at no charge." },
  { icon: "", title: "Family Owned", desc: "Based in nearby Romeoville - your trusted southwest suburbs neighbors." },
  { icon: "", title: "Flexible Scheduling", desc: "Book around your move-out timeline in Joliet." },
  { icon: "", title: "Serving Joliet", desc: "All neighborhoods - zip codes 60431, 60432, 60433, 60435 & 60436." },
];

export default function MoveOutCleaningJolietPage() {
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
              <span className="text-white">Joliet</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Move-Out Cleaning in Joliet, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions delivers a landlord-approved, deposit-back move-out clean for
              Joliet homes and apartments. We serve all Joliet zip codes - 60431, 60432, 60433,
              60435, and 60436 - with a comprehensive clean built to pass any inspection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-white btn-lg">Get a Free Quote</Link>
              <a href="tel:+18152462113" className="btn-outline-white btn-lg"> (815) 246-2113</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600">
            {["Fully Insured & Bonded", "Eco-Friendly Products", "Family Owned", "5-Star Rated", "Satisfaction Guaranteed"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Move-Out Cleaning in Joliet, IL - Built to Get Your Deposit Back</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Move-out cleaning in Joliet, IL is one of DSM Cleaning Solutions&apos; most requested services.
            Joliet renters in Ingalls Park, Rock Run, Forest Park, Woodgate, and across zip codes
            60431, 60432, 60433, 60435, and 60436 trust us to deliver the kind of deep, comprehensive
            clean that meets even the strictest landlord standards and maximizes the chance of getting
            their full security deposit back.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Our Joliet move-out cleaning isn&apos;t a surface-level wipe-down. We clean inside every
            appliance, inside every cabinet, inside every closet - every corner that a landlord or
            property manager is likely to inspect. The goal is simple: leave the property in better
            condition than when you first moved in. DSM is based just 10 miles away in Romeoville,
            so we can respond quickly and schedule around your move-out timeline.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We also serve Joliet landlords and property managers who need reliable turnover cleaning
            between tenants, and home sellers who want their property looking its absolute best before
            listing. Whatever your reason for booking, DSM brings the same thorough standard to every
            move-out job in Joliet.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Our Move-Out Cleaning in Joliet, IL</h2>
            <p className="section-subheading mx-auto">
              A comprehensive checklist designed to pass landlord inspection in Joliet.
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
            <h2 className="section-heading">Why Joliet Residents Choose DSM Cleaning Solutions</h2>
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
          <h2 className="section-heading mb-6">How Much Does Move-Out Cleaning Cost in Joliet, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Move-out cleaning in Joliet starts around $150-$250 for most homes, depending on size,
            number of bathrooms, and current condition. Larger homes in Rock Run or White Oak
            Subdivision with multiple bathrooms and full appliance cleaning may be priced higher. We
            recommend booking at least 3-5 days before your move-out date to secure your preferred
            time slot.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Every Joliet client receives a free, no-obligation estimate before booking. We&apos;re
            transparent about our pricing - no surprises, no hidden add-ons after the job.
          </p>
          <Link href="/contact" className="btn-primary">Get My Free Joliet Quote</Link>
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
            <Link href="/move-out-cleaning-plainfield-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Plainfield</h3>
              <p className="text-sm text-gray-600">Serving zip codes 60544 & 60585.</p>
            </Link>
            <Link href="/move-out-cleaning-romeoville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Romeoville</h3>
              <p className="text-sm text-gray-600">Serving all of Romeoville, IL (60446).</p>
            </Link>
            <Link href="/move-out-cleaning-bolingbrook-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Bolingbrook</h3>
              <p className="text-sm text-gray-600">Serving zip codes 60440 & 60490.</p>
            </Link>
            <Link href="/move-out-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Learn More About Our Move-Out Cleaning</h3>
              <p className="text-sm text-gray-600">See our complete move-out checklist.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Your Move-Out Cleaning in Joliet Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Moving out in Joliet, IL? Get your free quote today. We serve all Joliet zip codes
                and back every move-out job with our satisfaction guarantee - your deposit back or
                we re-clean at no charge.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                 (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned · Eco-friendly · Fully insured · Deposit-back focused</p>
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