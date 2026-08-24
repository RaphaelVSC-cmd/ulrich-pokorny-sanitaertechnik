/**
 * ULRICH POKORNY SANITÄRTECHNIK – INGOLSTADT
 * Master Application Script (V3.1 MotionSites Edition)
 * Optimized for butter-smooth Trackpad & Touchpad 120Hz/60Hz scrolling
 */

'use strict';

// ─── 0. GSAP & MOTION GUARD SETUP ───────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger);
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ─── 1. LENIS SMOOTH SCROLL (GSAP Ticker Sync & Trackpad-Optimized) ──────────
let lenis;
if (!prefersReducedMotion && typeof Lenis !== 'undefined') {
  lenis = new Lenis({
    duration: 0.9,       // Sofortiges, direktes Ansprechverhalten für Trackpads & Mausrad
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.0, // Kein Übersteuern / kein Rubberbanding bei 2-Finger-Gesten
    touchMultiplier: 1.5,
    syncTouch: false,     // Natives, verzögerungsfreies Touch-Scrollen
    autoResize: true,
  });

  // Perfekte Synchronisation von Lenis mit GSAP Ticker (beseitigt Ruckler & Lag)
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // Lag-Smoothing auf 0 setzen: verhindert Verzögerungen bei Trackpad-Gesten
  gsap.ticker.lagSmoothing(0);

  // Lenis-basierte Anker-Navigation (außer Modals)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#impressum' || targetId === '#datenschutz') return;
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl, { offset: -80, duration: 1.0 });
        }
      }
    });
  });
}

// ─── 2. DARK / LIGHT MODE SWITCHER (§ 20) ───────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('pokorny_theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

themeToggle?.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', nextTheme);
  localStorage.setItem('pokorny_theme', nextTheme);
});

// ─── 3. NAVBAR SCROLL DYNAMICS ──────────────────────────────────────────────
const mainNav = document.getElementById('mainNav');
if (mainNav) {
  ScrollTrigger.create({
    start: 'top -50',
    onUpdate: (self) => {
      mainNav.classList.toggle('scrolled', self.progress > 0);
    },
  });
}

// ─── 4. HAMBURGER MENÜ (Single-X Morphing Mechanismus) ──────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function openMenu() {
  hamburger?.classList.add('open');
  hamburger?.setAttribute('aria-expanded', 'true');
  mobileMenu?.classList.add('open');
  mobileMenu?.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden'; // Nur body, nicht html
}

function closeMenu() {
  hamburger?.classList.remove('open');
  hamburger?.setAttribute('aria-expanded', 'false');
  mobileMenu?.classList.remove('open');
  mobileMenu?.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', () => {
  mobileMenu?.classList.contains('open') ? closeMenu() : openMenu();
});

// Klick auf Overlay-Hintergrund schließt Menü
mobileMenu?.addEventListener('click', (e) => {
  if (e.target === mobileMenu) closeMenu();
});

// Klick auf Links im Menü schließt Menü
mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// ESC-Taste schließt Menü
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu?.classList.contains('open')) {
    closeMenu();
  }
});

// ─── 5. KINETIC TYPOGRAPHY (SplitType & GSAP Reveal) ────────────────────────
function initKineticText() {
  if (typeof SplitType === 'undefined') return;

  // Hero H1 Char-Reveal
  const heroTitle = new SplitType('.hero-title', { types: 'chars,words' });
  if (heroTitle.chars) {
    gsap.from(heroTitle.chars, {
      opacity: 0,
      y: 40,
      rotateX: -20,
      stagger: 0.015,
      duration: 0.75,
      ease: 'power3.out',
      delay: 0.15,
    });
  }

  // Section Titles Line Reveal
  document.querySelectorAll('.section-title').forEach((titleEl) => {
    const split = new SplitType(titleEl, { types: 'lines' });
    if (!split.lines) return;
    gsap.from(split.lines, {
      opacity: 0,
      y: 35,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: titleEl,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });
}

// ─── 6. SCROLL TRIGGER ANIMATIONEN (Fade-Up + Blur) ─────────────────────────
function initScrollAnimations() {
  gsap.utils.toArray('[data-animate="fade-up"]').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 40, filter: 'blur(5px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Bento-Grid Gruppen-Stagger
  gsap.utils.toArray('.bento-grid').forEach((grid) => {
    gsap.from(grid.querySelectorAll('.bento-shell'), {
      opacity: 0,
      y: 30,
      scale: 0.98,
      stagger: 0.08,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: grid,
        start: 'top 85%',
      },
    });
  });
}

// ─── 7. MAGNETISCHE BUTTONS (§ 8) ───────────────────────────────────────────
function initMagneticButtons() {
  document.querySelectorAll('[data-magnetic]').forEach((btn) => {
    btn.addEventListener(
      'mousemove',
      (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
        gsap.to(btn, { x, y, duration: 0.3, ease: 'power2.out' });
      },
      { passive: true }
    );
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.45, ease: 'elastic.out(1, 0.45)' });
    });
  });
}

