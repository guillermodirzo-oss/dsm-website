import type { Metadata } from "next";
import Link from "next/link";
import CityDeepCleanForm from "@/components/CityDeepCleanForm";
import { DEEP_CLEANING_PRICING_COPY } from "@/lib/pricingCopy";

export const metadata: Metadata = {
  title: "Deep Cleaning Services Westmont IL | DSM Cleaning Solutions",
  description:
    "Professional deep cleaning in Westmont, IL. DSM Cleaning Solutions - family owned, eco-friendly, fully insured. 48-hr satisfaction guarantee. Free quote.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning-westmont-il" },
  openGraph: {
    title: "Deep Cleaning Services Westmont IL | DSM Cleaning Solutions",
    description:
      "Professional deep cleaning in Westmont, IL. DSM Cleaning Solutions - family owned, eco-friendly, fully insured. 48-hr satisfaction guarantee. Free quote.",
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning-westmont-il",
  },
  twitter: { card: "summary_large_image", images: ["/hero-image.png"] },
};

const faqs = [
  {
    question: "How long does a deep cleaning take in Westmont, IL?",
    answer:
      "Most deep cleaning jobs in Westmont take 3-6 hours depending on the size and condition of your home. A 2-bedroom home may take around 3 hours while a larger 4-bedroom home in the Westmont downtown area or Cass Avenue corridor could take 5-6 hours.",
  },
  {
    question: "Do you serve the Westmont downtown area and Cass Avenue corridor?",
    answer:
      "Yes — we serve all Westmont neighborhoods including the downtown area, Cass Avenue corridor, and all areas within zip code 60559.",
  },
  {
    question: "What if my quote comes in higher than the range listed?",
    answer:
      "The ranges listed cover typical homes in that bedroom count. If your home runs bigger, has more bathrooms, or needs extra attention, your quote might land higher. We always confirm your exact price before we book anything. No surprises.",
  },
  {
    question: "Do I need to be home during the deep cleaning in Westmont?",
    answer:
      "You don't have to be home. Many Westmont clients provide a key or access code. Every member of our team is background-checked, insured, and bonded — your home is fully protected.",
  },
  {
    question: "Is DSM Cleaning Solutions insured in Westmont, IL?",
    answer:
      "Yes — DSM Cleaning Solutions is fully insured and bonded in Illinois, including all of Westmont. We carry liability insurance on every job so you can book with complete peace of mind.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Deep Cleaning",
  name: "Deep Cleaning in Westmont, IL",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.dsmcleaningsolutions.com/#business",
    name: "DSM Cleaning Solutions",
    telephone: "+18152462113",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Romeoville",
      addressRegion: "IL",
      postalCode: "60446",
      addressCountry: "US",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Westmont",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description:
    "Professional deep cleaning in Westmont, IL — 60559. DSM Cleaning Solutions scrubs every surface, grout line & appliance. Free estimate. (815) 246-2113.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Deep Cleaning", item: "https://www.dsmcleaningsolutions.com/deep-cleaning" },
    { "@type": "ListItem", position: 3, name: "Westmont, IL", item: "https://www.dsmcleaningsolutions.com/deep-cleaning-westmont-il" },
  ],
};

const checklist = [
  {
    room: "Kitchen",
    items: [
      "Clean inside/outside oven",
      "Degrease stovetop burners and hood vent",
      "Clean inside microwave",
      "Wipe all cabinet fronts",
      "Scrub sink and faucet",
      "Clean countertops and backsplash",
      "Wipe refrigerator exterior",
      "Mop and scrub floors",
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Scrub/disinfect toilet",
      "Deep scrub shower/tub with grout cleaning",
      "Clean/polish faucets and fixtures",
      "Wash sink and vanity",
      "Clean mirrors",
      "Wipe cabinets and shelves",
      "Mop floors and clean grout lines",
    ],
  },
  {
    room: "Bedrooms & Living Areas",
    items: [
      "Dust all surfaces and shelves",
      "Wipe baseboards and door frames",
      "Clean window sills and inside glass",
      "Vacuum under/behind furniture",
      "Clean ceiling fans and light fixtures",
      "Dust blinds and windowsills",
    ],
  },
  {
    room: "Whole Home",
    items: [
      "Vacuum all carpets and rugs",
      "Mop all hard floors",
      "Wipe all doors and door frames",
      "Clean all visible baseboards",
      "Dust vents and registers",
    ],
  },
];

