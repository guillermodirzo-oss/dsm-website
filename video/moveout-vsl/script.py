# Move-in / move-out cleaning video. Rendered by video/engine/render.py.
# Facts: CONTEXT.md "Checklist Facts" and the move-out page FAQ. Move-out always
# includes inside the oven, inside the refrigerator, inside every cabinet and
# drawer, inside the dishwasher and closet shelves; like a deep clean it scrubs
# grout and does baseboards and doors. It does NOT vacuum under furniture (the
# house is empty), and there is no walkthrough or inspection with the client.
# No promo codes in the video: offers expire.
import os
HERE = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(HERE, "photos") + "/"
NAME = "dsm-moveout-vsl"

SHOTS = [
    dict(id="hook", photo=P + "best-empty-living-room-shiny-hardwood-556.jpg", focus=(0.5, 0.55),
         narration="Selling your home, buying one, or moving out?",
         captions=["*Selling*, *buying*,", "or *moving out?*"]),
    dict(id="problem", photo=P + "best-empty-room-bay-windows-dark-floors-088.jpg", focus=(0.5, 0.5), mood="gray",
         narration="The last thing you need on moving day is scrubbing an empty house.",
         captions=["The last thing you need on moving day", "is *scrubbing an empty house*"]),
    dict(id="solution", photo=P + "best-empty-kitchen-island-pendant-lights-563.jpg", focus=(0.5, 0.5),
         narration="A move-out clean from DSM Cleaning Solutions gets it ready for the listing photos, the closing, or your first night in.",
         captions=["Ready for the *listing photos*", "the *closing*, or your *first night in*"], tag="Move-In & Move-Out"),
    dict(id="includes", photo=P + "best-empty-fridge-interior-lit-shelves-613.jpg", focus=(0.5, 0.5), mood="dim",
         narration="We clean inside the oven and fridge, inside every cabinet and drawer, and the dishwasher, plus the closet shelves, baseboards, doors and grout.",
         overlay="checklist", header="Every move-out clean *includes*",
         items=["Inside the oven & refrigerator", "Inside every cabinet & drawer", "Inside the dishwasher",
                "Closet shelves wiped", "Baseboards, doors & grout"],
         cues=["oven", "cabinet", "dishwasher,", "closet", "baseboards,"]),
    dict(id="proof", photo=P + "best-empty-dining-room-sunlit-floors-069.jpg", focus=(0.5, 0.5), mood="blur",
         narration="Local realtors recommend us. One family had already moved away, so they left us a lockbox key, and we sent them pictures when we were done.",
         overlay="reviews", reviews=[
             ("We aren't in the area any longer so we left a lock box with a key on the door and the DSM team just let themselves in and took care of everything we needed.", "Melissa Wright"),
             ("I'm so glad DSM Cleaning Services was recommended to us by our realtor!", "Julie Gaubatz"),
             ("I contracted DSM for a move out clean prior to listing the house. From start to finish this was a great experience.", "Vinzenz Unger")]),
    dict(id="risk", photo=P + "best-empty-bedroom-fresh-carpet-ceiling-fan-533.jpg", focus=(0.5, 0.5), mood="dim",
         narration="You see your exact price before you book, there's no deposit, and if we miss anything, tell us within 48 hours and we'll come back and re-clean it for free.",
         overlay="checklist", header="Zero risk to book",
         items=["Exact price before you book", "No deposit", "48-hour re-clean guarantee"],
         cues=["exact", "deposit,", "48"]),
    dict(id="cta", photo=P + "best-empty-family-room-brick-fireplace-004.jpg", focus=(0.5, 0.5), mood="dim",
         narration="Tap See My Price and Book, and hand over the keys with confidence.",
         overlay="cta"),
]

CTA = dict(button="See My Price & Book", url="dsmcleaningsolutions.com", phone="(815) 246-2113",
           line1="Hand over the keys", line2="*with confidence.*")

WPS = 2.9
PAD = 0.5

def est_duration(shot):
    return len(shot["narration"].split()) / WPS + PAD
