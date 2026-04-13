import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "House Cleaning Plainfield IL | DSM Cleaning Solutions",
  description:
    "Professional house cleaning in Plainfield, IL. Family-owned, eco-friendly, and fully insured. Deep cleaning, move-out cleaning, and recurring maid service. Free estimates.",
  keywords: [
    "house cleaning Plainfield IL",
    "deep cleaning Plainfield IL",
    "move out cleaning Plainfield IL",
    "maid service Plainfield IL",
    "home cleaning Plainfield IL",
    "cleaning service Plainfield IL",
    "recurring house cleaning Plainfield",
    "professional house cleaners Plainfield IL",
  ],
  alternates: {
    canonical: "https://www.dsmcleaningsolutions.com/plainfield-il",
  },
  openGraph: {
    title: "House Cleaning Plainfield IL | DSM Cleaning Solutions",
    description:
      "Professional, eco-friendly house cleaning in Plainfield, IL. Family-owned, fully insured. Free estimates.",
    url: "https://www.dsmcleaningsolutions.com/plainfield-il",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DSM Cleaning Solutions — Plainfield, IL",
  description:
    "Professional house cleaning service serving Plainfield, IL and surrounding southwest Chicago suburbs. Family-owned, eco-friendly, fully insured.",
  url: "https://www.dsmcleaningsolutions.com/plainfield-il",
  telephone: "+16302484536",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Plainfield",
    addressRegion: "IL",
    postalCode: "60544",
    addressCountry: "US",
  },
  areaServed: "Plainfield, IL",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer house cleaning in Plainfield, IL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! DSM Cleaning Solutions proudly serves Plainfield, IL with a full range of professional cleaning services including standard house cleaning, deep cleaning, move-out and move-in cleaning, and recurring maid service.",
      },
    },
    {
      "@type": "Question",
      name: "Are you a local cleaning company in Plainfield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are based in Romeoville, IL — right next to Plainfield. As a local, family-owned business, we're deeply familiar with the Plainfield community and surrounding southwest suburbs.",
      },
    },
    {
      "@type": "Question",
      name: "What cleaning services are available in Plainfield, IL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer standard house cleaning, deep cleaning, move-out and move-in cleaning, weekly/biweekly/monthly recurring maid service, apartment cleaning, eco-friendly green cleaning, post-construction cleaning, and Airbnb turnover cleaning — all available in Plainfield, IL.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Do you offer house cleaning in Plainfield, IL?",
    answer:
      "Yes! DSM Cleaning Solutions proudly serves Plainfield, IL with a full range of professional cleaning services including standard house cleaning, deep cleaning, move-out and move-in cleaning, and recurring maid service.",
  },
  {
    question: "Are you a local cleaning company near Plainfield?",
    answer:
      "We're based in Romeoville, IL — right next door to Plainfield. As a local, family-owned business, we're deeply familiar with the Plainfield community and the surrounding southwest suburbs.",
  },
  {
    question: "What cleaning services are available in Plainfield, IL?",
    answer:
      "We offer standard house cleaning, deep cleaning, move-out and move-in cleaning, weekly/biweekly/monthly recurring maid service, apartment cleaning, eco-friendly green cleaning, post-construction cleaning, and Airbnb turnover cleaning.",
  },
  {
    question: "How much does house cleaning cost in Plainfield, IL?",
    answer:
      "Pricing depends on the size of your home and the type of cleaning. Contact us for a free estimate — we'll provide a personalized quote with no obligation.",
  },
  {
    question: "Do you serve all of Plainfield, including the newer subdivisions?",
    answer:
      "Yes — we serve all of Plainfield, IL including newer developments and subdivisions throughout the 60544 and 60585 zip code areas.",
  },
];

const services = [
  {
    icon: "🏠",
    title: "Standard House Cleaning in Plainfield",
    desc: "Routine house cleaning on a one-time or recurring basis. We keep your Plainfield home consistently clean and comfortable.",
    link: "/#services",
  },
  {
    icon: "🧹",
    title: "Deep Cleaning in Plainfield",
    desc: "Thorough top-to-bottom cleaning that tackles every corner, surface, and fixture in your home.",
    link: "/deep-cleaning",
  },
  {
    icon: "📦",
    title: "Move-Out / Move-In Cleaning Plainfield",
    desc: "Comprehensive move-out cleaning to get your full deposit back, or move-in cleaning to start fresh in your new Plainfield home.",
    link: "/move-out-cleaning",
  },
  {
    icon: "📅",
    title: "Recurring Maid Service Plainfield",
    desc: "Weekly, biweekly, or monthly maid service plans tailored to your Plainfield home and schedule.",
    link: "/recurring-cleaning",
  },
  {
    icon: "🌿",
    title: "Eco-Friendly Cleaning Plainfield",
    desc: "Green cleaning using non-toxic, biodegradable products — safe for your family and the environment.",
    link: "/#services",
  },
  {
    icon: "🏢",
    title: "Apartment Cleaning Plainfield",
    desc: "Professional apartment cleaning for renters and property managers throughout Plainfield.",
    link: "/#services",
  },
];

