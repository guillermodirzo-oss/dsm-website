import type { Metadata } from "next";
import Link from "next/link";
import OfficeLeadForm from "@/components/OfficeLeadForm";

export const metadata: Metadata = {
  title: "Office Cleaning in Naperville, IL",
  description:
    "Premium office cleaning services in Naperville, IL. DSM Cleaning Solutions serves Naperville businesses with professional, thorough commercial cleaning.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/office-cleaning-naperville" },
  openGraph: {
    title: "Office Cleaning in Naperville, IL",
    description:
      "Premium office cleaning services in Naperville, IL. DSM Cleaning Solutions serves Naperville businesses with professional, thorough commercial cleaning.",
    url: "https://www.dsmcleaningsolutions.com/office-cleaning-naperville",
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
    url: "https://www.dsmcleaningsolutions.com/office-cleaning-naperville",
    areaServed: "Naperville",
    priceRange: "$$",
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
      { "@type": "ListItem", position: 2, name: "Office Cleaning", item: "https://www.dsmcleaningsolutions.com/office-cleaning" },
      { "@type": "ListItem", position: 3, name: "Naperville", item: "https://www.dsmcleaningsolutions.com/office-cleaning-naperville" },
    ],
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you offer commercial office cleaning in Naperville, IL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — DSM Cleaning Solutions provides professional office and commercial cleaning services throughout Naperville, IL (60540, 60563, 60564, 60565). We serve offices near Downtown Naperville, Route 59, and all major business corridors.",
        },
      },
      {
        "@type": "Question",
        name: "What types of Naperville offices do you clean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We clean professional offices, medical and dental practices, law firms, real estate offices, financial services, and corporate suites across Naperville. We customize our approach for each type of business.",
        },
      },
      {
        "@type": "Question",
        name: "Can you clean our Naperville office before 8am?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we offer before-hours cleaning (before 8am), after-hours cleaning (after 6pm), and weekend-only slots for Naperville businesses. Your operations will never be disrupted.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get an office cleaning quote for my Naperville business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fill out the form on this page or call (815) 246-2113. We'll contact you within 24 hours to schedule a free walkthrough of your Naperville office space and provide a written quote.",
        },
      },
    ],
  },
};

const included = [
  "Vacuuming carpet and mopping hard floors",
  "Dusting all surfaces, shelves, and equipment",
  "Sanitizing high-touch areas throughout",
  "Full restroom cleaning and restocking",
  "Kitchen and break room sanitation",
  "Trash and recycling removal",
  "Glass, window, and entryway cleaning",
  "Reception, lobby, and conference room care",
];

export default function OfficeCleaningNapervillePage() {
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
              <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Naperville, IL — 60540 · 60563 · 60564 · 60565</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Office Cleaning Services in Naperville, IL
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Naperville is one of the fastest-growing business communities in the Chicago suburbs, and DSM Cleaning Solutions is here to keep it spotless. We provide premium commercial office cleaning for businesses across all four Naperville zip codes — with flexible scheduling and a team that takes pride in every detail.
              </p>
              <a
                href="tel:+18152462113"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-6 py-3.5 rounded-full hover:bg-orange-50 transition-colors mb-8"
              >
                📞 (815) 246-2113
              </a>
              <div className="grid grid-cols-2 gap-3">
                {["✓ All Naperville Zip Codes", "✓ Fully Insured", "✓ Before/After Hours", "✓ Free Walkthrough"].map((b) => (
                  <div key={b} className="bg-white/10 rounded-xl px-4 py-2 text-sm text-white font-medium">{b}</div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Free Naperville Office Cleaning Quote</h2>
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
            <p className="text-gray-500 text-center mb-10">Standard scope for every Naperville office cleaning visit:</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Naperville Businesses Choose DSM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Premium Results", desc: "Naperville businesses demand high standards. Our team is trained to deliver a level of clean that reflects well on your brand." },
              { title: "Flexible Scheduling", desc: "We work before you open, after you close, or on weekends — zero interference with your clients or daily operations." },
              { title: "Insured & Background-Checked", desc: "Every team member is fully vetted. Your Naperville office assets and confidential spaces are always protected." },
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">FAQs — Naperville Office Cleaning</h2>
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
              { label: "Office Cleaning Plainfield", href: "/office-cleaning-plainfield" },
              { label: "Office Cleaning Bolingbrook", href: "/office-cleaning-bolingbrook" },
              { label: "All Office Cleaning Services", href: "/office-cleaning" },
              { label: "Commercial Cleaning", href: "/commercial-cleaning" },
              { label: "House Cleaning Naperville", href: "/naperville-il" },
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
