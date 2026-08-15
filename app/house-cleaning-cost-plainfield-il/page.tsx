import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "House Cleaning Prices Plainfield IL 2026 Guide",
  description:
    "How much does house cleaning cost in Plainfield IL? See 2026 pricing for all services from DSM Cleaning Solutions. Free quotes.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/house-cleaning-cost-plainfield-il" },
  openGraph: {
    title: "House Cleaning Prices Plainfield IL 2026 Guide | DSM Cleaning Solutions",
    description:
      "How much does house cleaning cost in Plainfield IL? See 2026 pricing for all services from DSM Cleaning Solutions. Free quotes.",
    url: "https://www.dsmcleaningsolutions.com/house-cleaning-cost-plainfield-il",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "House Cleaning Cost Plainfield IL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "How much does house cleaning cost in Plainfield, IL?",
    answer:
      "House cleaning in Plainfield, IL typically starts at $160 for a standard clean in a 2-bedroom/1-bath home, $315 for a deep clean, and $410 for a move-out clean in the same size home. Prices scale with bedroom and bathroom count. DSM Cleaning Solutions provides free, no-obligation estimates — contact us or call (815) 246-2113 for your exact Plainfield quote.",
  },
  {
    question: "Is deep cleaning more expensive than standard cleaning in Plainfield?",
    answer:
      "Yes — deep cleaning costs roughly twice the price of a standard cleaning in Plainfield because it covers areas that aren't included in routine visits: inside appliances, cabinet interiors, baseboards, grout scrubbing, ceiling fans, and window sills. A standard clean for a 2-bed/1-bath starts at $160 while a deep clean for the same home starts at $315.",
  },
  {
    question: "Do you charge by the hour or flat rate in Plainfield?",
    answer:
      "DSM Cleaning Solutions uses flat-rate pricing in Plainfield, IL — not hourly rates. Your quote is based on your home size (bedrooms and bathrooms) and the type of clean you need. This means you always know the price upfront with no surprises when the job takes longer than expected.",
  },
  {
    question: "How do I get an exact quote for Plainfield cleaning?",
    answer:
      "The fastest way to get an exact quote for your Plainfield home is to fill out our contact form or call (815) 246-2113. We'll ask about your home size (beds and baths), the type of cleaning you need, your zip code (60544 or 60585), and the current condition of your home. Most quotes are provided same-day.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No — DSM Cleaning Solutions does not charge hidden fees in Plainfield or anywhere else we serve. The price you're quoted is the price you pay. There are no extra charges for eco-friendly products, travel within our service area, or routine supplies. Add-on services (like inside oven or inside refrigerator) are discussed and agreed upon before we arrive.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "House Cleaning",
  name: "House Cleaning Services in Plainfield, IL",
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
    name: "Plainfield",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description:
    "House cleaning pricing guide for Plainfield, IL. Standard, deep, and move-out cleaning in 60544 and 60585. Flat-rate pricing, no hidden fees. Free estimate.",
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
    { "@type": "ListItem", position: 3, name: "House Cleaning Cost Plainfield IL", item: "https://www.dsmcleaningsolutions.com/house-cleaning-cost-plainfield-il" },
  ],
};

const pricingBySize = [
  { size: "2 Bed / 1 Bath", standard: "$160", deep: "$315", moveOut: "$410" },
  { size: "3 Bed / 2 Bath", standard: "$225", deep: "$455", moveOut: "$490" },
  { size: "4 Bed / 2.5 Bath", standard: "$310", deep: "$630", moveOut: "$630" },
  { size: "5 Bed / 3 Bath", standard: "$400", deep: "$830", moveOut: "$810" },
];

const factors = [
  { icon: "🏠", title: "Home Size", desc: "Number of bedrooms and bathrooms is the biggest driver. More rooms = more time = higher cost." },
  { icon: "🧹", title: "Type of Clean", desc: "Standard, deep, and move-out cleaning are priced differently based on scope and time." },
  { icon: "📋", title: "Current Condition", desc: "A home that hasn't been cleaned professionally in months requires more time and effort." },
  { icon: "🔄", title: "Frequency", desc: "Recurring customers (weekly, bi-weekly, monthly) typically receive a lower rate than one-time cleans." },
  { icon: "✨", title: "Add-On Services", desc: "Inside oven, inside refrigerator, laundry, and window cleaning are available as add-ons." },
  { icon: "📍", title: "Location in Plainfield", desc: "DSM serves all of Plainfield including 60544 and 60585 with no travel surcharges." },
];

