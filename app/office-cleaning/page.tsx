import type { Metadata } from "next";
import Link from "next/link";
import OfficeLeadForm from "@/components/OfficeLeadForm";

export const metadata: Metadata = {
  title: "Office Cleaning Services in Romeoville & Chicagoland",
  description:
    "Professional office cleaning services in Romeoville, Plainfield, Naperville, and Bolingbrook. DSM Cleaning Solutions keeps your workspace spotless. Call (815) 246-2113.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/office-cleaning" },
  openGraph: {
    title: "Office Cleaning Services in Romeoville & Chicagoland",
    description:
      "Professional office cleaning services in Romeoville, Plainfield, Naperville, and Bolingbrook. DSM Cleaning Solutions keeps your workspace spotless. Call (815) 246-2113.",
    url: "https://www.dsmcleaningsolutions.com/office-cleaning",
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
    url: "https://www.dsmcleaningsolutions.com/office-cleaning",
    areaServed: ["Romeoville", "Plainfield", "Naperville", "Bolingbrook", "Joliet"],
    priceRange: "$$",
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
      { "@type": "ListItem", position: 2, name: "Office Cleaning", item: "https://www.dsmcleaningsolutions.com/office-cleaning" },
    ],
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of offices does DSM Cleaning Solutions clean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We clean all types of commercial spaces including small offices, medical and professional offices, multi-suite buildings, retail spaces, and post-construction commercial sites across Romeoville, Plainfield, Naperville, and Bolingbrook.",
        },
      },
      {
        "@type": "Question",
        name: "Can you clean our office after hours or on weekends?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we offer flexible scheduling including before business hours (before 8am), after business hours (after 6pm), and weekend-only slots so your operations are never disrupted.",
        },
      },
      {
        "@type": "Question",
        name: "How much does office cleaning cost in Romeoville?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Office cleaning rates depend on the size of your space, number of restrooms, floor type, and cleaning frequency. We offer free walkthroughs and custom quotes — call (815) 246-2113 to get started.",
        },
      },
      {
        "@type": "Question",
        name: "Is DSM Cleaning Solutions insured for commercial cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — DSM Cleaning Solutions is fully insured and bonded in Illinois. Every commercial cleaning job is covered, giving your business complete peace of mind.",
        },
      },
    ],
  },
};

const included = [
  "Vacuuming and mopping all floor surfaces",
  "Dusting desks, shelves, and office equipment",
  "Sanitizing high-touch surfaces (door handles, light switches, phones)",
  "Restroom deep cleaning and restocking",
  "Kitchen and break room cleaning",
  "Emptying trash and replacing liners",
  "Wiping down glass partitions and windows",
  "Cleaning conference rooms and common areas",
];

export default function OfficeCleaningPage() {
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
              <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Commercial Cleaning</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Professional Office Cleaning Services in the Chicago Suburbs
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                DSM Cleaning Solutions delivers reliable, thorough office cleaning for businesses across Romeoville, Plainfield, Naperville, and Bolingbrook. Whether you need nightly janitorial service or a one-time deep clean, our team works around your schedule so your workspace is always ready for business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+18152462113"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-6 py-3.5 rounded-full hover:bg-orange-50 transition-colors"
                >
                  📞 (815) 246-2113
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["✓ Fully Insured & Bonded", "✓ Flexible Scheduling", "✓ Free Walkthroughs", "✓ Family-Owned"].map((b) => (
                  <div key={b} className="bg-white/10 rounded-xl px-4 py-2 text-sm text-white font-medium">{b}</div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Request a Free Office Cleaning Quote</h2>
              <p className="text-gray-500 text-sm mb-5">We&apos;ll contact you within 24 hours to schedule a walkthrough.</p>
              <OfficeLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">What&apos;s Included in Our Office Cleaning</h2>
            <p className="text-gray-500 text-center mb-10">Every commercial cleaning includes the following as standard:</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Chicagoland Businesses Choose DSM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "After-Hours Availability", desc: "We clean before you open, after you close, or on weekends — zero disruption to your team or clients." },
              { title: "Consistent, Vetted Team", desc: "The same background-checked, insured crew every visit. You'll always know who's in your building." },
              { title: "Custom Cleaning Plans", desc: "We build a scope of work around your space — office layout, traffic, and industry-specific requirements." },
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
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
          <h2 className="text-lg font-bold text-gray-900 mb-5">Office Cleaning by City</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Office Cleaning Romeoville", href: "/office-cleaning-romeoville" },
              { label: "Office Cleaning Plainfield", href: "/office-cleaning-plainfield" },
              { label: "Office Cleaning Naperville", href: "/office-cleaning-naperville" },
              { label: "Office Cleaning Bolingbrook", href: "/office-cleaning-bolingbrook" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all text-sm font-medium text-gray-700">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/commercial-cleaning" className="text-sm text-brand-green font-semibold hover:underline">
              → View All Commercial Cleaning Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
