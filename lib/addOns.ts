/**
 * Add-ons: the only source for add-on names, prices and the services each one
 * applies to. The owner copied them from the BookingKoala booking form
 * (October 2026), so the names here match what customers see when they book.
 *
 * Rules:
 *  - Every page that names an add-on uses a name from this list. Write
 *    "inside cabinets", never "inside kitchen cabinets".
 *  - Never name an add-on that is not here (no laundry, no exterior windows,
 *    no carpet cleaning, no organizing).
 *  - Never type an add-on price into a page. /pricing renders the full list
 *    from this file; anywhere else that shows a price reads it from here.
 *  - Inside the oven on a deep clean follows lib/offers.ts: free while the
 *    deep cleaning offer (FALL75) runs, otherwise the price below. Pages show
 *    that through <Offer service="deep">, never by changing the price here.
 *  - Move-in/move-out cleaning already includes the inside of the oven, the
 *    fridge, every cabinet and drawer, and the dishwasher, so those are not
 *    add-ons for it.
 */
export type AddOnService = "standard" | "deep" | "moveout";

export type AddOnId =
  | "insideOven"
  | "insideFridge"
  | "insideCabinetsEmpty"
  | "insideCabinetsFull"
  | "insideDishwasher"
  | "interiorWindows"
  | "detailBaseboards"
  | "extraRoom"
  | "garageSweep"
  | "pets";

export interface AddOn {
  id: AddOnId;
  /** Exactly as the booking form names it. */
  name: string;
  /** Whole dollars. */
  price: number;
  services: AddOnService[];
  /** One short line shown under the name on /pricing. */
  note?: string;
}

export const ADD_ONS: AddOn[] = [
  { id: "insideOven", name: "Inside oven", price: 40, services: ["standard", "deep"] },
  { id: "insideFridge", name: "Inside fridge", price: 50, services: ["standard", "deep"] },
  { id: "insideCabinetsEmpty", name: "Inside cabinets, empty", price: 60, services: ["standard", "deep"] },
  { id: "insideCabinetsFull", name: "Inside cabinets, full", price: 95, services: ["standard", "deep"] },
  { id: "insideDishwasher", name: "Inside dishwasher", price: 30, services: ["standard", "deep"] },
  { id: "interiorWindows", name: "Interior windows", price: 50, services: ["standard"], note: "Inside glass, at reach. Deep cleaning already includes inside window glass." },
  { id: "detailBaseboards", name: "Detail baseboards and doors", price: 80, services: ["standard"], note: "Deep cleaning already includes baseboards, doors and door frames." },
  { id: "extraRoom", name: "Extra room (basement)", price: 40, services: ["standard", "deep", "moveout"] },
  { id: "garageSweep", name: "Sweep inside garage", price: 25, services: ["standard", "deep", "moveout"] },
  { id: "pets", name: "Homes with pets", price: 15, services: ["standard", "deep", "moveout"] },
];

/** One add-on by id. */
export function addOn(id: AddOnId): AddOn {
  const found = ADD_ONS.find((a) => a.id === id);
  if (!found) throw new Error(`No add-on "${id}" in lib/addOns.ts`);
  return found;
}

/** An add-on's price in whole dollars, e.g. the oven bonus value in lib/offers.ts. */
export function addOnPrice(id: AddOnId): number {
  return addOn(id).price;
}

/** "Standard, deep and move-in/move-out cleaning", "Standard and deep cleaning" or "Standard cleaning only". */
export function addOnServicesLabel(a: AddOn): string {
  const names: Record<AddOnService, string> = { standard: "standard", deep: "deep", moveout: "move-in/move-out" };
  const list = a.services.map((s) => names[s]);
  if (list.length === 1) return `${list[0][0].toUpperCase()}${list[0].slice(1)} cleaning only`;
  const joined = list.length === 2 ? `${list[0]} and ${list[1]}` : `${list.slice(0, -1).join(", ")} and ${list[list.length - 1]}`;
  return `${joined[0].toUpperCase()}${joined.slice(1)} cleaning`;
}

/**
 * Every add-on name for sentences, in lower case, with its scope where it is
 * not available on every service: "inside oven, inside fridge, inside
 * cabinets (empty), ..., interior windows (standard cleans only), ...".
 */
export function addOnNamesSentence(): string {
  const parts = ADD_ONS.map((a) => {
    // "Inside cabinets, empty" reads as two items in a list, so it becomes "inside cabinets (empty)".
    const name = (a.name.charAt(0).toLowerCase() + a.name.slice(1)).replace(/, (\w+)$/, " ($1)");
    return a.services.length === 1 && a.services[0] === "standard" ? `${name} (standard cleans only)` : name;
  });
  return `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
}