export default function HouseCleaningCostPlainfield() {
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
              <span className="text-white">House Cleaning Cost Plainfield IL</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              How Much Does House Cleaning Cost in Plainfield, IL? (2026 Guide)
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transparent 2026 pricing for standard, deep, and move-out cleaning across Plainfield
              zip codes 60544 and 60585. Flat-rate quotes — no hourly surprises. Family-owned and
              fully insured.
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
            {["✅ Flat-Rate Pricing", "🚫 No Hidden Fees", "🌿 Eco-Friendly Products", "👨‍👩‍👧 Family Owned", "⭐ 5-Star Rated"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">House Cleaning Prices in Plainfield, IL (2026)</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            If you&apos;re searching for house cleaning cost in Plainfield, IL, you&apos;re likely comparing
            options and trying to figure out what&apos;s fair. Prices in Plainfield vary based on home
            size, type of service, and the company you hire — but we believe in full transparency.
            DSM Cleaning Solutions uses flat-rate pricing built on a straightforward formula: your
            number of bedrooms and bathrooms, plus the type of clean you need.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We serve all of Plainfield, IL including zip codes <strong>60544</strong> and{" "}
            <strong>60585</strong>, covering neighborhoods like Settlers Ridge, Grande Park, Brookside,
            Whispering Creek, and more. Whether you need a recurring standard clean, a one-time deep
            clean before the holidays, or a thorough move-out clean before handing over your keys,
            this guide shows you exactly what to expect.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Unlike companies that charge by the hour, our flat-rate model means you always know the
            price before we arrive — no surprises, no hourly overruns, no hidden fees.
          </p>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Plainfield House Cleaning Prices by Home Size (2026)</h2>
            <p className="section-subheading mx-auto">
              Starting prices — exact quotes provided after a quick conversation about your home.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="text-left px-6 py-4 font-semibold">Home Size</th>
                  <th className="text-center px-6 py-4 font-semibold">Standard Cleaning</th>
                  <th className="text-center px-6 py-4 font-semibold">Deep Cleaning</th>
                  <th className="text-center px-6 py-4 font-semibold">Move-Out Cleaning</th>
                </tr>
              </thead>
              <tbody>
                {pricingBySize.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.size}</td>
                    <td className="px-6 py-4 text-center text-brand-green font-semibold">{row.standard}</td>
                    <td className="px-6 py-4 text-center text-brand-green font-semibold">{row.deep}</td>
                    <td className="px-6 py-4 text-center text-brand-green font-semibold">{row.moveOut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            *Starting prices. Final quote depends on home condition, add-ons, and frequency.{" "}
            <Link href="/contact" className="text-brand-green font-medium hover:underline">Get your exact Plainfield quote →</Link>
          </p>
        </div>
      </section>

      {/* WHAT AFFECTS PRICE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What Affects House Cleaning Prices in Plainfield?</h2>
            <p className="section-subheading mx-auto">
              Six factors determine what you&apos;ll pay for house cleaning in Plainfield, IL.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {factors.map((f) => (
              <div key={f.title} className="bg-brand-green-50 border border-brand-green-100 rounded-xl p-6">
                <span className="text-3xl block mb-3">{f.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE TYPE BREAKDOWN */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-10">Pricing by Service Type in Plainfield</h2>

          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">Standard Cleaning</h3>
                <span className="bg-brand-green-50 text-brand-green font-bold px-3 py-1 rounded-lg text-sm">Starting at $160</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                Our most popular service for Plainfield homeowners. Standard cleaning covers all living
                areas, bedrooms, bathrooms, kitchen surfaces, and floors on a recurring schedule.
                Perfect for maintaining a clean home week to week. Best for homes that are cleaned
                regularly and just need upkeep.
              </p>
              <Link href="/standard-cleaning-plainfield-il" className="text-brand-green font-semibold text-sm hover:underline">
                Learn more about standard cleaning in Plainfield →
              </Link>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">Deep Cleaning</h3>
                <span className="bg-brand-green-50 text-brand-green font-bold px-3 py-1 rounded-lg text-sm">Starting at $315</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                Deep cleaning is a top-to-bottom scrub that goes beyond routine maintenance. In
                Plainfield homes, this includes inside kitchen appliances, scrubbing grout, cleaning
                inside cabinet fronts, wiping baseboards, ceiling fans, vents, and window sills.
                Recommended for first-time cleans, seasonal cleans, or homes that haven&apos;t been
                professionally cleaned in 3+ months.
              </p>
              <Link href="/deep-cleaning-plainfield-il" className="text-brand-green font-semibold text-sm hover:underline">
                Learn more about deep cleaning in Plainfield →
              </Link>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">Move-Out Cleaning</h3>
                <span className="bg-brand-green-50 text-brand-green font-bold px-3 py-1 rounded-lg text-sm">Starting at $410</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                Move-out cleaning in Plainfield is our most comprehensive service — priced higher
                because it covers everything a landlord or buyer expects: inside all appliances,
                inside all cabinets and closets, all doors and door knobs, all window glass, and a
                final walkthrough. Designed to help Plainfield renters recover their full security
                deposit and homeowners prepare for closing.
              </p>
              <Link href="/move-out-cleaning-plainfield-il" className="text-brand-green font-semibold text-sm hover:underline">
                Learn more about move-out cleaning in Plainfield →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW DSM PRICES */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">How DSM Prices Jobs in Plainfield</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            DSM Cleaning Solutions uses a transparent flat-rate pricing model for all Plainfield
            customers. When you contact us, we ask three key questions: How many bedrooms and
            bathrooms does your home have? What type of cleaning do you need? And has your home
            been professionally cleaned recently?
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            From there, we generate a firm quote using our pricing formula — the same one used
            for all our Plainfield clients in 60544 and 60585. We do not charge extra for
            eco-friendly products, and there are no travel fees for Plainfield. Add-on services
            like inside oven, inside refrigerator, laundry, or window cleaning are listed
            separately and only added if you request them.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Plainfield homeowners on recurring plans (bi-weekly is our most popular frequency
            in Plainfield) typically receive a discount over one-time pricing. Ask about
            recurring rates when you call.
          </p>
        </div>
      </section>

      {/* GET A QUOTE CTA */}
      <section className="py-12 bg-brand-green-50 border-y border-brand-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready for Your Exact Plainfield Quote?</h2>
          <p className="text-gray-600 mb-6">
            Tell us your home size and the service you need — we&apos;ll reply with a firm price, usually same-day.
            Serving Plainfield zip codes <strong>60544</strong> and <strong>60585</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary btn-lg">Get My Free Plainfield Quote</Link>
            <a href="tel:+18152462113" className="btn-secondary btn-lg">📞 (815) 246-2113</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Plainfield House Cleaning Cost — FAQs</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Plainfield Cleaning Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/pricing" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Full Pricing Guide</h3>
              <p className="text-sm text-gray-600">See all service pricing across every city we serve.</p>
            </Link>
            <Link href="/deep-cleaning-plainfield-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning — Plainfield</h3>
              <p className="text-sm text-gray-600">Top-to-bottom deep cleaning starting at $315.</p>
            </Link>
            <Link href="/standard-cleaning-plainfield-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning — Plainfield</h3>
              <p className="text-sm text-gray-600">Recurring house cleaning starting at $160.</p>
            </Link>
            <Link href="/move-out-cleaning-plainfield-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning — Plainfield</h3>
              <p className="text-sm text-gray-600">Deposit-back cleaning starting at $410.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Get a Free Plainfield Cleaning Quote Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                No hourly rates, no hidden fees. Tell us about your Plainfield home and we&apos;ll send
                you a firm flat-rate quote — usually same-day. Serving 60544 and 60585.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned · Flat-rate pricing · Fully insured · No hidden fees</p>
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
