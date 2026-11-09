import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.resolve(projectRoot, 'dist');

// Dynamically import SEO_PAGES from data/seoPages.ts
const { SEO_PAGES, CONFIRMED_PRICE_LIST } = await import(path.resolve(projectRoot, 'data/seoPages.ts'));

const baseHtmlPath = path.resolve(distDir, 'index.html');
if (!fs.existsSync(baseHtmlPath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(baseHtmlPath, 'utf8');

const routes = [
  // 1. Pricing Page
  {
    path: 'pricing',
    lang: 'en-LK',
    title: 'Pricing & Packages Sri Lanka | Web & Software Rates | NAXIT',
    description: 'Simple fixed prices: graphic design from LKR 500 within a day, branding LKR 1,000 in 1 week, static websites LKR 5,000 in 3 days.',
    canonical: 'https://www.naxitofficial.de/pricing',
    hreflangs: [
      { lang: 'en-LK', url: 'https://www.naxitofficial.de/pricing' },
      { lang: 'x-default', url: 'https://www.naxitofficial.de/pricing' }
    ],
    h1: 'Simple, Fixed Prices',
    intro: 'Confirmed rates in Sri Lankan Rupees (LKR) with guaranteed turnaround times. Graphic design from LKR 500 within a day, branding LKR 1,000 in 1 week, static websites LKR 5,000 in 3 days.',
    ctaUrl: 'https://wa.me/94756811228',
    ctaText: 'Chat on WhatsApp'
  },

  // 2. Portfolio Page
  {
    path: 'portfolio',
    lang: 'en-LK',
    title: 'Portfolio | Naxit Masterworks',
    description: 'Recent NAXIT work: food delivery UX, brand logos, websites and apps for Sri Lankan businesses. See the case studies.',
    canonical: 'https://www.naxitofficial.de/portfolio',
    hreflangs: [
      { lang: 'en-LK', url: 'https://www.naxitofficial.de/portfolio' },
      { lang: 'x-default', url: 'https://www.naxitofficial.de/portfolio' }
    ],
    h1: 'NAXIT Masterworks & Portfolio',
    intro: 'Recent NAXIT work: food delivery UX, brand logos, websites and apps for Sri Lankan businesses.',
    ctaUrl: 'https://wa.me/94756811228',
    ctaText: 'Discuss Your Project'
  },

  // 3. Privacy Policy
  {
    path: 'privacy',
    lang: 'en-LK',
    title: 'Privacy Policy - Naxit ROP | NAXIT',
    description: 'Privacy Policy for Naxit ROP (Retail Operating Platform). Learn how we collect, use, and protect your business and transaction data.',
    canonical: 'https://www.naxitofficial.de/privacy',
    hreflangs: [
      { lang: 'en-LK', url: 'https://www.naxitofficial.de/privacy' },
      { lang: 'x-default', url: 'https://www.naxitofficial.de/privacy' }
    ],
    h1: 'Privacy Policy - Naxit ROP & Digital Services',
    intro: 'Learn how NAXIT collects, protects, and handles data for ROP and digital agency clients.',
    ctaUrl: 'https://wa.me/94756811228',
    ctaText: 'Contact Privacy Officer'
  },

  // 4. Terms of Service
  {
    path: 'terms',
    lang: 'en-LK',
    title: 'Terms of Service & Trader Declaration - Naxit ROP | NAXIT',
    description: 'Terms of Service, Acceptable Use, and Trader Status declaration for Naxit ROP (Retail Operating Platform) mobile application and NAXIT services.',
    canonical: 'https://www.naxitofficial.de/terms',
    hreflangs: [
      { lang: 'en-LK', url: 'https://www.naxitofficial.de/terms' },
      { lang: 'x-default', url: 'https://www.naxitofficial.de/terms' }
    ],
    h1: 'Terms of Service & Trader Declaration',
    intro: 'Terms of service, trader status, and usage agreement for NAXIT products and services.',
    ctaUrl: 'https://wa.me/94756811228',
    ctaText: 'Inquire on WhatsApp'
  }
];

// 5. Add all 18 Multilingual Keyword Pages (6 services x 3 languages) + Aliases
for (const page of SEO_PAGES) {
  const enUrl = `https://www.naxitofficial.de/${page.slug}`;
  const taUrl = `https://www.naxitofficial.de/ta/${page.slug}`;
  const siUrl = `https://www.naxitofficial.de/si/${page.slug}`;

  const hreflangs = [
    { lang: 'en', url: enUrl },
    { lang: 'ta', url: taUrl },
    { lang: 'si', url: siUrl },
    { lang: 'x-default', url: enUrl }
  ];

  // English
  routes.push({
    path: page.slug,
    lang: 'en-LK',
    title: page.en.title,
    description: page.en.metaDescription,
    canonical: enUrl,
    hreflangs,
    h1: page.en.h1,
    intro: page.en.intro,
    faqs: page.en.faqs,
    whatYouGet: page.en.whatYouGet,
    ctaUrl: `https://wa.me/94756811228?text=${encodeURIComponent(`Hi NAXIT, I am interested in ${page.en.h1}.`)}`,
    ctaText: page.en.ctaButtonText || 'Get a Quote on WhatsApp'
  });

  // Tamil (/ta/)
  routes.push({
    path: `ta/${page.slug}`,
    lang: 'ta',
    title: page.ta.title,
    description: page.ta.metaDescription,
    canonical: taUrl,
    hreflangs,
    h1: page.ta.h1,
    intro: page.ta.intro,
    faqs: page.ta.faqs,
    whatYouGet: page.ta.whatYouGet,
    ctaUrl: `https://wa.me/94756811228?text=${encodeURIComponent(`வணக்கம் NAXIT, ${page.ta.h1} பற்றி மேலும் அறிய விரும்புகிறேன்.`)}`,
    ctaText: page.ta.ctaButtonText || 'WhatsApp இல் தொடர்பு கொள்ளவும்'
  });

  // Sinhala (/si/)
  routes.push({
    path: `si/${page.slug}`,
    lang: 'si',
    title: page.si.title,
    description: page.si.metaDescription,
    canonical: siUrl,
    hreflangs,
    h1: page.si.h1,
    intro: page.si.intro,
    faqs: page.si.faqs,
    whatYouGet: page.si.whatYouGet,
    ctaUrl: `https://wa.me/94756811228?text=${encodeURIComponent(`ආයුබෝවන් NAXIT, ${page.si.h1} පිළිබඳව විමසීමට කැමැත්තෙමි.`)}`,
    ctaText: page.si.ctaButtonText || 'WhatsApp හරහා විමසන්න'
  });

  // Aliases (e.g. /website-development-mannar, /retail-software-sri-lanka, etc.)
  for (const alias of page.aliases) {
    routes.push({
      path: alias,
      lang: 'en-LK',
      title: page.en.title,
      description: page.en.metaDescription,
      canonical: enUrl, // canonical points to primary slug
      hreflangs,
      h1: page.en.h1,
      intro: page.en.intro,
      faqs: page.en.faqs,
      whatYouGet: page.en.whatYouGet,
      ctaUrl: `https://wa.me/94756811228?text=${encodeURIComponent(`Hi NAXIT, I am interested in ${page.en.h1}.`)}`,
      ctaText: page.en.ctaButtonText || 'Get a Quote on WhatsApp'
    });
  }
}

console.log(`Prerendering ${routes.length} static routes for Vercel deployment...`);

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

for (const route of routes) {
  const targetDir = path.resolve(distDir, route.path);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  let html = template;

  // 1. Update <html lang="...">
  html = html.replace(/<html\s+lang="[^"]*"/i, `<html lang="${route.lang}"`);

  // 2. Update <title>
  html = html.replace(/<title[^>]*>.*?<\/title>/i, `<title data-rh="true">${escapeHtml(route.title)}</title>`);

  // 3. Update meta description
  html = html.replace(
    /<meta[^>]*name="description"[^>]*\/?>/i,
    `<meta data-rh="true" name="description" content="${escapeHtml(route.description)}" />`
  );

  // 4. Update OpenGraph & Twitter tags
  html = html.replace(
    /<meta[^>]*property="og:title"[^>]*\/?>/i,
    `<meta data-rh="true" property="og:title" content="${escapeHtml(route.title)}" />`
  );
  html = html.replace(
    /<meta[^>]*property="og:description"[^>]*\/?>/i,
    `<meta data-rh="true" property="og:description" content="${escapeHtml(route.description)}" />`
  );
  html = html.replace(
    /<meta[^>]*property="og:url"[^>]*\/?>/i,
    `<meta data-rh="true" property="og:url" content="${escapeHtml(route.canonical)}" />`
  );
  html = html.replace(
    /<meta[^>]*name="twitter:title"[^>]*\/?>/i,
    `<meta data-rh="true" name="twitter:title" content="${escapeHtml(route.title)}" />`
  );
  html = html.replace(
    /<meta[^>]*name="twitter:description"[^>]*\/?>/i,
    `<meta data-rh="true" name="twitter:description" content="${escapeHtml(route.description)}" />`
  );

  // 5. Remove any pre-existing canonical & hreflang tags to prevent duplicates
  html = html.replace(/<link[^>]*rel="canonical"[^>]*\/?>\s*/gi, '');
  html = html.replace(/<link[^>]*rel="alternate"[^>]*hrefLang=[^>]*\/?>\s*/gi, '');
  html = html.replace(/<link[^>]*rel="alternate"[^>]*hreflang=[^>]*\/?>\s*/gi, '');

  // Inject Canonical & Hreflang links inside <head>
  const hreflangTags = route.hreflangs
    .map(h => `<link data-rh="true" rel="alternate" hrefLang="${h.lang}" href="${h.url}" />`)
    .join('\n    ');

  const canonicalTag = `<link data-rh="true" rel="canonical" href="${route.canonical}" />`;
  const seoHeadTags = `\n    ${canonicalTag}\n    ${hreflangTags}\n`;

  html = html.replace('</head>', `${seoHeadTags}  </head>`);

  // 6. Replace <noscript> content with dedicated route content
  const faqsHtml = (route.faqs || [])
    .map(
      f => `
      <article>
        <h3>${escapeHtml(f.question)}</h3>
        <p>${escapeHtml(f.answer)}</p>
      </article>`
    )
    .join('');

  const whatYouGetHtml = (route.whatYouGet || [])
    .map(item => `<li>${escapeHtml(item)}</li>`)
    .join('');

  const noscriptContent = `
    <noscript>
      <header>
        <nav aria-label="Main Navigation">
          <a href="/" aria-label="NAXIT Homepage">
            <img src="/assets/logo.png" width="202" height="106" alt="NAXIT Logo" />
          </a>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/web-design-sri-lanka">Web Design</a></li>
            <li><a href="/ui-ux-design-sri-lanka">UI/UX Design</a></li>
            <li><a href="/rop-retail-software-sri-lanka">ROP Retail Software</a></li>
            <li><a href="/web-development-mannar-jaffna">Mannar &amp; Jaffna</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h1>${escapeHtml(route.h1)}</h1>
          <p class="intro">${escapeHtml(route.intro)}</p>
          ${whatYouGetHtml ? `<h2>Key Features &amp; Deliverables</h2><ul>${whatYouGetHtml}</ul>` : ''}
          ${faqsHtml ? `<h2>Frequently Asked Questions</h2>${faqsHtml}` : ''}
          <div style="margin-top: 24px;">
            <a href="${route.ctaUrl || 'https://wa.me/94756811228'}" style="display: inline-block; padding: 12px 24px; background: #0055ff; color: #fff; text-decoration: none; border-radius: 8px; font-weight: bold;">
              ${escapeHtml(route.ctaText || 'Chat on WhatsApp')}
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 NAXIT INC. All rights reserved. Mannar | Sri Lanka</p>
        <nav aria-label="Footer Links">
          <a href="/pricing">Pricing</a> |
          <a href="/portfolio">Portfolio</a> |
          <a href="/privacy">Privacy</a> |
          <a href="/terms">Terms</a>
        </nav>
      </footer>
    </noscript>
  `;

  // Replace default noscript with dedicated route noscript
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/i, noscriptContent);

  const destFile = path.resolve(targetDir, 'index.html');
  fs.writeFileSync(destFile, html, 'utf8');
}

// Update root dist/index.html with canonical and hreflang
let homeHtml = template;
const homeSeoTags = `\n    <link data-rh="true" rel="canonical" href="https://www.naxitofficial.de/" />\n    <link data-rh="true" rel="alternate" hrefLang="en-LK" href="https://www.naxitofficial.de/" />\n    <link data-rh="true" rel="alternate" hrefLang="x-default" href="https://www.naxitofficial.de/" />\n`;
if (!homeHtml.includes('rel="canonical"')) {
  homeHtml = homeHtml.replace('</head>', `${homeSeoTags}  </head>`);
  fs.writeFileSync(baseHtmlPath, homeHtml, 'utf8');
}

console.log(`✓ Successfully prerendered ${routes.length} pages into dist/`);
