/* ============================================================
   Jiayu Tang – Personal Website Script
   ============================================================ */

// --- Mobile nav toggle ---
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close menu when a nav link is clicked
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Close menu on outside click
document.addEventListener('click', e => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// --- Active nav link on scroll ---
const sections = Array.from(document.querySelectorAll('main section[id]'));
const navLinks  = Array.from(document.querySelectorAll('.nav-menu a[href^="#"]'));

const setActive = id => {
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + id);
  });
};

// Use IntersectionObserver for smooth active state
const navH = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
) || 60;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActive(entry.target.id);
  });
}, {
  rootMargin: `-${navH}px 0px -55% 0px`
});

sections.forEach(s => observer.observe(s));

// --- Back to top button ---
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- Smooth reveal on scroll (subtle fade-in) ---
const revealEls = document.querySelectorAll(
  '.edu-card, .exp-card, .contact-card, .skill-box'
);

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    revealObserver.observe(el);
  });
}
