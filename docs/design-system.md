# Design System & Technische Architektur – Ulrich Pokorny Sanitärtechnik
*V4.0 – Immersive Studio Blueprint*

---

## 1. 3D Scrollytelling Blueprint (Exploded View & PBR Showroom)

### 3D Stage Setup (Three.js WebGL)
- **Container:** `#canvasContainer` innerhalb von `#immersiveExperience` (Höhe: `250vh`, sticky `h-screen`).
- **Canvas:** `#scrollyCanvas` mit transparentem Alpha-Kanal.
- **Kamera:** `PerspectiveCamera` (FOV: 45, Near: 0.1, Far: 1000). Position: `(0, 0, 8.5)`.
- **Lighting:**
  - Ambient Light: Sanftes Hydro-Blau `0x1e293b` (Intensität 1.2)
  - Key Directional Light: Warmweiß `0xffffff` von `(5, 8, 5)` (Intensität 2.0)
  - Rim/Glow Light: Hydro Cyan `0x0ea5e9` von `(-6, -2, -4)` (Intensität 1.5)
  - Specular Highlight: Warm Gold `0xf59e0b` von `(2, -4, 3)` (Intensität 0.8)

### Baugruppen der 3D-Armatur (Explosions-Mechanik)
1. **`partBody` (Armaturenkörper & Schwenkauslauf):**
   - Zylindrische Basis + L-förmiger Auslauf (Extrusion / zusammengesetzte Zylinder).
   - In Ruhestellung: Basis `y: 0`, Auslauf `y: 1.2`.
   - Exploded: Gleitet nach oben/vorne: `y: +1.8, z: +0.8`.
2. **`partCartridge` (Keramik-Kartusche):**
   - Zylinder mit Messing-Spindel und Keramik-Dichtscheiben.
   - Exploded: Fächert sich nach links oben auf: `x: -1.6, y: 0.9, z: 0.5`.
3. **`partHandle` (Bedienhebel & Thermostat-Kappe):**
   - Präziser Zylindergriff mit Skalenring.
   - Exploded: Fächert sich nach rechts oben auf: `x: +1.6, y: 1.4, z: 0.3`.
4. **`partAerator` (Neoperl Strahlregler & Kalkschutz-Kassette):**
   - Kleiner Ring mit fein geriffeltem Filtersieb am Auslaufende.
   - Exploded: Löst sich nach vorne unten vom Auslauf: `x: 1.2, y: 0.4, z: 1.6`.
5. **`partBasePipes` (Montagesockel, Schnellbefestigung & PEX-Druckschläuche):**
   - Gewindebolzen, Unterlegscheibe und zwei geflochtene Edelstahl-Hochdruckschläuche (Rot = Warm, Blau = Kalt).
   - Exploded: Gleitet nach unten weg: `y: -2.2, z: -0.5`.

### Scrollytelling Timeline (GSAP ScrollTrigger scrub: 0.6)
- **0.0 - 0.25 (Initial Overview):**
  - Armatur rotiert sanft um Y-Achse (`y: Math.PI * 0.35`).
  - Text-Schritt 1 aktiv: *„Meisterhafte Präzision im Sanitärhandwerk“*.
- **0.25 - 0.55 (Explosion Core):**
  - `partBody`, `partCartridge`, `partHandle` fahren in Explosionsposition.
  - Kamera zoomt leicht an: `camera.position.z` von 8.5 auf 7.2.
  - Text-Schritt 1 blendet aus, Text-Schritt 2 blendet ein: *„01 // Diamantgeschliffene Keramikkartusche“*.
- **0.55 - 0.80 (Component Inspection):**
  - `partAerator` und `partBasePipes` trennen sich vollständig.
  - Kamera rotiert leicht für schrägen 3D-Blick (`camera.rotation.x = -0.15`, `camera.position.x = 0.5`).
  - Text-Schritt 2 blendet aus, Text-Schritt 3 blendet ein: *„02 // Thermostatischer Verbrühschutz & Kalkfiltration“*.
- **0.80 - 1.00 (Showroom Mode & DIN-Hygiene):**
  - Alle Teile verharren in perfekter Explosions-Schwebung.
  - Text-Schritt 3 blendet aus, Text-Schritt 4 blendet ein: *„03 // 100% Trinkwasser-Hygiene & DIN EN 1717 Montage“*.

### PBR Material Presets
- **Preset 1 (Platin Chrome):** `color: 0xe2e8f0, metalness: 0.95, roughness: 0.22`
- **Preset 2 (Matte Velvet Black):** `color: 0x18181b, metalness: 0.25, roughness: 0.45`
- **Preset 3 (Champagne Brass):** `color: 0xf59e0b, metalness: 0.90, roughness: 0.25`

---

## 2. Mobile-First Responsiveness & Zero-Collision Matrix

| Breakpoint | 3D-Canvas Verhalten | Text-Overlay | Touchpad / Touch | Mobile Bar |
|---|---|---|---|---|
| Desktop (>= 1024px) | Voll interaktiv, Maus-Parallax Tilt | 2-Spaltig oder rechts schwebend | Lenis 0.85s, GSAP Ticker Sync | Versteckt |
| Tablet (768px - 1023px) | Scroll-gesteuert, DPR 1.5 | Zentriert, `max-w-xl` | Natives Touch, keine Blockade | Optional |
| Mobile (< 768px) | `pointer-events: none !important;` Touch-Scroll 100% frei | `text-sm`, kompakte Kacheln | Ungehinderter Daumen-Scroll | `z-index: 99999` fixiert |

---

## 3. Farbtokens & Typografie

```css
:root {
  --bg-primary: #070b14;
  --bg-surface: #0d1424;
  --bg-card: rgba(13, 20, 36, 0.75);
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-active: rgba(14, 165, 233, 0.4);
  --accent-hydro: #0ea5e9;
  --accent-hydro-glow: rgba(14, 165, 233, 0.35);
  --accent-brass: #f59e0b;
  --fg-primary: #f8fafc;
  --fg-muted: #94a3b8;
  --fg-subtle: #64748b;
  --font-display: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```
