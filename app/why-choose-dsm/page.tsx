import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Why Choose DSM Cleaning Solutions Romeoville IL",
  description:
    "Family owned, fully insured, background-checked cleaners in Romeoville IL. 5-star rated with a 48-hr satisfaction guarantee. DSM Cleaning Solutions.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/why-choose-dsm" },
  openGraph: {
    title: "Why Choose DSM Cleaning Solutions Romeoville IL | DSM Cleaning Solutions",
    description:
      "Family owned, fully insured, background-checked cleaners in Romeoville IL. 5-star rated with a 48-hr satisfaction guarantee. DSM Cleaning Solutions.",
    url: "https://www.dsmcleaningsolutions.com/why-choose-dsm",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "Why Choose DSM Cleaning Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "Is DSM Cleaning Solutions insured?",
    answer:
      "Yes — DSM Cleaning Solutions is fully insured and bonded. Every cleaning visit is covered by general liability insurance, protecting your home and property in the unlikely event of an accident or damage. You can book with confidence knowing you&apos;re working with a fully covered professional cleaning company, not an individual with no protection.",
  },
  {
    question: "Do you do background checks on cleaners?",
    answer:
      "Yes — every member of the DSM Cleaning Solutions team undergoes a thorough background check before their first assignment. We understand that inviting someone into your home requires a significant level of trust, and we take that responsibility seriously. Our hiring process is designed to bring only professional, trustworthy individuals into your home.",
  },
  {
    question: "What is your satisfaction guarantee?",
    answer:
      "DSM Cleaning Solutions offers a 48-hour satisfaction guarantee on every clean. If you&apos;re not completely satisfied with any part of your cleaning, contact us within 48 hours and we will return to re-clean the area at no additional charge. No arguments, no runarounds — we make it right, period.",
  },
  {
    question: "Are you a franchise or locally owned?",
    answer:
      "DSM Cleaning Solutions is 100% locally owned and operated — not a franchise. We are a family-owned business based in Romeoville, IL, serving the southwest Chicago suburbs. Every decision about how we operate, what products we use, and how we treat our customers is made by us — not by a corporate office somewhere else. When you call us, you&apos;re talking to the owners.",
  },
  {
    question: "How long have you been serving the Romeoville area?",
    answer:
      "DSM Cleaning Solutions has been serving Romeoville and the surrounding southwest Chicago suburbs since our founding. We&apos;ve built our reputation one home at a time — earning 5-star reviews from families in Romeoville, Plainfield, Naperville, Bolingbrook, Joliet, and throughout our service area. Our continued growth comes entirely from word-of-mouth referrals and repeat customers, which we consider the highest compliment.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "House Cleaning",
  name: "DSM Cleaning Solutions — Romeoville & Southwest Suburbs",
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
    "Family-owned, fully insured, background-checked house cleaning service in Romeoville, IL. 5-star rated with a 48-hour satisfaction guarantee. Serving the southwest Chicago suburbs.",
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
    { "@type": "ListItem", position: 2, name: "Why Choose DSM", item: "https://www.dsmcleaningsolutions.com/why-choose-dsm" },
  ],
};

const differentiators = [
  {
    icon: "👨‍👩‍👧",
    title: "Family Owned & Operated",
    desc: "Not a franchise. Not a corporate chain. DSM is a family-owned business based in Romeoville — we live and work in the same communities we clean.",
  },
  {
    icon: "🛡️",
    title: "Fully Insured & Bonded",
    desc: "Every cleaning is covered by full general liability insurance. Your home and belongings are protected on every single visit.",
  },
  {
    icon: "🔍",
    title: "Background-Checked Team",
    desc: "Every cleaner on our team passes a thorough background check before setting foot in a client&apos;s home. Your safety is non-negotiable.",
  },
  {
    icon: "🌿",
    title: "Eco-Friendly Products",
    desc: "We use professional-grade, non-toxic, biodegradable products on every job — safe for your children, pets, and the environment at no extra cost.",
  },
  {
    icon: "✅",
    title: "48-Hour Guarantee",
    desc: "Not satisfied? We return within 48 hours and re-clean for free — no questions, no runaround. That&apos;s our commitment to every Romeoville customer.",
  },
  {
    icon: "👤",
    title: "Consistent Team",
    desc: "We aim to send the same cleaners to your home each visit so they learn your preferences and your home&apos;s details — no strangers at your door every time.",
  },
];

const trustItems = [
  { label: "Fully Insured & Bonded", icon: "🛡️" },
  { label: "Background-Checked Team", icon: "✔️" },
  { label: "Licensed Professional Service", icon: "📋" },
  { label: "5-Star Google Rating", icon: "⭐" },
  { label: "47+ Verified Reviews", icon: "💬" },
  { label: "Serving Southwest Suburbs Since Founding", icon: "📍" },
];

const serviceAreas = [
  "Romeoville", "Plainfield", "Naperville", "Bolingbrook",
  "Joliet", "Lockport", "Homer Glen", "Lemont",
  "New Lenox", "Shorewood", "Minooka", "Westmont",
];

