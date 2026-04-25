import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Deep Cleaning Service Plainfield IL",
  description:
    "Top-to-bottom deep cleaning in Plainfield & Romeoville, IL. We scrub every surface, baseboard & appliance. Eco-friendly & insured. Free estimates.",
  keywords: [
    "deep cleaning Romeoville IL",
    "deep house cleaning Romeoville",
    "first-time deep cleaning Romeoville",
    "detailed house cleaning Romeoville",
    "bathroom and kitchen deep cleaning Romeoville",
    "heavy-duty cleaning service Romeoville",
    "deep clean house service near Romeoville",
    "professional deep cleaners Romeoville",
    "spring cleaning Romeoville IL",
    "deep cleaning Plainfield IL",
  ],
  alternates: {
    canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning",
  },
  openGraph: {
    title: "Deep Cleaning Service Plainfield IL",
    description:
      "Top-to-bottom deep cleaning in Plainfield & Romeoville, IL. We scrub every surface, baseboard & appliance. Eco-friendly & insured. Free estimates.",
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning",
    siteName: "DSM Cleaning Solutions",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is included in a deep cleaning service in Romeoville, IL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our deep cleaning service covers everything in a standard clean plus: scrubbing grout lines, cleaning behind and under appliances, wiping down baseboards and molding, deep-cleaning inside the oven and microwave, scrubbing bathroom tiles and fixtures, cleaning window sills and tracks, and more. It is a top-to-bottom detail clean.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a deep cleaning take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deep cleanings typically take 3–6 hours depending on the size of your home and its current condition. A 2-bedroom apartment may take 3 hours while a large 4-bedroom house could take 6+ hours.",
      },
    },
    {
      "@type": "Question",
      name: "How much does deep cleaning cost in Romeoville, IL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deep cleaning pricing starts around $200 and increases based on home size and condition. Contact us for a free, no-obligation estimate tailored to your specific home.",
      },
    },
    {
      "@type": "Question",
      name: "Is your deep cleaning eco-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We use non-toxic, eco-friendly cleaning products for all our services including deep cleans. Our green products are safe for children, pets, and the environment.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Deep Cleaning",
  name: "Deep Cleaning Service",
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
    "Professional deep cleaning service for homes and apartments in Romeoville, IL and surrounding suburbs. Thorough top-to-bottom cleaning using eco-friendly products.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      description: "Starting at $200. Free estimates available.",
    },
  },
};

const deepCleanChecklist = [
  {
    room: "Kitchen",
    items: [
      "Clean inside and outside of oven",
      "Degrease stovetop, burners, and hood vent",
      "Clean inside microwave",
      "Wipe down all cabinet fronts and handles",
      "Scrub sink and clean faucet",
      "Clean countertops and backsplash",
      "Wipe refrigerator exterior and handles",
      "Mop and scrub floors",
      "Empty and clean trash receptacles",
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Scrub and disinfect toilet (inside and out)",
      "Deep scrub shower and tub with grout cleaning",
      "Clean and polish faucets and fixtures",
      "Wash sink and vanity",
      "Clean and wipe mirrors",
      "Wipe down cabinets and shelves",
      "Mop floors and clean grout lines",
      "Clean towel bars and accessories",
    ],
  },
  {
    room: "Bedrooms & Living Areas",
    items: [
      "Dust all surfaces, shelves, and décor",
      "Wipe baseboards and door frames",
      "Clean window sills and tracks",
      "Vacuum under and behind furniture",
      "Clean ceiling fans and light fixtures",
      "Vacuum and spot-clean upholstery",
      "Dust blinds and wipe windowsills",
      "Wipe light switches and outlets",
    ],
  },
  {
    room: "Whole Home",
    items: [
      "Vacuum all carpets and rugs",
      "Mop all hard floors",
      "Clean interior of all mirrors",
      "Wipe all doors and door frames",
      "Clean all visible baseboards",
      "Dust vents and registers",
      "Empty and re-line trash bins",
    ],
  },
];

const faqs = [
  {
    question: "What is included in a deep cleaning service in Romeoville, IL?",
    answer:
      "Our deep cleaning service covers everything in a standard clean plus: scrubbing grout lines, cleaning behind and under appliances, wiping down baseboards and molding, deep-cleaning inside the oven and microwave, scrubbing bathroom tiles and fixtures, cleaning window sills and tracks, and more.",
  },
  {
    question: "How long does a deep cleaning take?",
    answer:
      "Deep cleanings typically take 3–6 hours depending on the size of your home and its current condition. A 2-bedroom apartment may take 3 hours while a large 4-bedroom house could take 6+ hours.",
  },
  {
    question: "How much does deep cleaning cost in Romeoville, IL?",
    answer:
      "Deep cleaning pricing starts around $200 and increases based on home size and condition. Contact us for a free, no-obligation estimate tailored to your specific home.",
  },
  {
    question: "Is your deep cleaning eco-friendly?",
    answer:
      "Yes! We use non-toxic, eco-friendly cleaning products for all our services including deep cleans. Our green products are safe for children, pets, and the environment.",
  },
];

