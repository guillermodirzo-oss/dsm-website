import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Move Out Cleaning Checklist Illinois Renters 2026",
  description:
    "Complete move-out cleaning checklist for Illinois renters. Use this to get your full security deposit back. DSM Cleaning Solutions.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/move-out-cleaning-checklist" },
  openGraph: {
    title: "Move Out Cleaning Checklist Illinois Renters 2026 | DSM Cleaning Solutions",
    description:
      "Complete move-out cleaning checklist for Illinois renters. Use this to get your full security deposit back. DSM Cleaning Solutions.",
    url: "https://www.dsmcleaningsolutions.com/move-out-cleaning-checklist",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "Move Out Cleaning Checklist Illinois" }],
  },
  twitter: { card: "summary_large_image", images: ["/hero-image.png"] },
};

const faqs = [
  {
    question: "What does a move-out cleaning checklist include?",
    answer:
      "A complete move-out cleaning checklist covers every room and surface in the home: kitchen (inside all appliances, inside all cabinets and drawers, countertops, sink, stovetop, floor), bathrooms (grout, caulking, all fixtures, inside vanity, exhaust fan), bedrooms (inside closets, windows, baseboards), living areas (baseboards, light fixtures, ceiling fans, vents), and final tasks like wiping doors, door frames, switch plates, and removing all debris. The goal is to leave the property in the same condition as when you moved in.",
  },
  {
    question: "Will this checklist help me get my deposit back?",
    answer:
      "Yes — following a thorough move-out cleaning checklist is one of the most reliable ways to recover your full security deposit in Illinois. Landlords are legally entitled to deduct cleaning costs from your deposit if the unit is left in a condition below normal wear and tear. Completing this checklist — or hiring a professional to do it — ensures your landlord has no cleaning-related grounds for deductions.",
  },
  {
    question: "How long does move-out cleaning take?",
    answer:
      "Move-out cleaning for a 2-bedroom/1-bath apartment or home typically takes 4–6 hours with a professional two-person team. Larger homes (3–4 bedrooms) may take 6–8 hours. Doing it yourself typically takes significantly longer, especially for areas like oven interior, grout scrubbing, and cabinet interiors that require more time and effort without professional tools and products.",
  },
  {
    question: "Should I hire a professional for move-out cleaning?",
    answer:
      "For most renters in Illinois, hiring a professional cleaning service for move-out is well worth the cost. The price of professional move-out cleaning is almost always less than the security deposit amount at risk. A professional service ensures consistency, uses the right products for each surface, and can provide documentation that the cleaning was completed — which can be valuable if there is a deposit dispute.",
  },
  {
    question: "How much does move-out cleaning cost?",
    answer:
      "Move-out cleaning with DSM Cleaning Solutions starts at $480 for a 2-bedroom/1-bath home, $660 for a 3-bedroom/2-bath, and $870+ for a 4-bedroom/2.5-bath home. The price covers a complete, thorough clean from top to bottom — every item on this checklist. Compare that to a typical security deposit of $1,000–$2,000+, and professional move-out cleaning is a straightforward investment. Contact us for your free Plainfield or Naperville move-out quote.",
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
  serviceType: "Move-Out Cleaning",
  name: "Move-Out Cleaning — DSM Cleaning Solutions",
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
    "Move-out cleaning checklist for Illinois renters. DSM Cleaning Solutions helps tenants in the southwest Chicago suburbs recover their full security deposit.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Move-Out Cleaning", item: "https://www.dsmcleaningsolutions.com/move-out-cleaning" },
    { "@type": "ListItem", position: 3, name: "Move-Out Cleaning Checklist", item: "https://www.dsmcleaningsolutions.com/move-out-cleaning-checklist" },
  ],
};

