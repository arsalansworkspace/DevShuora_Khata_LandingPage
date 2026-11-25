DEVSHUORA DIGITAL KHATA - LANDING PAGE
=======================================

A static website: plain HTML, CSS and JavaScript. No PHP or database needed.

WHAT IS INSIDE
  index.html            the page
  assets/css/style.css  design
  assets/js/main.js     menu, animations, Sign in link
  assets/img/           screenshots and mockups (WebP + JPG), logo, icons
  .htaccess             compression and browser caching (Apache / LiteSpeed)
  robots.txt            lets search engines read the page

UPLOAD ON HOSTINGER
  1. hPanel > Websites > Manage > File Manager.
  2. Open public_html (or the folder of the domain / subdomain you want).
  3. Upload the zip, right-click > Extract, and make sure index.html is directly
     inside that folder (not inside an extra folder).
  4. Open the domain in the browser.

  Tip: if the Khata app already lives in public_html, put this page on its own
  domain or subdomain (for example khata.devshuora.org for the page and
  app.devshuora.org for the app) so the two do not overwrite each other.

TWO SMALL SETTINGS
  1. Sign in link: open assets/js/main.js and put the app's login address in
       const SIGN_IN_URL = 'https://your-app-domain/login';
     While it is empty, the "Sign in" links stay hidden.
  2. Social preview image: in index.html, change
       <meta property="og:image" content="assets/img/og-image.jpg">
     to the full address, e.g. https://your-domain/assets/img/og-image.jpg,
     so WhatsApp and Facebook show the picture when the link is shared.

CHANGE TEXT, PRICES OR NUMBERS
  Everything is in index.html. Search for the text (for example "Rs 1,999" or
  "923412149161") and edit it. WhatsApp links use the number without + or
  spaces: https://wa.me/923412149161

CONTACT
  Devshuora Solutions
  +92 341 2149161 . +92 306 0317142
  info@devshuora.org . devshuora.org
