import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "lockport-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Lockport IL",
  description:
    "Reliable house cleaning in Lockport, IL — deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & fully insured. Free estimates.",
  keywords: [
    "house cleaning Lockport IL",
    "cleaning service Lockport",
    "maid service Lockport IL",
    "deep cleaning Lockport",
    "recurring cleaning Lockport IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/lockport-il" },
};

export default function LockportPage() {
  return (
    <>
      <CityPageTemplate city={city} />

      {/* POPULAR SERVICES IN LOCKPORT */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Services in Lockport, IL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="/deep-cleaning-lockport-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-orange-400 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Lockport</h3>
              <p className="text-sm text-gray-600">Top-to-bottom deep cleaning for homes throughout 60441.</p>
            </a>
            <a href="/standard-cleaning-lockport-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-orange-400 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Lockport</h3>
              <p className="text-sm text-gray-600">Weekly, biweekly & monthly recurring cleaning for Lockport homes.</p>
            </a>
            <a href="/move-out-cleaning-lockport-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-orange-400 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Lockport</h3>
              <p className="text-sm text-gray-600">Deposit-back focused move-out cleaning across Lockport, IL.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