const checklist = [
  {
    room: "🍳 Kitchen",
    priority: "HIGH — Landlords inspect this area most closely.",
    items: [
      { task: "Inside microwave — walls, ceiling, turntable, door", critical: true },
      { task: "Inside oven — racks, interior walls, door glass, broiler", critical: true },
      { task: "Stovetop — burners, drip pans, grates, surrounding area", critical: true },
      { task: "Inside and outside refrigerator — shelves, drawers, door seals", critical: true },
      { task: "Inside all cabinets and drawers — every shelf wiped", critical: true },
      { task: "Range hood filter and exterior", critical: false },
      { task: "All countertops and backsplash", critical: false },
      { task: "Inside and outside dishwasher", critical: false },
      { task: "Sink scrubbed — basin, faucet, drain", critical: false },
      { task: "Cabinet fronts and handles", critical: false },
      { task: "Sweep and mop floor, including under appliances", critical: false },
      { task: "Light fixtures and switch plates", critical: false },
    ],
  },
  {
    room: "🚿 Bathrooms",
    priority: "HIGH — Grout, caulking, and mildew are common deduction triggers.",
    items: [
      { task: "Scrub grout — floor tiles and shower walls", critical: true },
      { task: "Remove soap scum from shower doors, tracks, and frame", critical: true },
      { task: "Clean and disinfect inside toilet — bowl, tank, base, behind", critical: true },
      { task: "Scrub tub — interior, faucet, drain, overflow", critical: true },
      { task: "Sink — basin, faucet, handles, drain", critical: false },
      { task: "Mirror — full surface, streak-free", critical: false },
      { task: "Vanity inside and out — all shelves and drawers", critical: false },
      { task: "Exhaust fan — dust the grille", critical: false },
      { task: "Baseboards — full scrub", critical: false },
      { task: "Wipe all fixtures and towel bars", critical: false },
      { task: "Scrub and mop floor, including corners", critical: false },
      { task: "Wipe switch plates and outlet covers", critical: false },
    ],
  },
  {
    room: "🛏️ Bedrooms",
    priority: "MEDIUM — Closets, windows, and baseboards are key areas.",
    items: [
      { task: "Inside all closets — shelves, rods, walls, floor", critical: true },
      { task: "Windows — sills, tracks, and interior glass", critical: true },
      { task: "Baseboards — full length, all walls", critical: false },
      { task: "Ceiling fan blades and housing", critical: false },
      { task: "Light fixtures dusted", critical: false },
      { task: "Vacuum carpets thoroughly including edges and corners", critical: false },
      { task: "Sweep and mop hard floors", critical: false },
      { task: "Wipe all door frames and door knobs", critical: false },
      { task: "Wipe switch plates", critical: false },
      { task: "Remove all nails, hangers, and wall damage as possible", critical: false },
    ],
  },
  {
    room: "🛋️ Living Areas & Common Spaces",
    priority: "MEDIUM — Baseboards, vents, and light fixtures are often missed.",
    items: [
      { task: "Baseboards — every room, full scrub", critical: true },
      { task: "All vents and registers — dusted and wiped", critical: false },
      { task: "Ceiling fans — blades, housing, light globes", critical: false },
      { task: "Light fixtures and switch plates", critical: false },
      { task: "Window sills and tracks", critical: false },
      { task: "Interior window glass", critical: false },
      { task: "Vacuum all carpets and area rugs", critical: false },
      { task: "Sweep and mop all hard floors", critical: false },
      { task: "Wipe all door knobs and door frames", critical: false },
      { task: "Remove all nails and hooks from walls", critical: false },
    ],
  },
  {
    room: "🏠 Whole-Home Final Tasks",
    priority: "Do these last — after all rooms are complete.",
    items: [
      { task: "Walk through every room — nothing missed", critical: true },
      { task: "Remove all personal belongings and trash", critical: true },
      { task: "Spot-clean walls, scuffs, and marks throughout", critical: false },
      { task: "Wipe front door (inside and outside handle)", critical: false },
      { task: "Clean garage if included in lease — sweep, remove debris", critical: false },
      { task: "Check all windows are clean and lockable", critical: false },
      { task: "Turn off all lights and confirm utilities noted", critical: false },
    ],
  },
];

