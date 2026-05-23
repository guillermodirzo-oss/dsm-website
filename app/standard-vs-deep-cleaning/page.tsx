import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Standard vs Deep Cleaning | Which Do You Need?",
  description:
    "Standard cleaning vs deep cleaning — what is the difference and which does your home need? DSM Cleaning Solutions explains.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/standard-vs-deep-cleaning" },
  openGraph: {
    title: "Standard vs Deep Cleaning | Which Do You Need? | DSM Cleaning Solutions",
    description:
      "Standard cleaning vs deep cleaning — what is the difference and which does your home need? DSM Cleaning Solutions explains.",
    url: "https://www.dsmcleaningsolutions.com/standard-vs-deep-cleaning",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "Standard vs Deep Cleaning" }],
  },
  twitter: { card: "summary_large_image", images: ["/hero-image.png"] },
};

const faqs = [
  {
    question: "What is the difference between standard and deep cleaning?",
    answer:
      "Standard cleaning covers the routine tasks needed to maintain a home that is already reasonably clean — surfaces, floors, bathrooms, and kitchen exteriors. Deep cleaning goes significantly further: inside appliances, grout scrubbing, baseboards, window sills, cabinet interiors, ceiling fans, vents, and behind/underneath furniture. Standard cleaning keeps a clean home clean. Deep cleaning restores a home that has fallen behind or needs a true reset.",
  },
  {
    question: "Should my first clean be a deep clean?",
    answer:
      "Yes — for most first-time customers, we recommend starting with a deep clean. Even if your home feels reasonably clean, a professional deep clean gives us a thorough baseline and ensures we address areas that have accumulated buildup over time. After the deep clean, maintaining that standard with bi-weekly or monthly standard cleaning is both easier and more affordable.",
  },
  {
    question: "How often should I get a deep clean?",
    answer:
      "Most households benefit from a deep clean 2–4 times per year — typically with the changing of seasons. If you receive standard cleaning regularly (bi-weekly or monthly), a deep clean at the start of each season keeps your home in excellent condition year-round. Homes with pets, children, or high foot traffic may benefit from more frequent deep cleans.",
  },
  {
    question: "Is deep cleaning worth the extra cost?",
    answer:
      "Yes — deep cleaning is worth it when your home needs it. Trying to maintain a home with standard cleaning when it actually needs a deep clean leads to declining results over time, because buildup accumulates faster than routine visits can address. Deep cleaning removes that underlying buildup so standard cleaning can work effectively. Think of it as the foundation that makes your ongoing service worthwhile.",
  },
  {
    question: "Can I switch from standard to deep cleaning?",
    answer:
      "Absolutely. Many DSM customers switch between service types based on the season, life events (having guests, selling a home), or simply how their home feels. There are no contracts or long-term commitments. You can request a deep clean at any time — even if you are on a standard recurring plan — and return to standard cleaning afterward. Just let us know in advance so we can allocate the right amount of time.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "House Cleaning",
  name: "Standard & Deep Cleaning — DSM Cleaning Solutions",
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
  areaServed: ["Romeoville, IL", "Plainfield, IL", "Naperville, IL", "Bolingbrook, IL"],
  description:
    "Explanation of the difference between standard and deep cleaning services. DSM Cleaning Solutions serves the southwest Chicago suburbs.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Standard vs Deep Cleaning", item: "https://www.dsmcleaningsolutions.com/standard-vs-deep-cleaning" },
  ],
};

const comparisonRows = [
  { feature: "Countertops & surfaces", standard: "✓", deep: "✓" },
  { feature: "Stovetop (exterior)", standard: "✓", deep: "✓" },
  { feature: "Sink & faucet scrub", standard: "✓", deep: "✓" },
  { feature: "Toilet, tub & shower", standard: "✓", deep: "✓" },
  { feature: "Mirrors & glass", standard: "✓", deep: "✓" },
  { feature: "Vacuum carpets & mop floors", standard: "✓", deep: "✓" },
  { feature: "Dust furniture & surfaces", standard: "✓", deep: "✓" },
  { feature: "Empty trash", standard: "✓", deep: "✓" },
  { feature: "Cabinet fronts wiped", standard: "✓", deep: "✓" },
  { feature: "Inside microwave", standard: "—", deep: "✓" },
  { feature: "Inside oven", standard: "—", deep: "✓" },
  { feature: "Refrigerator exterior detail", standard: "—", deep: "✓" },
  { feature: "Baseboard scrubbing", standard: "Light wipe", deep: "Full scrub" },
  { feature: "Window sills & tracks", standard: "—", deep: "✓" },
  { feature: "Ceiling fans & light fixtures", standard: "—", deep: "✓" },
  { feature: "Grout scrubbing", standard: "—", deep: "✓" },
  { feature: "Cabinet interiors", standard: "—", deep: "✓" },
  { feature: "Door frames detail", standard: "—", deep: "✓" },
  { feature: "Vents & registers", standard: "—", deep: "✓" },
  { feature: "Starting price (2 bed/1 bath)", standard: "$160", deep: "$315" },
  { feature: "Typical duration (2 bed/1 bath)", standard: "2–3 hrs", deep: "4–6 hrs" },
  { feature: "Recommended frequency", standard: "Weekly – monthly", deep: "Seasonally (2–4×/yr)" },
];

const standardWhen = [
  "Your home is already reasonably maintained",
  "You want ongoing weekly, bi-weekly, or monthly upkeep",
  "You had a deep clean within the last 3 months",
  "You need a quick refresh before guests arrive",
  "You want the lowest-cost recurring option",
];

const deepWhen = [
  "It's your first time booking professional cleaning",
  "Your home hasn't been cleaned in 3+ months",
  "You're starting a new recurring service (use deep clean first)",
  "It's the start of a new season",
  "You've had a renovation, move-in, or significant event",
  "You're preparing to sell or list your home",
  "Pet dander, grease, or soap scum has built up noticeably",
];

