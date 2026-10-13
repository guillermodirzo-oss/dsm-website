/**
 * The standard cleaning checklist: what happens on every standard and
 * recurring visit. The owner confirmed it in October 2026. This file is the
 * single source of truth for what a standard or recurring clean includes.
 *
 * /recurring-cleaning, the recurring city pages
 * (/recurring-cleaning-{city}-il) and /cleaning-checklist render
 * STANDARD_CHECKLIST. The city hubs, /one-time-cleaning and
 * /apartment-cleaning render the short version, STANDARD_HIGHLIGHTS. No page
 * types its own list, so they can never disagree.
 *
 * Do not add items here that the team does not do every visit, and never
 * add anything from the "not offered" list in CONTEXT.md (spot-cleaning
 * walls, cleaning behind or under appliances, caulking, removing calcium or
 * hard water deposits).
 *
 * Inside the oven, inside the refrigerator and inside the kitchen cabinets
 * are never part of a standard clean. All three are add-ons, and all three
 * are always included with move-out cleaning.
 *
 * What a deep clean adds on top of this list is in lib/deepChecklist.ts.
 */
export interface ChecklistRoom {
  room: string;
  items: string[];
}

export const STANDARD_CHECKLIST: ChecklistRoom[] = [
  {
    room: "All Rooms",
    items: [
      "Dust ceiling fans and remove cobwebs",
      "Dust window sills and ledges (inside)",
      "Dust furniture",
      "Dust blinds",
      "Make beds",
      "Vacuum upholstery",
      "Wipe mirrors and light switches",
      "Wipe door handles",
      "Vacuum carpet and hard floors",
      "Mop hard floors",
    ],
  },
  {
    room: "Kitchen",
    items: [
      "Dust reachable vents",
      "Wipe countertops and surfaces",
      "Clean stove and oven exterior",
      "Clean refrigerator exterior",
      "Clean hood and light switches",
      "Wipe cabinet faces",
      "Clean microwave inside and out",
      "Clean and dry sink and faucet",
      "Vacuum and mop floors",
      "Take out trash and recycling",
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Dust reachable vents",
      "Clean and sanitize toilet and toilet area",
      "Remove soap scum and mildew in shower and tub",
      "Wipe cabinet faces",
      "Sanitize countertops",
      "Sanitize sink and polish fixtures",
      "Wipe mirrors and light switches",
      "Vacuum and mop floors",
    ],
  },
  {
    room: "Laundry Room",
    items: [
      "Remove cobwebs",
      "Wipe outside of washer and dryer",
      "Remove dryer lint",
      "Clean and dry sink",
      "Vacuum and mop floor",
      "Take out trash",
    ],
  },
];

/**
 * The short version of the list above, for the compact "what's included"
 * cards on the city hubs, /one-time-cleaning and /apartment-cleaning. Every
 * line is something on STANDARD_CHECKLIST. Nothing here is deep cleaning only.
 */
export const STANDARD_HIGHLIGHTS: string[] = [
  "Vacuum carpet and hard floors",
  "Mop hard floors",
  "Clean and sanitize bathrooms (toilet, sink, shower and tub)",
  "Wipe kitchen countertops and appliance exteriors",
  "Clean microwave inside and out",
  "Wipe cabinet fronts",
  "Dust furniture, ceiling fans, blinds and window sills",
  "Wipe mirrors, light switches and door handles",
  "Make beds and vacuum upholstery",
  "Take out trash and recycling",
];
