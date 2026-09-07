# Product Requirements Document (PRD) – Ulrich Pokorny Sanitärtechnik
*V4.0 – Immersive 3D Studio Edition (website-generator-studio)*

---

## 1. Executive Summary & Unternehmens-DNA
- **Unternehmen:** Ulrich Pokorny Heizung - Sanitär
- **Inhaber:** Ulrich Pokorny (Meisterbetrieb des Handwerks)
- **Standort:** Tulpenstraße 6, 85053 Ingolstadt (Stadtteil Kothau)
- **Telefon:** 0841 71918 (Festnetz) | 0172 7122955 (Mobil)
- **E-Mail:** u.pokorny@altmuehl.net
- **Google Maps Rating:** 5,0 ⭐ (100% Top-Bewertungen, „Bester Mann!“)
- **Positionierung:** High-End Sanitärhandwerk, meisterhafte Bäder, präzise Wasserinstallation und zuverlässiger Reparaturdienst in Ingolstadt und Umgebung.
- **Web-Status:** Bislang keine eigene Website vorhanden. Die neue Studio-Website setzt einen uneinholbaren regionalen Maßstab auf Awwwards- und Apple-Niveau.

---

## 2. Das Immersive 3D Scrollytelling-Konzept

### 3D Mechanismus: Exploded View & PBR Material Showroom
- **Zentrales 3D-Objekt:** Eine hochpräzise Designer-Sanitärarmatur (Solid Monoblock Brass Body) mit komplettem Innenleben.
- **Scroll-Phasen (250vh Sticky Stage):**
  - **Phase 1 (Scroll 0% - 25%):** Die geschlossene Armatur rotiert im 3D-Raum mit realistischen Lichtreflexen und PBR-Materialität.
  - **Phase 2 (Scroll 25% - 50%):** *Exploded View Initiation:* Der äußere Gehäusemantel gleitet nach oben weg; die Präzisions-Keramik-Kartusche mit Diamantschliff-Dichtungen wird sichtbar. Text-Overlay 1 blendet ein: *„01 // Präzisions-Keramikkern – Tropffreie Langlebigkeit“*.
  - **Phase 3 (Scroll 50% - 75%):** Thermostat-Mischereinheit und Neoperl-Kalkschutz-Strahlregler fächern sich horizontal auseinander. Text-Overlay 2 blendet ein: *„02 // Thermostatische Präzision & Verbrühschutz“*.
  - **Phase 4 (Scroll 75% - 100%):** Anschlusstechnik (PEX-Hochdruckschläuche & Befestigungssockel) fächert sich auf. Text-Overlay 3 blendet ein: *„03 // 100% Trinkwasser-Hygiene nach DIN EN 1717“*.
- **Interaktiver PBR Material-Showroom:**
  - Nutzer können über 3 interaktive Material-Chips die PBR-Oberflächenbeschaffenheit live umschalten:
    1. *Gebürstetes Platin / Edelstahl* (Roughness: 0.25, Metalness: 0.95)
    2. *Mattschwarz PVD* (Roughness: 0.45, Metalness: 0.15)
    3. *Champagner Messing* (Roughness: 0.2, Metalness: 0.9, Farbstich Gold)

---

## 3. Navigations-Architektur: Split Status Navigation
- **Header-Typ:** Einzeiliger Unified Header mit integrierter Split Status Navigation (kein doppelter Sticky-Header!).
- **Links:** Logo-Wortmarke „ULRICH POKORNY // SANITÄRTECHNIK INGOLSTADT“.
- **Mitte:** Elegante Nav-Links (3D-Erlebnis, Leistungen, Rechner, Rezensionen, Kontakt).
- **Rechts:** Live-Status-Badge (🟢 „Jetzt geöffnet in Kothau“) + Direktwahl-Button `0841 71918`.

---

## 4. Farbklima & Typografie-Persona (Anti-Einheitsbrei)
- **Farbklima:** *Clean Luxury Hydro PBR*
  - Background Dark: `#070b14` (Deep Hydro Slate)
  - Card & Surface: `#0d1424` mit sanftem Glas-Glanz `rgba(255,255,255,0.06)`
  - Primary Accent: `#0ea5e9` (Hydraulisches Eisblau)
  - Secondary Accent: `#f59e0b` (Warmes Messing / Gold)
  - Text Primary: `#f8fafc` (100% Kontrast)
  - Text Secondary: `#94a3b8` (WCAG 2.1 AA konform > 4.5:1)
- **Typografie:**
  - Headlines: **Outfit** & **Plus Jakarta Sans** (geometrisch, präzise, meisterhaft)
  - Body: **Inter** (optimale Lesbarkeit bei allen Schriftgrößen)

---

## 5. Sektions-Architektur (Reihenfolge nach der stärksten Waffe)
1. **Unified Navigation:** Split Status Header
2. **Hero Stage:** Social Proof (5.0 ⭐ „Bester Mann!“), Kinetic Typography, Dual-CTAs (Anrufen & 3D Tour)
3. **3D Scrollytelling Stage:** Exploded View & PBR Material Showroom (Three.js WebGL)
4. **Kernkompetenzen & Meisterleistungen:** Badarchitektur, Rohrnetz-Sanierung, Notdienst & Reparatur
5. **Interaktiver Sanitär- & Badsanierungs-Kostenrechner:** m²-Schieberegler + Ausstattungsstufe mit Sofort-Richtwert
6. **Social Proof & Kundenstimmen:** Echte Google-Rezensionen im Wortlaut
7. **Multi-Step Funnel Kontaktformular:** 3-stufiger Anfrage-Assistent mit Formspree & Spam-Schutz
8. **Lokale Verankerung & Anfahrt:** Ingolstadt-Kothau mit Two-Click Google Maps (data-src)
9. **FAQ & Meister-Ratgeber:** Akkordeon mit vollständiger Tastaturnavigation
10. **Rechtskonformer Footer:** § 5 DDG Impressum, DSGVO Art. 13 Datenschutz-Modals, Cookie-Einstellungen Link
11. **DSGVO Consent Banner, Floating WhatsApp Widget & Mobile Sticky Bar (Z-Index 99999)**

---

## 6. Eiserne Mobile & Zero-Collision Vorgaben
- **Canvas Pointer Events:** Auf Bildschirmen `<= 768px` ist `pointer-events: none` auf dem 3D-Canvas aktiv; Touch-Scroll läuft ungehindert ohne Trap.
- **DPR-Begrenzung:** `devicePixelRatio = Math.min(window.devicePixelRatio, 1.5)` schont Akku und garantiert 60 FPS.
- **Mobile Bottom Bar:** Fixierte Leiste am unteren Bildschirmrand (`z-index: 99999`) mit direktem Anruf- & WhatsApp-Zugriff.
