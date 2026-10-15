/**
 * The deep cleaning checklist. The owner confirmed it in October 2026. This
 * file is the single source of truth for what a deep clean includes.
 *
 * A deep clean is everything in a standard clean (lib/standardChecklist.ts)
 * plus the seven items in DEEP_ADDITIONS. Nothing else. Those seven are also
 * the only things copy may name as skipped by a standard or recurring clean.
 *
 * /deep-cleaning, the 16 deep cleaning city pages and
 * /deep-cleaning-cost-naperville-il render DEEP_CHECKLIST. The city hubs,
 * /cleaning-checklist and the comparison tables render DEEP_ADDITIONS. No
 * page types its own list.
 *
 * Never add:
 *  - inside the oven, inside the fridge, inside cabinets or inside the
 *    dishwasher. They are add-ons for a deep clean (lib/addOns.ts) and always
 *    included with move-out.
 *  - anything from the "not offered" list in CONTEXT.md: spot-cleaning walls,
 *    pulling appliances out or cleaning behind or under them, caulking,
 *    removing calcium or hard water deposits.
 */
import type { ChecklistRoom } from "./standardChecklist";

/** What a deep clean adds on top of a standard clean. Exactly these seven. */
const ADDITIONS: { item: string; room: "Kitchen" | "Bathroom" | "Whole-Home" }[] = [
  { item: "Wipe baseboards", room: "Whole-Home" },
  { item: "Wipe doors and door frames", room: "Whole-Home" },
  { item: "Scrub grout", room: "Bathroom" },
  { item: "Vacuum under and behind furniture", room: "Whole-Home" },
  { item: "Clean inside window glass", room: "Whole-Home" },
  { item: "Clean light fixtures", room: "Whole-Home" },
  { item: "Degrease the stovetop, hood vent and burners", room: "Kitchen" },
];

/** The seven additions as one flat list. */
export const DEEP_ADDITIONS: string[] = ADDITIONS.map((a) => a.item);

/** The same seven grouped by room, for /cleaning-checklist. */
export const DEEP_ADDITIONS_BY_ROOM: ChecklistRoom[] = (["Kitchen", "Bathroom", "Whole-Home"] as const).map((room) => ({
  room: `${room} Extras`,
  items: ADDITIONS.filter((a) => a.room === room).map((a) => a.item),
}));

/**
 * The room-by-room list the deep cleaning pages show. Four rooms, in this
 * order: the pages place the Kitchen and Bathrooms cards beside photos.
 * Every line is either a standard checklist item or one of DEEP_ADDITIONS.
 */
export const DEEP_CHECKLIST: ChecklistRoom[] = [
  {
    room: "Kitchen",
    items: [
      "Degrease stovetop, hood vent and burners",
      "Clean oven exterior",
      "Clean microwave inside and out",
      "Wipe all cabinet fronts",
      "Scrub sink and faucet",
      "Clean countertops",
      "Wipe refrigerator exterior",
      "Mop floors",
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Scrub and disinfect toilet",
      "Scrub shower and tub, grout included",
      "Clean and polish faucets and fixtures",
      "Wash sink and countertop",
      "Clean mirrors",
      "Wipe cabinet fronts",
      "Mop floors and scrub grout lines",
    ],
  },
  {
    room: "Bedrooms & Living Areas",
    items: [
      "Dust furniture",
      "Make beds and vacuum upholstery",
      "Wipe baseboards and door frames",
      "Clean window sills and inside window glass",
      "Vacuum under and behind furniture",
      "Dust ceiling fans and clean light fixtures",
      "Dust blinds",
    ],
  },
  {
    room: "Whole Home",
    items: [
      "Vacuum all carpets and rugs",
      "Mop all hard floors",
      "Wipe all doors and door frames",
      "Clean all visible baseboards",
      "Wipe light switches and door handles",
      "Dust kitchen and bathroom vents",
    ],
  },
];