export default function DeepCleaningPage() {
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
              { "@type": "ListItem", position: 2, name: "Deep Cleaning", item: "https://www.dsmcleaningsolutions.com/deep-cleaning" },
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
              <span className="text-white">Deep Cleaning</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Professional Deep Cleaning Services in Romeoville, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Top-to-bottom, detail-oriented cleaning that reaches every corner your regular cleaning misses.
              Eco-friendly products, fully insured, satisfaction guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://dsmcleaningsolutions.bookingkoala.com/booknow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-brand-green font-bold py-4 px-8 rounded-lg hover:bg-brand-green-50 transition-colors text-lg text-center"
              >
                Get a Free Deep Cleaning Quote
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
            {["✅ Fully Insured & Bonded", "🌿 Eco-Friendly Products", "👨‍👩‍👧 Family Owned", "⭐ 5-Star Rated", "✔️ Satisfaction Guaranteed"].map(
              (item) => (
                <span key={item} className="whitespace-nowrap">{item}</span>
              )
            )}
          </div>
        </div>
      </section>

      {/* WHAT IS DEEP CLEANING */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">What Is a Deep Cleaning?</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A deep cleaning is a thorough, intensive clean that goes far beyond your standard maintenance cleaning.
                While routine cleanings keep your home tidy week to week, a deep cleaning tackles the buildup,
                grime, and hidden dirt that accumulates over time in the corners, crevices, and surfaces you
                don&apos;t always reach.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our professional deep cleaning service in Romeoville covers every room from ceiling to floor —
                scrubbing grout, cleaning behind appliances, degreasing kitchen surfaces, and disinfecting bathrooms
                to a spotless, sanitized standard.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Deep cleaning is ideal as a <strong>first-time clean</strong> before starting recurring service,
                for <strong>spring cleaning</strong>, before or after a home sale, or simply when your home needs
                a thorough reset.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  "Perfect for first-time clients",
                  "Spring cleaning specialist",
                  "Pre/post home sale",
                  "Post-party or event cleanup",
                  "Seasonal deep clean",
                  "Before recurring service starts",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-green-50 rounded-2xl p-8 border border-brand-green-100">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Deep Cleaning vs. Standard Cleaning</h3>
              <div className="space-y-3">
                {[
                  { task: "Vacuuming & mopping", standard: true, deep: true },
                  { task: "Surface wiping & dusting", standard: true, deep: true },
                  { task: "Bathroom disinfecting", standard: true, deep: true },
                  { task: "Kitchen countertops", standard: true, deep: true },
                  { task: "Inside oven & microwave", standard: false, deep: true },
                  { task: "Grout scrubbing", standard: false, deep: true },
                  { task: "Behind/under appliances", standard: false, deep: true },
                  { task: "Baseboards & door frames", standard: false, deep: true },
                  { task: "Window sills & tracks", standard: false, deep: true },
                  { task: "Cabinet fronts detailed", standard: false, deep: true },
                ].map((row) => (
                  <div key={row.task} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{row.task}</span>
                    <div className="flex gap-4">
                      <span className={row.standard ? "text-brand-green" : "text-gray-300"}>
                        {row.standard ? "✓" : "—"}
                      </span>
                      <span className="text-brand-green font-bold">✓</span>
                    </div>
                  </div>
                ))}
                <div className="flex justify-end gap-4 text-xs text-gray-400 pt-1 border-t border-gray-200">
                  <span className="w-6 text-center">Std</span>
                  <span className="w-6 text-center font-bold text-brand-green">Deep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Deep Cleaning Checklist</h2>
            <p className="section-subheading mx-auto">
              Here&apos;s exactly what our Romeoville deep cleaning team covers in your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deepCleanChecklist.map((section) => (
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

      {/* RESULTS GALLERY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Real Results</p>
            <h2 className="section-heading">Deep Cleaning Results You Can See</h2>
            <p className="section-subheading mx-auto">
              Photos from actual deep cleaning jobs we&apos;ve completed in Plainfield, Romeoville, and the surrounding suburbs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/Work%20Pictures/IMG_2033.jpg"
                alt="Glass shower with stone tile grout scrubbed spotless after deep cleaning service in Romeoville IL"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/Work%20Pictures/IMG_2035.jpg"
                alt="Full bathroom with walk-in shower and tub professionally deep cleaned in Plainfield IL"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/Work%20Pictures/IMG_2036.jpg"
                alt="Elegant modern double vanity cleaned and polished to perfection — deep cleaning by DSM Cleaning Solutions"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/Work%20Pictures/IMG_1721.jpg"
                alt="Clean green-tiled shower and tub after deep cleaning service in the southwest Chicago suburbs"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/Work%20Pictures/IMG_1722.jpg"
                alt="Double vanity bathroom deep cleaned and sanitized by DSM Cleaning Solutions in Romeoville IL"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/Work%20Pictures/IMG_1601.jpg"
                alt="Spotless living room with hardwood floors after deep cleaning service in Plainfield IL"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Romeoville Homeowners Choose DSM for Deep Cleaning</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌿",
                title: "Eco-Friendly Deep Clean",
                desc: "We use professional-grade, non-toxic cleaning products that are tough on grime but safe for your family, pets, and the environment.",
              },
              {
                icon: "🛡️",
                title: "Fully Insured & Bonded",
                desc: "Every member of our team is background-checked. Your home is fully protected — we're licensed, insured, and bonded.",
              },
              {
                icon: "✅",
                title: "Satisfaction Guaranteed",
                desc: "Not happy with any part of your deep clean? We'll return and re-clean the area at no charge. That's our promise.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-xl bg-brand-green-50 border border-brand-green-100">
                <span className="text-5xl block mb-4">{item.icon}</span>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 bg-brand-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">What Clients Say About Our Deep Cleaning</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReviewCard
              name="Amanda K."
              location="Romeoville, IL"
              text="DSM did an incredible deep clean on my house before I moved in. The kitchen and bathrooms were spotless — they got into every corner and grout line. I was blown away by the detail."
              date="October 2024"
            />
            <ReviewCard
              name="David P."
              location="Plainfield, IL"
              text="We hired DSM for a spring deep cleaning and couldn't believe the difference. The oven and refrigerator were cleaned inside and out. The team was professional and used eco-friendly products."
              date="April 2024"
            />
            <ReviewCard
              name="Lisa W."
              location="Bolingbrook, IL"
              text="After months of skipping cleaning chores, I called DSM for a deep clean. They spent 5 hours transforming my home. Worth every penny — my house smells fresh and looks brand new!"
              date="September 2024"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Deep Cleaning FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 border border-gray-200 rounded-xl group">
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
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Cleaning Services We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <Link href="/move-out-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out / Move-In Cleaning</h3>
              <p className="text-sm text-gray-600">Get your deposit back with a thorough move-out clean.</p>
            </Link>
            <Link href="/recurring-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Recurring Maid Service</h3>
              <p className="text-sm text-gray-600">Weekly, biweekly, or monthly cleaning plans.</p>
            </Link>
            <Link href="/plainfield-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Cleaning in Plainfield, IL</h3>
              <p className="text-sm text-gray-600">Deep cleaning services available in Plainfield.</p>
            </Link>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">We Offer Deep Cleaning Across the Area</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning-plainfield-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Plainfield, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Plainfield — zip codes 60544 & 60585.</p>
            </Link>
            <Link href="/deep-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Naperville, IL</h3>
              <p className="text-sm text-gray-600">Serving 60540, 60563, 60564 & 60565.</p>
            </Link>
            <Link href="/deep-cleaning-romeoville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Romeoville, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Romeoville (60446) — our home base.</p>
            </Link>
            <Link href="/deep-cleaning-bolingbrook-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Bolingbrook, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Bolingbrook — zip codes 60440 & 60490.</p>
            </Link>
            <Link href="/deep-cleaning-joliet-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Joliet, IL</h3>
              <p className="text-sm text-gray-600">Serving all Joliet zip codes — 60431, 60432, 60433, 60435 & 60436.</p>
            </Link>
            <Link href="/deep-cleaning-lockport-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Lockport, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Lockport (60441).</p>
            </Link>
            <Link href="/deep-cleaning-shorewood-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Shorewood, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Shorewood (60404).</p>
            </Link>
            <Link href="/deep-cleaning-lemont-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Lemont, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Lemont (60439).</p>
            </Link>
            <Link href="/deep-cleaning-homer-glen-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Homer Glen, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Homer Glen (60491).</p>
            </Link>
            <Link href="/deep-cleaning-westmont-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Westmont, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Westmont (60559).</p>
            </Link>
            <Link href="/deep-cleaning-minooka-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Minooka, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Minooka (60447).</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Book Your Deep Cleaning in Romeoville Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Ready for a truly clean home? Get a free quote for deep cleaning in Romeoville, Plainfield,
                and all surrounding southwest suburbs. No obligation — we respond within 1 business day.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-brand-green-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned · Eco-friendly · Fully insured · Satisfaction guaranteed</p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
