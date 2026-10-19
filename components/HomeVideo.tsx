"use client";

import VslVideo from "@/components/VslVideo";

/** The homepage intro video. Player behaviour lives in components/VslVideo.tsx. */
export default function HomeVideo() {
  return (
    <VslVideo
      video="homepage_intro"
      vertical={{ src: "/videos/dsm-intro-vertical.mp4", poster: "/videos/dsm-intro-vertical-poster.jpg" }}
      wide={{ src: "/videos/dsm-intro-wide.mp4", poster: "/videos/dsm-intro-wide-poster.jpg" }}
      label="Meet Guillermo and Rocío of DSM Cleaning Solutions, a one-minute video with captions"
      endLine={<>Ready for a house that&apos;s <span className="text-orange-400">actually clean?</span></>}
    />
  );
}
