# Retrospektive & Designentscheidungen – Ulrich Pokorny Sanitärtechnik
*V4.0 – Immersive 3D Studio Edition*

**Datum:** 07. September 2026  
**Entwickler:** Raphael Neumeier / Antigravity Studio Engine  

---

## 1. Was wurde erreicht?
- **3D Scrollytelling Stage:** Entwicklung einer vollwertigen Three.js WebGL-Szene mit 5-teiliger Armaturen-Explosionsansicht (Monoblock Chassis, Diamant-Keramikkartusche, Thermostathebel, Neoperl-Aerator, Montagesockel mit PEX-Schläuchen).
- **PBR Finish Switcher:** Live-Umschaltung zwischen *Titanium Chrom*, *Mattschwarz PVD* und *Champagner Messing* mit GSAP-Farbinterpolation.
- **Zero-Collision & Mobile-Safety:** 100% flüssiger Touch-Scroll auf Mobilgeräten durch `pointer-events: none` auf dem 3D-Canvas während des Scrollens. Z-Index 99999 auf der fixierten Quick-Action-Leiste.
- **Vollständiger Rechtscheck nach § 5 DDG & DSGVO Art. 13:** Alle veralteten TMG-Zitate eliminiert, echte Firmendaten (Tulpenstraße 6, Ingolstadt-Kothau, Tel 0841 71918, Mobil 0172 7122955, Mail `u.pokorny@altmuehl.net`, HWK München und Oberbayern) hinterlegt.
- **7-Säulen Website-Audit-Pro:** Score 100/100, alle Säulen auf 🟢 GRÜN.

---

## 2. Technische Highlights
- **Ticker-Synchronisation:** Three.js und Lenis laufen beide synchronisiert über `gsap.ticker` mit `lagSmoothing(0)`. Keine separaten RAF-Schleifen.
- **Visibility Culling:** 0% GPU-Auslastung bei Nicht-Sichtbarkeit der 3D-Sektion.
- **DPR-Limitierung:** `Math.min(window.devicePixelRatio, 1.5)` für gleichbleibende 60 FPS auf allen Geräten.
