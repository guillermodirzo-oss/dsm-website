import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "lemont-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Lemont IL",
  description:
    "Trusted house cleaning in Lemont, IL — deep cleaning, standard & recurring maid service. Eco-friendly, insured. Family-owned. Free estimate.",
  keywords: [
    "house cleaning Lemont IL",
    "cleaning service Lemont",
    "maid service Lemont IL",
    "deep cleaning Lemont",
    "recurring cleaning Lemont IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/lemont-il" },
};

export default function LemontPage() {
  return (
    <>
      <CityPageTemplate city={city} />

      {/* POPULAR SERVICES IN LEMONT */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Popular Services in Lemont, IL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="/deep-cleaning-lemont-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Lemont</h3>
              <p className="text-sm text-gray-600">Top-to-bottom deep cleaning for Lemont homes in zip code 60439.</p>
            </a>
            <a href="/standard-cleaning-lemont-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Lemont</h3>
              <p className="text-sm text-gray-600">Weekly, biweekly &amp; monthly house cleaning in Lemont.</p>
            </a>
            <a href="/move-out-cleaning-lemont-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Lemont</h3>
              <p className="text-sm text-gray-600">Deposit-back move-out cleaning for Lemont renters &amp; homeowners.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
