import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "bolingbrook-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Bolingbrook IL",
  description:
    "Local house cleaning in Bolingbrook, IL — deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & insured. Call for a free estimate.",
  keywords: [
    "house cleaning Bolingbrook IL",
    "cleaning service Bolingbrook",
    "maid service Bolingbrook IL",
    "deep cleaning Bolingbrook",
    "recurring cleaning Bolingbrook IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/bolingbrook-il" },
  openGraph: {
    title: "House Cleaning Bolingbrook IL",
    description:
      "Local house cleaning in Bolingbrook, IL — deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & insured. Call for a free estimate.",
    url: "https://www.dsmcleaningsolutions.com/bolingbrook-il",
    siteName: "DSM Cleaning Solutions",
  },
};

export default function BolingbrookPage() {
  return (
    <>
      <CityPageTemplate city={city} />

      {/* POPULAR SERVICES IN BOLINGBROOK */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Services in Bolingbrook, IL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="/deep-cleaning-bolingbrook-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-orange-400 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Bolingbrook</h3>
              <p className="text-sm text-gray-600">A thorough top-to-bottom deep clean for homes in 60440 & 60490.</p>
            </a>
            <a href="/standard-cleaning-bolingbrook-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-orange-400 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Bolingbrook</h3>
              <p className="text-sm text-gray-600">Weekly, biweekly & monthly recurring cleaning for Bolingbrook homes.</p>
            </a>
            <a href="/move-out-cleaning-bolingbrook-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-orange-400 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Bolingbrook</h3>
              <p className="text-sm text-gray-600">Deposit-back focused move-out cleaning across Bolingbrook, IL.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
