import type { Metadata } from "next";
import Link from "next/link";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "downers-grove-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Downers Grove IL",
  description:
    "Professional house cleaning in Downers Grove, IL — deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & fully insured. Free estimates.",
  keywords: [
    "house cleaning Downers Grove IL",
    "cleaning service Downers Grove",
    "maid service Downers Grove IL",
    "deep cleaning Downers Grove",
    "recurring cleaning Downers Grove IL",
    "home cleaning Downers Grove",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/downers-grove-il" },
  openGraph: {
    title: "House Cleaning Downers Grove IL | DSM Cleaning Solutions",
    description:
      "Professional house cleaning in Downers Grove, IL — deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & fully insured. Free estimates.",
    url: "https://www.dsmcleaningsolutions.com/downers-grove-il",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "DSM Cleaning Solutions — House Cleaning in Downers Grove IL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Cleaning Downers Grove IL | DSM Cleaning Solutions",
    description: "Professional house cleaning in Downers Grove, IL — deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & fully insured.",
    images: ["/hero-image.png"],
  },
};

export default function DownersGrovePage() {
  return (
    <>
      <CityPageTemplate city={city} />

      {/* NEIGHBORHOODS & LANDMARKS */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="section-heading text-3xl md:text-4xl mb-4">Downers Grove Neighborhoods We Serve</h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                From the walkable streets near downtown to newer developments in the 60516 zip code, DSM Cleaning Solutions serves every corner of Downers Grove with professional, eco-friendly house cleaning.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-5">
                {["Highland Park", "Orchard Brook", "Dunham Place", "Middaugh", "Belmont Central", "Fairmount"].map((n) => (
                  <div key={n} className="flex items-center gap-2 text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    {n}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm">Zip codes served: 60515 &amp; 60516</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Local Downers Grove Landmarks</h3>
              <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                We&apos;re proud to serve the families who live near these well-known Downers Grove landmarks:
              </p>
              <div className="space-y-2">
                {["Tivoli Theatre", "Lyman Woods Nature Preserve", "Downtown Downers Grove", "Maple Avenue Arts Center"].map((l) => (
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
          <h2 className="text-xl font-bold text-gray-900 mb-5">Popular Cleaning Services in Downers Grove, IL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Downers Grove</h3>
              <p className="text-sm text-gray-600">Top-to-bottom deep cleaning for Downers Grove homes — every corner, appliance, and surface.</p>
            </Link>
            <Link href="/standard-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Recurring Maid Service Downers Grove</h3>
              <p className="text-sm text-gray-600">Weekly, biweekly, or monthly recurring cleaning for Downers Grove homeowners.</p>
            </Link>
            <Link href="/move-out-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning Downers Grove</h3>
              <p className="text-sm text-gray-600">Deposit-back move-out cleaning for Downers Grove homes and apartments.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
