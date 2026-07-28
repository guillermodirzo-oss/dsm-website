import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Move-Out Cleaning Naperville IL",
  description:
    "Move-out cleaning in Naperville, IL. DSM Cleaning Solutions helps renters recover deposits and sellers pass walkthroughs. Fully insured. 42 Google reviews. Free estimate.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/move-out-cleaning-naperville-il" },
  openGraph: {
    title: "Move-Out Cleaning Naperville IL | DSM Cleaning Solutions",
    description:
      "Move-out cleaning in Naperville, IL. Renters and home sellers trust DSM. Fully insured, 48-hr guarantee, 42 Google reviews.",
    url: "https://www.dsmcleaningsolutions.com/move-out-cleaning-naperville-il",
  },
  twitter: { card: "summary_large_image", images: ["/hero-image.png"] },
};

const faqs = [
  {
    question: "How long does move-out cleaning take in Naperville, IL?",
    answer:
      "Move-out cleaning in Naperville typically takes 4-8 hours depending on the size of your home. A 2-bedroom apartment usually takes 4-5 hours; a larger home in Ashbury or White Eagle may take 6-8 hours. We work as a team so you're not waiting all day.",
  },
  {
    question: "Do you serve all Naperville neighborhoods and zip codes?",
    answer:
      "Yes, we serve all of Naperville including zip codes 60540, 60563, 60564, and 60565. We clean in Cress Creek, Hobson West, Ashbury, White Eagle, and all surrounding neighborhoods. Just let us know your address when you request a quote.",
  },
  {
    question: "What does move-out cleaning cost in Naperville?",
    answer:
      "Move-out cleaning in Naperville is priced based on the size of your home and its current condition. We provide free estimates. Just fill out our quote form or call (815) 246-2113 and we'll give you an accurate number without any surprises.",
  },
  {
    question: "Will your clean help me get my security deposit back?",
    answer:
      "Yes, that's exactly what our move-out clean is designed for. We follow a landlord-focused checklist that covers every area property managers inspect: oven interior, refrigerator, cabinet interiors, baseboards, bathroom grout, and more. We back every job with a 48-hour satisfaction guarantee. If your landlord finds anything, we come back and fix it free.",
  },
  {
    question: "Are you insured and bonded for cleaning in Naperville, IL?",
    answer:
      "Yes, DSM Cleaning Solutions is fully licensed, insured, and bonded. All of our cleaners pass background checks before entering any home. You can book with total confidence whether you're a renter, landlord, or home seller.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Move Out Cleaning",
  name: "Move-Out Cleaning in Naperville, IL",
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
    "Move-out cleaning in Naperville, IL. DSM Cleaning Solutions helps renters recover deposits and home sellers prepare for buyer walkthroughs. Fully insured.",
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
    room: "Kitchen",
    items: [
      "Clean inside/outside oven",
      "Wipe stovetop and drip pans",
      "Clean inside/outside refrigerator",
      "Clean inside microwave",
      "Scrub sink",
      "Wipe all cabinet fronts and clean inside",
      "Clean countertops and backsplash",
      "Clean dishwasher interior",
      "Mop and scrub floors",
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Scrub/disinfect toilet",
      "Deep scrub shower and tub including grout",
      "Clean/polish all faucets",
      "Scrub and disinfect sink",
      "Clean mirrors and glass",
      "Wipe inside all cabinets",
      "Mop floor and clean grout lines",
    ],
  },
  {
    room: "Bedrooms & Living Areas",
    items: [
      "Clean inside all closets",
      "Wipe all baseboards and door frames",
      "Clean window sills and inside glass",
      "Wipe all light switches and outlet covers",
      "Clean ceiling fans",
      "Vacuum all carpets",
      "Sweep and mop hard floors",
    ],
  },
  {
    room: "Whole Home",
    items: [
      "Clean all doors and door knobs",
      "Wipe all windowsills",
      "Dust and wipe all light fixtures",
      "Clean vents and registers",
      "Remove all trash and debris",
      "Final walkthrough inspection",
    ],
  },
];

