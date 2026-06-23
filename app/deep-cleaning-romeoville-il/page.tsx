import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Deep Cleaning Service Romeoville IL",
  description:
    "Expert deep cleaning in Romeoville, IL. We scrub every corner Ã¢â‚¬â€ baseboards, appliances, bathrooms & more. 5.0 stars, 48-hr guarantee. (815) 246-2113.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning-romeoville-il" },
  openGraph: {
    title: "Deep Cleaning Service Romeoville IL | DSM Cleaning Solutions",
    description:
      "Expert deep cleaning in Romeoville, IL. We scrub every corner Ã¢â‚¬â€ baseboards, appliances, bathrooms & more. 5.0 stars, 48-hr guarantee. (815) 246-2113.",
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning-romeoville-il",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "How long does a deep cleaning take in Romeoville, IL?",
    answer:
      "A deep clean in Romeoville typically takes 3Ã¢â‚¬â€œ6 hours. A smaller 2-bedroom home in Windstone may take about 3 hours, while a larger home in Grand Haven or Hidden Lakes could take 5Ã¢â‚¬â€œ6 hours or more depending on condition.",
  },
  {
    question: "Do you serve the Windstone and Hidden Lakes neighborhoods in Romeoville?",
    answer:
      "Yes Ã¢â‚¬â€ we serve all of Romeoville (zip code 60446), including Windstone, Hidden Lakes, Grand Haven, and every other neighborhood throughout the city.",
  },
  {
    question: "How much does deep cleaning cost in Romeoville, IL?",
    answer:
      "Deep cleaning in Romeoville starts at around $200 for smaller homes. Pricing scales with home size and how long it has been since the last professional clean. Contact us for a free, no-obligation estimate.",
  },
  {
    question: "Do I need to be home during the deep cleaning in Romeoville?",
    answer:
      "No Ã¢â‚¬â€ you don&apos;t need to be home. Many of our regular Romeoville clients give us a key or a door code. Our fully insured, bonded, and background-checked team will treat your home with complete care.",
  },
  {
    question: "Is DSM Cleaning Solutions a local company in Romeoville?",
    answer:
      "Yes Ã¢â‚¬â€ DSM Cleaning Solutions is actually based right here in Romeoville, IL. We&apos;re your neighbors, and we take deep pride in serving our home community with the best possible cleaning service.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Deep Cleaning",
  name: "Deep Cleaning in Romeoville, IL",
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
    name: "Romeoville",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description:
    "Expert deep cleaning in Romeoville, IL (60446). DSM Cleaning Solutions Ã¢â‚¬â€ locally owned, eco-friendly, satisfaction guaranteed. Call (815) 246-2113.",
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
      "Clean window sills and inside glass",
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
  { icon: "Ã°Å¸Å’Â¿", title: "Eco-Friendly", desc: "Non-toxic, biodegradable products Ã¢â‚¬â€ the safe choice for your family." },
  { icon: "Ã°Å¸â€ºÂ¡Ã¯Â¸Â", title: "Fully Insured & Bonded", desc: "Background-checked team. Every Romeoville job fully covered." },
  { icon: "Ã¢Å“â€¦", title: "48-Hour Guarantee", desc: "If anything isn&apos;t right, we re-clean it free within 48 hours." },
  { icon: "Ã°Å¸â€˜Â¨Ã¢â‚¬ÂÃ°Å¸â€˜Â©Ã¢â‚¬ÂÃ°Å¸â€˜Â§", title: "Family Owned", desc: "Locally based in Romeoville Ã¢â‚¬â€ your neighbors, not a franchise." },
  { icon: "Ã°Å¸â€œâ€¦", title: "7 Days a Week", desc: "We work around your schedule, including weekends." },
  { icon: "Ã°Å¸â€œÂ", title: "Serving Romeoville", desc: "All neighborhoods throughout zip code 60446." },
];

export default function DeepCleaningRomeovillePage() {
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
              <span className="text-white">Romeoville</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Deep Cleaning in Romeoville, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions is your Romeoville-based deep cleaning team. We&apos;re in your community Ã¢â‚¬â€
              serving Windstone, Hidden Lakes, Grand Haven, and every neighborhood in 60446 with a
              thorough, eco-friendly deep clean you can trust.
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
          <h2 className="section-heading mb-6">Expert Deep Cleaning Services in Romeoville, IL</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Expert deep cleaning in Romeoville, IL starts right here Ã¢â‚¬â€ because DSM Cleaning Solutions
            calls Romeoville home. Based in zip code 60446, we know this community personally and take
            genuine pride in delivering an exceptional clean to every home we visit in Windstone,
            Hidden Lakes, Grand Haven, and beyond.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Romeoville families choose DSM because we combine the personal care of a local business
            with the thoroughness and professionalism of an experienced cleaning team. Our deep cleaning
            service is designed for homeowners who want more than a surface wipe-down Ã¢â‚¬â€ we get into
            every grout line, vent, and corner that regular cleaning misses. Near Isle a la Cache Museum
            or Romeo Lake, whatever part of Romeoville you call home, we&apos;re minutes away and ready
            to transform your space.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every deep cleaning service includes eco-friendly, non-toxic products that are safe for
            children and pets. We&apos;re fully insured and bonded, and we stand behind every job with our
            48-hour satisfaction guarantee. If something isn&apos;t right, we come back and make it right Ã¢â‚¬â€
            at no additional charge.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Our Deep Cleaning in Romeoville, IL</h2>
            <p className="section-subheading mx-auto">
              Every corner of your Romeoville home Ã¢â‚¬â€ cleaned to a higher standard.
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
            <h2 className="section-heading">Why Romeoville Residents Choose DSM Cleaning Solutions</h2>
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
          <h2 className="section-heading mb-6">How Much Does Deep Cleaning Cost in Romeoville, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Deep cleaning in Romeoville starts around $200 for a smaller home and varies based on
            square footage, the number of bathrooms, and the current condition of your home.
            Homes in Grand Haven or newer developments throughout 60446 typically range from
            $225Ã¢â‚¬â€œ$375 for a full deep clean.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We provide every Romeoville client with a free estimate before booking. No deposits required
            until service day, and no hidden fees Ã¢â‚¬â€ just a fair, transparent quote from your local
            cleaning team.
          </p>
          <Link href="/contact" className="btn-primary">Get My Free Romeoville Quote</Link>
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning-plainfield-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Plainfield</h3>
              <p className="text-sm text-gray-600">Serving 60544 & 60585.</p>
            </Link>
            <Link href="/deep-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Naperville</h3>
              <p className="text-sm text-gray-600">Serving 60540, 60563, 60564 & 60565.</p>
            </Link>
            <Link href="/deep-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">View Full Deep Cleaning Service</h3>
              <p className="text-sm text-gray-600">Learn more about what&apos;s included in every deep clean.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Your Deep Cleaning in Romeoville Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                As your local Romeoville cleaning company, we&apos;re ready to deliver a deep clean you can
                see and feel. Get your free quote today Ã¢â‚¬â€ we respond within 1 business day and back
                every job with a 48-hour satisfaction guarantee.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                Ã°Å¸â€œÅ¾ (815) 246-2113
              </a>
              <p className="text-white/80">Locally based Ã‚Â· Eco-friendly Ã‚Â· Fully insured Ã‚Â· Satisfaction guaranteed</p>
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