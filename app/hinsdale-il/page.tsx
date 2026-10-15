import type { Metadata } from "next";
import { hubCityTitle } from "@/lib/seoTitles";
import Link from "next/link";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities, zipLine } from "@/lib/cityData";
import { OG_IMAGE_ALT } from "@/lib/workPhotos";

const city = cities.find((c) => c.slug === "hinsdale-il")!;

export const metadata: Metadata = {
  title: { absolute: hubCityTitle("Hinsdale") },
  description:
    "Premium house cleaning in Hinsdale, IL: deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & fully insured. Free estimates.",
  keywords: [
    "house cleaning Hinsdale IL",
    "cleaning service Hinsdale",
    "maid service Hinsdale IL",
    "deep cleaning Hinsdale",
    "recurring cleaning Hinsdale IL",
    "home cleaning Hinsdale",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/hinsdale-il" },
  openGraph: {
    title: hubCityTitle("Hinsdale"),
    description:
      "Premium house cleaning in Hinsdale, IL: deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & fully insured. Free estimates.",
    url: "https://www.dsmcleaningsolutions.com/hinsdale-il",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: OG_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: hubCityTitle("Hinsdale"),
    description: "Premium house cleaning in Hinsdale, IL: deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & fully insured.",
    images: ["/hero-image.png"],
  },
};

export default function HinsdalePage() {
  return (
    <>
      <CityPageTemplate city={city} />

      {/* ZIP CODES & LANDMARKS */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="section-heading text-3xl md:text-4xl mb-4">Hinsdale Zip Codes We Serve</h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                From historic homes to wooded estates, DSM Cleaning Solutions provides professional, eco-friendly cleaning throughout every neighborhood in this prestigious DuPage County community.
              </p>
              {/* Zip codes only: the owner cannot confirm any neighborhood names. */}
              <p className="text-gray-700 leading-relaxed">{zipLine("Hinsdale")}</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Local Hinsdale Landmarks</h3>
              <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                We&apos;re proud to serve the families who live near these well-known Hinsdale landmarks:
              </p>
              <div className="space-y-2">
                {["Fullersburg Woods Nature Education Center", "Graue Mill & Museum", "Downtown Hinsdale", "Katherine Legge Memorial Park"].map((l) => (
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
          <h2 className="text-xl font-bold text-gray-900 mb-5">Popular Cleaning Services in Hinsdale, IL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning-hinsdale-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Hinsdale</h3>
              <p className="text-sm text-gray-600">Careful deep cleaning for Hinsdale homes, from grout lines to window sills.</p>
            </Link>
            <Link href="/recurring-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Recurring Maid Service Hinsdale</h3>
              <p className="text-sm text-gray-600">Weekly, biweekly, or monthly cleaning for Hinsdale homeowners. Consistent, professional.</p>
            </Link>
            <Link href="/move-out-cleaning-hinsdale-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-In / Move-Out Cleaning Hinsdale</h3>
              <p className="text-sm text-gray-600">Deposit-back move-out cleaning, or a fresh move-in clean before you settle into your Hinsdale home.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
