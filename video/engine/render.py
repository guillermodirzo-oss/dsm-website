"""DSM photo-story video engine (service videos).

python3 render.py <script.py> v|h [timings.json|-] [voice.mp3] [--stills]
  v = 1080x1920 vertical, h = 1920x1080 wide
  The script module defines SHOTS, CTA, WPS, PAD and est_duration (see
  video/recurring-vsl/script.py). Output goes to <script dir>/out/.

Shot keys: id, photo, focus=(x,y), mood (None|"dim"|"gray"|"blur"|"card"),
narration, captions (list; *stars* = orange), tag (pill), overlay:
  "checklist"  header, items, cues (first-word prefixes in the narration)
  "plans"      plans=[(title, big, sub, popular)], fine (small print), cues
  "reviews"    reviews=[(text, name)]
  "cta"        uses the module's CTA dict
"""
import importlib.util, json, math, os, re, subprocess, sys
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ENGINE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.join(ENGINE, "..", "..")
args = [a for a in sys.argv[1:] if not a.startswith("--")]
SCRIPT_PATH = os.path.abspath(args[0])
spec = importlib.util.spec_from_file_location("vsl_script", SCRIPT_PATH)
M = importlib.util.module_from_spec(spec); spec.loader.exec_module(M)
SHOTS, CTA, PAD = M.SHOTS, M.CTA, M.PAD
NAME = getattr(M, "NAME", "vsl")
OUTDIR = os.path.join(os.path.dirname(SCRIPT_PATH), "out")

LAYOUT = args[1] if len(args) > 1 else "v"
TIMINGS = json.load(open(args[2])) if len(args) > 2 and args[2] != "-" else None
VOICE = args[3] if len(args) > 3 else None
W, H = (1080, 1920) if LAYOUT == "v" else (1920, 1080)
V = LAYOUT == "v"
FPS, XF = 30, 0.35
ORANGE, DARK, GOLD = (232, 98, 42), (17, 24, 39), (251, 191, 36)
F = "/usr/share/fonts/opentype/inter/Inter-"
def font(weight, size): return ImageFont.truetype(f"{F}{weight}.otf", size)

durs = [TIMINGS[s["id"]] if TIMINGS else M.est_duration(s) for s in SHOTS]
starts = [sum(durs[:i]) for i in range(len(durs))]
TOTAL = sum(durs) + 0.6
rates = [len(s["narration"].split()) / max(d - PAD, 0.5) for s, d in zip(SHOTS, durs)]

def ease(x): x = max(0.0, min(1.0, x)); return 1 - (1 - x) ** 3
def fade_alpha(img, f):
    if f >= 0.999: return img
    out = img.copy(); out.putalpha(out.getchannel("A").point(lambda v: int(v * f))); return out
def paste(canvas, layer, x, y, f=1.0):
    if f > 0.001: canvas.alpha_composite(fade_alpha(layer, f), (int(x), int(y)))

def parse_stars(text):
    """'a *b c*, d' -> [(word, highlighted)]. A closing * may sit before punctuation."""
    out, hi = [], False
    for tok in text.split(" "):
        if not tok: continue
        if tok.startswith("*"): hi = True
        out.append((tok.replace("*", ""), hi))
        if re.search(r"\*[^\w*]*$", tok) and not (tok.startswith("*") and tok.count("*") == 1): hi = False
    return out

def soft_shadow(layer, blur=10, a=0.85, dy=3):
    sh = Image.new("RGBA", layer.size, (0, 0, 0, 0))
    sh.putalpha(layer.getchannel("A").filter(ImageFilter.GaussianBlur(blur)).point(lambda v: int(v * a)))
    out = Image.new("RGBA", layer.size, (0, 0, 0, 0)); out.alpha_composite(sh, (0, dy)); out.alpha_composite(layer); return out

def text_block(text, size, maxw, weight="ExtraBold", color=(255, 255, 255), hi=ORANGE, shadow=True, line_gap=1.12):
    fnt = font(weight, size); words = parse_stars(text); space = fnt.getlength(" ")
    lines, cur, curw = [], [], 0
    for w, h in words:
        ww = fnt.getlength(w)
        if cur and curw + space + ww > maxw: lines.append((cur, curw)); cur, curw = [], 0
        curw = curw + (space if cur else 0) + ww; cur.append((w, h, ww))
    if cur: lines.append((cur, curw))
    asc, desc = fnt.getmetrics(); lh = int((asc + desc) * line_gap); pad = 30
    bw = int(max(l[1] for l in lines)) + pad * 2; bh = lh * len(lines) + pad * 2
    layer = Image.new("RGBA", (bw, bh), (0, 0, 0, 0)); d = ImageDraw.Draw(layer)
    for i, (ws, lw) in enumerate(lines):
        x = pad + (bw - 2 * pad - lw) / 2; y = pad + i * lh
        for w, h, ww in ws: d.text((x, y), w, font=fnt, fill=(hi if h else color)); x += ww + space
    return soft_shadow(layer) if shadow else layer

