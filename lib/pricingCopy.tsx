import React from "react";
import {
  DEEP_CLEANING_TIERS,
  formatPrice,
  startingPrice,
  type PriceTier,
} from "./pricing";

/**
 * Deep cleaning price copy, rendered on 17 deep cleaning pages.
 *
 * Every figure derives from DEEP_CLEANING_TIERS in lib/pricing.ts so this can
 * never drift from the rate card again. The rendered output is byte-identical
 * to the previous hand-written version.
 *
 * The copy lists three mid-range tiers, indexes 1 through 3, and quotes the
 * entry price in prose. It deliberately does not list all six tiers; /pricing
 * is where the full table lives.
 */
const LISTED_TIERS: PriceTier[] = [1, 2, 3].map((i) => DEEP_CLEANING_TIERS[i]);
const ENTRY_TIER = DEEP_CLEANING_TIERS[0];

/** "2 bed" -> "2 Bed", "2.5 bath" -> "2.5 Bath" */
function capUnit(value: string): string {
  return value.replace(/\b(bed|bath)\b/, (m) => m.charAt(0).toUpperCase() + m.slice(1));
}

/** The entry band reads "up to 1,499 sq ft"; every other band reads "lo to hi sq ft". */
function sqftPhrase(sqft: string): string {
  const [lo, hi] = sqft.split("-");
  return lo === "1,000" ? `up to ${hi} sq ft` : `${lo} to ${hi} sq ft`;
}

function rowLabel(tier: PriceTier): string {
  return `${capUnit(tier.beds)} / ${capUnit(tier.baths)}, ${sqftPhrase(tier.sqft)}: ${formatPrice(tier.price)}`;
}

const INTRO = `Deep cleaning starts at ${formatPrice(
  startingPrice(DEEP_CLEANING_TIERS)
)}, which covers a smaller home ${sqftPhrase(
  ENTRY_TIER.sqft
)}. Here’s what it typically looks like as your home gets bigger:`;

const OUTRO =
  "Bigger homes or extra bathrooms will run higher. We price by the job, not by the hour, so you’ll always know your total before we start.";

export const DEEP_CLEANING_PRICING_COPY = (
  <>
    <p>{INTRO}</p>
    <p className="mt-3">
      {LISTED_TIERS.map((tier, i) => (
        <React.Fragment key={`${tier.beds}-${tier.sqft}`}>
          {rowLabel(tier)}
          {i < LISTED_TIERS.length - 1 ? <br /> : null}
        </React.Fragment>
      ))}
    </p>
    <p className="mt-3">{OUTRO}</p>
  </>
);
