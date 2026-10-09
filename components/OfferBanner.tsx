import Link from "next/link";
import Offer from "@/components/Offer";
import { OFFER_LIST } from "@/lib/offers";

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
export default function OfferBanner({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-2 empty:hidden ${className}`}>
      {OFFER_LIST.map((offer) => (
        <Offer key={offer.code} service={offer.service}>
          <Link
            href={offer.servicePath}
            className="inline-block rounded-2xl bg-brand-green-darker px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {`${offer.serviceName.charAt(0).toUpperCase()}${offer.serviceName.slice(1)}: ${offer.description}. Use code `}
            <span className="font-extrabold tracking-wide">{offer.code}</span>
            {` through ${offer.endDate}.`}
          </Link>
        </Offer>
      ))}
    </div>
  );
}
