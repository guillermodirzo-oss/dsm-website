/**
 * City hub pages (/{city}-il) that have had the homepage-style conversion
 * pass. Each entry feeds components/CityHubPage.tsx. Cities not listed here
 * still use components/CityPageTemplate.tsx.
 *
 * Every fact here was confirmed by the owner (see CONTEXT.md). Rules:
 *  - Reviews come from lib/realReviews.ts by name. Only reviewers in
 *    OWNER_CONFIRMED_CITIES get a city next to their name.
 *  - The client story comes from lib/localProof.ts.
 *  - No neighborhood names unless the owner confirmed DSM cleans there.
 *  - No promise of how soon we can come (no "same week", no "3 to 5 days").
 */
import type { ZipCity } from "./cityData";

export interface CityHub {
  /** Slug in lib/cityData.ts, e.g. "joliet-il". */
  slug: string;
  name: ZipCity;
  /** "about 10 miles" from the Romeoville base. */
  distance: string;
  hero: { src: string; position: string };
  /** Real Google reviewers, first one leads. */
  reviewers: string[];
  /** City-specific service pages. */
  deepPath: string;
  moveOutPath: string;
  recurringPath: string;
  /** Extra local guides worth linking. */
  guides: { label: string; href: string }[];
  /** Nearby hub pages. */
  nearby: { city: string; href: string }[];
}

export const CITY_HUBS: Record<string, CityHub> = {
  "joliet-il": {
    slug: "joliet-il",
    name: "Joliet",
    distance: "about 10 miles",
    hero: { src: "/work-photos/living-room-fireplace-hardwood.jpg", position: "center 55%" },
    // Jae Mac is an owner-confirmed Joliet client. Michelle names both owners.
    // Alina started with a one-time clean and stayed for regular visits.
    reviewers: ["Jae Mac", "Michelle Gillespie", "Alina"],
    deepPath: "/deep-cleaning-joliet-il",
    moveOutPath: "/move-out-cleaning-joliet-il",
    recurringPath: "/recurring-cleaning-joliet-il",
    guides: [
      { label: "How to get your full security deposit back in Joliet", href: "/blog/how-to-get-security-deposit-back-joliet-il" },
      { label: "What's included in a deep house cleaning", href: "/blog/what-is-included-in-a-deep-house-cleaning" },
    ],
    nearby: [
      { city: "Romeoville", href: "/" },
      { city: "Plainfield", href: "/plainfield-il" },
      { city: "Lockport", href: "/lockport-il" },
      { city: "Shorewood", href: "/shorewood-il" },
      { city: "New Lenox", href: "/new-lenox-il" },
      { city: "Bolingbrook", href: "/bolingbrook-il" },
      { city: "Minooka", href: "/minooka-il" },
    ],
  },
};

export function cityHub(slug: string): CityHub | undefined {
  return CITY_HUBS[slug];
}
