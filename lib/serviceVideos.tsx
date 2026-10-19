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
    duration: "PT45S",
  },
};
