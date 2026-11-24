import Link from "next/link";
import Offer from "@/components/Offer";
import { OFFER_LIST } from "@/lib/offers";
import DateWindow from "@/components/DateWindow";
import { GIFT_PROMO_WINDOW } from "@/lib/giftCards";

/**
 * Every offer running right now, one line each, straight from lib/offers.ts.
 * Used in the homepage hero.
 *
 * Each line sits in its own <Offer> gate, so it comes down at its own
 * deadline with no deploy. When no offer is left the wrapper has nothing in
 * it and `empty:hidden` removes it, margin included.
 *
 * White text on the darkest brand orange (brand-green-darker, #C2410C) is
 * 5.2:1, the same treatment as components/HeroRating.tsx, so it meets WCAG AA
 * on a photo or on the orange gradient.
 */
/** Short names for the compact hero chips. */
const SHORT_NAME: Record<string, string> = { deep: "Deep cleans", moveout: "Move-outs" };

export default function OfferBanner({
  className = "",
  compact = false,
  services,
}: {
  className?: string;
  compact?: boolean;
  /** Only show offers for these services (e.g. ["deep"]). Default: all. */
  services?: string[];
}) {
  const offers = services ? OFFER_LIST.filter((o) => services.includes(o.service)) : OFFER_LIST;
  if (compact) {
    // One row of small chips: "Move-outs: $75 off · MOVE75", or the offer's
    // own chipText when it has no code.
    // Same per-offer gates, so each chip comes down on its own deadline.
    return (
      <div className={`flex flex-wrap items-center justify-center gap-2 empty:hidden ${className}`}>
        {offers.map((offer) => (
          <Offer key={offer.id} service={offer.service}>
            <Link
              href={offer.servicePath}
              className="inline-block rounded-full bg-brand-green-darker px-3 py-1.5 text-xs font-semibold text-white shadow-lg hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {offer.code ? (
                <>
                  {`${SHORT_NAME[offer.service] ?? offer.serviceName}: $${offer.discount} off${offer.bonus ? ` + ${offer.bonus.replace(/ cleaning$/, "")}` : ""} · `}
                  <span className="font-extrabold tracking-wide">{offer.code}</span>
                </>
              ) : (
                offer.chipText ?? `${SHORT_NAME[offer.service] ?? offer.serviceName}: ${offer.description}`
              )}
            </Link>
          </Offer>
        ))}
        {/* Gift cards, Nov 15 to Dec 24 only (lib/giftCards.ts). */}
        <DateWindow startDateISO={GIFT_PROMO_WINDOW.startDateISO} endDateISO={GIFT_PROMO_WINDOW.endDateISO}>
          <Link
            href="/gift-cards"
            className="inline-block rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold shadow-lg hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ color: "#C2410C" }}
          >
            🎁 Gift a clean: cleaning gift cards
          </Link>
        </DateWindow>
      </div>
    );
  }
  return (
    <div className={`flex flex-col items-center gap-2 empty:hidden ${className}`}>
      {offers.map((offer) => (
        <Offer key={offer.id} service={offer.service}>
          <Link
            href={offer.servicePath}
            className="inline-block rounded-2xl bg-brand-green-darker px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {`${offer.serviceName.charAt(0).toUpperCase()}${offer.serviceName.slice(1)}: ${offer.description}.`}
            {offer.code ? (
              <>
                {" Use code "}
                <span className="font-extrabold tracking-wide">{offer.code}</span>
                {` through ${offer.endDate}.`}
              </>
            ) : (
              ` Book by ${offer.endDate}.`
            )}
          </Link>
        </Offer>
      ))}
    </div>
  );
}
