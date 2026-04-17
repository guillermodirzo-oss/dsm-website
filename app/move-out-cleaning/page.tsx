import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Move Out Cleaning Services Plainfield IL",
  description:
    "Professional move-out & move-in cleaning in Plainfield, IL. Get your full deposit back — guaranteed. Eco-friendly, fully insured. Free estimate.",
  keywords: [
    "move out cleaning Romeoville IL",
    "move in cleaning Romeoville IL",
    "move out cleaners Romeoville",
    "move in move out cleaning Romeoville",
    "apartment move out cleaning Romeoville",
    "empty house cleaning Romeoville",
    "rental cleaning Romeoville IL",
    "real estate cleaning Romeoville",
    "listing cleaning service Romeoville",
    "turnover cleaning Romeoville",
    "move out cleaning Plainfield IL",
  ],
  alternates: {
    canonical: "https://www.dsmcleaningsolutions.com/move-out-cleaning",
  },
  openGraph: {
    title: "Move Out Cleaning Services Plainfield IL",
    description:
      "Professional move-out & move-in cleaning in Plainfield, IL. Get your full deposit back — guaranteed. Eco-friendly, fully insured. Free estimate.",
    url: "https://www.dsmcleaningsolutions.com/move-out-cleaning",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Move Out Cleaning",
  name: "Move-Out and Move-In Cleaning Service",
  provider: {
    "@type": "LocalBusiness",
    name: "DSM Cleaning Solutions",
    telephone: "+18152462113",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Romeoville",
      addressRegion: "IL",
      postalCode: "60446",
    },
  },
  areaServed: ["Romeoville, IL", "Plainfield, IL", "Naperville, IL", "Bolingbrook, IL"],
  description:
    "Professional move-out and move-in cleaning service for homes and apartments in Romeoville and surrounding areas. Designed to help tenants get their full security deposit back.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a move-out cleaning include in Romeoville, IL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our move-out cleaning covers every room in the empty home: deep-cleaning all kitchen appliances (inside and out), scrubbing all bathrooms, cleaning inside all cabinets and drawers, washing windows, cleaning all baseboards and door frames, vacuuming and mopping all floors, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Will a move-out cleaning help me get my security deposit back?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — our move-out cleaning is specifically designed to meet landlord and property manager standards. Many of our clients receive their full security deposit back after using our service.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should I book a move-out cleaning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend booking at least 3–5 days before your move-out date to ensure availability. For last-minute needs, call us directly at (815) 246-2113 and we'll do our best to accommodate you.",
      },
    },
    {
      "@type": "Question",
      name: "Do you clean empty apartments in Romeoville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We specialize in empty apartment and house cleaning for both tenants moving out and tenants moving in. We serve Romeoville, Plainfield, Naperville, Bolingbrook, and surrounding areas.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer move-in cleaning in Plainfield, IL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We serve both Romeoville and Plainfield, IL with full move-in and move-out cleaning services. Starting fresh in a perfectly clean home is our specialty.",
      },
    },
  ],
};

const faqs = [
  {
    question: "What does a move-out cleaning include in Romeoville, IL?",
    answer:
      "Our move-out cleaning covers every room: deep-cleaning all kitchen appliances inside and out, scrubbing all bathrooms, cleaning inside all cabinets and drawers, washing windows, cleaning all baseboards and door frames, vacuuming and mopping all floors, and more.",
  },
  {
    question: "Will a move-out cleaning help me get my security deposit back?",
    answer:
      "Yes — our move-out cleaning is specifically designed to meet landlord and property manager standards. Many of our clients receive their full security deposit back after using our service.",
  },
  {
    question: "How far in advance should I book a move-out cleaning?",
    answer:
      "We recommend booking at least 3–5 days before your move-out date to ensure availability. For last-minute needs, call us directly at (815) 246-2113 and we'll do our best to accommodate you.",
  },
  {
    question: "Do you clean empty apartments in Romeoville?",
    answer:
      "Yes! We specialize in empty apartment and house cleaning for both tenants moving out and new tenants moving in. We serve Romeoville, Plainfield, Naperville, Bolingbrook, and surrounding areas.",
  },
  {
    question: "Do you offer move-in cleaning in Plainfield, IL?",
    answer:
      "Absolutely. We serve both Romeoville and Plainfield, IL with full move-in and move-out cleaning services. Starting fresh in a perfectly clean home is our specialty.",
  },
];

const moveOutChecklist = [
  {
    room: "Kitchen",
    items: [
      "Clean inside and outside of oven",
      "Wipe down stovetop, burners, and drip pans",
      "Clean inside and outside of refrigerator",
      "Clean inside microwave (inside/outside/underneath)",
      "Scrub sink and polish faucet",
      "Wipe all cabinet fronts and clean inside",
      "Clean countertops and backsplash thoroughly",
      "Clean dishwasher interior",
      "Mop and scrub floors",
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Scrub and disinfect toilet (inside/outside/base)",
      "Deep scrub shower and tub — including grout",
      "Clean and polish all faucets and fixtures",
      "Scrub and disinfect sink",
      "Clean mirrors and glass",
      "Wipe inside all cabinets and medicine chests",
      "Mop floor and clean grout lines",
      "Wipe down all tile surfaces",
    ],
  },
  {
    room: "Bedrooms & Living Areas",
    items: [
      "Clean inside all closets (walls, shelves, floors)",
      "Wipe all baseboards and door frames",
      "Clean window sills, tracks, and glass",
      "Wipe all light switches and outlet covers",
      "Clean ceiling fans if present",
      "Vacuum all carpets thoroughly",
      "Sweep and mop hard floors",
      "Remove any cobwebs",
    ],
  },
  {
    room: "Whole Home",
    items: [
      "Clean all doors and door knobs",
      "Wipe all windowsills throughout",
      "Dust and wipe all light fixtures",
      "Clean vents and registers",
      "Remove all trash and debris",
      "Final walkthrough inspection",
    ],
  },
];

