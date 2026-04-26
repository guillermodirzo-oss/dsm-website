import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Prepare for a Move-Out Cleaning in Plainfield IL | DSM Cleaning Solutions",
  description:
    "Planning a move-out cleaning in Plainfield or Naperville? Here's exactly how to prepare your home so you can get your full deposit back. Tips from DSM Cleaning Solutions.",
  alternates: {
    canonical:
      "https://www.dsmcleaningsolutions.com/blog/how-to-prepare-for-move-out-cleaning-plainfield",
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "How to Prepare for a Move-Out Cleaning in Plainfield & Naperville, IL",
  description:
    "Planning a move-out cleaning in Plainfield or Naperville? Here's exactly how to prepare your home so you can get your full deposit back.",
  datePublished: "2026-04-25",
  dateModified: "2026-04-25",
  author: {
    "@type": "Organization",
    name: "DSM Cleaning Solutions",
    url: "https://www.dsmcleaningsolutions.com",
  },
  publisher: {
    "@type": "Organization",
    name: "DSM Cleaning Solutions",
    logo: {
      "@type": "ImageObject",
      url: "https://www.dsmcleaningsolutions.com/Logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.dsmcleaningsolutions.com/blog/how-to-prepare-for-move-out-cleaning-plainfield",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.dsmcleaningsolutions.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.dsmcleaningsolutions.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Prepare for a Move-Out Cleaning in Plainfield & Naperville, IL",
      item: "https://www.dsmcleaningsolutions.com/blog/how-to-prepare-for-move-out-cleaning-plainfield",
    },
  ],
};

const title =
  "How to Prepare for a Move-Out Cleaning in Plainfield & Naperville, IL";
const truncatedTitle =
  title.length > 50 ? title.slice(0, 50) + "…" : title;

