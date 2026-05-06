import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | DSM Cleaning Solutions Romeoville IL",
  description:
    "Answers to frequently asked questions about DSM Cleaning Solutions in Romeoville and Plainfield IL. Pricing, booking, service area and more.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/faq" },
  openGraph: {
    title: "FAQ | DSM Cleaning Solutions Romeoville IL",
    description:
      "Answers to frequently asked questions about DSM Cleaning Solutions in Romeoville and Plainfield IL. Pricing, booking, service area and more.",
    url: "https://www.dsmcleaningsolutions.com/faq",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "FAQ DSM Cleaning Solutions" }],
  },
  twitter: { card: "summary_large_image", images: ["/hero-image.png"] },
};

const categories = [
  {
    id: "booking",
    title: "Booking & Scheduling",
    icon: "📅",
    faqs: [
      {
        q: "How do I book a cleaning?",
        a: "You can book in two ways: fill out our contact form on the website or call us directly at (815) 246-2113. We'll ask a few quick questions about your home size, service type, and zip code, then provide a flat-rate quote. Most quotes are delivered same-day. Once you accept, we schedule your cleaning — no contracts, no credit card required to book.",
      },
      {
        q: "How far in advance should I book?",
        a: "For standard recurring cleanings, 2–3 days' notice is usually sufficient. For deep cleaning and move-out cleaning, we recommend booking 3–5 days in advance to secure your preferred time slot. During busy periods (spring cleaning season, end-of-month move-outs), booking 1 week ahead is ideal. For urgent requests, call us directly at (815) 246-2113 and we'll do our best to accommodate.",
      },
      {
        q: "Can I book same-day cleaning?",
        a: "Same-day cleaning is available on a limited basis depending on our schedule. Call us directly at (815) 246-2113 to check availability — same-day requests are handled by phone only, not through the website form. We always try to accommodate urgent situations when our schedule allows.",
      },
      {
        q: "How do I cancel or reschedule?",
        a: "To cancel or reschedule, contact us at least 48 hours before your appointment by phone or message. We understand that plans change and we work with you flexibly. Recurring customers who need to skip or reschedule a visit can do so with reasonable advance notice — there are no cancellation penalties for recurring service customers who give us adequate notice.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    icon: "💰",
    faqs: [
      {
        q: "How much does house cleaning cost?",
        a: "DSM Cleaning Solutions uses flat-rate pricing based on your home size (bedrooms and bathrooms) and service type. Standard cleaning starts at $160 for a 2-bed/1-bath home. Deep cleaning starts at $315. Move-out cleaning starts at $480. Larger homes are priced proportionally. Visit our pricing page for a full breakdown, or contact us for a free personalized quote.",
      },
      {
        q: "Do you charge by the hour or flat rate?",
        a: "We charge flat rates — not by the hour. The price we quote you before the job is the price you pay, regardless of how long the cleaning takes. This means no hourly overruns, no surprise charges when the team takes longer than expected, and total price predictability from the moment you book.",
      },
      {
        q: "Are there hidden fees?",
        a: "No. Our flat-rate quotes are all-inclusive: labor, eco-friendly products, and standard cleaning equipment. There are no travel fees within our service area, no fees for using green products, and no add-ons charged without your prior agreement. Any optional extras (inside oven, inside fridge, laundry) are discussed and priced before your appointment.",
      },
      {
        q: "Do you offer discounts for recurring service?",
        a: "Yes — recurring customers consistently pay a lower per-visit rate than one-time bookings. The exact discount depends on your frequency (weekly, bi-weekly, or monthly). Bi-weekly is our most popular frequency and offers a meaningful discount over one-time pricing. Ask about recurring rates when you request your quote.",
      },
    ],
  },
  {
    id: "service",
    title: "Our Service",
    icon: "🧹",
    faqs: [
      {
        q: "What do you bring to each clean?",
        a: "Our team arrives with all cleaning products, microfiber cloths, mop heads, buckets, and standard cleaning equipment. We use professional-grade, non-toxic, biodegradable products — you don't need to supply anything. The only thing you might need to provide is access to running water and electricity, which we assume is available in all booked homes.",
      },
      {
        q: "Do I need to be home during cleaning?",
        a: "No — most DSM customers are not home during their cleaning. Many provide a door code, garage code, or lockbox. Our team lets themselves in, completes the cleaning, and locks up. Your entry details are kept strictly confidential and used only for scheduled appointments. If you prefer to be home, especially for your first cleaning, that's completely welcome.",
      },
      {
        q: "Are your cleaners background checked?",
        a: "Yes — every member of the DSM Cleaning Solutions team undergoes a thorough background check before their first assignment. We understand that inviting someone into your home requires significant trust, and our hiring process is designed with that in mind. We only bring professional, vetted individuals into our clients' homes.",
      },
      {
        q: "Are you insured and bonded?",
        a: "Yes — DSM Cleaning Solutions is fully insured and bonded. Every cleaning visit is covered by general liability insurance, protecting your home and property in the unlikely event of an accident or damage. You can book with confidence knowing you're working with a properly covered professional cleaning company.",
      },
    ],
  },
  {
    id: "guarantee",
    title: "Our Guarantee",
    icon: "✅",
    faqs: [
      {
        q: "What is your satisfaction guarantee?",
        a: "We offer a 48-hour satisfaction guarantee on every cleaning we perform. If any area of your home doesn't meet your expectations after a cleaning, contact us within 48 hours and we will return to re-clean that area at absolutely no charge. No arguments, no forms, no runaround — we make it right.",
      },
      {
        q: "What if I am not happy with the results?",
        a: "Contact us within 48 hours of your cleaning — by phone, text, or email — and let us know what fell short. We'll schedule a return visit to address the specific area or task. Our goal is for every customer in Romeoville, Plainfield, Naperville, and the southwest suburbs to be completely satisfied after every visit.",
      },
      {
        q: "How does the 48-hour re-clean work?",
        a: "If you're not satisfied, reach out to us within 48 hours of your completed cleaning. Tell us what area or task didn't meet your expectations. We'll schedule a return visit as quickly as possible — typically within 1–2 days — and re-clean that specific area at zero additional cost. The 48-hour window starts from when your cleaning is completed.",
      },
    ],
  },
  {
    id: "area",
    title: "Service Area",
    icon: "📍",
    faqs: [
      {
        q: "What cities do you serve?",
        a: "DSM Cleaning Solutions serves: Romeoville, Plainfield, Naperville, Bolingbrook, Joliet, Lockport, Homer Glen, Lemont, New Lenox, Shorewood, Minooka, and Westmont. We serve all neighborhoods within these cities with no travel surcharge. Visit our service areas page for the full list.",
      },
      {
        q: "Do you serve my neighborhood?",
        a: "If your city is in our service list, we serve your neighborhood. We cover entire cities — not just certain zip codes or neighborhoods within them. For cities on the edges of our area (like Westmont or Minooka), call us to confirm if your specific address falls within our current coverage.",
      },
      {
        q: "How far do you travel?",
        a: "Our primary service area covers the southwest Chicago suburbs — approximately a 25–30 mile radius from our Romeoville base. We do not charge travel fees within our established service area. For locations outside our listed cities, call us at (815) 246-2113 to discuss whether we can accommodate your location.",
      },
    ],
  },
];

const allFaqs = categories.flatMap((c) => c.faqs.map((f) => ({ question: f.q, answer: f.a })));

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
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
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.dsmcleaningsolutions.com/faq" },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">FAQ</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Frequently Asked Questions — DSM Cleaning Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Everything you need to know about booking, pricing, our cleaning service, our
              guarantee, and our service area across Romeoville, Plainfield, Naperville, and
              the southwest Chicago suburbs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-white btn-lg">Get a Free Quote</Link>
              <a href="tel:+18152462113" className="btn-outline-white btn-lg">📞 (815) 246-2113</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600">
            {["✅ Flat-Rate Pricing", "🛡️ Fully Insured", "✔️ 48-Hr Guarantee", "🌿 Eco-Friendly", "👨‍👩‍👧 Family Owned"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-3 font-medium">Jump to a section:</p>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="bg-white border border-gray-200 text-gray-700 font-medium text-sm px-4 py-2 rounded-full hover:border-brand-green hover:text-brand-green transition-colors"
              >
                {cat.icon} {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CATEGORIES */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{cat.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900">{cat.title}</h2>
              </div>
              <div className="space-y-4">
                {cat.faqs.map((faq, i) => (
                  <details key={i} className="bg-gray-50 border border-gray-200 rounded-xl group">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-brand-green">
                      <h3 className="text-left pr-4">{faq.q}</h3>
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5"><p className="text-gray-600 leading-relaxed">{faq.a}</p></div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-4">Still Have a Question?</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            If you didn&apos;t find your answer above, we&apos;re happy to help directly. Call us,
            send a message, or check our detailed service and pricing pages below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="tel:+18152462113" className="btn-primary btn-lg">📞 Call (815) 246-2113</a>
            <Link href="/contact" className="btn-secondary btn-lg">Send a Message</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <Link href="/pricing" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Pricing</h3>
              <p className="text-sm text-gray-600">Full flat-rate pricing by home size and service type.</p>
            </Link>
            <Link href="/service-areas" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Service Areas</h3>
              <p className="text-sm text-gray-600">Every city and neighborhood we serve in the southwest suburbs.</p>
            </Link>
            <Link href="/reviews" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Reviews</h3>
              <p className="text-sm text-gray-600">Read 5-star reviews from our customers.</p>
            </Link>
            <Link href="/contact" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Contact</h3>
              <p className="text-sm text-gray-600">Get in touch for a free, no-obligation quote.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
