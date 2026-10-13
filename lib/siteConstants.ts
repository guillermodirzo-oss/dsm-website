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
 * The only two Google links on the site. The owner supplied both and
 * confirmed they work (2026-10-12). Never type a Google link into a page.
 *
 * GOOGLE_REVIEW_URL opens the "write a review" box. Every "leave a review"
 * or "write a review" link uses it.
 *
 * GOOGLE_PROFILE_URL opens the Business Profile on Google Maps. Every "read
 * our reviews", "Read all N reviews on Google" or "see us on Google" link
 * uses it, and so does the sameAs list in the LocalBusiness schema in
 * app/layout.tsx.
 */
export const GOOGLE_REVIEW_URL = "https://g.page/r/CX8eP54fxW4_EAE/review";
export const GOOGLE_PROFILE_URL = "https://maps.app.goo.gl/T6UQsNQtBBoKbQXw9";

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
