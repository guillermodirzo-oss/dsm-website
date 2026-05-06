import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cleaning Service Pricing",
  description:
    "Transparent flat-rate pricing for house cleaning in Plainfield, Romeoville & surrounding suburbs. Standard, deep & move-out cleaning. No hidden fees. Get an instant quote.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/pricing" },
  openGraph: {
    title: "House Cleaning Prices Romeoville & Plainfield IL | DSM Cleaning Solutions",
    description:
      "Transparent flat-rate pricing for house cleaning in Plainfield, Romeoville & surrounding suburbs. Standard, deep & move-out cleaning. No hidden fees.",
    url: "https://www.dsmcleaningsolutions.com/pricing",
    siteName: "DSM Cleaning Solutions",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "DSM Cleaning Solutions — House Cleaning Prices in Romeoville & Plainfield IL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Cleaning Prices Romeoville & Plainfield IL | DSM Cleaning Solutions",
    description:
      "Transparent flat-rate pricing for house cleaning in Plainfield, Romeoville & surrounding suburbs. No hidden fees.",
    images: ["/hero-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does standard cleaning cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard cleaning starts at $160 for a 2-bedroom home and varies based on square footage and number of bathrooms. Use our online booking form for an exact quote.",
      },
    },
    {
      "@type": "Question",
      name: "How much does deep cleaning cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deep cleaning includes a $200 service upcharge and starts at $315 for a 2-bedroom home. Pricing varies based on home size. Get an exact quote online.",
      },
    },
    {
      "@type": "Question",
      name: "How much does move-out cleaning cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Move-out cleaning includes a $300 service upcharge and starts at $480 for a 2-bedroom home. Pricing varies based on home size and number of bathrooms.",
      },
    },
    {
      "@type": "Question",
      name: "Do you charge by the hour or flat rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We charge flat rates — never by the hour. Your price is calculated based on your home size, number of bedrooms and bathrooms, and the service type selected. No surprises.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any hidden fees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Never. We bring all supplies and equipment at no extra charge. The price quoted is exactly what you pay.",
      },
    },
  ],
};

const serviceCards = [
  {
    icon: "🏠",
    name: "Standard Cleaning",
    upcharge: null,
    badge: null,
    color: "border-brand-green-100",
    headerBg: "bg-brand-green-50",
    badgeBg: null,
    href: "/standard-cleaning",
    tagline: "Recurring or one-time routine cleaning",
    examples: [
      { label: "2 bed · 1 bath · 1,000–1,499 sq ft", price: "$160" },
      { label: "3 bed · 2 bath · 1,500–1,999 sq ft", price: "$240" },
      { label: "4 bed · 2.5 bath · 2,500–2,999 sq ft", price: "$360" },
      { label: "5 bed · 3 bath · 3,500–3,999 sq ft", price: "$540" },
    ],
  },
  {
    icon: "🧹",
    name: "Deep Cleaning",
    upcharge: "$200 service upcharge included",
    badge: "Most Popular",
    color: "border-orange-200",
    headerBg: "bg-orange-50",
    badgeBg: "bg-orange-500",
    href: "/deep-cleaning",
    tagline: "Top-to-bottom detail clean — baselines & move-ins",
    examples: [
      { label: "2 bed · 1 bath · 1,000–1,499 sq ft", price: "$315" },
      { label: "3 bed · 2 bath · 1,500–1,999 sq ft", price: "$440" },
      { label: "4 bed · 2.5 bath · 2,500–2,999 sq ft", price: "$625" },
      { label: "5 bed · 3 bath · 3,500–3,999 sq ft", price: "$840" },
    ],
  },
  {
    icon: "📦",
    name: "Move-In / Move-Out Cleaning",
    upcharge: "$300 service upcharge included",
    badge: null,
    color: "border-blue-100",
    headerBg: "bg-blue-50",
    badgeBg: null,
    href: "/move-out-cleaning",
    tagline: "Landlord-approved · deposit-back focused",
    examples: [
      { label: "2 bed · 1 bath · 1,000–1,499 sq ft", price: "$480" },
      { label: "3 bed · 2 bath · 1,500–1,999 sq ft", price: "$560" },
      { label: "4 bed · 2.5 bath · 2,500–2,999 sq ft", price: "$695" },
      { label: "5 bed · 3 bath · 3,500–3,999 sq ft", price: "$890" },
    ],
  },
];

const bedroomAddons = [
  { label: "0–1 bedrooms", price: "Included" },
  { label: "2 bedrooms", price: "+$15" },
  { label: "3 bedrooms", price: "+$30" },
  { label: "4 bedrooms", price: "+$45" },
  { label: "5 bedrooms", price: "+$60" },
  { label: "6 bedrooms", price: "+$75" },
];