def rounded(size, radius, fill):
    im = Image.new("RGBA", size, (0, 0, 0, 0)); ImageDraw.Draw(im).rounded_rectangle([0, 0, size[0] - 1, size[1] - 1], radius, fill=fill); return im
def drop_shadow(card, blur=24, alpha=0.45, off=10):
    pad = blur * 2; out = Image.new("RGBA", (card.width + pad * 2, card.height + pad * 2 + off), (0, 0, 0, 0))
    sh = Image.new("RGBA", card.size, (0, 0, 0, 0)); sh.putalpha(card.getchannel("A").point(lambda v: int(v * alpha)))
    out.alpha_composite(sh, (pad, pad + off)); out = out.filter(ImageFilter.GaussianBlur(blur)); out.alpha_composite(card, (pad, pad)); return out, pad
def star(d, cx, cy, r, fill):
    d.polygon([(cx + (r if i % 2 == 0 else r * .45) * math.cos(-math.pi / 2 + i * math.pi / 5), cy + (r if i % 2 == 0 else r * .45) * math.sin(-math.pi / 2 + i * math.pi / 5)) for i in range(10)], fill=fill)
def stars_row(n, r, gap, fill=GOLD):
    w = int(n * 2 * r + (n - 1) * gap); im = Image.new("RGBA", (w, int(2 * r) + 2), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    for i in range(n): star(d, r + i * (2 * r + gap), r, r, fill)
    return im
def pill(text, size, fill=ORANGE, color=(255, 255, 255), padx=34, pady=16, weight="Bold"):
    fnt = font(weight, size); tw = fnt.getlength(text); a, b = fnt.getmetrics()
    im = rounded((int(tw + padx * 2), int(a + b + pady * 2)), int((a + b + pady * 2) / 2), fill + (255,))
    ImageDraw.Draw(im).text((padx, pady), text, font=fnt, fill=color); return im
def check_icon(size):
    im = Image.new("RGBA", (size, size), (0, 0, 0, 0)); d = ImageDraw.Draw(im); s = size
    d.ellipse([0, 0, s - 1, s - 1], fill=ORANGE + (255,)); d.line([(s * .27, s * .52), (s * .44, s * .68), (s * .74, s * .34)], fill=(255, 255, 255), width=max(4, s // 9), joint="curve"); return im
def wrap(fnt, text, maxw):
    lines, cur = [], ""
    for w in text.split():
        t = (cur + " " + w).strip()
        if fnt.getlength(t) > maxw and cur: lines.append(cur); cur = w
        else: cur = t
    return lines + [cur]

grad = Image.new("RGBA", (W, H), (0, 0, 0, 0)); gd = ImageDraw.Draw(grad)
top_h = int(H * (0.22 if V else 0.25))
for y in range(top_h): gd.line([(0, y), (W, y)], fill=(0, 0, 0, int(150 * (1 - y / top_h) ** 1.4)))
b0 = int(H * (0.42 if V else 0.45))
for y in range(b0, H): gd.line([(0, y), (W, y)], fill=(0, 0, 0, int(205 * ((y - b0) / (H - b0)) ** 1.2)))
logo_full = Image.open(os.path.join(REPO, "public", "Logo.png")).convert("RGBA")
_ls = 150 if V else 124
logo_small = rounded((_ls + 24, _ls + 24), 28, (255, 255, 255, 235)); logo_small.alpha_composite(logo_full.resize((_ls, _ls), Image.LANCZOS), (12, 12))

BG = {}
def bg_frame(i, t):
    shot = SHOTS[i]; key = (shot["photo"], shot.get("mood"))
    if key not in BG:
        im = Image.open(shot["photo"]).convert("RGB"); mood = shot.get("mood")
        if mood == "gray": im = ImageEnhance.Brightness(ImageEnhance.Color(im).enhance(0.0)).enhance(0.55)
        elif mood == "dim": im = ImageEnhance.Brightness(ImageEnhance.Color(im).enhance(0.75)).enhance(0.55)
        elif mood in ("blur", "card"): im = ImageEnhance.Brightness(im.filter(ImageFilter.GaussianBlur(14))).enhance(0.55)
        c = max(W / im.width, H / im.height) * 1.12
        BG[key] = im.resize((math.ceil(im.width * c), math.ceil(im.height * c)), Image.LANCZOS)
    B = BG[key]; p = min(1, max(0, t / (durs[i] + XF))); z = 1.0 + 0.08 * (p if i % 2 == 0 else 1 - p)
    ww, wh = W * 1.12 / z, H * 1.12 / z; fx, fy = shot.get("focus", (0.5, 0.5))
    cx = min(max(fx * B.width, ww / 2), B.width - ww / 2); cy = min(max(fy * B.height, wh / 2), B.height - wh / 2)
    return B.resize((W, H), Image.BILINEAR, box=(cx - ww / 2, cy - wh / 2, cx + ww / 2, cy + wh / 2)).convert("RGBA")

CAP_MAXW = int(W * (0.86 if V else 0.70)); CAP_SIZE = 84 if V else 78
CAP_Y = int(H * 0.645) if V else int(H * 0.79)
cache = {}
def cached(key, fn):
    if key not in cache: cache[key] = fn()
    return cache[key]
def cap_schedule(shot, dur):
    caps = shot.get("captions") or []
    if not caps: return []
    speak = max(dur - PAD, 0.6); n = [len(c.replace("*", "").split()) for c in caps]; tot = sum(n); out, t = [], 0.0
    for c, k in zip(caps, n): out.append((t, c)); t += speak * k / tot
    return out
def cue_times(i):
    shot = SHOTS[i]
    if TIMINGS and f"{shot['id']}_cues" in TIMINGS: return TIMINGS[f"{shot['id']}_cues"]
    words = shot["narration"].split()
    return [next(k for k, w in enumerate(words) if w.lower().startswith(c.lower())) / rates[i] for c in shot["cues"]]

def draw_common(canvas, i, t):
    shot = SHOTS[i]
    if shot.get("overlay") != "cta": canvas.alpha_composite(logo_small, (40, 60) if V else (48, 36))
    if shot.get("tag"):
        tg = cached(("tag", shot["tag"]), lambda: pill(shot["tag"], 44 if V else 36)); f = ease(t / 0.35)
        paste(canvas, tg, (W - tg.width) // 2, CAP_Y - (250 if V else 190) + int(20 * (1 - f)), f)
    sched = cap_schedule(shot, durs[i])
    for k, (ts, c) in enumerate(sched):
        te = sched[k + 1][0] if k + 1 < len(sched) else durs[i] + XF
        if ts <= t < te:
            img = cached(("cap", c), lambda: text_block(c, CAP_SIZE, CAP_MAXW)); f = ease((t - ts) / 0.22)
            paste(canvas, img, (W - img.width) // 2, CAP_Y - img.height // 2 + int(28 * (1 - f)), f)

def build_review(text, name, cw, size):
    f = font("SemiBold", size); lines = wrap(f, "“" + text + "”", cw - 100)
    a, b = f.getmetrics(); lh = int((a + b) * 1.18); st = stars_row(5, 17, 8); nf = font("Bold", int(size * .72)); gf = font("Medium", int(size * .6))
    h = 44 + st.height + 20 + lh * len(lines) + 22 + int(size * .9) + 40
    card = rounded((cw, h), 34, (255, 255, 255, 250)); d = ImageDraw.Draw(card); card.alpha_composite(st, (50, 44)); y = 44 + st.height + 20
    for ln in lines: d.text((50, y), ln, font=f, fill=DARK); y += lh
    y += 22; d.text((50, y), name, font=nf, fill=DARK); d.text((50 + nf.getlength(name) + 18, y + 4), "Google review", font=gf, fill=(107, 114, 128))
    return drop_shadow(card, blur=18, alpha=0.4, off=8)

def build_checklist(items):
    rows = []; sz = 56 if V else 50; ic = check_icon(74 if V else 66); f = font("Bold", sz); maxw = int(W * (0.80 if V else 0.6)) - ic.width - 28
    for item in items:
        lines = wrap(f, item, maxw); a, b = f.getmetrics(); lh = int((a + b) * 1.08); hgt = max(ic.height, lh * len(lines))
        r = Image.new("RGBA", (int(ic.width + 28 + max(f.getlength(l) for l in lines) + 10), hgt + 10), (0, 0, 0, 0))
        r.alpha_composite(ic, (0, 0 if len(lines) > 1 else (hgt - ic.height) // 2)); d = ImageDraw.Draw(r)
        for k, l in enumerate(lines): d.text((ic.width + 28, k * lh + (max(0, (ic.height - lh) // 2) if len(lines) == 1 else 0)), l, font=f, fill=(255, 255, 255))
        rows.append(soft_shadow(r, blur=8, a=0.7))
    return rows

def build_plan(title, big, sub, popular):
    cw, ch = (880, 230) if V else (500, 300)
    card = rounded((cw, ch), 36, (255, 255, 255, 250) if not popular else ORANGE + (255,)); d = ImageDraw.Draw(card)
    fg = DARK if not popular else (255, 255, 255); mute = (90, 98, 110) if not popular else (255, 235, 225)
    tf, bf, sf = font("Bold", 44 if V else 40), font("Black", 84 if V else 80), font("SemiBold", 34 if V else 30)
    if V:
        d.text((50, 40), title, font=tf, fill=fg); d.text((50, 108), sub, font=sf, fill=mute)
        bw = bf.getlength(big); d.text((cw - 50 - bw, (ch - 100) // 2), big, font=bf, fill=fg)
    else:
        for txt, fn, col, y in [(title, tf, fg, 40), (big, bf, fg, 100), (sub, sf, mute, 210)]:
            d.text(((cw - fn.getlength(txt)) / 2, y), txt, font=fn, fill=col)
    return drop_shadow(card, blur=18, alpha=0.45, off=8)

def overlay(canvas, i, t):
    shot = SHOTS[i]; kind = shot.get("overlay"); d = durs[i]
    if kind == "checklist":
        hdr, rows = cached(("chk", i), lambda: (text_block(shot["header"], 74 if V else 66, int(W * 0.94)), build_checklist(shot["items"])))
        cues = cue_times(i); rg = 34 if V else 22
        blockh = hdr.height + 30 + sum(r.height for r in rows) + rg * (len(rows) - 1); y0 = (H - blockh) // 2 - (40 if V else 0)
        paste(canvas, hdr, (W - hdr.width) // 2, y0, ease(t / 0.35)); x0 = (W - max(r.width for r in rows)) // 2; y = y0 + hdr.height + 30
        for r, cu in zip(rows, cues):
            f = ease((t - cu + 0.15) / 0.3); paste(canvas, r, x0 - int(40 * (1 - f)), y, f); y += r.height + rg
    elif kind == "plans":
        cards = cached(("plans", i), lambda: [build_plan(*p) for p in shot["plans"]])
        hdr = cached(("phdr", i), lambda: text_block(shot["header"], 74 if V else 66, int(W * 0.94)))
        fine = cached(("pfine", i), lambda: text_block(shot["fine"], 38 if V else 32, int(W * 0.9), weight="SemiBold"))
        cues = cue_times(i)
        if V:
            gap = -40; tot = hdr.height + sum(c[0].height for c in cards) + gap * len(cards) + fine.height; y = (H - tot) // 2 - 30
            paste(canvas, hdr, (W - hdr.width) // 2, y, ease(t / 0.35)); y += hdr.height - 10
            for (c, pad), cu in zip(cards, cues):
                f = ease((t - cu + 0.1) / 0.35); paste(canvas, c, (W - c.width) // 2 + int(60 * (1 - f)), y, f); y += c.height + gap
            paste(canvas, fine, (W - fine.width) // 2, y + 20, ease((t - cues[-1] - 0.6) / 0.4))
        else:
            y = 120; paste(canvas, hdr, (W - hdr.width) // 2, y, ease(t / 0.35)); y += hdr.height - 10
            cw = cards[0][0].width; gap = -40; x = (W - (cw * 3 + gap * 2)) // 2
            for (c, pad), cu in zip(cards, cues):
                f = ease((t - cu + 0.1) / 0.35); paste(canvas, c, x, y + int(50 * (1 - f)), f); x += cw + gap
            paste(canvas, fine, (W - fine.width) // 2, y + cards[0][0].height + 10, ease((t - cues[-1] - 0.6) / 0.4))
    elif kind == "reviews":
        cw = 940 if V else 1240; gap = -20 if V else -34
        def fit():
            # Shrink the type until the stack clears the logo and the bottom edge.
            room = H - (480 if V else 170)
            for scale in (1.0, 0.92, 0.85, 0.78, 0.72, 0.66):
                cs = [build_review(tx, nm, cw, int(((54 if k == 0 else 46) if V else (46 if k == 0 else 38)) * scale)) for k, (tx, nm) in enumerate(shot["reviews"])]
                if sum(c[0].height for c in cs) + gap * (len(cs) - 1) <= room: break
            return cs
        cards = cached(("rev", i), fit)
        total_h = sum(c[0].height for c in cards) + gap * (len(cards) - 1); y = (H - total_h) // 2 + (20 if V else 0)
        for (c, pad), ta in zip(cards, [0.0, d * 0.5, d * 0.68]):
            f = ease((t - ta) / 0.35); paste(canvas, c, (W - c.width) // 2, y + int(40 * (1 - f)), f); y += c.height + gap
    elif kind == "cta":
        def build():
            lg = logo_full.resize((380, 380) if V else (300, 300), Image.LANCZOS)
            l1 = text_block(CTA["line1"], 86 if V else 76, int(W * 0.9)); l2 = text_block(CTA["line2"], 86 if V else 76, int(W * 0.9))
            btn, _ = drop_shadow(pill("→  " + CTA["button"], 60 if V else 50, padx=64, pady=30, weight="ExtraBold"), blur=20, alpha=0.5, off=8)
            info = text_block(f"{CTA['url']}   •   {CTA['phone']}", 44 if V else 38, int(W * 0.95), weight="SemiBold"); return lg, l1, l2, btn, info
        lg, l1, l2, btn, info = cached(("cta",), build)
        pulse = 1 if t < 1.2 else 0.88 + 0.12 * (0.5 + 0.5 * math.cos((t - 1.2) * 4))
        if V:
            y = 300; paste(canvas, lg, (W - lg.width) // 2, y, ease(t / 0.4)); y += lg.height + 10
            paste(canvas, l1, (W - l1.width) // 2, y, ease((t - .25) / .35)); y += l1.height - 50
            paste(canvas, l2, (W - l2.width) // 2, y, ease((t - .45) / .35)); y += l2.height + 20
            paste(canvas, btn, (W - btn.width) // 2, y, ease((t - .8) / .35) * pulse); y += btn.height + 10
            paste(canvas, info, (W - info.width) // 2, y, ease((t - 1.1) / .35))
        else:
            paste(canvas, lg, 170, (H - lg.height) // 2 - 40, ease(t / 0.4)); cx = 560 + (W - 560) // 2; y = 230
            paste(canvas, l1, cx - l1.width // 2, y, ease((t - .25) / .35)); y += l1.height - 46
            paste(canvas, l2, cx - l2.width // 2, y, ease((t - .45) / .35)); y += l2.height + 10
            paste(canvas, btn, cx - btn.width // 2, y, ease((t - .8) / .35) * pulse); y += btn.height + 4
            paste(canvas, info, cx - info.width // 2, y, ease((t - 1.1) / .35))

def shot_frame(i, t):
    c = bg_frame(i, t); c.alpha_composite(grad); overlay(c, i, t); draw_common(c, i, t); return c
def frame(T):
    i = max(k for k in range(len(SHOTS)) if starts[k] <= T) if T < starts[-1] + durs[-1] else len(SHOTS) - 1
    t = T - starts[i]; img = shot_frame(i, t)
    if i > 0 and t < XF: img = Image.blend(shot_frame(i - 1, durs[i - 1] + t), img, ease(t / XF))
    d = ImageDraw.Draw(img); d.rectangle([0, 0, W, 9], fill=(255, 255, 255, 70)); d.rectangle([0, 0, int(W * min(1, T / TOTAL)), 9], fill=ORANGE + (255,))
    return img.convert("RGB")

if __name__ == "__main__":
    os.makedirs(OUTDIR, exist_ok=True); lay = "vertical" if V else "wide"
    if "--stills" in sys.argv:
        for k, s in enumerate(SHOTS):
            frame(starts[k] + min(durs[k] * 0.85, durs[k] - 0.1)).save(os.path.join(OUTDIR, f"still-{LAYOUT}-{k:02d}-{s['id']}.jpg"), quality=85)
        sys.exit()
    out = os.path.join(OUTDIR, f"{NAME}-{lay}{'-voice' if VOICE else ''}.mp4")
    cmd = ["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-"]
    cmd += (["-i", VOICE, "-af", "apad"] if VOICE else ["-f", "lavfi", "-i", "anullsrc=r=48000:cl=stereo"])
    cmd += ["-map", "0:v", "-map", "1:a", "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k", "-shortest", "-movflags", "+faststart", out]
    p = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    for k in range(int(TOTAL * FPS)): p.stdin.write(frame(k / FPS).tobytes())
    p.stdin.close(); p.wait(); print("done", out, round(TOTAL, 1), "s")
