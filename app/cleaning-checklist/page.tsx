import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { STANDARD_CHECKLIST } from "@/lib/standardChecklist";
import { DEEP_ADDITIONS_BY_ROOM } from "@/lib/deepChecklist";
import { addOnNamesSentence } from "@/lib/addOns";

export const metadata: Metadata = {
  title: "House Cleaning Checklist | What We Clean",
  description:
    "See exactly what is included in DSM Cleaning Solutions standard, deep, and move-out cleaning services in Romeoville and Plainfield IL.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/cleaning-checklist" },
  openGraph: {
    title: "House Cleaning Checklist | What We Clean | DSM Cleaning Solutions",
    description:
      "See exactly what is included in DSM Cleaning Solutions standard, deep, and move-out cleaning services in Romeoville and Plainfield IL.",
    url: "https://www.dsmcleaningsolutions.com/cleaning-checklist",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "House Cleaning Checklist" }],
  },
  twitter: { card: "summary_large_image", images: ["/hero-image.png"] },
};

const faqs = [
  {
    question: "What is included in a standard clean?",
    answer:
      "Standard cleaning covers all the essential areas of your home: kitchen (countertops, appliance exteriors, sink, stovetop, cabinet fronts, floor), bathrooms (toilet, sink, tub/shower, mirror, floor), all bedrooms and living areas (dust, vacuum, mop, make beds), and general tasks like emptying trash, wiping light switches, and dusting window sills. It includes the inside of the microwave. It does not include the inside of the oven or refrigerator, cabinet interiors, or grout, baseboards and door frames.",
  },
  {
    question: "What extra items are in a deep clean?",
    answer:
      "Deep cleaning adds what standard cleaning doesn't cover: full baseboard scrubbing; inside window glass; light fixtures; grout scrubbing in bathrooms; doors and door frames; vacuuming under and behind furniture; and degreasing the stovetop, hood vent and burners. Cabinets are cleaned on the outside only. Cleaning inside the oven or inside cabinets is an add-on. It catches up on buildup instead of just keeping things tidy.",
  },
  {
    question: "Do you clean inside appliances?",
    answer:
      "Move-out cleaning includes the inside of the oven, the refrigerator, the dishwasher and the microwave. Standard and deep cleaning both include the inside of the microwave. With either one, the inside of the oven, the fridge and the dishwasher are add-ons, priced and agreed upon before the appointment.",
  },
  {
    question: "What is NOT included in cleaning?",
    answer:
      "Items not included in any service: laundry and folding, dish washing, exterior windows, garage cleaning beyond sweeping the inside of the garage (an add-on), exterior pressure washing, organizing or decluttering, biohazard or hoarding situations, and areas not accessible due to clutter. The add-ons we offer are listed in the answer below.",
  },
  {
    question: "Can I add extra items to my clean?",
    answer:
      `Yes. The add-ons are ${addOnNamesSentence()}. Add-ons are always discussed and priced before your appointment. We never add scope or charge without your prior agreement.`,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "House Cleaning",
  name: "House Cleaning Services by DSM Cleaning Solutions",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.dsmcleaningsolutions.com/#business",
    name: "DSM Cleaning Solutions",
    telephone: "+18152462113",
    address: {
      "@type": "PostalAddress",
      streetAddress: "402 Tallman Ave",
      addressLocality: "Romeoville",
      addressRegion: "IL",
      postalCode: "60446",
      addressCountry: "US",
    },
  },
  areaServed: ["Romeoville, IL", "Plainfield, IL", "Naperville, IL", "Bolingbrook, IL"],
  description:
    "Detailed room-by-room cleaning checklists for standard, deep, and move-out cleaning. DSM Cleaning Solutions serves the southwest Chicago suburbs.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Cleaning Checklist", item: "https://www.dsmcleaningsolutions.com/cleaning-checklist" },
  ],
};

// The standard checklist and the deep cleaning additions are the shared,
// owner-confirmed lists. Never type either list into this page. See
// lib/standardChecklist.ts and lib/deepChecklist.ts.
const standardChecklist = STANDARD_CHECKLIST;
const deepExtras = DEEP_ADDITIONS_BY_ROOM;

// What move-out cleaning adds on top of a deep clean. Window sills, inside
// window glass, door handles, door frames and trash are not here: they are
// already on the standard and deep lists above. Walls are not here either: no
// service cleans walls.
const moveOutExtras = [
  {
    room: "Move-Out Additions",
    items: [
      "Inside all cabinets and drawers, every room",
      "Inside refrigerator: full interior clean",
      "Inside oven: full interior scrub",
      "Clean inside the dishwasher",
      "All appliances inside and out",
      "Wipe closet shelves",
      "Sweep the patio",
    ],
  },
];

type ChecklistItem = { room: string; items: string[] };

