import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Pet Safe House Cleaning Service Romeoville & Plainfield IL",
  description:
    "Pet-safe house cleaning in Romeoville and Plainfield IL. Non-toxic products safe for dogs and cats. DSM Cleaning Solutions.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/pet-friendly-cleaning" },
  openGraph: {
    title: "Pet Safe House Cleaning Service Romeoville & Plainfield IL | DSM Cleaning Solutions",
    description:
      "Pet-safe house cleaning in Romeoville and Plainfield IL. Non-toxic products safe for dogs and cats. DSM Cleaning Solutions.",
    url: "https://www.dsmcleaningsolutions.com/pet-friendly-cleaning",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "Pet Safe Cleaning Romeoville Plainfield IL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "Are your cleaning products safe for dogs and cats?",
    answer:
      "Yes — all products used by DSM Cleaning Solutions are non-toxic, biodegradable, and certified safe for dogs, cats, and other household pets. We do not use bleach, ammonia, chlorine, or synthetic chemical fragrances that can irritate or harm animals. Your pets can remain in the home during and after cleaning without any risk.",
  },
  {
    question: "Do you specialize in pet-friendly cleaning?",
    answer:
      "Yes. Pet-friendly cleaning is one of our most requested service types throughout Romeoville, Plainfield, Bolingbrook, Naperville, and the surrounding southwest suburbs. We understand that pet owners have specific needs — pet hair removal, dander reduction, odor elimination, and safe products — and our team is trained to address all of them.",
  },
  {
    question: "Can you remove pet hair and dander?",
    answer:
      "Absolutely. Pet hair and dander removal is part of our standard and deep cleaning services. We thoroughly vacuum all carpets, rugs, upholstery edges, and hard-to-reach corners where pet hair collects. For homes with heavy shedders or multiple pets, we recommend our deep cleaning service which includes detail-vacuuming along baseboards, under furniture, and in tight spaces where dander accumulates.",
  },
  {
    question: "What pet-safe products do you use?",
    answer:
      "We use professional-grade, non-toxic, biodegradable cleaning products that are free from bleach, ammonia, formaldehyde, and synthetic fragrances. These products are effective at eliminating odors, bacteria, and grime without leaving chemical residue on floors or surfaces your pets contact. Your dog doesn&apos;t need to stay off the floors after we clean — our products are safe immediately after application.",
  },
  {
    question: "Do you serve pet owners in Romeoville and Plainfield?",
    answer:
      "Yes — DSM Cleaning Solutions serves pet-owning households throughout Romeoville, Plainfield, Naperville, Bolingbrook, Joliet, Lockport, Homer Glen, Lemont, New Lenox, and all surrounding southwest Chicago suburbs. Whether you have one cat in a Romeoville apartment or three dogs in a Plainfield house, we have the products and techniques to leave your home clean and safe.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Pet-Friendly House Cleaning",
  name: "Pet-Safe House Cleaning Services in Romeoville & Plainfield, IL",
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
  areaServed: ["Romeoville, IL", "Plainfield, IL", "Naperville, IL", "Bolingbrook, IL", "Joliet, IL"],
  description:
    "Pet-safe, non-toxic house cleaning for dog and cat owners in the southwest Chicago suburbs. Biodegradable products safe for pets during and after cleaning.",
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
    { "@type": "ListItem", position: 2, name: "Pet-Friendly Cleaning", item: "https://www.dsmcleaningsolutions.com/pet-friendly-cleaning" },
  ],
};

const dangers = [
  { chemical: "Bleach (Sodium Hypochlorite)", risk: "Highly toxic to cats and dogs. Can cause respiratory distress, chemical burns, and vomiting if inhaled or licked from surfaces." },
  { chemical: "Ammonia", risk: "Found in many glass and multi-surface cleaners. Fumes irritate lungs and can trigger respiratory issues in pets, especially birds and cats." },
  { chemical: "Synthetic Fragrances", risk: "Many air fresheners and scented cleaners contain volatile organic compounds (VOCs) harmful to pets with sensitive respiratory systems." },
  { chemical: "Phenols", risk: "Found in pine-scented disinfectants. Particularly toxic to cats, whose livers cannot process phenolic compounds." },
];

const citiesServed = [
  "Romeoville", "Plainfield", "Naperville", "Bolingbrook",
  "Joliet", "Lockport", "Homer Glen", "Lemont",
  "New Lenox", "Shorewood", "Minooka", "Westmont",
];

