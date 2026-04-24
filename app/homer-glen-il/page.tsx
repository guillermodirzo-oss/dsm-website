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
