import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Eco Friendly House Cleaning Plainfield IL",
  description:
    "Eco-friendly house cleaning in Plainfield IL by DSM Cleaning Solutions. Safe for kids and pets. Fully insured. Free quote.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/eco-friendly-cleaning-plainfield-il" },
  openGraph: {
    title: "Eco Friendly House Cleaning Plainfield IL | DSM Cleaning Solutions",
    description:
      "Eco-friendly house cleaning in Plainfield IL by DSM Cleaning Solutions. Safe for kids and pets. Fully insured. Free quote.",
    url: "https://www.dsmcleaningsolutions.com/eco-friendly-cleaning-plainfield-il",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "Eco Friendly Cleaning Plainfield IL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "Do you offer eco-friendly cleaning in Plainfield, IL?",
    answer:
      "Yes — DSM Cleaning Solutions uses professional-grade, non-toxic, biodegradable cleaning products for every job in Plainfield, IL. We serve all of Plainfield including zip codes 60544 and 60585, covering neighborhoods like Settlers Ridge, Grande Park, Brookside, and Whispering Creek. Eco-friendly cleaning is our standard — not an upgrade.",
  },
  {
    question: "What eco-friendly products do you use?",
    answer:
      "We use professional-grade non-toxic and biodegradable cleaning products that are free from harsh chemicals, bleach, ammonia, and synthetic fragrances. These products are certified safe for children, pets, and individuals with allergies or asthma. Despite being gentle, they are just as effective as conventional cleaners at killing bacteria, cutting grease, and removing grime.",
  },
  {
    question: "Is eco-friendly cleaning safe for pets and children?",
    answer:
      "Absolutely. Our non-toxic products leave no harmful residue on floors, counters, or surfaces your children and pets come into contact with every day. There are no harsh fumes during or after cleaning, and pets do not need to be removed from the home during our visit. Plainfield families with infants, toddlers, dogs, and cats all use our eco-friendly cleaning regularly.",
  },
  {
    question: "Is eco-friendly cleaning as effective as regular cleaning?",
    answer:
      "Yes — our professional eco-friendly products are just as effective as conventional chemical cleaners. They kill bacteria and germs, cut through kitchen grease, remove soap scum, and leave every surface genuinely clean. The difference is what they don't do: no toxic residue, no chemical fumes, no environmental damage. Professional-grade eco-cleaning is not the same as DIY vinegar-and-baking-soda cleaning.",
  },
  {
    question: "How much does eco-friendly cleaning cost in Plainfield?",
    answer:
      "Eco-friendly cleaning is included in all our standard pricing — there is no premium for using non-toxic products in Plainfield. Standard cleaning starts at $160 for a 2-bed/1-bath home, deep cleaning starts at $315, and move-out cleaning starts at $480. Contact us for a free, no-obligation estimate for your Plainfield home.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Eco-Friendly House Cleaning",
  name: "Eco-Friendly House Cleaning in Plainfield, IL",
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
    "Eco-friendly house cleaning in Plainfield, IL. Non-toxic, biodegradable products safe for kids and pets. Serving 60544 and 60585. Free estimate.",
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
    { "@type": "ListItem", position: 2, name: "Eco-Friendly Cleaning", item: "https://www.dsmcleaningsolutions.com/eco-friendly-cleaning" },
    { "@type": "ListItem", position: 3, name: "Plainfield IL", item: "https://www.dsmcleaningsolutions.com/eco-friendly-cleaning-plainfield-il" },
  ],
};

const benefits = [
  { icon: "👶", title: "Safe for Children", desc: "No toxic residue on floors, counters, or toys — important for crawling infants and toddlers in Plainfield homes." },
  { icon: "🐾", title: "Safe for Pets", desc: "Dogs and cats can roam freely during and after cleaning. No need to crate or relocate your pets." },
  { icon: "🌍", title: "Environmentally Responsible", desc: "Biodegradable formulas don't pollute waterways or contribute to ecosystem damage after they go down the drain." },
  { icon: "💨", title: "No Harsh Fumes", desc: "No chemical smell lingering for hours. Plainfield homes smell fresh without headache-inducing synthetic fragrance." },
  { icon: "🤧", title: "Allergy & Asthma Friendly", desc: "Ideal for Plainfield families with respiratory sensitivities, hay fever, or chemical fragrance allergies." },
  { icon: "✅", title: "Equally Effective", desc: "Professional-grade eco products kill bacteria, cut grease, and remove grime just as effectively as conventional chemicals." },
];

const neighborhoods = [
  "Settlers Ridge", "Grande Park", "Brookside", "Whispering Creek",
  "Lake Renwick Estates", "Springbank", "Fairfield Lakes", "Carillon Lakes",
];

