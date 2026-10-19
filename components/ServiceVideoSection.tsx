import Link from "next/link";
import type { ReactNode } from "react";
import VslVideo, { type VideoFiles } from "@/components/VslVideo";

/**
 * A service's short sales video in a dark band, with the booking button and
 * phone under it and VideoObject schema so Google can list the video.
 * Video files and their source live in public/videos/ and video/<name>-vsl/.
 * When a video is re-rendered, update uploadDate and duration where the
 * section is used.
 */
export type ServiceVideo = {
  /** GA4 "video" parameter. */
  id: string;
  vertical: VideoFiles;
  wide: VideoFiles;
  label: string;
  endLine: ReactNode;
  schema: { name: string; description: string; uploadDate: string; duration: string };
};

const SITE = "https://www.dsmcleaningsolutions.com";

export default function ServiceVideoSection({
  video,
  kicker,
  heading,
}: {
  video: ServiceVideo;
  kicker: string;
  heading: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.schema.name,
    description: video.schema.description,
    thumbnailUrl: [SITE + video.wide.poster, SITE + video.vertical.poster],
    uploadDate: video.schema.uploadDate,
    duration: video.schema.duration,
    contentUrl: SITE + video.wide.src,
  };
  return (
    <section id="video" className="py-10 md:py-20 bg-gray-900 scroll-mt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kept short on phones so the heading and the whole vertical video fit on one screen. */}
        <div className="text-center mb-6 md:mb-10">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-2 md:mb-3">{kicker}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{heading}</h2>
          <p className="hidden sm:block text-white/70 mt-3 text-base md:text-lg">Captions are on, so you can watch it on mute.</p>
        </div>
        <VslVideo video={video.id} vertical={video.vertical} wide={video.wide} label={video.label} endLine={video.endLine} />
        <div className="text-center mt-8 md:mt-10">
          <Link
            href="/book"
            className="inline-block font-extrabold text-base text-white py-4 px-9 rounded-full active:scale-95 transition-all duration-200 shadow-2xl"
            style={{ backgroundColor: "#E8622A", boxShadow: "0 8px 30px rgba(232,98,42,0.45)" }}
          >
            See My Price &amp; Book
          </Link>
          <p className="text-white/60 text-sm mt-3">
            or call <a href="tel:+18152462113" className="text-white font-semibold hover:underline">(815) 246-2113</a>
          </p>
        </div>
      </div>
    </section>
  );
}
