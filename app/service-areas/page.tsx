import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas | Southwest Chicago Suburbs",
  description:
    "DSM Cleaning Solutions serves Romeoville, Plainfield, Naperville, Bolingbrook, Joliet & more in the southwest Chicago suburbs. Get a free quote today.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/service-areas" },
  openGraph: {
    title: "Service Areas | DSM Cleaning Solutions",
    description:
      "DSM Cleaning Solutions serves Romeoville, Plainfield, Naperville, Bolingbrook, Joliet & more in the southwest Chicago suburbs. Get a free quote today.",
    url: "https://www.dsmcleaningsolutions.com/service-areas",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "DSM Cleaning Solutions Service Areas" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
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
  areaServed: [
    "Romeoville, IL",
    "Plainfield, IL",
    "Naperville, IL",
    "Bolingbrook, IL",
    "Joliet, IL",
    "Lockport, IL",
    "Shorewood, IL",
    "New Lenox, IL",
    "Lemont, IL",
    "Homer Glen, IL",
    "Westmont, IL",
    "Minooka, IL",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.dsmcleaningsolutions.com/service-areas" },
  ],
};

const cities = [
  {
    name: "Romeoville",
    zips: ["60446"],
    description:
      "Our home base. We serve every neighborhood in Romeoville including Windstone, Hidden Lakes and Grand Haven.",
    links: [
      { label: "Deep Cleaning", href: "/deep-cleaning-romeoville-il" },
      { label: "Standard Cleaning", href: "/standard-cleaning-romeoville-il" },
      { label: "Move-Out Cleaning", href: "/move-out-cleaning-romeoville-il" },
    ],
    locationPage: "/",
  },
  {
    name: "Plainfield",
    zips: ["60544", "60585"],
    description:
      "Serving Settlers Ridge, Lakewood Falls, Grande Park, Springbank and all Plainfield neighborhoods.",
    links: [
      { label: "Deep Cleaning", href: "/deep-cleaning-plainfield-il" },
      { label: "Standard Cleaning", href: "/standard-cleaning-plainfield-il" },
      { label: "Move-Out Cleaning", href: "/move-out-cleaning-plainfield-il" },
    ],
    locationPage: "/plainfield-il",
  },
  {
    name: "Naperville",
    zips: ["60540", "60563", "60564", "60565"],
    description:
      "Serving Cress Creek, White Eagle, Ashbury, Hobson West and all Naperville neighborhoods.",
    links: [
      { label: "Deep Cleaning", href: "/deep-cleaning-naperville-il" },
      { label: "Standard Cleaning", href: "/standard-cleaning-naperville-il" },
      { label: "Move-Out Cleaning", href: "/move-out-cleaning-naperville-il" },
    ],
    locationPage: "/naperville-il",
  },
  {
    name: "Bolingbrook",
    zips: ["60440", "60490"],
    description:
      "Serving Americana Estates, Pheasant Chase, Stillwater and all Bolingbrook neighborhoods.",
    links: [
      { label: "Deep Cleaning", href: "/deep-cleaning-bolingbrook-il" },
      { label: "Standard Cleaning", href: "/standard-cleaning-bolingbrook-il" },
      { label: "Move-Out Cleaning", href: "/move-out-cleaning-bolingbrook-il" },
    ],
    locationPage: "/bolingbrook-il",
  },
  {
    name: "Joliet",
    zips: ["60431", "60432", "60433", "60435", "60436"],
    description:
      "Serving Ingalls Park, Rock Run, Cathedral Area, Forest Park and all Joliet neighborhoods.",
    links: [
      { label: "Deep Cleaning", href: "/deep-cleaning-joliet-il" },
      { label: "Standard Cleaning", href: "/standard-cleaning-joliet-il" },
      { label: "Move-Out Cleaning", href: "/move-out-cleaning-joliet-il" },
    ],
    locationPage: "/joliet-il",
  },
  {
    name: "Lockport",
    zips: ["60441"],
    description:
      "Serving Lockport Estates, Heritage Woods, Downtown Lockport and all Lockport neighborhoods.",
    links: [
      { label: "Deep Cleaning", href: "/deep-cleaning-lockport-il" },
      { label: "Standard Cleaning", href: "/standard-cleaning-lockport-il" },
      { label: "Move-Out Cleaning", href: "/move-out-cleaning-lockport-il" },
    ],
    locationPage: "/lockport-il",
  },
  {
    name: "Shorewood",
    zips: ["60404"],
    description:
      "Serving Shorewood Glenn, Shorewood Crossing, Towne Center and all Shorewood neighborhoods.",
    links: [
      { label: "Deep Cleaning", href: "/deep-cleaning-shorewood-il" },
      { label: "Standard Cleaning", href: "/standard-cleaning-shorewood-il" },
      { label: "Move-Out Cleaning", href: "/move-out-cleaning-shorewood-il" },
    ],
    locationPage: "/shorewood-il",
  },
  {
    name: "New Lenox",
    zips: ["60451"],
    description:
      "Serving Sanctuary, Spencer Pointe, Grand Crossing and all New Lenox neighborhoods.",
    links: [
      { label: "Deep Cleaning", href: "/deep-cleaning-new-lenox-il" },
      { label: "Standard Cleaning", href: "/standard-cleaning-new-lenox-il" },
      { label: "Move-Out Cleaning", href: "/move-out-cleaning-new-lenox-il" },
    ],
    locationPage: "/new-lenox-il",
  },
  {
    name: "Lemont",
    zips: ["60439"],
    description:
      "Serving Historic Downtown Lemont, Centennial Crossing, Covington Knolls and all Lemont neighborhoods.",
    links: [
      { label: "Deep Cleaning", href: "/deep-cleaning-lemont-il" },
      { label: "Standard Cleaning", href: "/standard-cleaning-lemont-il" },
      { label: "Move-Out Cleaning", href: "/move-out-cleaning-lemont-il" },
    ],
    locationPage: "/lemont-il",
  },
  {
    name: "Homer Glen",
    zips: ["60491"],
    description:
      "Serving Homer Lakes, Farmington Lakes, The Highlands and all Homer Glen neighborhoods.",
    links: [
      { label: "Deep Cleaning", href: "/deep-cleaning-homer-glen-il" },
      { label: "Standard Cleaning", href: "/standard-cleaning-homer-glen-il" },
      { label: "Move-Out Cleaning", href: "/move-out-cleaning-homer-glen-il" },
    ],
    locationPage: "/homer-glen-il",
  },
  {
    name: "Westmont",
    zips: ["60559"],
    description:
      "Serving Westmont Downtown, Oakwood Estates, Waterfall Glen area and all Westmont neighborhoods.",
    links: [
      { label: "Deep Cleaning", href: "/deep-cleaning-westmont-il" },
      { label: "Standard Cleaning", href: "/standard-cleaning-westmont-il" },
      { label: "Move-Out Cleaning", href: "/move-out-cleaning-westmont-il" },
    ],
    locationPage: "/westmont-il",
  },
  {
    name: "Minooka",
    zips: ["60447"],
    description:
      "Serving Minooka Acres, Heritage Fields, Fox Run and all Minooka neighborhoods.",
    links: [
      { label: "Deep Cleaning", href: "/deep-cleaning-minooka-il" },
      { label: "Standard Cleaning", href: "/standard-cleaning-minooka-il" },
      { label: "Move-Out Cleaning", href: "/move-out-cleaning-minooka-il" },
    ],
    locationPage: "/minooka-il",
  },
];

