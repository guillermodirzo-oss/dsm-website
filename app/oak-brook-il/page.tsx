import type { Metadata } from "next";
import Link from "next/link";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "oak-brook-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Oak Brook IL",
  description:
    "Expert house cleaning in Oak Brook, IL — deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & fully insured. Free estimates.",
  keywords: [
    "house cleaning Oak Brook IL",
    "cleaning service Oak Brook",
    "maid service Oak Brook IL",
    "deep cleaning Oak Brook",
    "recurring cleaning Oak Brook IL",
    "home cleaning Oak Brook",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/oak-brook-il" },
  openGraph: {
    title: "House Cleaning Oak Brook IL | DSM Cleaning Solutions",
    description:
      "Expert house cleaning in Oak Brook, IL — deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & fully insured. Free estimates.",
    url: "https://www.dsmcleaningsolutions.com/oak-brook-il",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "DSM Cleaning Solutions — House Cleaning in Oak Brook IL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Cleaning Oak Brook IL | DSM Cleaning Solutions",
    description: "Expert house cleaning in Oak Brook, IL — deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & fully insured.",
    images: ["/hero-image.png"],
  },
};

export default function OakBrookPage() {
  return (
    <>
      <CityPageTemplate city={city} />

      {/* NEIGHBORHOODS & LANDMARKS */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="section-heading text-3xl md:text-4xl mb-4">Oak Brook Neighborhoods We Serve</h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                From the prestigious Ginger Creek and Oak Brook Club neighborhoods to executive homes throughout Oak Brook&apos;s premier residential areas, DSM Cleaning Solutions delivers professional, meticulous house cleaning throughout the village.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-5">
                {["Ginger Creek", "Oak Brook Club", "East Oak Brook", "York Woods", "Midwest Club", "York Center"].map((n) => (
                  <div key={n} className="flex items-center gap-2 text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    {n}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm">Zip code served: 60523</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Local Oak Brook Landmarks</h3>
              <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                We&apos;re proud to serve the families who live near these well-known Oak Brook landmarks:
              </p>
              <div className="space-y-2">
                {["Oak Brook Center", "Graue Mill & Museum", "Butler National Golf Club area", "Salt Creek Greenway Trail"].map((l) => (
                  <div key={l} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <span className="text-xl">📍</span>
                    <span className="text-gray-700 font-medium text-sm">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Popular Cleaning Services in Oak Brook, IL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Oak Brook</h3>
              <p className="text-sm text-gray-600">Thorough top-to-bottom deep cleaning for Oak Brook homes — every surface and detail.</p>
            </Link>
            <Link href="/standard-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Recurring Maid Service Oak Brook</h3>
              <p className="text-sm text-gray-600">Weekly, biweekly, or monthly professional cleaning for Oak Brook homes.</p>
            </Link>
            <Link href="/post-construction-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Post-Renovation Cleaning Oak Brook</h3>
              <p className="text-sm text-gray-600">Specialized cleaning after remodels and renovations in Oak Brook luxury properties.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
