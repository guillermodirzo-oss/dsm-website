/**
 * Offer terms, plus the review count and rating shown across the site. This
 * is the single place to change either.
 *
 * REVIEW_COUNT and REVIEW_RATING re-export lib/realReviews.ts, which stays
 * the canonical home for review data. lib/pricing.ts's OFFERS object derives
 * its deep/moveout entries from DEEP_OFFER and MOVEOUT_OFFER below, so the
 * live-offer gating (isOfferActive, discountedPrice) and this copy-facing
 * data can never disagree.
 *
 * RENEWING AN OFFER: change its endDateISO (the last day it runs) and
 * nothing else. The "through October 31" text and the exact expiry moment
 * (11:59:59 PM Central that night) are both computed from it. Pages drop an
 * expired offer on their own, with no deploy: see components/Offer.tsx.
 */
import { endOfDayIn, monthDayLabel } from "./offerTime";

export { REVIEW_COUNT, REVIEW_RATING } from "./realReviews";

const DEEP_OFFER_LAST_DAY = "2026-11-30";
const MOVEOUT_OFFER_LAST_DAY = "2026-10-31";

export const DEEP_OFFER = {
  code: "FALL75",
  discount: 75,
  bonus: "free oven cleaning",
  bonusValue: 40,
  season: "fall",
  /** Last day the offer runs, Central Time. The one line to change to renew. */
  endDateISO: DEEP_OFFER_LAST_DAY,
  /** "November 30", for "through November 30" copy. */
  endDate: monthDayLabel(DEEP_OFFER_LAST_DAY),
  /** 2026-11-30 11:59:59 PM America/Chicago, as a UTC instant. */
  expiresAt: endOfDayIn(DEEP_OFFER_LAST_DAY).toISOString(),
};

export const MOVEOUT_OFFER = {
  code: "MOVE75",
  discount: 75,
  /** Last day the offer runs, Central Time. The one line to change to renew. */
  endDateISO: MOVEOUT_OFFER_LAST_DAY,
  /** "October 31", for "through October 31" copy. */
  endDate: monthDayLabel(MOVEOUT_OFFER_LAST_DAY),
  /** 2026-10-31 11:59:59 PM America/Chicago, as a UTC instant. */
  expiresAt: endOfDayIn(MOVEOUT_OFFER_LAST_DAY).toISOString(),
};
