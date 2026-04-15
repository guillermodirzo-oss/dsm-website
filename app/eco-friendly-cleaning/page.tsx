import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Eco-Friendly Cleaning Service Romeoville IL | DSM Cleaning Solutions",
  description: "Green, non-toxic house cleaning in Romeoville, IL. Safe for kids, pets & the environment. Family-owned, fully insured. Book online or call for a free estimate.",
  keywords: ["eco-friendly cleaning Romeoville IL", "green cleaning service Romeoville", "non-toxic house cleaning Romeoville", "natural cleaning service Romeoville IL", "safe cleaning products Romeoville", "organic cleaning Romeoville IL"],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/eco-friendly-cleaning" },
};

const faqs = [
  { question: "What eco-friendly products do you use?", answer: "We use professional-grade, non-toxic, biodegradable cleaning products that are certified safe for children, pets, and the environment. No harsh chemicals, no strong fumes — just a clean, fresh home." },
  { question: "Do eco-friendly products really clean as well as regular products?", answer: "Absolutely. Our green cleaning products are professional-grade and just as effective at killing bacteria, removing grime, and disinfecting surfaces as conventional chemicals — without the toxic side effects." },
  { question: "Is eco-friendly cleaning safe for my pets?", answer: "Yes! Our non-toxic products are completely safe for dogs, cats, and all household pets. No need to remove pets from the home during cleaning." },
  { question: "Is green cleaning available for all your services?", answer: "Yes — we use eco-friendly products across all our services including standard cleaning, deep cleaning, move-out cleaning, and recurring maid service. It's our standard practice." },
  { question: "How much does eco-friendly cleaning cost in Romeoville?", answer: "Our green cleaning is included in all our regular pricing — there is no extra charge for using eco-friendly products. Contact us for a free estimate." },
];

export default function EcoFriendlyCleaningPage() {
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
    name: "Eco-Friendly Green Cleaning Service",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.dsmcleaningsolutions.com/#business",
      name: "DSM Cleaning Solutions",
      telephone: "+18152462113",
    },
    areaServed: ["Romeoville, IL", "Plainfield, IL", "Naperville, IL", "Bolingbrook, IL"],
    description: "Non-toxic, eco-friendly house cleaning in Romeoville, IL. Safe for children, pets, and the environment. Professional-grade green cleaning products.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
      { "@type": "ListItem", position: 2, name: "Eco-Friendly Cleaning", item: "https://www.dsmcleaningsolutions.com/eco-friendly-cleaning" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-5">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Eco-Friendly Cleaning</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Eco-Friendly Green Cleaning in <span className="text-orange-400">Romeoville, IL</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">Non-toxic, biodegradable cleaning products that are safe for your children, pets, and the planet — without sacrificing a single bit of cleaning power.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-white btn-lg text-base font-bold">Get a Free Estimate</Link>
              <Link href="https://dsmcleaningsolutions.bookingkoala.com/booknow" className="btn-outline-white btn-lg text-base">Book Now Online</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-500">
            {["🌿 100% Non-Toxic Products", "🐾 Safe for Kids & Pets", "♻️ Biodegradable", "🛡️ Fully Insured", "👨‍👩‍👧 Family Owned"].map(item => <span key={item} className="whitespace-nowrap">{item}</span>)}
          </div>
        </div>
      </section>

      {/* WHY GREEN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Clean & Safe</p>
              <h2 className="section-heading">Why Choose Eco-Friendly Cleaning?</h2>
              <p className="text-gray-500 mb-4 leading-relaxed">Most conventional cleaning products contain harsh chemicals that can irritate skin, trigger allergies, and leave toxic residue on the surfaces your family touches every day. At DSM Cleaning Solutions, we believe a truly clean home should also be a safe home.</p>
              <p className="text-gray-500 mb-6 leading-relaxed">Our professional-grade green cleaning products are just as powerful as conventional cleaners — they kill bacteria, remove grease, and disinfect surfaces effectively — without the harsh fumes, skin irritants, or environmental damage.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "👶", title: "Safe for Children", desc: "No toxic residue on floors, toys, or surfaces your kids touch." },
                  { icon: "🐾", title: "Pet-Friendly", desc: "Completely safe for dogs, cats, and all household pets." },
                  { icon: "🌍", title: "Eco-Responsible", desc: "Biodegradable formulas that don't harm waterways or ecosystems." },
                  { icon: "💨", title: "No Harsh Fumes", desc: "Fresh-smelling results without headache-inducing chemical odors." },
                ].map(item => (
                  <div key={item.title} className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
                    <span className="text-2xl block mb-2">{item.icon}</span>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <Link href="#contact" className="btn-primary">Get a Free Estimate</Link>
                <Link href="https://dsmcleaningsolutions.bookingkoala.com/booknow" className="btn-secondary">Book Now</Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-900 text-white rounded-3xl p-8">
                <h3 className="font-bold text-xl mb-5">Conventional vs. Green Cleaning</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "Safe for kids & pets", green: true, conv: false },
                    { label: "No harsh chemical fumes", green: true, conv: false },
                    { label: "Biodegradable formula", green: true, conv: false },
                    { label: "Effective disinfecting", green: true, conv: true },
                    { label: "Removes grease & grime", green: true, conv: true },
                    { label: "Kills bacteria & germs", green: true, conv: true },
                    { label: "Pleasant fresh scent", green: true, conv: false },
                  ].map(row => (
                    <div key={row.label} className="flex items-center justify-between border-b border-gray-800 pb-2">
                      <span className="text-gray-300">{row.label}</span>
                      <div className="flex gap-6">
                        <span className={row.green ? "text-green-400 font-bold" : "text-red-400"}>🌿 {row.green ? "✓" : "✗"}</span>
                        <span className={row.conv ? "text-gray-400" : "text-red-400"}>{row.conv ? "✓" : "✗"}</span>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-end gap-4 text-xs text-gray-500 pt-1">
                    <span>Green</span><span>Conventional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="section-heading">What Families Are Saying</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReviewCard name="Jennifer R." location="Romeoville, IL" text="I specifically looked for a company that uses eco-friendly products because of my young kids. DSM is perfect — the house is spotless and I have zero worries about chemical residue." date="January 2025" />
            <ReviewCard name="Tom H." location="Plainfield, IL" text="My dog would always get sick after our old cleaning company came. Switched to DSM for their green products and the difference is amazing. No more issues and the house is just as clean!" date="December 2024" />
            <ReviewCard name="Sandra L." location="Naperville, IL" text="As someone with asthma, the fumes from regular cleaners are awful. DSM uses eco-friendly products and I can breathe normally in my own home on cleaning day. Total game-changer." date="February 2025" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="section-heading">Eco-Friendly Cleaning FAQs</h2></div>
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

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">Get a Free Green Cleaning Estimate</h2>
            <p className="text-white/80 text-lg mb-5">Safe for your family, tough on dirt. Serving Romeoville, Plainfield &amp; surrounding suburbs.</p>
            <a href="tel:+18152462113" className="inline-flex items-center gap-2 bg-white text-brand-green font-bold text-xl px-6 py-3 rounded-2xl hover:bg-orange-50 transition-colors shadow-xl">📞 (815) 246-2113</a>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/20"><BookingForm /></div>
        </div>
      </section>
    </>
  );
}
