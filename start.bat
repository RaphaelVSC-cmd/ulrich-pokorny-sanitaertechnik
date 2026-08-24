@echo off
echo Starte lokalen Server fuer Ulrich Pokorny Sanitaertechnik auf Port 8089...
start http://localhost:8089
python -m http.server 8089
pause
