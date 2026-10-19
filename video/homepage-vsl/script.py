# DSM homepage VSL: narration + shot list. Single source for the renderer
# and for the ElevenLabs script Memo pastes in.
#
# Each shot: narration (what the AI voice says), captions (on-screen chunks,
# words wrapped in *stars* show in DSM orange), photo, and an optional overlay.

import os
HERE = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(HERE, "..", "..", "public", "work-photos") + "/"

SHOTS = [
    dict(id="hook", photo=P+"hero-kitchen-home.jpg", focus=(0.55, 0.5),
         narration="Tired of losing your weekends to cleaning?",
         captions=["Tired of losing your *weekends*", "to cleaning?"]),
    dict(id="problem", photo=P+"shower-tile-cleaning-romeoville-il.jpg", focus=(0.5, 0.45), mood="gray",
         narration="Or paying someone who rushes through it and leaves the details behind?",
         captions=["Or paying someone who *rushes* through it", "and leaves the *details* behind?"]),
    dict(id="guide", photo=os.path.join(HERE, "owners.jpg"), focus=(0.5, 0.5), mood="card",
         narration="DSM Cleaning Solutions is Guillermo and Rocío, a husband and wife team from Romeoville. We've been cleaning homes across the southwest suburbs since 2020.",
         captions=["Meet *Guillermo & Rocío*", "a *husband and wife* team from Romeoville", "cleaning homes across the suburbs", "since *2020*"]),
    dict(id="deep", photo=P+"oven-interior-deep-cleaning.jpg", focus=(0.5, 0.55),
         narration="Deep cleans that catch up on everything.",
         captions=["*Deep cleans* that catch up", "on everything"], tag="Deep Cleaning"),
    dict(id="move", photo=P+"empty-room-move-out-cleaning.jpg", focus=(0.5, 0.6),
         narration="Move-out cleans that get you ready for the walkthrough.",
         captions=["*Move-out cleans* that get you ready", "for the walkthrough"], tag="Move-In & Move-Out"),
    dict(id="recurring", photo=P+"kitchen-standard-cleaning.jpg", focus=(0.5, 0.5),
         narration="And recurring service with the same team every visit.",
         captions=["Recurring service with", "the *same team* every visit"], tag="Recurring Maid Service"),
    dict(id="proof", photo=P+"living-room-fireplace-hardwood.jpg", focus=(0.5, 0.5), mood="blur",
         narration="More than two thousand cleanings later, families across the suburbs rate us five stars on Google.",
         captions=[], overlay="rating"),
    dict(id="review", photo=P+"living-room-fireplace-hardwood.jpg", focus=(0.5, 0.5), mood="blur",
         narration="One customer said it best. They were courteous, efficient, friendly, and went above and beyond.",
         captions=[], overlay="reviews"),
    dict(id="risk", photo=P+"team-member-vacuuming.jpg", focus=(0.45, 0.5), mood="dim",
         narration="Booking us is the easy part. No deposit. No contracts. You see your exact price before you book. Our team is insured, bonded, and background-checked. And if we miss something, tell us within 48 hours and we'll come back and re-clean it for free.",
         captions=[], overlay="risk"),
    dict(id="cta", photo=P+"hero-home.jpg", focus=(0.5, 0.5), mood="dim",
         narration="Tap See My Price and Book, pick your day, and come home to a house that's actually clean.",
         captions=[], overlay="cta"),
]

# Overlay content. All facts confirmed in CONTEXT.md / by Memo.
RATING = dict(stars="★★★★★", big="5.0 on Google", sub="46 five-star reviews", extra="2,000+ cleanings since 2020")
REVIEWS = [
    ("They were courteous, efficient, friendly, and went above and beyond.", "Michelle Gillespie"),
    ("It looks and feels great in here.", "Courtney Horne"),
    ("It is spotless.", "Julie Gilligan"),
]
RISK = ["No deposit", "No contracts", "Exact price before you book", "Insured, bonded & background-checked", "48-hour re-clean guarantee"]
# Which narration word index (0-based, within the risk narration) each risk item appears at.
RISK_CUES = ["deposit.", "contracts.", "price", "insured,", "48"]
CTA = dict(button="See My Price & Book", url="dsmcleaningsolutions.com", phone="(815) 246-2113",
           line1="Come home to a house", line2="that's *actually clean.*")

WPS = 2.55   # narrator words per second (estimate until the real voiceover exists)
PAD = 0.55   # breath between shots


def est_duration(shot):
    return len(shot["narration"].split()) / WPS + PAD


if __name__ == "__main__":
    tot = 0
    for s in SHOTS:
        d = est_duration(s); tot += d
        print(f"{s['id']:10s} {d:5.1f}s  {len(s['narration'].split())} words")
    print("total", round(tot, 1), "s;", sum(len(s['narration'].split()) for s in SHOTS), "words")
