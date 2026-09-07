# Quality Review Report – Ulrich Pokorny Sanitärtechnik
*V4.0 – Immersive Studio Edition*

**Datum:** 07. September 2026  
**Auditor:** Antigravity Creative Engineering & Staff Engineer  
**Status:** 🟢 FREIGABE ERTEILT  

---

## 1. 3D Scrollytelling & PBR Showroom
- **Three.js WebGL Engine:**
  - Parametrisches 3D-Modell einer Designer-Sanitärarmatur mit 5 präzisen Baugruppen (Monoblock Chassis, Keramikkartusche, Thermostathebel, Neoperl Aerator, Montagesockel & PEX-Hochdruckschläuche).
  - PBR Shader mit `MeshStandardMaterial` und reaktiven Lichtquellen (Ambient, Key, Cool Rim, Warm Specular).
  - **Interaktiver PBR Finish Switcher:** Umschaltbar zwischen *Titanium Chrom*, *Mattschwarz PVD* und *Champagner Messing* mit butterweichen Farb- und Metallglanz-Übergängen.
  - **Scrollytelling Synchronisation:** Vollständig an den Scrollbalken der 260vh Stage gekoppelt (`scrub: 0.6`). Narrative Steps 1 bis 4 blenden synchron ein und aus.
  - **Performance & Visibility Culling:** Rendert über den `gsap.ticker` nur dann, wenn `#immersiveExperience` im Viewport sichtbar ist (0% GPU-Last außerhalb der 3D-Bühne).
  - **Kein separates RAF:** LagSmoothing auf 0, synchrone Frame-Rate ohne Ruckler.

---

## 2. Mobile First & Zero-Collision Garantie (Gesetz 3)
- **Keine Touch-Falle (No Scroll-Trap):** Auf Mobilgeräten `<= 768px` ist `#canvasContainer` und `#scrollyCanvas` mit `pointer-events: none !important; touch-action: pan-y !important;` geschützt. Der Daumen-Scroll gleitet ungehindert über die 3D-Sektion.
- **DPR-Schutz:** `devicePixelRatio` wird mit `Math.min(window.devicePixelRatio, 1.5)` begrenzt, um Akkulaufzeit zu schonen und stabile 60 FPS auf mobilen GPUs zu sichern.
- **Top Z-Index Schutz:** Die mobile Quick-Action-Leiste (`.mobile-bottom-bar`) liegt auf `z-index: 99999 !important;`. Alle 4 CTAs (Anrufen `0841 71918`, Rechner, Anfrage, Route) sind absolut uneingeschränkt klickbar.

---

## 3. Rechtliche Compliance (§ 5 DDG & DSGVO Art. 13)
- **Impressum Modal:**
  - Anbieterkennzeichnung explizit gemäß **§ 5 DDG** (kein veraltetes TMG).
  - Voller Name: Ulrich Pokorny Heizung - Sanitär, Inhaber Ulrich Pokorny.
  - Ladungsfähige Anschrift: Tulpenstraße 6, 85053 Ingolstadt (Stadtteil Kothau) – kein Postfach!
  - Telefon (`0841 71918`), Mobil (`0172 7122955`), E-Mail (`u.pokorny@altmuehl.net`) direkt klickbar.
  - Handwerkskammer für München und Oberbayern, Berufsbezeichnung, Verleihungsstaat, Handwerksordnung (HwO) mit Gesetzeslink.
  - Verbraucherstreitbeilegung gem. § 36 VSBG + OS-Plattform-Link.
- **Datenschutz Modal:**
  - Art. 13 DSGVO konform: Hoster Vercel Inc. (San Francisco, USA) benannt, Server-Logfiles Zweck & 7-14 Tage Frist.
  - Kontaktformular Formspree Inc. (Art. 6 Abs. 1 lit. b).
  - Two-Click Google Maps mit vorheriger Einwilligung.
  - Betroffenenrechte (Art. 15–21 DSGVO) und Beschwerderecht beim Bayerischen Landesamt für Datenschutzaufsicht (BayLDA).
- **TDDDG Consent Banner:**
  - Gleichwertige Buttons („Alle akzeptieren“ vs. „Nur notwendige“).
  - Re-Open Link `Cookie-Einstellungen` im Footer.

---

## 4. Fazit
Die Website erfüllt alle Gesetze des Manifests von `website-generator-studio` und liefert ein kinoreifes, technisch einwandfreies Erlebnis für Ulrich Pokorny Sanitärtechnik in Ingolstadt.
