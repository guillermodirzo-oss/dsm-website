import type { Metadata } from "next";
import Link from "next/link";
import OfficeLeadForm from "@/components/OfficeLeadForm";

export const metadata: Metadata = {
  title: "Office Cleaning in Plainfield, IL",
  description:
    "Commercial office cleaning services in Plainfield, IL. Trusted by local businesses for spotless, reliable results. Free quote from DSM Cleaning Solutions.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/office-cleaning-plainfield" },
  openGraph: {
    title: "Office Cleaning in Plainfield, IL",
    description:
      "Commercial office cleaning services in Plainfield, IL. Trusted by local businesses for spotless, reliable results. Free quote from DSM Cleaning Solutions.",
    url: "https://www.dsmcleaningsolutions.com/office-cleaning-plainfield",
    siteName: "DSM Cleaning Solutions",
  },
  twitter: { card: "summary_large_image", images: ["/hero-image.png"] },
};

const jsonLd = {
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "DSM Cleaning Solutions",
    image: "https://www.dsmcleaningsolutions.com/hero-image.png",
    telephone: "+18152462113",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Romeoville",
      addressLocality: "Romeoville",
      addressRegion: "IL",
      postalCode: "60446",
      addressCountry: "US",
    },
    url: "https://www.dsmcleaningsolutions.com/office-cleaning-plainfield",
    areaServed: "Plainfield",
    priceRange: "$$",
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
      { "@type": "ListItem", position: 2, name: "Office Cleaning", item: "https://www.dsmcleaningsolutions.com/office-cleaning" },
      { "@type": "ListItem", position: 3, name: "Plainfield", item: "https://www.dsmcleaningsolutions.com/office-cleaning-plainfield" },
    ],
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you offer office cleaning in Plainfield, IL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — DSM Cleaning Solutions serves businesses throughout Plainfield, IL including offices near Route 59, 127th Street, and the Plainfield business districts. We're conveniently located nearby in Romeoville.",
        },
      },
      {
        "@type": "Question",
        name: "How often can you clean our Plainfield office?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer weekly, bi-weekly, monthly, and one-time commercial cleaning for Plainfield businesses. We'll work with you to build a schedule that fits your office's traffic and budget.",
        },
      },
      {
        "@type": "Question",
        name: "Do you clean medical offices in Plainfield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we provide medical and professional office cleaning in Plainfield with appropriate sanitization protocols for waiting rooms, exam areas, and administrative spaces.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get a free office cleaning quote in Plainfield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fill out the form on this page or call (815) 246-2113. We'll be in touch within 24 hours to schedule a free walkthrough of your Plainfield office.",
        },
      },
    ],
  },
};

const included = [
  "Full floor care — vacuuming and mopping",
  "Desk and surface dusting",
  "High-touch sanitization (handles, switches, phones)",
  "Restroom deep cleaning and restocking",
  "Break room and kitchen cleaning",
  "Trash removal throughout the office",
  "Glass and entryway cleaning",
  "Lobby and conference room maintenance",
];

export default function OfficeCleaningPlainfieldPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.faq) }} />

      {/* HERO + FORM */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Plainfield, IL</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Office Cleaning Services in Plainfield, IL
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Plainfield businesses trust DSM Cleaning Solutions for professional, reliable office cleaning. From small professional suites near Route 59 to larger commercial facilities, our team delivers consistent results with flexible scheduling that works around your business hours.
              </p>
              <a
                href="tel:+18152462113"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-6 py-3.5 rounded-full hover:bg-orange-50 transition-colors mb-8"
              >
                📞 (815) 246-2113
              </a>
              <div className="grid grid-cols-2 gap-3">
                {["✓ Serving Plainfield", "✓ Fully Insured", "✓ After-Hours Available", "✓ Free Quote"].map((b) => (
                  <div key={b} className="bg-white/10 rounded-xl px-4 py-2 text-sm text-white font-medium">{b}</div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Free Plainfield Office Cleaning Quote</h2>
              <p className="text-gray-500 text-sm mb-5">We&apos;ll contact you within 24 hours to schedule a free walkthrough.</p>
              <OfficeLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">What&apos;s Included</h2>
            <p className="text-gray-500 text-center mb-10">Everything covered in our Plainfield office cleaning visits:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY DSM */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Plainfield Businesses Choose DSM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Nearby & Dependable", desc: "Based in neighboring Romeoville, we're always close by for fast service and quick response to Plainfield clients." },
              { title: "Vetted, Trusted Team", desc: "Every cleaner is background-checked, insured, and bonded. Your Plainfield office is in safe, professional hands." },
              { title: "Custom Cleaning Plans", desc: "We scope every job to your specific office layout — no cookie-cutter checklists, just what your space actually needs." },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">FAQs — Plainfield Office Cleaning</h2>
          <div className="space-y-4">
            {jsonLd.faq.mainEntity.map((q) => (
              <div key={q.name} className="border border-gray-100 rounded-2xl p-5 bg-gray-50">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{q.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-5">More Office Cleaning Locations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "Office Cleaning Romeoville", href: "/office-cleaning-romeoville" },
              { label: "Office Cleaning Naperville", href: "/office-cleaning-naperville" },
              { label: "Office Cleaning Bolingbrook", href: "/office-cleaning-bolingbrook" },
              { label: "All Office Cleaning Services", href: "/office-cleaning" },
              { label: "Commercial Cleaning", href: "/commercial-cleaning" },
              { label: "House Cleaning Plainfield", href: "/plainfield-il" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all text-sm font-medium text-gray-700">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
