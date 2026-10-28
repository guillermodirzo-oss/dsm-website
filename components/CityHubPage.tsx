import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import ReviewCard from "@/components/ReviewCard";
import HeroRating from "@/components/HeroRating";
import Offer from "@/components/Offer";
import ClientStory from "@/components/ClientStory";
import ServiceVideoSection from "@/components/ServiceVideoSection";
import { StickyMobileBar } from "@/components/HomepageScrollWidgets";
import { reviewAttributionWithCity, reviewByName } from "@/lib/realReviews";
import { clientStoryForHub } from "@/lib/localProof";
import { zipLine, type CityData } from "@/lib/cityData";
import type { CityHub } from "@/lib/cityHubs";
import { listWithAnd } from "@/lib/recurringCities";
import { STANDARD_HIGHLIGHTS } from "@/lib/standardChecklist";
import { DEEP_ADDITIONS } from "@/lib/deepChecklist";
import { DEEP_OFFER } from "@/lib/offers";
import { HOME_VIDEO } from "@/lib/serviceVideos";
import { DEEP_FROM, MOVE_OUT_FROM, STANDARD_FROM, WEEKLY_FROM } from "@/lib/pricing";
import { REVIEW_COUNT, REVIEW_RATING, GOOGLE_PROFILE_URL } from "@/lib/siteConstants";

const ORANGE = "#E8622A";

/** Questions every hub answers. Copy is built from confirmed facts only. */
export function cityHubFaqs(hub: CityHub): { q: string; a: string }[] {
  const n = hub.name;
  return [
    {
      q: `How much does house cleaning cost in ${n}?`,
      a: `A standard clean starts at ${STANDARD_FROM}, a deep clean at ${DEEP_FROM} and a move-out clean at ${MOVE_OUT_FROM}. Recurring visits start at ${WEEKLY_FROM} on a weekly plan. Your price depends on bedrooms, bathrooms and square footage, and the booking form shows the exact total before you book. There's no deposit.`,
    },
    {
      q: `Which parts of ${n} do you clean?`,
      a: `${zipLine(n)} We're based in Romeoville, ${hub.distance} away.`,
    },
    {
      q: `How soon can you clean my ${n} home?`,
      a: "Pick your day in the booking form and you'll see what's open. If you need something sooner than what's showing, call or text (815) 246-2113 and we'll see what we can do.",
    },
    {
      q: "Is it the same team every time?",
      a: "On a recurring plan, yes. The same team comes every visit, and one of us, the owners, is on every job.",
    },
    {
      q: "Do I need to sign a contract?",
      a: "No. There are no contracts on recurring cleaning, and it's free to skip or reschedule a visit. Your recurring price is locked for 12 months as long as your home and schedule stay the same.",
    },
    {
      q: "Do you bring your own cleaning supplies?",
      a: "Yes. We bring everything. If you'd like eco-friendly products, add them when you book.",
    },
  ];
}

