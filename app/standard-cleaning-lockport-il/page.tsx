import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Standard Cleaning Services Lockport IL",
  description:
    "Recurring house cleaning in Lockport IL by DSM Cleaning Solutions. Trusted, insured & eco-friendly. Call (815) 246-2113.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/standard-cleaning-lockport-il" },
  openGraph: {
    title: "Standard Cleaning Services Lockport IL",
    description:
      "Recurring house cleaning in Lockport IL by DSM Cleaning Solutions. Trusted, insured & eco-friendly. Call (815) 246-2113.",
    url: "https://www.dsmcleaningsolutions.com/standard-cleaning-lockport-il",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "How often should I schedule house cleaning in Lockport?",
    answer:
      "Most Lockport homeowners choose biweekly service, which keeps the home consistently clean without a large budget commitment. Households with children, pets, or heavier activity often prefer weekly cleaning. Monthly service works well if you maintain light upkeep between visits.",
  },
  {
    question: "Do you bring your own eco-friendly supplies to Lockport?",
    answer:
      "Yes Ã¢â‚¬â€ we arrive fully equipped with all our eco-friendly, non-toxic cleaning products and equipment. You don't need to provide anything. Our green products are safe for children and pets throughout your Lockport home.",
  },
  {
    question: "Are your cleaners background checked for Lockport homes?",
    answer:
      "Yes Ã¢â‚¬â€ every member of our cleaning team is background-checked, insured, and bonded. We take the security of your Lockport home seriously, whether you're present during the clean or not.",
  },
  {
    question: "What recurring cleaning plans do you offer in Lockport?",
    answer:
      "We offer weekly, biweekly, and monthly recurring cleaning plans for Lockport homes. Recurring clients receive discounted rates Ã¢â‚¬â€ the more frequently we visit, the more you save. We'll recommend the best frequency based on your home size, lifestyle, and budget.",
  },
  {
    question: "What if I need to reschedule my Lockport cleaning?",
    answer:
      "We ask for at least 24 hours' notice to reschedule. Just give us a call at (815) 246-2113 and we'll get your Lockport appointment rebooked at a time that works for you.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Standard House Cleaning",
  name: "Standard Cleaning in Lockport, IL",
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
    name: "Lockport",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description:
    "Recurring house cleaning in Lockport IL by DSM Cleaning Solutions. Trusted, insured & eco-friendly. Call (815) 246-2113.",
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
      "Wipe countertops and backsplash",
      "Clean stovetop surface",
      "Wipe exterior of appliances",
      "Clean sink and faucet",
      "Wipe cabinet fronts",
      "Empty trash and replace liner",
      "Sweep and mop floor",
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Scrub/disinfect toilet",
      "Clean shower and tub",
      "Wipe sink and vanity",
      "Clean mirrors",
      "Wipe counters and fixtures",
      "Empty trash",
      "Sweep and mop floor",
    ],
  },
  {
    room: "Bedrooms",
    items: [
      "Make beds / change linens (optional)",
      "Dust furniture and surfaces",
      "Vacuum carpets and rugs",
      "Wipe window sills",
      "Empty trash bins",
    ],
  },
  {
    room: "Living Areas",
    items: [
      "Dust all surfaces and shelves",
      "Vacuum furniture and cushions",
      "Vacuum/mop floors",
      "Wipe light switches and handles",
    ],
  },
];

const trustCards = [
  { icon: "Ã°Å¸Å’Â¿", title: "Eco-Friendly", desc: "Non-toxic, biodegradable products safe for your Lockport family." },
  { icon: "Ã°Å¸â€ºÂ¡Ã¯Â¸Â", title: "Fully Insured & Bonded", desc: "Background-checked team. Your home is fully protected." },
  { icon: "Ã¢Å“â€¦", title: "48-Hour Guarantee", desc: "We re-clean anything that isn't right within 48 hours." },
  { icon: "Ã°Å¸â€˜Â¨Ã¢â‚¬ÂÃ°Å¸â€˜Â©Ã¢â‚¬ÂÃ°Å¸â€˜Â§", title: "Family Owned", desc: "Based in nearby Romeoville Ã¢â‚¬â€ your southwest suburbs neighbors." },
  { icon: "Ã°Å¸â€œâ€¦", title: "7 Days a Week", desc: "Flexible scheduling to fit your busy Lockport schedule." },
  { icon: "Ã°Å¸â€œÂ", title: "Serving Lockport", desc: "All neighborhoods throughout zip code 60441." },
];

