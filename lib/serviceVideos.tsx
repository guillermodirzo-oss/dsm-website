import type { ServiceVideo } from "@/components/ServiceVideoSection";

/**
 * Service sales videos, one per service, shown on the service page and every
 * city page for that service. Source and re-render steps: video/<name>-vsl/.
 * The narrator is an ElevenLabs AI voice; never present it as the owners.
 */
export const RECURRING_VIDEO: ServiceVideo = {
  id: "recurring",
  vertical: { src: "/videos/dsm-recurring-vertical.mp4", poster: "/videos/dsm-recurring-vertical-poster.jpg" },
  wide: { src: "/videos/dsm-recurring-wide.mp4", poster: "/videos/dsm-recurring-wide-poster.jpg" },
  label: "How DSM recurring house cleaning works, a short video with captions",
  endLine: (
    <>
      A clean house, <span className="text-orange-400">every time.</span>
    </>
  ),
  schema: {
    name: "Recurring House Cleaning With DSM Cleaning Solutions",
    description:
      "How recurring house cleaning works with DSM Cleaning Solutions in Romeoville, IL: the same team every visit, weekly, every two weeks or monthly, save up to 20% per visit, price locked for 12 months, no contracts and no deep clean needed to start.",
    uploadDate: "2026-10-19T18:00:00-05:00",
    duration: "PT43S",
  },
};

export const DEEP_VIDEO: ServiceVideo = {
  id: "deep_cleaning",
  vertical: { src: "/videos/dsm-deep-vertical.mp4", poster: "/videos/dsm-deep-vertical-poster.jpg" },
  wide: { src: "/videos/dsm-deep-wide.mp4", poster: "/videos/dsm-deep-wide-poster.jpg" },
  label: "What a DSM deep clean includes, a short video with captions",
  endLine: (
    <>
      Get your whole house <span className="text-orange-400">caught up.</span>
    </>
  ),
  schema: {
    name: "Deep House Cleaning With DSM Cleaning Solutions",
    description:
      "What a deep clean from DSM Cleaning Solutions in Romeoville, IL adds on top of a regular clean: grout scrubbing, baseboards, doors and door frames, degreasing the stovetop, hood and burners, vacuuming under and behind furniture, light fixtures and inside window glass. Exact price before you book, no deposit, 48-hour re-clean guarantee.",
    uploadDate: "2026-10-19T18:30:00-05:00",
    duration: "PT47S",
  },
};
