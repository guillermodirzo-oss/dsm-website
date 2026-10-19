"""Time each shot to the ElevenLabs voiceover and write timings.json.

python3 sync.py voiceover.mp3

The voiceover's pauses between paragraphs are about as long as the pauses
between sentences, so "take the longest gaps" does not work. Instead this picks
the set of pauses that best matches where each paragraph should start given
its word count (dynamic programming), with a small bonus for longer pauses.
It also times the risk checklist items to the sentence starts inside that shot.
"""
import json, os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from script import SHOTS, RISK_CUES

mp3 = sys.argv[1]
dur = float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", mp3]).decode())
log = subprocess.run(["ffmpeg", "-i", mp3, "-af", "silencedetect=noise=-38dB:d=0.18", "-f", "null", "-"], capture_output=True, text=True).stderr
ss = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", log)]
se = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", log)]
sil = [(s, e) for s, e in zip(ss, se) if s > 0.05 and e < dur - 0.05]

words = [len(s["narration"].split()) for s in SHOTS]
tot = sum(words)
T = [0.05 + sum(words[: k + 1]) / tot * (dur - 0.05) for k in range(len(words) - 1)]
n, m = len(T), len(sil)
INF = float("inf")
cost = [[INF] * (m + 1) for _ in range(n + 1)]
back = [[0] * (m + 1) for _ in range(n + 1)]
for j in range(m + 1):
    cost[0][j] = 0
for k in range(1, n + 1):
    for j in range(k, m + 1):
        s, e = sil[j - 1]
        here = (e - T[k - 1]) ** 2 - 2.0 * (e - s)
        if k == 1:
            cost[k][j], back[k][j] = here, 0
        else:
            i = min(range(k - 1, j), key=lambda i: cost[k - 1][i])
            cost[k][j], back[k][j] = cost[k - 1][i] + here, i
j = min(range(n, m + 1), key=lambda j: cost[n][j])
chosen = []
for k in range(n, 0, -1):
    chosen.append(j)
    j = back[k][j]
chosen.reverse()

bounds = [0.0] + [sil[j - 1][1] - 0.12 for j in chosen] + [dur + 0.6]
timings = {SHOTS[i]["id"]: round(bounds[i + 1] - bounds[i], 3) for i in range(len(SHOTS))}

ri = [s["id"] for s in SHOTS].index("risk")
r0, r1 = bounds[ri], bounds[ri + 1]
rw = SHOTS[ri]["narration"].split()
rate = len(rw) / (r1 - r0 - 0.45)
inner = [e for s, e in sil if r0 + 0.2 < e < r1 - 0.3]
cues = []
for c in RISK_CUES:
    idx = next(k for k, w in enumerate(rw) if w.startswith(c))
    exp = r0 + 0.12 + idx / rate
    prev = [e for e in inner if e <= exp + 0.35]
    cues.append(round((prev[-1] if prev and exp - prev[-1] < 2.2 else exp) - r0, 2))
timings["risk_cues"] = cues

json.dump(timings, open(os.path.join(HERE, "timings.json"), "w"), indent=1)
for i, s in enumerate(SHOTS):
    d = bounds[i + 1] - bounds[i]
    print(f"{s['id']:10s} start {bounds[i]:6.2f}  dur {d:5.2f}  {words[i] / max(d - 0.45, 0.5):.2f} words/s")
print("risk cues:", cues)
