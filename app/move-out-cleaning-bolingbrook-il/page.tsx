import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Move-Out Cleaning Bolingbrook IL",
  description:
    "Move-out cleaning in Bolingbrook, IL. DSM Cleaning Solutions helps renters and homeowners leave their property spotless. 5-star rated, 48-hour guarantee. Book online.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/move-out-cleaning-bolingbrook-il" },
  openGraph: {
    title: "Move-Out Cleaning Bolingbrook IL | DSM Cleaning Solutions",
    description:
      "Move-out cleaning in Bolingbrook, IL. DSM Cleaning Solutions helps renters and homeowners leave their property spotless. 5-star rated, 48-hour guarantee. Book online.",
    url: "https://www.dsmcleaningsolutions.com/move-out-cleaning-bolingbrook-il",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "Will your move-out cleaning help me get my deposit back in Bolingbrook?",
    answer:
      "Yes Ã¢â‚¬â€ our Bolingbrook move-out cleaning is specifically designed to meet landlord inspection standards. We clean every surface, inside every appliance, and inside every cabinet so your property looks move-in ready and maximizes your chances of getting your full security deposit back.",
  },
  {
    question: "How far in advance should I book move-out cleaning in Bolingbrook?",
    answer:
      "We recommend booking at least 3Ã¢â‚¬â€œ5 days before your move-out date to secure your preferred time slot. That said, we do our best to accommodate last-minute requests Ã¢â‚¬â€ give us a call at (815) 246-2113 and we'll see what we can do.",
  },
  {
    question: "Do you clean appliances during move-out cleans?",
    answer:
      "Yes Ã¢â‚¬â€ appliances are a key part of our move-out cleaning. We clean inside and outside the oven, inside and outside the refrigerator, inside the microwave, and the dishwasher interior. These are the areas landlords inspect most closely.",
  },
  {
    question: "How long does a move-out clean take in Bolingbrook?",
    answer:
      "A move-out clean in Bolingbrook typically takes 4Ã¢â‚¬â€œ7 hours for an average-sized home. Larger homes in Stillwater or Lakewood Estates, or properties that haven't been professionally cleaned in a while, may take longer. We'll give you an accurate time estimate when you contact us.",
  },
  {
    question: "Do you offer same-day move-out cleaning in Bolingbrook?",
    answer:
      "We try our best to accommodate urgent requests in Bolingbrook. Same-day availability depends on our schedule, so call us as early as possible at (815) 246-2113. We understand moving timelines can be tight and we'll do everything we can to help.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Move Out Cleaning",
  name: "Move-Out Cleaning in Bolingbrook, IL",
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
    name: "Bolingbrook",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description:
    "Move-out cleaning in Bolingbrook IL by DSM Cleaning Solutions. Get your deposit back. Fully insured. Call (815) 246-2113.",
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
    { "@type": "ListItem", position: 2, name: "Move-Out Cleaning", item: "https://www.dsmcleaningsolutions.com/move-out-cleaning" },
    { "@type": "ListItem", position: 3, name: "Bolingbrook, IL", item: "https://www.dsmcleaningsolutions.com/move-out-cleaning-bolingbrook-il" },
  ],
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
  { icon: "Ã°Å¸â€™Â°", title: "Deposit-Back Focused", desc: "Designed to meet landlord inspection standards in Bolingbrook, IL." },
  { icon: "Ã°Å¸â€ºÂ¡Ã¯Â¸Â", title: "Fully Insured & Bonded", desc: "Background-checked team. Every job fully covered." },
  { icon: "Ã¢Å“â€¦", title: "48-Hour Guarantee", desc: "If your landlord isn&apos;t satisfied, we re-clean at no charge." },
  { icon: "Ã°Å¸â€˜Â¨Ã¢â‚¬ÂÃ°Å¸â€˜Â©Ã¢â‚¬ÂÃ°Å¸â€˜Â§", title: "Family Owned", desc: "Local southwest suburbs business Ã¢â‚¬â€ your trusted neighbors." },
  { icon: "Ã°Å¸â€œâ€¦", title: "Flexible Scheduling", desc: "Book around your move-out timeline in Bolingbrook." },
  { icon: "Ã°Å¸â€œÂ", title: "Serving Bolingbrook", desc: "All neighborhoods Ã¢â‚¬â€ zip codes 60440 & 60490." },
];

