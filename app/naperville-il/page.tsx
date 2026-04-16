import type { Metadata } from "next";
import Link from "next/link";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "naperville-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Naperville IL",
  description:
    "Family-owned house cleaning in Naperville, IL. Deep cleaning, move-out & recurring maid service near you. Eco-friendly & insured. Call for a free estimate.",
  keywords: [
    "house cleaning Naperville IL",
    "cleaning service Naperville",
    "maid service Naperville IL",
    "deep cleaning Naperville",
    "recurring cleaning Naperville IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/naperville-il" },
};

export default function NapervillePage() {
  return (
    <>
      <CityPageTemplate city={city} />
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Popular Services in Naperville, IL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Naperville</h3>
              <p className="text-sm text-gray-600">Top-to-bottom deep cleaning for Naperville homes across all four zip codes.</p>
            </Link>
            <Link href="/standard-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Naperville</h3>
              <p className="text-sm text-gray-600">Weekly, biweekly & monthly house cleaning in Naperville.</p>
            </Link>
            <Link href="/move-out-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Naperville</h3>
              <p className="text-sm text-gray-600">Deposit-back move-out cleaning for Naperville renters & landlords.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