export default function StandardCleaningLockportPage() {
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
              <Link href="/standard-cleaning" className="hover:text-white">Standard Cleaning</Link>
              <span>/</span>
              <span className="text-white">Lockport</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Standard Cleaning Services in Lockport, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions keeps Lockport homes spotless week after week. Whether you need
              a one-time clean or a recurring schedule in Lockport Estates, Heritage Woods, or
              anywhere in zip code 60441 Ã¢â‚¬â€ we&apos;re your trusted local cleaning team.
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
          <h2 className="section-heading mb-6">Reliable Standard House Cleaning in Lockport, IL</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Standard cleaning in Lockport, IL is one of DSM Cleaning Solutions&apos; most trusted services
            throughout Will County. Lockport families in zip code 60441 Ã¢â‚¬â€ from Lockport Estates and
            Heritage Woods to Milne Grove and Downtown Lockport Ã¢â‚¬â€ rely on us to keep their homes
            consistently clean, visit after visit. Our team shows up on time, follows a detailed
            checklist, and leaves your home spotless every single time.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We offer flexible scheduling Ã¢â‚¬â€ weekly, biweekly, or monthly Ã¢â‚¬â€ to match your lifestyle.
            Biweekly is our most popular plan for Lockport families because it balances frequency and
            cost perfectly. For households with young children, pets, or a very active schedule,
            weekly cleaning keeps everything under control year-round. DSM is based in nearby
            Romeoville, making us a genuinely local choice for Lockport homeowners who want a
            reliable, neighborhood-level cleaning company they can count on.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every visit follows the same detailed checklist Ã¢â‚¬â€ so you always know exactly what&apos;s
            been cleaned and what to expect. No guessing, no surprises.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Our Standard Cleaning in Lockport, IL</h2>
            <p className="section-subheading mx-auto">
              Every room covered on every visit Ã¢â‚¬â€ here&apos;s exactly what our Lockport team cleans.
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
          <h2 className="section-heading mb-6">How Much Does Standard Cleaning Cost in Lockport, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Standard cleaning in Lockport starts around $120Ã¢â‚¬â€œ$180 for an average-sized home, with
            pricing based on the number of bedrooms, bathrooms, and your chosen frequency. Recurring
            clients who book weekly or biweekly service receive a discounted rate Ã¢â‚¬â€ the more we
            visit, the more you save.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We&apos;ll provide a free, no-obligation estimate customized to your Lockport home before
            your first visit. You&apos;ll always know exactly what you&apos;re paying Ã¢â‚¬â€ no hidden fees, no
            surprises.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">We Also Offer Standard Cleaning in Nearby Cities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/standard-cleaning-joliet-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Joliet</h3>
              <p className="text-sm text-gray-600">Serving all Joliet zip codes.</p>
            </Link>
            <Link href="/standard-cleaning-plainfield-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Plainfield</h3>
              <p className="text-sm text-gray-600">Serving zip codes 60544 & 60585.</p>
            </Link>
            <Link href="/standard-cleaning-romeoville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Romeoville</h3>
              <p className="text-sm text-gray-600">Serving all of Romeoville, IL (60446).</p>
            </Link>
            <Link href="/standard-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Learn More About Our Standard Cleaning</h3>
              <p className="text-sm text-gray-600">Explore all plans and what&apos;s included.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Your Standard Cleaning in Lockport Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Ready for a reliably clean home in Lockport, IL? Get your free estimate today Ã¢â‚¬â€
                we serve all of 60441 and back every clean with our 48-hour satisfaction guarantee.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                Ã°Å¸â€œÅ¾ (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned Ã‚Â· Eco-friendly Ã‚Â· Fully insured Ã‚Â· Satisfaction guaranteed</p>
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