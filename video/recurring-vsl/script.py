# Recurring maid service video. Rendered by video/engine/render.py.
# Facts from CONTEXT.md (recurring service, discounts in lib/pricing.ts).
import os
HERE = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(HERE, "photos") + "/"
NAME = "dsm-recurring-vsl"

SHOTS = [
    dict(id="hook", photo=P + "best-leather-sofas-living-room-hardwood-389.jpg", focus=(0.5, 0.55),
         narration="Imagine never spending another Saturday cleaning your house.",
         captions=["Imagine never spending another", "*Saturday* cleaning your house"]),
    dict(id="problem", photo=P + "sage-cabinet-kitchen-farmhouse-sink-072.jpg", focus=(0.5, 0.5), mood="gray",
         narration="Life gets busy, the house slips, and catching up eats your whole weekend.",
         captions=["Life gets busy and the house slips", "catching up eats your *whole weekend*"]),
    dict(id="team", photo=P + "best-cherry-kitchen-island-pendant-lights-342.jpg", focus=(0.5, 0.5),
         narration="With recurring cleaning from DSM Cleaning Solutions, the same team comes every week, every two weeks, or once a month.",
         captions=["The *same team* every visit", "weekly, every two weeks, or monthly"], tag="Recurring Maid Service"),
    dict(id="includes", photo=P + "best-canopy-bed-made-white-bedding-429.jpg", focus=(0.5, 0.5), mood="dim",
         narration="Kitchen, bathrooms, floors, dusting, and we'll even change your sheets if you ask.",
         overlay="checklist", header="What *every visit* covers",
         items=["Kitchen & bathrooms", "Floors vacuumed & mopped", "Dusting throughout", "Sheets changed on request"],
         cues=["Kitchen,", "floors,", "dusting,", "change"]),
    dict(id="offer", photo=P + "best-white-kitchen-island-pendant-lights-063.jpg", focus=(0.5, 0.5), mood="blur",
         narration="You save up to twenty percent per visit, and your price is locked for twelve months.",
         overlay="plans", header="Save up to *20%* per visit",
         plans=[("Weekly", "20% off", "Every week", False), ("Every 2 Weeks", "15% off", "Most popular", True), ("Monthly", "10% off", "Once a month", False)],
         fine="Price locked 12 months (same home and schedule)", cues=["Save", "up", "percent"]),
    dict(id="risk", photo=P + "best-living-room-stone-fireplace-furnished-046.jpg", focus=(0.5, 0.5), mood="dim",
         narration="No contracts. You don't need a deep clean to start. And you can skip or reschedule for free.",
         overlay="checklist", header="Zero risk to start",
         items=["No contracts", "No deep clean needed first", "Skip or reschedule free"],
         cues=["contracts.", "deep", "Skip"]),
    dict(id="proof", photo=P + "best-dining-room-table-flowers-chandelier-608.jpg", focus=(0.5, 0.5), mood="blur",
         narration="One customer booked us once for a move-in clean, and liked it so much they stayed with us for regular cleanings.",
         overlay="reviews", reviews=[
             ("They did such an amazing job that I decided to stay with this company for regular cleanings.", "Alina"),
             ("This service is consistently perfect!", "Julie G"),
             ("I highly recommend, customer since 2024", "Jae Mac")]),
    dict(id="cta", photo=P + "best-two-story-family-room-brick-fireplace-394.jpg", focus=(0.5, 0.5), mood="dim",
         narration="Tap See My Price and Book, pick your schedule, and come home to a clean house, every time.",
         overlay="cta"),
]

CTA = dict(button="See My Price & Book", url="dsmcleaningsolutions.com", phone="(815) 246-2113",
           line1="A clean house,", line2="*every time.*")

WPS = 2.9
PAD = 0.5

def est_duration(shot):
    return len(shot["narration"].split()) / WPS + PAD
