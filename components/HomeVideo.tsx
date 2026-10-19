"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * The homepage intro video (VSL): Guillermo and Rocío, the three services,
 * real reviews, the no-risk list, then "See My Price & Book".
 *
 * Phones get the vertical cut, tablets and desktops the wide one. Both are
 * rendered and CSS shows one; preload="none" means the hidden one never
 * downloads, and neither does the shown one until it scrolls into view.
 *
 * Captions are burned into the video, so it starts muted (browsers only allow
 * muted autoplay) once half of it is on screen, and pauses when it leaves.
 * "Tap for sound" restarts it from the top with sound and native controls.
 * No autoplay for visitors who ask for reduced motion or data saving; they
 * get a play button instead. When it ends, the booking button takes over.
 *
 * GA4 events: vsl_autoplay, vsl_sound_on, vsl_progress (percent 25/50/75),
 * vsl_complete. A click on the end-screen button is a normal book_click
 * (components/ConversionClicks.tsx).
 */

type Gtag = (command: "event", name: string, params: Record<string, string | number | boolean>) => void;

function track(name: string, params: Record<string, string | number | boolean> = {}) {
  try {
    const gtag = (window as unknown as { gtag?: Gtag }).gtag;
    if (typeof gtag === "function") gtag("event", name, { video: "homepage_intro", ...params });
  } catch {
    // Tracking must never break the video.
  }
}

const SOURCES = {
  vertical: { src: "/videos/dsm-intro-vertical.mp4", poster: "/videos/dsm-intro-vertical-poster.jpg" },
  wide: { src: "/videos/dsm-intro-wide.mp4", poster: "/videos/dsm-intro-wide-poster.jpg" },
};

type Mode = "idle" | "muted" | "sound" | "paused" | "ended";

function Player({ kind, className }: { kind: keyof typeof SOURCES; className: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<Mode>("idle");
  const modeRef = useRef<Mode>("idle");
  const sent = useRef<Set<string>>(new Set());
  const set = (m: Mode) => {
    modeRef.current = m;
    setMode(m);
  };

  const once = (key: string, fn: () => void) => {
    if (sent.current.has(key)) return;
    sent.current.add(key);
    fn();
  };

  // Muted autoplay while on screen, for the copy that is actually displayed.
  useEffect(() => {
    const v = ref.current;
    if (!v || v.offsetParent === null) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData === true;
    if (reduce || saveData || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        const m = modeRef.current;
        if (entry.isIntersecting && (m === "idle" || m === "muted")) {
          v.muted = true;
          v.play()
            .then(() => {
              if (modeRef.current === "idle") {
                set("muted");
                once("autoplay", () => track("vsl_autoplay", { layout: kind }));
              }
            })
            .catch(() => {
              // Autoplay blocked (low-power mode etc.): the play button stays.
            });
        } else if (!entry.isIntersecting && m === "muted") {
          v.pause();
        } else if (!entry.isIntersecting && m === "sound" && !v.paused) {
          v.pause();
          set("paused");
        }
      },
      { threshold: 0.5 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [kind]);

  const playWithSound = useCallback(() => {
    const v = ref.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = false;
    v.controls = true;
    sent.current.delete("p25");
    sent.current.delete("p50");
    sent.current.delete("p75");
    sent.current.delete("done");
    v.play().catch(() => undefined);
    set("sound");
    track("vsl_sound_on", { layout: kind });
  }, [kind]);

  const onTime = () => {
    const v = ref.current;
    if (!v || !v.duration || modeRef.current !== "sound") return;
    const pct = (v.currentTime / v.duration) * 100;
    for (const p of [25, 50, 75]) if (pct >= p) once(`p${p}`, () => track("vsl_progress", { percent: p, layout: kind }));
  };

  const onEnded = () => {
    const v = ref.current;
    if (v) v.controls = false;
    if (modeRef.current === "sound") once("done", () => track("vsl_complete", { layout: kind }));
    set("ended");
  };

  const { src, poster } = SOURCES[kind];

  return (
    <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl bg-black shadow-2xl shadow-black/40 ${className}`}>
      <video
        ref={ref}
        className="block w-full h-full object-cover"
        src={src}
        poster={poster}
        preload="none"
        playsInline
        muted
        onTimeUpdate={onTime}
        onEnded={onEnded}
        onPlay={() => {
          if (modeRef.current === "paused") set("sound");
        }}
        onPause={() => {
          const v = ref.current;
          if (modeRef.current === "sound" && v && !v.ended) set("paused");
        }}
        aria-label="Meet Guillermo and Rocío of DSM Cleaning Solutions, a one-minute video with captions"
      />

      {(mode === "idle" || mode === "muted") && (
        <button
          type="button"
          onClick={playWithSound}
          className={
            mode === "idle"
              ? "absolute inset-0 flex items-center justify-center bg-black/20 group"
              : "absolute left-1/2 -translate-x-1/2 bottom-5 md:bottom-7"
          }
          aria-label={mode === "idle" ? "Play the video with sound" : "Turn on sound and start the video from the beginning"}
        >
          {mode === "idle" ? (
            <span className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full shadow-2xl group-active:scale-95 transition-transform" style={{ backgroundColor: "#E8622A" }}>
              <svg className="w-9 h-9 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          ) : (
            <span className="flex items-center gap-2 whitespace-nowrap text-white font-bold text-sm md:text-base px-5 py-3 rounded-full shadow-xl active:scale-95 transition-transform" style={{ backgroundColor: "#E8622A" }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 8v8a4.47 4.47 0 002.5-4zM14 3.23v2.06a7 7 0 010 13.42v2.06A9 9 0 0014 3.23z" />
              </svg>
              Tap for sound
            </span>
          )}
        </button>
      )}

      {mode === "ended" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gray-900/95 backdrop-blur-sm px-6 text-center">
          <p className="text-white font-bold text-2xl md:text-3xl leading-tight">
            Ready for a house that&apos;s <span className="text-orange-400">actually clean?</span>
          </p>
          <Link
            href="/book"
            className="inline-block font-extrabold text-base md:text-lg text-white py-4 px-9 rounded-full shadow-2xl active:scale-95 transition-transform"
            style={{ backgroundColor: "#E8622A" }}
          >
            See My Price &amp; Book
          </Link>
          <button type="button" onClick={playWithSound} className="text-white/80 text-sm font-semibold underline underline-offset-4">
            Watch again
          </button>
        </div>
      )}
    </div>
  );
}

export default function HomeVideo() {
  return (
    <>
      {/* Phones: vertical cut, sized so the whole frame fits on screen. */}
      <Player kind="vertical" className="md:hidden mx-auto aspect-[9/16] w-full max-w-[300px]" />
      {/* Tablets and up: wide cut. */}
      <Player kind="wide" className="hidden md:block mx-auto aspect-video w-full max-w-4xl" />
    </>
  );
}
