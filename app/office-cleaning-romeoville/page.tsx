import type { Metadata } from "next";
import Link from "next/link";
import OfficeLeadForm from "@/components/OfficeLeadForm";

export const metadata: Metadata = {
  title: "Office Cleaning in Romeoville, IL",
  description:
    "Professional office and commercial cleaning in Romeoville, IL. DSM Cleaning Solutions serves local businesses with reliable, thorough cleaning. Call (815) 246-2113.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/office-cleaning-romeoville" },
  openGraph: {
    title: "Office Cleaning in Romeoville, IL",
    description:
      "Professional office and commercial cleaning in Romeoville, IL. DSM Cleaning Solutions serves local businesses with reliable, thorough cleaning. Call (815) 246-2113.",
    url: "https://www.dsmcleaningsolutions.com/office-cleaning-romeoville",
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
    url: "https://www.dsmcleaningsolutions.com/office-cleaning-romeoville",
    areaServed: "Romeoville",
    priceRange: "$$",
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
      { "@type": "ListItem", position: 2, name: "Office Cleaning", item: "https://www.dsmcleaningsolutions.com/office-cleaning" },
      { "@type": "ListItem", position: 3, name: "Romeoville", item: "https://www.dsmcleaningsolutions.com/office-cleaning-romeoville" },
    ],
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does DSM Cleaning Solutions offer office cleaning in Romeoville, IL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — DSM Cleaning Solutions is based in Romeoville, IL (60446) and provides professional office and commercial cleaning to businesses throughout Romeoville and the surrounding area.",
        },
      },
      {
        "@type": "Question",
        name: "What areas of Romeoville do you serve for office cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve all business districts and commercial corridors in Romeoville, IL including businesses along Weber Road, Romeo Road, and the Route 53 corridor. Contact us to confirm your location.",
        },
      },
      {
        "@type": "Question",
        name: "Can you clean our Romeoville office after business hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we offer before-hours, after-hours, and weekend cleaning so your Romeoville business operations are never interrupted. Just let us know your preferred schedule.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get a quote for office cleaning in Romeoville?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fill out the form on this page or call us at (815) 246-2113. We'll respond within 24 hours and schedule a free walkthrough of your Romeoville office space.",
        },
      },
    ],
  },
};

const included = [
  "Vacuuming and mopping all floors",
  "Dusting desks, shelves, and surfaces",
  "Sanitizing door handles, phones, and switches",
  "Restroom cleaning and restocking",
  "Kitchen and break room cleaning",
  "Emptying trash throughout the office",
  "Cleaning glass partitions and entryways",
  "Conference room and reception area cleaning",
];

export default function OfficeCleaningRomeovillePage() {
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
              <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Romeoville, IL 60446</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Office Cleaning Services in Romeoville, IL
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                DSM Cleaning Solutions is headquartered right here in Romeoville. We provide professional office and commercial cleaning to local businesses throughout the 60446 area — with flexible scheduling, consistent crews, and a satisfaction guarantee on every job.
              </p>
              <a
                href="tel:+18152462113"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-6 py-3.5 rounded-full hover:bg-orange-50 transition-colors mb-8"
              >
                📞 (815) 246-2113
              </a>
              <div className="grid grid-cols-2 gap-3">
                {["✓ Based in Romeoville", "✓ Fully Insured", "✓ Flexible Hours", "✓ Free Walkthrough"].map((b) => (
                  <div key={b} className="bg-white/10 rounded-xl px-4 py-2 text-sm text-white font-medium">{b}</div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Free Romeoville Office Cleaning Quote</h2>
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
            <p className="text-gray-500 text-center mb-10">Standard scope for every Romeoville office cleaning visit:</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Romeoville Businesses Choose DSM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Local, Fast Response", desc: "We're based in Romeoville — no long drives, no delays. We respond quickly and show up on time, every time." },
              { title: "Consistent Crews", desc: "The same insured, background-checked team visits your office each time so you always know who's in your space." },
              { title: "Satisfaction Guaranteed", desc: "Not happy with any aspect of your clean? We'll return to make it right — no questions asked." },
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">FAQs — Romeoville Office Cleaning</h2>
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
              { label: "Office Cleaning Plainfield", href: "/office-cleaning-plainfield" },
              { label: "Office Cleaning Naperville", href: "/office-cleaning-naperville" },
              { label: "Office Cleaning Bolingbrook", href: "/office-cleaning-bolingbrook" },
              { label: "All Office Cleaning Services", href: "/office-cleaning" },
              { label: "Commercial Cleaning", href: "/commercial-cleaning" },
              { label: "House Cleaning Romeoville", href: "/romeoville-il" },
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
