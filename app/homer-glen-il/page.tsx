import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "homer-glen-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Homer Glen IL",
  description:
    "Professional house cleaning in Homer Glen, IL — deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & insured. Free estimates.",
  keywords: [
    "house cleaning Homer Glen IL",
    "cleaning service Homer Glen",
    "maid service Homer Glen IL",
    "deep cleaning Homer Glen",
    "recurring cleaning Homer Glen IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/homer-glen-il" },
};

export default function HomerGlenPage() {
  return (
    <>
      <CityPageTemplate city={city} />

      {/* NEIGHBORHOODS & LANDMARKS */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="section-heading text-3xl md:text-4xl mb-4">Homer Glen Neighborhoods We Serve</h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                Based in the southwest Chicago suburbs, DSM Cleaning Solutions knows every corner of Homer Glen. We clean homes throughout every neighborhood — from the newest developments to established subdivisions we&apos;ve served for years.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-5">
                {["Homer Lakes", "Farmington Lakes", "The Highlands", "Tamarack Fairways", "Homer Glen Estates"].map((n) => (
                  <div key={n} className="flex items-center gap-2 text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    {n}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm">Zip code served: 60491</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Local Homer Glen Landmarks</h3>
              <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                We&apos;re proud to serve the families who live near these well-known local landmarks:
              </p>
              <div className="space-y-2">
                {["Lake Katherine Nature Center", "Homer Glen Public Library", "151st Street Corridor", "Hadley Valley Preserve"].map((l) => (
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

      {/* POPULAR SERVICES IN HOMER GLEN */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Popular Services in Homer Glen, IL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="/deep-cleaning-homer-glen-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Homer Glen</h3>
              <p className="text-sm text-gray-600">Top-to-bottom deep cleaning for Homer Glen homes in zip code 60491.</p>
            </a>
            <a href="/standard-cleaning-homer-glen-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Homer Glen</h3>
              <p className="text-sm text-gray-600">Weekly, biweekly &amp; monthly house cleaning in Homer Glen.</p>
            </a>
            <a href="/move-out-cleaning-homer-glen-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Homer Glen</h3>
              <p className="text-sm text-gray-600">Deposit-back move-out cleaning for Homer Glen renters &amp; homeowners.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
