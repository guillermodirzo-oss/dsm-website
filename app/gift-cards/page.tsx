import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import ReviewCard from "@/components/ReviewCard";
import { REVIEW_COUNT, REVIEW_RATING, reviewAttributionWithCity, reviewByName } from "@/lib/realReviews";
import { formatPrice } from "@/lib/pricing";
import { DEFAULT_GIFT_SIZE, GIFT_CARD_MIN, GIFT_SIZES, giftAmount } from "@/lib/giftCards";
import { DEEP_OFFER } from "@/lib/offers";

/**
 * /gift-cards: "Gift a Clean" (CEO brief, Nov 10 2026).
 *
 * A gift buyer doesn't know the home's size, so the page sells by Small,
 * Medium and Large. Every amount comes from lib/giftCards.ts, which runs the
 * BookingKoala rate formula in lib/pricing.ts for the top of each size. The
 * buyer types the amount from the table into BookingKoala's gift card form.
 *
 * The form embed below is exactly what BookingKoala gave us, and the build
 * checks it (scripts/guard/rules.mjs GIFT_EMBED). Never edit it.
 *
 * Nothing on this page expires with an offer, so it needs no revalidate.
 */

// Keeps the old page's "Romeoville" keyword, which it ranked on.
const TITLE = "House Cleaning Gift Cards Romeoville IL | Gift a Clean Home";
const DESCRIPTION =
  "Give a house cleaning gift card from a local family team in Romeoville. Pick a home size, pick a standard or deep clean, and they book the day.";
const URL = "https://www.dsmcleaningsolutions.com/gift-cards";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: "Gift a Clean Home | DSM Cleaning Solutions",
    description: DESCRIPTION,
    url: URL,
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "House cleaning gift cards from DSM Cleaning Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift a Clean Home | DSM Cleaning Solutions",
    description: DESCRIPTION,
    images: ["/hero-image.png"],
  },
};

const ORANGE = "#E8622A";
const FORM_ANCHOR = "gift-form";
const PHONE = "(815) 246-2113";
const SMS_HREF = "sms:+18152462113";

const DEFAULT_SIZE = GIFT_SIZES.find((s) => s.id === DEFAULT_GIFT_SIZE)!;
const RECURRING_OFF = DEEP_OFFER.recurringOffLabel ?? "25%";

const FAQS: { q: string; a: string }[] = [
  {
    q: "What if their home is bigger than the size I picked?",
    a: "No problem. The card comes off their total when they book, and they pay the difference. Nobody gets turned away.",
  },
  {
    q: "What if their home is smaller?",
    a: "Whatever's left on the card stays on it as credit for their next cleaning.",
  },
  {
    q: "Does the gift card expire?",
    a: "It's good for at least 5 years from the day you buy it.",
  },
  {
    q: "How do they book?",
    a: `They get an email with their gift card code. They book online, pick their day and enter the code at checkout. Or they can text us at ${PHONE} and we'll book it for them.`,
  },
  {
    q: "Can it cover extras like inside the oven or fridge?",
    a: "Yes. The card works on the whole booking, extras included. They just come out of the balance.",
  },
  {
    q: "Can I gift a recurring plan?",
    a: `Gift a clean. If they love it and start recurring cleaning, their first recurring clean is ${RECURRING_OFF} off, and their rate is locked for 12 months.`,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Gift Cards", item: URL },
  ],
};

