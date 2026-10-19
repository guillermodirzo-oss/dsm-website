"""Render the DSM homepage VSL as a photo-story MP4.

python3 render.py v|h [timings.json] [voice.mp3]
  v = 1080x1920 vertical (Reels, Stories, phone), h = 1920x1080 wide (homepage)
  timings.json (optional) = real per-shot durations measured from the voiceover
"""
import json, math, subprocess, sys
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

import os
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from script import SHOTS, RATING, REVIEWS, RISK, RISK_CUES, CTA, WPS, PAD, est_duration

LAYOUT = sys.argv[1] if len(sys.argv) > 1 else "v"
TIMINGS = json.load(open(sys.argv[2])) if len(sys.argv) > 2 and sys.argv[2] != "-" else None
VOICE = sys.argv[3] if len(sys.argv) > 3 else None
W, H = (1080, 1920) if LAYOUT == "v" else (1920, 1080)
FPS = 30
XF = 0.35  # crossfade seconds
ORANGE = (232, 98, 42)
DARK = (17, 24, 39)
GOLD = (251, 191, 36)
F = "/usr/share/fonts/opentype/inter/Inter-"
def font(weight, size): return ImageFont.truetype(f"{F}{weight}.otf", size)

V = LAYOUT == "v"
S = 1.0 if V else 0.82          # type scale for wide layout

# ---------- timing ----------
durs = [TIMINGS[s["id"]] if TIMINGS else est_duration(s) for s in SHOTS]
starts = [sum(durs[:i]) for i in range(len(durs))]
TOTAL = sum(durs) + 0.6
# speech rate per shot (words/sec) so cues follow the real voice when timings exist
rates = [len(s["narration"].split()) / max(d - PAD, 0.5) for s, d in zip(SHOTS, durs)]

# ---------- helpers ----------
def ease(x): x = max(0.0, min(1.0, x)); return 1 - (1 - x) ** 3

def fade_alpha(img, f):
    if f >= 0.999: return img
    out = img.copy(); a = out.getchannel("A").point(lambda v: int(v * f)); out.putalpha(a); return out

def paste(canvas, layer, x, y, f=1.0):
    if f <= 0.001: return
    canvas.alpha_composite(fade_alpha(layer, f), (int(x), int(y)))

def parse_stars(text):
    """'a *b c* d' -> [(word, highlighted)]"""
    out, hi = [], False
    for tok in text.split(" "):
        if not tok: continue
        start, end = tok.startswith("*"), tok.endswith("*")
        w = tok.strip("*")
        if start: hi = True
        out.append((w, hi))
        if end: hi = False
    return out

def text_block(text, size, maxw, weight="ExtraBold", color=(255, 255, 255), hi=ORANGE, align="center",
               shadow=True, line_gap=1.12):
    fnt = font(weight, size)
    words = parse_stars(text)
    space = fnt.getlength(" ")
    lines, cur, curw = [], [], 0
    for w, h in words:
        ww = fnt.getlength(w)
        if cur and curw + space + ww > maxw:
            lines.append((cur, curw)); cur, curw = [], 0
        curw = curw + (space if cur else 0) + ww; cur.append((w, h, ww))
    if cur: lines.append((cur, curw))
    asc, desc = fnt.getmetrics(); lh = int((asc + desc) * line_gap)
    pad = 30
    bw = int(max(l[1] for l in lines)) + pad * 2; bh = lh * len(lines) + pad * 2
    layer = Image.new("RGBA", (bw, bh), (0, 0, 0, 0)); d = ImageDraw.Draw(layer)
    for i, (ws, lw) in enumerate(lines):
        x = pad + ((bw - 2 * pad - lw) / 2 if align == "center" else 0); y = pad + i * lh
        for w, h, ww in ws:
            d.text((x, y), w, font=fnt, fill=(hi if h else color))
            x += ww + space
    if not shadow: return layer
    sh = Image.new("RGBA", layer.size, (0, 0, 0, 0))
    sh.putalpha(layer.getchannel("A").filter(ImageFilter.GaussianBlur(10)).point(lambda v: int(v * 0.85)))
    out = Image.new("RGBA", layer.size, (0, 0, 0, 0)); out.alpha_composite(sh, (0, 3)); out.alpha_composite(layer)
    return out

