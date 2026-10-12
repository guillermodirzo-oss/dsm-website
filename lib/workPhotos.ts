/**
 * Alt text for the work photos that are shared across many city pages.
 *
 * A shared photo must not claim a city. The same five files appear on the
 * deep cleaning and move-out pages for all 16 cities, so their alt text
 * describes what is in the photo and nothing else: no town, and no claim
 * about which service it came from.
 *
 * Some file names carry a town ("...-naperville-il.jpg"). That is only a file
 * name. A photo's alt text may name a town only after the owner confirms the
 * photo was taken there, and none are confirmed yet. See "Local Proof" in
 * CONTEXT.md.
 */
export const WORK_PHOTOS = {
  doubleVanityBathroom: {
    src: "/work-photos/double-vanity-bathroom-clean-naperville-il.jpg",
    alt: "Double vanity bathroom with white cabinets, two sinks and a streak-free mirror, cleaned by DSM Cleaning Solutions",
  },
  woodCabinetKitchen: {
    src: "/work-photos/google-post-image-cleaning-service-1.jpg",
    alt: "Kitchen with wood cabinets, granite countertops and stainless steel appliances, cleaned by DSM Cleaning Solutions",
  },
  emptyApartmentParquet: {
    src: "/work-photos/apartment-move-out-cleaning-joliet-il.jpg",
    alt: "Empty apartment room with a polished parquet floor and a tall window, cleaned by DSM Cleaning Solutions",
  },
  grayCabinetBathroom: {
    src: "/work-photos/apartment-bathroom-cleaning-naperville-il.jpg",
    alt: "Bathroom with gray cabinets, a marble vanity top and a white tile floor, cleaned by DSM Cleaning Solutions",
  },
  laundryRoom: {
    src: "/work-photos/laundry-room-move-out-clean-romeoville-il.jpg",
    alt: "Laundry room with a white washer and dryer and a clean tile floor, cleaned by DSM Cleaning Solutions",
  },
} as const;
