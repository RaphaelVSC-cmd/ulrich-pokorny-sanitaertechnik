# Design-System & Technische Architektur – Ulrich Pokorny Sanitärtechnik
*V3.1 – MotionSites & Modern-UI-Pro-Design Edition*

---

## 1. Farbpalette & Farbpsychologie

Für den Fachbetrieb **Ulrich Pokorny Sanitärtechnik** verwenden wir eine von reinem Quellwasser, moderner Badkeramik und präziser Metalltechnik inspirierte Farbwelt (Aqua / Ice Blue / Deep Slate).

### CSS Custom Properties & Design Tokens

```css
:root {
  /* ─── Light Mode (Sauber, Frisch, Hochwertig) ─── */
  --bg: #f8fafc;
  --bg-secondary: #f1f5f9;
  --fg: #0f172a;
  --fg-muted: #475569;
  --card-bg: rgba(255, 255, 255, 0.88);
  --card-bg-solid: #ffffff;
  --card-shell: rgba(15, 23, 42, 0.05);
  --border: rgba(15, 23, 42, 0.1);
  --border-focus: #0284c7;
  
  /* Akzentfarben Sanitär */
  --accent-cyan: #0284c7;       /* Primär: Klares Sanitär-Blau */
  --accent-aqua: #06b6d4;       /* Sekundär: Aquamarin */
  --accent-glow: rgba(6, 182, 212, 0.25);
  
  /* Aurora Gradienten (Light) */
  --aurora-1: rgba(14, 165, 233, 0.15);
  --aurora-2: rgba(6, 182, 212, 0.12);
  --aurora-base: #f8fafc;
}

[data-theme="dark"] {
  /* ─── Dark Mode (Meisterlich, Deep Titanium, Ethereal Glass) ─── */
  --bg: #07090e;
  --bg-secondary: #0d111a;
  --fg: #f1f5f9;
  --fg-muted: #94a3b8;
  --card-bg: rgba(13, 17, 26, 0.85);
  --card-bg-solid: #0d111a;
  --card-shell: rgba(255, 255, 255, 0.04);
  --border: rgba(255, 255, 255, 0.09);
  --border-focus: #38bdf8;
  
  /* Akzentfarben Sanitär */
  --accent-cyan: #38bdf8;       /* Eisblau */
  --accent-aqua: #22d3ee;       /* Cyan Leuchten */
  --accent-glow: rgba(34, 211, 238, 0.2);
  
  /* Aurora Gradienten (Dark) */
  --aurora-1: rgba(14, 165, 233, 0.22);
  --aurora-2: rgba(6, 182, 212, 0.18);
  --aurora-base: #07090e;
}
```

### WCAG Kontrast-Validierung (4.5:1+)
- **Dark Mode:** Text `#f1f5f9` auf `#07090e` (Kontrast 16.5:1 — AAA).
- **Light Mode:** Text `#0f172a` auf `#f8fafc` (Kontrast 17.2:1 — AAA).
- **Muted Text:** `#94a3b8` auf `#07090e` (Kontrast 6.8:1 — AA) / `#475569` auf `#f8fafc` (Kontrast 7.1:1 — AA).
- **Gradient-Text:** Auf Dark: `linear-gradient(135deg, #38bdf8, #22d3ee, #e0f2fe)`. Auf Light: `linear-gradient(135deg, #0284c7, #0891b2, #0369a1)`.

---

## 2. Typografie-System

- **Display-Schrift (H1, H2, große Zahlen):** `Playfair Display`, serif (Bold 700 / Black 900)
- **Body- & UI-Schrift:** `Plus Jakarta Sans`, sans-serif (Light 300, Regular 400, Medium 500, SemiBold 600)

```css
.hero-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(2.5rem, 6.5vw, 5.5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.025em;
}

.section-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.85rem, 4vw, 3.25rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.9rem;
  border-radius: 9999px;
  background: var(--card-shell);
  border: 1px solid var(--border);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-cyan);
}
```

---

## 3. Motion-Blueprint & Alleinstellungsmerkmale

### A. Lenis Smooth Scroll (§ 2)
- `duration: 1.2`, `easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`
- `smoothTouch: false` (PFLICHT für natives Touch auf Handys/Tablets)
- `touchMultiplier: 2`
- Passive Listener auf allen Scroll/Wheel-Events

### B. Gestaffelte Ladeanimationen (§ 21)
- Header Pill: `anim-fade-down stagger-1`
- Eyebrow Badge: `anim-fade-up stagger-2`
- Kinetic H1: `SplitType` Char-Reveal mit GSAP `power3.out`
- Hero Subtitle & CTA: `anim-fade-up stagger-4/5`

### C. Alleinstellungsmerkmal 1: Scroll-Driven Horizontal Dual Marquee (§ 16)
- Zwei gegenläufige Zeilen mit Kacheln für Sanitär-Kompetenzen (Badsanierung, Rohrservice, Leckageortung, Barrierefreie Bäder, Armaturen, Wartung).
- Gesteuert per `window.addEventListener('scroll', updateMarquee, { passive: true })`.

### D. Alleinstellungsmerkmal 2: Sticky Card-Stacking (§ 15)
- 3 überlappende, sticky gestapelte Karten:
  - Karte 1: **Moderne Badsanierung & Wellness-Oasen**
  - Karte 2: **Wasser-, Abwasser- & Leitungstechnik**
  - Karte 3: **Schneller Reparatur- & Notdienst in Ingolstadt**
