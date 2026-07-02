import type { Metadata } from "next";
import Link from "next/link";
import OfficeLeadForm from "@/components/OfficeLeadForm";

export const metadata: Metadata = {
  title: "Office Cleaning in Bolingbrook, IL",
  description:
    "Reliable office and commercial cleaning in Bolingbrook, IL. DSM Cleaning Solutions keeps Bolingbrook businesses clean and professional. Free estimate.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/office-cleaning-bolingbrook" },
  openGraph: {
    title: "Office Cleaning in Bolingbrook, IL",
    description:
      "Reliable office and commercial cleaning in Bolingbrook, IL. DSM Cleaning Solutions keeps Bolingbrook businesses clean and professional. Free estimate.",
    url: "https://www.dsmcleaningsolutions.com/office-cleaning-bolingbrook",
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
    url: "https://www.dsmcleaningsolutions.com/office-cleaning-bolingbrook",
    areaServed: "Bolingbrook",
    priceRange: "$$",
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
      { "@type": "ListItem", position: 2, name: "Office Cleaning", item: "https://www.dsmcleaningsolutions.com/office-cleaning" },
      { "@type": "ListItem", position: 3, name: "Bolingbrook", item: "https://www.dsmcleaningsolutions.com/office-cleaning-bolingbrook" },
    ],
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you provide office cleaning services in Bolingbrook, IL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — DSM Cleaning Solutions serves businesses throughout Bolingbrook, IL including offices near Boughton Road, Weber Road, and the I-55 business corridor. We're located nearby in Romeoville for fast, reliable service.",
        },
      },
      {
        "@type": "Question",
        name: "Can you clean our Bolingbrook office on weekends?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we offer weekend-only cleaning slots for Bolingbrook businesses, as well as before-hours and after-hours cleaning on weekdays so your team and clients are never disrupted.",
        },
      },
      {
        "@type": "Question",
        name: "What commercial spaces do you clean in Bolingbrook?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We clean professional offices, medical suites, retail back offices, law firms, financial offices, and other commercial spaces throughout Bolingbrook. We tailor our approach to each type of business.",
        },
      },
      {
        "@type": "Question",
        name: "How do I schedule office cleaning in Bolingbrook?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fill out the form on this page or call (815) 246-2113. We'll contact you within 24 hours to schedule a free walkthrough of your Bolingbrook office and provide a written quote.",
        },
      },
    ],
  },
};

const included = [
  "Vacuuming and mopping all flooring",
  "Dusting desks, surfaces, and equipment",
  "High-touch sanitization throughout",
  "Restroom deep cleaning and restocking",
  "Kitchen and break room cleaning",
  "Trash and recycling removal",
  "Entryway and glass cleaning",
  "Common area and conference room care",
];

export default function OfficeCleaningBolingbrookPage() {
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
              <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Bolingbrook, IL</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Office Cleaning Services in Bolingbrook, IL
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Bolingbrook businesses rely on DSM Cleaning Solutions for dependable, professional office cleaning. Whether your business is in a small suite off Boughton Road or a larger commercial facility near I-55, we bring the same attention to detail and flexible scheduling to every job.
              </p>
              <a
                href="tel:+18152462113"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-6 py-3.5 rounded-full hover:bg-orange-50 transition-colors mb-8"
              >
                📞 (815) 246-2113
              </a>
              <div className="grid grid-cols-2 gap-3">
                {["✓ Serving Bolingbrook", "✓ Fully Insured", "✓ Flexible Scheduling", "✓ Free Quote"].map((b) => (
                  <div key={b} className="bg-white/10 rounded-xl px-4 py-2 text-sm text-white font-medium">{b}</div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Free Bolingbrook Office Cleaning Quote</h2>
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
            <p className="text-gray-500 text-center mb-10">Everything covered in our Bolingbrook office cleaning visits:</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Bolingbrook Businesses Choose DSM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Close to Bolingbrook", desc: "Our Romeoville base puts us just minutes from Bolingbrook — fast response, on-time arrivals, and no travel fees." },
              { title: "Reliable Every Visit", desc: "Consistent crew, consistent quality. You'll get the same great clean every time without having to follow up or supervise." },
              { title: "Fully Insured & Bonded", desc: "Every job at every Bolingbrook location is fully covered. Your business property is protected from day one." },
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">FAQs — Bolingbrook Office Cleaning</h2>
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
              { label: "Office Cleaning Naperville", href: "/office-cleaning-naperville" },
              { label: "All Office Cleaning Services", href: "/office-cleaning" },
              { label: "Commercial Cleaning", href: "/commercial-cleaning" },
              { label: "House Cleaning Bolingbrook", href: "/bolingbrook-il" },
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
