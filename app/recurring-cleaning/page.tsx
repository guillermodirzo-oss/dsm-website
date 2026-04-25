import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Recurring Cleaning Plainfield IL",
  description:
    "Weekly, biweekly & monthly maid service in Plainfield, IL. Reliable, eco-friendly & insured. Save up to 20% with recurring plans. Free estimate.",
  keywords: [
    "recurring house cleaning Romeoville",
    "maid service Romeoville IL",
    "weekly house cleaning Romeoville",
    "biweekly house cleaning Romeoville",
    "monthly house cleaning Romeoville",
    "regular maid service Romeoville",
    "scheduled house cleaning Romeoville",
    "housekeeping service Romeoville IL",
    "residential cleaning company Romeoville",
    "maintenance cleaning Romeoville",
  ],
  alternates: {
    canonical: "https://www.dsmcleaningsolutions.com/recurring-cleaning",
  },
  openGraph: {
    title: "Recurring Cleaning Plainfield IL",
    description:
      "Weekly, biweekly & monthly maid service in Plainfield, IL. Reliable, eco-friendly & insured. Save up to 20% with recurring plans. Free estimate.",
    url: "https://www.dsmcleaningsolutions.com/recurring-cleaning",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Recurring House Cleaning / Maid Service",
  provider: {
    "@type": "LocalBusiness",
    name: "DSM Cleaning Solutions",
    telephone: "+18152462113",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Romeoville",
      addressRegion: "IL",
      postalCode: "60446",
    },
  },
  areaServed: ["Romeoville, IL", "Plainfield, IL", "Naperville, IL", "Bolingbrook, IL"],
  description:
    "Professional recurring maid service and house cleaning in Romeoville and surrounding areas. Weekly, biweekly, and monthly cleaning plans available.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does recurring maid service cost in Romeoville, IL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recurring cleaning plans are priced based on the size of your home and frequency of service. Weekly clients receive the best rates, followed by biweekly and monthly. Contact us for a free estimate tailored to your home.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customize my recurring cleaning plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We work with you to create a cleaning checklist that fits your priorities and your home. Tell us what rooms matter most, any areas to skip, and any special requests — we'll accommodate them.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to be home during the cleaning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — many of our recurring clients give us a key or access code. Our fully insured and background-checked team will take excellent care of your home whether you're there or not.",
      },
    },
    {
      "@type": "Question",
      name: "What if I need to skip or reschedule a cleaning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No problem at all. Just give us a call or message at least 24 hours in advance and we'll happily reschedule your cleaning. We understand life happens.",
      },
    },
  ],
};

const faqs = [
  {
    question: "How much does recurring maid service cost in Romeoville, IL?",
    answer:
      "Recurring cleaning plans are priced based on home size and frequency. Weekly clients receive the best rates, followed by biweekly and monthly. Contact us for a free estimate tailored to your home.",
  },
  {
    question: "Can I customize my recurring cleaning plan?",
    answer:
      "Absolutely. We work with you to create a cleaning checklist that fits your priorities. Tell us what rooms matter most, any areas to skip, and any special requests — we'll accommodate them.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "No — many of our recurring clients give us a key or access code. Our fully insured and background-checked team will take excellent care of your home whether you're there or not.",
  },
  {
    question: "What if I need to skip or reschedule a cleaning?",
    answer:
      "No problem. Just give us a call or message at least 24 hours in advance and we'll happily reschedule. We understand life happens.",
  },
  {
    question: "Do you offer recurring maid service in Plainfield, IL?",
    answer:
      "Yes! We serve Romeoville, Plainfield, Naperville, Bolingbrook, and all southwest Chicago suburbs with weekly, biweekly, and monthly cleaning plans.",
  },
  {
    question: "What is included in a recurring maid service visit?",
    answer:
      "Standard recurring cleans include vacuuming all floors, mopping hard surfaces, cleaning bathrooms (toilet, sink, tub/shower, mirrors), wiping kitchen countertops and surfaces, taking out trash, and dusting furniture and surfaces. We can customize this checklist for your home.",
  },
];

const plans = [
  {
    name: "Weekly Cleaning",
    freq: "Every week",
    icon: "📅",
    highlight: true,
    badge: "Best Value",
    desc: "Ideal for busy families, pet owners, or anyone who wants their home consistently spotless year-round.",
    includes: [
      "Vacuum all floors and carpets",
      "Mop all hard floors",
      "Full bathroom cleaning & disinfecting",
      "Kitchen countertops & surfaces",
      "Dust furniture and surfaces",
      "Empty all trash bins",
      "Wipe mirrors and glass",
      "Customizable checklist",
    ],
  },
  {
    name: "Biweekly Cleaning",
    freq: "Every 2 weeks",
    icon: "🗓️",
    highlight: false,
    badge: "Most Popular",
    desc: "Our most popular plan. Perfect for working professionals and families who want a clean home without the weekly commitment.",
    includes: [
      "Vacuum all floors and carpets",
      "Mop all hard floors",
      "Full bathroom cleaning & disinfecting",
      "Kitchen countertops & appliance surfaces",
      "Dust furniture, shelves, and blinds",
      "Empty all trash bins",
      "Wipe mirrors and glass",
      "Customizable checklist",
    ],
  },
  {
    name: "Monthly Cleaning",
    freq: "Once per month",
    icon: "📆",
    highlight: false,
    badge: null,
    desc: "Great for those who do light upkeep themselves and want a professional deep clean once a month to reset the home.",
    includes: [
      "Vacuum all floors and carpets",
      "Mop all hard floors",
      "Full bathroom cleaning & disinfecting",
      "Kitchen deep clean",
      "Dust all surfaces and furniture",
      "Clean window sills and tracks",
      "Empty all trash bins",
      "Customizable checklist",
    ],
  },
];

