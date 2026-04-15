import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import ReviewCard from "@/components/ReviewCard";
import type { CityData } from "@/lib/cityData";

export default function CityPageTemplate({ city }: { city: CityData }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `DSM Cleaning Solutions — ${city.name}, IL`,
    url: `https://www.dsmcleaningsolutions.com/${city.slug}`,
    telephone: "+18152462113",
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: "IL",
      postalCode: city.zips[0],
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
                href="https://dsmcleaningsolutions.bookingkoala.com/booknow"
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
                href="https://dsmcleaningsolutions.bookingkoala.com/booknow"
                className="btn-primary"
              >
                Book Cleaning in {city.name}
              </Link>
            </div>
            <div className="bg-brand-green-50 rounded-2xl p-8 border border-brand-green-100">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Why {city.name} Families Choose DSM
              </h3>
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
          <div className="flex flex-wrap gap-3">
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
                Get a free, no-obligation estimate for professional house cleaning
                in {city.name}. We respond within 1 business day and offer
                flexible scheduling to fit your life.
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
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
