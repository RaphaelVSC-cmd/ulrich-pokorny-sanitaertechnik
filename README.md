# Ulrich Pokorny Sanitärtechnik – Ingolstadt
*High-End Handwerker-Website V3.1 (MotionSites Edition)*

Eine hochmoderne, conversion-optimierte One-Page-Website für den Fachbetrieb **Ulrich Pokorny Sanitärtechnik** in Ingolstadt-Kothau.

---

## 🌟 Highlights & Features
- **Design-Architektur:** Soft Structuralism & Ethereal Glass mit Double-Bezel Kacheln und fluiden Aurora-Glows.
- **Fluid Island Navbar (§ 10):** Schwebende Pill-Navbar mit Live-Status-Indikator, Dark/Light Mode Switcher, magnetischem Direct-Call Button und morphing Hamburger (Single X).
- **Alleinstellungsmerkmal 1:** Scroll-Driven Dual-Direction Marquee (§ 16) für Sanitärfachbereiche.
- **Alleinstellungsmerkmal 2:** Sticky Card-Stacking (§ 15) für Kernkompetenzen (Bäder, Rohre, Reparatur).
- **Alleinstellungsmerkmal 3:** Character-by-Character Reveal (§ 17) für das handwerkliche Leitbild.
- **Interaktiver Sanitär- & Badrechner (§ 6):** Dynamischer Preis-Richtwertrechner mit Raumgrößen-Slider.
- **Multi-Step Funnel Formular (§ 5):** 3-stufiger Anfrage-Assistent mit Fortschrittsbalken, Formspree-Anbindung und Spam-Schutz.
- **DSGVO & Rechtssicherheit:** Integriertes Consent-Banner mit Google Maps `data-src` Entblockung, Impressum (§ 5 TMG) und Datenschutzerklärung (DSGVO Art. 13).
- **WhatsApp Widget (§ 4):** Schwebender Button mit Puls-Animation (`+49 841 71918`).
- **Barrierefreiheit & Performance:** WCAG 2.1 AA konform, Skip-Link, semantisches HTML5, Tastatursteuerung für FAQ, preconnects und LCP High-Priority.

---

## 🚀 Lokale Entwicklung & Vorschau
Doppelklick auf `start.bat` (unter Windows) oder im Terminal:

```bash
# Python
python -m http.server 8089

# oder Node.js
npx serve .
```

Anschließend im Browser öffnen: `http://localhost:8089/`

---

## 📁 Projektstruktur
```
├── assets/
│   └── images/              # Optimierte Bild-Assets (Hero, Bad, Rohre, Armaturen)
├── docs/
│   ├── prd.md               # Product Requirements Document
│   ├── design-system.md     # Farbpalette, Typografie & Motion-Blueprint
│   ├── review.md            # Code-Audit & Qualitätsbericht
│   ├── retro.md             # Lessons Learned
│   └── ANLEITUNG.md         # Übergabeanleitung & Setup
├── .agents/
│   └── QA-RESULTS.json      # Automatisierte QA-Testergebnisse
├── index.html               # Semantische HTML5-Struktur & Schema.org JSON-LD
├── style.css                # CSS Custom Properties, Double-Bezel, Keyframes
├── app.js                   # Lenis, GSAP ScrollTrigger, SplitType & Rechner
├── COMMIT_MESSAGE.txt       # Konventionelle Commit-Nachricht
├── start.bat                # Windows Schnellstarter
├── start.sh                 # Unix Schnellstarter
└── README.md
```
