import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "One-Time Cleaning Plainfield IL",
  description: "No-commitment one-time cleaning in Plainfield, IL. Great for events, moving, or seasonal resets. Eco-friendly & insured. Free estimate — no contract.",
  keywords: ["one time cleaning Romeoville IL", "one time house cleaning Romeoville", "single visit cleaning Romeoville", "no contract cleaning Romeoville IL", "house cleaning no commitment Romeoville", "one time maid service Romeoville IL"],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/one-time-cleaning" },
  openGraph: {
    title: "One-Time Cleaning Plainfield IL | DSM Cleaning Solutions",
    description: "No-commitment one-time cleaning in Plainfield, IL. Great for events, moving, or seasonal resets. Eco-friendly & insured. Free estimate — no contract.",
    url: "https://www.dsmcleaningsolutions.com/one-time-cleaning",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "DSM Cleaning Solutions — One-Time House Cleaning in Plainfield IL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "One-Time Cleaning Plainfield IL | DSM Cleaning Solutions",
    description: "No-commitment one-time cleaning in Plainfield, IL. Great for events, moving, or seasonal resets. Eco-friendly & insured.",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  { question: "Is there a contract or commitment required?", answer: "Absolutely not. Our one-time cleaning service requires zero commitment or contract. Book when you need it, and there are no obligations for future visits." },
  { question: "What does a one-time cleaning include?", answer: "A one-time cleaning covers all main areas of your home: kitchen, bathrooms, bedrooms, and living areas. It follows our standard cleaning checklist. You can also add deep cleaning tasks or specific rooms for an additional fee." },
  { question: "How much does a one-time cleaning cost in Romeoville?", answer: "One-time cleaning starts around $150–$250 depending on home size. Since it's a first-time clean with no prior service history, it may take a bit longer than a recurring visit. Contact us for a free estimate." },
  { question: "How far in advance do I need to book?", answer: "We recommend booking at least 48–72 hours in advance for the best availability. For urgent requests, contact us and we'll do our best to fit you in." },
  { question: "Can a one-time clean turn into recurring service?", answer: "Of course! Many of our recurring clients started with a one-time clean to try us out. If you love the results (and we think you will), we can set up a weekly, biweekly, or monthly schedule at a discounted recurring rate." },
];

const reasons = [
  { icon: "🎉", title: "Before a Party or Event", desc: "Get your home spotless before guests arrive — without lifting a finger." },
  { icon: "🏠", title: "Before Listing or Showing", desc: "Make your home shine for real estate photos or open house showings." },
  { icon: "🧹", title: "Spring or Seasonal Clean", desc: "A thorough seasonal reset to start fresh any time of year." },
  { icon: "👋", title: "After Guests Visit", desc: "Restore your home after family or guests have been staying with you." },
  { icon: "📦", title: "After Moving In", desc: "Clean your new home from top to bottom before settling in." },
  { icon: "💆", title: "Just Because", desc: "Sometimes you just need a clean home. No reason required." },
];

