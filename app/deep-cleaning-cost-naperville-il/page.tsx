import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Deep Cleaning Cost Naperville IL 2026 Guide",
  description:
    "How much does deep cleaning cost in Naperville IL? See 2026 pricing and get a free quote from DSM Cleaning Solutions.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning-cost-naperville-il" },
  openGraph: {
    title: "Deep Cleaning Cost Naperville IL 2026 Guide | DSM Cleaning Solutions",
    description:
      "How much does deep cleaning cost in Naperville IL? See 2026 pricing and get a free quote from DSM Cleaning Solutions.",
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning-cost-naperville-il",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "Deep Cleaning Cost Naperville IL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "How much does deep cleaning cost in Naperville, IL?",
    answer:
      "Deep cleaning in Naperville, IL starts at $315 for a 2-bedroom/1-bath home and goes up to $830+ for a 5-bedroom/3-bath home. Exact pricing depends on your home size, current condition, and any add-ons. DSM Cleaning Solutions provides free, no-obligation estimates — call (815) 246-2113 or fill out our contact form for your Naperville deep clean quote.",
  },
  {
    question: "What is included in deep cleaning in Naperville?",
    answer:
      "Our Naperville deep cleaning covers everything in a standard clean plus: inside kitchen appliances (oven, microwave, refrigerator exterior), scrubbing grout and tile, cleaning inside cabinet fronts, wiping all baseboards and door frames, cleaning ceiling fans and light fixtures, washing window sills and tracks, scrubbing bathroom fixtures and shower doors, and detail-cleaning areas that are skipped in routine visits.",
  },
  {
    question: "How long does a deep clean take in Naperville?",
    answer:
      "A deep clean for a 2-3 bedroom Naperville home typically takes 4–6 hours with a team of two cleaners. Larger homes (4-5 bedrooms) may take 6–8 hours. Homes that haven't been professionally cleaned in a long time may require additional time. We always aim to give you an accurate time estimate when we provide your quote.",
  },
  {
    question: "Is deep cleaning worth the cost in Naperville?",
    answer:
      "Yes — deep cleaning is worth it for most Naperville homeowners who want a true reset. A standard clean maintains a home that's already clean; a deep clean eliminates built-up grease, grime, soap scum, and dust from areas that accumulate over time. It's especially valuable before hosting guests, after a renovation, at the start of a new season, or as a first clean before starting a recurring service.",
  },
  {
    question: "How do I get a deep cleaning quote for my Naperville home?",
    answer:
      "Contact DSM Cleaning Solutions through our website form or call (815) 246-2113. We'll ask about your home's bedrooms and bathrooms, your zip code (60540, 60563, 60564, or 60565), the current condition, and any add-ons you'd like. Most Naperville quotes are provided same-day. There's no obligation to book after receiving your quote.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Deep Cleaning",
  name: "Deep Cleaning Services in Naperville, IL",
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
    "Deep cleaning pricing guide for Naperville, IL. DSM Cleaning Solutions offers professional deep cleaning in zip codes 60540, 60563, 60564 & 60565. Flat-rate quotes, no hidden fees.",
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
    { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.dsmcleaningsolutions.com/pricing" },
    { "@type": "ListItem", position: 3, name: "Deep Cleaning Cost Naperville IL", item: "https://www.dsmcleaningsolutions.com/deep-cleaning-cost-naperville-il" },
  ],
};

const pricingBySize = [
  { size: "2 Bed / 1 Bath", price: "$315", time: "3–5 hours" },
  { size: "3 Bed / 2 Bath", price: "$455", time: "5–6 hours" },
  { size: "4 Bed / 2.5 Bath", price: "$630", time: "6–8 hours" },
  { size: "5 Bed / 3 Bath", price: "$830+", time: "7–9 hours" },
];

