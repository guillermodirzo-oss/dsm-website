import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Free House Cleaning Estimate Romeoville & Plainfield IL",
  description:
    "Get a free house cleaning estimate in Romeoville and Plainfield IL. No obligation. DSM Cleaning Solutions — call (815) 246-2113 today.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/free-estimate" },
  openGraph: {
    title: "Free House Cleaning Estimate Romeoville & Plainfield IL | DSM Cleaning Solutions",
    description:
      "Get a free house cleaning estimate in Romeoville and Plainfield IL. No obligation. DSM Cleaning Solutions — call (815) 246-2113 today.",
    url: "https://www.dsmcleaningsolutions.com/free-estimate",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "Free Cleaning Estimate Romeoville Plainfield IL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "Is your estimate really free?",
    answer:
      "Yes — completely free and with zero obligation. DSM Cleaning Solutions provides every homeowner in Romeoville, Plainfield, Naperville, Bolingbrook, and the surrounding suburbs with a free, no-pressure estimate before any work is scheduled. We don't require a credit card, deposit, or commitment to receive your quote. If you decide not to book after receiving your estimate, that's perfectly fine.",
  },
  {
    question: "How long does it take to get an estimate?",
    answer:
      "Most estimates are provided same-day, often within a few hours of submitting your request. If you call us directly at (815) 246-2113, we can often give you a quote on the spot based on a few quick questions about your home. For more complex jobs or custom requests, we may follow up with a few additional questions before finalizing your estimate.",
  },
  {
    question: "What information do I need to get an estimate?",
    answer:
      "To give you an accurate estimate, we need to know: (1) your home size — number of bedrooms and bathrooms, (2) the type of cleaning you need — standard, deep, or move-out, (3) your zip code or city, and (4) the general condition of your home and how recently it was professionally cleaned. Optional but helpful: whether you have pets, specific areas of concern, or add-on requests like inside oven or refrigerator.",
  },
  {
    question: "Does the estimate include all costs?",
    answer:
      "Yes — our estimates are all-inclusive and flat-rate. The price you receive covers labor, eco-friendly cleaning products, and all standard cleaning supplies. There are no hidden fees, no hourly overruns, and no surprise charges when we arrive. Any optional add-ons (like inside refrigerator or laundry) are discussed and agreed upon before we schedule — never added without your knowledge.",
  },
  {
    question: "How do I schedule after getting my estimate?",
    answer:
      "Once you receive your estimate and decide to book, simply reply to confirm or call us at (815) 246-2113. We'll schedule your cleaning at a time that works for you — we operate 7 days a week. For recurring services, we'll set up your regular schedule at that point. No paperwork, no complicated onboarding — just a confirmation and a date on the calendar.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "House Cleaning",
  name: "Free House Cleaning Estimate — Romeoville & Plainfield, IL",
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
  areaServed: ["Romeoville, IL", "Plainfield, IL", "Naperville, IL", "Bolingbrook, IL", "Joliet, IL"],
  description:
    "Free, no-obligation house cleaning estimates for Romeoville, Plainfield, Naperville, and the southwest Chicago suburbs. Flat-rate pricing — no hidden fees.",
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
    { "@type": "ListItem", position: 2, name: "Free Estimate", item: "https://www.dsmcleaningsolutions.com/free-estimate" },
  ],
};

const steps = [
  {
    number: "01",
    title: "Fill Out the Form or Call",
    desc: "Submit the quick form on this page or call us directly at (815) 246-2113. We'll ask about your home size, service type, and zip code. Takes under 2 minutes.",
  },
  {
    number: "02",
    title: "We Prepare Your Custom Quote",
    desc: "We review your details and send you a firm, flat-rate quote — no ranges, no guessing. Most estimates arrive same-day. No credit card or commitment required.",
  },
  {
    number: "03",
    title: "Book With Confidence",
    desc: "If the price works for you, we schedule your cleaning at a time that fits your calendar. 7-day availability, morning and afternoon slots throughout the southwest suburbs.",
  },
];

const factors = [
  { icon: "🏠", label: "Home Size", desc: "Bedrooms and bathrooms are the primary driver of your estimate." },
  { icon: "🧹", label: "Service Type", desc: "Standard, deep, and move-out cleaning have different scopes and prices." },
  { icon: "🔄", label: "Frequency", desc: "Recurring customers receive a lower per-visit rate than one-time bookings." },
  { icon: "📋", label: "Current Condition", desc: "Homes not recently cleaned may require additional time — always disclosed upfront." },
  { icon: "✨", label: "Add-On Services", desc: "Inside oven, inside refrigerator, laundry — optional and always agreed upon first." },
];

const serviceAreas = [
  "Romeoville", "Plainfield", "Naperville", "Bolingbrook",
  "Joliet", "Lockport", "Homer Glen", "Lemont",
  "New Lenox", "Shorewood", "Minooka", "Westmont",
];

