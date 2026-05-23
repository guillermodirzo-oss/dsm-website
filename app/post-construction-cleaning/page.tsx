import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Post-Construction Cleaning IL",
  description: "We remove construction dust, debris & residue from new builds & renovations in Plainfield, IL. Fully insured post-construction cleaners. Free estimates.",
  keywords: ["post construction cleaning Romeoville IL", "construction cleanup Romeoville", "after construction cleaning Romeoville", "new construction cleaning Romeoville IL", "renovation cleanup Romeoville", "builder cleanup service Romeoville IL"],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/post-construction-cleaning" },
  openGraph: {
    title: "Post-Construction Cleaning IL | DSM Cleaning Solutions",
    description: "We remove construction dust, debris & residue from new builds & renovations in Plainfield, IL. Fully insured post-construction cleaners. Free estimates.",
    url: "https://www.dsmcleaningsolutions.com/post-construction-cleaning",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "DSM Cleaning Solutions — Post-Construction Cleaning in Plainfield IL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Post-Construction Cleaning IL | DSM Cleaning Solutions",
    description: "We remove construction dust, debris & residue from new builds & renovations in Plainfield, IL. Fully insured. Free estimates.",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  { question: "What does post-construction cleaning include?", answer: "Our post-construction cleaning covers removing all construction dust, debris, and residue from every surface — including walls, windows, floors, fixtures, cabinets, and appliances. We also do a final polish to make the space move-in ready." },
  { question: "How soon after construction can you clean?", answer: "We can typically schedule within a few days. We recommend waiting until all major construction work is complete. For phased projects, we can do a rough clean between phases and a final clean at the end." },
  { question: "Do you clean new construction homes in Romeoville?", answer: "Yes — we work with homeowners, builders, and general contractors throughout Romeoville, Plainfield, Bolingbrook, and the surrounding southwest suburbs for both new builds and renovation projects." },
  { question: "How much does post-construction cleaning cost?", answer: "Post-construction cleaning is priced based on square footage and level of construction mess. Most homes range from $250–$600+. Contact us for a free on-site or photo-based estimate." },
  { question: "Can you clean just one room or area after a renovation?", answer: "Absolutely. Whether you renovated a single bathroom, kitchen, or the entire home, we can scope the job accordingly and price it fairly." },
];

const phases = [
  {
    phase: "Phase 1: Rough Clean",
    desc: "Done during or just after construction wraps up.",
    items: ["Remove large debris & trash", "Sweep & vacuum all surfaces", "Remove stickers from windows & fixtures", "Wipe down rough surfaces", "Clean out cabinets & drawers"],
  },
  {
    phase: "Phase 2: Detail Clean",
    desc: "Full deep clean of every surface and detail.",
    items: ["Wipe all walls, trim & baseboards", "Clean all windows inside & out", "Scrub & disinfect all bathrooms", "Deep clean kitchen surfaces & appliances", "Clean light fixtures & ceiling fans", "Polish all hardware & fixtures"],
  },
  {
    phase: "Phase 3: Final Touch Clean",
    desc: "Move-in ready polish — spotless and staged.",
    items: ["Vacuum & mop all floors", "Final dust of all surfaces", "Clean mirrors & glass surfaces", "Wipe down doors & door frames", "Final inspection walkthrough"],
  },
];