const included = [
  { room: "Kitchen", items: ["Inside microwave", "Inside and outside oven", "Refrigerator exterior", "Grease-cut stovetop and drip pans", "Wipe all cabinet fronts and handles", "Scrub sink and faucet", "Clean small appliances", "Sweep and mop floor"] },
  { room: "Bathrooms", items: ["Scrub grout and tile", "Remove soap scum from shower/tub", "Clean inside and behind toilet", "Polish all fixtures", "Scrub sink and vanity", "Wipe all baseboards", "Clean mirrors and glass", "Scrub floor"] },
  { room: "Bedrooms & Living", items: ["Dust ceiling fans and fixtures", "Wipe all baseboards and door frames", "Clean window sills and tracks", "Dust all surfaces top-to-bottom", "Vacuum carpets with edge detail", "Sweep and mop hard floors", "Wipe light switches and outlets"] },
  { room: "Whole Home", items: ["Wipe all doors and door frames", "Clean all vents and registers", "Spot-clean walls as needed", "Wipe all window sills", "Empty and re-line trash bins", "Final walkthrough inspection"] },
];

const factors = [
  { icon: "🏠", title: "Home Size", desc: "Bedrooms and bathrooms are the primary driver of deep cleaning cost in Naperville." },
  { icon: "📋", title: "Current Condition", desc: "Homes not professionally cleaned recently take more time and may incur a condition adjustment." },
  { icon: "🔧", title: "Add-On Services", desc: "Inside refrigerator, inside oven, laundry, and interior window cleaning are optional extras." },
  { icon: "🔄", title: "First-Time vs. Recurring", desc: "First-time deep cleans typically cost more; recurring deep clean customers receive better rates." },
];