export default function FreeEstimatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">Free Estimate</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Get a Free House Cleaning Estimate in Romeoville &amp; Plainfield, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              No obligation, no pressure, no credit card required. DSM Cleaning Solutions
              provides free flat-rate estimates for every home in the southwest Chicago suburbs.
              Know your exact price before we schedule a thing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-white btn-lg">Get My Free Estimate</Link>
              <a href="tel:+18152462113" className="btn-outline-white btn-lg">📞 Call Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600">
            {["✅ 100% Free — No Obligation", "🚫 No Hidden Fees", "⚡ Same-Day Response", "🛡️ Fully Insured", "👨‍👩‍👧 Family Owned"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* WHY DSM OFFERS FREE ESTIMATES */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Why DSM Offers Free, No-Obligation Estimates</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We offer free house cleaning estimates in Romeoville and Plainfield because we believe
            you deserve to know exactly what you&apos;re paying before committing to anything. Too
            many cleaning companies in the southwest suburbs use vague hourly pricing or quote low
            and charge high when they arrive. That&apos;s not how DSM works.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Our estimates are flat-rate, all-inclusive, and firm. The number we give you is the
            number you pay — no hourly overruns, no surprise add-ons, no hidden fees for supplies
            or travel within our service area. We&apos;d rather earn your trust upfront than catch
            you off guard on cleaning day.
          </p>
          <p className="text-gray-600 leading-relaxed">
            And because we&apos;re a local, family-owned business based right here in Romeoville, our
            reputation depends on every customer leaving satisfied. A free, transparent estimate
            is how that starts.
          </p>
        </div>
      </section>

      {/* 3 STEPS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">How to Get Your Free Estimate</h2>
            <p className="section-subheading mx-auto">Three simple steps — done in minutes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-green text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="btn-primary btn-lg">Start Step 1 — Get My Estimate</Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED IN THE ESTIMATE */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-8">What Is Included in Your Estimate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "💰", title: "Flat-Rate Price", desc: "One number — no ranges. The price we quote is the price you pay." },
              { icon: "🧹", title: "Scope of Work", desc: "Exactly which rooms and tasks are covered so there are no surprises on cleaning day." },
              { icon: "⏱️", title: "Estimated Duration", desc: "How long your cleaning will take so you can plan your day accordingly." },
              { icon: "🌿", title: "Products Used", desc: "Confirmation that we use eco-friendly, non-toxic products — always included." },
              { icon: "✨", title: "Add-On Options", desc: "Any optional extras (oven, fridge, laundry) listed separately with pricing." },
              { icon: "📅", title: "Availability", desc: "We&apos;ll share our nearest available dates so you can plan your booking." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-brand-green-50 border border-brand-green-100 rounded-xl p-5">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT AFFECTS YOUR ESTIMATE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What Affects Your Estimate</h2>
            <p className="section-subheading mx-auto">
              Five factors that determine your flat-rate quote — all disclosed upfront.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {factors.map((f) => (
              <div key={f.label} className="bg-white rounded-xl border border-gray-100 p-6 text-center shadow-sm">
                <span className="text-4xl block mb-3">{f.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{f.label}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm mb-4">
              Want to see ballpark numbers before you ask?{" "}
              <Link href="/pricing" className="text-brand-green font-semibold hover:underline">View our full pricing guide →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-green-50 border border-brand-green-100 rounded-2xl p-8 text-center">
            <span className="text-5xl block mb-4">✅</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Book With Total Confidence</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-4">
              Every DSM cleaning is backed by our <strong>48-hour satisfaction guarantee</strong>.
              If anything isn&apos;t right after your clean, call us within 48 hours and we&apos;ll
              return to re-clean the area at no charge — no questions asked. Combined with our
              transparent free estimate process, you have zero risk from the first contact to
              the final wipe-down.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Get My Free Estimate</Link>
              <a href="tel:+18152462113" className="btn-secondary">📞 (815) 246-2113</a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Free Estimates Available Across the Southwest Suburbs</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We offer free estimates for every home in our service area — no travel charge,
            no minimum booking requirement just to get a quote.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {serviceAreas.map((city) => (
              <span key={city} className="bg-white border border-brand-green-100 text-brand-green font-medium text-sm px-4 py-2 rounded-full shadow-sm">
                {city}
              </span>
            ))}
          </div>
          <Link href="/service-areas" className="text-brand-green font-semibold text-sm hover:underline">
            View all service areas →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Free Estimate — FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 border border-gray-200 rounded-xl group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-brand-green">
                  <h3 className="text-left pr-4">{faq.question}</h3>
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/pricing" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Pricing Guide</h3>
              <p className="text-sm text-gray-600">See ballpark prices for all service types before you request a quote.</p>
            </Link>
            <Link href="/deep-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning</h3>
              <p className="text-sm text-gray-600">Top-to-bottom cleaning for a thorough seasonal or first-time reset.</p>
            </Link>
            <Link href="/standard-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning</h3>
              <p className="text-sm text-gray-600">Recurring house cleaning for ongoing home maintenance.</p>
            </Link>
            <Link href="/contact" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Contact Us</h3>
              <p className="text-sm text-gray-600">Reach out with questions or request your free estimate today.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Request Your Free Estimate Now</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Fill out the form and we&apos;ll send your flat-rate quote — usually within a few hours.
                No obligation, no credit card, no pressure. Just an honest price from a
                family-owned local business.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">Same-day response · Flat-rate pricing · No hidden fees · Fully insured</p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
