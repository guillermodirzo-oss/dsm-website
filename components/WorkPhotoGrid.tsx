"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export interface WorkPhoto {
  src: string;
  alt: string;
  caption: string;
}

/**
 * Work photos that open full size on tap. Clarity showed visitors tapping the
 * homepage photos (the oven shot most of all) expecting them to enlarge, and
 * getting nothing. Each tile is a real button now, and the enlarged view
 * closes on tap, the X, or Escape.
 */
export default function WorkPhotoGrid({ photos }: { photos: WorkPhoto[] }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const current = open === null ? null : photos[open];

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpen(i)}
            className="text-left group focus:outline-none"
            aria-label={`Enlarge photo: ${photo.caption}`}
          >
            <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden shadow-md group-focus-visible:ring-4 group-focus-visible:ring-orange-300">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              <span className="absolute bottom-2 right-2 bg-black/55 text-white text-[10px] md:text-xs font-semibold px-2 py-1 rounded-full">
                Tap to enlarge
              </span>
            </div>
            <p className="text-[11px] md:text-xs text-gray-400 font-medium text-center mt-1.5 md:mt-2.5 md:tracking-wide">
              {photo.caption}
            </p>
          </button>
        ))}
      </div>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            className="absolute top-4 right-4 text-white text-3xl leading-none w-11 h-11 flex items-center justify-center rounded-full bg-white/10"
            aria-label="Close photo"
          >
            ×
          </button>
          <div className="relative w-full max-w-4xl aspect-[4/3]">
            <Image src={current.src} alt={current.alt} fill sizes="100vw" loading="eager" className="object-contain" />
          </div>
          <p className="mt-4 text-center text-white/80 text-sm font-medium">
            {current.caption}
          </p>
        </div>
      ) : null}
    </>
  );
}
