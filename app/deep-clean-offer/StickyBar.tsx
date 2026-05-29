"use client";

import { useState, useEffect } from "react";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ backgroundColor: "#0f172a", height: 56 }}
    >
      <a href="#quote-form-bottom" className="flex items-center justify-between h-full px-4 gap-3">
        <span className="text-white text-sm font-semibold truncate">
          💥 $75 OFF Deep Cleaning — Limited Spots
        </span>
        <span
          className="flex-shrink-0 text-white text-sm font-bold px-4 py-2 rounded-full"
          style={{ backgroundColor: "#E8721C" }}
        >
          Claim Your Spot
        </span>
      </a>
    </div>
  );
}
