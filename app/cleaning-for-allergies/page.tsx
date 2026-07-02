import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Allergy Friendly Cleaning Service Romeoville & Plainfield IL",
  description:
    "Allergy-friendly house cleaning in Romeoville and Plainfield IL. Non-toxic products, certified cleaners. DSM Cleaning Solutions.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/cleaning-for-allergies" },
  openGraph: {
    title: "Allergy Friendly Cleaning Service Romeoville & Plainfield IL | DSM Cleaning Solutions",
    description:
      "Allergy-friendly house cleaning in Romeoville and Plainfield IL. Non-toxic products, certified cleaners. DSM Cleaning Solutions.",
    url: "https://www.dsmcleaningsolutions.com/cleaning-for-allergies",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "Allergy Friendly Cleaning Romeoville Plainfield IL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "Do you offer allergy-friendly cleaning?",
    answer:
      "Yes — allergy-friendly cleaning is built into every service DSM Cleaning Solutions provides. We use non-toxic, biodegradable, fragrance-free compatible products that reduce indoor allergens rather than adding new chemical irritants to your home. We serve allergy sufferers throughout Romeoville, Plainfield, Naperville, Bolingbrook, and the southwest Chicago suburbs.",
  },
  {
    question: "What products do you use that are safe for allergy sufferers?",
    answer:
      "We use professional-grade, non-toxic cleaning products that are free from synthetic fragrances, ammonia, bleach, VOCs (volatile organic compounds), and other common chemical irritants. These products clean and disinfect effectively without triggering fragrance sensitivities, respiratory reactions, or skin irritation. For clients with severe allergies, we can discuss fragrance-free options specifically.",
  },
  {
    question: "Can professional cleaning help with asthma?",
    answer:
      "Yes — professional allergy-friendly cleaning can meaningfully reduce asthma triggers in Illinois homes. Dust mites, pet dander, mold spores, and pollen that accumulates on surfaces are all common asthma triggers that build up between cleanings. Regular professional cleaning using non-toxic, low-VOC products removes these triggers without introducing new chemical irritants from harsh conventional cleaners.",
  },
  {
    question: "How often should allergy sufferers get their home cleaned?",
    answer:
      "For allergy sufferers in the southwest Chicago suburbs, we typically recommend bi-weekly professional cleaning during high-pollen seasons (spring and fall) and at least monthly during winter. Homes with pets or individuals with severe allergies or asthma benefit most from weekly or bi-weekly service. Regular cleaning prevents allergen buildup rather than just addressing it after it accumulates.",
  },
  {
    question: "Do you serve allergy sufferers in Romeoville and Naperville?",
    answer:
      "Yes — DSM Cleaning Solutions serves allergy-sensitive households throughout Romeoville, Naperville, Plainfield, Bolingbrook, Joliet, Lockport, Homer Glen, Lemont, New Lenox, Shorewood, Minooka, and Westmont. Our entire service area receives the same non-toxic, allergy-conscious cleaning standard at the same pricing.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Allergy-Friendly Cleaning",
  name: "Allergy-Friendly Cleaning Services in Romeoville & Plainfield, IL",
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
    "Allergy-friendly house cleaning for families with asthma and sensitivities. Non-toxic products, allergen-reduction techniques. Southwest Chicago suburbs.",
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
    { "@type": "ListItem", position: 2, name: "Cleaning for Allergies", item: "https://www.dsmcleaningsolutions.com/cleaning-for-allergies" },
  ],
};

const allergens = [
  { icon: "🦟", name: "Dust Mites", desc: "Microscopic organisms that thrive in bedding, carpets, and upholstery. A leading trigger for asthma and year-round allergies in Illinois homes." },
  { icon: "🐾", name: "Pet Dander", desc: "Tiny flecks of skin shed by cats, dogs, and other animals. Dander is airborne and accumulates on all surfaces, not just pet areas." },
  { icon: "🍄", name: "Mold Spores", desc: "Mold grows in humid areas — bathrooms, basements, and window tracks. Spores become airborne and trigger respiratory reactions." },
  { icon: "🌿", name: "Pollen", desc: "Illinois has significant spring and fall pollen seasons. Pollen tracked indoors settles on floors, furniture, and bedding." },
];

