import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "House Cleaning Romeoville IL | DSM Cleaning Solutions",
  description:
    "Family-owned house cleaning in Romeoville, IL. Eco-friendly, insured and trusted. Book online or call for a free estimate. Serving Plainfield, Naperville, Bolingbrook and surrounding suburbs.",
  alternates: {
    canonical: "https://www.dsmcleaningsolutions.com",
  },
  openGraph: {
    title: "House Cleaning Romeoville IL | DSM Cleaning Solutions",
    description:
      "Family-owned house cleaning in Romeoville, IL. Eco-friendly, insured and trusted.",
    url: "https://www.dsmcleaningsolutions.com",
  },
};

const services = [
  {
    icon: "🏠",
    title: "Standard House Cleaning",
    description: "Recurring or one-time residential cleaning tailored to your home and schedule.",
    slug: "#contact",
  },
  {
    icon: "🧹",
    title: "Deep Cleaning",
    description: "Thorough top-to-bottom cleaning of every surface, corner, and fixture in your home.",
    slug: "/deep-cleaning",
  },
  {
    icon: "📦",
    title: "Move-Out / Move-In Cleaning",
    description: "Get your full deposit back or start fresh in your new home with our detail-focused cleaning.",
    slug: "/move-out-cleaning",
  },
  {
    icon: "📅",
    title: "Recurring Maid Service",
    description: "Weekly, biweekly, or monthly cleaning plans to keep your home consistently spotless.",
    slug: "/recurring-cleaning",
  },
  {
    icon: "🌿",
    title: "Eco-Friendly Green Cleaning",
    description: "Safe for kids and pets — we use non-toxic, environmentally responsible products.",
    slug: "#contact",
  },
  {
    icon: "🏢",
    title: "Apartment Cleaning",
    description: "Specialized apartment cleaning for renters and property managers in the southwest suburbs.",
    slug: "#contact",
  },
  {
    icon: "🔨",
    title: "Post-Construction Cleaning",
    description: "Dust, debris, and residue removal after renovations or new construction projects.",
    slug: "#contact",
  },
  {
    icon: "🛏️",
    title: "Airbnb / Short-Term Rental",
    description: "Fast, reliable turnover cleaning between guests to maintain your 5-star rating.",
    slug: "#contact",
  },
  {
    icon: "✨",
    title: "One-Time Cleaning",
    description: "No commitment required. Perfect for special occasions or giving your home a reset.",
    slug: "#contact",
  },
];

const faqs = [
  {
    question: "How much does house cleaning cost in Romeoville, IL?",
    answer:
      "Pricing depends on the size of your home and the type of cleaning needed. Standard recurring cleanings typically start around $120–$180 for an average home. Deep cleans and move-out cleans are priced higher due to the extra time and detail involved. Contact us for a free, no-obligation estimate.",
  },
  {
    question: "Are you insured and bonded?",
    answer:
      "Yes — DSM Cleaning Solutions is fully insured and bonded. You can have complete peace of mind knowing your home and belongings are protected every time we clean.",
  },
  {
    question: "Do you use eco-friendly cleaning products?",
    answer:
      "Absolutely. We use non-toxic, eco-friendly cleaning products that are safe for children, pets, and the environment. Our green cleaning approach delivers a deep clean without harsh chemicals.",
  },
  {
    question: "Can I book cleaning online?",
    answer:
      "Yes! You can request a free estimate or book a cleaning using the contact form on this page, or call us directly at (630) 248-4536. We respond within 1 business day.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve Romeoville and Plainfield, IL, and extend to Naperville, Bolingbrook, Joliet, Westmont, and the surrounding southwest Chicago suburbs. Not sure if we cover your area? Just call or fill out the form!",
  },
  {
    question: "What is your satisfaction guarantee?",
    answer:
      "Your satisfaction is our top priority. If you're not completely happy with our cleaning, let us know within 24 hours and we'll return to re-clean the area at no additional charge.",
  },
];

