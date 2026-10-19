"""Time each shot to an ElevenLabs voiceover; write timings.json next to the script.

python3 sync.py <script.py> <voiceover.mp3>

Paragraph pauses are about as long as sentence pauses, so this picks the set of
pauses that best matches where each paragraph should start given its word
count (dynamic programming), with a small bonus for longer pauses. Shots with
`cues` get their cue times snapped to sentence starts inside the shot.
"""
import importlib.util, json, os, re, subprocess, sys

script_path, mp3 = os.path.abspath(sys.argv[1]), sys.argv[2]
spec = importlib.util.spec_from_file_location("vsl_script", script_path)
M = importlib.util.module_from_spec(spec); spec.loader.exec_module(M)
SHOTS = M.SHOTS

dur = float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", mp3]).decode())
log = subprocess.run(["ffmpeg", "-i", mp3, "-af", "silencedetect=noise=-38dB:d=0.18", "-f", "null", "-"], capture_output=True, text=True).stderr
ss = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", log)]
se = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", log)]
sil = [(s, e) for s, e in zip(ss, se) if s > 0.05 and e < dur - 0.05]

words = [len(s["narration"].split()) for s in SHOTS]; tot = sum(words)
T = [0.05 + sum(words[: k + 1]) / tot * (dur - 0.05) for k in range(len(words) - 1)]
n, m = len(T), len(sil)
if m < n: sys.exit(f"Found {m} pauses, need {n}. Check the blank lines between paragraphs.")
INF = float("inf"); cost = [[INF] * (m + 1) for _ in range(n + 1)]; back = [[0] * (m + 1) for _ in range(n + 1)]
for j in range(m + 1): cost[0][j] = 0
for k in range(1, n + 1):
    for j in range(k, m + 1):
        s, e = sil[j - 1]; here = (e - T[k - 1]) ** 2 - 2.0 * (e - s)
        if k == 1: cost[k][j], back[k][j] = here, 0
        else:
            i = min(range(k - 1, j), key=lambda i: cost[k - 1][i]); cost[k][j], back[k][j] = cost[k - 1][i] + here, i
j = min(range(n, m + 1), key=lambda j: cost[n][j]); chosen = []
for k in range(n, 0, -1): chosen.append(j); j = back[k][j]
chosen.reverse()
bounds = [0.0] + [sil[j - 1][1] - 0.12 for j in chosen] + [dur + 0.6]
timings = {SHOTS[i]["id"]: round(bounds[i + 1] - bounds[i], 3) for i in range(len(SHOTS))}

for si, shot in enumerate(SHOTS):
    if not shot.get("cues"): continue
    r0, r1 = bounds[si], bounds[si + 1]; rw = shot["narration"].split(); rate = len(rw) / max(r1 - r0 - 0.45, 0.5)
    inner = [e for s, e in sil if r0 + 0.2 < e < r1 - 0.3]; cues = []
    for c in shot["cues"]:
        idx = next(k for k, w in enumerate(rw) if w.lower().startswith(c.lower())); exp = r0 + 0.12 + idx / rate
        prev = [e for e in inner if e <= exp + 0.35]
        # snap to a sentence start only when the cue word opens that sentence
        t = prev[-1] if prev and exp - prev[-1] < 0.6 else exp
        cues.append(round(max(0.0, t - r0), 2))
    timings[f"{shot['id']}_cues"] = cues

out = os.path.join(os.path.dirname(script_path), "timings.json"); json.dump(timings, open(out, "w"), indent=1)
for i, s in enumerate(SHOTS):
    d = bounds[i + 1] - bounds[i]; print(f"{s['id']:10s} start {bounds[i]:6.2f}  dur {d:5.2f}  {words[i] / max(d - 0.45, 0.5):.2f} w/s")
print({k: v for k, v in timings.items() if k.endswith('_cues')})