export default function PetFriendlyCleaningPage() {
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
              <span className="text-white">Pet-Friendly Cleaning</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Pet-Safe House Cleaning Services in Romeoville &amp; Plainfield, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Non-toxic, biodegradable cleaning products that are safe for dogs, cats, and all
              household pets — with no compromise on cleaning power. DSM Cleaning Solutions serves
              pet-owning households across the southwest Chicago suburbs. Fully insured and
              family-owned.
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
            {["🐾 Pet-Safe Products", "🌿 Non-Toxic & Biodegradable", "🛡️ Fully Insured", "👨‍👩‍👧 Family Owned", "⭐ 5-Star Rated"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* WHY PET OWNERS NEED SPECIAL CLEANING */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Why Pet Owners Need Pet-Safe House Cleaning</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Pet-safe house cleaning in Romeoville and Plainfield is about more than just keeping
            your home clean — it&apos;s about keeping your animals safe. Most conventional cleaning
            products used by standard cleaning companies contain chemicals that are genuinely
            dangerous for dogs and cats. Pets lick floors, chew on surfaces, and breathe at
            ground level where chemical residue concentrates. What seems like a safe product for
            humans can be harmful to a 15-pound dog or a cat walking across a freshly mopped floor.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            At DSM Cleaning Solutions, pet-friendly cleaning is not an add-on service — it&apos;s
            our standard. Every product we use in every home across our southwest suburb service
            area is non-toxic, biodegradable, and certified safe for pets. Your dog doesn&apos;t
            need to be crated. Your cat doesn&apos;t need to leave the room. Your bird doesn&apos;t
            need to be covered. We clean around your pets — safely.
          </p>
        </div>
      </section>

      {/* DANGERS OF HARSH CHEMICALS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Dangers of Harsh Chemicals Around Pets</h2>
            <p className="section-subheading mx-auto">
              Common ingredients in standard cleaning products that pose real risks to dogs and cats.
            </p>
          </div>
          <div className="space-y-4">
            {dangers.map((d) => (
              <div key={d.chemical} className="bg-white border border-red-100 rounded-xl p-5 flex gap-4">
                <span className="text-2xl flex-shrink-0">⚠️</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{d.chemical}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.risk}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-brand-green-50 border border-brand-green-100 rounded-xl p-5">
            <p className="text-brand-green font-semibold">
              ✅ DSM uses none of the above. Every product we bring into your home is non-toxic,
              biodegradable, and safe for pets before, during, and after cleaning.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO FOR PET HOMES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">How We Handle Pet Hair, Dander &amp; Odors</h2>
            <p className="section-subheading mx-auto">
              Specific techniques and steps for homes with dogs, cats, and other pets.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🐕", title: "Pet Hair Removal", desc: "Thorough vacuuming of all carpets, rugs, and upholstery edges. Detail work along baseboards and under furniture where pet hair collects most." },
              { icon: "💨", title: "Dander Reduction", desc: "Deep cleaning techniques that remove airborne allergens from surfaces — especially important for allergy sufferers in multi-pet households." },
              { icon: "🧴", title: "Odor Elimination", desc: "Non-toxic enzyme-based cleaners that neutralize pet odors at the molecular level rather than masking them with synthetic fragrances." },
              { icon: "🪣", title: "Safe Floor Cleaning", desc: "Residue-free mop solutions that are safe for pets immediately after drying — no need to keep animals off floors for hours." },
              { icon: "🪟", title: "Nose-Print Removal", desc: "We clean window glass and sliding doors where dogs and cats leave smudges — a small detail that makes a big visual difference." },
              { icon: "🛡️", title: "Non-Toxic Disinfection", desc: "Bathroom and kitchen disinfection using products that kill bacteria and viruses without chemical residue harmful to pets." },
            ].map((card) => (
              <div key={card.title} className="text-center p-6 rounded-xl bg-brand-green-50 border border-brand-green-100">
                <span className="text-4xl block mb-3">{card.icon}</span>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALLERGY FRIENDLY */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Allergy-Friendly Cleaning for Pet Owners</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Pet dander is one of the most common indoor allergen triggers in Illinois homes.
            For family members with pet allergies, asthma, or hay fever, regular professional
            cleaning with a company that specializes in pet-safe products can make a significant
            difference in daily comfort.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            DSM Cleaning Solutions removes pet dander from surfaces, carpets, and hard-to-reach
            areas using techniques and tools that standard cleaning companies skip. We also avoid
            introducing new airborne irritants through scented products or chemical sprays —
            something conventional cleaners routinely do.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For households managing both pet dander and chemical sensitivities, our cleaning is
            genuinely different: non-toxic, fragrance-free options that reduce total allergen
            load rather than trading one irritant for another. Learn more on our{" "}
            <Link href="/cleaning-for-allergies" className="text-brand-green font-semibold hover:underline">
              allergy-friendly cleaning page
            </Link>.
          </p>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Southwest Chicago Suburb Pet Owners Choose DSM</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We serve pet-owning households throughout the southwest Chicago suburbs. Whether
            you have a golden retriever in Romeoville or two cats in a Naperville condo,
            DSM brings the same pet-safe standard to every home.
          </p>
          <div className="flex flex-wrap gap-3">
            {citiesServed.map((city) => (
              <span key={city} className="bg-brand-green-50 border border-brand-green-100 text-brand-green font-medium text-sm px-4 py-2 rounded-full">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Pet-Friendly Cleaning — FAQs</h2>
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
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Cleaning Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/eco-friendly-cleaning" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Eco-Friendly Cleaning</h3>
              <p className="text-sm text-gray-600">Our full green cleaning service across the southwest suburbs.</p>
            </Link>
            <Link href="/deep-cleaning" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning</h3>
              <p className="text-sm text-gray-600">Top-to-bottom pet-safe deep cleaning for heavy dander and hair buildup.</p>
            </Link>
            <Link href="/standard-cleaning" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning</h3>
              <p className="text-sm text-gray-600">Regular recurring cleaning for pet homes using safe products.</p>
            </Link>
            <Link href="/contact" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Get a Free Quote</h3>
              <p className="text-sm text-gray-600">Contact us about pet-friendly cleaning in your city.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Pet-Safe Cleaning Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Your pets stay safe, your home gets spotless. Non-toxic products, fully insured
                team, and a 48-hour satisfaction guarantee. Serving Romeoville, Plainfield,
                Naperville, Bolingbrook, and the surrounding suburbs.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">🐾 Pet-safe · 🌿 Non-toxic · 🛡️ Fully insured · 👨‍👩‍👧 Family owned</p>
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
