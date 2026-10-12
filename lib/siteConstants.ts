/**
 * The review count and rating shown across the site, and the list of cities
 * DSM serves.
 *
 * REVIEW_COUNT and REVIEW_RATING re-export lib/realReviews.ts, which stays
 * the canonical home for review data. Promotions used to live here too; they
 * are in lib/offers.ts now.
 */
export { REVIEW_COUNT, REVIEW_RATING } from "./realReviews";

/**
 * Where every "Read all N reviews on Google" link goes. One constant, so the
 * destination is changed in one place.
 *
 * This is a Google search for the business name and "Reviews", which shows
 * the DSM listing and its reviews. It is a stand-in. The profile link in the
 * LocalBusiness schema (https://g.co/kgs/KFkN2MX) no longer resolves: it
 * returns a "Dynamic Link Not Found" page (checked 2026-10-12), and the old
 * https://g.page/r/dsmcleaningsolutions/review link redirects to the Google
 * homepage. When the owner supplies the real Google Business Profile review
 * link, put it here and in the sameAs list in app/layout.tsx.
 */
export const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=DSM+Cleaning+Solutions+Romeoville+IL+Reviews";

/**
 * The 16 cities DSM serves. app/layout.tsx and /contact both build their
 * LocalBusiness areaServed from this list, so the two can never drift apart.
 * Order matches the layout schema as it was before this list existed.
 */
export const SERVICE_CITIES = [
  "Romeoville",
  "Plainfield",
  "Naperville",
  "Bolingbrook",
  "Joliet",
  "Lockport",
  "Lemont",
  "Homer Glen",
  "New Lenox",
  "Shorewood",
  "Minooka",
  "Westmont",
  "Hinsdale",
  "Oak Brook",
  "Downers Grove",
  "Burr Ridge",
] as const;

/** SERVICE_CITIES as schema.org City entries, for a LocalBusiness areaServed. */
export function serviceAreaSchema() {
  return SERVICE_CITIES.map((name) => ({
    "@type": "City",
    name,
    containedInPlace: { "@type": "State", name: "Illinois" },
  }));
}