- Skaliert sanft beim Vorbeiscrollen (`scale: 1 - index * 0.03`).

### E. Alleinstellungsmerkmal 3: Character-by-Character Text Reveal (§ 17)
- Für das handwerkliche Leitbild von Meister Ulrich Pokorny: Buchstabe für Buchstabe füllt sich der Text mit 100% Kontrast beim Einscrollen.

### F. Business-Feature: Interaktiver Sanitär- & Badrechner (§ 6)
- Schieberegler für Raumgröße (4 m² bis 30 m²)
- Leistungsart-Auswahl (z.B. „Teilsanierung / Armaturentausch“, „Komplettbad-Modernisierung“, „Premium Wellnessbad“)
- Richtwert-Ausgabe in Euro mit animiertem Zähler und verbindlichem Disclaimer.

---

## 4. Header- & Navigations-Architektur (Fluid Island Navbar)

- **Genau EIN Header** auf der gesamten Website (`#mainNav`).
- **Floating Island Pill**: `position: fixed; top: 1.25rem; left: 50%; transform: translateX(-50%);`
- **Inhalte der Navbar:**
  1. Logo / Name: `Ulrich Pokorny`
  2. Status-Pill: `☎ Fachbetrieb Ingolstadt` (mit grünem Live-Puls-Punkt)
  3. Desktop Links: `Leistungen`, `Rechner`, `Vorteile`, `Über uns`, `Kontakt`
  4. Theme-Toggle: `☀️ / 🌙`
  5. Primärer Direct-Call CTA: `0841 71918`
  6. Mobile Hamburger Button (morpht zu X via CSS `transform`)

---

## 5. Mobile & Barrierefreiheit (WCAG 2.1 AA)

- **Hamburger:** Genau **EIN X-Mechanismus** (der Hamburger Button verwandelt sich nahtlos in ein X; kein doppelter Schließen-Button im Menü).
- **Touch-Bedienung:** Min. 44×44px Klickflächen.
- **Skip-to-Content Link:** Allererstes Element nach `<body>`.
- **Landmarken:** `<header role="banner">`, `<main id="main-content">`, `<footer role="contentinfo">`.
- **Keyboard-Fokus:** `:focus-visible` mit 2px Outline.
- **ARIA:** `aria-expanded`, `aria-controls` auf FAQ und Menü, `role="status"` auf Formularen.

---

## 6. Business Pro Features Matrix

| Feature | Typ | Umsetzung |
|---|---|---|
| **DSGVO Consent Banner** | Kat. A | Vor `</body>`, speichert in `localStorage`, blockiert Google Maps `data-src` |
| **WhatsApp Floating Widget** | Kat. A | `https://wa.me/4984171918?...` mit Puls-Animation |
| **Multi-Step Formular** | Kat. A | 3 Schritte: Anliegen → Details → Kontaktdaten + Datenschutz-Opt-in + Honeypot + Formspree |
| **Sanitär-Rechner** | Kat. A | Interaktiver Schieberegler + dynamischer Schätzpreis |
| **Schema.org JSON-LD** | Kat. A | `@graph` mit `LocalBusiness` (Plumber), `OpeningHoursSpecification`, `FAQPage`, `AggregateRating` |
| **Impressum & Datenschutz** | Kat. A | Vollständige Sektionen im Footer mit echten Kontaktdaten (§ 5 TMG & DSGVO Art. 13) |
| **Terminbuchung UI-Dummy** | Kat. B | Bento-Card mit Setup-Hinweisen für Cal.com/Calendly |
| **Core Web Vitals** | Kat. A | Hero mit `fetchpriority="high"`, alle anderen Bilder mit `loading="lazy" decoding="async"`, feste `width`/`height` |

---

## 7. Pre-Delivery Checkliste

- [x] Favicon vorhanden (`🔧` Sanitär-SVG)
- [x] Genau EIN Header (kein Doppelheader)
- [x] Hamburger: genau EIN X-Mechanismus (Morphing)
- [x] Dark/Light Toggle aktiv
- [x] Touchpad-Scroll: passive Listener, smoothTouch: false, kein blockierendes preventDefault
- [x] Farb-Kontrast geprüft (WCAG AA)
- [x] Mindestens 2 Alleinstellungsmerkmale implementiert (Dual Marquee + Card Stack + Char Reveal)
- [x] Lenis + GSAP + SplitType CDN eingebunden
- [x] Kinetic Typography auf H1 & H2
- [x] Staggered Load Animations
- [x] Asymmetrisches Bento-Grid mit Double-Bezel
- [x] Aurora + Noise Texture
- [x] Skip-to-Content Link
- [x] Alle Bilder mit alt, width, height & Beispielbild-Badge
- [x] DSGVO Consent Banner mit Google Maps `data-src`
- [x] WhatsApp Widget mit Nummer `4984171918`
- [x] Multi-Step Kontaktformular (3 Schritte)
- [x] Sanitär-Kostenrechner
- [x] Erweitertes Schema.org JSON-LD
- [x] Impressum & Datenschutz mit echten Daten
- [x] 0 halluzinierte Daten
