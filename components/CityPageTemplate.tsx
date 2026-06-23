import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReviewCard from "@/components/ReviewCard";
import type { CityData } from "@/lib/cityData";

export default function CityPageTemplate({ city }: { city: CityData }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    // @id links this to the canonical business entity in layout.tsx — Google merges them.
    // Address MUST match the actual business location (Romeoville, 60446), not the city served.
    // areaServed communicates which city this page targets for SEO.
    "@id": "https://www.dsmcleaningsolutions.com/#business",
    name: "DSM Cleaning Solutions",
    url: "https://www.dsmcleaningsolutions.com",
    telephone: "+18152462113",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Romeoville",
      addressRegion: "IL",
      postalCode: "60446",
      addressCountry: "US",
    },
    areaServed: `${city.name}, IL`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
      { "@type": "ListItem", position: 2, name: `House Cleaning ${city.name}, IL`, item: `https://www.dsmcleaningsolutions.com/${city.slug}` },
    ],
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">{city.name}, IL</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Professional House Cleaning in {city.name}, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {city.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-brand-green font-bold py-4 px-8 rounded-lg hover:bg-brand-green-50 transition-colors text-lg text-center"
              >
                Get a Free Quote in {city.name}
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
            {[
              `📍 Serving All of ${city.name}, IL`,
              "👨‍👩‍👧 Family Owned",
              "🌿 Eco-Friendly",
              "🛡️ Fully Insured & Bonded",
              "✅ Satisfaction Guaranteed",
            ].map((item) => (
              <span key={item} className="whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">
                Your Local Cleaning Company in {city.name}, IL
              </h2>
              {city.localIntro.map((para, i) => (
                <p key={i} className="text-gray-600 mb-4 leading-relaxed">
                  {para}
                </p>
              ))}
              <Link
                href="/book"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Cleaning in {city.name}
              </Link>
            </div>
            <div className="bg-brand-green-50 rounded-2xl p-8 border border-brand-green-100">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Why {city.name} Families Choose DSM
              </h3>
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
                {city.whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
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
              <h2 className="section-heading text-2xl mb-4">Neighborhoods We Serve in {city.name}</h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                DSM Cleaning Solutions services every neighborhood across {city.name}, IL. No matter which part of the city you call home, our team is ready to deliver a spotless clean.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {city.neighborhoods.map((n) => (
                  <div key={n} className="flex items-center gap-2 text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    {n}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-4">Zip codes served: {city.zips.join(", ")}</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Local Landmarks Near You</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">We&apos;re proud to serve the community around these well-known {city.name} landmarks:</p>
              <div className="space-y-2">
                {city.landmarks.map((l) => (
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
            <h2 className="section-heading">
              Cleaning Services We Offer in {city.name}, IL
            </h2>
            <p className="section-subheading mx-auto">
              From one-time deep cleans to weekly maid service — we have a
              solution for every {city.name} home.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.services.map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-green-100 transition-all group"
              >
                <span className="text-4xl block mb-4">{service.icon}</span>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-brand-green font-semibold text-sm">
                  Learn more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
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
            <h2 className="section-heading">What&apos;s Included in Every Clean</h2>
            <p className="section-subheading mx-auto">Our two most popular services — see exactly what we cover in {city.name} homes.</p>
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
                {["Vacuum all carpets, rugs & floors","Mop all hard-surface floors","Dust furniture, shelves & surfaces","Clean & disinfect bathrooms (toilet, sink, shower/tub)","Wipe kitchen counters, stovetop & appliance exteriors","Clean mirrors throughout","Empty all trash bins","Wipe light switches & door handles","Make beds (optional)"].map(item => (
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
                {["Scrub grout lines in showers & tile","Clean inside oven & microwave","Degrease stovetop, hood vent & burners","Wipe all cabinet fronts & handles","Clean behind & under appliances","Detailed baseboard & door frame cleaning","Vacuum & wipe window sills and inside glass","Clean ceiling fans & light fixtures","Spot-clean walls & switch plates"].map(item => (
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
            <h2 className="section-heading">
              What {city.name} Homeowners Are Saying
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="text-gray-600">5-star rated cleaning service</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {city.reviews.map((review) => (
              <ReviewCard
                key={review.name}
                name={review.name}
                location={review.location}
                text={review.text}
                date={review.date}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">{city.name} House Cleaning FAQs</h2>
          </div>
          <div className="space-y-4">
            {city.faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white border border-gray-200 rounded-xl group"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-brand-green">
                  <h3 className="text-left pr-4">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-brand-green flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            We Also Serve These Nearby Areas
          </h2>
          <div className="flex flex-wrap gap-3 mb-5">
            {city.nearbyAreas.map((area) => (
              <Link
                key={area.city}
                href={area.href}
                className="bg-brand-green-50 border border-brand-green-100 rounded-lg px-4 py-2 text-brand-green-dark font-medium text-sm hover:bg-brand-green hover:text-white transition-all"
              >
                {area.city}, IL
              </Link>
            ))}
          </div>
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm hover:text-brand-green-dark transition-colors"
          >
            View All Service Areas
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">
                Book House Cleaning in {city.name}, IL Today
              </h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Ready for a spotlessly clean home in {city.name}? Whether you need a one-time deep clean, a recurring maid service, or a move-out cleaning, DSM Cleaning Solutions is just a call away. We respond within 1 business day, offer flexible scheduling, and back every clean with our 48-hour satisfaction guarantee. Proudly serving all of {city.name}, IL — zip codes {city.zips.join(" & ")}.
              </p>
              <a
                href="tel:+18152462113"
                className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-brand-green-50 transition-colors mb-6"
              >
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">
                Local · Family-owned · Eco-friendly · Fully insured · Satisfaction
                guaranteed
              </p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get a Free Cleaning Estimate
              </h3>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
