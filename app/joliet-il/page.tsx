import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "joliet-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Joliet IL",
  description:
    "Professional house cleaning in Joliet, IL. Deep cleaning, move-out & recurring maid service. Family-owned, eco-friendly & insured. Free estimates today.",
  keywords: [
    "house cleaning Joliet IL",
    "cleaning service Joliet",
    "maid service Joliet IL",
    "deep cleaning Joliet",
    "recurring cleaning Joliet IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/joliet-il" },
};

export default function JolietPage() {
  return (
    <>
      <CityPageTemplate city={city} />

      {/* POPULAR SERVICES IN JOLIET */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Services in Joliet, IL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="/deep-cleaning-joliet-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-orange-400 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Joliet</h3>
              <p className="text-sm text-gray-600">Top-to-bottom deep cleaning for homes across all Joliet zip codes.</p>
            </a>
            <a href="/standard-cleaning-joliet-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-orange-400 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Joliet</h3>
              <p className="text-sm text-gray-600">Weekly, biweekly & monthly recurring cleaning for Joliet homes.</p>
            </a>
            <a href="/move-out-cleaning-joliet-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-orange-400 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Joliet</h3>
              <p className="text-sm text-gray-600">Deposit-back focused move-out cleaning throughout Joliet, IL.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