export default function EcoFriendlyCleaningPlainfield() {
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
              <Link href="/eco-friendly-cleaning" className="hover:text-white">Eco-Friendly Cleaning</Link>
              <span>/</span>
              <span className="text-white">Plainfield IL</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Eco-Friendly House Cleaning in Plainfield, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Non-toxic, biodegradable cleaning products that are safe for your kids, pets, and
              planet — at no extra cost. DSM Cleaning Solutions serves all of Plainfield, IL
              including zip codes 60544 and 60585. Fully insured and family-owned.
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
            {["🌿 100% Non-Toxic Products", "🐾 Safe for Kids & Pets", "♻️ Biodegradable", "🛡️ Fully Insured", "👨‍👩‍👧 Family Owned"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">What Eco-Friendly Cleaning Means for Plainfield Families</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Eco-friendly cleaning in Plainfield, IL means using professional-grade, non-toxic,
            biodegradable products that clean your home just as effectively as conventional
            chemicals — without the risks. Most standard cleaning products contain bleach,
            ammonia, synthetic fragrances, and other compounds that leave residue on the
            surfaces your family touches every day.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            At DSM Cleaning Solutions, eco-friendly cleaning is not an upgrade or an add-on
            — it&apos;s how we clean every Plainfield home, every time. Whether you live in
            Settlers Ridge in 60544 or Grande Park in 60585, you get the same non-toxic,
            residue-free clean at the same flat-rate price as everyone else.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Plainfield families with young children, pets, allergies, or asthma consistently
            tell us that switching to eco-friendly professional cleaning made a real difference
            in how their home feels — and how they feel inside it.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Health Benefits for Plainfield Families</h2>
            <p className="section-subheading mx-auto">
              Why more Plainfield homeowners are switching to green cleaning in 2026.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <span className="text-4xl block mb-3">{b.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS WE USE */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Products DSM Uses in Plainfield Homes</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We use professional-grade, non-toxic cleaning products that meet strict environmental
            and safety standards. Our products are free from chlorine bleach, ammonia,
            formaldehyde, synthetic fragrances, phosphates, and other compounds that can
            irritate skin, trigger allergies, or linger in your indoor air.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            These aren&apos;t the watered-down DIY alternatives you see on social media.
            Professional eco-friendly cleaning products are formulated to match the performance
            of commercial-grade conventional cleaners — they disinfect, degrease, and sanitize
            with the same effectiveness, just without the toxic trade-offs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Kitchen degreasers", desc: "Powerful enough for stovetop grease, safe enough to use near food surfaces." },
              { label: "Bathroom disinfectants", desc: "Kills bacteria and mold without harsh fumes or bleach residue." },
              { label: "Floor cleaners", desc: "Residue-free formulas safe for hardwood, tile, and any surface your pets and kids crawl on." },
              { label: "Glass & surface sprays", desc: "Streak-free and fragrance-free — no synthetic scent cover-ups." },
            ].map((p) => (
              <div key={p.label} className="bg-brand-green-50 border border-brand-green-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-1">✅ {p.label}</h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENVIRONMENTAL BENEFITS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Environmental Benefits of Green Cleaning in Plainfield</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Conventional cleaning products don&apos;t disappear when they go down your drain —
            they enter the waterways. Plainfield sits near the DuPage River, and biodegradable
            cleaning products mean less chemical runoff into local water systems. When every
            home in Plainfield chooses green cleaning, the cumulative environmental impact
            is meaningful.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our eco-friendly products also come in more sustainable packaging and are not
            tested on animals. Choosing green cleaning in Plainfield isn&apos;t just better
            for your family — it&apos;s better for the community around you.
          </p>
        </div>
      </section>

      {/* PLAINFIELD NEIGHBORHOODS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Plainfield Neighborhoods We Serve</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            DSM Cleaning Solutions provides eco-friendly cleaning throughout all of Plainfield,
            IL — zip codes 60544 and 60585. We serve every neighborhood across the township:
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {neighborhoods.map((n) => (
              <span key={n} className="bg-brand-green-50 border border-brand-green-100 text-brand-green font-medium text-sm px-4 py-2 rounded-full">
                {n}
              </span>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            Don&apos;t see your neighborhood? We likely serve it.{" "}
            <Link href="/contact" className="text-brand-green font-semibold hover:underline">Contact us to confirm →</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Eco-Friendly Cleaning Plainfield — FAQs</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Cleaning Services in Plainfield</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/eco-friendly-cleaning" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Eco-Friendly Cleaning — All Areas</h3>
              <p className="text-sm text-gray-600">Learn about our green cleaning across the southwest suburbs.</p>
            </Link>
            <Link href="/deep-cleaning-plainfield-il" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Plainfield</h3>
              <p className="text-sm text-gray-600">Eco-friendly top-to-bottom deep cleaning starting at $315.</p>
            </Link>
            <Link href="/plainfield-il" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">All Plainfield Cleaning Services</h3>
              <p className="text-sm text-gray-600">View every cleaning service DSM offers in Plainfield, IL.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Eco-Friendly Cleaning in Plainfield Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Safe for your family, tough on dirt. No extra charge for eco-friendly products.
                Serving all of Plainfield, IL — zip codes 60544 and 60585.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned · Non-toxic products · Fully insured · Satisfaction guaranteed</p>
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