def rounded(size, radius, fill):
    im = Image.new("RGBA", size, (0, 0, 0, 0)); ImageDraw.Draw(im).rounded_rectangle([0, 0, size[0] - 1, size[1] - 1], radius, fill=fill)
    return im

def drop_shadow(card, blur=24, alpha=0.45, off=10):
    pad = blur * 2
    out = Image.new("RGBA", (card.width + pad * 2, card.height + pad * 2 + off), (0, 0, 0, 0))
    sh = Image.new("RGBA", card.size, (0, 0, 0, int(255 * alpha))); sh.putalpha(card.getchannel("A").point(lambda v: int(v * alpha)))
    out.alpha_composite(sh, (pad, pad + off)); out = out.filter(ImageFilter.GaussianBlur(blur))
    out.alpha_composite(card, (pad, pad)); return out, pad

def star(d, cx, cy, r, fill):
    pts = []
    for i in range(10):
        ang = -math.pi / 2 + i * math.pi / 5; rr = r if i % 2 == 0 else r * 0.45
        pts.append((cx + rr * math.cos(ang), cy + rr * math.sin(ang)))
    d.polygon(pts, fill=fill)

def stars_row(n, r, gap, fill=GOLD):
    w = int(n * 2 * r + (n - 1) * gap); im = Image.new("RGBA", (w, int(2 * r) + 2), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    for i in range(n): star(d, r + i * (2 * r + gap), r, r, fill)
    return im

def pill(text, size, fill=ORANGE, color=(255, 255, 255), padx=34, pady=16, weight="Bold"):
    fnt = font(weight, size); tw = fnt.getlength(text); asc, desc = fnt.getmetrics()
    im = rounded((int(tw + padx * 2), int(asc + desc + pady * 2)), int((asc + desc + pady * 2) / 2), fill + (255,))
    ImageDraw.Draw(im).text((padx, pady), text, font=fnt, fill=color); return im

def check_icon(size):
    im = Image.new("RGBA", (size, size), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    d.ellipse([0, 0, size - 1, size - 1], fill=ORANGE + (255,))
    s = size; d.line([(s * .27, s * .52), (s * .44, s * .68), (s * .74, s * .34)], fill=(255, 255, 255), width=max(4, s // 9), joint="curve")
    return im

# ---------- static layers ----------
grad = Image.new("RGBA", (W, H), (0, 0, 0, 0)); gd = ImageDraw.Draw(grad)
top_h = int(H * (0.22 if V else 0.25))
for y in range(top_h): gd.line([(0, y), (W, y)], fill=(0, 0, 0, int(150 * (1 - y / top_h) ** 1.4)))
b0 = int(H * (0.42 if V else 0.45))
for y in range(b0, H): gd.line([(0, y), (W, y)], fill=(0, 0, 0, int(205 * ((y - b0) / (H - b0)) ** 1.2)))

logo_full = Image.open(os.path.join(HERE, "..", "..", "public", "Logo.png")).convert("RGBA")
_ls = 150 if V else 124
logo_small = rounded((_ls + 24, _ls + 24), 28, (255, 255, 255, 235))
logo_small.alpha_composite(logo_full.resize((_ls, _ls), Image.LANCZOS), (12, 12))

# ---------- photos ----------
def load_bg(shot):
    im = Image.open(shot["photo"]).convert("RGB")
    mood = shot.get("mood")
    if mood == "gray":
        im = ImageEnhance.Brightness(ImageEnhance.Color(im).enhance(0.0)).enhance(0.55)
    elif mood == "dim":
        im = ImageEnhance.Brightness(ImageEnhance.Color(im).enhance(0.75)).enhance(0.62)
    elif mood in ("blur", "card"):
        im = ImageEnhance.Brightness(im.filter(ImageFilter.GaussianBlur(14))).enhance(0.55)
    c = max(W / im.width, H / im.height) * 1.12
    return im.resize((math.ceil(im.width * c), math.ceil(im.height * c)), Image.LANCZOS)

BG = {}
def bg_frame(i, t):
    shot = SHOTS[i]
    if shot["photo"] not in BG or BG[shot["photo"]][0] != shot.get("mood"):
        BG[shot["photo"]] = (shot.get("mood"), load_bg(shot))
    B = BG[shot["photo"]][1]
    p = min(1, max(0, t / (durs[i] + XF)))
    z = 1.0 + 0.08 * (p if i % 2 == 0 else 1 - p)          # alternate push in / pull out
    # The base covers the frame at 1.12x, so a frame-sized window at zoom z is
    # (W, H) * 1.12 / z base pixels and always fits.
    ww, wh = W * 1.12 / z, H * 1.12 / z
    fx, fy = shot.get("focus", (0.5, 0.5))
    cx = min(max(fx * B.width, ww / 2), B.width - ww / 2); cy = min(max(fy * B.height, wh / 2), B.height - wh / 2)
    box = (cx - ww / 2, cy - wh / 2, cx + ww / 2, cy + wh / 2)
    return B.resize((W, H), Image.BILINEAR, box=box).convert("RGBA")

# ---------- per-shot overlays ----------
CAP_MAXW = int(W * (0.86 if V else 0.70)); CAP_SIZE = int(84 * S) if V else 78
CAP_Y = int(H * 0.645) if V else int(H * 0.79)
cap_cache = {}
def caption(text):
    if text not in cap_cache: cap_cache[text] = text_block(text, CAP_SIZE, CAP_MAXW)
    return cap_cache[text]

def cap_schedule(shot, dur):
    caps = shot["captions"];
    if not caps: return []
    speak = max(dur - PAD, 0.6); n = [len(c.replace("*", "").split()) for c in caps]; tot = sum(n)
    out, t = [], 0.0
    for c, k in zip(caps, n):
        out.append((t, c)); t += speak * k / tot
    return out

tag_cache = {}
def draw_common(canvas, i, t):
    shot = SHOTS[i]
    if shot.get("overlay") != "cta":
        canvas.alpha_composite(logo_small, (40, 60) if V else (48, 36))
    if shot.get("tag"):
        if shot["tag"] not in tag_cache: tag_cache[shot["tag"]] = pill(shot["tag"], int(44 * S) if V else 36)
        tg = tag_cache[shot["tag"]]; f = ease(t / 0.35)
        x = (W - tg.width) // 2; y = CAP_Y - (250 if V else 190) + int(20 * (1 - f))
        paste(canvas, tg, x, y, f)
    for k, (ts, c) in enumerate(cap_schedule(shot, durs[i])):
        sched = cap_schedule(shot, durs[i]); te = sched[k + 1][0] if k + 1 < len(sched) else durs[i] + XF
        if ts <= t < te:
            img = caption(c); f = ease((t - ts) / 0.22)
            paste(canvas, img, (W - img.width) // 2, CAP_Y - img.height // 2 + int(28 * (1 - f)), f)

# rating card
def build_rating():
    cw = 900 if V else 980; card = rounded((cw, 640 if V else 560), 48, (255, 255, 255, 250)); d = ImageDraw.Draw(card)
    st = stars_row(5, 46 if V else 42, 18); card.alpha_composite(st, ((cw - st.width) // 2, 60))
    y = 60 + st.height + 30
    for txt, f, col in [(RATING["big"], font("Black", 104 if V else 92), DARK), (RATING["sub"], font("SemiBold", 52 if V else 46), (75, 85, 99))]:
        tw = f.getlength(txt); d.text(((cw - tw) / 2, y), txt, font=f, fill=col); a, b = f.getmetrics(); y += a + b + 14
    y += 16; d.line([(120, y), (cw - 120, y)], fill=(229, 231, 235), width=3); y += 34
    f = font("ExtraBold", 54 if V else 48); tw = f.getlength(RATING["extra"]); d.text(((cw - tw) / 2, y), RATING["extra"], font=f, fill=ORANGE)
    a, b = f.getmetrics(); card = card.crop((0, 0, cw, y + a + b + 56))
    return drop_shadow(card)
def build_review(text, name, cw, size):
    f = font("SemiBold", size); words = text.split(); lines, cur = [], ""
    for w in words:
        test = (cur + " " + w).strip()
        if f.getlength("“" + test + "”") > cw - 100 and cur: lines.append(cur); cur = w
        else: cur = test
    lines.append(cur); lines[0] = "“" + lines[0]; lines[-1] = lines[-1] + "”"
    a, b = f.getmetrics(); lh = int((a + b) * 1.18)
    st = stars_row(5, 17, 8); nf = font("Bold", int(size * 0.72)); gf = font("Medium", int(size * 0.6))
    h = 44 + st.height + 20 + lh * len(lines) + 22 + int(size * 0.9) + 40
    card = rounded((cw, h), 34, (255, 255, 255, 250)); d = ImageDraw.Draw(card)
    card.alpha_composite(st, (50, 44)); y = 44 + st.height + 20
    for ln in lines: d.text((50, y), ln, font=f, fill=DARK); y += lh
    y += 22; d.text((50, y), name, font=nf, fill=DARK)
    d.text((50 + nf.getlength(name) + 18, y + 4), "Google review", font=gf, fill=(107, 114, 128))
    return drop_shadow(card, blur=18, alpha=0.4, off=8)

def build_risk_rows():
    rows = []; sz = 56 if V else 50; ic = check_icon(74 if V else 66); f = font("Bold", sz)
    maxw = int(W * (0.80 if V else 0.6)) - ic.width - 28
    for item in RISK:
        lines, cur = [], ""
        for w in item.split():
            test = (cur + " " + w).strip()
            if f.getlength(test) > maxw and cur: lines.append(cur); cur = w
            else: cur = test
        lines.append(cur)
        a, b = f.getmetrics(); lh = int((a + b) * 1.08); th = lh * len(lines); hgt = max(ic.height, th)
        tw = max(f.getlength(l) for l in lines)
        r = Image.new("RGBA", (int(ic.width + 28 + tw + 10), hgt + 10), (0, 0, 0, 0))
        r.alpha_composite(ic, (0, (min(hgt, ic.height + 6) - ic.height) // 2))
        d = ImageDraw.Draw(r)
        for k, l in enumerate(lines): d.text((ic.width + 28, k * lh + max(0, (ic.height - lh) // 2) if len(lines) == 1 else k * lh), l, font=f, fill=(255, 255, 255))
        sh = Image.new("RGBA", r.size, (0, 0, 0, 0)); sh.putalpha(r.getchannel("A").filter(ImageFilter.GaussianBlur(8)).point(lambda v: int(v * 0.7)))
        out = Image.new("RGBA", r.size, (0, 0, 0, 0)); out.alpha_composite(sh, (0, 3)); out.alpha_composite(r)
        rows.append(out)
    return rows

OV = {}
def overlay(canvas, i, t):
    kind = SHOTS[i].get("overlay"); d = durs[i]
    if kind == "rating":
        if "rating" not in OV: OV["rating"] = build_rating()
        card, pad = OV["rating"]; f = ease(t / 0.4)
        paste(canvas, card, (W - card.width) // 2, (H - card.height) // 2 - (60 if V else 0) + int(50 * (1 - f)), f)
    elif kind == "reviews":
        if "reviews" not in OV:
            cw = 940 if V else 1240
            OV["reviews"] = [build_review(tx, nm, cw, (54 if k == 0 else 46) if V else (46 if k == 0 else 38)) for k, (tx, nm) in enumerate(REVIEWS)]
        cards = OV["reviews"]; gap = -20 if V else -34
        total_h = sum(c[0].height for c in cards) + gap * (len(cards) - 1)
        y = (H - total_h) // 2 - (40 if V else 0)
        appear = [0.0, d * 0.55, d * 0.72]
        for (c, pad), ta in zip(cards, appear):
            f = ease((t - ta) / 0.35)
            paste(canvas, c, (W - c.width) // 2, y + int(40 * (1 - f)), f); y += c.height + gap
    elif kind == "risk":
        if "risk" not in OV:
            hdr = text_block("Booking us is the *easy part*", 74 if V else 68, int(W * 0.94))
            OV["risk"] = (hdr, build_risk_rows())
        hdr, rows = OV["risk"]
        words = SHOTS[i]["narration"].split(); rate = rates[i]
        cues = (TIMINGS["risk_cues"] if TIMINGS and "risk_cues" in TIMINGS
                else [next(k for k, w in enumerate(words) if w.startswith(c)) / rate for c in RISK_CUES])
        rg = 34 if V else 22; blockh = hdr.height + 30 + sum(r.height for r in rows) + rg * (len(rows) - 1)
        y0 = (H - blockh) // 2 - (40 if V else 0)
        paste(canvas, hdr, (W - hdr.width) // 2, y0, ease(t / 0.35))
        x0 = (W - max(r.width for r in rows)) // 2; y = y0 + hdr.height + 30
        for r, cu in zip(rows, cues):
            f = ease((t - cu + 0.15) / 0.3); paste(canvas, r, x0 - int(40 * (1 - f)), y, f); y += r.height + rg
    elif kind == "cta":
        if "cta" not in OV:
            lg = logo_full.resize((380, 380) if V else (300, 300), Image.LANCZOS)
            l1 = text_block(CTA["line1"], 86 if V else 76, int(W * 0.9)); l2 = text_block(CTA["line2"], 86 if V else 76, int(W * 0.9))
            btn = pill("→  " + CTA["button"], 60 if V else 50, padx=64, pady=30, weight="ExtraBold")
            btn, _ = drop_shadow(btn, blur=20, alpha=0.5, off=8)
            info = text_block(f"{CTA['url']}   •   {CTA['phone']}", 44 if V else 38, int(W * 0.95), weight="SemiBold")
            OV["cta"] = (lg, l1, l2, btn, info)
        lg, l1, l2, btn, info = OV["cta"]
        if V:
            y = 300; paste(canvas, lg, (W - lg.width) // 2, y, ease(t / 0.4)); y += lg.height + 10
            paste(canvas, l1, (W - l1.width) // 2, y, ease((t - 0.25) / 0.35)); y += l1.height - 50
            paste(canvas, l2, (W - l2.width) // 2, y, ease((t - 0.45) / 0.35)); y += l2.height + 20
            pulse = 1 if t < 1.2 else 0.88 + 0.12 * (0.5 + 0.5 * math.cos((t - 1.2) * 4))
            paste(canvas, btn, (W - btn.width) // 2, y, ease((t - 0.8) / 0.35) * pulse); y += btn.height + 10
            paste(canvas, info, (W - info.width) // 2, y, ease((t - 1.1) / 0.35))
        else:
            paste(canvas, lg, 170, (H - lg.height) // 2 - 40, ease(t / 0.4))
            cx = 560 + (W - 560) // 2; y = 230
            paste(canvas, l1, cx - l1.width // 2, y, ease((t - 0.25) / 0.35)); y += l1.height - 46
            paste(canvas, l2, cx - l2.width // 2, y, ease((t - 0.45) / 0.35)); y += l2.height + 10
            pulse = 1 if t < 1.2 else 0.88 + 0.12 * (0.5 + 0.5 * math.cos((t - 1.2) * 4))
            paste(canvas, btn, cx - btn.width // 2, y, ease((t - 0.8) / 0.35) * pulse); y += btn.height + 4
            paste(canvas, info, cx - info.width // 2, y, ease((t - 1.1) / 0.35))

CARD = {}
def photo_card(i, t, canvas):
    """Square photos (like the owners' selfie) shown whole, as a framed card over a blurred copy."""
    shot = SHOTS[i]
    if shot["photo"] not in CARD:
        side = 800 if V else 600
        im = Image.open(shot["photo"]).convert("RGB")
        s0 = min(im.width, im.height); im = im.crop(((im.width - s0) // 2, (im.height - s0) // 2, (im.width + s0) // 2, (im.height + s0) // 2))
        im = im.resize((side, side), Image.LANCZOS).convert("RGBA")
        mask = Image.new("L", (side, side), 0); ImageDraw.Draw(mask).rounded_rectangle([0, 0, side - 1, side - 1], 36, fill=255)
        frame_ = rounded((side + 28, side + 28), 46, (255, 255, 255, 255))
        im.putalpha(mask); frame_.alpha_composite(im, (14, 14))
        CARD[shot["photo"]] = drop_shadow(frame_, blur=26, alpha=0.55, off=12)
    card, pad = CARD[shot["photo"]]
    f = ease(t / 0.45)
    x = (W - card.width) // 2; y = (250 if V else 40) - pad + int(40 * (1 - f))
    paste(canvas, card, x, y, f)

def shot_frame(i, t):
    c = bg_frame(i, t); c.alpha_composite(grad)
    if SHOTS[i].get("mood") == "card": photo_card(i, t, c)
    overlay(c, i, t); draw_common(c, i, t); return c

def frame(T):
    i = max(k for k in range(len(SHOTS)) if starts[k] <= T) if T < starts[-1] + durs[-1] else len(SHOTS) - 1
    t = T - starts[i]
    img = shot_frame(i, t)
    if i > 0 and t < XF:  # crossfade from previous shot
        prev = shot_frame(i - 1, durs[i - 1] + t)
        img = Image.blend(prev, img, ease(t / XF))
    # progress bar
    d = ImageDraw.Draw(img); bh = 9
    d.rectangle([0, 0, W, bh], fill=(255, 255, 255, 70)); d.rectangle([0, 0, int(W * min(1, T / TOTAL)), bh], fill=ORANGE + (255,))
    return img.convert("RGB")

if __name__ == "__main__":
    out = os.path.join(HERE, "out") + f"/dsm-homepage-vsl-{'vertical' if V else 'wide'}{'-voice' if VOICE else ''}.mp4"
    os.makedirs(os.path.join(HERE, "out"), exist_ok=True)
    if "--stills" in sys.argv:
        for k, s in enumerate(SHOTS):
            frame(starts[k] + min(durs[k] * 0.8, durs[k] - 0.1)).save(os.path.join(HERE, "out") + f"/still-{LAYOUT}-{k:02d}-{s['id']}.jpg", quality=85)
        sys.exit()
    os.makedirs(os.path.join(HERE, "out"), exist_ok=True)
    n = int(TOTAL * FPS)
    cmd = ["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-"]
    cmd += (["-i", VOICE] if VOICE else ["-f", "lavfi", "-i", "anullsrc=r=48000:cl=stereo"])
    if VOICE: cmd += ["-af", "apad"]   # pad the voice so the video's own length decides the end
    cmd += ["-map", "0:v", "-map", "1:a", "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-pix_fmt", "yuv420p",
            "-c:a", "aac", "-b:a", "192k", "-shortest", "-movflags", "+faststart", out]
    p = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    for k in range(n):
        p.stdin.write(frame(k / FPS).tobytes())
        if k % 300 == 0: print(f"{k}/{n}", flush=True)
    p.stdin.close(); p.wait(); print("done", out, round(TOTAL, 1), "s")
