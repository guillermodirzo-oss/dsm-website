import type { Metadata } from "next";
import Link from "next/link";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "shorewood-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Shorewood IL",
  description:
    "Quality house cleaning in Shorewood, IL — deep cleaning, standard & recurring service. Family-owned, eco-friendly & insured. Free estimate.",
  keywords: [
    "house cleaning Shorewood IL",
    "cleaning service Shorewood",
    "maid service Shorewood IL",
    "deep cleaning Shorewood",
    "recurring cleaning Shorewood IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/shorewood-il" },
};

export default function ShorewoodPage() {
  return (
    <>
      <CityPageTemplate city={city} />

      {/* POPULAR SERVICES IN SHOREWOOD */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Popular Services in Shorewood, IL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning-shorewood-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Shorewood</h3>
              <p className="text-sm text-gray-600">Top-to-bottom deep cleaning for Shorewood homes in zip code 60404.</p>
            </Link>
            <Link href="/standard-cleaning-shorewood-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Shorewood</h3>
              <p className="text-sm text-gray-600">Weekly, biweekly & monthly house cleaning in Shorewood.</p>
            </Link>
            <Link href="/move-out-cleaning-shorewood-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Shorewood</h3>
              <p className="text-sm text-gray-600">Deposit-back move-out cleaning for Shorewood renters & homeowners.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
