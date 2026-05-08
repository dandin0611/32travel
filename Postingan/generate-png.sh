#!/bin/bash
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new \
  --screenshot="$SCRIPT_DIR/instagram-feed.png" \
  --window-size=1080,1400 \
  --hide-scrollbars \
  --no-sandbox \
  --disable-gpu \
  "file://$SCRIPT_DIR/instagram-feed-capture.html" 2>/dev/null

sips -c 1350 1080 "$SCRIPT_DIR/instagram-feed.png" > /dev/null 2>&1
echo "✓ instagram-feed.png siap (1080×1350) di: $SCRIPT_DIR"