const serviceAreas = [
  { city: "Romeoville", slug: "/" },
  { city: "Plainfield", slug: "/plainfield-il" },
  { city: "Naperville", slug: "#contact" },
  { city: "Bolingbrook", slug: "#contact" },
  { city: "Joliet", slug: "#contact" },
  { city: "Westmont", slug: "#contact" },
  { city: "Lockport", slug: "#contact" },
  { city: "Lemont", slug: "#contact" },
  { city: "Homer Glen", slug: "#contact" },
  { city: "New Lenox", slug: "#contact" },
  { city: "Shorewood", slug: "#contact" },
  { city: "Minooka", slug: "#contact" },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.dsmcleaningsolutions.com/#business",
  name: "DSM Cleaning Solutions",
  description:
    "Family-owned, eco-friendly professional house cleaning service serving Romeoville, Plainfield, and the southwest Chicago suburbs. Fully insured and bonded.",
  url: "https://www.dsmcleaningsolutions.com",
  telephone: "+16302484536",
  priceRange: "$$",
  image: "https://www.dsmcleaningsolutions.com/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Romeoville",
    addressRegion: "IL",
    postalCode: "60446",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.6475,
    longitude: -88.0892,
  },
  areaServed: [
    "Romeoville, IL",
    "Plainfield, IL",
    "Naperville, IL",
    "Bolingbrook, IL",
    "Joliet, IL",
    "Westmont, IL",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Standard House Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Move-Out Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Recurring Maid Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Eco-Friendly Green Cleaning" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DSM Cleaning Solutions",
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah M." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "DSM Cleaning Solutions is absolutely amazing! They transformed my home — every corner was spotless. Being a family-owned business, they truly care about the quality of their work. Highly recommend for anyone in Romeoville!",
      datePublished: "2024-11-15",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mike T." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Used DSM for a move-out clean on my Plainfield home. Got my full security deposit back! They are thorough, professional, and use eco-friendly products. Will definitely use them again.",
      datePublished: "2024-12-02",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jennifer R." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "I have a biweekly cleaning with DSM and I couldn't be happier. The team is reliable, trustworthy, and my house has never looked better. I love that they use green cleaning products — safe for my kids and pets!",
      datePublished: "2025-01-10",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* 5-Star Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
              <span className="text-yellow-300 text-lg">★★★★★</span>
              <span className="text-sm font-medium">5-Star Rated in Romeoville &amp; Plainfield</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Professional House Cleaning Services in Romeoville, IL
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Family-owned and eco-friendly cleaning you can trust. Fully insured, satisfaction guaranteed,
              and ready to make your home shine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-block bg-white text-brand-green font-bold py-4 px-8 rounded-lg hover:bg-brand-green-50 transition-colors text-lg text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+16302484536"
                className="inline-block bg-transparent text-white font-bold py-4 px-8 rounded-lg border-2 border-white hover:bg-white/10 transition-colors text-lg text-center"
              >
                📞 Call (630) 248-4536
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "👨‍👩‍👧", label: "Family Owned", desc: "Local & personal service" },
              { icon: "🛡️", label: "Fully Insured", desc: "Licensed and bonded" },
              { icon: "🌿", label: "Eco-Friendly", desc: "Safe for kids & pets" },
              { icon: "✅", label: "Satisfaction Guaranteed", desc: "We re-clean if needed" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span className="text-4xl">{item.icon}</span>
                <p className="font-bold text-gray-900">{item.label}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Cleaning Services</h2>
            <p className="section-subheading mx-auto">
              From one-time deep cleans to recurring maid service — we have a plan for every home and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.slug}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-green-100 transition-all group"
              >
                <span className="text-4xl block mb-4">{service.icon}</span>
                <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
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

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">How It Works</h2>
            <p className="section-subheading mx-auto">
              Getting a clean home has never been easier — just 3 simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              {
                step: "1",
                title: "Book Online",
                desc: "Fill out our quick form or call us. Tell us about your home and which service you need. We'll confirm your appointment fast.",
                icon: "📋",
              },
              {
                step: "2",
                title: "We Show Up",
                desc: "Our professional, background-checked team arrives on time with all eco-friendly supplies and equipment needed.",
                icon: "🚗",
              },
              {
                step: "3",
                title: "You Relax",
                desc: "Come home to a spotlessly clean house. If anything isn't right, we'll fix it — satisfaction is guaranteed.",
                icon: "😊",
              },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                  {item.step}
                </div>
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-brand-green-100" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="#contact" className="btn-primary btn-lg">
              Book Your Cleaning Today
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-16 bg-brand-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What Romeoville Families Are Saying About DSM Cleaning</h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
              <span className="text-gray-600 font-medium">5.0 average · 47+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReviewCard
              name="Sarah M."
              location="Romeoville, IL"
              text="DSM Cleaning Solutions is absolutely amazing! They transformed my home — every corner was spotless. Being a family-owned business, they truly care about the quality of their work. Highly recommend!"
              date="November 2024"
            />
            <ReviewCard
              name="Mike T."
              location="Plainfield, IL"
              text="Used DSM for a move-out clean on my Plainfield home. Got my full security deposit back! They are thorough, professional, and use eco-friendly products. Will definitely use them again."
              date="December 2024"
            />
            <ReviewCard
              name="Jennifer R."
              location="Bolingbrook, IL"
              text="I have a biweekly cleaning with DSM and I couldn't be happier. The team is reliable, trustworthy, and my house has never looked better. Love the eco-friendly products — safe for my kids and dogs!"
              date="January 2025"
            />
          </div>

          <div className="text-center mt-8">
            <Link href="#contact" className="btn-primary">
              Join Our Happy Customers — Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">A Family Business Built on Trust</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                DSM Cleaning Solutions was born right here in Romeoville, IL. As a family-owned and operated
                cleaning company, we understand that inviting someone into your home is a matter of trust —
                and we take that responsibility seriously.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We serve families across Romeoville, Plainfield, and the entire southwest Chicago suburbs. Unlike
                large national chains, we&apos;re your neighbors. We know this community, we live here, and we bring
                genuine care to every home we clean.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our commitment to eco-friendly cleaning means we use non-toxic, biodegradable products that are
                safe for children, pets, and the environment — without sacrificing a single bit of cleaning power.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Years in Business", value: "5+" },
                  { label: "Happy Clients", value: "500+" },
                  { label: "Cities Served", value: "10+" },
                  { label: "Satisfaction Rate", value: "100%" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-brand-green-50 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-brand-green">{stat.value}</p>
                    <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Link href="#contact" className="btn-primary">
                Get Your Free Estimate
              </Link>
            </div>
            <div className="bg-brand-green-50 rounded-2xl p-8 border border-brand-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose DSM Cleaning Solutions?</h3>
              <ul className="space-y-4">
                {[
                  "Family-owned and operated — real people who care",
                  "Fully insured and bonded for your protection",
                  "Eco-friendly, non-toxic cleaning products",
                  "Satisfaction guarantee — we re-clean if needed",
                  "Flexible scheduling: weekly, biweekly, monthly, or one-time",
                  "Online booking and free estimates available",
                  "Serving Romeoville, Plainfield &amp; all southwest suburbs",
                  "Background-checked, professional cleaning teams",
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

      {/* SERVICE AREAS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Cleaning Services Near You</h2>
            <p className="section-subheading mx-auto">
              We proudly serve Romeoville, Plainfield, and the entire southwest Chicago suburban area.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.city}
                href={area.slug}
                className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center text-gray-700 hover:border-brand-green hover:text-brand-green hover:bg-brand-green-50 transition-all font-medium text-sm"
              >
                {area.city}, IL
              </Link>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-6 text-sm">
            Not sure if we serve your area?{" "}
            <a href="tel:+16302484536" className="text-brand-green font-semibold hover:underline">
              Call (630) 248-4536
            </a>{" "}
            and we&apos;ll let you know!
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subheading mx-auto">
              Everything you need to know about our house cleaning services in Romeoville and beyond.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 border border-gray-200 rounded-xl group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-brand-green">
                  <h3 className="text-left pr-4">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-brand-green flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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

      {/* FINAL CTA + CONTACT FORM */}
      <section id="contact" className="py-16 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: CTA copy */}
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">
                Ready for a Spotlessly Clean Home?
              </h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Get a free, no-obligation quote in minutes. We serve Romeoville, Plainfield, Naperville,
                Bolingbrook, and all surrounding southwest suburbs.
              </p>

              <div className="mb-6">
                <a
                  href="tel:+16302484536"
                  className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-brand-green-50 transition-colors"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  (630) 248-4536
                </a>
              </div>

              <div className="space-y-3 text-white/90">
                <div className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Free estimates — no obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✅</span>
                  <span>100% satisfaction guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Fully insured and bonded</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Eco-friendly products</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Family-owned and operated</span>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
