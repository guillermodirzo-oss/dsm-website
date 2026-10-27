import type { ServiceVideo } from "@/components/ServiceVideoSection";

/** A video with its own watch page at /videos/<slug>, so Google can show it
 * as a video result (it only indexes videos that are the main thing on a
 * page). transcript is the narration, one string per scene, kept in step with
 * video/<name>-vsl/script.py. */
export type WatchVideo = ServiceVideo & {
  slug: string;
  servicePath: string;
  serviceLabel: string;
  transcript: string[];
};

/**
 * Service sales videos, one per service, shown on the service page and every
 * city page for that service. Source and re-render steps: video/<name>-vsl/.
 * Voiced with an ElevenLabs clone of the owner's voice (Oct 27 2026). The
 * scripts speak as "we" and never name the owners (owner decision).
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

export const MOVEOUT_VIDEO: ServiceVideo = {
  id: "move_out",
  vertical: { src: "/videos/dsm-moveout-vertical.mp4", poster: "/videos/dsm-moveout-vertical-poster.jpg" },
  wide: { src: "/videos/dsm-moveout-wide.mp4", poster: "/videos/dsm-moveout-wide-poster.jpg" },
  label: "What a DSM move-in and move-out clean includes, a short video with captions",
  endLine: (
    <>
      Hand over the keys <span className="text-orange-400">with confidence.</span>
    </>
  ),
  schema: {
    name: "Move-In and Move-Out Cleaning With DSM Cleaning Solutions",
    description:
      "What a move-in or move-out clean from DSM Cleaning Solutions in Romeoville, IL includes: inside the oven and refrigerator, inside every cabinet and drawer, inside the dishwasher, closet shelves, baseboards, doors and grout. Ready for listing photos, closing day or move-in day. Exact price before you book, no deposit, 48-hour re-clean guarantee.",
    uploadDate: "2026-10-19T19:00:00-05:00",
    duration: "PT45S",
  },
};

/** The homepage intro video, also shown on its own watch page. */
export const HOME_VIDEO: ServiceVideo = {
  id: "homepage_intro",
  vertical: { src: "/videos/dsm-intro-vertical.mp4", poster: "/videos/dsm-intro-vertical-poster.jpg" },
  wide: { src: "/videos/dsm-intro-wide.mp4", poster: "/videos/dsm-intro-wide-poster.jpg" },
  label: "Meet the husband and wife team behind DSM Cleaning Solutions, a one-minute video with captions",
  endLine: (
    <>
      Ready for a house that&apos;s <span className="text-orange-400">actually clean?</span>
    </>
  ),
  schema: {
    name: "Meet DSM Cleaning Solutions: House Cleaning in Romeoville, IL",
    description:
      "A one-minute look at DSM Cleaning Solutions, the husband and wife house cleaning business in Romeoville, IL: deep cleaning, move-out cleaning and recurring maid service, and how booking works. No deposit, no contracts, and your exact price before you book.",
    uploadDate: "2026-10-27T19:00:00-05:00",
    duration: "PT60S",
  },
};

/** Every video with a watch page, in the order /videos lists them. */
export const WATCH_VIDEOS: WatchVideo[] = [
  { ...HOME_VIDEO, slug: "meet-dsm-cleaning-solutions", servicePath: "/", serviceLabel: "House cleaning in Romeoville", transcript: [
      "Tired of spending your weekends cleaning?",
      "Or paying someone who rushes through and misses the details?",
      "DSM Cleaning Solutions is a husband and wife business from Romeoville. We've been cleaning homes across the southwest suburbs since 2020, and one of us is on every job.",
      "When the house needs a full catch-up, we deep clean it.",
      "When you're buying or selling, we get the house ready for closing day.",
      "And if you just want it to stay clean, the same team comes back every visit.",
      "We've done more than two thousand cleanings since then, and families around here give us five stars on Google.",
      "One customer said we were courteous, efficient, friendly, and went above and beyond. That's what we aim for every time.",
      "Booking us is the easy part. There's no deposit and no contract. You see your exact price before you book. Our team is insured, bonded and background-checked. And if we miss anything, tell us within 48 hours and we'll come back and re-clean it for free.",
      "Tap See My Price and Book, pick your day, and come home to a house that's actually clean."
  ] },
  { ...DEEP_VIDEO, slug: "deep-cleaning", servicePath: "/deep-cleaning", serviceLabel: "Deep cleaning", transcript: [
      "When was the last time your whole house felt really clean?",
      "Regular cleaning keeps up with the surfaces, but grime builds up in the spots nobody gets to.",
      "A deep clean from DSM Cleaning Solutions gets your whole house caught up in one visit.",
      "We scrub the grout, wipe the baseboards, doors and door frames, degrease the stovetop and hood, and vacuum under and behind the furniture.",
      "And that's on top of everything in a regular clean.",
      "One family had fallen behind after having a baby. After their deep clean, they told us it looks and feels great in there.",
      "You see your exact price before you book, there's no deposit, and if we miss anything, tell us within 48 hours and we'll come back and re-clean it for free.",
      "Tap See My Price and Book, and let's get your whole house caught up."
  ] },
  { ...MOVEOUT_VIDEO, slug: "move-out-cleaning", servicePath: "/move-out-cleaning", serviceLabel: "Move-in and move-out cleaning", transcript: [
      "Selling your home, buying one, or moving out?",
      "The last thing you need on moving day is scrubbing an empty house.",
      "A move-out clean from DSM Cleaning Solutions gets it ready for the listing photos, the closing, or your first night in.",
      "We clean inside the oven and fridge, inside every cabinet and drawer, and the dishwasher, plus the closet shelves, baseboards, doors and grout.",
      "Local realtors recommend us. One family had already moved away, so they left us a lockbox key, and we sent them pictures when we were done.",
      "You see your exact price before you book, there's no deposit, and if we miss anything, tell us within 48 hours and we'll come back and re-clean it for free.",
      "Tap See My Price and Book, and hand over the keys with confidence."
  ] },
  { ...RECURRING_VIDEO, slug: "recurring-cleaning", servicePath: "/recurring-cleaning", serviceLabel: "Recurring cleaning", transcript: [
      "Imagine never spending another Saturday cleaning your house.",
      "Life gets busy, the house slips, and catching up eats your whole weekend.",
      "With recurring cleaning from DSM Cleaning Solutions, the same team comes every week, every two weeks, or once a month.",
      "Kitchen, bathrooms, floors, dusting, and we'll even change your sheets if you ask.",
      "You save up to twenty percent per visit, and your price is locked for twelve months.",
      "No contracts. You don't need a deep clean to start. And you can skip or reschedule for free.",
      "One customer booked us once for a move-in clean, and liked it so much they stayed with us for regular cleanings.",
      "Tap See My Price and Book, pick your schedule, and come home to a clean house, every time."
  ] },
];

export function watchVideoBySlug(slug: string): WatchVideo | undefined {
  return WATCH_VIDEOS.find((v) => v.slug === slug);
}

/** The watch page for a video id, for the "video page" links under each player. */
export function watchPathFor(id: string): string | undefined {
  const v = WATCH_VIDEOS.find((w) => w.id === id);
  return v ? `/videos/${v.slug}` : undefined;
}
