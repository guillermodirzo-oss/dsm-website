import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Our House Cleaning Process | What to Expect",
  description:
    "Learn what to expect when you book DSM Cleaning Solutions in Romeoville IL. Simple booking, professional service, 48-hr guarantee.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/our-cleaning-process" },
  openGraph: {
    title: "Our House Cleaning Process | What to Expect | DSM Cleaning Solutions",
    description:
      "Learn what to expect when you book DSM Cleaning Solutions in Romeoville IL. Simple booking, professional service, 48-hr guarantee.",
    url: "https://www.dsmcleaningsolutions.com/our-cleaning-process",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "DSM Cleaning Process" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

const faqs = [
  {
    question: "Do I need to be home during cleaning?",
    answer:
      "No — most DSM customers are not home during their cleaning. Many clients provide a door code, garage code, or lockbox key and our team lets themselves in, cleans, and locks up. If you prefer to be home, that&apos;s completely fine too. For your first cleaning, some customers prefer to be present to meet the team and walk through any specific preferences.",
  },
  {
    question: "What do your cleaners bring?",
    answer:
      "Our team brings all cleaning products, microfiber cloths, mops, buckets, and standard cleaning equipment. We use professional-grade, non-toxic, eco-friendly products — you don&apos;t need to supply anything. The only thing we ask you to supply is a working vacuum if you prefer we use yours, though we bring our own equipment for most jobs.",
  },
  {
    question: "How do I prepare for my first clean?",
    answer:
      "For your first cleaning, we recommend: (1) picking up loose items from floors and surfaces so we can clean underneath them, (2) letting us know about any fragile items or areas to avoid, (3) confirming your entry method so we can get in without delay, and (4) ensuring pets are secured or comfortable with strangers if they react to new people. That&apos;s it — we handle everything else.",
  },
  {
    question: "What if I am not happy with the results?",
    answer:
      "Contact us within 48 hours of your cleaning and we will send our team back to re-clean any area you&apos;re not satisfied with — at no additional charge. This is our 48-hour satisfaction guarantee and it applies to every single cleaning we perform. We don&apos;t ask you to fill out forms or justify your feedback — just let us know what fell short and we fix it.",
  },
  {
    question: "How do I set up recurring service?",
    answer:
      "After your first cleaning, simply let us know you&apos;d like to set up a recurring schedule. Most customers choose bi-weekly or monthly service. We&apos;ll lock in your preferred day and time slot and send reminders before each visit. Recurring customers receive a discounted rate compared to one-time bookings. You can pause, reschedule, or cancel with reasonable notice — no long-term contracts required.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "House Cleaning",
  name: "Our House Cleaning Process — DSM Cleaning Solutions",
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
    "Step-by-step overview of the DSM Cleaning Solutions process — from booking to recurring service. Professional house cleaning in Romeoville, IL and the southwest Chicago suburbs.",
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
    { "@type": "ListItem", position: 2, name: "Our Cleaning Process", item: "https://www.dsmcleaningsolutions.com/our-cleaning-process" },
  ],
};

const processSteps = [
  {
    number: "01",
    title: "Book Online or Call",
    color: "bg-brand-green",
    details: [
      {
        heading: "Two Easy Ways to Get Started",
        body: "Fill out our contact form on the website or call us directly at (815) 246-2113. Both options take under 2 minutes. We don&apos;t require account creation, credit cards, or lengthy intake forms — just your name, contact info, home size, and service type.",
      },
      {
        heading: "Online vs. Calling",
        body: "The contact form is best if you want to submit your request at any time and receive a same-day quote via email or text. Calling is best if you have questions, want an instant ballpark, or need to book quickly. Either way, a real person from our team handles your request — no bots, no automated systems.",
      },
    ],
  },
  {
    number: "02",
    title: "Free Estimate & Confirmation",
    color: "bg-brand-green",
    details: [
      {
        heading: "What Happens After You Contact Us",
        body: "Once we receive your request, we prepare a flat-rate quote based on your home size (bedrooms and bathrooms), service type, and the current condition of your home. Most quotes are sent same-day, often within a few hours. The price is firm — not a range, not an estimate that changes on arrival.",
      },
      {
        heading: "Confirming Your Booking",
        body: "When you accept your quote, we schedule your cleaning and confirm the date, time window, and entry method. You&apos;ll receive a confirmation with all the details. For recurring bookings, we lock in your preferred schedule at this stage. No deposit required for most bookings.",
      },
    ],
  },
  {
    number: "03",
    title: "Your Cleaning Day",
    color: "bg-brand-green",
    details: [
      {
        heading: "What Time to Expect Us",
        body: "We arrive within our communicated window — typically morning (8am–12pm) or afternoon (12pm–4pm) slots. We&apos;ll send a reminder the day before your cleaning. If our timing shifts for any reason, we contact you in advance.",
      },
      {
        heading: "What Our Team Brings",
        body: "Everything. Our team arrives with all cleaning products, microfiber cloths, mops, and equipment. You don&apos;t need to provide anything. Our products are professional-grade, non-toxic, and eco-friendly — safe for your family and pets.",
      },
      {
        heading: "How Long It Takes",
        body: "Standard cleaning for a 2–3 bedroom home typically takes 2–3 hours with a two-person team. Deep cleaning takes 4–6 hours. Move-out cleaning can take 5–8 hours depending on size and condition. We&apos;ll give you a time estimate with your quote so you can plan accordingly.",
      },
    ],
  },
  {
    number: "04",
    title: "After the Clean",
    color: "bg-brand-green",
    details: [
      {
        heading: "Our Quality Check Process",
        body: "Before leaving your home, our team does a final walkthrough to verify all areas were covered according to your service type checklist. This is our internal quality check — it happens on every job before we pack up.",
      },
      {
        heading: "The 48-Hour Satisfaction Guarantee",
        body: "After your cleaning, we encourage you to walk through your home. If anything doesn&apos;t meet your expectations, contact us within 48 hours and we will return to re-clean that area at no charge. No forms, no justification needed — just reach out and we make it right.",
      },
      {
        heading: "How to Give Feedback",
        body: "We welcome feedback after every cleaning. A quick text, call, or email is all it takes. Your feedback directly shapes how we serve your home on future visits and helps us continuously improve. After your first cleaning, we may also ask you to leave a Google review — your honest opinion means everything to a local family business.",
      },
    ],
  },
  {
    number: "05",
    title: "Recurring Service Setup",
    color: "bg-brand-green",
    details: [
      {
        heading: "How to Set Up Ongoing Service",
        body: "After your first cleaning, simply tell us you&apos;d like to continue on a regular schedule. We offer weekly, bi-weekly, and monthly recurring plans. Bi-weekly is our most popular frequency — often the best balance between maintaining a clean home and cost.",
      },
      {
        heading: "How Scheduling Works",
        body: "Recurring customers get a locked-in time slot on their preferred day. We send reminders 24–48 hours before each visit. Your schedule is yours — we don&apos;t shuffle recurring customers around for new bookings.",
      },
      {
        heading: "Making Changes",
        body: "Life happens. You can reschedule, pause, or skip a visit with reasonable advance notice (typically 48 hours). There are no long-term contracts and no cancellation penalties. We want recurring customers to stay because they&apos;re happy — not because they&apos;re locked in.",
      },
    ],
  },
];

const weVsYou = {
  weBring: [
    "All eco-friendly cleaning products",
    "Microfiber cloths and mop heads",
    "Mop, bucket, and cleaning equipment",
    "Trash bags and liner replacements",
    "Glass and surface cleaners",
    "Bathroom disinfectants",
    "Floor cleaners for all surface types",
  ],
  youProvide: [
    "Access to your home (code, key, or lockbox)",
    "Running water and electricity",
    "Your preferred areas of focus (if any)",
    "Trash cans in place for liner replacement",
  ],
};

export default function OurCleaningProcessPage() {
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
              <span className="text-white">Our Cleaning Process</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Our House Cleaning Process — What to Expect with DSM
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              From your first contact to a clean home and beyond — a transparent, step-by-step
              look at how house cleaning works when you book DSM Cleaning Solutions in Romeoville,
              Plainfield, Naperville, and the southwest Chicago suburbs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-white btn-lg">Book My Cleaning</Link>
              <a href="tel:+18152462113" className="btn-outline-white btn-lg">📞 (815) 246-2113</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600">
            {["✅ Simple 5-Step Process", "⚡ Same-Day Quotes", "🌿 Eco-Friendly Products", "✔️ 48-Hr Guarantee", "👨‍👩‍👧 Family Owned"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* PROCESS OVERVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-4">How House Cleaning Works With DSM</h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Booking house cleaning in Romeoville shouldn&apos;t be complicated. Our process is
            designed to be transparent, predictable, and easy from start to finish. Here&apos;s
            exactly what happens when you choose DSM Cleaning Solutions.
          </p>

          {/* STEP QUICK NAV */}
          <div className="flex flex-wrap gap-3 mb-4">
            {processSteps.map((s) => (
              <span key={s.number} className="bg-brand-green-50 border border-brand-green-100 text-brand-green text-sm font-semibold px-4 py-2 rounded-full">
                Step {s.number}: {s.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-4 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {processSteps.map((step) => (
            <div key={step.number} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-brand-green text-white px-8 py-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 text-white font-bold text-xl flex items-center justify-center flex-shrink-0">
                  {step.number}
                </div>
                <h2 className="text-2xl font-bold">{step.title}</h2>
              </div>
              <div className="p-8 space-y-6">
                {step.details.map((detail) => (
                  <div key={detail.heading}>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{detail.heading}</h3>
                    <p className="text-gray-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: detail.body }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE BRING VS YOU PROVIDE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">What We Bring vs. What You Need to Provide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-bold text-lg text-brand-green mb-4 flex items-center gap-2">
                <span>🧹</span> What DSM Brings
              </h3>
              <ul className="space-y-2">
                {weVsYou.weBring.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-bold text-lg text-gray-700 mb-4 flex items-center gap-2">
                <span>🏠</span> What You Provide
              </h3>
              <ul className="space-y-2">
                {weVsYou.youProvide.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PETS & ENTRY */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-8">Additional Details — Pets &amp; Entry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-brand-green-50 border border-brand-green-100 rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-3">🐾 What to Do With Pets During Cleaning</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Our products are non-toxic and pet-safe, so your animals do not need to leave
                the home during cleaning. However, if your pet is anxious around strangers or
                tends to follow the cleaning team, it helps to have them in a separate room or
                crate — mainly for their comfort and to make the cleaning process more efficient.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Let us know in advance about pets so our team can be prepared — especially if
                you have dogs who may bark at the door or protective animals in certain rooms.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-3">🔑 Entry &amp; Key Policies</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Most DSM customers provide a door code, garage code, or lockbox for entry.
                Some clients leave a key with a neighbor or use a smart lock. We treat your
                entry information with strict confidentiality — it is never shared, stored
                insecurely, or used for any purpose beyond scheduled cleanings.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                If you prefer to be home to let us in, that&apos;s always welcome. For your
                first cleaning especially, some customers like to meet the team and do a
                quick walkthrough of preferences — we encourage it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Cleaning Process — FAQs</h2>
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
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/standard-cleaning" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning</h3>
              <p className="text-sm text-gray-600">Our most popular recurring service for ongoing home maintenance.</p>
            </Link>
            <Link href="/deep-cleaning" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning</h3>
              <p className="text-sm text-gray-600">Top-to-bottom cleaning for a full seasonal or first-time reset.</p>
            </Link>
            <Link href="/pricing" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Pricing</h3>
              <p className="text-sm text-gray-600">Flat-rate pricing by home size and service type — no surprises.</p>
            </Link>
            <Link href="/contact" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Get Started</h3>
              <p className="text-sm text-gray-600">Ready to book? Get your free estimate today.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                The process is simple, the pricing is transparent, and the results are backed
                by our 48-hour guarantee. Book your cleaning today — serving Romeoville,
                Plainfield, Naperville, Bolingbrook, and the southwest Chicago suburbs.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">✅ Free estimate · 🚫 No hidden fees · ✔️ 48-hr guarantee · 👨‍👩‍👧 Family owned</p>
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
