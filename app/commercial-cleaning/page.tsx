import type { Metadata } from "next";
import Link from "next/link";
import OfficeLeadForm from "@/components/OfficeLeadForm";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services | Chicagoland Area",
  description:
    "Trusted commercial cleaning services for offices, medical facilities, and professional spaces across Will County and DuPage County. Get a free quote today.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/commercial-cleaning" },
  openGraph: {
    title: "Commercial Cleaning Services | Chicagoland Area",
    description:
      "Trusted commercial cleaning services for offices, medical facilities, and professional spaces across Will County and DuPage County. Get a free quote today.",
    url: "https://www.dsmcleaningsolutions.com/commercial-cleaning",
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
    url: "https://www.dsmcleaningsolutions.com/commercial-cleaning",
    areaServed: ["Romeoville", "Plainfield", "Naperville", "Bolingbrook", "Joliet"],
    priceRange: "$$",
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
      { "@type": "ListItem", position: 2, name: "Commercial Cleaning", item: "https://www.dsmcleaningsolutions.com/commercial-cleaning" },
    ],
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What industries do you serve with commercial cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve a wide range of industries including professional offices, medical and dental practices, real estate offices, law firms, retail spaces, and post-construction commercial sites across Will County and DuPage County.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer recurring commercial cleaning contracts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we offer weekly, bi-weekly, and monthly recurring commercial cleaning plans. We can also accommodate custom frequencies based on your business needs. Contact us for a custom quote.",
        },
      },
      {
        "@type": "Question",
        name: "How do you price commercial cleaning services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Commercial cleaning pricing is based on square footage, number of rooms and restrooms, floor type, and cleaning frequency. We provide free on-site walkthroughs and written quotes before any work begins.",
        },
      },
      {
        "@type": "Question",
        name: "Are your commercial cleaners background-checked?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — every DSM Cleaning Solutions team member is background-checked, insured, and bonded. We take the security of your business seriously on every visit.",
        },
      },
    ],
  },
};

const services = [
  { title: "Office Cleaning", desc: "Regular janitorial service for offices of all sizes — desks, restrooms, kitchens, and common areas.", href: "/office-cleaning" },
  { title: "Medical Office Cleaning", desc: "Sanitization protocols for medical and dental practices, waiting rooms, and exam areas.", href: "/office-cleaning" },
  { title: "Post-Construction Cleaning", desc: "Debris removal, dust elimination, and surface cleaning after commercial build-outs and renovations.", href: "/post-construction-cleaning" },
  { title: "One-Time Commercial Clean", desc: "Deep cleaning for move-ins, special events, or spaces that need a fresh start.", href: "/one-time-cleaning" },
];

export default function CommercialCleaningPage() {
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
              <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Will County &amp; DuPage County</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Commercial Cleaning Services for Chicagoland Businesses
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                From small professional offices to large commercial facilities, DSM Cleaning Solutions provides dependable, thorough cleaning services across Will County and DuPage County. We work around your hours, customize our process to your space, and back every job with our satisfaction guarantee.
              </p>
              <a
                href="tel:+18152462113"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-6 py-3.5 rounded-full hover:bg-orange-50 transition-colors mb-8"
              >
                📞 (815) 246-2113
              </a>
              <div className="grid grid-cols-2 gap-3">
                {["✓ Will County", "✓ DuPage County", "✓ Fully Insured", "✓ Free Walkthroughs"].map((b) => (
                  <div key={b} className="bg-white/10 rounded-xl px-4 py-2 text-sm text-white font-medium">{b}</div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Get a Free Commercial Cleaning Quote</h2>
              <p className="text-gray-500 text-sm mb-5">We&apos;ll respond within 24 hours and schedule a free on-site walkthrough.</p>
              <OfficeLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Commercial Cleaning Services We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-brand-green hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DSM */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Choose DSM for Commercial Cleaning</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Local & Reliable", desc: "Based in Romeoville, IL — we serve businesses throughout Will County and DuPage County with consistent, on-time service." },
              { title: "Industry-Specific Protocols", desc: "Whether it's a medical practice or a law office, we adapt our cleaning process to your industry's standards." },
              { title: "No Long-Term Lock-In", desc: "Month-to-month commercial agreements. We earn your business every visit — no pressure, no hidden fees." },
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

      {/* CITY LINKS */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-5">Commercial Cleaning by City</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Romeoville", href: "/office-cleaning-romeoville" },
              { label: "Plainfield", href: "/office-cleaning-plainfield" },
              { label: "Naperville", href: "/office-cleaning-naperville" },
              { label: "Bolingbrook", href: "/office-cleaning-bolingbrook" },
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
