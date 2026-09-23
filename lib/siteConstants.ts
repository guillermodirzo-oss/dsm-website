/**
 * Fall 2026 offer terms, plus the review count and rating shown across the
 * site. This is the single place to change either.
 *
 * REVIEW_COUNT and REVIEW_RATING re-export lib/realReviews.ts, which stays
 * the canonical home for review data. lib/pricing.ts's OFFERS object derives
 * its deep/moveout entries from DEEP_OFFER and MOVEOUT_OFFER below, so the
 * live-offer gating (isOfferActive, discountedPrice) and this copy-facing
 * data can never disagree.
 */
export { REVIEW_COUNT, REVIEW_RATING } from "./realReviews";

export const DEEP_OFFER = {
  code: "FALL75",
  discount: 75,
  bonus: "free oven cleaning",
  bonusValue: 40,
  endDate: "November 30",
  endDateISO: "2026-11-30",
  season: "fall",
};

export const MOVEOUT_OFFER = {
  code: "MOVE75",
  discount: 75,
  endDate: "November 30",
  endDateISO: "2026-11-30",
};
