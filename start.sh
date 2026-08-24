#!/bin/bash
echo "Starte lokalen Server fuer Ulrich Pokorny Sanitaertechnik auf Port 8089..."
if which xdg-open > /dev/null; then
  xdg-open http://localhost:8089 &
elif which open > /dev/null; then
  open http://localhost:8089 &
fi
python3 -m http.server 8089 || python -m http.server 8089