export default function OneTimeCleaningPage() {
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
    name: "One-Time House Cleaning Service",
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
    description: "No-commitment one-time house cleaning in Romeoville, IL. Perfect for special occasions, guests, seasonal resets, or whenever you need it.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
      { "@type": "ListItem", position: 2, name: "One-Time Cleaning", item: "https://www.dsmcleaningsolutions.com/one-time-cleaning" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1920&q=80&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-5">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">One-Time Cleaning</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              One-Time Cleaning in <span className="text-orange-400">Romeoville, IL</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">No contracts, no commitments — just a thorough professional clean when you need it. Perfect for special occasions, seasonal resets, or whenever life calls for a spotless home.</p>
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
            {["✅ No Contract Required", "🌿 Eco-Friendly Products", "🛡️ Fully Insured", "⭐ 5-Star Rated", "💯 Satisfaction Guaranteed"].map(item => <span key={item} className="whitespace-nowrap">{item}</span>)}
          </div>
        </div>
      </section>

      {/* WHEN YOU NEED IT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Flexible Cleaning</p>
            <h2 className="section-heading">When Does a One-Time Clean Make Sense?</h2>
            <p className="section-subheading mx-auto">Life doesn&apos;t always follow a schedule. Our one-time service is here for when you need a clean home, no strings attached.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {reasons.map(item => (
              <div key={item.title} className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* WHAT'S INCLUDED */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="section-heading">What&apos;s Included</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">Our one-time cleaning follows the same thorough checklist as our standard recurring service. Every room, every surface — done right.</p>
              <div className="space-y-2">
                {[
                  "Vacuum all floors, carpets & rugs", "Mop all hard surface floors", "Scrub & disinfect all bathrooms", "Clean & wipe down kitchen counters",
                  "Clean sink & fixtures", "Wipe exterior of all appliances", "Dust furniture, shelves & blinds", "Empty all trash bins",
                  "Clean mirrors & glass surfaces", "Wipe light switches & door handles", "Clean window sills & baseboards", "Optional add-ons available",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-700 py-1.5 border-b border-gray-100">
                    <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>{item}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-900 text-white rounded-3xl p-7">
                <h3 className="font-bold text-lg mb-5">One-Time Pricing Guide</h3>
                {[
                  { size: "1–2 Bedroom Home / Apt", price: "From $150" },
                  { size: "3 Bedroom Home", price: "From $180" },
                  { size: "4 Bedroom Home", price: "From $220" },
                  { size: "5+ Bedroom / Large Home", price: "Custom Quote" },
                ].map(row => (
                  <div key={row.size} className="flex items-center justify-between py-3 border-b border-gray-800 text-sm">
                    <span className="text-gray-300 font-medium">{row.size}</span>
                    <span className="text-orange-400 font-bold">{row.price}</span>
                  </div>
                ))}
                <p className="text-xs text-gray-500 mt-4">*First-time or one-time cleans may take longer than recurring visits. Prices are estimates — contact us for a free custom quote.</p>
                <p className="text-xs text-gray-400 mt-2">Bathrooms and square footage also factor into your final price. We&rsquo;ll confirm your exact number before you book, free, no obligation.</p>
              </div>
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5">
                <h4 className="font-bold text-gray-900 mb-2">💡 Want to save money long-term?</h4>
                <p className="text-sm text-gray-500 mb-3">Recurring clients save up to 20% per visit. Start with a one-time clean and switch to a recurring plan anytime — no pressure.</p>
                <Link href="/recurring-cleaning" className="text-brand-green font-semibold text-sm hover:underline">Learn about recurring service →</Link>
              </div>
              <Link href="/contact" className="btn-primary w-full text-center block">Get My Free One-Time Estimate</Link>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="section-heading">What Clients Say After Their First Clean</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReviewCard name="Rachel B." location="Romeoville, IL" text="I booked a one-time clean before my in-laws visited and DSM completely blew me away. The house was spotless — better than it's ever looked. I've since signed up for monthly service." date="February 2025" />
            <ReviewCard name="Derek S." location="Plainfield, IL" text="Needed a one-time clean after a renovation project and DSM delivered. They were professional, thorough, and left no dust behind. Exactly what I needed with zero hassle." date="January 2025" />
            <ReviewCard name="Nadia H." location="Bolingbrook, IL" text="I was nervous trying a new cleaning company but the one-time option felt low-risk. After the first visit I was convinced. Already booked my second. Wonderful team!" date="March 2025" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="section-heading">One-Time Cleaning FAQs</h2></div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 border border-gray-200 rounded-2xl group">
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
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Explore Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/standard-cleaning" className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"><h3 className="font-bold text-gray-900 mb-1">Standard Cleaning</h3><p className="text-sm text-gray-500">Upgrade to a recurring plan and save up to 20%.</p></Link>
            <Link href="/deep-cleaning" className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"><h3 className="font-bold text-gray-900 mb-1">Deep Cleaning</h3><p className="text-sm text-gray-500">Need more than a standard clean? Add a deep clean package.</p></Link>
            <Link href="/move-out-cleaning" className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"><h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning</h3><p className="text-sm text-gray-500">Moving soon? Our move-out clean ensures you get your deposit back.</p></Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">Get a Free One-Time Cleaning Estimate</h2>
            <p className="text-white/80 text-lg mb-5">Tell us about your home — we&apos;ll get back to you with a fast, no-obligation quote.</p>
            <a href="tel:+18152462113" className="inline-flex items-center gap-2 bg-white text-brand-green font-bold text-xl px-6 py-3 rounded-2xl hover:bg-orange-50 transition-colors shadow-xl">📞 (815) 246-2113</a>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/20"><LeadForm /></div>
        </div>
      </section>
    </>
  );
}