const recurringChecklist = [
  "Vacuum all carpets and rugs",
  "Mop all hard surface floors",
  "Clean and disinfect all toilets",
  "Scrub and clean shower/tub surfaces",
  "Wipe sinks and countertops",
  "Clean bathroom mirrors",
  "Wipe down kitchen countertops",
  "Clean kitchen sink",
  "Wipe exterior of kitchen appliances",
  "Dust all furniture and surfaces",
  "Empty and re-line trash bins",
  "Wipe accessible baseboards",
  "Wipe light switches and door handles",
  "General tidying of surfaces",
];

export default function RecurringCleaningPage() {
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
              { "@type": "ListItem", position: 2, name: "Recurring Maid Service", item: "https://www.dsmcleaningsolutions.com/recurring-cleaning" },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">Recurring Maid Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Recurring Maid Service &amp; House Cleaning in Romeoville, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Keep your home consistently clean with our reliable weekly, biweekly, or monthly
              maid service. Family-owned, eco-friendly, and trusted by hundreds of Romeoville families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://dsmcleaningsolutions.bookingkoala.com/booknow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-brand-green font-bold py-4 px-8 rounded-lg hover:bg-brand-green-50 transition-colors text-lg text-center"
              >
                Start My Cleaning Plan
              </Link>
              <a
                href="tel:+18152462113"
                className="inline-block bg-transparent text-white font-bold py-4 px-8 rounded-lg border-2 border-white hover:bg-white/10 transition-colors text-lg text-center"
              >
                📞 (815) 246-2113
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600">
            {["📅 Weekly, Biweekly & Monthly Plans", "🔑 Key-Holder Service Available", "🌿 Eco-Friendly Products", "🛡️ Fully Insured", "👨‍👩‍👧 Family Owned"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Choose Your Recurring Cleaning Plan</h2>
            <p className="section-subheading mx-auto">
              Flexible plans designed for every lifestyle. The more often we clean, the less time each visit takes — and the better value you get.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border-2 relative ${
                  plan.highlight
                    ? "border-brand-green bg-white shadow-xl"
                    : "border-gray-200 bg-white shadow-sm"
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold text-white ${plan.highlight ? "bg-brand-green" : "bg-gray-600"}`}>
                    {plan.badge}
                  </div>
                )}
                <span className="text-4xl block mb-3">{plan.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-brand-green font-semibold mb-4">{plan.freq}</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{plan.desc}</p>
                <ul className="space-y-2 mb-8">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="https://dsmcleaningsolutions.bookingkoala.com/booknow" target="_blank" rel="noopener noreferrer" className={`block text-center font-bold py-3 px-6 rounded-lg transition-colors ${plan.highlight ? "btn-primary" : "btn-secondary"}`}>
                  Get a Free Estimate
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm">
            All plans are fully customizable. Prices vary by home size. Call{" "}
            <a href="tel:+18152462113" className="text-brand-green font-semibold hover:underline">(815) 246-2113</a>{" "}
            for a personalized quote.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading">What&apos;s Included in Every Recurring Clean</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Every recurring visit from DSM Cleaning Solutions follows a thorough, consistent checklist
                to keep your Romeoville home in top condition. We&apos;re happy to customize it around your
                priorities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {recurringChecklist.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="section-heading">Why Choose a Recurring Plan?</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Save Money Over Time",
                    desc: "Recurring clients receive discounted rates compared to one-time cleanings. The more frequent your service, the better the rate.",
                  },
                  {
                    title: "Consistent, Clean Home",
                    desc: "A professionally cleaned home on a regular schedule means less buildup, less stress, and more time for the things that matter.",
                  },
                  {
                    title: "The Same Trusted Team",
                    desc: "We assign the same cleaning team to your home so they learn your preferences and deliver consistent results every visit.",
                  },
                  {
                    title: "Flexible & Easy to Adjust",
                    desc: "Need to skip a week or change your schedule? No problem. We work around your life, not the other way around.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 bg-brand-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">What Our Recurring Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReviewCard
              name="Jennifer R."
              location="Romeoville, IL"
              text="I've had biweekly cleaning with DSM for over a year now. They are so reliable and thorough. My house always looks amazing after they come. I love that they use eco-friendly products too — safe for my dogs!"
              date="January 2025"
            />
            <ReviewCard
              name="Carlos M."
              location="Bolingbrook, IL"
              text="DSM does my weekly cleaning and I couldn't be happier. The same team comes every time so they know my home perfectly. I never have to give instructions anymore — they just handle it."
              date="November 2024"
            />
            <ReviewCard
              name="Patricia L."
              location="Plainfield, IL"
              text="I switched from a national cleaning company to DSM and it was the best decision. More affordable, better quality, and they actually care about doing a good job. Family-owned makes a difference!"
              date="February 2025"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Recurring Maid Service FAQs</h2>
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

      {/* RELATED */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Services We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning</h3>
              <p className="text-sm text-gray-600">Start your recurring service with a thorough deep clean.</p>
            </Link>
            <Link href="/move-out-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Move-Out / Move-In Cleaning</h3>
              <p className="text-sm text-gray-600">One-time cleaning for moving in or out.</p>
            </Link>
            <Link href="/plainfield-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Maid Service in Plainfield</h3>
              <p className="text-sm text-gray-600">Recurring cleaning plans available in Plainfield, IL.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Start Your Recurring Cleaning Plan Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Ready to enjoy a consistently clean home without lifting a finger? Get a free estimate
                for weekly, biweekly, or monthly maid service in Romeoville, Plainfield, and surrounding suburbs.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-brand-green-50 transition-colors mb-6">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80">Family-owned · Eco-friendly · Fully insured · Flexible plans</p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