export default function GiftCardsPage() {
  const reviews = ["Courtney Horne", "Michelle Gillespie", "Jan Forster"].map(reviewByName);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section
        className="px-4 pt-10 pb-12 md:pt-16 md:pb-16 text-white text-center"
        style={{ background: "linear-gradient(135deg, #E8721C 0%, #c45a10 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs sm:text-sm mb-4 opacity-80 flex items-center justify-center gap-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Gift Cards</span>
          </nav>
          <h1 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-orange-100 mb-3">
            House Cleaning Gift Cards
          </h1>
          <p className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight mb-4">
            Give the Gift of a Clean Home.
          </p>
          <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto leading-relaxed mb-5">
            For new parents, busy families, or the parent who has everything. They pick the day, and our family team does the cleaning.
          </p>
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 rounded-full bg-black/15 px-4 py-1.5 text-sm font-semibold mb-6 hover:bg-black/25 transition"
          >
            <span className="text-yellow-300">★★★★★</span>
            {REVIEW_RATING} · {REVIEW_COUNT} Google Reviews
          </Link>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#sizes"
              className="inline-block font-extrabold text-base py-4 px-9 rounded-full bg-white shadow-xl active:scale-95 transition"
              style={{ color: "#C2410C" }}
            >
              Pick a Size
            </a>
            <a
              href={`#${FORM_ANCHOR}`}
              className="inline-block font-bold text-base py-4 px-9 rounded-full border-2 border-white/80 text-white hover:bg-white/10 transition"
            >
              Buy a Gift Card
            </a>
          </div>
        </div>
      </section>

      {/* PICK A SIZE, PICK A CLEAN */}
      <section id="sizes" className="py-12 md:py-16 px-4 bg-white scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-3xl md:text-4xl text-center mb-2">Pick a Size, Pick a Clean</h2>
          <p className="text-center text-gray-500 mb-8">
            Each amount covers a clean for a home of that size. Type it into the gift card form below.
          </p>

          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th scope="col" className="px-3 sm:px-5 py-3 font-bold">Home size</th>
                  <th scope="col" className="px-3 sm:px-5 py-3 font-bold text-right">Standard clean</th>
                  <th scope="col" className="px-3 sm:px-5 py-3 font-bold text-right">Deep clean</th>
                </tr>
              </thead>
              <tbody>
                {GIFT_SIZES.map((size) => (
                  <tr key={size.id} className={`border-t border-gray-100 ${size.id === DEFAULT_GIFT_SIZE ? "bg-orange-50/60" : ""}`}>
                    <th scope="row" className="px-3 sm:px-5 py-4 align-top font-normal">
                      <span className="flex flex-col sm:block items-start font-bold text-gray-900">
                        {size.label}
                        {size.id === DEFAULT_GIFT_SIZE && (
                          <span className="sm:ml-2 mt-1 sm:mt-0 inline-block whitespace-nowrap align-middle rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange-700">
                            Safe pick
                          </span>
                        )}
                      </span>
                      <span className="block text-xs sm:text-sm text-gray-500 leading-snug mt-0.5">{size.counts}</span>
                    </th>
                    <td className="px-3 sm:px-5 py-4 align-top text-right text-lg font-bold text-gray-900 whitespace-nowrap">
                      {formatPrice(giftAmount(size, "standard"))}
                    </td>
                    <td className="px-3 sm:px-5 py-4 align-top text-right text-lg font-bold whitespace-nowrap" style={{ color: ORANGE }}>
                      {formatPrice(giftAmount(size, "deep"))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl bg-gray-50 border border-gray-100 p-5 text-center">
            <p className="font-bold text-gray-900">Not sure of the size? Pick {DEFAULT_SIZE.label}.</p>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              It's the middle size and the safest guess. If their home turns out bigger, they pay the difference when they book. If it&apos;s
              smaller, the rest stays on the card for next time.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="rounded-2xl border border-gray-100 p-5">
              <p className="font-bold text-gray-900 mb-1">Standard clean</p>
              <p className="text-gray-600 leading-relaxed">
                Kitchen, bathrooms, floors and dusting in every room. Good for a home that&apos;s kept up and just needs a break.{" "}
                <Link href="/cleaning-checklist" className="font-semibold hover:underline" style={{ color: "#C2410C" }}>What&apos;s included</Link>
              </p>
            </div>
            <div className="rounded-2xl border border-orange-200 p-5">
              <p className="font-bold text-gray-900 mb-1">Deep clean</p>
              <p className="text-gray-600 leading-relaxed">
                Everything in a standard clean, plus grout, baseboards, door frames, the stovetop and under the furniture. The best
                gift for new parents or a home that&apos;s fallen behind.{" "}
                <Link href="/deep-cleaning" className="font-semibold hover:underline" style={{ color: "#C2410C" }}>See deep cleaning</Link>
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Amounts are priced on the largest home each size covers ({GIFT_SIZES.map((s) => `${s.label}: ${s.coversLine}`).join("; ")}). Gift cards start at {formatPrice(GIFT_CARD_MIN)}.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-2xl md:text-3xl text-center mb-8">How It Works</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { n: "1", t: "Pick the amount", d: "Use the table above. Not sure? Pick Medium." },
              { n: "2", t: "Fill in the form", d: "Type the amount, their name and email, and a note if you want. Pay online." },
              { n: "3", t: "They book their day", d: "They get an email with the code, pick a day online, and come home to a clean house." },
            ].map((step) => (
              <li key={step.n} className="bg-white rounded-2xl border border-gray-100 p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold mb-3" style={{ backgroundColor: ORANGE }}>
                  {step.n}
                </span>
                <p className="font-bold text-gray-900">{step.t}</p>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* THE GIFT CARD FORM. Every "Buy a Gift Card" button lands on the line
          right above it, so the form's first field is on a phone screen. */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div id={FORM_ANCHOR} className="scroll-mt-20 text-center mb-4">
            <h2 className="section-heading text-2xl md:text-3xl mb-2">Buy a Gift Card</h2>
            <p className="text-sm text-gray-600">
              Type the amount from the table: {formatPrice(giftAmount(DEFAULT_SIZE, "standard"))} for a standard clean or{" "}
              {formatPrice(giftAmount(DEFAULT_SIZE, "deep"))} for a deep clean in a {DEFAULT_SIZE.label.toLowerCase()} home.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Questions? Text us at{" "}
              <a href={SMS_HREF} className="font-bold underline underline-offset-2" style={{ color: "#C2410C" }}>{PHONE}</a>
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
            <div
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://dsmcleaningsolutions.bookingkoala.com/gift-cards/send?embed=true" style="border:none;height:1000px;" width="100%" scrolling="no"></iframe>`,
              }}
            />
          </div>
          <Script src="https://dsmcleaningsolutions.bookingkoala.com/resources/embed.js" strategy="afterInteractive" />
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-500 font-medium">
            <span>🛡️ Insured &amp; Bonded</span>
            <span>✅ 48-Hour Guarantee</span>
            <span>👨‍👩‍👧 Family Owned</span>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-2xl md:text-3xl text-center mb-8">What They&apos;ll Come Home To</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {reviews.map((r) => (
              <ReviewCard key={r.name} name={reviewAttributionWithCity(r)} text={r.text} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">Gift Card Questions</h2>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="border border-gray-200 rounded-lg">
                <summary className="px-5 py-4 font-semibold text-gray-800 cursor-pointer hover:bg-gray-50 list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-gray-400 ml-4">+</span>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={`#${FORM_ANCHOR}`}
              className="inline-block font-extrabold text-base text-white py-4 px-9 rounded-full shadow-xl active:scale-95 transition"
              style={{ backgroundColor: ORANGE }}
            >
              Buy a Gift Card
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
