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
# Segment the voiceover so every paragraph is read at about the same pace.
# Each boundary is the end of a pause; a paragraph's rate is its word count over
# its speaking time. Minimise the spread of rates (dynamic programming over
# paragraph -> pause), with a small reward for cutting at longer pauses.
speech_end = dur
for s, e in zip(ss, se + [dur]):
    if e >= dur - 0.05 and s > 0.05: speech_end = s
R = tot / max(speech_end - 0.05 - 0.4 * (len(SHOTS) - 1), 1.0)
cand = [(0.0, 0.0)] + sil                     # candidate starts: 0, or the end of any pause
ends = [e for _, e in cand]; m = len(cand)
def seg_cost(k, a, b):
    start = ends[a]
    stop = (sil[b - 1][0] if b < m and b > 0 else speech_end) if b != -1 else speech_end
    if b != -1: stop = cand[b][0] if b > 0 else 0.0
    d = stop - start
    if d <= 0.3: return float("inf")
    r = words[k] / d
    return ((r - R) / R) ** 2 * 10
n = len(SHOTS); INF = float("inf")
cost = [[INF] * m for _ in range(n)]; back = [[0] * m for _ in range(n)]
cost[0][0] = 0.0
for k in range(1, n):
    for b in range(1, m):
        best, arg = INF, 0
        for a in range(0, b):
            if cost[k - 1][a] == INF: continue
            c = cost[k - 1][a] + seg_cost(k - 1, a, b) - 0.8 * (cand[b][1] - cand[b][0])
            if c < best: best, arg = c, a
        cost[k][b], back[k][b] = best, arg
final = min(range(1, m), key=lambda b: cost[n - 1][b] + seg_cost(n - 1, b, -1))
chosen = [final]
for k in range(n - 1, 1, -1): chosen.append(back[k][chosen[-1]])
chosen.reverse()
bounds = [0.0] + [ends[j] - 0.12 for j in chosen] + [dur + 0.6]
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
