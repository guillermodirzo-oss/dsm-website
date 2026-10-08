/**
 * Title tags for the city landing pages. One place, so the city pages can
 * never drift apart, and the price and rating in every title follow
 * lib/pricing.ts and lib/realReviews.ts automatically.
 *
 * Format: "{Service} {City} IL | From {starting price} | {rating} Stars"
 *
 * Use these with `title: { absolute: ... }` so the root layout's template does
 * not append "| DSM Cleaning Solutions", and pass the same string to
 * openGraph.title and twitter.title. Every title must stay at 60 characters
 * or fewer; the longest city name today (Downers Grove) lands at 58.
 */
import {
  DEEP_CLEANING_TIERS,
  MOVE_OUT_TIERS,
  STANDARD_CLEANING_TIERS,
  WEEKLY_FROM,
  formatPrice,
  startingPrice,
  type PriceTier,
} from "./pricing";
import { REVIEW_RATING } from "./realReviews";

function cityTitle(service: string, city: string, tiers: PriceTier[]): string {
  return `${service} ${city} IL | From ${formatPrice(startingPrice(tiers))} | ${REVIEW_RATING} Stars`;
}

/** /deep-cleaning-{city}-il */
export function deepCityTitle(city: string): string {
  return cityTitle("Deep Cleaning", city, DEEP_CLEANING_TIERS);
}

/** /move-out-cleaning-{city}-il */
export function moveOutCityTitle(city: string): string {
  return cityTitle("Move-Out Cleaning", city, MOVE_OUT_TIERS);
}

/** /{city}-il hub pages */
export function hubCityTitle(city: string): string {
  return cityTitle("House Cleaning", city, STANDARD_CLEANING_TIERS);
}

/**
 * /recurring-cleaning-{city}-il. Recurring leads with the weekly price, the
 * lowest a client can pay per visit, so its format differs slightly:
 * "Maid Service {City} IL | Weekly From {price} | {rating} Stars".
 */
export function recurringCityTitle(city: string): string {
  return `Maid Service ${city} IL | Weekly From ${WEEKLY_FROM} | ${REVIEW_RATING} Stars`;
}