export default function MoveOutCleaningChecklistPage() {
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
              <Link href="/move-out-cleaning" className="hover:text-white">Move-Out Cleaning</Link>
              <span>/</span>
              <span className="text-white">Checklist</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Move-Out Cleaning Checklist for Illinois Renters (Get Your Deposit Back)
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              A complete room-by-room move-out cleaning checklist built for Illinois renters in
              2026. Use this to do it yourself or hand it to a professional cleaning company —
              either way, this is what landlords in Romeoville, Plainfield, and Naperville
              actually inspect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-white btn-lg">Hire DSM for Move-Out</Link>
              <a href="tel:+18152462113" className="btn-outline-white btn-lg">📞 (815) 246-2113</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600">
            {["🔑 Deposit-Back Focused", "✅ Complete Checklist", "🛡️ Fully Insured", "⭐ 5-Star Rated", "👨‍👩‍👧 Family Owned"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Why This Checklist Matters for Your Security Deposit</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Under Illinois law, landlords may deduct cleaning costs from your security deposit if
            the rental unit is left in a condition that exceeds normal wear and tear. In practice,
            this means a dirty oven, stained grout, debris in cabinets, or a dusty refrigerator
            can all be legitimate grounds for deductions — even if the rest of the unit looks fine.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            The most common deposit disputes in Romeoville, Plainfield, and Naperville come down
            to cleaning. Using a thorough checklist — and completing every item — closes the door
            on cleaning-related deductions. It also puts you in a stronger legal position if a
            dispute does arise, because you can document what was cleaned and when.
          </p>
          <div className="bg-brand-green-50 border border-brand-green-100 rounded-xl p-5">
            <p className="text-brand-green font-semibold text-sm">
              💡 Pro tip: Take timestamped photos after cleaning every room. Even a quick phone
              video walkthrough provides documentation that protects you if your landlord makes
              unfair deductions.
            </p>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
          <div className="pt-8">
            <h2 className="section-heading mb-2">Room-by-Room Move-Out Cleaning Checklist</h2>
            <p className="text-gray-600 text-sm mb-6">
              Items marked <span className="bg-red-100 text-red-700 font-semibold px-2 py-0.5 rounded text-xs">CRITICAL</span> are most commonly cited in Illinois deposit disputes.
            </p>
          </div>

          {checklist.map((section) => (
            <div key={section.room} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="px-6 py-4 bg-gray-800 text-white">
                <h3 className="text-xl font-bold">{section.room}</h3>
                <p className="text-gray-300 text-sm mt-1">{section.priority}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.task} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700 text-sm">
                        {item.task}
                        {item.critical && (
                          <span className="ml-2 bg-red-100 text-red-700 font-semibold px-2 py-0.5 rounded text-xs">CRITICAL</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LANDLORD FOCUS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">What Illinois Landlords Check Most Closely</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Based on our experience completing move-out cleans across Romeoville, Plainfield, and
            Naperville, these are the areas landlords inspect most carefully and most frequently
            cite in deposit deductions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { area: "Oven interior", note: "#1 source of move-out cleaning disputes" },
              { area: "Refrigerator interior", note: "Frequently missed, always checked" },
              { area: "Kitchen cabinets", note: "Landlords open every door and drawer" },
              { area: "Bathroom grout", note: "Mold and soap scum are visible deduction triggers" },
              { area: "Baseboards throughout", note: "Dust and dirt buildup shows professional neglect" },
              { area: "Inside closets", note: "Debris left on closet floors is a common deduction" },
            ].map((item) => (
              <div key={item.area} className="bg-red-50 border border-red-100 rounded-xl p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-1">⚠️ {item.area}</h3>
                <p className="text-gray-600 text-xs">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIY VS PRO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-8">DIY Move-Out Cleaning vs. Hiring a Professional</h2>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Factor</th>
                  <th className="text-center px-5 py-4 font-semibold">DIY</th>
                  <th className="text-center px-5 py-4 font-semibold text-brand-green">Professional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { factor: "Time required", diy: "8–15+ hours", pro: "4–8 hours (team)" },
                  { factor: "Equipment quality", diy: "Consumer grade", pro: "Professional grade" },
                  { factor: "Hard areas (oven, grout)", diy: "Difficult without proper products", pro: "Handled routinely" },
                  { factor: "Consistency", diy: "Depends on effort/energy", pro: "Systematic checklist every time" },
                  { factor: "Documentation", diy: "Self-documented", pro: "Professional service record" },
                  { factor: "Deposit recovery rate", diy: "Variable", pro: "Significantly higher" },
                  { factor: "Cost", diy: "Your time + supplies", pro: "Starting at $480 (2 bed / 1 bath)" },
                ].map((row) => (
                  <tr key={row.factor} className="hover:bg-gray-50">
                    <td className="px-6 py-3 font-medium text-gray-900">{row.factor}</td>
                    <td className="px-5 py-3 text-center text-gray-600">{row.diy}</td>
                    <td className="px-5 py-3 text-center text-brand-green font-semibold">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HOW DSM HANDLES IT */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">How DSM Handles Move-Out Cleans</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            DSM Cleaning Solutions has completed hundreds of move-out cleans across Romeoville,
            Plainfield, Naperville, and the surrounding southwest suburbs. Our move-out cleaning
            service is specifically designed around what Illinois landlords inspect — not a generic
            deep cleaning checklist.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We tackle every item on this checklist using professional-grade, eco-friendly products
            and the same systematic approach on every job. Our flat-rate pricing means you know
            the cost before we arrive — no hourly overruns on a day that&apos;s already stressful.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every move-out clean is backed by our 48-hour satisfaction guarantee. If your landlord
            finds something we missed, contact us and we&apos;ll return to address it at no charge.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed mt-4">
            Your price depends on three things: how big your home is, how many bedrooms it has, and how many bathrooms it has. The ranges above cover typical homes in that bedroom range. If your home runs bigger or has extra bathrooms, your quote might land higher. We&rsquo;ll always confirm your exact price with you before we book anything. No surprises after we show up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/move-out-cleaning" className="btn-primary">Learn About Move-Out Cleaning</Link>
            <Link href="/contact" className="btn-secondary">Get My Free Quote</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Move-Out Cleaning Checklist — FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl group">
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

      {/* RELATED */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Move-Out Cleaning Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/move-out-cleaning" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning</h3>
              <p className="text-sm text-gray-600">Full details and pricing for our move-out cleaning service.</p>
            </Link>
            <Link href="/move-out-cleaning-plainfield-il" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out — Plainfield</h3>
              <p className="text-sm text-gray-600">Move-out cleaning in 60544 and 60585.</p>
            </Link>
            <Link href="/move-out-cleaning-naperville-il" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out — Naperville</h3>
              <p className="text-sm text-gray-600">Move-out cleaning across all Naperville zip codes.</p>
            </Link>
            <Link href="/pricing" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Pricing</h3>
              <p className="text-sm text-gray-600">Flat-rate move-out prices by home size.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Let DSM Handle Your Move-Out Clean</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                We follow every item on this checklist on every move-out job. Flat-rate pricing,
                48-hour guarantee, and a track record of helping southwest suburb renters get their
                full deposit back.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">Starting at $480 · Flat-rate · Fully insured · 48-hr guarantee</p>
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