export default function PostConstructionCleaningPage() {
  const faqPageSchema = {
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
    name: "Post-Construction Cleaning Service",
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
    description: "Professional post-construction and renovation cleanup in Romeoville, IL. We remove dust, debris, and construction residue from new builds and renovation projects.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
      { "@type": "ListItem", position: 2, name: "Post-Construction Cleaning", item: "https://www.dsmcleaningsolutions.com/post-construction-cleaning" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-5">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Post-Construction Cleaning</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Post-Construction Cleaning in <span className="text-orange-400">Romeoville, IL</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">Construction dust, debris, and residue removed — professionally and thoroughly. We make your newly built or renovated space spotless and move-in ready.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-white btn-lg text-base font-bold">Get a Free Estimate</Link>
              <Link href="/book" className="btn-outline-white btn-lg text-base">Book Now Online</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-500">
            {["🏗️ New Builds & Renovations", "🌿 Eco-Friendly", "🛡️ Fully Insured", "📋 3-Phase Process", "✅ Move-In Ready Guarantee"].map(item => <span key={item} className="whitespace-nowrap">{item}</span>)}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Specialists in Construction Cleanup</p>
              <h2 className="section-heading">Why Post-Construction Cleaning Requires Specialists</h2>
              <p className="text-gray-500 mb-4 leading-relaxed">Construction projects leave behind a unique kind of mess — ultra-fine drywall dust that coats every surface, adhesive stickers on fixtures and glass, grout haze, paint splatter, and debris hidden in corners and vents. This isn&apos;t a job for a regular cleaning service.</p>
              <p className="text-gray-500 mb-6 leading-relaxed">DSM Cleaning Solutions has the specialized training, tools, and multi-phase process to handle post-construction cleanups for new homes, full renovations, kitchen and bathroom remodels, and commercial build-outs in Romeoville and across the southwest suburbs.</p>
              <div className="grid grid-cols-2 gap-3 text-sm mb-8">
                {["New home builds", "Full home renovations", "Kitchen & bath remodels", "Basement finishing", "Commercial build-outs", "Multi-phase cleanups"].map(item => (
                  <div key={item} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>{item}
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <Link href="/contact" className="btn-primary">Get a Free Estimate</Link>
                <Link href="/book" className="btn-secondary">Book Now</Link>
              </div>
            </div>
            <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
              <h3 className="font-bold text-xl text-gray-900 mb-2">What We Tackle That Others Miss</h3>
              <p className="text-sm text-gray-500 mb-5">Construction messes go beyond what&apos;s visible. Here&apos;s what our specialized team handles:</p>
              {[
                { icon: "💨", label: "Fine Drywall Dust", desc: "Penetrates HVAC vents, settles on every surface — we eliminate it completely." },
                { icon: "🪟", label: "Construction Film & Stickers", desc: "Adhesive residue and protective film removed from glass, fixtures, and appliances." },
                { icon: "🪣", label: "Grout Haze & Paint Overspray", desc: "Tile grout haze and paint splatter cleaned from floors, walls, and fixtures." },
                { icon: "🔩", label: "Hardware & Fixture Polish", desc: "New faucets, handles, and fixtures polished to a showroom shine." },
                { icon: "📦", label: "Debris & Trash Removal", desc: "All construction scraps, packaging, and waste cleared out." },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-3 mb-4 last:mb-0">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.label}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3-PHASE PROCESS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="section-heading">3-Phase Post-Construction Clean</h2>
            <p className="section-subheading mx-auto">We follow a proven three-phase process to ensure nothing is missed — from rough debris to final polish.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase, i) => (
              <div key={phase.phase} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">{i + 1}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{phase.phase}</h3>
                <p className="text-sm text-gray-400 mb-4 italic">{phase.desc}</p>
                <ul className="space-y-2">
                  {phase.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="btn-primary">Schedule My Post-Construction Clean</Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="section-heading">What Builders & Homeowners Say</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReviewCard name="Mike D." location="Romeoville, IL" text="We just finished a full kitchen remodel and the drywall dust was everywhere. DSM came in and made it look brand new — every surface spotless. Couldn't believe the transformation." date="March 2025" />
            <ReviewCard name="Linda F." location="Plainfield, IL" text="I use DSM for every new build I complete. They do a thorough 3-phase clean and my clients are always blown away by the final result. Professional, reliable, and worth every penny." date="January 2025" />
            <ReviewCard name="Carlos R." location="Bolingbrook, IL" text="After our basement was finished, the mess was unbelievable. DSM handled the post-construction cleanup perfectly. Every corner, every vent, every fixture — spotless. Highly recommend!" date="February 2025" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="section-heading">Post-Construction Cleaning FAQs</h2></div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-2xl group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-brand-green">
                  <h3 className="text-left pr-4 text-sm md:text-base">{faq.question}</h3>
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-5 pb-5 pt-1"><p className="text-gray-500 leading-relaxed text-sm">{faq.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Other Services You Might Need</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning" className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"><h3 className="font-bold text-gray-900 mb-1">Deep Cleaning</h3><p className="text-sm text-gray-500">A comprehensive clean before moving into your renovated space.</p></Link>
            <Link href="/move-out-cleaning" className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"><h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning</h3><p className="text-sm text-gray-500">Getting a property ready for sale or new tenants after construction.</p></Link>
            <Link href="/standard-cleaning" className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"><h3 className="font-bold text-gray-900 mb-1">Standard Cleaning</h3><p className="text-sm text-gray-500">Set up recurring service to keep your newly renovated space pristine.</p></Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">Get a Free Post-Construction Cleaning Estimate</h2>
            <p className="text-white/80 text-lg mb-5">Tell us about your project and we&apos;ll send a custom quote — fast.</p>
            <a href="tel:+18152462113" className="inline-flex items-center gap-2 bg-white text-brand-green font-bold text-xl px-6 py-3 rounded-2xl hover:bg-orange-50 transition-colors shadow-xl">📞 (815) 246-2113</a>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/20"><LeadForm /></div>
        </div>
      </section>
    </>
  );
}