const counties = [
  {
    name: "Will County",
    cities: ["Romeoville", "Plainfield", "Joliet", "Lockport", "Shorewood", "New Lenox", "Minooka"],
  },
  {
    name: "DuPage County",
    cities: ["Naperville", "Bolingbrook", "Westmont", "Lemont"],
  },
  {
    name: "Cook / Grundy Area",
    cities: ["Homer Glen and surrounding communities"],
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── SECTION 1: HERO ── */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">Service Areas</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              House Cleaning Service Areas in the Southwest Chicago Suburbs
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              DSM Cleaning Solutions is based in Romeoville IL and proudly serves homeowners
              across Will County, DuPage County, and Kendall County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-brand-green font-bold py-4 px-8 rounded-lg hover:bg-brand-green-50 transition-colors text-lg text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+18152462113"
                className="inline-block bg-transparent text-white font-bold py-4 px-8 rounded-lg border-2 border-white hover:bg-white/10 transition-colors text-lg text-center"
              >
                Call (815) 246-2113
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: SERVICE AREA GRID ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Cities We Serve</h2>
            <p className="section-subheading mx-auto">
              Click any city to explore all cleaning services available in your area.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden"
              >
                {/* Card header */}
                <div className="bg-gradient-to-r from-brand-green to-brand-green-light px-6 py-4 flex items-start justify-between gap-3">
                  <h3 className="text-white font-bold text-xl leading-tight">{city.name}, IL</h3>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {city.zips.map((zip) => (
                      <span
                        key={zip}
                        className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
                      >
                        {zip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card body */}
                <div className="px-6 py-5 flex flex-col flex-1 gap-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{city.description}</p>

                  {/* Service links */}
                  <div className="space-y-2">
                    {city.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between gap-2 bg-gray-50 border border-gray-100 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:border-brand-green-100 hover:bg-brand-green-50 hover:text-brand-green-dark transition-all group"
                      >
                        <span>{link.label}</span>
                        <svg
                          className="w-4 h-4 text-gray-400 group-hover:text-brand-green flex-shrink-0 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>

                  {/* View all services CTA */}
                  <div className="mt-auto pt-1">
                    <Link
                      href={city.locationPage}
                      className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm hover:text-brand-green-dark transition-colors"
                    >
                      View all {city.name} services
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: COUNTIES WE SERVE ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Counties We Serve</h2>
            <p className="section-subheading mx-auto">
              DSM Cleaning Solutions covers homes across multiple counties in the southwest Chicago suburbs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {counties.map((county) => (
              <div
                key={county.name}
                className="bg-brand-green-50 border border-brand-green-100 rounded-2xl p-7"
              >
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="font-bold text-lg text-gray-900">{county.name}</h3>
                </div>
                <ul className="space-y-2">
                  {county.cities.map((city) => (
                    <li key={city} className="flex items-center gap-2 text-gray-700 text-sm">
                      <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: DON'T SEE YOUR CITY? ── */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading">Don&apos;t See Your City?</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We serve many more communities across the southwest Chicago suburbs. Call us at{" "}
            <a href="tel:+18152462113" className="text-brand-green font-semibold hover:underline">
              (815) 246-2113
            </a>{" "}
            to find out if we serve your area — we are always expanding our service territory.
          </p>
          <a
            href="tel:+18152462113"
            className="inline-flex items-center gap-3 bg-brand-green text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-brand-green-dark transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Us
          </a>
        </div>
      </section>

      {/* ── SECTION 5: BOTTOM CTA ── */}
      <section className="py-16 bg-brand-green">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Book in Your City?</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Family-owned, eco-friendly, fully insured — and based right here in the southwest Chicago suburbs.
            We respond within 1 business day with your free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-brand-green font-bold py-4 px-8 rounded-lg hover:bg-brand-green-50 transition-colors text-lg text-center"
            >
              Get Your Free Quote
            </Link>
            <a
              href="tel:+18152462113"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-bold py-4 px-8 rounded-lg border-2 border-white hover:bg-white/10 transition-colors text-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              (815) 246-2113
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