const techniques = [
  { title: "Top-Down Dusting", desc: "We always dust from ceiling to floor — ceiling fans, light fixtures, shelves, and furniture before vacuuming. This prevents displaced allergens from resettling." },
  { title: "HEPA-Friendly Vacuuming", desc: "Thorough vacuuming of all carpets, rugs, and upholstery edges, including along baseboards and under furniture where allergens accumulate most." },
  { title: "Non-Toxic Disinfection", desc: "We disinfect bathrooms and kitchens using products that eliminate mold, bacteria, and viruses without VOCs or synthetic fragrances that can trigger reactions." },
  { title: "Mold-Risk Area Focus", desc: "Bathrooms, window tracks, and basement areas receive specific attention for mold prevention — a key allergy trigger in midwest homes." },
  { title: "Fragrance-Free Options", desc: "Many cleaning products contain synthetic fragrances that trigger migraines and fragrance sensitivities. We can work entirely fragrance-free on request." },
  { title: "Dander Removal Technique", desc: "Special attention to pet dander areas in multi-pet homes, with allergen-reduction focused cleaning in bedrooms and living areas." },
];

const whoBenefits = [
  { condition: "Seasonal Allergies (Hay Fever)", desc: "Regular cleaning reduces pollen and outdoor allergens tracked inside, providing relief during Illinois spring and fall seasons." },
  { condition: "Asthma", desc: "Reduces dust mites, pet dander, and mold — the three most common household asthma triggers — while avoiding chemical cleaners that irritate airways." },
  { condition: "Pet Allergies", desc: "For families who love their pets but struggle with dander, consistent professional cleaning reduces the allergen load throughout the home." },
  { condition: "Chemical Sensitivities (MCS)", desc: "Our non-toxic, fragrance-free options are ideal for individuals with multiple chemical sensitivities who react to standard cleaning product fumes." },
  { condition: "Eczema & Skin Irritation", desc: "No harsh chemical residue on floors and surfaces — important for individuals whose skin is sensitive to conventional cleaning product contact." },
];

const citiesServed = [
  "Romeoville", "Plainfield", "Naperville", "Bolingbrook",
  "Joliet", "Lockport", "Homer Glen", "Lemont",
  "New Lenox", "Shorewood", "Minooka", "Westmont",
];

