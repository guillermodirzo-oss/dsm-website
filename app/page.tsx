import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import ReviewCard from "@/components/ReviewCard";
import { pickReviews, reviewAttribution, REVIEW_COUNT, REVIEW_RATING } from "@/lib/realReviews";
import { ScrollIndicator, StickyMobileBar } from "@/components/HomepageScrollWidgets";

export const metadata: Metadata = {
  title: "House Cleaning Romeoville IL",
  description:
    "Professional house cleaning in Romeoville & Plainfield IL. Family-owned, eco-friendly, fully insured. 5-star rated. Free estimates.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dsmcleaningsolutions.com",
    siteName: "DSM Cleaning Solutions",
    title: "DSM Cleaning Solutions | House Cleaning Romeoville & Plainfield IL",
    description:
      "Professional house cleaning in Romeoville, Plainfield, Naperville & Bolingbrook IL. Family owned, fully insured, 5-star rated. Free estimates.",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "DSM Cleaning Solutions — Professional House Cleaning in Romeoville IL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DSM Cleaning Solutions | House Cleaning Romeoville & Plainfield IL",
    description:
      "Professional house cleaning in Romeoville, Plainfield, Naperville & Bolingbrook IL. Family owned, eco-friendly & insured. Free estimate.",
    images: ["/hero-image.png"],
  },
};

// Three services, not nine. Standard, recurring and one-time are the same
// service at different frequencies, and eco-friendly products are used on
// every job, so neither earned its own card. The six pages dropped from here
// keep their internal links in the footer.
const services = [
  {
    icon: "🏠",
    title: "House Cleaning",
    description:
      "Your regular clean, whether that is every week or just the once. Weekly, biweekly and monthly plans cost less per visit.",
    slug: "/standard-cleaning",
  },
  {
    icon: "🧹",
    title: "Deep Cleaning",
    description:
      "For everything a standard clean skips. Inside the oven, grout lines, baseboards and inside the cabinets.",
    slug: "/deep-cleaning",
  },
  {
    icon: "📦",
    title: "Move-In / Move-Out Cleaning",
    description:
      "Built to pass a landlord walkthrough so you get your deposit back, or to start clean in a place someone else just left.",
    slug: "/move-out-cleaning",
  },
];

const faqs = [
  { question: "How much does house cleaning cost in Romeoville, IL?", answer: "Standard cleaning starts at $160 for a 2-bedroom home. Your price depends on the number of bedrooms and bathrooms and your square footage, and we confirm the exact price with you before anything is booked." },
  { question: "Are you insured and bonded?", answer: "Yes — DSM Cleaning Solutions is fully insured and bonded. You can have complete peace of mind knowing your home and belongings are protected every time we clean." },
  { question: "Do you use eco-friendly cleaning products?", answer: "Absolutely. We use non-toxic, eco-friendly cleaning products that are safe for children, pets, and the environment. Our green cleaning approach delivers a deep clean without harsh chemicals." },
  { question: "Can I book cleaning online?", answer: "Yes! You can book directly through our online booking page or call us at (815) 246-2113. We respond within 1 business day." },
  { question: "What areas do you serve?", answer: "We primarily serve Romeoville and Plainfield, IL, and extend to Naperville, Bolingbrook, Joliet, Westmont, and the surrounding southwest Chicago suburbs." },
  { question: "What is your satisfaction guarantee?", answer: "Your satisfaction is our top priority. If you're not completely happy with our cleaning, let us know within 48 hours and we'll return to re-clean the area at no additional charge." },
];

const serviceAreas = [
  { city: "Romeoville", slug: "/" }, { city: "Plainfield", slug: "/plainfield-il" },
  { city: "Naperville", slug: "/naperville-il" }, { city: "Bolingbrook", slug: "/bolingbrook-il" },
  { city: "Joliet", slug: "/joliet-il" }, { city: "Westmont", slug: "/westmont-il" },
  { city: "Lockport", slug: "/lockport-il" }, { city: "Lemont", slug: "/lemont-il" },
  { city: "Homer Glen", slug: "/homer-glen-il" }, { city: "New Lenox", slug: "/new-lenox-il" },
  { city: "Shorewood", slug: "/shorewood-il" }, { city: "Minooka", slug: "/minooka-il" },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
};