const trustBadges = [
  {
    title: "Fully Insured & Bonded",
    desc: "Licensed and liability-insured on every job.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Background-Checked Team",
    desc: "Every cleaner verified before entering your home.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "48-Hr Satisfaction Guarantee",
    desc: "Not happy? We come back and fix it free.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Family-Owned & Local",
    desc: "Memo answers his own phone. We live here too.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const reviews3 = [
  { name: "Pati Mangano", text: "As always everything was great." },
  { name: "Julie G.", text: "This service is consistently perfect! I love the website interface. It makes everything easy and customizable." },
  { name: "Jae Mac", text: "I highly recommend, customer since 2024 🍊🍊🍊" },
];

export default function MoveOutCleaningNapervillePage() {
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
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white pt-12 pb-10 md:pt-16 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <Link href="/move-out-cleaning" className="hover:text-white">Move-Out Cleaning</Link>
                <span>/</span>
                <span className="text-white">Naperville</span>
              </div>
              <p className="text-sm font-semibold mb-4" style={{ color: "#FFA869" }}>★★★★★ 5.0 · 42 Google Reviews</p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
                Move-Out Cleaning in Naperville, IL
              </h1>
              <p className="text-xl font-semibold text-white/95 mb-4">
                For Renters Recovering Deposits. For Sellers Passing Walkthroughs.
              </p>
              <p className="text-lg text-white/85 mb-8 leading-relaxed">
                Whether you&rsquo;re a renter who wants every dollar of your deposit back, a landlord
                preparing a unit for the next tenant, or a home seller in Cress Creek or Ashbury
                who needs a spotless property before the final walkthrough. DSM Cleaning Solutions
                delivers a thorough, professional move-out clean across all of Naperville
                (zip codes 60540, 60563, 60564, 60565).
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#quote-form" className="btn-white btn-lg">Get a Free Quote</a>
                <a href="tel:+18152462113" className="btn-outline-white btn-lg">(815) 246-2113</a>
              </div>
            </div>
            <div className="hidden lg:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Work%20Pictures/apartment-bathroom-cleaning-naperville-il.jpg"
                alt="Move-out cleaning in Naperville IL — DSM Cleaning Solutions"
                className="rounded-2xl shadow-2xl w-full object-cover max-h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div key={badge.title} className="flex flex-col items-center text-center gap-3 p-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#E8622A" }}>
                  {badge.icon}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{badge.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANCHOR REVIEW */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 md:p-10 relative" style={{ backgroundColor: "#FFF4EE" }}>
            <span className="absolute top-6 left-8 text-6xl font-serif leading-none select-none" style={{ color: "#E8622A" }}>&ldquo;</span>
            <div className="pt-8">
              <p className="text-gray-800 text-lg leading-relaxed font-medium">
                We are very happy with DSM Cleaning Solutions. They do an excellent job and would hire them again.
              </p>
              <div className="mt-4">
                <p className="font-bold text-gray-900">Bill Aros</p>
                <p className="text-sm font-semibold" style={{ color: "#FFA869" }}>★★★★★ Google Review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Professional Move-Out Cleaning in Naperville, IL</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Naperville is one of the most competitive real estate markets in the Chicago suburbs,
            and move-out cleaning here means higher stakes than in most markets. Renters throughout
            Naperville face thorough property management inspections, and home sellers in White Eagle,
            Hobson West, and Cress Creek know that buyers notice every missed detail during the
            final walkthrough.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            DSM Cleaning Solutions serves all of Naperville (zip codes 60540, 60563, 60564, and 60565)
            with a comprehensive move-out cleaning checklist built for exactly these situations.
            We cover every surface, every appliance inside and out, every cabinet, and every bathroom,
            the areas that always come up in both landlord disputes and buyer walkthroughs.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We&rsquo;re a family-owned team based in nearby Romeoville. We work throughout the southwest
            suburbs and bring the same careful attention to every Naperville home regardless of size.
            Every job is backed by our 48-hour satisfaction guarantee. If anything gets flagged
            within 48 hours of our visit, we come back and re-clean at no charge.
          </p>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What&rsquo;s Included in Our Move-Out Cleaning in Naperville, IL</h2>
            <p className="section-subheading mx-auto">
              A complete, landlord-ready and walkthrough-ready clean for your Naperville property.
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

          <div className="text-center mt-12">
            <a
              href="#quote-form"
              className="inline-flex items-center gap-2 font-bold text-white text-lg px-8 py-4 rounded-full transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#E8622A", boxShadow: "0 4px 20px rgba(232,114,28,0.35)" }}
            >
              Book My Move-Out Clean
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE DSM */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Naperville Residents Choose DSM Cleaning Solutions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Deposit-Back Focused", desc: "Our checklist covers every area Naperville landlords inspect: ovens, fridges, grout, cabinet interiors, baseboards.", icon: "💵" },
              { title: "48-Hour Re-Clean Promise", desc: "If your landlord or buyer agent finds anything after we leave, we come back and fix it free within 48 hours.", icon: "🔄" },
              { title: "Fully Insured & Bonded", desc: "Licensed and liability-insured on every job in Naperville. You and your landlord can book with total confidence.", icon: "🛡️" },
              { title: "Family-Owned & Local", desc: "Based in nearby Romeoville, serving Naperville and the southwest suburbs every week. Memo answers his own phone.", icon: "🏠" },
            ].map((card) => (
              <div key={card.title} className="text-center p-6 rounded-xl border border-gray-100 shadow-sm">
                <span className="text-4xl block mb-3">{card.icon}</span>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-REVIEW BLOCK */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {reviews3.map((r) => (
              <div key={r.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative">
                <p className="text-sm font-semibold" style={{ color: "#FFA869" }}>★★★★★</p>
                <p className="text-gray-700 text-sm leading-relaxed mt-3">{r.text}</p>
                <p className="mt-4 font-semibold text-gray-900 text-sm">{r.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://www.google.com/search?q=DSM+Cleaning+Solutions+Romeoville+IL+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline"
              style={{ color: "#E8622A" }}
            >
              Read all 42 reviews on Google
            </a>
          </div>
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

      {/* NEARBY CITIES */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">We Also Offer Move-Out Cleaning in Nearby Cities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/move-out-cleaning-plainfield-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Plainfield</h3>
              <p className="text-sm text-gray-600">Serving zip codes 60544 & 60585.</p>
            </Link>
            <Link href="/move-out-cleaning-romeoville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Romeoville</h3>
              <p className="text-sm text-gray-600">Serving zip code 60446.</p>
            </Link>
            <Link href="/move-out-cleaning-oak-brook-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Oak Brook</h3>
              <p className="text-sm text-gray-600">Serving zip code 60523.</p>
            </Link>
            <Link href="/move-out-cleaning-downers-grove-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Downers Grove</h3>
              <p className="text-sm text-gray-600">Serving zip codes 60515 & 60516.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTE FORM CTA */}
      <section id="quote-form" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Get Your Free Naperville Move-Out Quote</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Renter or seller, DSM has you covered. Get a free move-out cleaning quote for
                your Naperville home today. We respond within 1 business day and back every
                job with our 48-hour satisfaction guarantee.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned · Eco-friendly · Fully insured · Satisfaction guaranteed</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <LeadForm defaultService="Move-In / Move-Out Cleaning" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
