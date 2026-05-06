import type { Metadata } from "next";
import Link from "next/link";
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
  openGraph: {
    title: "House Cleaning Lockport IL | DSM Cleaning Solutions",
    description:
      "Reliable house cleaning in Lockport, IL — deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & fully insured. Free estimates.",
    url: "https://www.dsmcleaningsolutions.com/lockport-il",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "DSM Cleaning Solutions — House Cleaning in Lockport IL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Cleaning Lockport IL | DSM Cleaning Solutions",
    description: "Reliable house cleaning in Lockport, IL — deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & fully insured.",
    images: ["/hero-image.png"],
  },
};

export default function LockportPage() {
  return (
    <>
      <CityPageTemplate city={city} />

      {/* NEIGHBORHOODS & LANDMARKS */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="section-heading text-3xl md:text-4xl mb-4">Lockport Neighborhoods We Serve</h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                Based in the southwest Chicago suburbs, DSM Cleaning Solutions knows every corner of Lockport. We clean homes throughout every neighborhood — from the newest developments to established subdivisions we&apos;ve served for years.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-5">
                {["Lockport Estates", "Heritage Woods", "Milne Grove", "Downtown Lockport", "Dellwood Park"].map((n) => (
                  <div key={n} className="flex items-center gap-2 text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    {n}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm">Zip code served: 60441</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Local Lockport Landmarks</h3>
              <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                We&apos;re proud to serve the families who live near these well-known local landmarks:
              </p>
              <div className="space-y-2">
                {["Illinois and Michigan Canal", "Dellwood Park", "Lockport Historic District", "Pioneer Settlement"].map((l) => (
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

      {/* POPULAR SERVICES IN LOCKPORT */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Services in Lockport, IL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning-lockport-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Lockport</h3>
              <p className="text-sm text-gray-600">Top-to-bottom deep cleaning for homes throughout 60441.</p>
            </Link>
            <Link href="/standard-cleaning-lockport-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Lockport</h3>
              <p className="text-sm text-gray-600">Weekly, biweekly & monthly recurring cleaning for Lockport homes.</p>
            </Link>
            <Link href="/move-out-cleaning-lockport-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Lockport</h3>
              <p className="text-sm text-gray-600">Deposit-back focused move-out cleaning across Lockport, IL.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
