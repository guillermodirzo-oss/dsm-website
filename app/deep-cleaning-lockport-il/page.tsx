import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Deep Cleaning Services Lockport IL",
  description:
    "Professional deep cleaning in Lockport IL by DSM Cleaning Solutions. Family owned, fully insured, 48-hr guarantee. Call (815) 246-2113.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning-lockport-il" },
  openGraph: {
    title: "Deep Cleaning Services Lockport IL",
    description:
      "Professional deep cleaning in Lockport IL by DSM Cleaning Solutions. Family owned, fully insured, 48-hr guarantee. Call (815) 246-2113.",
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning-lockport-il",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "Do you offer deep cleaning in Lockport, IL?",
    answer:
      "Yes Ã¢â‚¬â€ DSM Cleaning Solutions proudly serves all of Lockport, IL (zip code 60441) with professional deep cleaning. We cover every neighborhood including Lockport Estates, Heritage Woods, Milne Grove, Downtown Lockport, and Dellwood Park.",
  },
  {
    question: "How far is DSM from Lockport?",
    answer:
      "DSM Cleaning Solutions is based in Romeoville, IL Ã¢â‚¬â€ just a short drive from Lockport. Our proximity means we can respond quickly, schedule around your timeline, and show up on time every visit.",
  },
  {
    question: "What areas of Lockport do you serve?",
    answer:
      "We serve all of Lockport, IL Ã¢â‚¬â€ zip code 60441 Ã¢â‚¬â€ including Lockport Estates, Heritage Woods, Milne Grove, Downtown Lockport near the Historic District, and Dellwood Park. If you're in Lockport, we come to you.",
  },
  {
    question: "Is your deep cleaning team insured in Lockport?",
    answer:
      "Yes Ã¢â‚¬â€ DSM Cleaning Solutions is fully insured and bonded in Illinois, including all of Lockport. Every team member is background-checked and we carry liability insurance on every job.",
  },
  {
    question: "How often should Lockport homes get deep cleaned?",
    answer:
      "We recommend a professional deep clean at least once or twice a year for most Lockport homes. Homes with pets, allergies, or young children benefit from cleaning every 3Ã¢â‚¬â€œ4 months. Many clients pair seasonal deep cleans with our ongoing standard cleaning service.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Deep Cleaning",
  name: "Deep Cleaning in Lockport, IL",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.dsmcleaningsolutions.com/#business",
    name: "DSM Cleaning Solutions",
    telephone: "+18152462113",
  },
  areaServed: {
    "@type": "City",
    name: "Lockport",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description:
    "Professional deep cleaning in Lockport IL by DSM Cleaning Solutions. Family owned, fully insured, 48-hr guarantee. Call (815) 246-2113.",
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
  { icon: "Ã°Å¸Å’Â¿", title: "Eco-Friendly", desc: "Non-toxic, biodegradable products safe for kids and pets." },
  { icon: "Ã°Å¸â€ºÂ¡Ã¯Â¸Â", title: "Fully Insured & Bonded", desc: "Background-checked team. Your Lockport home is fully protected." },
  { icon: "Ã¢Å“â€¦", title: "48-Hour Guarantee", desc: "We re-clean anything that isn't right within 48 hours." },
  { icon: "Ã°Å¸â€˜Â¨Ã¢â‚¬ÂÃ°Å¸â€˜Â©Ã¢â‚¬ÂÃ°Å¸â€˜Â§", title: "Family Owned", desc: "Based in nearby Romeoville Ã¢â‚¬â€ your southwest suburbs neighbors." },
  { icon: "Ã°Å¸â€œâ€¦", title: "7 Days a Week", desc: "Flexible scheduling to fit your Lockport lifestyle." },
  { icon: "Ã°Å¸â€œÂ", title: "Serving Lockport", desc: "All neighborhoods throughout zip code 60441." },
];

export default function DeepCleaningLockportPage() {
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
              <Link href="/deep-cleaning" className="hover:text-white">Deep Cleaning</Link>
              <span>/</span>
              <span className="text-white">Lockport</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Deep Cleaning Services in Lockport, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions delivers a thorough, top-to-bottom deep clean for homes across
              Lockport Ã¢â‚¬â€ from Lockport Estates to Heritage Woods and Dellwood Park. Every surface
              scrubbed, every grout line restored, every appliance cleaned inside and out.
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
          <h2 className="section-heading mb-6">Professional Deep Cleaning Services in Lockport, IL</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Deep cleaning in Lockport, IL is our specialty Ã¢â‚¬â€ and DSM Cleaning Solutions brings the
            same meticulous, detail-focused approach to every home we serve throughout zip code
            60441. Whether you live in Lockport Estates, Heritage Woods, Milne Grove, or near the
            beautiful Lockport Historic District and Pioneer Settlement area, our team delivers a
            comprehensive clean that goes far beyond your regular maintenance routine.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Lockport families choose DSM because we treat every home like our own. We&apos;re a
            family-owned business based in nearby Romeoville Ã¢â‚¬â€ just a short drive away Ã¢â‚¬â€ and we take
            pride in the results we deliver throughout Will County. Whether you&apos;re near Dellwood
            Park, the Illinois &amp; Michigan Canal corridor, or in one of Lockport&apos;s established
            residential neighborhoods, our team covers every surface, every grout line, and every
            appliance with the same thorough approach.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We use only eco-friendly, non-toxic cleaning products that are safe for your family and
            pets. All cleaners are background-checked and fully insured Ã¢â‚¬â€ giving Lockport homeowners
            complete confidence every time we visit.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Our Deep Cleaning in Lockport, IL</h2>
            <p className="section-subheading mx-auto">
              Every room in your Lockport home Ã¢â‚¬â€ cleaned top to bottom.
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
            <h2 className="section-heading">Why Lockport Residents Choose DSM Cleaning Solutions</h2>
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
          <h2 className="section-heading mb-6">How Much Does Deep Cleaning Cost in Lockport, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Deep cleaning in Lockport starts around $200 for smaller homes and increases based on
            the size of your home, the number of bedrooms and bathrooms, and how long it&apos;s been since
            your last professional clean. A 3Ã¢â‚¬â€œ4 bedroom home in Lockport Estates or Heritage Woods
            typically falls in the $250Ã¢â‚¬â€œ$350 range.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We always provide a free, no-obligation estimate before any work begins. There are no
            surprises Ã¢â‚¬â€ you&apos;ll know exactly what to expect before we arrive at your Lockport home.
          </p>
          <Link href="/contact" className="btn-primary">Get My Free Lockport Quote</Link>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/deep-cleaning-joliet-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Joliet</h3>
              <p className="text-sm text-gray-600">Serving all Joliet zip codes.</p>
            </Link>
            <Link href="/deep-cleaning-plainfield-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Plainfield</h3>
              <p className="text-sm text-gray-600">Serving zip codes 60544 & 60585.</p>
            </Link>
            <Link href="/deep-cleaning-romeoville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Romeoville</h3>
              <p className="text-sm text-gray-600">Serving all of Romeoville, IL (60446).</p>
            </Link>
            <Link href="/deep-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Learn More About Our Deep Cleaning</h3>
              <p className="text-sm text-gray-600">See everything included in every deep clean.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Your Deep Cleaning in Lockport Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Ready for a home that&apos;s clean from top to bottom? Get your free deep cleaning quote
                for Lockport, IL Ã¢â‚¬â€ we respond within 1 business day and back every job with our
                48-hour satisfaction guarantee.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                Ã°Å¸â€œÅ¾ (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned Ã‚Â· Eco-friendly Ã‚Â· Fully insured Ã‚Â· Satisfaction guaranteed</p>
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