const bathroomAddons = [
  { label: "1 bathroom", price: "Included" },
  { label: "1.5 bathrooms", price: "Included" },
  { label: "2 bathrooms", price: "+$25" },
  { label: "2.5 bathrooms", price: "+$35" },
  { label: "3 bathrooms", price: "+$50" },
  { label: "3.5 bathrooms", price: "+$60" },
  { label: "4 bathrooms", price: "+$75" },
  { label: "4.5 bathrooms", price: "+$85" },
  { label: "5 bathrooms", price: "+$100" },
];

const sqftRows = [
  { range: "1,000–1,499 sq ft", standard: "$145", deep: "$100", moveout: "$165" },
  { range: "1,500–1,999 sq ft", standard: "$185", deep: "$185", moveout: "$205" },
  { range: "2,000–2,499 sq ft", standard: "$255", deep: "$255", moveout: "$275" },
  { range: "2,500–2,999 sq ft", standard: "$290", deep: "$350", moveout: "$320" },
  { range: "3,000–3,499 sq ft", standard: "$340", deep: "$400", moveout: "$380" },
  { range: "3,500–3,999 sq ft", standard: "$420", deep: "$520", moveout: "$470" },
  { range: "4,000–4,499 sq ft", standard: "$520", deep: "$620", moveout: "$570" },
  { range: "4,500–4,999 sq ft", standard: "$600", deep: "$750", moveout: "$670" },
];

