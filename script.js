/* ============================================================
   Jiayu Tang – Personal Website Script
   ============================================================ */

// --- Sidebar toggle (mobile) ---
const sidebar        = document.getElementById('sidebar');
const menuBtn        = document.getElementById('menuBtn');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function openSidebar() {
  sidebar.classList.add('open');
  sidebarOverlay.classList.add('visible');
  menuBtn.setAttribute('aria-expanded', 'true');
  menuBtn.innerHTML = '<i class="fas fa-xmark"></i>';
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('visible');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  document.body.style.overflow = '';
}

menuBtn.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});

sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar when a nav link is clicked (mobile)
sidebar.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 900) closeSidebar();
  });
});

// --- Active nav link on scroll ---
const sections = Array.from(document.querySelectorAll('section[id]'));
const navLinks  = Array.from(document.querySelectorAll('.nav-link'));

const activateLink = id => {
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
  });
};

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activateLink(entry.target.getAttribute('id'));
    }
  });
}, { rootMargin: '0px 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// --- Back to top button ---
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- Scroll reveal (subtle fade-in) ---
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
  }, { threshold: 0.08 });

  revealEls.forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(18px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    revealObserver.observe(el);
  });
}