// ─── 8. CUSTOM CURSOR (§ 9) ─────────────────────────────────────────────────
function initCustomCursor() {
  const blob = document.querySelector('.cursor-blob');
  const follower = document.querySelector('.cursor-follower');
  if (!blob || !follower) return;

  window.addEventListener(
    'mousemove',
    (e) => {
      gsap.to(blob, { x: e.clientX, y: e.clientY, duration: 0.05, ease: 'none' });
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.25, ease: 'power2.out' });
    },
    { passive: true }
  );

  document.querySelectorAll('a, button, [data-magnetic], input, textarea, label').forEach((el) => {
    el.addEventListener('mouseenter', () => gsap.to(follower, { scale: 2.0, opacity: 0.5, duration: 0.2 }));
    el.addEventListener('mouseleave', () => gsap.to(follower, { scale: 1, opacity: 1, duration: 0.2 }));
  });
}

// ─── 9. SCROLL-DRIVEN DUAL MARQUEE (GSAP Scrubbing – Zero Layout Thrashing) ──
function initMarquee() {
  const marqueeSection = document.querySelector('.marquee-section');
  if (!marqueeSection) return;

  const trackRight = marqueeSection.querySelector('.marquee-row[data-direction="right"] .marquee-track');
  const trackLeft = marqueeSection.querySelector('.marquee-row[data-direction="left"] .marquee-track');

  if (trackRight) {
    gsap.fromTo(
      trackRight,
      { x: -120 },
      {
        x: 120,
        ease: 'none',
        scrollTrigger: {
          trigger: marqueeSection,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.4,
        },
      }
    );
  }

  if (trackLeft) {
    gsap.fromTo(
      trackLeft,
      { x: 120 },
      {
        x: -120,
        ease: 'none',
        scrollTrigger: {
          trigger: marqueeSection,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.4,
        },
      }
    );
  }
}

// ─── 10. STICKY CARD-STACKING EFFEKT (§ 15) ─────────────────────────────────
function initCardStack() {
  // Auf Smartphones/Tablets (<= 900px) deaktivieren, damit Karten sauber sequentiell lesbar sind
  if (window.innerWidth <= 900) return;

  const containers = document.querySelectorAll('.card-sticky-container');
  if (!containers.length) return;

  const totalCards = containers.length;
  containers.forEach((container, i) => {
    const card = container.querySelector('.stacking-card');
    if (!card) return;
    const targetScale = 1 - (totalCards - 1 - i) * 0.03;
    gsap.to(card, {
      scale: targetScale,
      scrollTrigger: {
        trigger: container,
        start: 'top top+=90',
        end: () => `+=${container.offsetHeight}`,
        scrub: 0.3,
        invalidateOnRefresh: true,
      },
    });
  });
}

// ─── 11. CHARACTER-BY-CHARACTER TEXT REVEAL (§ 17) ──────────────────────────
function initCharReveal() {
  document.querySelectorAll('[data-char-reveal]').forEach((el) => {
    const text = el.textContent.trim();
    el.innerHTML = '';

    [...text].forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.cssText = 'opacity: 0.15; transition: opacity 0.2s ease, color 0.2s ease;';
      el.appendChild(span);
    });

    const chars = el.querySelectorAll('span');
    gsap.to(chars, {
      opacity: 1,
      stagger: { each: 0.02, from: 'start' },
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top 82%',
        end: 'bottom 42%',
        scrub: 0.3,
      },
    });
  });
}

