import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import VslVideo from "@/components/VslVideo";
import { WATCH_VIDEOS, watchVideoBySlug } from "@/lib/serviceVideos";
import { REVIEW_COUNT, REVIEW_RATING } from "@/lib/siteConstants";

/**
 * A watch page for each sales video. Google only lists a video in video
 * results when the video is the main thing on its page, and on the service
 * pages it sits partway down. So each video also gets this page: the player
 * first, then the booking button and the full transcript. Content comes from
 * lib/serviceVideos.tsx (WATCH_VIDEOS).
 */

const SITE = "https://www.dsmcleaningsolutions.com";

// Search titles, one per video. Kept here so lib/serviceVideos.tsx stays about the videos.
const TITLES: Record<string, string> = {
  "meet-dsm-cleaning-solutions": "Meet DSM Cleaning Solutions (Video) | Romeoville IL House Cleaning",
  "deep-cleaning": "Deep Cleaning Video: What a Deep Clean Adds | DSM Cleaning",
  "move-out-cleaning": "Move-Out Cleaning Video: What's Included | DSM Cleaning",
  "recurring-cleaning": "Recurring Cleaning Video: How It Works | DSM Cleaning",
};

// Search descriptions, under 160 characters each.
const DESCRIPTIONS: Record<string, string> = {
  "meet-dsm-cleaning-solutions": "A one-minute look at DSM Cleaning Solutions, the husband and wife house cleaning business in Romeoville, IL, and how booking works.",
  "deep-cleaning": "What a deep clean from DSM Cleaning Solutions adds on top of a regular clean, in under a minute. Romeoville and the southwest suburbs.",
  "move-out-cleaning": "What a move-in or move-out clean from DSM Cleaning Solutions includes, from inside the oven to the closet shelves. Under a minute.",
  "recurring-cleaning": "How recurring house cleaning works with DSM Cleaning Solutions: the same team, up to 20% off each visit, and a 12-month price lock.",
};

export function generateStaticParams() {
  return WATCH_VIDEOS.map((v) => ({ slug: v.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const v = watchVideoBySlug(params.slug);
  if (!v) return {};
  const url = `${SITE}/videos/${v.slug}`;
  const title = TITLES[v.slug] ?? `${v.schema.name} | DSM Cleaning Solutions`;
  return {
    title: { absolute: title },
    description: DESCRIPTIONS[v.slug],
    alternates: { canonical: url },
    openGraph: {
      title,
      description: DESCRIPTIONS[v.slug],
      url,
      type: "video.other",
      images: [{ url: `${SITE}${v.wide.poster}`, width: 1280, height: 720 }],
      videos: [{ url: `${SITE}${v.wide.src}`, width: 1280, height: 720, type: "video/mp4" }],
    },
  };
}

export default function VideoWatchPage({ params }: { params: { slug: string } }) {
  const v = watchVideoBySlug(params.slug);
  if (!v) notFound();
  const url = `${SITE}/videos/${v.slug}`;

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.schema.name,
    description: v.schema.description,
    thumbnailUrl: [SITE + v.wide.poster, SITE + v.vertical.poster],
    uploadDate: v.schema.uploadDate,
    duration: v.schema.duration,
    contentUrl: SITE + v.wide.src,
    transcript: v.transcript.join(" "),
    publisher: { "@id": `${SITE}/#business` },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Videos", item: `${SITE}/videos` },
      { "@type": "ListItem", position: 3, name: v.schema.name, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* The video is the first thing on the page: that is what makes this a watch page. */}
      <section className="bg-gray-900 pt-6 pb-10 md:pt-10 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs sm:text-sm text-white/60 mb-4 flex items-center justify-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/videos" className="hover:underline">Videos</Link>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center tracking-tight mb-6 md:mb-8">{v.schema.name}</h1>
          <VslVideo video={v.id} vertical={v.vertical} wide={v.wide} label={v.label} endLine={v.endLine} />
          <div className="text-center mt-8">
            <Link
              href="/book"
              className="inline-block font-extrabold text-base text-white py-4 px-9 rounded-full active:scale-95 transition-all duration-200 shadow-2xl"
              style={{ backgroundColor: "#E8622A", boxShadow: "0 8px 30px rgba(232,98,42,0.45)" }}
            >
              See My Price &amp; Book
            </Link>
            <p className="text-white/60 text-sm mt-3">
              {REVIEW_RATING} stars from {REVIEW_COUNT} Google reviews · or call{" "}
              <a href="tel:+18152462113" className="text-white font-semibold hover:underline">(815) 246-2113</a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 leading-relaxed text-lg">{v.schema.description}</p>
          <p className="mt-4">
            <Link href={v.servicePath} className="text-brand-green font-semibold hover:underline">
              {v.serviceLabel}: prices, checklist and reviews →
            </Link>
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Transcript</h2>
          <div className="space-y-3 text-gray-600 leading-relaxed">
            {v.transcript.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">More Videos</h2>
          <ul className="space-y-2">
            {WATCH_VIDEOS.filter((o) => o.slug !== v.slug).map((o) => (
              <li key={o.slug}>
                <Link href={`/videos/${o.slug}`} className="text-brand-green font-semibold hover:underline">
                  {o.schema.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