function renderFaqAnswer(answer: string) {
  const phone = "(815) 246-2113";
  if (!answer.includes(phone)) return answer;
  const parts = answer.split(phone);
  return (
    <>
      {parts[0]}<a href="tel:+18152462113" className="text-brand-green font-semibold hover:underline">{phone}</a>{parts[1]}
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* LCP element. Rendered through next/image with priority so it is
            preloaded and served as AVIF/WebP; as a CSS background it was
            discovered late and downloaded at full size. */}
        <Image
          src="/work-photos/hero-kitchen-home.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 50%" }}
        />
        {/* Dark overlay — lightened so image shows clearly */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/30" />
        {/* Orange tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Spacing is deliberately tight on mobile so the primary CTA, the
              rating and the offer all clear the fold at 390px. 69% of traffic
              is mobile. Widen the rhythm at sm and above, not below. */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-4">
            Come Home to a House That&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-400">
              Actually Clean.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/85 mb-3 max-w-2xl mx-auto leading-relaxed">
            House cleaning in Romeoville, Plainfield, Naperville and the southwest
            suburbs. Family-owned, fully insured, and every clean is backed by our
            48-hour guarantee.
          </p>

          {/* Rating, matching the treatment on the deep cleaning city pages.
              Counts come from lib/realReviews.ts, never hardcoded. */}
          <Link
            href="/reviews"
            className="inline-block text-sm font-semibold mb-4 hover:underline"
            style={{ color: "#FFA869" }}
          >
            ★★★★★ {REVIEW_RATING} · {REVIEW_COUNT} Google Reviews
          </Link>

          {/* Offer. Terms mirror /book exactly so the two pages never disagree. */}
          <div className="mb-6">
            {/* This was a div styled to look like a button, which is where
                Clarity recorded dead clicks. It is a real anchor now, so it is
                keyboard focusable and actually goes to the lead form. Smooth
                scrolling comes from scroll-behavior in globals.css. */}
            <a
              href="#contact"
              className="inline-block rounded-full px-4 py-2 text-sm sm:text-base font-bold text-white shadow-lg hover:brightness-110 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95 transition-all duration-200"
              style={{ backgroundColor: "#E8622A" }}
            >
              $75 off your first deep clean, plus free oven cleaning, a $40 value.
            </a>
            <p className="text-white/70 text-xs sm:text-sm mt-2">
              Use code <span className="font-bold text-white">SUMMER75</span> through August 31.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="w-full md:w-auto inline-block font-extrabold text-base text-white text-center py-4 px-9 rounded-full active:scale-95 transition-all duration-200 shadow-2xl"
              style={{ backgroundColor: "#E8721C", boxShadow: "0 8px 30px rgba(232,114,28,0.5)" }}
            >
              Get a Free Quote →
            </Link>
            <a href="tel:+18152462113" className="btn-outline-white btn-lg text-base w-full md:w-auto">
              📞 (815) 246-2113
            </a>
            <Link
              href="https://dsmcleaningsolutions.bookingkoala.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 font-semibold text-base text-white/80 text-center py-4 px-7 rounded-full border border-white/30 hover:border-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Log In
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-7 text-white/60 text-sm">
            {["✓ Family Owned", "✓ Fully Insured", "✓ Eco-Friendly", "✓ Satisfaction Guaranteed"].map((t) => (
              <span key={t} className="font-medium">{t}</span>
            ))}
          </div>
        </div>

        {/* Scroll indicator — clickable, scrolls to #services */}
        <ScrollIndicator />
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "👨‍👩‍👧", label: "Family Owned", desc: "Local & personal service" },
              { icon: "🛡️", label: "Fully Insured", desc: "Licensed and bonded" },
              { icon: "🌿", label: "Eco-Friendly", desc: "Safe for kids & pets" },
              { icon: "✅", label: "Satisfaction Guaranteed", desc: "We re-clean if needed" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 p-4">
                <span className="text-3xl">{item.icon}</span>
                <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="section-heading text-4xl md:text-5xl">Every Clean, Done Right</h2>
            <p className="section-subheading mx-auto text-lg">
              From one-time deep cleans to recurring maid service — we have a plan for every home.
            </p>
          </div>

          {/* Three across on desktop, stacked on mobile. Wider gaps and taller
              cards than the old nine-up grid, because picking a service is now
              the main decision on this page. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <Link key={service.title} href={service.slug}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <span className="text-5xl block mb-5">{service.icon}</span>
                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-brand-green transition-colors tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
                <div className="mt-5 flex items-center gap-1 text-brand-green font-semibold text-sm">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Simple Process</p>
            <h2 className="section-heading text-4xl md:text-5xl">3 Steps to a Clean Home</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {[
              { step: "01", title: "Book Online", desc: "Fill out our quick form or call us. Tell us about your home — we'll confirm fast.", icon: "📋" },
              { step: "02", title: "We Show Up", desc: "Our professional, background-checked team arrives on time with all eco-friendly supplies.", icon: "🚗" },
              { step: "03", title: "You Relax", desc: "Come home to a spotlessly clean house. Satisfaction guaranteed — we'll make it right.", icon: "😊" },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-green-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="font-bold text-xl text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm max-w-xs mx-auto">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-6rem)] border-t-2 border-dashed border-orange-200" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/book" className="btn-primary btn-lg">
              Book Your Cleaning Today
            </Link>
          </div>
        </div>
      </section>

      {/* ─── OUR WORK ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Real Results</p>
            <h2 className="section-heading text-4xl md:text-5xl">Our Work Speaks for Itself</h2>
            <p className="section-subheading mx-auto text-lg">
              Real results from real homes across Plainfield, Romeoville, Naperville &amp; Bolingbrook
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              // Five, not six. The two shower frames read as near-duplicates in
              // a grid, so the weaker one was dropped rather than padding.
              // Captions with no city are the new drops, whose location is unknown.
              { src: "/work-photos/oven-interior-deep-cleaning.jpg", alt: "Oven interior cleaned down to bare enamel during a DSM Cleaning Solutions deep clean", caption: "Oven Deep Clean" },
              { src: "/work-photos/marble-bathroom-deep-cleaning.jpg", alt: "Marble tiled bathroom with a scrubbed tub surround and floor tile catching the light after a DSM Cleaning Solutions deep clean", caption: "Bathroom Deep Clean" },
              { src: "/work-photos/empty-room-move-out-cleaning.jpg", alt: "Empty bedroom with fresh vacuum lines in the carpet after a DSM Cleaning Solutions move-out cleaning", caption: "Move-Out Clean" },
              { src: "/work-photos/closet-move-out-cleaning.jpg", alt: "Empty walk-in closet with bare white shelving and a polished hardwood floor after a DSM Cleaning Solutions move-out cleaning", caption: "Move-Out Clean" },
              { src: "/work-photos/walk-in-shower-glass-house-cleaning.jpg", alt: "Walk-in shower with streak-free glass doors and a spotless tiled pan after house cleaning by DSM Cleaning Solutions", caption: "Bathroom · House Cleaning" },
            // Static imagery. The lift-and-zoom hover this used to have made
            // every photo look clickable when it goes nowhere, so the
            // affordance is removed rather than faked.
            ].map((photo) => (
              <div key={photo.src}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-gray-400 font-medium text-center mt-2.5 tracking-wide">{photo.caption}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary btn-lg">
              See What a Clean Home Feels Like
            </Link>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section id="reviews" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Reviews</p>
            <h2 className="section-heading text-4xl md:text-5xl">What Romeoville Families Are Saying</h2>
            <Link href="/reviews" className="inline-flex items-center justify-center gap-2 mt-3 hover:opacity-80 transition-opacity">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
              <span className="text-gray-400 font-medium">{REVIEW_RATING} average · {REVIEW_COUNT} reviews</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pickReviews(3, 0).map((review) => (
              <ReviewCard
                key={review.name}
                name={reviewAttribution(review)}
                text={review.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="section-heading text-4xl md:text-5xl">A Family Business Built on Trust</h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                DSM Cleaning Solutions was born right here in Romeoville, IL (zip code 60446). As a family-owned
                and operated cleaning company, we understand that inviting someone into your home is a matter of
                trust — and we take that responsibility seriously.
              </p>
              <p className="text-gray-500 mb-5 leading-relaxed">
                We serve families throughout Romeoville — from Lakewood Falls and Windstone to Hidden Lakes and
                Grand Haven — and across the entire southwest Chicago suburbs. Whether you live near the Isle a
                la Cache Museum or along Romeo Lake, we&apos;re your true local neighbors.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Our commitment to eco-friendly cleaning means we use non-toxic, biodegradable products that are
                safe for children, pets, and the environment — because Romeoville families deserve a clean home
                they can feel good about.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Years in Business", value: "5+" },
                  { label: "Happy Clients", value: "500+" },
                  { label: "Cities Served", value: "10+" },
                  // Replaces an unverifiable "100% Satisfaction Rate" with a
                  // number anyone can check on the Google profile.
                  { label: "Five-Star Reviews", value: String(REVIEW_COUNT) },
                ].map((stat) => (
                  <div key={stat.label} className="bg-orange-50 rounded-2xl p-5 text-center border border-orange-100">
                    <p className="text-3xl font-bold text-brand-green">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary">
                Get Your Free Estimate
              </Link>
            </div>

            <div className="relative">
              {/* Image with overlay card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-orange-100 h-[500px]">
                <Image
                  src="/work-photos/team-member-vacuuming.jpg"
                  alt="Spotless shower tile cleaned by DSM Cleaning Solutions in Romeoville IL"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Floating trust card */}
              <Link href="/reviews" className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 max-w-[200px] hover:shadow-2xl hover:-translate-y-0.5 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <p className="font-bold text-gray-900 text-sm">{REVIEW_COUNT} Reviews</p>
                <p className="text-xs text-gray-400 mt-0.5">5.0 avg rating</p>
              </Link>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-brand-green to-brand-green-dark text-white rounded-2xl p-4 shadow-xl shadow-orange-200">
                <p className="font-bold text-2xl">5+</p>
                <p className="text-xs text-white/80 font-medium">Years Serving<br/>Romeoville</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Coverage</p>
            <h2 className="section-heading text-4xl">Cleaning Services Near You</h2>
            <p className="section-subheading mx-auto">Serving Romeoville, Plainfield, and the entire southwest Chicago suburbs.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {serviceAreas.map((area) => (
              <Link key={area.city} href={area.slug}
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-center text-gray-600 hover:border-brand-green hover:text-brand-green hover:bg-orange-50 hover:shadow-md hover:-translate-y-0.5 transition-all text-sm font-medium">
                {area.city}, IL
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-6 text-sm">
            Not sure if we cover your area?{" "}
            <a href="tel:+18152462113" className="text-brand-green font-semibold hover:underline">(815) 246-2113</a>
          </p>
        </div>
      </section>

      {/* ─── ROMEOVILLE NEIGHBORHOODS ─── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Our Home Base</p>
              <h2 className="section-heading text-3xl md:text-4xl mb-4">Romeoville Neighborhoods We Serve</h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                Based in Romeoville, IL (60446), DSM Cleaning Solutions knows every corner of this community.
                We clean homes throughout every neighborhood — from the newest developments to established
                subdivisions we&apos;ve served for years.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-5">
                {["Lakewood Falls", "Windstone", "Hidden Lakes", "Grand Haven", "Fox Run", "Prairieview"].map((n) => (
                  <div key={n} className="flex items-center gap-2 text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    {n}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm">Zip code served: 60446</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Local Romeoville Landmarks</h3>
              <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                We&apos;re proud to call Romeoville home — and to serve the families who live near these
                well-known local landmarks:
              </p>
              <div className="space-y-2">
                {[
                  "Isle a la Cache Museum",
                  "Romeo Lake",
                  "Romeoville Athletic & Events Center",
                  "Independence Park",
                  "Route 53 / Weber Road Corridor",
                ].map((l) => (
                  <div key={l} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <span className="text-xl">📍</span>
                    <span className="text-gray-700 font-medium text-sm">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── POPULAR SERVICES IN ROMEOVILLE ─── */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Popular Services in Romeoville, IL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning-romeoville-il" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Romeoville</h3>
              <p className="text-sm text-gray-600">Top-to-bottom deep cleaning for Romeoville homes (60446).</p>
            </Link>
            <Link href="/standard-cleaning-romeoville-il" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Romeoville</h3>
              <p className="text-sm text-gray-600">Weekly, biweekly & monthly house cleaning in Romeoville.</p>
            </Link>
            <Link href="/move-out-cleaning-romeoville-il" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Romeoville</h3>
              <p className="text-sm text-gray-600">Deposit-back move-out cleaning for Romeoville rentals.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── POPULAR SERVICES IN NAPERVILLE ─── */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Popular Services in Naperville, IL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Naperville</h3>
              <p className="text-sm text-gray-600">Top-to-bottom deep cleaning for Naperville homes (60540, 60563, 60564, 60565).</p>
            </Link>
            <Link href="/standard-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">House Cleaning in Naperville</h3>
              <p className="text-sm text-gray-600">Weekly, biweekly & monthly house cleaning for Naperville families.</p>
            </Link>
            <Link href="/move-out-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning in Naperville</h3>
              <p className="text-sm text-gray-600">Deposit-back move-out cleaning for Naperville rentals & home sales.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 className="section-heading text-4xl md:text-5xl">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 border border-gray-200 rounded-2xl group overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-brand-green">
                  <h3 className="text-left pr-4 text-sm md:text-base">{faq.question}</h3>
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 pt-1">
                  <p className="text-gray-500 leading-relaxed text-sm">{renderFaqAnswer(faq.answer)}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT / CTA ─── */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 25%, rgba(255,255,255,0.55), rgba(255,255,255,0) 45%), radial-gradient(circle at 80% 75%, rgba(255,255,255,0.35), rgba(255,255,255,0) 50%), linear-gradient(135deg, rgba(255,255,255,0.18), rgba(0,0,0,0.12))",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-white/70 font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
              Ready for a Spotlessly Clean Home?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed mb-6">
              Fill out the form below or call us directly. Serving Romeoville, Plainfield, Naperville,
              Bolingbrook, and all surrounding southwest suburbs.
            </p>
            <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-xl px-6 py-3 rounded-2xl hover:bg-orange-50 transition-colors shadow-xl">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              (815) 246-2113
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["✓ Free Estimates", "✓ 100% Satisfaction Guarantee", "✓ Fully Insured & Bonded", "✓ Eco-Friendly", "✓ Family-Owned"].map((item) => (
              <span key={item} className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full">
                {item}
              </span>
            ))}
          </div>

          {/* BookingKoala Embedded Form */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-black/20 p-6 md:p-8">
            <LeadForm />
          </div>

          {/* Book Now direct option */}
          <div className="text-center mt-8">
            <p className="text-white/70 text-sm mb-4">Prefer to book online right now?</p>
            <Link
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold text-lg px-8 py-4 rounded-2xl hover:bg-orange-50 active:scale-95 transition-all duration-200 shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Now Online
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky mobile "Book Now" bar — fades in after 300px scroll, hidden on md+ */}
      <StickyMobileBar />
    </>
  );
}
