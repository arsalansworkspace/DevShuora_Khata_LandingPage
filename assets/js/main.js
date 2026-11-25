/* Devshuora Digital Khata landing page */

// Put the address of the app's sign-in page here (for example 'https://khata.devshuora.org/login').
// While it is empty, the "Sign in" links stay hidden.
const SIGN_IN_URL = '';

(function () {
  // Sign in links
  if (SIGN_IN_URL) {
    document.querySelectorAll('[data-signin]').forEach(function (a) { a.href = SIGN_IN_URL; a.hidden = false; });
    document.querySelectorAll('[data-signin-item]').forEach(function (li) { li.hidden = false; });
  }

  // Year in the footer
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Header shadow once the page scrolls
  var header = document.querySelector('.site-header');
  var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');

if (burger && menu) {
  const setMenu = (open) => {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  burger.addEventListener('click', () => {
    setMenu(!menu.classList.contains('open'));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) setMenu(false);
  });
}})();