export default function CityHubPage({ city, hub }: { city: CityData; hub: CityHub }) {
  const n = hub.name;
  const reviews = hub.reviewers.map(reviewByName);
  const story = clientStoryForHub(hub.slug);
  // A hub only gets this layout with real local proof. Without a client story
  // and its own intro, the page would be the template with a city name swapped
  // in, which is what Google treats as a doorway page. Fail the build instead.
  if (!story || hub.intro.length === 0) {
    throw new Error(`CityHubPage: ${hub.slug} needs a client story in lib/localProof.ts and an intro in lib/cityHubs.ts`);
  }
  const faqs = cityHubFaqs(hub);
  const pageUrl = `https://www.dsmcleaningsolutions.com/${hub.slug}`;

  // Address is always the Romeoville base. areaServed names the city this page targets.
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.dsmcleaningsolutions.com/#business",
    name: "DSM Cleaning Solutions",
    url: "https://www.dsmcleaningsolutions.com",
    telephone: "+18152462113",
    address: {
      "@type": "PostalAddress",
      streetAddress: "402 Tallman Ave",
      addressLocality: "Romeoville",
      addressRegion: "IL",
      postalCode: "60446",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: `${n}, IL` },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
      { "@type": "ListItem", position: 2, name: `House Cleaning ${n}, IL`, item: pageUrl },
    ],
  };

  const services = [
    {
      title: `Deep Cleaning in ${n}`,
      price: `From ${DEEP_FROM}`,
      desc: "The whole house caught up in one visit. Grout, baseboards, door frames, the stovetop and hood, and the floor under the furniture.",
      href: hub.deepPath,
    },
    {
      title: `Move-In & Move-Out Cleaning in ${n}`,
      price: `From ${MOVE_OUT_FROM}`,
      desc: "Inside the oven, fridge, cabinets and drawers. Houses, townhomes and apartments, ready for the walkthrough or your first night in.",
      href: hub.moveOutPath,
    },
    {
      title: `Recurring Maid Service in ${n}`,
      price: `Weekly from ${WEEKLY_FROM}`,
      desc: "The same team every week, every two weeks or once a month. No contract, and your price is locked for 12 months.",
      href: hub.recurringPath,
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO. Same pattern as the homepage and /deep-cleaning: keyword H1 in
          small type, outcome headline, rating, offer, booking button. */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <Image
          src={hub.hero.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: hub.hero.position }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/45 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-6 pb-16 sm:py-0">
          <nav className="text-xs sm:text-sm mb-3 sm:mb-5 opacity-80 flex items-center justify-center gap-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>{`${n}, IL`}</span>
          </nav>

          <h1 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-orange-200 mb-2 sm:mb-3">
            {`House Cleaning in ${n}, IL`}
          </h1>
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight mb-4">
            Come Home to a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-400">
              Clean House.
            </span>
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/85 mb-3 max-w-2xl mx-auto leading-relaxed">
            {`Deep cleaning, move-out cleaning and recurring maid service for ${n} homes. We're a husband and wife team from Romeoville, ${hub.distance} away, and one of us is on every job.`}
          </p>

          <HeroRating href="/reviews" className="mb-3 sm:mb-4">{`${REVIEW_RATING} · ${REVIEW_COUNT} Google Reviews`}</HeroRating>

          <Offer service="deep">
            <div className="mb-4 sm:mb-6">
              <Link
                href="/book"
                className="inline-block rounded-2xl bg-brand-green-darker px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg hover:underline"
              >
                {`Before the holidays: $${DEEP_OFFER.discount} off a deep clean plus ${DEEP_OFFER.bonus}. Use code `}
                <span className="font-extrabold tracking-wide">{DEEP_OFFER.code}</span>
                {` through ${DEEP_OFFER.endDate}.`}
              </Link>
            </div>
          </Offer>

          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Link
              href="/book"
              className="w-full md:w-auto inline-block font-extrabold text-base text-white text-center py-4 px-9 rounded-full active:scale-95 transition-all duration-200 shadow-2xl"
              style={{ backgroundColor: ORANGE, boxShadow: "0 8px 30px rgba(232,98,42,0.5)" }}
            >
              See My Price &amp; Book
            </Link>
            <a href="tel:+18152462113" className="btn-outline-white text-base md:py-4 md:px-9 w-full md:w-auto">
              📞 (815) 246-2113
            </a>
          </div>

          <p className="mt-4 text-white/90 text-sm font-medium">
            No deposit. Exact price before you book. <span className="whitespace-nowrap">48-hour guarantee.</span>
          </p>

          <a href="#video" className="inline-flex items-center gap-2 mt-3 text-white font-semibold text-sm hover:underline underline-offset-4">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
              <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
            </span>
            Meet us in one minute
          </a>
        </div>
      </section>

      {/* REVIEWS UP TOP. The first reviewer is a client in this city. */}
      <section id="reviews" className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Real Google Reviews</p>
            <h2 className="section-heading text-3xl md:text-5xl">What Our Clients Say</h2>
            <Link href="/reviews" className="inline-flex items-center justify-center gap-2 mt-3 hover:opacity-80 transition-opacity">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
              <span className="text-gray-500 font-medium">{REVIEW_RATING} average from {REVIEW_COUNT} Google reviews</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} name={reviewAttributionWithCity(review)} text={review.text} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-brand-green font-semibold hover:underline">
              Read all {REVIEW_COUNT} reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* LOCAL PROOF. A real client in this city, from lib/localProof.ts. */}
      {story && <ClientStory story={story} background="white" />}

      {/* SERVICES. The three money pages for this city, with starting prices. */}
      <section className="py-14 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="section-heading text-3xl md:text-4xl">{`Cleaning Services in ${n}`}</h2>
            <p className="text-gray-500 mt-2">Pick what your house needs. You see the exact price before you book.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all flex flex-col"
              >
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-green transition-colors">{s.title}</h3>
                <p className="text-sm font-bold mt-1" style={{ color: ORANGE }}>{s.price}</p>
                <p className="text-sm text-gray-600 leading-relaxed mt-3 flex-1">{s.desc}</p>
                <span className="mt-4 text-sm font-semibold text-brand-green">See details →</span>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Also available: a one-time standard clean from {STANDARD_FROM},{" "}
            <Link href="/apartment-cleaning" className="text-brand-green font-semibold hover:underline">apartment cleaning</Link>, and{" "}
            <Link href="/eco-friendly-cleaning" className="text-brand-green font-semibold hover:underline">eco-friendly products</Link> as an add-on.
          </p>
        </div>
      </section>

      {/* LOCAL INTRO. Written for this city only (lib/cityHubs.ts). */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-3xl md:text-4xl text-center mb-6">{`Your Local House Cleaners for ${n}`}</h2>
          {hub.intro.map((para) => (
            <p key={para} className="text-gray-600 leading-relaxed mb-4">{para}</p>
          ))}
        </div>
      </section>

      {/* QUICK ANSWERS */}
      <section className="py-14 md:py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-3xl md:text-4xl text-center mb-8 md:mb-10">Quick Answers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">What does it cost?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {`Standard cleans start at ${STANDARD_FROM}, deep cleans at ${DEEP_FROM} and move-out cleans at ${MOVE_OUT_FROM}. The booking form shows your exact total before you book. No deposit.`}
              </p>
              <Link href="/pricing" className="inline-block mt-3 text-sm font-semibold text-brand-green hover:underline">See all prices →</Link>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">{`Which parts of ${n}?`}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {`All of it. ${zipLine(n)} We're based in Romeoville, ${hub.distance} away.`}
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Do I need to be home?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                No. Plenty of our clients leave a key or a lockbox code and come home to a clean house. We lock up when we&apos;re done.
              </p>
              <Link href="/book" className="inline-block mt-3 text-sm font-semibold text-brand-green hover:underline">See my price &amp; book →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO: the one-minute intro (lib/serviceVideos.tsx). */}
      <ServiceVideoSection video={HOME_VIDEO} kicker="Meet DSM" heading="Who Cleans Your House, in One Minute" />

      {/* ZERO RISK. Each line is a confirmed business fact (CONTEXT.md). */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Zero Risk</p>
            <h2 className="section-heading text-3xl md:text-5xl">Booking Us Is the Easy Part</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {[
              { icon: "💵", label: "No Deposit", desc: "Pay on cleaning day by cash, check or card." },
              { icon: "🏷️", label: "Price Before You Book", desc: "You see your exact price before anything is booked." },
              { icon: "🔑", label: "No Need to Be Home", desc: "Leave a key or lockbox code. We lock up when we're done." },
              { icon: "📅", label: "Free to Reschedule", desc: "Plans change. Move your clean at no charge." },
              { icon: "🛡️", label: "Insured & Bonded", desc: "Background-checked, drug-tested team." },
              { icon: "✅", label: "48-Hour Guarantee", desc: "Something missed? Tell us within 48 hours and we come back free." },
            ].map((item) => (
              <div key={item.label} className="bg-orange-50/60 border border-orange-100 rounded-2xl p-4 md:p-6 text-center">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <p className="font-bold text-gray-900 text-sm md:text-base">{item.label}</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/book" className="btn-primary btn-lg">See My Price &amp; Book</Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED. Lists come from lib/standardChecklist.ts and lib/deepChecklist.ts. */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="section-heading text-3xl md:text-4xl">{`What We Clean in ${n} Homes`}</h2>
            <p className="text-gray-500 mt-2">
              Every room, every visit. The{" "}
              <Link href="/cleaning-checklist" className="text-brand-green font-semibold hover:underline">full checklist</Link>{" "}
              compares standard, deep and move-out cleaning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900">Every Clean</h3>
              <Link href="/recurring-cleaning" className="inline-block text-sm font-semibold text-brand-green hover:underline mb-4">See recurring cleaning →</Link>
              <ul className="space-y-2 text-sm text-gray-700">
                {STANDARD_HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-orange-200">
              <h3 className="font-bold text-lg text-gray-900 mb-1">A Deep Clean Adds</h3>
              <p className="text-xs text-gray-500">On top of everything in a regular clean.</p>
              <Link href="/deep-cleaning" className="inline-block text-sm font-semibold text-brand-green hover:underline mb-4">See deep cleaning →</Link>
              <ul className="space-y-2 text-sm text-gray-700">
                {DEEP_ADDITIONS.map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">{`${n} House Cleaning Questions`}</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-lg">
                <summary className="px-5 py-4 font-semibold text-gray-800 cursor-pointer hover:bg-gray-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-gray-400 ml-4">+</span>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
          {hub.guides.length > 0 && (
            <p className="mt-6 text-sm text-gray-600 text-center">
              Helpful guides:{" "}
              {hub.guides.map((g, i) => (
                <span key={g.href}>
                  <Link href={g.href} className="text-brand-green font-semibold hover:underline">{g.label}</Link>
                  {i < hub.guides.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          )}
        </div>
      </section>

      {/* FINAL CTA + FORM */}
      <section
        id="quote-form"
        style={{ background: "linear-gradient(135deg, #E8721C 0%, #c45a10 100%)" }}
        className="py-16 px-4"
      >
        <div className="max-w-2xl mx-auto text-center text-white mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{`Ready for a Clean House in ${n}?`}</h2>
          <p className="opacity-90 mb-5">
            See your exact price and pick your day online. Rather talk it through first? Send the form below and we&apos;ll get back to you fast.
          </p>
          <Link
            href="/book"
            className="inline-block font-extrabold text-base py-4 px-9 rounded-full bg-white shadow-xl active:scale-95 transition-all duration-200"
            style={{ color: "#C2410C" }}
          >
            See My Price &amp; Book
          </Link>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="text-center mb-5">
            <span style={{ color: ORANGE }} className="text-2xl">★★★★★</span>
            <p className="text-sm text-gray-500">{REVIEW_RATING} average from {REVIEW_COUNT} Google reviews</p>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* NEARBY + ZIPS */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-lg font-bold text-gray-700 mb-2">{`We Clean All of ${n}`}</h2>
          <p className="text-sm text-gray-500 mb-6">{`Zip codes ${listWithAnd(city.zips)}, plus these nearby towns:`}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {hub.nearby.map((a) => (
              <Link key={a.href} href={a.href} className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-orange-400 hover:text-brand-green transition">
                {a.city} IL
              </Link>
            ))}
          </div>
          <Link href="/service-areas" className="inline-block mt-6 text-sm font-semibold text-brand-green hover:underline">
            View all service areas →
          </Link>
        </div>
      </section>

      <StickyMobileBar />
    </>
  );
}