export default function DeepCleaningCostNapervillePage() {
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
              <Link href="/pricing" className="hover:text-white">Pricing</Link>
              <span>/</span>
              <span className="text-white">Deep Cleaning Cost Naperville IL</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              How Much Does Deep Cleaning Cost in Naperville, IL? (2026 Guide)
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transparent 2026 deep cleaning prices for Naperville homes across zip codes 60540,
              60563, 60564, and 60565. Flat-rate quotes, no hourly surprises, no hidden fees.
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
            {["✅ Flat-Rate Pricing", "🚫 No Hidden Fees", "🌿 Eco-Friendly", "👨‍👩‍👧 Family Owned", "⭐ 5-Star Rated"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Deep Cleaning Prices in Naperville, IL (2026)</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Deep cleaning cost in Naperville, IL is one of the most searched questions we get —
            and for good reason. Deep cleaning is a significant investment, and homeowners want
            to know what they&apos;re paying for before committing. At DSM Cleaning Solutions, we
            use flat-rate pricing so you always know the cost before we arrive.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We serve all of Naperville across zip codes <strong>60540</strong>,{" "}
            <strong>60563</strong>, <strong>60564</strong>, and <strong>60565</strong> —
            including neighborhoods like Hobson West, Ashbury, White Eagle, and Downtown
            Naperville. Deep cleaning is recommended as a first clean before starting recurring
            service, as a seasonal reset, after renovations, or when a home hasn&apos;t been
            professionally cleaned in several months.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Unlike standard cleaning which maintains a home, deep cleaning addresses built-up
            grease, soap scum, dust in hidden areas, and surfaces that routine visits don&apos;t
            reach. The result is a truly clean baseline your home can build from.
          </p>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Naperville Deep Cleaning Prices by Home Size (2026)</h2>
            <p className="section-subheading mx-auto">
              Starting prices for Naperville homes. Exact quote based on condition and add-ons.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="text-left px-6 py-4 font-semibold">Home Size</th>
                  <th className="text-center px-6 py-4 font-semibold">Starting Price</th>
                  <th className="text-center px-6 py-4 font-semibold">Estimated Time</th>
                </tr>
              </thead>
              <tbody>
                {pricingBySize.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.size}</td>
                    <td className="px-6 py-4 text-center text-brand-green font-bold text-lg">{row.price}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            *Starting prices for Naperville, IL. Final quote depends on home condition and add-ons.{" "}
            <Link href="/contact" className="text-brand-green font-medium hover:underline">Get your exact Naperville quote →</Link>
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What Is Included in a Naperville Deep Clean?</h2>
            <p className="section-subheading mx-auto">
              Every room, every surface — a complete deep cleaning checklist.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {included.map((section) => (
              <div key={section.room} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
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

      {/* DEEP VS STANDARD */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-8">Deep Cleaning vs. Standard Cleaning Costs in Naperville</h2>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Feature</th>
                  <th className="text-center px-6 py-4 font-semibold">Standard Cleaning</th>
                  <th className="text-center px-6 py-4 font-semibold">Deep Cleaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { feature: "Starting price (2 bed / 1 bath)", standard: "$160", deep: "$315" },
                  { feature: "Inside appliances", standard: "✗", deep: "✓" },
                  { feature: "Grout scrubbing", standard: "✗", deep: "✓" },
                  { feature: "Baseboard detail cleaning", standard: "Light wipe", deep: "Full scrub" },
                  { feature: "Ceiling fans & fixtures", standard: "✗", deep: "✓" },
                  { feature: "Inside cabinet fronts", standard: "✗", deep: "✓" },
                  { feature: "Window sill & track detail", standard: "✗", deep: "✓" },
                  { feature: "Estimated time (2 bed / 1 bath)", standard: "2–3 hours", deep: "4–6 hours" },
                  { feature: "Best for", standard: "Regular maintenance", deep: "First clean, seasonal reset" },
                ].map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50">
                    <td className="px-6 py-3 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-3 text-center text-gray-600">{row.standard}</td>
                    <td className="px-6 py-3 text-center text-brand-green font-semibold">{row.deep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHAT AFFECTS PRICE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What Affects Deep Cleaning Prices in Naperville?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {factors.map((f) => (
              <div key={f.title} className="bg-brand-green-50 border border-brand-green-100 rounded-xl p-6 text-center">
                <span className="text-4xl block mb-3">{f.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW DSM PRICES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">How DSM Prices Deep Cleans in Naperville</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            When Naperville homeowners contact us for a deep cleaning quote, we use a flat-rate
            formula based on your bedroom and bathroom count — the same pricing model used for
            every customer in 60540, 60563, 60564, and 60565. There are no hourly surprises
            and no travel fees within Naperville.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We do ask about the current condition of your home because a home that hasn&apos;t
            been professionally cleaned in over a year may require extra time. If that&apos;s
            the case, we&apos;ll note it in your quote upfront — never as an add-on after we
            arrive. Add-on services like inside refrigerator, laundry, or interior window
            cleaning are listed separately and only added if you request them.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Many Naperville customers start with a deep clean and then move to bi-weekly or
            monthly standard cleaning to maintain the results. Ask about our recurring
            cleaning rates when you call — recurring customers consistently pay less per
            visit than one-time clients.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Naperville Deep Cleaning Cost — FAQs</h2>
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

      {/* RELATED LINKS */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Naperville Deep Cleaning Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/pricing" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Full Pricing Guide</h3>
              <p className="text-sm text-gray-600">See complete pricing for all services across every city we serve.</p>
            </Link>
            <Link href="/deep-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning — Naperville</h3>
              <p className="text-sm text-gray-600">Full details on our deep cleaning service across all Naperville zip codes.</p>
            </Link>
            <Link href="/deep-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning — All Areas</h3>
              <p className="text-sm text-gray-600">Learn about our complete deep cleaning service throughout the southwest suburbs.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Get a Free Naperville Deep Clean Quote</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Tell us your home size and zip code — we&apos;ll send you a firm flat-rate price
                for your Naperville deep cleaning, usually same-day. No obligation to book.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">Serving 60540 · 60563 · 60564 · 60565 · Family-owned · Fully insured</p>
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