export default function WhyChooseDSMPage() {
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
              <span className="text-white">Why Choose DSM</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Why Romeoville Families Choose DSM Cleaning Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Family-owned. Fully insured. Background-checked team. Eco-friendly products.
              48-hour satisfaction guarantee. 5-star rated by 47+ families across Romeoville,
              Plainfield, Naperville, and the southwest Chicago suburbs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-white btn-lg">Get a Free Estimate</Link>
              <a href="tel:+18152462113" className="btn-outline-white btn-lg">📞 (815) 246-2113</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600">
            {["⭐ 5-Star Google Rating", "🛡️ Fully Insured & Bonded", "✔️ Background-Checked", "🌿 Eco-Friendly", "👨‍👩‍👧 Family Owned"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Our Story — A Family Business Built on Trust</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            DSM Cleaning Solutions was founded in Romeoville, IL with one simple belief: every
            family deserves a genuinely clean home, and they deserve to get it from a company
            they can actually trust. We started as a small local operation and grew — not through
            advertising or corporate expansion — but through the recommendations of families
            who were happy enough to tell their neighbors about us.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We are not a franchise. We don&apos;t answer to a corporate office. Every decision
            about how we hire, what products we use, how we train our team, and how we handle
            a customer concern is made by the people who own and run this business — people
            who live right here in the southwest suburbs, just like you.
          </p>
          <p className="text-gray-600 leading-relaxed">
            That accountability is something a national chain can never offer. When you call DSM,
            you&apos;re talking to us — and our reputation in this community matters more to us
            than any individual booking.
          </p>
        </div>
      </section>

      {/* WHAT MAKES DSM DIFFERENT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What Makes DSM Different From Corporate Cleaning Companies</h2>
            <p className="section-subheading mx-auto">
              Six reasons Romeoville and Plainfield families choose a local family business over national chains.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <span className="text-4xl block mb-3">{d.icon}</span>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{d.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST & SAFETY */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Trust &amp; Safety — Our Commitment to Every Home</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-brand-green-50 border border-brand-green-100 rounded-xl px-5 py-4">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-semibold text-gray-900 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gray-900 text-white rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-brand-green mb-1">48hr</div>
                <div className="text-white/80 text-sm">Satisfaction Guarantee — we re-clean for free if anything isn&apos;t right</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-green mb-1">5★</div>
                <div className="text-white/80 text-sm">Google rating from 47+ verified reviews across our service area</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-green mb-1">100%</div>
                <div className="text-white/80 text-sm">Non-toxic, eco-friendly products on every single job — no exceptions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What Families Are Saying About DSM</h2>
            <p className="section-subheading mx-auto">
              Real reviews from real customers across Romeoville, Plainfield, Naperville, and Bolingbrook.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ReviewCard
              name="Maria G."
              location="Romeoville, IL"
              text="DSM has been cleaning our home for over a year and I couldn&apos;t be happier. The same team comes every time, they know exactly how we like things, and the house always looks incredible when they leave."
              date="March 2025"
            />
            <ReviewCard
              name="Derek T."
              location="Plainfield, IL"
              text="I was nervous about letting a cleaning company into my home but DSM made the whole process easy. Background-checked team, fully insured, and they actually showed up on time. Five stars without hesitation."
              date="January 2025"
            />
            <ReviewCard
              name="Ashley M."
              location="Naperville, IL"
              text="We switched from a national chain to DSM and the difference is night and day. More thorough, better products, and I can actually talk to a real person when I have a question. Local businesses for the win."
              date="February 2025"
            />
            <ReviewCard
              name="James R."
              location="Bolingbrook, IL"
              text="Used DSM for a move-out clean and they went above and beyond. Got my full deposit back, which never happens. They were professional, fast, and the price matched the quote exactly. Highly recommend."
              date="April 2025"
            />
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews" className="btn-primary">Read All Reviews</Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Proudly Serving the Southwest Chicago Suburbs</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            DSM Cleaning Solutions serves families throughout the southwest Chicago suburbs.
            We&apos;re based in Romeoville and serve these communities as neighbors, not just customers:
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {serviceAreas.map((city) => (
              <span key={city} className="bg-brand-green-50 border border-brand-green-100 text-brand-green font-medium text-sm px-4 py-2 rounded-full">
                {city}
              </span>
            ))}
          </div>
          <Link href="/service-areas" className="text-brand-green font-semibold text-sm hover:underline">
            View all service areas →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Questions About DSM Cleaning Solutions</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn More About DSM</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/reviews" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">All Reviews</h3>
              <p className="text-sm text-gray-600">Read every 5-star review from our southwest suburb customers.</p>
            </Link>
            <Link href="/eco-friendly-cleaning" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Eco-Friendly Cleaning</h3>
              <p className="text-sm text-gray-600">Learn about the non-toxic products we use in every home.</p>
            </Link>
            <Link href="/pricing" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Pricing</h3>
              <p className="text-sm text-gray-600">Transparent flat-rate pricing for all service types.</p>
            </Link>
            <Link href="/contact" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Get a Free Quote</h3>
              <p className="text-sm text-gray-600">No obligation — just an honest price from a local family business.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Ready to Experience the DSM Difference?</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Join hundreds of families in Romeoville, Plainfield, Naperville, and Bolingbrook
                who trust DSM Cleaning Solutions with their homes. Free estimate, no obligation,
                48-hour guarantee.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">👨‍👩‍👧 Family owned · 🛡️ Fully insured · 🌿 Eco-friendly · ✅ 48-hr guarantee</p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