export default function StandardVsDeepCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">Standard vs Deep Cleaning</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Standard Cleaning vs Deep Cleaning: Which Does Your Home Need?
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Not sure whether to book a standard clean or a deep clean? This guide explains the
              real differences — what&apos;s included, how long each takes, what each costs, and
              exactly when to choose one over the other.
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
            {["✅ Flat-Rate Pricing", "🌿 Eco-Friendly Products", "🛡️ Fully Insured", "✔️ 48-Hr Guarantee", "👨‍👩‍👧 Family Owned"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* DEFINITIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-green-50 border border-brand-green-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧹 What Is Standard Cleaning?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Standard cleaning is the recurring maintenance service designed to keep an already-clean
                home in great condition. It covers the essential tasks in every room — wiping surfaces,
                cleaning bathrooms, vacuuming and mopping floors, and handling kitchen exteriors — on
                a consistent schedule.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Standard cleaning is not meant to tackle heavy buildup, grease accumulation, or areas
                that haven&apos;t been touched in months. It works best when your home is already at a
                clean baseline and you want to maintain it effortlessly week after week.
              </p>
            </div>
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">🔍 What Is Deep Cleaning?</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Deep cleaning is a comprehensive top-to-bottom service that goes significantly beyond
                routine maintenance. It covers everything in a standard clean plus the areas that
                accumulate buildup over time: inside appliances, grout lines, baseboards, window sills,
                cabinet interiors, ceiling fans, vents, and more.
              </p>
              <p className="text-white/80 leading-relaxed">
                Deep cleaning is the right choice when your home needs a true reset — before starting
                a recurring service, at the start of a new season, or after an extended period without
                professional cleaning. It&apos;s the foundation that makes standard cleaning effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Standard vs Deep Cleaning — Side by Side</h2>
            <p className="section-subheading mx-auto">
              Every task compared so you know exactly what you&apos;re getting with each service.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Task / Feature</th>
                  <th className="text-center px-5 py-4 font-semibold">Standard</th>
                  <th className="text-center px-5 py-4 font-semibold text-brand-green">Deep Clean</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-3 text-gray-700 font-medium">{row.feature}</td>
                    <td className={`px-5 py-3 text-center font-medium ${row.standard === "✓" ? "text-brand-green" : row.standard === "—" ? "text-gray-300" : "text-gray-600 text-xs"}`}>
                      {row.standard}
                    </td>
                    <td className={`px-5 py-3 text-center font-bold ${row.deep === "✓" ? "text-brand-green" : "text-brand-green"}`}>
                      {row.deep}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">
            Starting prices for a 2 bed / 1 bath home in Romeoville or Plainfield, IL.{" "}
            <Link href="/pricing" className="text-brand-green font-medium hover:underline">See full pricing →</Link>
          </p>
        </div>
      </section>

      {/* WHEN TO CHOOSE */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Choose Standard Cleaning</h2>
              <ul className="space-y-3">
                {standardWhen.map((item) => (
                  <li key={item} className="flex items-start gap-3 bg-brand-green-50 border border-brand-green-100 rounded-xl px-5 py-3">
                    <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/standard-cleaning" className="btn-primary">Learn About Standard Cleaning</Link>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Choose Deep Cleaning</h2>
              <ul className="space-y-3">
                {deepWhen.map((item) => (
                  <li key={item} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3">
                    <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/deep-cleaning" className="btn-secondary">Learn About Deep Cleaning</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAN YOU SWITCH + FIRST TIME */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="section-heading mb-4">Can You Switch Between Standard and Deep Cleaning?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Yes — and many DSM customers do. There are no contracts and no minimums. You can
              book a deep clean for one visit and standard cleaning for the next. The most common
              pattern we see is a deep clean at the start of each season and standard bi-weekly
              cleaning in between.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you are on a recurring standard plan and notice your home needs more than maintenance
              — before the holidays, after a sick season, or if it&apos;s been a while — simply request
              a deep clean for your next visit. We&apos;ll update your booking and adjust the time
              accordingly.
            </p>
          </div>
          <div className="bg-brand-green-50 border border-brand-green-100 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">💡 Our Recommendation for First-Time Customers</h2>
            <p className="text-gray-600 leading-relaxed">
              If this is your first professional cleaning — or your first cleaning in several months
              — we strongly recommend starting with a <strong>deep clean</strong>. It establishes a
              clean baseline that makes every subsequent standard cleaning more effective. After your
              deep clean, bi-weekly standard cleaning is the most popular choice among our customers
              in Romeoville, Plainfield, and Naperville.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Standard vs Deep Cleaning — FAQs</h2>
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
                <div className="px-5 pb-5"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Our Cleaning Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/deep-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning</h3>
              <p className="text-sm text-gray-600">Full details, pricing, and checklist for our deep cleaning service.</p>
            </Link>
            <Link href="/standard-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning</h3>
              <p className="text-sm text-gray-600">Recurring house cleaning for ongoing home maintenance.</p>
            </Link>
            <Link href="/pricing" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Pricing</h3>
              <p className="text-sm text-gray-600">Flat-rate prices for both service types by home size.</p>
            </Link>
            <Link href="/contact" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Get a Free Quote</h3>
              <p className="text-sm text-gray-600">Not sure which to book? Tell us about your home and we&apos;ll advise.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Not Sure Which to Book? We&apos;ll Help.</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Call or message us — we&apos;ll ask a few quick questions about your home and tell
                you exactly which service makes sense. Free quote, no obligation.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">Flat-rate pricing · Fully insured · 48-hr guarantee · Family owned</p>
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
