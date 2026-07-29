import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Apartment Cleaning Romeoville IL",
  description: "Professional apartment cleaning in Romeoville and surrounding areas. Move-in ready or recurring service. Book online in minutes. 48-hour satisfaction guarantee.",
  keywords: ["apartment cleaning Romeoville IL", "condo cleaning Romeoville", "apartment cleaning service Romeoville", "rental unit cleaning Romeoville", "apartment maid service Romeoville IL", "studio cleaning Romeoville"],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/apartment-cleaning" },
  openGraph: {
    title: "Apartment Cleaning Plainfield IL | DSM Cleaning Solutions",
    description: "Professional apartment cleaning in Plainfield, IL for renters, landlords & property managers. Eco-friendly, insured & reliable. Call for a free estimate.",
    url: "https://www.dsmcleaningsolutions.com/apartment-cleaning",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "DSM Cleaning Solutions — Apartment Cleaning in Plainfield IL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartment Cleaning Plainfield IL | DSM Cleaning Solutions",
    description: "Professional apartment cleaning in Plainfield, IL for renters, landlords & property managers. Eco-friendly, insured & reliable.",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  { question: "Do you clean all apartment sizes in Romeoville?", answer: "Yes — from studios and 1-bedroom apartments to large 3+ bedroom units. We price based on size, so you only pay for what you need." },
  { question: "Can you do apartment cleaning for my rental property?", answer: "Absolutely. We work with many landlords and property managers in the Romeoville area to turn over units quickly and thoroughly between tenants." },
  { question: "Do I need to be home for the apartment cleaning?", answer: "No. Many tenants and landlords provide a key or access code. Our fully insured and background-checked team will take great care of the property." },
  { question: "How much does apartment cleaning cost in Romeoville, IL?", answer: "Pricing starts around $90–$140 for a 1-bedroom apartment, varying by size and service type. Contact us for a free personalized estimate." },
  { question: "Can you do move-out cleaning for my apartment?", answer: "Yes! We offer dedicated move-out cleaning designed to meet landlord inspection standards and help renters get their full security deposit back. Check out our Move-Out Cleaning page for details." },
];

export default function ApartmentCleaningPage() {
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
    name: "Apartment Cleaning Service",
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
    description: "Professional apartment cleaning for renters, landlords, and property managers in Romeoville, IL and surrounding southwest suburbs.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
      { "@type": "ListItem", position: 2, name: "Apartment Cleaning", item: "https://www.dsmcleaningsolutions.com/apartment-cleaning" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-5">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Apartment Cleaning</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Apartment Cleaning in <span className="text-orange-400">Romeoville, IL</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">Professional, affordable apartment cleaning for renters, condo owners, and property managers across Romeoville and the southwest suburbs.</p>
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
            {["🏢 All Apartment Sizes", "🌿 Eco-Friendly", "🛡️ Fully Insured", "🔑 Key-Holder Service", "✅ Satisfaction Guaranteed"].map(item => <span key={item} className="whitespace-nowrap">{item}</span>)}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Who We Help</p>
            <h2 className="section-heading">Apartment Cleaning for Everyone</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: "🏠", title: "Renters & Tenants", desc: "Regular cleaning to keep your apartment looking great, or a move-out clean to get your full deposit back. We've got you covered." },
              { icon: "🔑", title: "Landlords & Property Managers", desc: "Fast, reliable unit turnovers between tenants. We get your rental market-ready quickly so you can minimize vacancy time." },
              { icon: "🏢", title: "Condo Owners", desc: "Recurring or one-time cleaning for condo owners who want a consistently clean space without the hassle." },
            ].map(item => (
              <div key={item.title} className="bg-orange-50 rounded-2xl p-7 border border-orange-100 text-center">
                <span className="text-5xl block mb-4">{item.icon}</span>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="section-heading">What&apos;s Included in Apartment Cleaning</h2>
              <div className="space-y-3">
                {[
                  "Vacuum all floors, carpets & rugs", "Mop all hard surface floors", "Clean & disinfect all bathrooms", "Wipe down kitchen counters & surfaces",
                  "Clean kitchen sink & fixtures", "Wipe exterior of all appliances", "Dust furniture, shelves & blinds", "Empty all trash bins & replace liners",
                  "Clean mirrors & glass surfaces", "Wipe light switches & door handles", "Clean window sills", "Customizable add-ons available",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-700 py-1.5 border-b border-gray-100">
                    <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>{item}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-900 text-white rounded-3xl p-7">
                <h3 className="font-bold text-lg mb-5">Apartment Sizes We Service</h3>
                {[
                  { type: "Studio / Efficiency", time: "1.5–2 hrs", price: "From $90" },
                  { type: "1 Bedroom / 1 Bath", time: "2–2.5 hrs", price: "From $110" },
                  { type: "2 Bedroom / 1-2 Bath", time: "2.5–3.5 hrs", price: "From $140" },
                  { type: "3 Bedroom / 2 Bath", time: "3.5–4.5 hrs", price: "From $175" },
                ].map(size => (
                  <div key={size.type} className="flex items-center justify-between py-3 border-b border-gray-800 text-sm">
                    <span className="text-gray-300 font-medium">{size.type}</span>
                    <div className="flex gap-4 text-right">
                      <span className="text-gray-500">{size.time}</span>
                      <span className="text-orange-400 font-bold">{size.price}</span>
                    </div>
                  </div>
                ))}
                <p className="text-xs text-gray-500 mt-4">*Prices are estimates. Contact us for an exact quote based on your unit.</p>
              </div>
              <Link href="/contact" className="btn-primary w-full text-center block">Get My Free Apartment Estimate</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="section-heading">Apartment Cleaning Results</h2>
            <p className="section-subheading mx-auto">
              Real apartments and condos we&apos;ve cleaned across Plainfield, Romeoville, and the southwest suburbs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/work-photos/apartment-bathroom-cleaning-naperville-il.jpg"
                alt="Clean apartment bathroom professionally cleaned by DSM Cleaning Solutions in Naperville IL"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/work-photos/apartment-move-out-cleaning-joliet-il.jpg"
                alt="Clean apartment with parquet hardwood floors after professional cleaning service in Joliet IL"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/work-photos/bedroom-cleaning-service-bolingbrook-il.jpg"
                alt="Clean bedroom maintained with recurring apartment cleaning service in Bolingbrook IL"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="section-heading">What Apartment Renters Say</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReviewCard name="Kayla S." location="Romeoville, IL" text="DSM did my apartment move-out clean and I got my full deposit back! They were so thorough — cleaned inside cabinets, the oven, everything. Worth every penny." date="March 2025" />
            <ReviewCard name="James O." location="Bolingbrook, IL" text="I manage 6 rental units and DSM is my go-to for turnovers. Fast, reliable, and the units always look great for new tenants. Highly recommend for property managers." date="January 2025" />
            <ReviewCard name="Priya M." location="Plainfield, IL" text="Monthly apartment cleaning with DSM — love it. They work around my schedule, use eco-friendly products, and are always professional. My condo has never been so clean!" date="February 2025" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="section-heading">Apartment Cleaning FAQs</h2></div>
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
            <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">Get a Free Apartment Cleaning Estimate</h2>
            <p className="text-white/80 text-lg mb-5">Tell us about your unit and we&apos;ll send you a custom quote.</p>
            <a href="tel:+18152462113" className="inline-flex items-center gap-2 bg-white text-brand-green font-bold text-xl px-6 py-3 rounded-2xl hover:bg-orange-50 transition-colors shadow-xl">📞 (815) 246-2113</a>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/20"><LeadForm /></div>
        </div>
      </section>
    </>
  );
}
