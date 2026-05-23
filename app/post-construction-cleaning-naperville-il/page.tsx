import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Post Construction Cleaning Naperville IL",
  description:
    "Post construction cleaning in Naperville IL by DSM Cleaning Solutions. New builds and remodels. Call (815) 246-2113.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/post-construction-cleaning-naperville-il" },
  openGraph: {
    title: "Post Construction Cleaning Naperville IL | DSM Cleaning Solutions",
    description:
      "Post construction cleaning in Naperville IL by DSM Cleaning Solutions. New builds and remodels. Call (815) 246-2113.",
    url: "https://www.dsmcleaningsolutions.com/post-construction-cleaning-naperville-il",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "Post Construction Cleaning Naperville IL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "Do you offer post-construction cleaning in Naperville, IL?",
    answer:
      "Yes — DSM Cleaning Solutions provides professional post-construction and post-renovation cleaning throughout Naperville, IL across all four zip codes: 60540, 60563, 60564, and 60565. We serve new builds, full remodels, kitchen and bathroom renovations, and addition projects of all sizes.",
  },
  {
    question: "How much does post-construction cleaning cost in Naperville, IL?",
    answer:
      "Post-construction cleaning in Naperville starts around $200–$350 for a smaller renovation or bathroom remodel and scales to $400–$800+ for full home new builds depending on square footage, number of rooms, and the amount of construction dust and debris. We always provide a free, no-obligation estimate before the job.",
  },
  {
    question: "How long does post-construction cleaning take in Naperville?",
    answer:
      "Most post-construction cleans in Naperville take 4–8 hours for a single-room remodel to a full day or more for a new home build. Larger homes in Naperville — particularly in neighborhoods like White Eagle, Tall Grass, or Knoch Knolls — with 3,000+ square feet may require multiple visits to complete properly.",
  },
  {
    question: "What is included in post-construction cleaning in Naperville?",
    answer:
      "Our post-construction cleaning covers: removal of all construction debris and dust from every surface including ceilings, walls, and vents; cleaning inside and outside all cabinets; scrubbing all bathroom fixtures and tile; cleaning all interior windows, sills, and tracks; deep cleaning all floors (vacuum, scrub, and mop); polishing all fixtures and hardware; and a final room-by-room inspection to ensure the property is move-in ready.",
  },
  {
    question: "Do I need post-construction cleaning after a remodel in Naperville?",
    answer:
      "Yes — even a single-room remodel produces fine construction dust that settles on every surface in your home, including inside HVAC vents, on cabinet interiors, and in carpet fibers. Standard cleaning products and regular vacuums are not sufficient to remove this dust. A professional post-construction clean is essential to protect your air quality and get your Naperville home truly move-in ready.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Post-Construction Cleaning",
  name: "Post-Construction Cleaning in Naperville, IL",
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
    name: "Naperville",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description:
    "Professional post-construction cleaning in Naperville, IL. New builds, full remodels, kitchen and bathroom renovations. DSM Cleaning Solutions — fully insured, free estimate, (815) 246-2113.",
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

const checklist = [
  {
    room: "Dust & Debris Removal",
    items: [
      "Remove all construction debris",
      "Dust ceilings and ceiling fixtures",
      "Wipe all walls and door frames",
      "Clean all vents and air registers",
      "Dust all baseboards and molding",
      "Wipe all light switches and outlets",
    ],
  },
  {
    room: "Windows & Glass",
    items: [
      "Clean all interior window glass",
      "Wipe all window sills and frames",
      "Clean window tracks inside and out",
      "Remove paint splatter from glass",
      "Clean sliding door tracks",
      "Polish all mirrors",
    ],
  },
  {
    room: "Kitchen & Bathrooms",
    items: [
      "Clean inside and outside all cabinets",
      "Scrub countertops and backsplash",
      "Clean all new fixtures and hardware",
      "Scrub toilets, showers, and tubs",
      "Remove grout haze from tile",
      "Clean and polish new appliances",
    ],
  },
  {
    room: "Floors & Final",
    items: [
      "Vacuum all carpets thoroughly",
      "Sweep and scrub all hard floors",
      "Remove paint, adhesive, or grout residue",
      "Mop all hard surfaces",
      "Final room-by-room inspection",
      "Move-in ready walkthrough",
    ],
  },
];

const trustCards = [
  { icon: "🏗️", title: "Post-Construction Specialists", desc: "Experienced with new builds, full remodels, and single-room renovations throughout Naperville." },
  { icon: "💨", title: "Heavy Dust Removal", desc: "We eliminate the fine construction dust that regular cleaning misses — from vents to cabinet interiors." },
  { icon: "🛡️", title: "Fully Insured & Bonded", desc: "Background-checked team. Every post-construction job in Naperville fully covered." },
  { icon: "👨‍👩‍👧", title: "Family Owned", desc: "Local southwest suburbs business — not a national chain." },
  { icon: "📅", title: "Flexible Scheduling", desc: "We coordinate around your contractor timeline and move-in date." },
  { icon: "✅", title: "Move-In Ready Guarantee", desc: "We don&apos;t leave until your Naperville home is truly ready for occupancy." },
];

export default function PostConstructionCleaningNapervillePage() {
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

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/post-construction-cleaning" className="hover:text-white">Post-Construction Cleaning</Link>
              <span>/</span>
              <span className="text-white">Naperville</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Post-Construction Cleaning in Naperville, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions provides professional post-construction cleaning for Naperville
              homeowners — from new builds in Knoch Knolls and Tall Grass to kitchen remodels near
              Downtown Naperville. We remove dust, debris, and construction residue and leave your
              home truly move-in ready.
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
            {["✅ Fully Insured & Bonded", "🌿 Eco-Friendly Products", "👨‍👩‍👧 Family Owned", "⭐ 5-Star Rated", "🏗️ Construction Clean Specialists"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Professional Post-Construction Cleaning in Naperville, IL</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Post-construction cleaning in Naperville, IL requires a specialized approach that goes
            far beyond a standard house clean — and DSM Cleaning Solutions is built for exactly this.
            We serve Naperville homeowners, builders, and contractors across all four zip codes
            (60540, 60563, 60564, and 60565) following new home builds, full renovations, kitchen
            and bathroom remodels, and addition projects. Whether your new home is in Knoch Knolls,
            Tall Grass, or Cress Creek, we arrive fully equipped to handle the unique challenges
            of post-construction dust, debris, and residue.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Naperville has seen continued residential development and renovation activity throughout
            its established and newer neighborhoods. Homeowners investing in their properties deserve
            a cleaning team that understands construction aftermath — including the fine silica dust
            that settles into HVAC vents, cabinet interiors, and wall cavities, the grout haze on
            new tile, paint spatters on windows and fixtures, and adhesive residue on floors. Our
            team knows how to remove all of it safely and thoroughly, using professional-grade
            equipment and eco-friendly products.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Based in neighboring Romeoville, DSM is minutes from Naperville and can coordinate
            directly with your contractor or builder to schedule the post-construction clean at
            the right moment in your project timeline. We don&apos;t leave until your home passes
            a room-by-room final inspection and is genuinely move-in ready.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&apos;s Included in Post-Construction Cleaning in Naperville</h2>
            <p className="section-subheading mx-auto">
              A complete scope of work — from heavy dust removal to move-in ready final inspection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {checklist.map((section) => (
              <div key={section.room} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-brand-green mb-4 border-b border-brand-green-100 pb-2">
                  {section.room}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE DSM */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Naperville Homeowners Choose DSM for Post-Construction Cleaning</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustCards.map((card) => (
              <div key={card.title} className="text-center p-6 rounded-xl bg-brand-green-50 border border-brand-green-100">
                <span className="text-4xl block mb-3">{card.icon}</span>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">How Much Does Post-Construction Cleaning Cost in Naperville, IL?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Post-construction cleaning in Naperville is priced based on the scope of work, square
            footage, and the type of project completed. Single-room remodels (kitchen or bathroom)
            typically start around $200–$350. Full home renovation cleaning for a 2,000–3,000 sq ft
            Naperville home generally ranges from $400–$650. New construction cleans for larger
            homes — particularly in neighborhoods like White Eagle, Knoch Knolls, or Tall Grass
            with 3,500+ square feet — are quoted individually based on project details.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Every post-construction cleaning estimate is free and no-obligation. We assess the
            scope of your project before providing a quote so you know exactly what to expect.
            No hidden fees, no surprises. Contact us or call (815) 246-2113 to get your
            Naperville post-construction cleaning estimate.
          </p>
          <Link href="/contact" className="btn-primary">Get My Free Naperville Quote</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Frequently Asked Questions</h2>
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

      {/* NEARBY SERVICES */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Cleaning Services in Naperville</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/post-construction-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Post-Construction Cleaning — Full Service</h3>
              <p className="text-sm text-gray-600">Learn everything included in our post-construction cleaning service.</p>
            </Link>
            <Link href="/deep-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Naperville</h3>
              <p className="text-sm text-gray-600">Thorough top-to-bottom cleaning across all four Naperville zip codes.</p>
            </Link>
            <Link href="/naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">All Naperville Cleaning Services</h3>
              <p className="text-sm text-gray-600">View every cleaning service DSM offers throughout Naperville, IL.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Your Naperville Post-Construction Clean Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Just finished a build or renovation in Naperville? Get your free post-construction
                cleaning estimate today. We serve all four Naperville zip codes and leave your
                property truly move-in ready.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned · Eco-friendly · Fully insured · Move-in ready guarantee</p>
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
