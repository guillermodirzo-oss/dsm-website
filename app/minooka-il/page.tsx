import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "minooka-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Minooka IL",
  description:
    "Dependable house cleaning in Minooka, IL — deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & fully insured. Free estimates.",
  keywords: [
    "house cleaning Minooka IL",
    "cleaning service Minooka",
    "maid service Minooka IL",
    "deep cleaning Minooka",
    "recurring cleaning Minooka IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/minooka-il" },
};

export default function MinookaPage() {
  return (
    <>
      <CityPageTemplate city={city} />
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Popular Services in Minooka, IL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="/deep-cleaning-minooka-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Minooka</h3>
              <p className="text-sm text-gray-600">Top-to-bottom deep cleaning for Minooka homes in zip code 60447.</p>
            </a>
            <a href="/standard-cleaning-minooka-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Minooka</h3>
              <p className="text-sm text-gray-600">Recurring maid service and one-time standard cleans in Minooka (60447).</p>
            </a>
            <a href="/move-out-cleaning-minooka-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Minooka</h3>
              <p className="text-sm text-gray-600">Deposit-back move-out cleaning for Minooka new-construction and rentals.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
