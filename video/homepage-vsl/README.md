# Homepage intro video (VSL)

Source for the 59-second video in the section under the homepage hero
(`components/HomeVideo.tsx`, files in `public/videos/`). Made October 2026
from real job photos, the owners' photo, verbatim Google reviews, an
ElevenLabs Music track. Voiced since Oct 27 2026 with an ElevenLabs clone of
the owner's voice; the script never says the owners' names (owner decision).
Shot timings were set from a word alignment (pocketsphinx) because sync.py
misplaced the guide boundary on this voiceover; check timings.json against
the pauses before re-rendering.

Not part of the Next.js build. Nothing here is imported by the site.

## When to re-render

The video states **46 five-star reviews** and **2,000+ cleanings since 2020**
(`RATING` in `script.py`). Re-render when those change enough to matter.
Changing on-screen text only does not need a new voiceover.

## Files

- `script.py`: narration, captions, photos and overlay content for every shot.
  Edit words here. Words in `*stars*` show in DSM orange.
- `voiceover-script.txt`: the exact text pasted into ElevenLabs (one paragraph
  per shot, blank lines between). If the narration changes, regenerate the
  voiceover and run `sync.py` again.
- `voiceover.mp3`, `music.mp3`, `owners.jpg`: sources.
- `timings.json`: shot lengths measured from the voiceover.

## Steps (Python 3 with Pillow, ffmpeg)

```
python3 sync.py voiceover.mp3                     # writes timings.json
python3 render.py v timings.json voiceover.mp3    # out/dsm-homepage-vsl-vertical-voice.mp4
python3 render.py h timings.json voiceover.mp3    # out/dsm-homepage-vsl-wide-voice.mp4
./mix.sh "$PWD/music.mp3" 0.15                    # out/*-final.mp4, music ducked under the voice
python3 render.py v - --stills                    # quick still per shot, for checking layout
```

Web copies (what `public/videos/` holds): 720x1280 and 1280x720, H.264 CRF 27,
AAC 96k, `+faststart`. Posters are the frame at 8.2s ("Meet Guillermo & Rocío").
Update `uploadDate` and `duration` in the homepage `videoSchema` after a re-render.