const faqs = [
  {
    q: "How much does standard cleaning cost?",
    a: "Standard cleaning starts at $160 for a 2-bedroom home and varies based on square footage and number of bathrooms. Use our online booking form for an exact quote.",
  },
  {
    q: "How much does deep cleaning cost?",
    a: "Deep cleaning includes a $200 service upcharge and starts at $315 for a 2-bedroom home. Pricing varies based on home size. Get an exact quote online.",
  },
  {
    q: "How much does move-out cleaning cost?",
    a: "Move-out cleaning includes a $300 service upcharge and starts at $480 for a 2-bedroom home. Pricing varies based on home size and number of bathrooms.",
  },
  {
    q: "Do you charge by the hour or flat rate?",
    a: "We charge flat rates — never by the hour. Your price is calculated based on your home size, number of bedrooms and bathrooms, and the service type selected. No surprises.",
  },
  {
    q: "Are there any hidden fees?",
    a: "Never. We bring all supplies and equipment at no extra charge. The price quoted is exactly what you pay.",
  },
];

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-medium">Pricing</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Transparent, Flat-Rate Pricing
            </h1>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              No hourly guessing. No hidden fees. Your price is calculated upfront based on your
              home size, bedrooms, bathrooms, and service type — and you pay exactly that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-brand-green font-bold py-4 px-8 rounded-lg hover:bg-brand-green-50 transition-colors text-lg text-center"
              >
                Get My Instant Quote
              </Link>
              <a
                href="tel:+18152462113"
                className="inline-block bg-transparent text-white font-bold py-4 px-8 rounded-lg border-2 border-white hover:bg-white/10 transition-colors text-lg text-center"
              >
                📞 (815) 246-2113
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600">
            {[
              "💰 Flat-Rate — Never Hourly",
              "🚫 No Hidden Fees",
              "🧴 All Supplies Included",
              "✅ Instant Online Quote",
              "🛡️ Fully Insured & Bonded",
            ].map((item) => (
              <span key={item} className="whitespace-nowrap">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE PRICING CARDS ─── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Pricing by Service Type</h2>
            <p className="section-subheading mx-auto">
              All prices shown are &ldquo;starting at&rdquo; examples based on common home sizes.
              Use our booking form for your exact quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {serviceCards.map((svc) => (
              <div
                key={svc.name}
                className={`bg-white rounded-2xl border-2 ${svc.color} overflow-hidden shadow-sm relative`}
              >
                {svc.badge && (
                  <div className={`absolute top-4 right-4 ${svc.badgeBg} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>
                    {svc.badge}
                  </div>
                )}

                {/* Card Header */}
                <div className={`${svc.headerBg} px-6 py-5 border-b border-gray-100`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{svc.icon}</span>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">{svc.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{svc.tagline}</p>
                    </div>
                  </div>
                  {svc.upcharge && (
                    <div className="mt-3 bg-white/70 rounded-lg px-3 py-2 text-xs font-semibold text-gray-700 border border-gray-200">
                      ℹ️ {svc.upcharge}
                    </div>
                  )}
                </div>

                {/* Pricing Examples */}
                <div className="px-6 py-5">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Example Prices
                  </p>
                  <div className="space-y-3">
                    {svc.examples.map((ex) => (
                      <div key={ex.label} className="flex items-center justify-between gap-3">
                        <span className="text-sm text-gray-600 leading-tight">{ex.label}</span>
                        <span className="text-lg font-bold text-gray-900 whitespace-nowrap flex-shrink-0">
                          Starting at {ex.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <Link
                      href={svc.href}
                      className="text-brand-green font-semibold text-sm hover:underline flex items-center gap-1"
                    >
                      View full {svc.name.toLowerCase()} details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instant quote CTA under cards */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Prices vary based on your specific home. Get your exact quote in seconds — no commitment required.
            </p>
            <Link
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Get My Instant Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HOW OUR PRICING WORKS ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">How Our Pricing Works</h2>
            <p className="section-subheading mx-auto">
              Your total price is calculated from four simple factors. Add them up and you know exactly what you&apos;ll pay.
            </p>
          </div>

          {/* Formula Banner */}
          <div className="bg-brand-green-50 border border-brand-green-100 rounded-2xl px-6 py-5 mb-10 text-center">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Pricing Formula</p>
            <p className="text-lg font-bold text-gray-900">
              Total = Service Upcharge + Bedroom Add-On + Bathroom Add-On + Square Footage Base
            </p>
            <p className="text-sm text-gray-500 mt-2">All prices are flat rate — no hidden fees and no hourly charges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Factor 1 — Service Type */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                <h3 className="font-bold text-lg text-gray-900">Service Type Upcharge</h3>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Standard Cleaning", value: "No upcharge" },
                  { label: "Deep Cleaning", value: "+$200" },
                  { label: "Move-In / Out Cleaning", value: "+$300" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between bg-white rounded-lg px-4 py-2.5 border border-gray-100">
                    <span className="text-sm text-gray-700">{row.label}</span>
                    <span className="text-sm font-bold text-gray-900">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Factor 2 — Bedrooms */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                <h3 className="font-bold text-lg text-gray-900">Bedroom Add-On</h3>
              </div>
              <div className="space-y-2">
                {bedroomAddons.map((row) => (
                  <div key={row.label} className="flex items-center justify-between bg-white rounded-lg px-4 py-2.5 border border-gray-100">
                    <span className="text-sm text-gray-700">{row.label}</span>
                    <span className={`text-sm font-bold ${row.price === "Included" ? "text-brand-green" : "text-gray-900"}`}>{row.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Factor 3 — Bathrooms */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                <h3 className="font-bold text-lg text-gray-900">Bathroom Add-On</h3>
              </div>
              <div className="space-y-2">
                {bathroomAddons.map((row) => (
                  <div key={row.label} className="flex items-center justify-between bg-white rounded-lg px-4 py-2.5 border border-gray-100">
                    <span className="text-sm text-gray-700">{row.label}</span>
                    <span className={`text-sm font-bold ${row.price === "Included" ? "text-brand-green" : "text-gray-900"}`}>{row.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Factor 4 — Square Footage */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                <h3 className="font-bold text-lg text-gray-900">Square Footage Base</h3>
              </div>
              <p className="text-xs text-gray-500 mb-3">Base price by home size and service type:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 text-xs font-bold text-gray-500 uppercase tracking-wide">Size</th>
                      <th className="text-right py-2 text-xs font-bold text-gray-500 uppercase tracking-wide">Std</th>
                      <th className="text-right py-2 text-xs font-bold text-gray-500 uppercase tracking-wide">Deep</th>
                      <th className="text-right py-2 text-xs font-bold text-gray-500 uppercase tracking-wide">Move</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {sqftRows.map((row) => (
                      <tr key={row.range} className="bg-white even:bg-gray-50/50">
                        <td className="py-2 text-gray-700 pr-2 text-xs">{row.range}</td>
                        <td className="py-2 text-right font-semibold text-gray-900">{row.standard}</td>
                        <td className="py-2 text-right font-semibold text-gray-900">{row.deep}</td>
                        <td className="py-2 text-right font-semibold text-gray-900">{row.moveout}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CALCULATOR NOTE / INSTANT QUOTE ─── */}
      <section className="py-14 bg-orange-50 border-t border-orange-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-5xl block mb-4">🧮</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Want to Know Your Exact Price?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Use our online booking form to get an instant quote based on your specific home size
            and service type — no obligation required. Takes less than 2 minutes.
          </p>
          <Link
            href="/book"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-lg inline-block mb-4"
          >
            Get My Instant Quote
          </Link>
          <p className="text-sm text-gray-500">
            Or call us directly at{" "}
            <a href="tel:+18152462113" className="font-bold text-brand-green hover:underline">
              (815) 246-2113
            </a>{" "}
            — we&apos;re happy to walk you through pricing over the phone.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Pricing FAQs</h2>
            <p className="section-subheading mx-auto">
              Common questions about how we price our cleaning services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-brand-green">
                  <h3 className="text-left pr-4">{faq.q}</h3>
                  <svg
                    className="w-5 h-5 text-brand-green flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-16 bg-brand-green">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book? Get Your Free Quote Now.
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Flat-rate pricing. No surprises. All supplies included. Serving Plainfield,
            Romeoville, Naperville, Bolingbrook & the southwest Chicago suburbs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-green font-bold px-8 py-4 rounded-full hover:bg-brand-green-50 transition-colors shadow-md text-base"
            >
              Get Instant Quote
            </Link>
            <a
              href="tel:+18152462113"
              className="text-white font-semibold text-base border-2 border-white/50 rounded-full px-8 py-4 hover:bg-white/10 transition-colors"
            >
              📞 Call (815) 246-2113
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
