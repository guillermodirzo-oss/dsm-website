import type { Metadata } from "next";
import { hubCityTitle } from "@/lib/seoTitles";
import Link from "next/link";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities, zipLine } from "@/lib/cityData";
import { OG_IMAGE_ALT } from "@/lib/workPhotos";

const city = cities.find((c) => c.slug === "downers-grove-il")!;

export const metadata: Metadata = {
  title: { absolute: hubCityTitle("Downers Grove") },
  description:
    "Professional house cleaning in Downers Grove, IL: deep cleaning, standard & recurring maid service. Family-owned & fully insured. Free estimates.",
  keywords: [
    "house cleaning Downers Grove IL",
    "cleaning service Downers Grove",
    "maid service Downers Grove IL",
    "deep cleaning Downers Grove",
    "recurring cleaning Downers Grove IL",
    "home cleaning Downers Grove",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/downers-grove-il" },
  openGraph: {
    title: hubCityTitle("Downers Grove"),
    description:
      "Professional house cleaning in Downers Grove, IL: deep cleaning, standard & recurring maid service. Family-owned & fully insured. Free estimates.",
    url: "https://www.dsmcleaningsolutions.com/downers-grove-il",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: OG_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: hubCityTitle("Downers Grove"),
    description: "Professional house cleaning in Downers Grove, IL: deep cleaning, standard & recurring maid service. Family-owned & fully insured.",
    images: ["/hero-image.png"],
  },
};

export default function DownersGrovePage() {
  return (
    <>
      <CityPageTemplate city={city} ownZipSection />

      {/* ZIP CODES & LANDMARKS */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="section-heading text-3xl md:text-4xl mb-4">Downers Grove Zip Codes We Serve</h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                From the walkable streets near downtown to newer developments in the 60516 zip code, DSM Cleaning Solutions serves every corner of Downers Grove with professional house cleaning.
              </p>
              {/* Zip codes only: the owner cannot confirm any neighborhood names. */}
              <p className="text-gray-700 leading-relaxed">{zipLine("Downers Grove")}</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Local Downers Grove Landmarks</h3>
              <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                We&apos;re proud to serve the families who live near these well-known Downers Grove landmarks:
              </p>
              <div className="space-y-2">
                {["Tivoli Theatre", "Lyman Woods Nature Preserve", "Downtown Downers Grove", "Maple Avenue Arts Center"].map((l) => (
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

      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Popular Cleaning Services in Downers Grove, IL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning-downers-grove-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Downers Grove</h3>
              <p className="text-sm text-gray-600">Deep cleaning for Downers Grove homes, including grout, baseboards and inside the microwave.</p>
            </Link>
            <Link href="/recurring-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Recurring Maid Service Downers Grove</h3>
              <p className="text-sm text-gray-600">Weekly, biweekly, or monthly recurring cleaning for Downers Grove homeowners.</p>
            </Link>
            <Link href="/move-out-cleaning-downers-grove-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning Downers Grove</h3>
              <p className="text-sm text-gray-600">Deposit-back move-out cleaning for Downers Grove homes and apartments.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
