#!/bin/bash
# Mix music under a voiced render and make the web copies + posters.
# usage: finish.sh <video-dir> <name> <music.mp3> <poster-seconds> [music_volume=0.15]
#   reads  <video-dir>/out/<name>-{vertical,wide}-voice.mp4
#   writes <video-dir>/out/<name>-{vertical,wide}-final.mp4 and
#          public/videos/<web>-{vertical,wide}.mp4 + -poster.jpg, where <web> = <name> minus "-vsl"
set -e
DIR="$(cd "$1" && pwd)"; NAME="$2"; MUSIC="$(cd "$(dirname "$3")" && pwd)/$(basename "$3")"; POSTER="$4"; VOL="${5:-0.15}"
REPO="$(cd "$(dirname "$0")/../.." && pwd)"; WEB="${NAME%-vsl}"
mkdir -p "$REPO/public/videos"
for L in vertical wide; do
  IN="$DIR/out/$NAME-$L-voice.mp4"; OUT="$DIR/out/$NAME-$L-final.mp4"
  D=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$IN"); FO=$(python3 -c "print(round($D-2.5,2))")
  ffmpeg -loglevel error -y -i "$IN" -stream_loop -1 -i "$MUSIC" -filter_complex \
    "[1:a]atrim=0:$D,asetpts=N/SR/TB,afade=t=in:d=1.2,afade=t=out:st=$FO:d=2.5,volume=$VOL[m];[0:a]asplit=2[v1][v2];[m][v2]sidechaincompress=threshold=0.025:ratio=6:attack=25:release=450[md];[v1][md]amix=inputs=2:duration=first:normalize=0,alimiter=limit=0.93[a]" \
    -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -movflags +faststart "$OUT"
  if [ $L = vertical ]; then S=720:1280; else S=1280:720; fi
  ffmpeg -loglevel error -y -i "$OUT" -vf scale=$S -c:v libx264 -preset slow -crf 27 -profile:v high -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart "$REPO/public/videos/$WEB-$L.mp4"
  ffmpeg -loglevel error -y -ss "$POSTER" -i "$OUT" -frames:v 1 -vf scale=$S -q:v 4 "$REPO/public/videos/$WEB-$L-poster.jpg"
  echo "$OUT"; ls -la "$REPO/public/videos/$WEB-$L.mp4"
done
