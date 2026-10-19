# Deep cleaning video. Rendered by video/engine/render.py.
# Facts: CONTEXT.md "Checklist Facts". A deep clean adds exactly seven things on
# top of a standard clean: baseboards; doors and door frames; grout; vacuuming
# under and behind furniture; inside window glass; light fixtures; degreasing the
# stovetop, hood vent and burners. Inside the oven is NOT included (add-on), so
# no oven-interior photos here.
import os
HERE = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(HERE, "photos") + "/"
NAME = "dsm-deep-vsl"

SHOTS = [
    dict(id="hook", photo=P + "best-marble-tile-walk-in-glass-shower-401.jpg", focus=(0.5, 0.5),
         narration="When was the last time your house felt truly clean?",
         captions=["When was the last time your house", "felt *truly clean?*"]),
    dict(id="problem", photo=P + "dirty-tub-debris-before-138.jpg", focus=(0.5, 0.6), mood="dim",
         narration="Regular cleaning keeps up with the surface, but grime builds up where nobody reaches.",
         captions=["Regular cleaning keeps up with the surface", "but grime builds up where *nobody reaches*"]),
    dict(id="solution", photo=P + "best-glass-shower-marble-tile-spotless-338.jpg", focus=(0.5, 0.5),
         narration="A DSM deep clean gets your whole home caught up in one visit.",
         captions=["A DSM deep clean gets your", "*whole home* caught up in one visit"], tag="Deep Cleaning"),
    dict(id="includes", photo=P + "best-gas-range-grates-spotless-close-up-214.jpg", focus=(0.5, 0.5), mood="dim",
         narration="We scrub the grout, wipe baseboards, doors and door frames, degrease the stovetop and hood, and vacuum under and behind the furniture.",
         overlay="checklist", header="What a deep clean *adds*",
         items=["Grout scrubbed", "Baseboards, doors & door frames", "Stovetop, hood & burners degreased",
                "Under & behind furniture vacuumed", "Light fixtures & inside window glass"],
         cues=["scrub", "baseboards,", "degrease", "vacuum", "behind"]),
    dict(id="ontop", photo=P + "best-gas-cooktop-grates-marble-counter-071.jpg", focus=(0.5, 0.5),
         narration="All on top of everything in a regular clean.",
         captions=["All on top of *everything*", "in a regular clean"]),
    dict(id="proof", photo=P + "best-farmhouse-sink-marble-island-180.jpg", focus=(0.5, 0.5), mood="blur",
         narration="One family had fallen behind after having a baby. After their deep clean, they said it looks and feels great in here.",
         overlay="reviews", reviews=[
             ("We had been neglecting some of the cleaning since having a baby… It looks and feels great in here.", "Courtney Horne"),
             ("Thank you so much for a great job done on my entire house. It is spotless.", "Julie Gilligan"),
             ("They replied to my estimate request the same day and got me booked for a deep clean within the week.", "Claire Farnsworth")]),
    dict(id="risk", photo=P + "best-black-frame-glass-shower-147.jpg", focus=(0.5, 0.5), mood="dim",
         narration="You see your exact price before you book, there's no deposit, and if we miss something, tell us within 48 hours and we'll come back and re-clean it for free.",
         overlay="checklist", header="Zero risk to book",
         items=["Exact price before you book", "No deposit", "48-hour re-clean guarantee"],
         cues=["exact", "deposit,", "48"]),
    dict(id="cta", photo=P + "chimney-range-hood-pro-range-357.jpg", focus=(0.5, 0.5), mood="dim",
         narration="Tap See My Price and Book, and get your whole house caught up.",
         overlay="cta"),
]

CTA = dict(button="See My Price & Book", url="dsmcleaningsolutions.com", phone="(815) 246-2113",
           line1="Get your whole house", line2="*caught up.*")

WPS = 2.9
PAD = 0.5

def est_duration(shot):
    return len(shot["narration"].split()) / WPS + PAD
