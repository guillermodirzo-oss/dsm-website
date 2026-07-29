import type { Metadata } from "next";
import { REAL_REVIEWS, REVIEW_COUNT, reviewAttribution } from "@/lib/realReviews";
import Link from "next/link";

export const metadata: Metadata = {
  title: "5-Star Reviews",
  description:
    "Read 5-star reviews for DSM Cleaning Solutions — trusted house cleaning in Plainfield, Romeoville, Naperville & Bolingbrook IL. Family owned & insured.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/reviews" },
  openGraph: {
    title: "5-Star Reviews | DSM Cleaning Solutions Romeoville IL",
    description:
      "Read 5-star reviews for DSM Cleaning Solutions — trusted house cleaning in Plainfield, Romeoville, Naperville & Bolingbrook IL. Family owned & insured.",
    url: "https://www.dsmcleaningsolutions.com/reviews",
    siteName: "DSM Cleaning Solutions",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "DSM Cleaning Solutions — 5-Star Rated House Cleaning in Romeoville IL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5-Star Reviews | DSM Cleaning Solutions Romeoville IL",
    description:
      "Read 5-star reviews for DSM Cleaning Solutions — trusted house cleaning in Plainfield, Romeoville, Naperville & Bolingbrook IL.",
    images: ["/hero-image.png"],
  },
};

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=DSM+Cleaning+Solutions+Romeoville+IL#lrd=0x880e614a12f4a4d5:0x1,1,,,,";

const reviews = REAL_REVIEWS;

// aggregateRating lives in layout.tsx (global LocalBusiness entity with @id "#business").
// Keeping it here too would cause the "Review has multiple aggregate ratings" GSC error
// because Google merges all schemas sharing the same @id across the site.
// This schema only adds the individual Review items to that same entity.
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.dsmcleaningsolutions.com/#business",
  name: "DSM Cleaning Solutions",
  image: "https://www.dsmcleaningsolutions.com/Logo.png",
  url: "https://www.dsmcleaningsolutions.com",
  telephone: "+18152462113",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Romeoville",
    addressRegion: "IL",
    postalCode: "60446",
    addressCountry: "US",
  },
  review: REAL_REVIEWS.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: r.text,
  })),
};

function StarRating() {
  return (
    <span className="text-yellow-400 text-xl leading-none" aria-label="5 stars">
      ★★★★★
    </span>
  );
}

function ReviewCard({
  name,
  location,
  date,
  text,
}: {
  name: string;
  location?: string;
  date?: string;
  text: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
      {/* Stars */}
      <StarRating />

      {/* Review text */}
      <p className="text-gray-700 leading-relaxed text-sm flex-1">&ldquo;{text}&rdquo;</p>

      {/* Reviewer */}
      <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
        <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-gray-900 text-sm">{name}</p>
          {(location || date) ? (
            <p className="text-xs text-gray-500">
              {[location, date].filter(Boolean).join(" · ")}
            </p>
          ) : null}
        </div>
        {/* Google G icon */}
        <div className="ml-auto">
          <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Google review">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-medium">Reviews</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              DSM Cleaning Solutions Reviews
            </h1>
            <p className="text-xl text-white/90 mb-4 leading-relaxed">
              See what homeowners across Plainfield, Romeoville, Naperville &amp; Bolingbrook
              are saying about us.
            </p>
            {/* Star display */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-yellow-300 text-3xl leading-none">★★★★★</span>
              <div>
                <span className="text-white font-bold text-xl">5.0</span>
                <span className="text-white/75 text-base ml-2">average · {REVIEW_COUNT} reviews</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white btn-lg"
              >
                ⭐ Leave Us a Review
              </a>
              <Link
                href="/book"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white btn-lg"
              >
                Book a Cleaning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RATING SUMMARY CARD */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 bg-brand-green-50 border border-brand-green-100 rounded-2xl p-8">
            {/* Score */}
            <div className="text-center">
              <p className="text-7xl font-extrabold text-brand-green leading-none mb-2">5.0</p>
              <div className="text-yellow-400 text-3xl mb-1">★★★★★</div>
              <p className="text-sm text-gray-500 font-medium">Based on {REVIEW_COUNT} reviews</p>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-24 bg-brand-green-100" />

            {/* Badges */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 bg-white border border-brand-green-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm">
                <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google Verified
              </div>
              <div className="block">
                <span className="inline-flex items-center gap-2 bg-white border border-brand-green-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm">
                  <span className="text-yellow-400">★</span> 5-Star Rated
                </span>
              </div>
              <div className="block">
                <span className="inline-flex items-center gap-2 bg-white border border-brand-green-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm">
                  ✅ Satisfaction Guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEW GRID */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What Our Customers Are Saying</h2>
            <p className="section-subheading mx-auto">
              Real reviews from homeowners across the southwest Chicago suburbs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard
                key={review.name}
                name={reviewAttribution(review)}
                text={review.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LEAVE A REVIEW CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-5xl block mb-4">⭐</span>
          <h2 className="section-heading mb-4">Love Our Service? Leave Us a Review</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Your feedback helps other families in Plainfield, Romeoville and the southwest
            suburbs find a cleaner they can trust.
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-lg inline-flex items-center gap-2 mb-4"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Leave a Google Review
          </a>
          <p className="text-sm text-gray-400">
            Takes less than 2 minutes — and it means the world to our small family business.
          </p>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-10 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: "🏠", title: "Family Owned & Operated", desc: "A local business you can trust." },
              { icon: "🛡️", title: "Fully Insured & Bonded", desc: "Every job fully covered." },
              { icon: "🌿", title: "Eco-Friendly Products", desc: "Safe for kids, pets & the environment." },
            ].map((badge) => (
              <div key={badge.title} className="flex flex-col items-center gap-2">
                <span className="text-4xl">{badge.icon}</span>
                <p className="font-bold text-gray-900 text-sm">{badge.title}</p>
                <p className="text-xs text-gray-500">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience 5-Star Cleaning?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join hundreds of happy homeowners across the southwest Chicago suburbs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-green font-bold px-8 py-3.5 rounded-full hover:bg-orange-50 transition-colors shadow-md text-base"
            >
              Book Your Cleaning
            </Link>
            <a
              href="tel:+18152462113"
              className="text-white font-semibold text-base border-2 border-white/50 rounded-full px-8 py-3.5 hover:bg-white/10 transition-colors"
            >
              Call (815) 246-2113
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
