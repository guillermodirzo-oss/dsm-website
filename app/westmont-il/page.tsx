import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "westmont-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Westmont IL",
  description:
    "Expert house cleaning in Westmont, IL — deep cleaning, standard & recurring maid service. Family-owned, eco-friendly, fully insured. Get a free estimate.",
  keywords: [
    "house cleaning Westmont IL",
    "cleaning service Westmont",
    "maid service Westmont IL",
    "deep cleaning Westmont",
    "recurring cleaning Westmont IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/westmont-il" },
};

export default function WestmontPage() {
  return (
    <>
      <CityPageTemplate city={city} />
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Popular Services in Westmont, IL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="/deep-cleaning-westmont-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Westmont</h3>
              <p className="text-sm text-gray-600">Top-to-bottom deep cleaning for Westmont homes in zip code 60559.</p>
            </a>
            <a href="/standard-cleaning-westmont-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Westmont</h3>
              <p className="text-sm text-gray-600">Recurring maid service and one-time standard cleans in Westmont (60559).</p>
            </a>
            <a href="/move-out-cleaning-westmont-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Westmont</h3>
              <p className="text-sm text-gray-600">Deposit-back move-out cleaning for Westmont rentals and homes.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
