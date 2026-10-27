import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WATCH_VIDEOS } from "@/lib/serviceVideos";

const SITE = "https://www.dsmcleaningsolutions.com";

export const metadata: Metadata = {
  title: { absolute: "Cleaning Videos | DSM Cleaning Solutions, Romeoville IL" },
  description:
    "Short videos from DSM Cleaning Solutions in Romeoville, IL: what a deep clean adds, what a move-out clean includes, and how recurring cleaning works.",
  alternates: { canonical: `${SITE}/videos` },
};

/** Lists every video watch page (app/videos/[slug]). */
export default function VideosPage() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-heading text-3xl md:text-5xl text-center mb-3">Videos</h1>
        <p className="text-center text-gray-500 mb-10">Each one is under a minute, with captions, so you can watch on mute.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WATCH_VIDEOS.map((v) => (
            <Link
              key={v.slug}
              href={`/videos/${v.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-video bg-gray-900">
                <Image src={v.wide.poster} alt={`${v.schema.name}, video thumbnail`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl" style={{ backgroundColor: "#E8622A" }}>
                    <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                </span>
              </div>
              <div className="p-5">
                <h2 className="font-bold text-gray-900 group-hover:text-brand-green">{v.schema.name}</h2>
                <p className="text-sm text-gray-500 mt-1">{v.serviceLabel}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
