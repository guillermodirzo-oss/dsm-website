import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Deep Cleaning Services Minooka IL",
  description:
    "Professional deep cleaning in Minooka, IL. DSM Cleaning Solutions - family owned, eco-friendly, fully insured. 48-hr satisfaction guarantee. Free quote.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning-minooka-il" },
  openGraph: {
    title: "Deep Cleaning Services Minooka IL",
    description:
      "Professional deep cleaning in Minooka, IL. DSM Cleaning Solutions - family owned, eco-friendly, fully insured. 48-hr satisfaction guarantee. Free quote.",
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning-minooka-il",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "Do you offer deep cleaning in Minooka, IL?",
    answer:
      "Yes - DSM Cleaning Solutions provides professional deep cleaning throughout Minooka, IL (zip code 60447), including Minooka Acres, Heritage Fields, Fox Run, Aux Sable Creek Estates, and Old Town Minooka. We're based in nearby Romeoville and serve all of Minooka and the surrounding Grundy and Will County communities.",
  },
  {
    question: "How far is DSM from Minooka, IL?",
    answer:
      "Our base is in Romeoville, IL - approximately 20-30 minutes from most Minooka neighborhoods depending on traffic. We serve Minooka regularly alongside our Joliet and Shorewood clients throughout Will and Grundy counties.",
  },
  {
    question: "What neighborhoods in Minooka do you serve?",
    answer:
      "We serve all of Minooka (60447), including Minooka Acres, Heritage Fields, Fox Run, Aux Sable Creek Estates, and Old Town Minooka, as well as homes along the Route 6 Corridor, near the Aux Sable Creek, and throughout Minooka's newer developments.",
  },
  {
    question: "Is your deep cleaning team insured in Minooka?",
    answer:
      "Yes - DSM Cleaning Solutions is fully insured and bonded in Illinois, covering all Minooka service areas. Every team member is background-checked and we carry full liability insurance on every job, so you can book with complete confidence.",
  },
  {
    question: "How often should Minooka homes get deep cleaned?",
    answer:
      "We recommend a professional deep clean at least once or twice a year for most Minooka homes. Newly built homes benefit from a deep clean after construction dust and debris settle in. Households with pets, allergies, or young children benefit from deep cleaning every 3-4 months. Many Minooka clients pair a seasonal deep clean with our recurring standard cleaning service.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Deep Cleaning",
  name: "Deep Cleaning in Minooka, IL",
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
    name: "Minooka",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description:
    "Professional deep cleaning in Minooka, IL. DSM Cleaning Solutions - family owned, eco-friendly, fully insured. 48-hr satisfaction guarantee. Free quote.",
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
  { icon: "", title: "Eco-Friendly", desc: "Non-toxic, biodegradable products safe for kids and pets." },
  { icon: "", title: "Fully Insured & Bonded", desc: "Background-checked team. Your Minooka home is fully protected." },
  { icon: "", title: "48-Hour Guarantee", desc: "We re-clean anything that isn't right within 48 hours." },
  { icon: "", title: "Family Owned", desc: "Based in nearby Romeoville - your southwest suburbs neighbors." },
  { icon: "", title: "7 Days a Week", desc: "Available 8am-6pm, 7 days a week for your Minooka schedule." },
  { icon: "", title: "Serving Minooka", desc: "All neighborhoods in zip code 60447." },
];

export default function DeepCleaningMinookaPage() {
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
              <span className="text-white">Minooka</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Deep Cleaning Services in Minooka, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions delivers a thorough, top-to-bottom deep clean for homes across
              Minooka - from Heritage Fields and Fox Run to Aux Sable Creek Estates and Old Town
              Minooka. Whether your home is newly built or well-established, we clean every surface
              inside and out.
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
          <h2 className="section-heading mb-6">Professional Deep Cleaning Services in Minooka, IL</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>Deep cleaning in Minooka, IL</strong> is our specialty - and DSM Cleaning Solutions brings
            the same meticulous, detail-focused approach to every home we serve. Whether you live in
            Minooka Acres, Heritage Fields, Fox Run, Aux Sable Creek Estates, or Old Town Minooka,
            our team covers all of Minooka (zip code 60447) with a comprehensive clean that goes far
            beyond your regular maintenance routine.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Minooka is one of the fastest-growing communities in the southwest Chicago suburbs  - 
            with new construction bringing hundreds of families to neighborhoods like Heritage Fields
            and Fox Run each year. New builds especially benefit from a professional deep clean after
            the construction phase: construction dust settles deep into vents, window sills, and
            cabinet interiors that a regular cleaning will miss. Our Minooka deep cleaning service
            tackles all of it. We&apos;re a family-owned business based in nearby Romeoville, and we
            know this corridor of Will and Grundy counties well.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We use only eco-friendly, non-toxic products - safe for your family, pets, and all
            surfaces including the newer finishes and materials common in Minooka&apos;s newly built
            homes. Conveniently located near <Link href="/deep-cleaning-joliet-il" className="text-brand-green font-semibold hover:underline">Joliet</Link> and{" "}
            <Link href="/deep-cleaning-shorewood-il" className="text-brand-green font-semibold hover:underline">Shorewood</Link>, we serve
            Minooka as part of our regular southwest suburbs route.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Our Deep Cleaning in Minooka, IL</h2>
            <p className="section-subheading mx-auto">
              Every room in your Minooka home - cleaned top to bottom.
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
            <h2 className="section-heading">Why Minooka Residents Choose DSM Cleaning Solutions</h2>
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
          <h2 className="section-heading mb-6">How Much Does Deep Cleaning Cost in Minooka, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Deep cleaning in Minooka starts around $200 for smaller homes and scales based on the
            number of bedrooms and bathrooms, the size of the home, and how long it&apos;s been since
            your last professional clean. Most Minooka homes fall in the $225-$350 range. Newer
            construction homes may require additional attention to vents, tracks, and hard-to-reach
            areas where construction dust has settled.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We always provide a free, no-obligation estimate before any work begins. You&apos;ll know
            exactly what to expect before we arrive at your Minooka home - no surprises.
            Contact us at (815) 246-2113 or fill out the form below.
          </p>
          <Link href="/contact" className="btn-primary">Get My Free Minooka Quote</Link>
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
              <p className="text-sm text-gray-600">Serving all Joliet zip codes including 60431 &amp; 60435.</p>
            </Link>
            <Link href="/deep-cleaning-shorewood-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Shorewood</h3>
              <p className="text-sm text-gray-600">Serving all of Shorewood (60404).</p>
            </Link>
            <Link href="/deep-cleaning-plainfield-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Plainfield</h3>
              <p className="text-sm text-gray-600">Serving zip codes 60544 &amp; 60585.</p>
            </Link>
            <Link href="/deep-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Our Full Deep Cleaning Service</h3>
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
              <h2 className="text-4xl font-bold mb-4">Book Your Deep Cleaning in Minooka Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Ready for a Minooka home that&apos;s clean from top to bottom? Get your free deep cleaning
                quote - we respond within 1 business day and back every job with our 48-hour satisfaction
                guarantee.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                 (815) 246-2113
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