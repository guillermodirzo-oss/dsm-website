import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import {
  MAX_RECURRING_DISCOUNT,
  RECURRING_CITIES,
  RECURRING_CITY_LIST,
  RECURRING_FAQS,
  listWithAnd,
  recurringCitySchemas,
  zipList,
  type RecurringCityKey,
} from "@/lib/recurringCities";
import {
  BIWEEKLY_FROM,
  FREQUENCY_DISCOUNTS,
  MONTHLY_FROM,
  WEEKLY_FROM,
  formatDiscount,
} from "@/lib/pricing";
import {
  REVIEW_COUNT,
  REVIEW_RATING,
  reviewAttributionWithCity,
  reviewByName,
} from "@/lib/realReviews";
import { STANDARD_CHECKLIST } from "@/lib/standardChecklist";

/**
 * The recurring ("maid service") city page, /recurring-cleaning-{city}-il.
 * Same section order, classes and styling as the deep cleaning city pages
 * (app/deep-cleaning-naperville-il is the model). All copy, prices and facts
 * come from lib/recurringCities.ts, lib/pricing.ts and lib/realReviews.ts.
 */

const ICONS = {
  person: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  check: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  calendar: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  lock: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  shield:
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
};

function Icon({ path, className }: { path: string; className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

const trustItems = [
  { label: "Same cleaner every visit", icon: ICONS.person },
  { label: "No contracts", icon: ICONS.check },
  { label: "Skip or reschedule free", icon: ICONS.calendar },
  { label: "Price locked 12 months", icon: ICONS.lock },
  { label: "48-hour guarantee", icon: ICONS.shield },
];

const benefits = [
  {
    title: "The same cleaner, every time",
    desc: "You won't get a new face every visit. Your cleaner learns your home, how you like things done, and what matters most to you.",
    icon: ICONS.person,
  },
  {
    title: "No contracts. No fees.",
    desc: "Need to skip a week or move a visit? Just let us know. We never charge to cancel or reschedule.",
    icon: ICONS.calendar,
  },
  {
    title: "Your price is locked for 12 months",
    desc: "The rate you start with is the rate you pay for a full year, as long as your home and schedule stay the same.",
    icon: ICONS.lock,
  },
  {
    title: "Fixed free if we miss something",
    desc: "If anything isn't right, tell us within 48 hours and we'll come back and fix it at no cost.",
    icon: ICONS.shield,
  },
];

const steps = [
  {
    title: "Pick your schedule",
    desc: "Weekly, every two weeks, or monthly. Book online in a couple of minutes.",
  },
  {
    title: "Your discount starts right away",
    desc: "You save from the very first visit. No deep clean required to get started.",
  },
  {
    title: "Same cleaner, on your schedule",
    desc: "We show up on your day. Skip or reschedule anytime at no charge.",
  },
];

// Discounts and "from" prices come from lib/pricing.ts.
const plans = [
  { name: "Weekly", off: formatDiscount(FREQUENCY_DISCOUNTS.weekly), from: WEEKLY_FROM, popular: false },
  { name: "Every two weeks", off: formatDiscount(FREQUENCY_DISCOUNTS.biweekly), from: BIWEEKLY_FROM, popular: true },
  { name: "Monthly", off: formatDiscount(FREQUENCY_DISCOUNTS.monthly), from: MONTHLY_FROM, popular: false },
];

const BOOK_BUTTON =
  "inline-flex items-center justify-center gap-2 font-bold text-white rounded-full px-8 py-4 text-base transition-all hover:opacity-90 active:scale-95 shadow-md";

export default function RecurringCityPage({ city: cityKey }: { city: RecurringCityKey }) {
  const city = RECURRING_CITIES[cityKey];
  const schemas = recurringCitySchemas(city);

  // Reviews are pulled from lib/realReviews.ts by name, word for word.
  const anchorReview = reviewByName("Thomas Cheng");
  const localReview = city.localReviewer ? reviewByName(city.localReviewer) : null;
  // Alina's review is the one in the data that talks about staying on for
  // regular cleanings. A review never appears twice on one page, so a city
  // that already shows its local reviewer under the anchor leaves them out here.
  const blockReviews = ["Donna Slas", "Jae Mac", "Alina"]
    .filter((name) => name !== city.localReviewer)
    .map(reviewByName);

  const nearby = RECURRING_CITY_LIST.filter((c) => c.key !== city.key);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white pt-12 pb-10 md:pt-16 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/recurring-cleaning" className="hover:text-white transition-colors">Recurring Cleaning</Link>
            <span>/</span>
            <span className="text-white/90">{city.name}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-3">
                {`${city.name} Maid Service: Same Cleaner, Every Visit`}
              </h1>
              <p className="text-sm font-semibold mb-4">
                <Link href="/reviews" className="hover:underline" style={{ color: "#FFA869" }}>
                  {`★★★★★ ${REVIEW_RATING} · ${REVIEW_COUNT} Google Reviews`}
                </Link>
              </p>
              <p className="text-white/85 text-lg leading-relaxed mb-4">
                Your house stays clean all week, not just after a big cleaning day. Pick weekly, every two weeks, or monthly. No contracts, and your price is locked for 12 months.
              </p>
              <p className="text-lg font-bold text-white/95 mb-8">
                {`Weekly visits from ${WEEKLY_FROM}. Save up to ${MAX_RECURRING_DISCOUNT} starting with your very first clean.`}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/book" className="inline-flex items-center justify-center gap-2 font-bold text-brand-green bg-white rounded-full px-7 py-3.5 text-base hover:bg-orange-50 transition-colors shadow-md">
                  Book Your First Clean
                </Link>
                <a href="tel:+18152462113" className="inline-flex items-center justify-center gap-2 font-semibold text-white border-2 border-white/60 rounded-full px-7 py-3.5 text-base hover:bg-white/10 transition-colors">
                  (815) 246-2113
                </a>
              </div>
            </div>
            <div className="mt-6 lg:mt-0">
              <Image
                src="/work-photos/living-room-fireplace-hardwood-1200.jpg"
                alt="Furnished living room with a stone fireplace and hardwood floor after recurring house cleaning"
                width={900}
                height={1200}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full rounded-xl object-cover shadow-lg"
                style={{ maxHeight: "340px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {trustItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-brand-green-50 flex items-center justify-center mb-2 text-brand-green">
                  <Icon path={item.icon} className="w-5 h-5" />
                </div>
                <p className="font-bold text-sm text-gray-900">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANCHOR REVIEW */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 md:p-10 relative" style={{ backgroundColor: "#FFF4EE" }}>
            <span className="text-6xl font-serif leading-none absolute top-6 left-8" style={{ color: "#E8622A" }}>&ldquo;</span>
            <blockquote className="pt-8">
              <p className="text-gray-800 text-lg leading-relaxed mb-5 italic">
                {anchorReview.text}
              </p>
              <footer>
                <p className="font-bold text-gray-900">{reviewAttributionWithCity(anchorReview)} <span className="text-amber-400">★★★★★</span></p>
                <p className="text-sm text-gray-400 mt-1">One of our {REVIEW_COUNT} five-star Google reviews</p>
              </footer>
            </blockquote>
          </div>
          {localReview && (
            <p className="text-center text-sm text-gray-600 mt-5">
              <span className="italic">&ldquo;{localReview.text}&rdquo;</span>{" "}
              <span className="font-semibold text-gray-900">{reviewAttributionWithCity(localReview)}</span>{" "}
              <span className="text-amber-400">★★★★★</span>
            </p>
          )}
        </div>
      </section>

      {/* BENEFIT CARDS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{`Why ${city.name} Residents Choose DSM Cleaning Solutions`}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-gray-100 p-6 bg-gray-50 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-brand-green-50 flex items-center justify-center mb-4 text-brand-green">
                  <Icon path={b.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold" style={{ backgroundColor: "#E8622A" }}>
                  {i + 1}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST. The standard checklist, shared with /recurring-cleaning. */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What&apos;s Included Every Visit</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              The same list, every time. See our{" "}
              <Link href="/cleaning-checklist" className="text-brand-green font-semibold hover:underline">full cleaning checklist</Link>{" "}
              for every service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STANDARD_CHECKLIST.map((section) => (
              <div key={section.room} className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-brand-green mb-4 border-b border-brand-green-100 pb-2">{section.room}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/book" className={BOOK_BUTTON} style={{ backgroundColor: "#E8721C" }}>
              Book Your First Clean
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">{`What Recurring Cleaning Costs in ${city.name}`}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl border p-6 text-center relative ${plan.popular ? "border-brand-green shadow-md" : "border-gray-100 shadow-sm"}`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide" style={{ backgroundColor: "#E8622A" }}>
                    Most popular
                  </span>
                )}
                <h3 className="font-bold text-lg text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: "#E8622A" }}>{`${plan.off} off`}</p>
                <p className="text-3xl font-bold text-gray-900">{`from ${plan.from}`}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mb-3 leading-relaxed">
            Your price is based on bedrooms, bathrooms and square footage. See the{" "}
            <Link href="/pricing" className="text-brand-green font-semibold hover:underline">full price list</Link>.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Want a{" "}
            <Link href={city.deepPath} className="text-brand-green font-semibold hover:underline">deeper clean</Link>{" "}
            before your regular visits start? It&apos;s optional, and some clients add one later on.
          </p>
          <Link href="/book" className={BOOK_BUTTON} style={{ backgroundColor: "#E8622A" }}>
            Book Your First Clean
          </Link>
        </div>
      </section>

      {/* REVIEW BLOCK */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">What Our Clients Are Saying</h2>
          <div className={`grid grid-cols-1 gap-6 ${blockReviews.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 max-w-4xl mx-auto"}`}>
            {blockReviews.map((review) => (
              <div key={review.name} className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 relative">
                <span className="text-4xl font-serif leading-none absolute top-4 left-5 text-orange-300">&ldquo;</span>
                <p className="text-gray-700 leading-relaxed text-sm pt-6 mb-4">{review.text}</p>
                <p className="font-semibold text-gray-900 text-sm">{reviewAttributionWithCity(review)}</p>
                <p className="text-amber-400 text-sm">★★★★★</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://g.co/kgs/KFkN2MX" target="_blank" rel="noopener noreferrer" className="text-brand-green font-semibold hover:underline text-sm">
              Read all {REVIEW_COUNT} reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* LOCAL SECTION. Built only from the zip codes and neighborhoods on file for this city. */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 gap-8 items-center ${city.photo ? "md:grid-cols-2" : ""}`}>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{`Maid Service Across ${city.name}`}</h2>
              <p className="text-gray-600 leading-relaxed">
                {`We clean homes on a regular schedule all over ${city.name}, including ${listWithAnd(city.neighborhoods)}. That covers ${city.zips.length === 1 ? "zip code" : "zip codes"} ${listWithAnd(city.zips)}.`}
              </p>
            </div>
            {city.photo && (
              <Image
                src={city.photo.src}
                alt={city.photo.alt}
                width={1920}
                height={2560}
                sizes="(max-width: 768px) 100vw, 400px"
                className="w-full rounded-xl object-cover shadow-sm"
                style={{ maxHeight: "360px" }}
              />
            )}
          </div>
        </div>
      </section>

      {/* FAQ. Collapsed by default. Same array as the FAQPage schema above. */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {RECURRING_FAQS.map((faq) => (
              <details key={faq.q} className="bg-gray-50 border border-gray-200 rounded-xl group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-brand-green list-none">
                  <h3 className="text-left pr-4">{faq.q}</h3>
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA + FORM. Residential HubSpot form, recurring preselected. */}
      <section id="quote-form" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-3">Ready to Stop Cleaning on Your Weekends?</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Book online or send us a quick message. We&apos;ll get your first visit on the calendar.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/book" className="inline-flex items-center justify-center bg-white text-brand-green font-bold text-lg px-7 py-4 rounded-xl hover:bg-orange-50 transition-colors">
                  Book Your First Clean
                </Link>
                <a href="tel:+18152462113" className="inline-flex items-center justify-center font-semibold text-white border-2 border-white/60 rounded-xl px-7 py-4 text-lg hover:bg-white/10 transition-colors">
                  (815) 246-2113
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-6 md:p-8">
              <LeadForm defaultService="Recurring Cleaning" />
            </div>
          </div>
        </div>
      </section>

      {/* NEARBY CITIES */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">We Also Offer Maid Service in Nearby Cities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {nearby.map((other) => (
              <Link key={other.key} href={other.path} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 mb-1">{`Maid Service in ${other.name}`}</h3>
                <p className="text-sm text-gray-600">{`Serving ${zipList(other.zips)}.`}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
