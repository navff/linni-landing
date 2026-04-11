/* ============================================================
   ЛИННИ — ЛЕНДИНГ  |  script.js
   ============================================================ */

(function () {
  'use strict';

  /* --- Header shadow on scroll --- */
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* --- Mobile burger menu --- */
  const burger     = document.querySelector('.nav-burger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      const isOpen = !mobileMenu.hidden;
      mobileMenu.hidden = isOpen;
      burger.setAttribute('aria-expanded', String(!isOpen));
    });

    /* Close when any link in mobile menu is clicked */
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.hidden = true;
        burger.setAttribute('aria-expanded', 'false');
      });
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (header && !header.contains(e.target)) {
        mobileMenu.hidden = true;
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --- Highlight active nav link on scroll --- */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && navLinks.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(function (section) { observer.observe(section); });
  }

})();
