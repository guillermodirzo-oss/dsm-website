#!/bin/bash
# Mix background music under the voiced VSL without re-rendering the picture.
# usage: mix.sh music.mp3 [music_volume=0.32]
set -e
cd "$(dirname "$0")/out"
MUSIC="$1"; VOL="${2:-0.32}"
for L in vertical wide; do
  IN="dsm-homepage-vsl-$L-voice.mp4"; OUT="dsm-homepage-vsl-$L-final.mp4"
  D=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$IN")
  FO=$(python3 -c "print(round($D-2.5,2))")
  ffmpeg -loglevel error -y -i "$IN" -stream_loop -1 -i "$MUSIC" -filter_complex \
    "[1:a]atrim=0:$D,asetpts=N/SR/TB,afade=t=in:d=1.2,afade=t=out:st=$FO:d=2.5,volume=$VOL[m];\
     [0:a]asplit=2[v1][v2];\
     [m][v2]sidechaincompress=threshold=0.025:ratio=6:attack=25:release=450[md];\
     [v1][md]amix=inputs=2:duration=first:normalize=0,alimiter=limit=0.93[a]" \
    -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -movflags +faststart "$OUT"
  echo "$OUT"
done
