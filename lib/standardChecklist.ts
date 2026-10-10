/**
 * The standard cleaning checklist: what happens on every standard and
 * recurring visit. /recurring-cleaning and the recurring city pages
 * (/recurring-cleaning-{city}-il) both render this list, so they can never
 * disagree. Do not add items here that the team does not do every visit.
 * Inside the oven and inside the refrigerator are never part of a standard
 * clean. Both are add-ons, and both are always included with move-out cleaning.
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
      "Wipe mirrors and light switches",
      "Dust blinds",
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