export default function BlogPostPage() {
  return (
    <main>
      {/* JSON-LD: BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{truncatedTitle}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            {title}
          </h1>

          <p className="text-white/75 text-sm">
            April 25, 2026 &nbsp;·&nbsp; By DSM Cleaning Solutions
          </p>
        </div>
      </section>

      {/* Article */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back to blog */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-brand-green font-semibold text-sm mb-10 hover:underline"
        >
          ← Back to Blog
        </Link>

        {/* Blog content */}
        <style>{`
          .blog-content h2 { font-size: 1.5rem; font-weight: 700; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem; }
          .blog-content h3 { font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-top: 1.5rem; margin-bottom: 0.5rem; }
          .blog-content p { color: #4b5563; line-height: 1.75; margin-bottom: 1rem; }
          .blog-content ul { list-style: none; padding: 0; margin-bottom: 1rem; }
          .blog-content ul li { display: flex; align-items: flex-start; gap: 0.5rem; color: #4b5563; margin-bottom: 0.5rem; font-size: 0.9375rem; }
          .blog-content ul li::before { content: "✓"; color: #f97316; font-weight: 700; flex-shrink: 0; margin-top: 0.1rem; }
          .blog-content a { color: #f97316; font-weight: 600; }
          .blog-content a:hover { text-decoration: underline; }
        `}</style>

        <div className="blog-content">
          <p>
            Moving out of your home in{" "}
            <Link href="/plainfield-il" className="text-brand-green font-semibold hover:underline">
              Plainfield
            </Link>
            ,{" "}
            <Link href="/naperville-il" className="text-brand-green font-semibold hover:underline">
              Naperville
            </Link>
            , or anywhere in the Chicago suburbs is stressful enough without
            worrying about whether you&apos;ll get your security deposit back.
            Landlords in Illinois are allowed to withhold deposits for cleaning
            costs — and many do. A professional{" "}
            <Link href="/move-out-cleaning" className="text-brand-green font-semibold hover:underline">
              move-out cleaning
            </Link>{" "}
            from DSM Cleaning Solutions is the most reliable way to make sure
            the home is left in the condition your lease requires.
          </p>
          <p>
            But there are a few things you can do before we arrive that will
            make the process smoother and faster. Here&apos;s exactly what to
            do — and what not to do — before your scheduled move-out cleaning.
          </p>

          <h2>Step 1 — Remove All of Your Belongings First</h2>
          <p>
            Before a move-out cleaning can begin, every item needs to be out of
            the home. We can&apos;t clean inside closets, cabinets, or
            underneath furniture if your belongings are still there. Schedule
            your move-out cleaning for after the movers have finished —
            ideally the same day or the day after your move. An empty home lets
            us work systematically and ensures nothing gets missed.
          </p>

          <h2>Step 2 — Leave Utilities On</h2>
          <p>
            We need running water, electricity, and working lights to do a
            thorough job. Make sure utilities aren&apos;t scheduled for
            disconnect until after the cleaning is complete. This is especially
            important for appliances — we clean inside ovens and refrigerators,
            which require power. If the lights are out or the water is off,
            we&apos;ll have to reschedule, which can put your move-out timeline
            at risk.
          </p>

          <h2>Step 3 — Point Out Any Problem Areas</h2>
          <p>
            If you know there are specific areas of concern — a stained bathtub,
            heavy grease buildup in the oven, marks on walls — let us know when
            you book. We&apos;ll make sure those areas get extra attention. Our
            48-hour satisfaction guarantee means if your landlord flags something
            after we clean, we come back and re-clean it free of charge.
          </p>

          <h2>Step 4 — Don&apos;t Pre-Clean (Seriously)</h2>
          <p>
            Many people feel like they need to tidy before the cleaners arrive.
            For a move-out clean, you don&apos;t — and it can actually slow
            things down. Leave the space as-is and let the professionals handle
            it. We&apos;re equipped for homes in any condition. Pre-cleaning
            often means you&apos;ve moved or rearranged things in ways that make
            it harder for us to work efficiently.
          </p>

          <h2>What&apos;s Included in a Move-Out Cleaning?</h2>
          <p>
            Our standard move-out cleaning covers everything a landlord will
            inspect. Here&apos;s what&apos;s included on every job:
          </p>
          <ul>
            <li>
              Full kitchen clean: inside oven, inside refrigerator, stovetop,
              microwave, and all cabinet exteriors wiped down
            </li>
            <li>
              All bathrooms scrubbed: tubs, showers, toilets, sinks, and floors
            </li>
            <li>
              All rooms: baseboards, window sills, blinds, interior doors, light
              switches, and outlet covers
            </li>
            <li>
              Floors vacuumed and mopped throughout — every room, every corner
            </li>
            <li>Inside all closets and cabinets wiped clean</li>
          </ul>
          <p>
            For homes that also need a thorough allergen reset or heavy buildup
            addressed, our{" "}
            <Link href="/deep-cleaning" className="text-brand-green font-semibold hover:underline">
              deep cleaning service
            </Link>{" "}
            can be added as an upgrade. Ask us when you book.
          </p>

          <h2>How Far in Advance Should I Book?</h2>
          <p>
            We recommend booking your move-out cleaning at least 5–7 days before
            your move-out date. Move-out season (May through August) fills up
            fast in the{" "}
            <Link href="/plainfield-il" className="text-brand-green font-semibold hover:underline">
              Plainfield
            </Link>{" "}
            and{" "}
            <Link href="/naperville-il" className="text-brand-green font-semibold hover:underline">
              Naperville
            </Link>{" "}
            areas. The sooner you schedule, the better your chances of getting
            your preferred date and time.
          </p>

          <h2>Serving Plainfield, Naperville, Romeoville &amp; Bolingbrook</h2>
          <p>
            DSM Cleaning Solutions is locally owned and based in Plainfield, IL.
            We handle move-out cleanings across Will County and DuPage County —
            including{" "}
            <Link href="/naperville-il" className="text-brand-green font-semibold hover:underline">
              Naperville
            </Link>
            ,{" "}
            <Link href="/bolingbrook-il" className="text-brand-green font-semibold hover:underline">
              Bolingbrook
            </Link>
            , and the surrounding suburbs. We&apos;re 5-star rated with a
            48-hour satisfaction guarantee on every job. Call us at{" "}
            <a href="tel:+18152462113" className="text-brand-green font-semibold hover:underline">
              (815) 246-2113
            </a>{" "}
            or book online below.
          </p>

          {/* CTA button */}
          <div className="mt-8">
            <Link
              href="https://www.dsmcleaningsolutions.com/book-now"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-green text-white font-bold px-8 py-3.5 rounded-full hover:bg-brand-green-dark transition-colors shadow-md"
            >
              Book Your Move-Out Cleaning
            </Link>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-16 border-t border-gray-100 pt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: "Move-Out Cleaning",
                href: "/move-out-cleaning",
                icon: "📦",
              },
              { label: "Deep Cleaning", href: "/deep-cleaning", icon: "🧹" },
              {
                label: "Standard Cleaning",
                href: "/standard-cleaning",
                icon: "🏠",
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex items-center gap-3 bg-gray-50 hover:bg-brand-green-50 border border-gray-100 hover:border-brand-green-100 rounded-xl px-4 py-3.5 transition-colors group"
              >
                <span className="text-xl">{service.icon}</span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-green transition-colors">
                  {service.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-brand-green py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Professionally Clean Home?
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
            DSM Cleaning Solutions serves Plainfield, Romeoville, Naperville,
            Bolingbrook, and the entire southwest Chicago suburbs. Get a free
            estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://dsmcleaningsolutions.bookingkoala.com/booknow"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-green font-bold px-8 py-3.5 rounded-full hover:bg-gray-50 transition-colors shadow-md"
            >
              Book Now
            </Link>
            <a
              href="tel:+18152462113"
              className="text-white font-semibold text-lg border-2 border-white/50 rounded-full px-8 py-3 hover:bg-white/10 transition-colors"
            >
              (815) 246-2113
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
