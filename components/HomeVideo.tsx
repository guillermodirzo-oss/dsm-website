"use client";

import VslVideo from "@/components/VslVideo";
import { HOME_VIDEO } from "@/lib/serviceVideos";

/** The homepage intro video. Files and wording live in lib/serviceVideos.tsx
 * (HOME_VIDEO); player behaviour in components/VslVideo.tsx. */
export default function HomeVideo() {
  return (
    <VslVideo
      video={HOME_VIDEO.id}
      vertical={HOME_VIDEO.vertical}
      wide={HOME_VIDEO.wide}
      label={HOME_VIDEO.label}
      endLine={HOME_VIDEO.endLine}
    />
  );
}
