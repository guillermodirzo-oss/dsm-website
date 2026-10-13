/**
 * Alt text for work photos. Every photo whose alt text used to name a town
 * gets its alt text from here.
 *
 * A photo must not claim a city. No photo has been confirmed as taken in a
 * specific town, so the alt text describes what is in the photo and nothing
 * else: no town, and no claim about which service it came from. The first
 * five files appear on the deep cleaning and move-out pages for all 16
 * cities. The rest are on /about, /apartment-cleaning, /deep-clean-offer and
 * the recurring city pages.
 *
 * Some file names carry a town ("...-naperville-il.jpg"). That is only a file
 * name. A photo's alt text or caption may name a town only after the owner
 * confirms the photo was taken there, and none are confirmed yet. See "Local
 * Proof" in CONTEXT.md.
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
  glassShowerGrayTile: {
    src: "/work-photos/shower-deep-clean-romeoville-il.jpg",
    alt: "Glass-enclosed shower with gray tile walls, a chrome shower head and a white shower pan, cleaned by DSM Cleaning Solutions",
  },
  greenDoubleSinkBathroom: {
    src: "/work-photos/double-sink-bathroom-deep-clean-plainfield-il.jpg",
    alt: "Bathroom with green walls, a white double sink vanity and a wide mirror, cleaned by DSM Cleaning Solutions",
  },
  greenTubBathroom: {
    src: "/work-photos/bathtub-shower-deep-clean-plainfield-il.jpg",
    alt: "Bathroom with green walls, a white tub and shower surround and a white toilet, cleaned by DSM Cleaning Solutions",
  },
  emptyRoomGrayPlank: {
    src: "/work-photos/living-room-hardwood-floors-plainfield-il.jpg",
    alt: "Empty room with a gray wood-plank floor, white baseboards and a curtained window, cleaned by DSM Cleaning Solutions",
  },
  emptyBedroomMirroredCloset: {
    src: "/work-photos/bedroom-cleaning-service-bolingbrook-il.jpg",
    alt: "Empty bedroom with a gray wood-plank floor, a mirrored closet and a window with white blinds, cleaned by DSM Cleaning Solutions",
  },
  furnishedBedroomBalcony: {
    src: "/work-photos/master-bedroom-airbnb-cleaning-bolingbrook-il.jpg",
    alt: "Bedroom with a made bed, a ceiling fan and a sliding glass door to a balcony, cleaned by DSM Cleaning Solutions",
  },
  teamMemberLightFixture: {
    src: "/work-photos/google-post-image-cleaning-service-25.jpg",
    alt: "DSM Cleaning Solutions team member cleaning a light fixture",
  },
} as const;

/**
 * Alt text for /hero-image.png, the photo most pages use as their Open Graph
 * (social share) image. It describes the photo. It used to repeat the page
 * title, which put a town name on the photo for every city page.
 */
export const OG_IMAGE_ALT = "DSM Cleaning Solutions team member wiping a kitchen countertop with a blue cloth";