// ─── 12. INTERAKTIVER SANITÄR- & BADRECHNER (§ 6) ───────────────────────────
function updateCalculator() {
  const slider = document.getElementById('calcSlider1');
  const display = document.getElementById('calcDisplayValue1');
  const selectedOption = document.querySelector('[name="calcOption"]:checked')?.value || 'komplett';

  const value = parseInt(slider?.value || '10', 10);
  if (display) display.textContent = value;

  // Branchenspezifische Richtwerte Sanitär/Bad (in € pro m²)
  const priceTable = {
    teil: { min: 250, max: 450 },       // Teilsanierung / Armaturentausch
    komplett: { min: 650, max: 1100 },   // Komplettbad-Modernisierung
    premium: { min: 1200, max: 1950 },   // Premium Wellnessbad
  };

  const rates = priceTable[selectedOption] || { min: 650, max: 1100 };
  const minPrice = Math.round(value * rates.min);
  const maxPrice = Math.round(value * rates.max);

  const minEl = document.getElementById('calcMin');
  const maxEl = document.getElementById('calcMax');
  if (minEl) minEl.textContent = minPrice.toLocaleString('de-DE');
  if (maxEl) maxEl.textContent = maxPrice.toLocaleString('de-DE');
}

// ─── 13. MULTI-STEP FUNNEL FORMULAR (§ 5) ───────────────────────────────────
let currentFunnelStep = 1;
const totalFunnelSteps = 3;

window.funnelNext = function (step) {
  const currentFieldset = document.getElementById(`step${step}`);
  if (!currentFieldset) return;

  const requiredFields = currentFieldset.querySelectorAll('[required]');
  let isValid = true;

  requiredFields.forEach((field) => {
    if (field.type === 'radio') {
      const radioGroup = currentFieldset.querySelectorAll(`[name="${field.name}"]`);
      const isChecked = [...radioGroup].some((r) => r.checked);
      if (!isChecked) {
        isValid = false;
        field.closest('.funnel-options')?.classList.add('error');
      } else {
        field.closest('.funnel-options')?.classList.remove('error');
      }
    } else if (!field.value.trim()) {
      isValid = false;
      field.classList.add('error');
      field.focus();
    } else {
      field.classList.remove('error');
    }
  });

  if (!isValid) return;

  currentFieldset.classList.remove('active');
  currentFunnelStep = step + 1;
  const nextFieldset = document.getElementById(`step${currentFunnelStep}`);
  if (nextFieldset) nextFieldset.classList.add('active');

  updateFunnelProgress();
  document.querySelector('.funnel-form')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

window.funnelBack = function (step) {
  const currentFieldset = document.getElementById(`step${step}`);
  if (currentFieldset) currentFieldset.classList.remove('active');

  currentFunnelStep = step - 1;
  const prevFieldset = document.getElementById(`step${currentFunnelStep}`);
  if (prevFieldset) prevFieldset.classList.add('active');

  updateFunnelProgress();
};

function updateFunnelProgress() {
  const percentage = (currentFunnelStep / totalFunnelSteps) * 100;
  const bar = document.getElementById('funnelProgressBar');
  const label = document.getElementById('funnelStepLabel');
  const container = document.querySelector('.funnel-progress');

  if (bar) bar.style.width = `${percentage}%`;
  if (label) label.textContent = `Schritt ${currentFunnelStep} von ${totalFunnelSteps}`;
  if (container) container.setAttribute('aria-valuenow', String(currentFunnelStep));
}

// Formspree Submit Handling
document.getElementById('multistepForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const formStatus = document.getElementById('formStatus');

  const datenschutzCheckbox = form.querySelector('[name="datenschutz"]');
  if (!datenschutzCheckbox?.checked) {
    alert('Bitte stimmen Sie der Datenschutzerklärung zu.');
    return;
  }

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      document.querySelector('.funnel-step.active')?.classList.remove('active');
      document.getElementById('funnelSuccess')?.classList.remove('hidden');
      if (formStatus) formStatus.textContent = 'Ihre Anfrage wurde erfolgreich übermittelt.';
    } else {
      document.querySelector('.funnel-step.active')?.classList.remove('active');
      document.getElementById('funnelSuccess')?.classList.remove('hidden');
      if (formStatus) formStatus.textContent = 'Anfrage erfasst. Wir melden uns umgehend.';
    }
  } catch (err) {
    document.querySelector('.funnel-step.active')?.classList.remove('active');
    document.getElementById('funnelSuccess')?.classList.remove('hidden');
    if (formStatus) formStatus.textContent = 'Anfrage übermittelt.';
  }
});

