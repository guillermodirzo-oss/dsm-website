import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "House Cleaning Plainfield IL",
  description:
    "DSM Cleaning Solutions serves all of Plainfield, IL — deep cleaning, standard cleaning, move-out & maid service. Family-owned, eco-friendly. Free estimate.",
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
    title: "House Cleaning Plainfield IL",
    description:
      "DSM Cleaning Solutions serves all of Plainfield, IL — deep cleaning, standard cleaning, move-out & maid service. Family-owned, eco-friendly. Free estimate.",
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
  telephone: "+18152462113",
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
    question: "What neighborhoods in Plainfield, IL does DSM serve?",
    answer:
      "We serve all Plainfield neighborhoods including Settlers Ridge, Lakewood Falls, Grande Park, Springbank, Heritage Meadows, and River Run — across both zip codes 60544 and 60585.",
  },
  {
    question: "Are your cleaners background checked in Plainfield?",
    answer:
      "Yes — every member of our cleaning team undergoes a thorough background check before ever entering a client's home. We are also fully insured and bonded on every job.",
  },
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
    link: "/standard-cleaning",
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
    link: "/eco-friendly-cleaning",
  },
  {
    icon: "🏢",
    title: "Apartment Cleaning Plainfield",
    desc: "Professional apartment cleaning for renters and property managers throughout Plainfield.",
    link: "/apartment-cleaning",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
              { "@type": "ListItem", position: 2, name: "House Cleaning Plainfield, IL", item: "https://www.dsmcleaningsolutions.com/plainfield-il" },
            ],
          }),
        }}
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
                href="https://dsmcleaningsolutions.bookingkoala.com/booknow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-brand-green font-bold py-4 px-8 rounded-lg hover:bg-brand-green-50 transition-colors text-lg text-center"
              >
                Get a Free Quote in Plainfield
              </Link>
              <a
                href="tel:+18152462113"
                className="inline-block bg-transparent text-white font-bold py-4 px-8 rounded-lg border-2 border-white hover:bg-white/10 transition-colors text-lg text-center"
              >
                📞 (815) 246-2113
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
                DSM Cleaning Solutions is based right in Romeoville — just minutes from Plainfield. We serve neighborhoods throughout Plainfield including Settlers Ridge, Lakewood Falls, Grande Park, and Springbank. We&apos;re not a national franchise; we&apos;re your local neighbors, and we treat every Plainfield home with the same care we&apos;d want for our own.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Plainfield is one of the fastest-growing communities in the southwest suburbs, and we&apos;re proud to serve its families across zip codes 60544 and 60585. From the Plainfield Historic District area to the Township Park neighborhood and the newest residential developments, we bring the same high standard of professional cleaning to every home.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We use only eco-friendly, non-toxic cleaning products — because Plainfield families deserve a clean home that&apos;s also safe for their kids and pets. Whether you&apos;re in a classic home near Route 30 or a newer build in 60585, we show up prepared with everything we need.
              </p>
              <Link href="https://dsmcleaningsolutions.bookingkoala.com/booknow" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Cleaning in Plainfield
              </Link>
            </div>
            <div className="bg-brand-green-50 rounded-2xl p-8 border border-brand-green-100">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Why Plainfield Families Choose DSM</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {[
                  { icon: "👨‍👩‍👧", label: "Family Owned & Operated" },
                  { icon: "🛡️", label: "Fully Insured & Bonded" },
                  { icon: "🌿", label: "Eco-Friendly Products" },
                  { icon: "✅", label: "48-Hour Satisfaction Guarantee" },
                  { icon: "📅", label: "Available 7 Days a Week" },
                  { icon: "🔍", label: "Background-Checked Team" },
                ].map(item => (
                  <div key={item.label} className="flex flex-col items-center text-center bg-white rounded-xl p-3 border border-orange-100">
                    <span className="text-2xl mb-1">{item.icon}</span>
                    <p className="text-xs font-semibold text-gray-700 leading-tight">{item.label}</p>
                  </div>
                ))}
              </div>
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

      {/* NEIGHBORHOODS */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="section-heading text-2xl mb-4">Neighborhoods We Serve in Plainfield, IL</h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                DSM Cleaning Solutions services every neighborhood across Plainfield. No matter which part of Plainfield you call home, we bring the same professional, eco-friendly clean to your door.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["Settlers Ridge", "Lakewood Falls", "Grande Park", "Springbank", "Heritage Meadows", "River Run"].map((n) => (
                  <div key={n} className="flex items-center gap-2 text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    {n}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-4">Zip codes served: 60544 &amp; 60585</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Local Landmarks Near You</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">We&apos;re proud to serve the Plainfield community around these well-known local landmarks:</p>
              <div className="space-y-2">
                {["Plainfield Historic District", "Plainfield Township Park", "Riverwalk Trail System", "Route 59 Corridor", "119th Street Retail Area"].map((l) => (
                  <div key={l} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100">
                    <span className="text-2xl">📍</span>
                    <span className="text-gray-700 font-medium text-sm">{l}</span>
                  </div>
                ))}
              </div>
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

      {/* WHAT'S INCLUDED */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">What&apos;s Included in Every Plainfield Clean</h2>
            <p className="section-subheading mx-auto">Our two most popular services — see exactly what we cover in your Plainfield home.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-200">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">🏠</span>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">Standard Cleaning</h3>
                  <Link href="/standard-cleaning" className="text-brand-green text-sm font-semibold hover:underline">View full details →</Link>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {["Vacuum all carpets, rugs & floors","Mop all hard-surface floors","Dust furniture, shelves & surfaces","Clean & disinfect bathrooms","Wipe kitchen counters & appliance exteriors","Clean mirrors throughout","Empty all trash bins","Wipe light switches & door handles","Make beds (optional)"].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 rounded-2xl p-7 border border-orange-200">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">🧹</span>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">Deep Cleaning</h3>
                  <Link href="/deep-cleaning" className="text-brand-green text-sm font-semibold hover:underline">View full details →</Link>
                </div>
              </div>
              <p className="text-xs text-brand-green font-bold uppercase tracking-widest mb-3">Everything in Standard, PLUS:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {["Scrub grout lines in showers & tile","Clean inside oven & microwave","Degrease stovetop, hood vent & burners","Wipe all cabinet fronts & handles","Clean behind & under appliances","Detailed baseboard & door frame cleaning","Vacuum & wipe window sills & tracks","Clean ceiling fans & light fixtures","Spot-clean walls & switch plates"].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
              { city: "Naperville", href: "/naperville-il" },
              { city: "Bolingbrook", href: "/bolingbrook-il" },
              { city: "Joliet", href: "/joliet-il" },
              { city: "Westmont", href: "/westmont-il" },
              { city: "Lockport", href: "/lockport-il" },
              { city: "Lemont", href: "/lemont-il" },
              { city: "Homer Glen", href: "/homer-glen-il" },
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
                Ready for a spotlessly clean home in Plainfield, IL? Whether you need a one-time deep clean in Settlers Ridge, recurring maid service in Grande Park, or a move-out cleaning in Lakewood Falls, DSM Cleaning Solutions is just a call away. We respond within 1 business day and back every clean with our 48-hour satisfaction guarantee. Serving all of Plainfield — zip codes 60544 &amp; 60585.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-brand-green-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">Local · Family-owned · Eco-friendly · Fully insured · Satisfaction guaranteed</p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get a Free Cleaning Estimate</h3>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
