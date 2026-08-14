import type { Metadata } from "next";
import Image from "next/image";

/**
 * INTERNAL REFERENCE PAGE. Not part of the marketing site.
 *
 * Catalogs every file in public/work-photos/ with a stable short ID, a
 * category, an honest read on whether it shows real evidence of work, and
 * exactly which pages currently use it. When asked to swap a photo, reference
 * the ID (e.g. "put DC-03 on the About page") rather than the filename, it is
 * shorter and does not change if the file gets renamed.
 *
 * Deliberately unindexed and unlinked: robots noindex/nofollow below, no link
 * from Navigation, Footer, or any other page, and no entry in app/sitemap.ts.
 * Reachable only if you know the URL.
 */
export const metadata: Metadata = {
  title: "Photo Library (Internal)",
  robots: { index: false, follow: false },
};

type Evidence = "Strong" | "Good" | "Moderate" | "Weak";

interface Photo {
  id: string;
  file: string;
  width: number;
  height: number;
  kb: number;
  evidence: Evidence;
  note: string;
  heroReady?: boolean;
  usedOn: string[]; // paths relative to app/, e.g. "deep-cleaning/page.tsx"
}

interface Category {
  key: string;
  title: string;
  goodFor: string;
  photos: Photo[];
}

const CATEGORIES: Category[] = [
  {
    key: "dc",
    title: "Deep Cleaning Evidence",
    goodFor:
      "Deep cleaning pages and anywhere the offer needs to look believable. These show a visible before/after moment, not just a tidy room.",
    photos: [
      {
        id: "DC-01",
        file: "oven-interior-deep-cleaning.jpg",
        width: 1200,
        height: 900,
        kb: 140,
        evidence: "Strong",
        note: "Open oven, bare blue enamel cavity, clean grates and knobs. The single best evidence photo in the library.",
        usedOn: ["deep-cleaning/page.tsx", "page.tsx", "pricing/page.tsx"],
      },
      {
        id: "DC-02",
        file: "cooktop-grates-deep-cleaning.jpg",
        width: 1200,
        height: 900,
        kb: 137,
        evidence: "Strong",
        note: "Gas cooktop, degreased burner grates, polished stainless trim.",
        usedOn: ["deep-cleaning/page.tsx"],
      },
      {
        id: "DC-03",
        file: "marble-bathroom-deep-cleaning.jpg",
        width: 760,
        height: 570,
        kb: 62,
        evidence: "Good",
        note: "Marble tiled bathroom, scrubbed tub surround, floor tile catching the light. Smaller file, only 760px wide, upscale with care.",
        usedOn: ["deep-cleaning/page.tsx", "page.tsx"],
      },
      {
        id: "DC-04",
        file: "shower-deep-clean-romeoville-il.jpg",
        width: 1920,
        height: 2560,
        kb: 499,
        evidence: "Good",
        note: "Glass shower door and chrome fixtures, streak-free. Portrait orientation, crops well to landscape from the top half.",
        usedOn: ["about/page.tsx", "airbnb-cleaning/page.tsx", "deep-clean-offer/page.tsx"],
      },
      {
        id: "DC-05",
        file: "walk-in-shower-glass-house-cleaning.jpg",
        width: 1200,
        height: 900,
        kb: 86,
        evidence: "Good",
        note: "Walk-in shower, streak-free glass doors, spotless tiled pan. Filename says house-cleaning but the content reads as deep-clean evidence.",
        usedOn: ["deep-cleaning/page.tsx", "page.tsx"],
      },
      {
        id: "DC-06",
        file: "shower-tile-cleaning-romeoville-il.jpg",
        width: 1920,
        height: 2560,
        kb: 539,
        evidence: "Moderate",
        note: "Tight crop on shower wall tile plus a chrome caddy and showerhead. Polished chrome is the only real evidence; mostly tile.",
        usedOn: [],
      },
    ],
  },
  {
    key: "mo",
    title: "Move-In / Move-Out",
    goodFor:
      "Move-out pages and the deposit-back angle. Empty rooms with something visibly clean about them, not just empty.",
    photos: [
      {
        id: "MO-01",
        file: "empty-room-move-out-cleaning.jpg",
        width: 1200,
        height: 900,
        kb: 136,
        evidence: "Strong",
        note: "Empty carpeted room with strong diagonal vacuum lines. The best move-out evidence in the library.",
        usedOn: ["page.tsx", "pricing/page.tsx"],
      },
      {
        id: "MO-02",
        file: "apartment-move-out-cleaning-joliet-il.jpg",
        width: 1920,
        height: 2560,
        kb: 538,
        evidence: "Good",
        note: "Empty apartment, parquet floor with a strong window reflection. Portrait; the reused 4:3 crop is MO-03 below.",
        usedOn: [
          "apartment-cleaning/page.tsx",
          "move-out-cleaning/page.tsx",
          "move-out-cleaning-bolingbrook-il/page.tsx",
          "move-out-cleaning-joliet-il/page.tsx",
          "move-out-cleaning-lockport-il/page.tsx",
          "move-out-cleaning-minooka-il/page.tsx",
          "move-out-cleaning-new-lenox-il/page.tsx",
          "move-out-cleaning-plainfield-il/page.tsx",
          "move-out-cleaning-shorewood-il/page.tsx",
        ],
      },
      {
        id: "MO-03",
        file: "empty-apartment-parquet-move-out.jpg",
        width: 1200,
        height: 900,
        kb: 143,
        evidence: "Good",
        note: "Same apartment as MO-02, re-cropped to 4:3 and color-corrected. Not currently placed anywhere, available.",
        usedOn: [],
      },
      {
        id: "MO-04",
        file: "closet-move-out-cleaning.jpg",
        width: 760,
        height: 570,
        kb: 62,
        evidence: "Moderate",
        note: "Empty walk-in closet, bare white shelving, glossy oak floor with a real reflection. Only 760px wide.",
        usedOn: ["page.tsx"],
      },
      {
        id: "MO-05",
        file: "laundry-room-move-out-clean-romeoville-il.jpg",
        width: 1920,
        height: 2560,
        kb: 349,
        evidence: "Weak",
        note: "Washer and dryer, tidy laundry room. No visible evidence of cleaning, just an empty appliance shot.",
        usedOn: ["move-out-cleaning/page.tsx", "move-out-cleaning-romeoville-il/page.tsx"],
      },
    ],
  },
  {
    key: "ba",
    title: "Bathrooms, General",
    goodFor:
      "Standard cleaning, apartment pages, or filler where a bathroom photo is needed but the deep-clean angle is not the point. Honestly, mostly tidy rooms rather than evidence.",
    photos: [
      {
        id: "BA-01",
        file: "double-vanity-bathroom-clean-naperville-il.jpg",
        width: 1920,
        height: 2560,
        kb: 252,
        evidence: "Moderate",
        note: "Grey double vanity, quartz counter, large clean mirror. The most reused photo in the library, mostly as the old deep-cleaning city-page hero thumbnail.",
        usedOn: [
          "book/page.tsx",
          "deep-clean-offer/page.tsx",
          "deep-cleaning/burr-ridge/page.tsx",
          "deep-cleaning/downers-grove/page.tsx",
          "deep-cleaning/hinsdale/page.tsx",
          "deep-cleaning/oak-brook/page.tsx",
          "deep-cleaning-bolingbrook-il/page.tsx",
          "deep-cleaning-homer-glen-il/page.tsx",
          "deep-cleaning-joliet-il/page.tsx",
          "deep-cleaning-lemont-il/page.tsx",
          "deep-cleaning-lockport-il/page.tsx",
          "deep-cleaning-minooka-il/page.tsx",
          "deep-cleaning-naperville-il/page.tsx",
          "deep-cleaning-new-lenox-il/page.tsx",
          "deep-cleaning-plainfield-il/page.tsx",
          "deep-cleaning-romeoville-il/page.tsx",
          "deep-cleaning-shorewood-il/page.tsx",
          "deep-cleaning-westmont-il/page.tsx",
          "move-out-cleaning-burr-ridge-il/page.tsx",
          "move-out-cleaning-downers-grove-il/page.tsx",
          "move-out-cleaning-hinsdale-il/page.tsx",
          "move-out-cleaning-lemont-il/page.tsx",
          "move-out-cleaning-oak-brook-il/page.tsx",
          "move-out-cleaning-westmont-il/page.tsx",
        ],
      },
      {
        id: "BA-02",
        file: "apartment-bathroom-cleaning-naperville-il.jpg",
        width: 1920,
        height: 2560,
        kb: 502,
        evidence: "Weak",
        note: "Grey bathroom, bidet, white tile floor. Tidy, no visible cleaning evidence.",
        usedOn: [
          "apartment-cleaning/page.tsx",
          "move-out-cleaning-homer-glen-il/page.tsx",
          "move-out-cleaning-naperville-il/page.tsx",
          "standard-cleaning/page.tsx",
        ],
      },
      {
        id: "BA-03",
        file: "bathroom-shower-tub-deep-clean-plainfield-il.jpg",
        width: 1920,
        height: 2560,
        kb: 351,
        evidence: "Weak",
        note: "Shower and tub, beige tile. Tidy, no visible cleaning evidence despite the filename.",
        usedOn: ["move-out-cleaning/page.tsx"],
      },
      {
        id: "BA-04",
        file: "bathtub-shower-deep-clean-plainfield-il.jpg",
        width: 1920,
        height: 2560,
        kb: 270,
        evidence: "Weak",
        note: "White tub surround, green accent wall, flat lighting with no shine or reflection.",
        usedOn: ["book/page.tsx", "deep-clean-offer/page.tsx"],
      },
      {
        id: "BA-05",
        file: "double-sink-bathroom-deep-clean-plainfield-il.jpg",
        width: 1920,
        height: 2560,
        kb: 387,
        evidence: "Weak",
        note: "Green walls, white double-sink vanity. Tidy, no visible cleaning evidence.",
        usedOn: ["deep-clean-offer/page.tsx"],
      },
    ],
  },
  {
    key: "kl",
    title: "Kitchens & Living Areas",
    goodFor:
      "Standard/house cleaning pages, hero backgrounds, and general context shots. Mostly staged or tidy rather than evidence-driven; use these to set a scene, not to prove a scrub.",
    photos: [
      {
        id: "KL-01",
        file: "living-room-hardwood-floors-plainfield-il.jpg",
        width: 1920,
        height: 2560,
        kb: 470,
        evidence: "Good",
        note: "Empty living room, plank floor with strong specular highlights, large plain wall on the left. The most versatile wide-crop source in the library.",
        heroReady: true,
        usedOn: ["about/page.tsx", "airbnb-cleaning/page.tsx", "book/page.tsx", "deep-clean-offer/page.tsx", "standard-cleaning/page.tsx"],
      },
      {
        id: "KL-02",
        file: "living-room-house-cleaning.jpg",
        width: 1200,
        height: 900,
        kb: 132,
        evidence: "Good",
        note: "Same room as KL-01, re-cropped to 4:3 and color-corrected. Not currently placed anywhere, available.",
        usedOn: [],
      },
      {
        id: "KL-03",
        file: "hero-kitchen-home.jpg",
        width: 1200,
        height: 675,
        kb: 85,
        evidence: "Moderate",
        note: "Wide kitchen crop, white cabinets, stainless appliances, orange barstools. Current homepage hero background.",
        heroReady: true,
        usedOn: ["page.tsx"],
      },
      {
        id: "KL-04",
        file: "google-post-image-cleaning-service-1.jpg",
        width: 940,
        height: 788,
        kb: 106,
        evidence: "Moderate",
        note: "Bright kitchen, granite island, dark wood cabinets. Originally a Google Business post image, heavily reused across the deep cleaning city pages.",
        usedOn: [
          "about/page.tsx",
          "deep-cleaning/burr-ridge/page.tsx",
          "deep-cleaning/downers-grove/page.tsx",
          "deep-cleaning/hinsdale/page.tsx",
          "deep-cleaning/oak-brook/page.tsx",
          "deep-cleaning-bolingbrook-il/page.tsx",
          "deep-cleaning-homer-glen-il/page.tsx",
          "deep-cleaning-joliet-il/page.tsx",
          "deep-cleaning-lemont-il/page.tsx",
          "deep-cleaning-lockport-il/page.tsx",
          "deep-cleaning-minooka-il/page.tsx",
          "deep-cleaning-naperville-il/page.tsx",
          "deep-cleaning-new-lenox-il/page.tsx",
          "deep-cleaning-plainfield-il/page.tsx",
          "deep-cleaning-romeoville-il/page.tsx",
          "deep-cleaning-shorewood-il/page.tsx",
          "deep-cleaning-westmont-il/page.tsx",
          "page.tsx",
        ],
      },
      {
        id: "KL-05",
        file: "kitchen-standard-cleaning.jpg",
        width: 1200,
        height: 900,
        kb: 103,
        evidence: "Weak",
        note: "Staged kitchen, white cabinets, orange stools. Reads as a real-estate listing photo, not proof of cleaning; a home that was never dirty looks the same.",
        usedOn: ["pricing/page.tsx"],
      },
    ],
  },
  {
    key: "br",
    title: "Bedrooms",
    goodFor: "Airbnb turnover, standard cleaning, or move-out context involving a furnished room.",
    photos: [
      {
        id: "BR-01",
        file: "bedroom-cleaning-service-bolingbrook-il.jpg",
        width: 1920,
        height: 2560,
        kb: 450,
        evidence: "Moderate",
        note: "Empty bedroom, vinyl plank floor with some reflection, mirrored closet doors.",
        usedOn: ["apartment-cleaning/page.tsx", "book/page.tsx", "standard-cleaning/page.tsx"],
      },
      {
        id: "BR-02",
        file: "master-bedroom-airbnb-cleaning-bolingbrook-il.jpg",
        width: 1920,
        height: 2560,
        kb: 613,
        evidence: "Weak",
        note: "Staged bedroom, orange throw blanket, city balcony view. No cleaning evidence, but the staged look fits an Airbnb turnover context specifically.",
        usedOn: ["airbnb-cleaning/page.tsx", "deep-clean-offer/page.tsx"],
      },
    ],
  },
  {
    key: "tm",
    title: "Team / People at Work",
    goodFor:
      "About page, trust sections, anywhere the story is 'a real person does this work,' not just the result.",
    photos: [
      {
        id: "TM-01",
        file: "team-member-vacuuming.jpg",
        width: 1200,
        height: 900,
        kb: 93,
        evidence: "Strong",
        note: "Team member walking through a home wearing a backpack vacuum, mid-job. Native 16:9 before cropping.",
        heroReady: true,
        usedOn: ["page.tsx"],
      },
      {
        id: "TM-02",
        file: "google-post-image-cleaning-service-25.jpg",
        width: 940,
        height: 788,
        kb: 82,
        evidence: "Strong",
        note: "Team member reaching up to dust a light fixture, cloth in hand, mid-job.",
        usedOn: ["about/page.tsx", "deep-cleaning/page.tsx"],
      },
    ],
  },
  {
    key: "he",
    title: "Wide / Unplaced Hero Source",
    goodFor: "Any full-bleed hero that needs a wide, uncluttered background.",
    photos: [
      {
        id: "HE-01",
        file: "hero-home.jpg",
        width: 1920,
        height: 1080,
        kb: 215,
        evidence: "Moderate",
        note: "Wide crop of the Plainfield living room (KL-01/KL-02's source room), 16:9. Was the homepage hero before it switched to the kitchen; not used anywhere now.",
        heroReady: true,
        usedOn: [],
      },
    ],
  },
];