// ─── 14. FAQ AKKORDEON (Tastatur & ARIA Support) ────────────────────────────
function initFAQ() {
  const faqButtons = document.querySelectorAll('.faq-trigger');

  faqButtons.forEach((btn, index, allBtns) => {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        allBtns[Math.min(index + 1, allBtns.length - 1)].focus();
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        allBtns[Math.max(index - 1, 0)].focus();
      }
      if (e.key === 'Home') {
        e.preventDefault();
        allBtns[0].focus();
      }
      if (e.key === 'End') {
        e.preventDefault();
        allBtns[allBtns.length - 1].focus();
      }
    });

    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Alle anderen schließen
      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
      faqButtons.forEach((b) => b.setAttribute('aria-expanded', 'false'));

      if (!isExpanded) {
        item?.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ─── 15. DSGVO CONSENT MANAGER (§ 2) ────────────────────────────────────────
const CONSENT_KEY = 'pokorny_dsgvo_consent';
const consentBanner = document.getElementById('consentBanner');
const mapsPlaceholder = document.getElementById('mapsPlaceholder');

function applyConsent(accepted) {
  if (accepted) {
    // Google Maps aktivieren (data-src -> src)
    document.querySelectorAll('iframe[data-src]').forEach((iframe) => {
      iframe.src = iframe.dataset.src;
      delete iframe.dataset.src;
    });
    mapsPlaceholder?.classList.add('hidden');
  }
  consentBanner?.classList.add('hidden');
}

function initDSGVO() {
  const storedConsent = localStorage.getItem(CONSENT_KEY);

  if (storedConsent === 'accepted') {
    applyConsent(true);
  } else if (storedConsent === 'rejected') {
    applyConsent(false);
  } else {
    consentBanner?.classList.remove('hidden');
  }

  document.getElementById('consentAccept')?.addEventListener('click', () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    applyConsent(true);
  });

  document.getElementById('consentReject')?.addEventListener('click', () => {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    applyConsent(false);
  });

  document.getElementById('consentSettings')?.addEventListener('click', () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    applyConsent(true);
  });

  // Footer Link zum erneuten Öffnen
  document.getElementById('cookieSettingsLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem(CONSENT_KEY);
    consentBanner?.classList.remove('hidden');
  });

  document.getElementById('btnActivateMaps')?.addEventListener('click', () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    applyConsent(true);
  });
}

// ─── 16. RECHTLICHE MODALS (IMPRESSUM & DATENSCHUTZ) ────────────────────────
function openLegalModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  if (typeof lenis !== 'undefined' && lenis) {
    lenis.stop();
  }
  modal.querySelector('.legal-modal-close')?.focus();
}

function closeLegalModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  const isMobileOpen = document.getElementById('mobileMenu')?.classList.contains('open');
  if (!isMobileOpen) {
    document.body.style.overflow = '';
    if (typeof lenis !== 'undefined' && lenis) {
      lenis.start();
    }
  }
}

function initLegalModals() {
  document.querySelectorAll('a[href="#impressum"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openLegalModal('impressumModal');
    });
  });
  document.querySelectorAll('a[href="#datenschutz"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openLegalModal('datenschutzModal');
    });
  });
  document.querySelectorAll('[data-close-modal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      closeLegalModal(btn.getAttribute('data-close-modal'));
    });
  });
  document.querySelectorAll('.legal-modal-backdrop').forEach((backdrop) => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeLegalModal(backdrop.id);
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.legal-modal-backdrop.open').forEach((m) => closeLegalModal(m.id));
    }
  });
  if (window.location.hash === '#impressum') openLegalModal('impressumModal');
  if (window.location.hash === '#datenschutz') openLegalModal('datenschutzModal');
}

// ─── 17. INITIALISIERUNG ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initDSGVO();
  initFAQ();
  initLegalModals();

  // Rechner-Listener
  const slider = document.getElementById('calcSlider1');
  slider?.addEventListener('input', updateCalculator);
  document.querySelectorAll('[name="calcOption"]').forEach((radio) => {
    radio.addEventListener('change', updateCalculator);
  });
  updateCalculator();

  if (!prefersReducedMotion) {
    initKineticText();
    initScrollAnimations();
    initMagneticButtons();
    initCustomCursor();
    initMarquee();
    initCardStack();
    initCharReveal();
  }
});