export default function PlainfieldPage() {
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
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">Plainfield, IL</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Professional House Cleaning Services in Plainfield, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Trusted by Plainfield families — DSM Cleaning Solutions brings family-owned, eco-friendly
              house cleaning right to your door. Fully insured. Satisfaction guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-block bg-white text-brand-green font-bold py-4 px-8 rounded-lg hover:bg-brand-green-50 transition-colors text-lg text-center"
              >
                Get a Free Quote in Plainfield
              </Link>
              <a
                href="tel:+16302484536"
                className="inline-block bg-transparent text-white font-bold py-4 px-8 rounded-lg border-2 border-white hover:bg-white/10 transition-colors text-lg text-center"
              >
                📞 (630) 248-4536
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600">
            {["📍 Serving All of Plainfield, IL", "👨‍👩‍👧 Family Owned", "🌿 Eco-Friendly", "🛡️ Fully Insured & Bonded", "✅ Satisfaction Guaranteed"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* LOCAL INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Your Local Cleaning Company in Plainfield, IL</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                DSM Cleaning Solutions is based right in Romeoville — just minutes from Plainfield. We&apos;re
                not a national franchise; we&apos;re your local neighbors, and we treat every Plainfield home with
                the same care we&apos;d want for our own.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Plainfield is one of the fastest-growing communities in the southwest suburbs, and we&apos;re proud
                to serve its families. Whether you&apos;re in one of the newer subdivisions or an established
                neighborhood, we bring the same high standard of professional cleaning to every home.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We use only eco-friendly, non-toxic cleaning products — because Plainfield families deserve
                a clean home that&apos;s also safe for their kids and pets.
              </p>
              <Link href="#contact" className="btn-primary">
                Book Cleaning in Plainfield
              </Link>
            </div>
            <div className="bg-brand-green-50 rounded-2xl p-8 border border-brand-green-100">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Why Plainfield Families Choose DSM</h3>
              <ul className="space-y-3">
                {[
                  "Local company based in neighboring Romeoville",
                  "Fully insured and bonded — your home is protected",
                  "Eco-friendly, non-toxic cleaning products",
                  "Family-owned with a personal touch",
                  "Satisfaction guarantee on every clean",
                  "Flexible scheduling — weekly, biweekly, monthly",
                  "Background-checked, professional team",
                  "Serving all of Plainfield: 60544 &amp; 60585 zip codes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Cleaning Services We Offer in Plainfield, IL</h2>
            <p className="section-subheading mx-auto">
              From one-time deep cleans to weekly maid service — we have a solution for every Plainfield home.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-green-100 transition-all group"
              >
                <span className="text-4xl block mb-4">{service.icon}</span>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-brand-green font-semibold text-sm">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">What Plainfield Homeowners Are Saying</h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="text-gray-600">5-star rated cleaning service</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReviewCard
              name="Mike T."
              location="Plainfield, IL"
              text="Used DSM for a move-out clean on my Plainfield home. Got my full security deposit back! They are thorough, professional, and use eco-friendly products. Absolutely will use them again."
              date="December 2024"
            />
            <ReviewCard
              name="Patricia L."
              location="Plainfield, IL"
              text="DSM does my biweekly cleaning in Plainfield and I love them. They show up on time, do a fantastic job, and communicate clearly. Much better than the national chains I've tried."
              date="February 2025"
            />
            <ReviewCard
              name="Nancy V."
              location="Plainfield, IL"
              text="I hired DSM for a deep cleaning of our Plainfield home before we moved in. Absolutely incredible job. Every room was immaculate. They even cleaned inside the cabinets and closets!"
              date="March 2025"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Plainfield House Cleaning FAQs</h2>
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

      {/* NEARBY AREAS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">We Also Serve These Nearby Areas</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { city: "Romeoville", href: "/" },
              { city: "Naperville", href: "/#contact" },
              { city: "Bolingbrook", href: "/#contact" },
              { city: "Joliet", href: "/#contact" },
              { city: "Westmont", href: "/#contact" },
              { city: "Lockport", href: "/#contact" },
              { city: "Lemont", href: "/#contact" },
              { city: "Homer Glen", href: "/#contact" },
            ].map((area) => (
              <Link
                key={area.city}
                href={area.href}
                className="bg-brand-green-50 border border-brand-green-100 rounded-lg px-4 py-2 text-brand-green-dark font-medium text-sm hover:bg-brand-green hover:text-white transition-all"
              >
                {area.city}, IL
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book House Cleaning in Plainfield, IL Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Get a free, no-obligation estimate for professional house cleaning in Plainfield. We respond
                within 1 business day and offer flexible scheduling to fit your life.
              </p>
              <a href="tel:+16302484536" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-brand-green-50 transition-colors mb-6">
                📞 (630) 248-4536
              </a>
              <p className="text-white/80">Local · Family-owned · Eco-friendly · Fully insured · Satisfaction guaranteed</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get a Free Cleaning Estimate</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
