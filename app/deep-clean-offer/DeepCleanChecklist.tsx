"use client";

import { useState } from "react";

const deepCleanSections = [
  {
    label: "ALL ROOMS",
    items: [
      "Everything in regular cleaning",
      "Dust & wipe door & door frames",
      "Dust baseboards throughout",
      "Ceiling fans deep-dusted & cobwebs removed",
      "Dust blinds",
      "Wipe & clean mirrors & light switches",
      "Vacuum & mop all floors",
    ],
  },
  {
    label: "KITCHEN",
    items: [
      "Inside oven — FREE with this offer",
      "Oven & stove exterior cleaned",
      "Exterior refrigerator cleaned (exterior only)",
      "Interior & exterior microwave",
      "Hood & light switches",
      "All cabinet faces wiped",
      "Baseboards cleaned",
      "Sink & faucet wiped, cleaned & dried",
      "Countertops & all surfaces",
      "Trash & recyclables removed",
    ],
  },
  {
    label: "BATHROOM",
    items: [
      "Dust reachable vents",
      "Toilet & toilet area sanitized",
      "Soap scum & mildew removed from shower/tub",
      "Cabinet faces cleaned",
      "Countertops sanitized",
      "Sink & fixtures polished",
      "Mirrors & light switches",
      "Baseboards & doors wiped",
      "Floors vacuumed & mopped",
    ],
  },
];

// Items always visible on mobile (regardless of expanded state)
const ALWAYS_VISIBLE = new Set([
  "Everything in regular cleaning",
  "Inside oven — FREE with this offer",
  "Dust & wipe door & door frames",
  "Dust baseboards throughout",
  "Ceiling fans deep-dusted & cobwebs removed",
  "Exterior refrigerator cleaned (exterior only)",
  "Interior & exterior microwave",
  "All cabinet faces wiped",
]);

const hiddenCount = deepCleanSections.reduce(
  (acc, s) => acc + s.items.filter((i) => !ALWAYS_VISIBLE.has(i)).length,
  0
);

export default function DeepCleanChecklist() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="py-3">
      {deepCleanSections.map((section) => {
        const hasVisibleItem = section.items.some((i) => ALWAYS_VISIBLE.has(i));
        return (
          <div key={section.label}>
            {/* Section label: hidden on mobile when collapsed and section has no always-visible items */}
            <p
              className={`text-xs font-bold text-gray-400 uppercase tracking-wider px-6 pt-4 pb-2 ${
                !hasVisibleItem && !expanded ? "hidden md:block" : ""
              }`}
            >
              {section.label}
            </p>
            <ul className="px-6 space-y-3 pb-2">
              {section.items.map((item) => {
                const alwaysVisible = ALWAYS_VISIBLE.has(item);
                // On mobile: hide extra items when collapsed; on desktop: always show
                const hiddenClass =
                  !alwaysVisible && !expanded ? "hidden md:flex" : "flex";
                return (
                  <li
                    key={item}
                    className={`${hiddenClass} items-start gap-3 text-sm`}
                  >
                    <span className="flex-shrink-0 font-bold text-green-600 text-sm mt-0.5">
                      ✓
                    </span>
                    <span
                      className={`font-medium ${
                        item.includes("FREE")
                          ? "text-orange-600 font-semibold"
                          : "text-gray-800"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      {/* Toggle button — mobile only */}
      <div className="md:hidden px-6 mt-2">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-medium"
          style={{ color: "#E8721C" }}
        >
          {expanded
            ? "− Hide full checklist"
            : `+ See full checklist (${hiddenCount} more items)`}
        </button>
      </div>
    </div>
  );
}