export default function CleaningForAllergiesPage() {
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
              <span className="text-white">Cleaning for Allergies</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Allergy-Friendly Cleaning Services in Romeoville &amp; Plainfield, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Allergy-friendly cleaning service that reduces dust mites, pet dander, mold spores,
              and pollen — using non-toxic, hypoallergenic products that don&apos;t trade one irritant
              for another. DSM Cleaning Solutions serves allergy and asthma sufferers across the
              southwest Chicago suburbs. Fully insured and family-owned.
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
            {["🌿 Hypoallergenic Products", "🚫 No Harsh Fumes", "🛡️ Fully Insured", "👨‍👩‍👧 Family Owned", "⭐ 5-Star Rated"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* HOW POOR CLEANING AFFECTS ALLERGIES */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">How Poor Cleaning Affects Allergies</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Allergy-friendly cleaning in Romeoville and Plainfield addresses a problem that most
            cleaning companies ignore: standard cleaning products can make allergies worse, not
            better. Conventional cleaners rely on strong synthetic fragrances, bleach, and VOCs
            that irritate the respiratory system — trading surface grime for airborne chemical
            irritants. For allergy and asthma sufferers in Illinois, this is not a trade-off
            worth making.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Inadequate or infrequent cleaning also allows allergens to accumulate to levels that
            trigger symptoms. Dust mites build up in carpets and bedding. Pet dander becomes
            embedded in upholstery. Mold establishes in bathroom grout and window tracks. Pollen
            tracked indoors settles on floors and furniture. Without regular professional cleaning
            that specifically targets these allergens, your indoor air quality degrades significantly
            — especially during Illinois spring and fall pollen seasons.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The solution isn&apos;t just cleaning more frequently — it&apos;s cleaning with the
            right products and the right techniques. DSM Cleaning Solutions specializes in both.
          </p>
        </div>
      </section>

      {/* COMMON ALLERGENS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Common Allergens in Illinois Homes</h2>
            <p className="section-subheading mx-auto">
              The four main indoor allergens DSM&apos;s allergy-friendly cleaning targets in southwest suburb homes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allergens.map((a) => (
              <div key={a.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm text-center">
                <span className="text-5xl block mb-4">{a.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{a.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW DSM REDUCES ALLERGENS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">How DSM&apos;s Cleaning Reduces Allergens</h2>
            <p className="section-subheading mx-auto">
              Specific techniques used in every allergy-friendly clean across our service area.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((t) => (
              <div key={t.title} className="bg-brand-green-50 border border-brand-green-100 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">✅ {t.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO BENEFITS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Who Benefits Most from Allergy-Friendly Cleaning?</h2>
          </div>
          <div className="space-y-4">
            {whoBenefits.map((w) => (
              <div key={w.condition} className="bg-white border border-gray-100 rounded-xl p-5 flex gap-4 shadow-sm">
                <div className="w-2 bg-brand-green rounded-full flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{w.condition}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NON-TOXIC PRODUCTS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Non-Toxic Hypoallergenic Products We Use</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Every product DSM Cleaning Solutions uses is selected to minimize allergen exposure,
            not just clean surfaces. Our products are free from:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {["Synthetic fragrances", "Ammonia", "Chlorine bleach", "Formaldehyde", "VOCs", "Phosphates", "Triclosan", "Parabens", "Phthalates"].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                <span className="text-red-500 font-bold text-lg">✗</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            Instead, we use plant-derived, biodegradable formulas that disinfect and clean
            without irritating airways, skin, or eyes. For clients with the most severe
            sensitivities, we offer fully fragrance-free service upon request at no extra charge.
          </p>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Allergy-Friendly Cleaning Across the Southwest Suburbs</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            DSM Cleaning Solutions provides allergy-friendly cleaning throughout the southwest
            Chicago suburbs. Every home we clean receives the same non-toxic, allergen-reducing
            standard — no matter which city you live in:
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {citiesServed.map((city) => (
              <span key={city} className="bg-white border border-brand-green-100 text-brand-green font-medium text-sm px-4 py-2 rounded-full shadow-sm">
                {city}
              </span>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            Don&apos;t see your city?{" "}
            <Link href="/service-areas" className="text-brand-green font-semibold hover:underline">View all service areas →</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Allergy-Friendly Cleaning — FAQs</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Cleaning Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/eco-friendly-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Eco-Friendly Cleaning</h3>
              <p className="text-sm text-gray-600">Our full green cleaning service across the southwest suburbs.</p>
            </Link>
            <Link href="/deep-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning</h3>
              <p className="text-sm text-gray-600">Top-to-bottom allergen removal for heavily affected homes.</p>
            </Link>
            <Link href="/pet-friendly-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Pet-Friendly Cleaning</h3>
              <p className="text-sm text-gray-600">Safe cleaning for homes with dogs and cats — pet dander specialists.</p>
            </Link>
            <Link href="/contact" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Get a Free Quote</h3>
              <p className="text-sm text-gray-600">Contact us about allergy-friendly cleaning in your home.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Allergy-Friendly Cleaning Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Breathe easier in your own home. Non-toxic, hypoallergenic cleaning that reduces
                dust mites, pet dander, mold, and pollen — without chemical fumes. Serving
                Romeoville, Plainfield, Naperville, and all southwest suburbs.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">🌿 Hypoallergenic · 🚫 No harsh fumes · 🛡️ Fully insured · 👨‍👩‍👧 Family owned</p>
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