const EVIDENCE_STYLE: Record<Evidence, string> = {
  Strong: "bg-green-100 text-green-700",
  Good: "bg-blue-100 text-blue-700",
  Moderate: "bg-amber-100 text-amber-700",
  Weak: "bg-gray-100 text-gray-500",
};

function routeLabel(appPath: string): string {
  if (appPath === "page.tsx") return "/ (Homepage)";
  return "/" + appPath.replace(/\/page\.tsx$/, "");
}

function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="relative bg-gray-100">
        <Image
          src={`/work-photos/${photo.file}`}
          alt={photo.note}
          width={photo.width}
          height={photo.height}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-auto"
        />
        <span className="absolute top-2 left-2 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded">
          {photo.id}
        </span>
        <span
          className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded ${EVIDENCE_STYLE[photo.evidence]}`}
        >
          {photo.evidence}
        </span>
      </div>
      <div className="p-4">
        <p className="font-mono text-xs text-gray-500 mb-2 break-all">{photo.file}</p>
        <p className="text-xs text-gray-400 mb-2">
          {photo.width}x{photo.height} &middot; {photo.kb}K
          {photo.heroReady && (
            <span className="ml-2 text-blue-600 font-semibold">&middot; hero-ready (wide)</span>
          )}
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">{photo.note}</p>
        {photo.usedOn.length === 0 ? (
          <p className="text-xs font-semibold text-amber-600">Not currently used, available</p>
        ) : (
          <details className="text-xs">
            <summary className="cursor-pointer font-semibold text-gray-600">
              Used on {photo.usedOn.length} page{photo.usedOn.length === 1 ? "" : "s"}
            </summary>
            <ul className="mt-2 space-y-0.5 text-gray-500">
              {photo.usedOn.map((p) => (
                <li key={p} className="font-mono break-all">{routeLabel(p)}</li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </div>
  );
}

export default function PhotoLibraryPage() {
  const total = CATEGORIES.reduce((sum, c) => sum + c.photos.length, 0);
  const unused = CATEGORIES.reduce((sum, c) => sum + c.photos.filter((p) => p.usedOn.length === 0).length, 0);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
            Internal only, not indexed, not linked from the site
          </p>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Photo Library</h1>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Every file in <code className="font-mono text-sm bg-gray-200 px-1.5 py-0.5 rounded">public/work-photos/</code>,
            {" "}{total} total, {unused} not currently used anywhere. Each has a stable ID like{" "}
            <code className="font-mono text-sm bg-gray-200 px-1.5 py-0.5 rounded">DC-01</code>. To swap a photo later,
            reference the ID rather than the filename, for example &ldquo;put MO-03 on the Joliet move-out page.&rdquo;
          </p>
          <p className="text-gray-500 text-sm mt-3 max-w-3xl leading-relaxed">
            The evidence rating is an honest read on whether the photo shows visible proof of cleaning (vacuum
            lines, a scrubbed cavity, streak-free glass) versus just a tidy room. A tidy room that was never dirty
            looks identical to one that was just cleaned, so Weak-rated photos are weaker persuasion even though
            nothing is wrong with them.
          </p>
        </div>

        {CATEGORIES.map((cat) => (
          <div key={cat.key} className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-1">{cat.title}</h2>
            <p className="text-sm text-gray-500 mb-5 max-w-3xl">{cat.goodFor}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.photos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