function ChecklistSection({ title, items, variant = "green" }: { title: string; items: ChecklistItem[]; variant?: "green" | "dark" | "orange" }) {
  const headerClass = variant === "dark" ? "bg-gray-800 text-white" : variant === "orange" ? "bg-orange-500 text-white" : "bg-brand-green text-white";
  const checkColor = variant === "dark" ? "text-green-400" : "text-brand-green";
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
      <div className={`${headerClass} px-6 py-4`}>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
        {items.map((section) => (
          <div key={section.room} className="p-5 bg-white">
            <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide border-b border-gray-100 pb-2">
              {section.room}
            </h4>
            <ul className="space-y-1.5">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg className={`w-4 h-4 ${checkColor} mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CleaningChecklistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">Cleaning Checklist</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              What Is Included in Our House Cleaning Service?
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              A complete, room-by-room breakdown of every task included in our standard, deep,
              and move-out cleaning services. No guessing. Just a clear list of exactly what
              DSM Cleaning Solutions does in your home.
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
            {["✅ Transparent Checklist", "🌿 Eco-Friendly Products", "🛡️ Insured & Bonded", "✔️ 48-Hr Guarantee", "👨‍👩‍👧 Family Owned"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 leading-relaxed mb-4">
            Transparency is a core part of how DSM Cleaning Solutions operates. Before you book,
            you should know exactly what our team does (and doesn&apos;t do) in your home.
            Below is our complete room-by-room house cleaning checklist for each service type.
            Use this to compare service options, prepare your home, or simply understand what
            you&apos;re paying for.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every clean uses professional-grade, non-toxic, eco-friendly products. Every job
            is backed by our 48-hour satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* CHECKLISTS */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">

          {/* STANDARD */}
          <div>
            <div className="mb-6">
              <h2 className="section-heading">Standard Cleaning Checklist</h2>
              <p className="text-gray-600 mt-2">
                Our routine maintenance service, ideal for homes cleaned regularly.{" "}
                <Link href="/recurring-cleaning" className="text-brand-green font-semibold hover:underline">Learn more about recurring cleaning →</Link>
              </p>
            </div>
            <ChecklistSection title="Standard Cleaning: Included Tasks" items={standardChecklist} variant="green" />
          </div>

          {/* DEEP */}
          <div>
            <div className="mb-6">
              <h2 className="section-heading">Deep Cleaning Checklist</h2>
              <p className="text-gray-600 mt-2">
                Deep cleaning includes everything in standard cleaning <strong>plus</strong> the items below.{" "}
                <Link href="/deep-cleaning" className="text-brand-green font-semibold hover:underline">Learn more about deep cleaning →</Link>
              </p>
            </div>
            <div className="bg-brand-green-50 border border-brand-green-100 rounded-xl p-4 mb-4 text-sm text-brand-green font-semibold">
              ✓ Everything in the Standard Cleaning checklist above, PLUS the following:
            </div>
            <ChecklistSection title="Deep Cleaning: Additional Items" items={deepExtras} variant="dark" />
          </div>

          {/* MOVE-OUT */}
          <div>
            <div className="mb-6">
              <h2 className="section-heading">Move-Out Cleaning Checklist</h2>
              <p className="text-gray-600 mt-2">
                Move-out cleaning includes everything in the deep cleaning checklist <strong>plus</strong> the items below, designed to satisfy landlord inspections and recover your security deposit.{" "}
                <Link href="/move-out-cleaning" className="text-brand-green font-semibold hover:underline">Learn more about move-out cleaning →</Link>
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-4 text-sm text-orange-700 font-semibold">
              ✓ Everything in Standard + Deep Cleaning, PLUS the following move-out specific tasks:
            </div>
            <ChecklistSection title="Move-Out Cleaning: Additional Items" items={moveOutExtras} variant="orange" />
          </div>

        </div>
      </section>

      {/* NOT INCLUDED */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">What Is NOT Included (Without Add-On)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Inside oven cleaning (add-on, always included with move-out cleaning)",
              "Inside cabinets (add-on, always included with move-out cleaning)",
              "Exterior window cleaning",
              "Laundry or dish washing",
              "Garage cleaning (sweeping the inside of the garage is an add-on)",
              "Exterior pressure washing",
              "Organizing or decluttering",
              "Biohazard situations",
              "Areas blocked by clutter",
              "Pet waste removal",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3">
                <span className="text-red-400 font-bold text-lg">✗</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-4">
            The add-ons we offer, with prices, are on our pricing page.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Cleaning Checklist: FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-brand-green">
                  <h3 className="text-left pr-4">{faq.question}</h3>
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/deep-cleaning" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning</h3>
              <p className="text-sm text-gray-600">Full details and pricing for our deep cleaning service.</p>
            </Link>
            <Link href="/recurring-cleaning" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Recurring Cleaning</h3>
              <p className="text-sm text-gray-600">Recurring house cleaning for ongoing home maintenance.</p>
            </Link>
            <Link href="/move-out-cleaning" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out Cleaning</h3>
              <p className="text-sm text-gray-600">Deposit-back cleaning: full checklist and pricing.</p>
            </Link>
            <Link href="/pricing" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Pricing</h3>
              <p className="text-sm text-gray-600">Flat-rate prices for all service types by home size.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Ready to Book? Get a Free Quote.</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Now that you know exactly what we clean, tell us about your home and we&apos;ll
                send you a firm flat-rate price. Serving Romeoville, Plainfield, Naperville,
                and the southwest suburbs.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">Flat-rate · Eco-friendly · Insured &amp; bonded · 48-hr guarantee</p>
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
