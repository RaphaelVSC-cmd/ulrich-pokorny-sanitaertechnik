# Entwickler- & Kundenanleitung – Ulrich Pokorny Sanitärtechnik
*V4.0 – Immersive 3D Studio Edition*

Diese Dokumentation erklärt alle Schritte zur Personalisierung, Einrichtung externer Dienste und produktiven Veröffentlichung der Website.

---

## 1. 3D Scrollytelling & PBR-Showroom Anpassung
- **Three.js Baugruppen:** Das 3D-Modell in `app.js` (`initThreeScrollytelling`) besteht aus 5 modularen Baugruppen:
  1. `partBody`: Armaturenkörper & L-Auslauf
  2. `partCartridge`: Präzisions-Keramikkartusche
  3. `partHandle`: Einhebel-Thermostatmischer
  4. `partAerator`: Neoperl Strahlregler & Kalkfilter
  5. `partBasePipes`: Montagesockel & PEX-Hochdruckschläuche
- **PBR Finishes:** Nutzer können im Frontend live zwischen *Titanium Chrom*, *Mattschwarz PVD* und *Champagner Messing* wählen. Eigene Farben oder Texturen können in `pbrPresets` in `app.js` definiert werden.
- **Eigene CAD / GLTF Modelle:** Falls ein 3D-Scan oder CAD-Modell des Kunden vorliegt, kann dieses über den `THREE.GLTFLoader` als `.glb`-Datei direkt in die Szene geladen werden.

---

## 2. Formspree Kontaktformular aktivieren
1. Kostenlosen Account auf [formspree.io](https://formspree.io) anlegen.
2. Neues Formular anlegen (Name: `Ulrich Pokorny Anfragen`).
3. Die generierte Formspree-ID kopieren (z.B. `xpzgkyle`).
4. In `index.html` den Form-Action-Pfad aktualisieren:
   ```html
   <form id="multistepForm" action="https://formspree.io/f/DEINE_ID" method="POST" novalidate>
   ```
5. Testnachricht absenden und Formspree verifizieren.

---

## 3. Echte Meisterfotos einbinden
Aktuell sind hochauflösende, professionelle Demo-Bilder hinterlegt (mit Badge `Beispielbild`):
- **Hero-Badezimmer:** `assets/images/hero_bathroom.jpg`
- **Armaturen & Handwerksdetails:** `assets/images/`
- Sobald reale Fotos von Projekten in Ingolstadt vorliegen, einfach austauschen und die `<span class="img-badge">Beispielbild</span>` Tags in `index.html` entfernen.

---

## 4. CRM-, WhatsApp- & Kalender-Anbindung
- **Online-Terminbuchung (Cal.com / Calendly):**
  In `index.html` bei Bedarf einen Cal.com Iframe einbinden:
  ```html
  <iframe src="https://cal.com/ulrich-pokorny/beratung?embed=true" width="100%" height="600" frameborder="0"></iframe>
  ```
- **Automatischer WhatsApp-Lead:**
  Das Floating Widget leitet über `https://wa.me/491727122955` direkt in den WhatsApp-Chat von Herrn Pokorny weiter.
- **HubSpot / Pipedrive:**
  Formspree Webhooks erlauben die automatische Lead-Übertragung in beliebige CRMs via Zapier oder Make.com.

---

## 5. Hosting & Deployment (Vercel)
### Deployment via Vercel CLI:
```bash
npm i -g vercel
vercel --prod
```
In den Vercel Settings kann die eigene Domain `ulrich-pokorny-sanitaertechnik.de` aufgeschaltet werden.
