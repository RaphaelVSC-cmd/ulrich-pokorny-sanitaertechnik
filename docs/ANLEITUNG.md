# Entwickler- & Kundenanleitung – Ulrich Pokorny Sanitärtechnik
*V3.1 – MotionSites Edition*

Diese Dokumentation erklärt alle Schritte zur Personalisierung, Einrichtung externer Dienste und produktiven Veröffentlichung der Website.

---

## 1. Formspree Kontaktformular aktivieren
1. Kostenlosen Account auf [formspree.io](https://formspree.io) anlegen.
2. Ein neues Formular erstellen (z.B. Name: `Ulrich Pokorny Anfragen`).
3. Die generierte Formspree-ID kopieren (z.B. `xpzgkyle`).
4. In `index.html` (Zeile ~410) den Platzhalter ersetzen:
   ```html
   <form id="multistepForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" novalidate>
   ```
5. Nach dem ersten Absenden einer Test-Anfrage die Bestätigungs-E-Mail von Formspree verifizieren.

---

## 2. Echte Kundenfotos einbinden
Aktuell sind fotorealistische, pitch-ready Beispielbilder hinterlegt (mit Badge `Beispielbild`).
- **Hero-Bad:** Bild in `assets/images/hero_bathroom.jpg` ersetzen.
- **Armaturen & Duschdetails:** Bilder in `assets/images/` ersetzen.
- **Kennzeichnung entfernen:** Sobald echte Werkstatt-/Projektfotos des Inhabers vorliegen, die Badges `<span class="img-badge">Beispielbild</span>` in `index.html` entfernen.

---

## 3. Online-Terminbuchung einrichten (Cal.com / Calendly)
1. Kostenlosen Account auf [cal.com](https://cal.com) erstellen.
2. Einen Ereignistyp anlegen (z.B. `Erstberatung Badsanierung (30 Min.)`).
3. In `index.html` die Sektion `#termin` anpassen und den Cal.com Embed-Code einfügen:
   ```html
   <iframe src="https://cal.com/ulrich-pokorny/beratung?embed=true" width="100%" height="600" frameborder="0"></iframe>
   ```

---

## 4. CRM- & Slack-Automatisierung
- **HubSpot / Pipedrive Anbindung:** In Formspree unter *Settings → Webhooks* einen Webhook zu Make.com oder Zapier hinterlegen. Neue Anfragen werden automatisch als Leads in das CRM eingepflegt.
- **Instant SMS / WhatsApp / Slack Benachrichtigung:** Über Zapier oder Make.com kann bei jedem Formulareingang sofort eine Benachrichtigung an das Smartphone von Herrn Pokorny gesendet werden.

---

## 5. Rechtliche Angaben vervollständigen
- **Umsatzsteuer-ID:** Falls vorhanden, im Impressum (`#impressum`) die Zeile einkommentieren:
  ```html
  <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE...</p>
  ```
- **Zuständige Kammer:** Handwerkskammer für München und Oberbayern eintragen.

---

## 6. Hosting & Deployment (Vercel / Netlify)
### Deployment auf Vercel:
1. [vercel.com](https://vercel.com) aufrufen und mit GitHub/GitLab verknüpfen.
2. Repository importieren oder via CLI:
   ```bash
   npm i -g vercel
   vercel --prod
   ```
3. Die benutzerdefinierte Domain (z.B. `ulrich-pokorny-sanitaertechnik.de`) in den Vercel Project Settings hinzufügen.

---

## 7. Performance-Optimierung für den Live-Betrieb
1. **Google Fonts lokal hosten:**
   - Fonts auf [gwfh.mranftl.com](https://gwfh.mranftl.com/fonts) herunterladen.
   - WOFF2-Dateien in `assets/fonts/` ablegen und per `@font-face` in `style.css` einbinden.
2. **Bilder als WebP / AVIF:**
   - Bilder mit [Squoosh](https://squoosh.app) zu `.webp` komprimieren (spart ca. 70% Dateigröße).
