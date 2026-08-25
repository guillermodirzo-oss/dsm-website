import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { STANDARD_CLEANING_TIERS, formatPrice } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Standard Cleaning Services Homer Glen IL",
  description:
    "Recurring house cleaning in Homer Glen, IL. DSM Cleaning Solutions - trusted, insured & eco-friendly. Free estimate.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/standard-cleaning-homer-glen-il" },
  openGraph: {
    title: "Standard Cleaning Services Homer Glen IL",
    description:
      "Recurring house cleaning in Homer Glen, IL. DSM Cleaning Solutions - trusted, insured & eco-friendly. Free estimate.",
    url: "https://www.dsmcleaningsolutions.com/standard-cleaning-homer-glen-il",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "How often should I schedule cleaning for my Homer Glen home?",
    answer:
      "Most Homer Glen families choose biweekly service - it keeps larger homes consistently clean without overextending your budget. Households with children, pets, or frequent entertaining often prefer weekly cleaning. Monthly service works well for clients who do light maintenance between professional visits.",
  },
  {
    question: "Do you bring your own eco-friendly supplies to Homer Glen?",
    answer:
      "Yes - we arrive fully equipped with all our eco-friendly, non-toxic cleaning products and equipment. You don't need to supply a thing. Our green products are effective on all surfaces common in Homer Glen's well-appointed homes and are safe for your children and pets.",
  },
  {
    question: "Are your Homer Glen cleaners background checked?",
    answer:
      "Yes - every member of our cleaning team is background-checked, insured, and bonded. We take the security of your Homer Glen home seriously, whether you're present during the clean or not.",
  },
  {
    question: "What recurring cleaning plans do you offer in Homer Glen?",
    answer:
      "We offer weekly, biweekly, and monthly recurring cleaning plans for Homer Glen homes. All plans include the same thorough checklist - the frequency is simply adjusted to your household's needs and budget. Contact us at (815) 246-2113 to set up your Homer Glen plan.",
  },
  {
    question: "What zip codes in Homer Glen do you serve?",
    answer:
      "We serve all of Homer Glen, including zip code 60491. This covers Homer Lakes, Farmington Lakes, The Highlands, Tamarack Fairways, Homer Glen Estates, and all neighborhoods throughout the village near Lake Katherine Nature Center and Hadley Valley Preserve.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Standard House Cleaning",
  name: "Standard Cleaning in Homer Glen, IL",
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
    name: "Homer Glen",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description:
    "Recurring house cleaning in Homer Glen, IL. DSM Cleaning Solutions - trusted, insured & eco-friendly. Free estimate.",
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
  { icon: "", title: "Eco-Friendly", desc: "Non-toxic, biodegradable products safe for your Homer Glen family." },
  { icon: "", title: "Fully Insured & Bonded", desc: "Background-checked team. Your Homer Glen home is fully protected." },
  { icon: "", title: "48-Hour Guarantee", desc: "We re-clean anything that isn't right within 48 hours." },
  { icon: "", title: "Family Owned", desc: "Based in nearby Romeoville - your southwest suburbs neighbors." },
  { icon: "", title: "7 Days a Week", desc: "Available 8am-6pm, 7 days a week for your Homer Glen schedule." },
  { icon: "", title: "Serving Homer Glen", desc: "All neighborhoods in zip code 60491." },
];

export default function StandardCleaningHomerGlenPage() {
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
              <span className="text-white">Homer Glen</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Standard Cleaning Services in Homer Glen, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions provides reliable, recurring house cleaning for Homer Glen homes  - 
              from Homer Lakes and Farmington Lakes to The Highlands, Tamarack Fairways, and Homer Glen
              Estates. Weekly, biweekly, or monthly - on your schedule, with the consistency your
              large Homer Glen home deserves.
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
          <h2 className="section-heading mb-6">Trusted Standard Cleaning Services in Homer Glen, IL</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>Standard house cleaning in Homer Glen, IL</strong> keeps your home consistently presentable
            between deeper cleans - and DSM Cleaning Solutions makes it easy. Whether you live in Homer
            Lakes, Farmington Lakes, The Highlands, or Homer Glen Estates, our team covers all of Homer
            Glen (zip code 60491) with a reliable, detailed clean you can count on visit after visit.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Homer Glen is known for its spacious, upscale residential properties - and larger homes
            require more time and attention to clean properly. We&apos;re a family-owned company based in
            Romeoville, just 15-20 minutes from Homer Glen, and we understand the higher standard that
            comes with cleaning homes in this community. Our standard cleaning service covers all the
            essentials in every room - kitchens, bathrooms, bedrooms, and living areas - on a schedule
            that fits your lifestyle. No shortcuts, no rushed visits.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Homer Glen sits close to both <Link href="/standard-cleaning-lockport-il" className="text-brand-green font-semibold hover:underline">Lockport</Link> and{" "}
            <Link href="/standard-cleaning-joliet-il" className="text-brand-green font-semibold hover:underline">Joliet</Link>, and we
            serve all three communities as part of our regular route. Our eco-friendly, non-toxic products
            are safe for your children and pets - and our background-checked team treats every Homer
            Glen home with the respect it deserves.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Our Standard Cleaning in Homer Glen, IL</h2>
            <p className="section-subheading mx-auto">
              A thorough, consistent clean for your Homer Glen home - every visit.
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
            <h2 className="section-heading">Why Homer Glen Homeowners Choose DSM Cleaning Solutions</h2>
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
          <h2 className="section-heading mb-6">How Much Does Standard Cleaning Cost in Homer Glen, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Standard cleaning in Homer Glen starts at {formatPrice(STANDARD_CLEANING_TIERS[0].price)} for smaller homes and scales with the
            size of your home, the number of rooms, and how frequently you schedule service. Homer
            Glen&apos;s larger single-family homes - many of which feature 4+ bedrooms and multiple living
            areas - are priced higher based on square footage and bathroom count. Recurring clients receive preferred
            pricing - biweekly and weekly clients pay less per visit than one-time bookings.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Every estimate is free and no-obligation. We&apos;ll assess your Homer Glen home&apos;s needs and
            give you a clear, upfront quote before we begin - no surprises on cleaning day.
          </p>
          <Link href="/contact" className="btn-primary">Get My Free Homer Glen Quote</Link>
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
            <Link href="/standard-cleaning-lockport-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Lockport</h3>
              <p className="text-sm text-gray-600">Serving all of Lockport (60441).</p>
            </Link>
            <Link href="/standard-cleaning-joliet-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Joliet</h3>
              <p className="text-sm text-gray-600">Serving all Joliet zip codes including 60431 &amp; 60435.</p>
            </Link>
            <Link href="/standard-cleaning-bolingbrook-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Bolingbrook</h3>
              <p className="text-sm text-gray-600">Serving zip codes 60440 &amp; 60490.</p>
            </Link>
            <Link href="/standard-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Our Full Standard Cleaning Service</h3>
              <p className="text-sm text-gray-600">See everything included in every visit.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Your Standard Cleaning in Homer Glen Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Ready for a consistently clean Homer Glen home? Get your free standard cleaning quote  - 
                we respond within 1 business day and back every job with our 48-hour satisfaction guarantee.
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