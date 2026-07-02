import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Us | Free Cleaning Estimate",
  description:
    "Contact DSM Cleaning Solutions for a free house cleaning estimate in Plainfield, Romeoville, Naperville & Bolingbrook IL. We respond within 1 business day.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/contact" },
  openGraph: {
    title: "Contact DSM Cleaning Solutions | Free Estimate",
    description:
      "Contact DSM Cleaning Solutions for a free house cleaning estimate in Plainfield, Romeoville, Naperville & Bolingbrook IL. We respond within 1 business day.",
    url: "https://www.dsmcleaningsolutions.com/contact",
    siteName: "DSM Cleaning Solutions",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "DSM Cleaning Solutions — Contact Us for a Free Estimate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact DSM Cleaning Solutions | Free Estimate",
    description:
      "Contact DSM Cleaning Solutions for a free house cleaning estimate in Plainfield, Romeoville, Naperville & Bolingbrook IL.",
    images: ["/hero-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly do you respond to inquiries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We respond to all inquiries within 1 business day. For faster service, call us directly at (815) 246-2113 — we answer 7 days a week.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer free estimates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — all estimates are completely free with no obligation to book. Just fill out the form, give us a call, or book online and we'll get you a quote tailored to your home.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Plainfield, Romeoville, Naperville, Bolingbrook, Joliet, Lockport, Lemont, Homer Glen, New Lenox, Shorewood, Westmont, Minooka, and the surrounding southwest Chicago suburbs.",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "CleaningService"],
  "@id": "https://www.dsmcleaningsolutions.com/#business",
  name: "DSM Cleaning Solutions",
  telephone: "+18152462113",
  url: "https://www.dsmcleaningsolutions.com",
  image: "https://www.dsmcleaningsolutions.com/Logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Romeoville",
    addressRegion: "IL",
    postalCode: "60446",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Romeoville", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Plainfield", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Naperville", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Bolingbrook", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Joliet", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Lockport", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Westmont", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Lemont", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Homer Glen", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "New Lenox", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Shorewood", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Minooka", containedInPlace: { "@type": "State", name: "Illinois" } },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+18152462113",
    contactType: "customer service",
    availableLanguage: "English",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "18:00",
    },
  },
};

const faqs = [
  {
    question: "How quickly do you respond to inquiries?",
    answer:
      "We respond to all inquiries within 1 business day. For faster service, call us directly at (815) 246-2113 — we answer 7 days a week.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes — all estimates are completely free with no obligation to book. Just fill out the form, give us a call, or book online and we'll get you a quote tailored to your home.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Plainfield, Romeoville, Naperville, Bolingbrook, Joliet, Lockport, Lemont, Homer Glen, New Lenox, Shorewood, Westmont, Minooka, and the surrounding southwest Chicago suburbs.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-medium">Contact</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Contact DSM Cleaning Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get a free estimate or ask us anything. We serve Plainfield, Romeoville, Naperville,
              Bolingbrook &amp; surrounding areas — and we&apos;re available 7 days a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+18152462113" className="btn-white btn-lg">📞 Call Now</a>
              <Link
                href="/book"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white btn-lg"
              >
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {/* Phone */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-green-50 border border-brand-green-100">
              <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Call or Text</p>
              <a href="tel:+18152462113" className="text-2xl font-bold text-brand-green hover:text-orange-500 transition-colors">
                (815) 246-2113
              </a>
              <p className="text-sm text-gray-500 mt-2">We answer 7 days a week</p>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-green-50 border border-brand-green-100">
              <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Business Hours</p>
              <p className="text-lg font-bold text-gray-900">Monday – Sunday</p>
              <p className="text-lg font-bold text-gray-900">8:00 AM – 6:00 PM</p>
              <p className="text-sm text-gray-500 mt-2">Open every day of the week</p>
            </div>

            {/* Service Area */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-green-50 border border-brand-green-100">
              <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Service Area</p>
              <p className="text-base font-semibold text-gray-900 leading-relaxed">
                Plainfield, Romeoville,<br />
                Naperville, Bolingbrook,<br />
                Joliet, Lockport &amp; more
              </p>
              <p className="text-sm text-gray-500 mt-2">Southwest Chicago suburbs</p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — copy */}
            <div>
              <h2 className="section-heading mb-4">Request a Free Estimate</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fill out the form and we&apos;ll get back to you within 1 business day with a free,
                no-obligation quote. Prefer to talk now? Call us at{" "}
                <a href="tel:+18152462113" className="text-brand-green font-semibold hover:underline">
                  (815) 246-2113
                </a>{" "}
                — we&apos;re available Monday through Sunday, 8am–6pm.
              </p>

              {/* Trust badges */}
              <div className="space-y-3 mb-8">
                {[
                  { icon: "✅", text: "Free estimates — no obligation" },
                  { icon: "🛡️", text: "Fully insured & bonded" },
                  { icon: "👨‍👩‍👧", text: "Family-owned local business" },
                  { icon: "🌿", text: "Eco-friendly products" },
                  { icon: "✔️", text: "48-hour satisfaction guarantee" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-gray-700">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Internal service links */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Popular Services</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Deep Cleaning", href: "/deep-cleaning" },
                    { label: "Move-Out Cleaning", href: "/move-out-cleaning" },
                    { label: "Standard Cleaning", href: "/standard-cleaning" },
                    { label: "Recurring Service", href: "/recurring-cleaning" },
                    { label: "Eco-Friendly", href: "/eco-friendly-cleaning" },
                  ].map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="text-xs bg-white border border-gray-200 text-gray-600 hover:border-brand-green hover:text-brand-green px-3 py-1.5 rounded-full transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form embed */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <LeadForm />
            </div>

          </div>
        </div>
      </section>

      {/* FAQ STRIP */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Answers</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 border border-gray-200 rounded-xl group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-brand-green">
                  <span className="pr-4">{faq.question}</span>
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

      {/* BOTTOM CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prefer to Book Directly Online?
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Skip the form and book your cleaning in minutes through our online scheduler.
          </p>
          <Link
            href="/book"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand-green font-bold text-lg px-10 py-4 rounded-full hover:bg-orange-50 transition-colors shadow-lg mb-6"
          >
            Book Online Now
          </Link>
          <p className="text-white/80 text-sm">
            Satisfaction guaranteed — if you are not happy within 48 hours we will come back
            and re-clean at no charge.
          </p>
        </div>
      </section>
    </>
  );
}