export default function MoveOutCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
              { "@type": "ListItem", position: 2, name: "Move-Out / Move-In Cleaning", item: "https://www.dsmcleaningsolutions.com/move-out-cleaning" },
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
              <span className="text-white">Move-Out / Move-In Cleaning</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Professional Move-Out &amp; Move-In Cleaning in Romeoville, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get your full security deposit back — or start fresh in your new home. Our thorough
              move-out cleaning is designed to impress even the strictest landlords.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://dsmcleaningsolutions.bookingkoala.com/booknow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-brand-green font-bold py-4 px-8 rounded-lg hover:bg-brand-green-50 transition-colors text-lg text-center"
              >
                Book Move-Out Cleaning
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
            {["💰 Deposit-Back Guarantee", "🏠 Apartments & Houses", "🌿 Eco-Friendly", "🛡️ Fully Insured", "📅 Flexible Scheduling"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Who Benefits from Our Move-Out Cleaning Service?</h2>
            <p className="section-subheading mx-auto">
              Whether you&apos;re a tenant, landlord, or real estate professional, we have you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏠",
                title: "Renters & Tenants",
                desc: "Moving out of an apartment or rental home in Romeoville or Plainfield? Our thorough move-out clean is designed to meet landlord standards and maximize your chances of a full deposit refund.",
              },
              {
                icon: "🔑",
                title: "Landlords & Property Managers",
                desc: "Preparing a unit for new tenants? We provide fast, reliable rental turnaround cleaning to get your property market-ready and spotlessly clean for new occupants.",
              },
              {
                icon: "🏡",
                title: "Home Buyers & Sellers",
                desc: "Moving into a new home or selling your current one? Our move-in cleaning ensures you start fresh, while our listing cleans help homes show better and sell faster.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-brand-green-50 rounded-xl p-6 border border-brand-green-100 text-center">
                <span className="text-5xl block mb-4">{item.icon}</span>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Move-Out Cleaning Checklist</h2>
            <p className="section-subheading mx-auto">
              Every corner of your empty home — cleaned to landlord inspection standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moveOutChecklist.map((section) => (
              <div key={section.room} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-brand-green mb-4 border-b border-brand-green-100 pb-2">
                  {section.room}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="section-heading">Move-Out Cleaning Results</h2>
            <p className="section-subheading mx-auto">
              Homes and apartments we&apos;ve cleaned to deposit-back standards across Plainfield, Romeoville, and the southwest suburbs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/Work%20Pictures/IMG_1724.jpg"
                alt="Clean laundry room ready for move-out inspection — move-out cleaning in Romeoville IL"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/Work%20Pictures/IMG_2035.jpg"
                alt="Bathroom with walk-in shower deep cleaned for move-out inspection in Plainfield IL"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/Work%20Pictures/IMG_0224.jpg"
                alt="Empty apartment with spotless parquet floors after professional move-out cleaning"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Move-Out Cleaning Reviews</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReviewCard
              name="Mike T."
              location="Plainfield, IL"
              text="Used DSM for a move-out clean on my Plainfield apartment. Got my FULL security deposit back! They cleaned every corner and even the inside of the oven. Absolutely worth it."
              date="December 2024"
            />
            <ReviewCard
              name="Kayla S."
              location="Romeoville, IL"
              text="I was moving out of my Romeoville rental and stressed about my deposit. DSM came in and made the place look brand new. My landlord was impressed. 100% recommend!"
              date="March 2025"
            />
            <ReviewCard
              name="Tom & Karen B."
              location="Bolingbrook, IL"
              text="We hired DSM to clean our home before listing it for sale. The house looked incredible — every room was spotless. Our realtor even commented on how clean it was. Sold fast!"
              date="February 2025"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Move-Out Cleaning FAQs</h2>
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

      {/* RELATED SERVICES */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Services You May Need</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <Link href="/deep-cleaning" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning</h3>
              <p className="text-sm text-gray-600">Perfect if your new home needs a thorough first clean.</p>
            </Link>
            <Link href="/recurring-cleaning" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Recurring Maid Service</h3>
              <p className="text-sm text-gray-600">Set up a regular cleaning schedule in your new home.</p>
            </Link>
            <Link href="/plainfield-il" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Plainfield, IL Cleaning</h3>
              <p className="text-sm text-gray-600">Move-out cleaning available throughout Plainfield.</p>
            </Link>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">We Offer Move-Out Cleaning Across the Area</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/move-out-cleaning-plainfield-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Plainfield, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Plainfield — zip codes 60544 & 60585.</p>
            </Link>
            <Link href="/move-out-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Naperville, IL</h3>
              <p className="text-sm text-gray-600">Serving 60540, 60563, 60564 & 60565.</p>
            </Link>
            <Link href="/move-out-cleaning-romeoville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Romeoville, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Romeoville (60446) — our home base.</p>
            </Link>
            <Link href="/move-out-cleaning-bolingbrook-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Bolingbrook, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Bolingbrook — zip codes 60440 & 60490.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Your Move-Out Clean Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Get a free quote for move-out or move-in cleaning in Romeoville, Plainfield, and surrounding
                southwest suburbs. We&apos;re fast, thorough, and landlord-approved.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-brand-green-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned · Fully insured · Deposit-back cleaning · Eco-friendly</p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get a Free Move-Out Cleaning Quote</h3>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
