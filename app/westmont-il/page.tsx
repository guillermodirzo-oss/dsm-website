import type { Metadata } from "next";
import { hubCityTitle } from "@/lib/seoTitles";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities, zipLine } from "@/lib/cityData";
import { OG_IMAGE_ALT } from "@/lib/workPhotos";

const city = cities.find((c) => c.slug === "westmont-il")!;

export const metadata: Metadata = {
  title: { absolute: hubCityTitle("Westmont") },
  description:
    "Expert house cleaning in Westmont, IL: deep cleaning, standard & recurring maid service. Family-owned, fully insured. Get a free estimate.",
  keywords: [
    "house cleaning Westmont IL",
    "cleaning service Westmont",
    "maid service Westmont IL",
    "deep cleaning Westmont",
    "recurring cleaning Westmont IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/westmont-il" },
  openGraph: {
    title: hubCityTitle("Westmont"),
    description:
      "Expert house cleaning in Westmont, IL: deep cleaning, standard & recurring maid service. Family-owned, fully insured. Get a free estimate.",
    url: "https://www.dsmcleaningsolutions.com/westmont-il",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: OG_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: hubCityTitle("Westmont"),
    description: "Expert house cleaning in Westmont, IL: deep cleaning, standard & recurring maid service. Family-owned, fully insured.",
    images: ["/hero-image.png"],
  },
};

export default function WestmontPage() {
  return (
    <>
      <CityPageTemplate city={city} />

      {/* ZIP CODES & LANDMARKS */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="section-heading text-3xl md:text-4xl mb-4">Westmont Zip Code We Serve</h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                Based in the southwest Chicago suburbs, DSM Cleaning Solutions knows every corner of Westmont. We clean homes throughout every neighborhood, from the newest developments to established subdivisions we&apos;ve served for years.
              </p>
              {/* Zip codes only: the owner cannot confirm any neighborhood names. */}
              <p className="text-gray-700 leading-relaxed">{zipLine("Westmont")}</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Local Westmont Landmarks</h3>
              <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                We&apos;re proud to serve the families who live near these well-known local landmarks:
              </p>
              <div className="space-y-2">
                {["Ty Warner Park", "Westmont Downtown District", "DuPage County Forest Preserves", "Metra Burlington Northern Line"].map((l) => (
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
          <h2 className="text-xl font-bold text-gray-900 mb-5">Popular Services in Westmont, IL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="/deep-cleaning-westmont-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Westmont</h3>
              <p className="text-sm text-gray-600">Window sills, cabinet fronts and grout lines, for Westmont homes in zip code 60559.</p>
            </a>
            <a href="/recurring-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Recurring Cleaning in Westmont</h3>
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