export default function MoveOutCleaningBolingbrookPage() {
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
              <Link href="/move-out-cleaning" className="hover:text-white">Move-Out Cleaning</Link>
              <span>/</span>
              <span className="text-white">Bolingbrook</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Move-Out Cleaning in Bolingbrook, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions delivers a landlord-approved, deposit-back move-out clean for
              Bolingbrook homes and apartments. We serve all of 60440 and 60490 Ã¢â‚¬â€ from Naperville
              Acres to Stillwater Ã¢â‚¬â€ with a comprehensive clean built to pass any inspection.
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
          <h2 className="section-heading mb-6">Move-Out Cleaning in Bolingbrook, IL Ã¢â‚¬â€ Built to Get Your Deposit Back</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Move-out cleaning in Bolingbrook, IL is one of DSM Cleaning Solutions&apos; most requested
            services Ã¢â‚¬â€ and for good reason. Bolingbrook renters in Naperville Acres, Americana
            Estates, Pheasant Chase, and across zip codes 60440 and 60490 trust us to deliver the
            kind of deep, comprehensive clean that meets even the strictest landlord standards and
            maximizes the chance of getting their full security deposit back.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Our Bolingbrook move-out cleaning service isn&apos;t a surface-level wipe-down. We clean inside
            every appliance, inside every cabinet, inside every closet Ã¢â‚¬â€ every corner of the empty
            home that a landlord or property manager is likely to inspect. The goal is simple: leave
            the property in better condition than when you first moved in.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We also serve landlords and property managers in Bolingbrook who need reliable turnover
            cleaning between tenants, and home sellers who want their property looking its absolute
            best before listing. Whatever your reason for booking, DSM brings the same thorough
            standard to every move-out job in Bolingbrook.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Our Move-Out Cleaning in Bolingbrook, IL</h2>
            <p className="section-subheading mx-auto">
              A comprehensive checklist designed to pass landlord inspection in Bolingbrook.
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
          <h2 className="section-heading mb-6">How Much Does Move-Out Cleaning Cost in Bolingbrook, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Move-out cleaning in Bolingbrook starts around $150Ã¢â‚¬â€œ$250 for most homes, depending on
            size, number of bathrooms, and current condition. Larger homes in Lakewood Estates or
            Stillwater with multiple bathrooms and full appliance cleaning may be priced higher. We
            recommend booking at least 3Ã¢â‚¬â€œ5 days before your move-out date to secure your preferred
            time slot.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Every Bolingbrook client receives a free, no-obligation estimate before booking. We&apos;re
            transparent about our pricing Ã¢â‚¬â€ no surprises, no hidden add-ons after the job.
          </p>
          <Link href="/contact" className="btn-primary">Get My Free Bolingbrook Quote</Link>
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
              <p className="text-sm text-gray-600">Serving all of Plainfield Ã¢â‚¬â€ zip codes 60544 & 60585.</p>
            </Link>
            <Link href="/move-out-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Naperville</h3>
              <p className="text-sm text-gray-600">Serving 60540, 60563, 60564 & 60565.</p>
            </Link>
            <Link href="/move-out-cleaning-romeoville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Romeoville</h3>
              <p className="text-sm text-gray-600">Serving all of Romeoville, IL (60446).</p>
            </Link>
            <Link href="/move-out-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Learn More About Our Move-Out Cleaning</h3>
              <p className="text-sm text-gray-600">See our complete move-out checklist and what&apos;s included.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Your Move-Out Cleaning in Bolingbrook Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Moving out in Bolingbrook, IL? Get your free quote today. We serve all of 60440 and
                60490 and back every move-out job with our satisfaction guarantee Ã¢â‚¬â€ your deposit back
                or we re-clean at no charge.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                Ã°Å¸â€œÅ¾ (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned Ã‚Â· Eco-friendly Ã‚Â· Fully insured Ã‚Â· Deposit-back focused</p>
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