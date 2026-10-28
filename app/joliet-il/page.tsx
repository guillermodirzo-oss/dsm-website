import type { Metadata } from "next";
import { hubCityTitle } from "@/lib/seoTitles";
import CityHubPage from "@/components/CityHubPage";
import { cities } from "@/lib/cityData";
import { CITY_HUBS } from "@/lib/cityHubs";
import { OG_IMAGE_ALT } from "@/lib/workPhotos";
import { REVIEW_COUNT, REVIEW_RATING } from "@/lib/siteConstants";

// The hero shows FALL75 through <Offer>; regenerate hourly so it drops out on its own.
export const revalidate = 3600;

const city = cities.find((c) => c.slug === "joliet-il")!;
const hub = CITY_HUBS["joliet-il"];

const TITLE = hubCityTitle("Joliet");
const DESCRIPTION = `House cleaning in Joliet from a local husband and wife team. Deep, move-out and recurring cleaning. Rated ${REVIEW_RATING} by ${REVIEW_COUNT} neighbors. Book online.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/joliet-il" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.dsmcleaningsolutions.com/joliet-il",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: OG_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/hero-image.png"],
  },
};

export default function JolietPage() {
  return <CityHubPage city={city} hub={hub} />;
}
