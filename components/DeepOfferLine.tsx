import Link from "next/link";
import Offer from "@/components/Offer";
import { DEEP_OFFER } from "@/lib/offers";
import { formatPrice } from "@/lib/pricing";

/**
 * The deep cleaning offer in one or two plain sentences, for heroes, pricing
 * sections and the line above the /book form. Every value comes from
 * lib/offers.ts, and the whole thing sits inside <Offer service="deep">, so it
 * comes down on its own on the offer's last day.
 *
 * Holiday Reset + January Lock-In (Nov 12 to Dec 18, 2026): no code and no
 * dollars off. Inside fridge and inside oven come free with a deep clean, and
 * a January recurring start gets its first clean discounted (owner applies it).
 * The "10 spots" line is fixed text, never a counter.
 *
 * variant:
 *  - "pill": white text on the dark orange pill, linked, for photo heroes.
 *  - "text": orange bold text for white sections (pricing headings).
 *  - "note": small grey text, for the line right above a booking form.
 */
export default function DeepOfferLine({
  variant = "pill",
  href = "/book",
  showRecurring = false,
  className = "",
}: {
  variant?: "pill" | "text" | "note";
  href?: string;
  showRecurring?: boolean;
  className?: string;
}) {
  const value = DEEP_OFFER.bonusValue ? ` (a ${formatPrice(DEEP_OFFER.bonusValue)} value)` : "";
  const main = `Holiday Reset: book your deep clean by ${DEEP_OFFER.endDate} and we clean inside the fridge and oven free${value}. Only ${DEEP_OFFER.spots} holiday spots.`;
  const recurring =
    DEEP_OFFER.recurringOffLabel && DEEP_OFFER.recurringStartMonth
      ? `Pick a ${DEEP_OFFER.recurringStartMonth} start for recurring cleaning and your first recurring clean is ${DEEP_OFFER.recurringOffLabel} off, with your rate locked for 12 months.`
      : "";

  if (variant === "pill") {
    return (
      <Offer service="deep">
        <div className={className}>
          <Link
            href={href}
            className="inline-block rounded-2xl bg-brand-green-darker px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg hover:underline"
          >
            {main}
            {showRecurring && recurring ? ` ${recurring}` : ""}
          </Link>
        </div>
      </Offer>
    );
  }

  if (variant === "text") {
    return (
      <Offer service="deep">
        <p className={`text-sm font-bold ${className}`} style={{ color: "#E8622A" }}>
          {main}
          {showRecurring && recurring ? <span className="block font-semibold text-gray-600 mt-1">{recurring}</span> : null}
        </p>
      </Offer>
    );
  }

  return (
    <Offer service="deep">
      <p className={`text-xs md:text-sm text-gray-600 leading-snug ${className}`}>
        <strong className="text-gray-800">{main}</strong>
        {showRecurring && recurring ? ` ${recurring}` : ""}
      </p>
    </Offer>
  );
}