export default function DeepCleaningWestmontPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white pt-12 pb-10 md:pt-16 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/deep-cleaning" className="hover:text-white transition-colors">Deep Cleaning</Link>
            <span>/</span>
            <span className="text-white/90">Westmont</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-3">
                Deep Cleaning Services in Westmont, IL
              </h1>
              <p className="text-sm font-semibold mb-4" style={{ color: "#FFA869" }}>
                ★★★★★ 5.0 · 42 Google Reviews
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-white/95 mb-4 leading-snug">
                We&apos;ll Get the Stuff You&apos;ve Been Putting Off.
              </p>
              <p className="text-white/85 text-lg leading-relaxed mb-8">
                DSM Cleaning Solutions scrubs every room in your Westmont home. Ceiling fans, grout lines, baseboards, the oven. Local, family-owned, and every job comes with a 48-hour satisfaction guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#quote-form" className="inline-flex items-center justify-center gap-2 font-bold text-brand-green bg-white rounded-full px-7 py-3.5 text-base hover:bg-orange-50 transition-colors shadow-md">
                  Get My Free Quote
                </a>
                <a href="tel:+18152462113" className="inline-flex items-center justify-center gap-2 font-semibold text-white border-2 border-white/60 rounded-full px-7 py-3.5 text-base hover:bg-white/10 transition-colors">
                  (815) 246-2113
                </a>
              </div>
            </div>
            <div className="mt-6 lg:mt-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Work%20Pictures/double-vanity-bathroom-clean-naperville-il.jpg"
                alt="Professionally cleaned bathroom by DSM Cleaning Solutions in Westmont IL"
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-brand-green-50 flex items-center justify-center mb-2 text-brand-green">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <p className="font-bold text-sm text-gray-900 mb-0.5">Fully Insured &amp; Bonded</p>
              <p className="text-xs text-gray-500 leading-snug">Licensed and liability-insured on every job.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-brand-green-50 flex items-center justify-center mb-2 text-brand-green">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <p className="font-bold text-sm text-gray-900 mb-0.5">Background-Checked Team</p>
              <p className="text-xs text-gray-500 leading-snug">Every cleaner verified before entering your home.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-brand-green-50 flex items-center justify-center mb-2 text-brand-green">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <p className="font-bold text-sm text-gray-900 mb-0.5">48-Hr Satisfaction Guarantee</p>
              <p className="text-xs text-gray-500 leading-snug">Not happy? We come back and fix it free.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-brand-green-50 flex items-center justify-center mb-2 text-brand-green">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <p className="font-bold text-sm text-gray-900 mb-0.5">Family-Owned &amp; Local</p>
              <p className="text-xs text-gray-500 leading-snug">Memo answers his own phone. We live here too.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Deep Cleaning Services in Westmont, IL</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Deep cleaning in Westmont, IL is what we do. DSM Cleaning Solutions brings the same
            detail-focused approach to every home we serve. Whether you live near the Westmont
            downtown area or the Cass Avenue corridor, our team covers zip code 60559 with a
            thorough clean that goes well beyond your regular maintenance routine.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Westmont families choose DSM because we treat every home like our own. We&apos;re not a
            national franchise. We&apos;re a family-owned business serving the DuPage County suburbs.
            From degreasing the kitchen hood vent to scrubbing grout lines in your master shower,
            nothing gets overlooked.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Getting ready for spring, cleaning up before guests arrive, or just want a real clean after
            months of normal use? Our Westmont deep cleaning service gets it done. We use eco-friendly,
            non-toxic products. Safe for your kids and pets.
          </p>
        </div>
      </section>

      {/* ANCHOR REVIEW */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 md:p-10 relative" style={{ backgroundColor: "#FFF4EE" }}>
            <span className="text-6xl font-serif leading-none absolute top-6 left-8" style={{ color: "#E8622A" }}>&ldquo;</span>
            <blockquote className="pt-8">
              <p className="text-gray-800 text-lg leading-relaxed mb-5 italic">
                This service is consistently perfect! And, I love the website interface -- it makes everything easy and customizable.
              </p>
              <footer>
                <p className="font-bold text-gray-900">Julie G. <span className="text-amber-400">★★★★★</span></p>
                <p className="text-sm text-gray-400 mt-1">One of our 42 five-star Google reviews</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* WHY DSM */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Westmont Residents Choose DSM Cleaning Solutions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl border border-gray-100 p-6 bg-gray-50 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-brand-green-50 flex items-center justify-center mb-4 text-brand-green">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Safe for Your Kids &amp; Pets</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We use non-toxic, biodegradable products on every job. No harsh chemicals, no fumes. Your family can be back in the house right after we leave.</p>
            </div>
            <div className="rounded-xl border border-gray-100 p-6 bg-gray-50 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-brand-green-50 flex items-center justify-center mb-4 text-brand-green">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Your Home Is Protected</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Fully insured, bonded, and background-checked. If anything goes wrong you&apos;re covered. In 5 years we&apos;ve never had a claim.</p>
            </div>
            <div className="rounded-xl border border-gray-100 p-6 bg-gray-50 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-brand-green-50 flex items-center justify-center mb-4 text-brand-green">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">We Show Up On Time, Every Time</h3>
              <p className="text-gray-600 text-sm leading-relaxed">No waiting around in a 4-hour window. We confirm the night before and show up when we say we will.</p>
            </div>
            <div className="rounded-xl border border-gray-100 p-6 bg-gray-50 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-brand-green-50 flex items-center justify-center mb-4 text-brand-green">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">We&apos;re Your Neighbors</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Serving the DuPage County suburbs. Not a national franchise. Memo answers his own phone. Call or text him directly.</p>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Work%20Pictures/Google%20Post%20Image%20-%20Cleaning%20Service%20(1).png"
            alt="Professionally cleaned kitchen in Westmont, IL by DSM Cleaning Solutions"
            className="w-full rounded-xl object-cover mt-10 shadow-sm"
            style={{ maxHeight: "360px" }}
          />
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What&apos;s Included in Our Deep Cleaning in Westmont, IL</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Every room in your Westmont home. Nothing skipped.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {checklist.map((section) => (
              <div key={section.room} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
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
            <a href="#quote-form" className="inline-flex items-center gap-2 font-bold text-white rounded-full px-8 py-4 text-base transition-all hover:opacity-90 active:scale-95 shadow-md" style={{ backgroundColor: "#E8721C" }}>
              Book Your Deep Clean →
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Much Does Deep Cleaning Cost in Westmont, IL?</h2>
          <div className="text-gray-600 mb-4 leading-relaxed">{DEEP_CLEANING_PRICING_COPY}</div>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Your price depends on three things: how big your home is, how many bedrooms it has, and how many bathrooms it has. The ranges above cover typical homes in that bedroom range. If your home runs bigger or has extra bathrooms, your quote might land higher. We&rsquo;ll always confirm your exact price with you before we book anything. No surprises after we show up.
          </p>
          <p className="text-gray-600 text-sm mb-4">Want your exact price right now? See it in about 2 minutes below. Prefer we call you instead? Fill out the quick form.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/book" className="inline-flex items-center justify-center font-bold text-white rounded-full px-8 py-4 text-base transition-all hover:opacity-90 active:scale-95 shadow-md" style={{ backgroundColor: "#E8622A" }}>See Your Exact Price</Link>
            <a href="#quote-form" className="inline-flex items-center justify-center font-bold rounded-full px-8 py-4 text-base transition-all hover:bg-orange-50 active:scale-95 border-2" style={{ borderColor: "#E8622A", color: "#E8622A" }}>Get a Free Quote</a>
          </div>
        </div>
      </section>

      {/* 3-REVIEW BLOCK */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">What Westmont Homeowners Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative">
              <span className="text-4xl font-serif leading-none absolute top-4 left-5 text-orange-300">&ldquo;</span>
              <p className="text-gray-700 leading-relaxed text-sm pt-6 mb-4">We are very happy with DSM Cleaning Solutions. They do an excellent job and would hire them again</p>
              <p className="font-semibold text-gray-900 text-sm">Bill A.</p>
              <p className="text-amber-400 text-sm">★★★★★</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative">
              <span className="text-4xl font-serif leading-none absolute top-4 left-5 text-orange-300">&ldquo;</span>
              <p className="text-gray-700 leading-relaxed text-sm pt-6 mb-4">As always everything was great.</p>
              <p className="font-semibold text-gray-900 text-sm">Pati M.</p>
              <p className="text-amber-400 text-sm">★★★★★</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative">
              <span className="text-4xl font-serif leading-none absolute top-4 left-5 text-orange-300">&ldquo;</span>
              <p className="text-gray-700 leading-relaxed text-sm pt-6 mb-4">I highly recommend, customer since 2024 🍊🍊🍊</p>
              <p className="font-semibold text-gray-900 text-sm">Jae M.</p>
              <p className="text-amber-400 text-sm">★★★★★</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="https://g.page/r/dsmcleaningsolutions/review" target="_blank" rel="noopener noreferrer" className="text-brand-green font-semibold hover:underline text-sm">
              Read all 42 reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 border border-gray-200 rounded-xl group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-brand-green list-none">
                  <h3 className="text-left pr-4">{faq.question}</h3>
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA + FORM */}
      <section id="quote-form" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-3">Book Your Deep Cleaning in Westmont Today</h2>
              <p className="font-semibold mb-6" style={{ color: "#FFD8BC" }}>★★★★★ Trusted by 42 Westmont-area homeowners</p>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Get your free deep cleaning quote for Westmont, IL. We usually respond the same day
                and every job is backed by our 48-hour satisfaction guarantee.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                (815) 246-2113
              </a>
              <p className="text-white/80 text-sm">Family-owned · Eco-friendly · Fully insured · Satisfaction guaranteed</p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-6 md:p-8">
              <CityDeepCleanForm />
            </div>
          </div>
        </div>
      </section>

      {/* NEARBY CITIES */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">We Also Offer Deep Cleaning in Nearby Cities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning/downers-grove" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Downers Grove</h3>
              <p className="text-sm text-gray-600">Serving 60515 &amp; 60516.</p>
            </Link>
            <Link href="/deep-cleaning/hinsdale" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Hinsdale</h3>
              <p className="text-sm text-gray-600">Serving all of Hinsdale, IL (60521).</p>
            </Link>
            <Link href="/deep-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning in Naperville</h3>
              <p className="text-sm text-gray-600">Serving 60540, 60563, 60564 &amp; 60565.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
