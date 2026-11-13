import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.resolve(projectRoot, 'dist');
const SITE_ORIGIN = 'https://www.naxitofficial.de';

const { SEO_PAGES } = await import(path.resolve(projectRoot, 'data/seoPages.ts'));
const { PROJECTS } = await import(path.resolve(projectRoot, 'data/projects.ts'));

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
    canonical: `${SITE_ORIGIN}/pricing`,
    hreflangs: [
      { lang: 'en-LK', url: `${SITE_ORIGIN}/pricing` },
      { lang: 'x-default', url: `${SITE_ORIGIN}/pricing` }
    ],
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Pricing', path: '/pricing' }
    ],
    h1: 'Simple, Fixed Prices',
    intro: 'Confirmed rates in Sri Lankan Rupees (LKR) with guaranteed turnaround times. Graphic design from LKR 500 within a day, branding LKR 1,000 in 1 week, static websites LKR 5,000 in 3 days.',
    ctaUrl: 'https://wa.me/94756811228',
    ctaText: 'Chat on WhatsApp'
  },

  // 1b. Contact Page
  {
    path: 'contact',
    lang: 'en-LK',
    title: 'Contact NAXIT | Mannar, Sri Lanka',
    description: 'Contact NAXIT in Mannar, Northern Province, Sri Lanka. Web design, UI/UX, branding and retail software studio. Open 24 hours every day. Phone: +94 75 681 1228, Email: naxitofficial@gmail.com.',
    canonical: `${SITE_ORIGIN}/contact`,
    hreflangs: [
      { lang: 'en-LK', url: `${SITE_ORIGIN}/contact` },
      { lang: 'x-default', url: `${SITE_ORIGIN}/contact` }
    ],
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Contact', path: '/contact' }
    ],
    h1: 'Contact NAXIT in Mannar',
    intro: 'Our primary studio is located at 191, 11 Moor St, Mannar. We work directly with businesses across Mannar, Jaffna, Vavuniya, and island-wide. We are open 24 hours every day with transparent pricing, honest technical guidance, and direct local support.',
    ctaUrl: 'https://wa.me/94756811228',
    ctaText: 'Chat on WhatsApp'
  },

  // 2. Portfolio Page
  {
    path: 'portfolio',
    lang: 'en-LK',
    title: 'Portfolio | Naxit Masterworks',
    description: 'Recent NAXIT work: food delivery UX, brand logos, websites and apps for Sri Lankan businesses. See the case studies.',
    canonical: `${SITE_ORIGIN}/portfolio`,
    hreflangs: [
      { lang: 'en-LK', url: `${SITE_ORIGIN}/portfolio` },
      { lang: 'x-default', url: `${SITE_ORIGIN}/portfolio` }
    ],
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Portfolio', path: '/portfolio' }
    ],
    h1: 'NAXIT Masterworks & Portfolio',
    intro: 'Recent NAXIT work: food delivery UX, brand logos, websites and apps for Sri Lankan businesses.',
    portfolioList: PROJECTS,
    ctaUrl: 'https://wa.me/94756811228',
    ctaText: 'Discuss Your Project'
  },

  // 3. Privacy Policy
  {
    path: 'privacy',
    lang: 'en-LK',
    title: 'Privacy Policy - Naxit ROP | NAXIT',
    description: 'Privacy Policy for Naxit ROP (Retail Operating Platform). Learn how we collect, use, and protect your business and transaction data.',
    canonical: `${SITE_ORIGIN}/privacy`,
    hreflangs: [
      { lang: 'en-LK', url: `${SITE_ORIGIN}/privacy` },
      { lang: 'x-default', url: `${SITE_ORIGIN}/privacy` }
    ],
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Privacy Policy', path: '/privacy' }
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
    canonical: `${SITE_ORIGIN}/terms`,
    hreflangs: [
      { lang: 'en-LK', url: `${SITE_ORIGIN}/terms` },
      { lang: 'x-default', url: `${SITE_ORIGIN}/terms` }
    ],
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Terms of Service', path: '/terms' }
    ],
    h1: 'Terms of Service & Trader Declaration',
    intro: 'Terms of service, trader status, and usage agreement for NAXIT products and services.',
    ctaUrl: 'https://wa.me/94756811228',
    ctaText: 'Inquire on WhatsApp'
  }
];

// 5. Add all Portfolio Detail Pages (/portfolio/:slug)
for (const project of PROJECTS) {
  const projectUrl = `${SITE_ORIGIN}/portfolio/${project.slug}`;
  routes.push({
    path: `portfolio/${project.slug}`,
    lang: 'en-LK',
    title: `${project.title} | Naxit Portfolio`,
    description: project.tagline,
    canonical: projectUrl,
    ogImage: project.image,
    hreflangs: [
      { lang: 'en-LK', url: projectUrl },
      { lang: 'x-default', url: projectUrl }
    ],
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: project.title, path: `/portfolio/${project.slug}` }
    ],
    h1: project.title,
    intro: project.tagline,
    projectData: project,
    ctaUrl: 'https://wa.me/94756811228',
    ctaText: 'Talk to us on WhatsApp'
  });
}

// 6. Add all 18 Multilingual Keyword Pages (6 services x 3 languages) + Aliases
for (const page of SEO_PAGES) {
  const enPath = `/${page.slug}`;
  const taPath = `/ta/${page.slug}`;
  const siPath = `/si/${page.slug}`;

  const enUrl = `${SITE_ORIGIN}${enPath}`;
  const taUrl = `${SITE_ORIGIN}${taPath}`;
  const siUrl = `${SITE_ORIGIN}${siPath}`;

  const hreflangs = [
    { lang: 'en', url: enUrl },
    { lang: 'ta', url: taUrl },
    { lang: 'si', url: siUrl },
    { lang: 'x-default', url: enUrl }
  ];

  const makeServiceSchema = (localeData) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: localeData.h1,
    description: localeData.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'NAXIT',
      telephone: '+94756811228',
      url: `${SITE_ORIGIN}/`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '191, 11 Moor St',
        addressLocality: 'Mannar',
        addressRegion: 'Northern Province',
        postalCode: '41000',
        addressCountry: 'LK'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 8.9829285,
        longitude: 79.9118736
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59'
        }
      ]
    },
    areaServed: {
      '@type': 'Country',
      name: 'Sri Lanka'
    }
  });

  const makeFaqSchema = (localeData) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (localeData.faqs || []).map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  });

  // English
  routes.push({
    path: page.slug,
    lang: 'en-LK',
    title: page.en.title,
    description: page.en.metaDescription,
    canonical: enUrl,
    hreflangs,
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Services', path: '/#services' },
      { label: page.en.h1, path: enPath }
    ],
    serviceSchema: makeServiceSchema(page.en),
    faqSchema: makeFaqSchema(page.en),
    h1: page.en.h1,
    intro: page.en.intro,
    faqs: page.en.faqs,
    whatYouGet: page.en.whatYouGet,
    ctaUrl: `https://wa.me/94756811228?text=${encodeURIComponent(`Hi NAXIT, I am interested in ${page.en.h1}.`)}`,
    ctaText: page.en.ctaButtonText || 'Get a Quote on WhatsApp',
    isRop: Boolean(page.isRop),
    pageId: page.id
  });

  // Tamil (/ta/)
  routes.push({
    path: `ta/${page.slug}`,
    lang: 'ta',
    title: page.ta.title,
    description: page.ta.metaDescription,
    canonical: taUrl,
    hreflangs,
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Services', path: '/#services' },
      { label: page.ta.h1, path: taPath }
    ],
    serviceSchema: makeServiceSchema(page.ta),
    faqSchema: makeFaqSchema(page.ta),
    h1: page.ta.h1,
    intro: page.ta.intro,
    faqs: page.ta.faqs,
    whatYouGet: page.ta.whatYouGet,
    ctaUrl: `https://wa.me/94756811228?text=${encodeURIComponent(`வணக்கம் NAXIT, ${page.ta.h1} பற்றி மேலும் அறிய விரும்புகிறேன்.`)}`,
    ctaText: page.ta.ctaButtonText || 'WhatsApp இல் தொடர்பு கொள்ளவும்',
    isRop: Boolean(page.isRop),
    pageId: page.id
  });

  // Sinhala (/si/)
  routes.push({
    path: `si/${page.slug}`,
    lang: 'si',
    title: page.si.title,
    description: page.si.metaDescription,
    canonical: siUrl,
    hreflangs,
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Services', path: '/#services' },
      { label: page.si.h1, path: siPath }
    ],
    serviceSchema: makeServiceSchema(page.si),
    faqSchema: makeFaqSchema(page.si),
    h1: page.si.h1,
    intro: page.si.intro,
    faqs: page.si.faqs,
    whatYouGet: page.si.whatYouGet,
    ctaUrl: `https://wa.me/94756811228?text=${encodeURIComponent(`ආයුබෝවන් NAXIT, ${page.si.h1} පිළිබඳව විමසීමට කැමැත්තෙමි.`)}`,
    ctaText: page.si.ctaButtonText || 'WhatsApp හරහා විමසන්න',
    isRop: Boolean(page.isRop),
    pageId: page.id
  });

  // Aliases (EN, TA, SI)
  for (const alias of page.aliases) {
    routes.push({
      path: alias,
      lang: 'en-LK',
      title: page.en.title,
      description: page.en.metaDescription,
      canonical: enUrl,
      hreflangs,
      breadcrumbs: [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/#services' },
        { label: page.en.h1, path: enPath }
      ],
      serviceSchema: makeServiceSchema(page.en),
      faqSchema: makeFaqSchema(page.en),
      h1: page.en.h1,
      intro: page.en.intro,
      faqs: page.en.faqs,
      whatYouGet: page.en.whatYouGet,
      ctaUrl: `https://wa.me/94756811228?text=${encodeURIComponent(`Hi NAXIT, I am interested in ${page.en.h1}.`)}`,
      ctaText: page.en.ctaButtonText || 'Get a Quote on WhatsApp',
      isRop: Boolean(page.isRop),
      pageId: page.id
    });

    routes.push({
      path: `ta/${alias}`,
      lang: 'ta',
      title: page.ta.title,
      description: page.ta.metaDescription,
      canonical: taUrl,
      hreflangs,
      breadcrumbs: [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/#services' },
        { label: page.ta.h1, path: taPath }
      ],
      serviceSchema: makeServiceSchema(page.ta),
      faqSchema: makeFaqSchema(page.ta),
      h1: page.ta.h1,
      intro: page.ta.intro,
      faqs: page.ta.faqs,
      whatYouGet: page.ta.whatYouGet,
      ctaUrl: `https://wa.me/94756811228?text=${encodeURIComponent(`வணக்கம் NAXIT, ${page.ta.h1} பற்றி மேலும் அறிய விரும்புகிறேன்.`)}`,
      ctaText: page.ta.ctaButtonText || 'WhatsApp இல் தொடர்பு கொள்ளவும்',
      isRop: Boolean(page.isRop),
      pageId: page.id
    });

    routes.push({
      path: `si/${alias}`,
      lang: 'si',
      title: page.si.title,
      description: page.si.metaDescription,
      canonical: siUrl,
      hreflangs,
      breadcrumbs: [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/#services' },
        { label: page.si.h1, path: siPath }
      ],
      serviceSchema: makeServiceSchema(page.si),
      faqSchema: makeFaqSchema(page.si),
      h1: page.si.h1,
      intro: page.si.intro,
      faqs: page.si.faqs,
      whatYouGet: page.si.whatYouGet,
      ctaUrl: `https://wa.me/94756811228?text=${encodeURIComponent(`ආයුබෝවන් NAXIT, ${page.si.h1} පිළිබඳව විමසීමට කැමැත්තෙමි.`)}`,
      ctaText: page.si.ctaButtonText || 'WhatsApp හරහා විමසන්න',
      isRop: Boolean(page.isRop),
      pageId: page.id
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

function buildBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      item: `${SITE_ORIGIN}${item.path}`
    }))
  };
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
    /<meta[^>]*name="description"[^>]*\/?>/is,
    `<meta data-rh="true" name="description" content="${escapeHtml(route.description)}" />`
  );

  // 4. Update OpenGraph & Twitter tags
  html = html.replace(
    /<meta[^>]*property="og:title"[^>]*\/?>/is,
    `<meta data-rh="true" property="og:title" content="${escapeHtml(route.title)}" />`
  );
  html = html.replace(
    /<meta[^>]*property="og:description"[^>]*\/?>/is,
    `<meta data-rh="true" property="og:description" content="${escapeHtml(route.description)}" />`
  );
  html = html.replace(
    /<meta[^>]*property="og:url"[^>]*\/?>/is,
    `<meta data-rh="true" property="og:url" content="${escapeHtml(route.canonical)}" />`
  );
  html = html.replace(
    /<meta[^>]*name="twitter:title"[^>]*\/?>/is,
    `<meta data-rh="true" name="twitter:title" content="${escapeHtml(route.title)}" />`
  );
  html = html.replace(
    /<meta[^>]*name="twitter:description"[^>]*\/?>/is,
    `<meta data-rh="true" name="twitter:description" content="${escapeHtml(route.description)}" />`
  );
  if (route.ogImage) {
    html = html.replace(
      /<meta[^>]*property="og:image"[^>]*\/?>/is,
      `<meta data-rh="true" property="og:image" content="${escapeHtml(route.ogImage)}" />`
    );
    html = html.replace(
      /<meta[^>]*name="twitter:image"[^>]*\/?>/is,
      `<meta data-rh="true" name="twitter:image" content="${escapeHtml(route.ogImage)}" />`
    );
  }

  // 5. Remove homepage-only FAQPage schema block & pre-existing canonical/hreflang
  html = html.replace(/<script\s+data-rh="true"\s+type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, '');
  html = html.replace(/<link[^>]*rel="canonical"[^>]*\/?>\s*/gi, '');
  html = html.replace(/<link[^>]*rel="alternate"[^>]*hrefLang=[^>]*\/?>\s*/gi, '');
  html = html.replace(/<link[^>]*rel="alternate"[^>]*hreflang=[^>]*\/?>\s*/gi, '');

  // Inject Canonical, Hreflang, and JSON-LD structured data (BreadcrumbList + Service/FAQPage)
  const hreflangTags = route.hreflangs
    .map((h) => `<link data-rh="true" rel="alternate" hrefLang="${h.lang}" href="${h.url}" />`)
    .join('\n    ');

  const canonicalTag = `<link data-rh="true" rel="canonical" href="${route.canonical}" />`;

  const jsonLdScripts = [];
  if (route.breadcrumbs && route.breadcrumbs.length > 0) {
    jsonLdScripts.push(
      `<script data-rh="true" type="application/ld+json">${JSON.stringify(buildBreadcrumbSchema(route.breadcrumbs))}</script>`
    );
  }
  if (route.faqSchema) {
    jsonLdScripts.push(
      `<script data-rh="true" type="application/ld+json">${JSON.stringify(route.faqSchema)}</script>`
    );
  }
  if (route.serviceSchema) {
    jsonLdScripts.push(
      `<script data-rh="true" type="application/ld+json">${JSON.stringify(route.serviceSchema)}</script>`
    );
  }
  if (route.isRop) {
    const appSchema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'ROP - Retail Operations Platform',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Android',
      description: 'Offline-first retail billing and inventory management application for Sri Lankan shops.',
      offers: {
        '@type': 'Offer',
        price: '399',
        priceCurrency: 'LKR'
      },
      publisher: {
        '@type': 'Organization',
        name: 'NAXIT',
        url: `${SITE_ORIGIN}/`
      },
      installUrl: 'https://play.google.com/store/apps/details?id=com.naxit.rop'
    };
    jsonLdScripts.push(
      `<script data-rh="true" type="application/ld+json">${JSON.stringify(appSchema)}</script>`
    );
  }

  const seoHeadTags = `\n    ${canonicalTag}\n    ${hreflangTags}\n    ${jsonLdScripts.join('\n    ')}\n`;
  html = html.replace('</head>', `${seoHeadTags}  </head>`);

  // 6. Replace default <noscript> content with dedicated route content (preserving non-JS Google Fonts fallback)
  const faqsHtml = (route.faqs || [])
    .map(
      (f) => `
      <article>
        <h3>${escapeHtml(f.question)}</h3>
        <p>${escapeHtml(f.answer)}</p>
      </article>`
    )
    .join('');

  const whatYouGetHtml = (route.whatYouGet || [])
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('');

  const breadcrumbNavHtml = route.breadcrumbs && route.breadcrumbs.length > 0
    ? `<nav aria-label="Breadcrumb"><ol>${route.breadcrumbs
        .map((b, idx) =>
          idx === route.breadcrumbs.length - 1
            ? `<li aria-current="page">${escapeHtml(b.label)}</li>`
            : `<li><a href="${escapeHtml(b.path)}">${escapeHtml(b.label)}</a></li>`
        )
        .join(' / ')}</ol></nav>`
    : '';

  const mannarRelevanceHtml = (route.pageId === 'ui-ux-design' || route.pageId === 'graphic-design-branding')
    ? `
      <section style="margin-top: 24px; padding: 16px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;">
        <h2>${route.pageId === 'ui-ux-design' ? 'Mannar &amp; Northern Province UI/UX Studio' : 'Mannar &amp; Northern Province Graphic Design Studio'}</h2>
        <p>NAXIT operates directly from our studio at 191, 11 Moor St, Mannar, Northern Province 41000, Sri Lanka. Open 24 hours every day. Phone: +94 75 681 1228.</p>
        <p><a href="/web-development-mannar-jaffna">Visit our Mannar &amp; Jaffna Web Development page</a> | <a href="/contact">Visit our Contact page</a></p>
      </section>`
    : '';

  const portfolioArchiveHtml = route.portfolioList
    ? `<h2>Case Studies</h2><ul>${route.portfolioList
        .map(
          (p) =>
            `<li><a href="/portfolio/${escapeHtml(p.slug)}"><strong>${escapeHtml(p.title)}</strong> (${escapeHtml(p.category)})</a> — ${escapeHtml(p.tagline)}</li>`
        )
        .join('')}</ul>`
    : '';

  const projectDetailHtml = route.projectData
    ? `
      <p><strong>Category:</strong> ${escapeHtml(route.projectData.category)} | <strong>Impact:</strong> ${escapeHtml(route.projectData.impact)}</p>
      <h2>Challenge</h2>
      <p>${escapeHtml(route.projectData.challenge)}</p>
      <h2>Overview</h2>
      <p>${escapeHtml(route.projectData.fullDescription)}</p>
      <h2>Approach</h2>
      <p>${escapeHtml(route.projectData.approach)}</p>
      ${route.projectData.problem ? `<h2>${escapeHtml(route.projectData.problem.title)}</h2><ul>${route.projectData.problem.content.map((c) => `<li>${escapeHtml(c)}</li>`).join('')}</ul>` : ''}
      ${route.projectData.solution ? `<h2>${escapeHtml(route.projectData.solution.title)}</h2><ul>${route.projectData.solution.content.map((c) => `<li>${escapeHtml(c)}</li>`).join('')}</ul>` : ''}
      ${route.projectData.designDecisions ? `<h2>Design Decisions</h2><ul>${route.projectData.designDecisions.map((d) => `<li>${escapeHtml(d)}</li>`).join('')}</ul>` : ''}
      ${route.projectData.resultOutcome ? `<h2>${escapeHtml(route.projectData.resultOutcome.title)}</h2><ul>${route.projectData.resultOutcome.content.map((c) => `<li>${escapeHtml(c)}</li>`).join('')}</ul>` : ''}
    `
    : '';

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
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        ${breadcrumbNavHtml}
        <section>
          <h1>${escapeHtml(route.h1)}</h1>
          <p class="intro">${escapeHtml(route.intro)}</p>
          ${whatYouGetHtml ? `<h2>Key Features &amp; Deliverables</h2><ul>${whatYouGetHtml}</ul>` : ''}
          ${portfolioArchiveHtml}
          ${projectDetailHtml}
          ${faqsHtml ? `<h2>Frequently Asked Questions</h2>${faqsHtml}` : ''}
          ${mannarRelevanceHtml}
          <div style="margin-top: 24px;">
            <a href="${route.ctaUrl || 'https://wa.me/94756811228'}" style="display: inline-block; padding: 12px 24px; background: #0055ff; color: #fff; text-decoration: none; border-radius: 8px; font-weight: bold;">
              ${escapeHtml(route.ctaText || 'Chat on WhatsApp')}
            </a>${route.isRop ? `
            <a href="https://play.google.com/store/apps/details?id=com.naxit.rop" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 12px 24px; background: #14b8a6; color: #000; text-decoration: none; border-radius: 8px; font-weight: bold; margin-left: 12px;">
              Get it on Google Play
            </a>` : ''}
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 NAXIT INC. All rights reserved. Mannar | Sri Lanka</p>
        <nav aria-label="Footer Links">
          <a href="/pricing">Pricing</a> |
          <a href="/contact">Contact</a> |
          <a href="/portfolio">Portfolio</a> |
          <a href="/privacy">Privacy</a> |
          <a href="/terms">Terms</a>
        </nav>
      </footer>
    </noscript>
  `;

  // Replace the main body <noscript> (the last <noscript> in body, leaving the Google Fonts <noscript> in <head> intact)
  const lastNoscriptIdx = html.lastIndexOf('<noscript>');
  const lastNoscriptEnd = html.lastIndexOf('</noscript>');
  if (lastNoscriptIdx !== -1 && lastNoscriptEnd !== -1) {
    html =
      html.slice(0, lastNoscriptIdx) +
      noscriptContent.trim() +
      html.slice(lastNoscriptEnd + '</noscript>'.length);
  }

  const destFile = path.resolve(targetDir, 'index.html');
  fs.writeFileSync(destFile, html, 'utf8');
}

// Update root dist/index.html with canonical and hreflang
let homeHtml = template;
const homeSeoTags = `\n    <link data-rh="true" rel="canonical" href="${SITE_ORIGIN}/" />\n    <link data-rh="true" rel="alternate" hrefLang="en-LK" href="${SITE_ORIGIN}/" />\n    <link data-rh="true" rel="alternate" hrefLang="x-default" href="${SITE_ORIGIN}/" />\n`;
if (!homeHtml.includes('rel="canonical"')) {
  homeHtml = homeHtml.replace('</head>', `${homeSeoTags}  </head>`);
  fs.writeFileSync(baseHtmlPath, homeHtml, 'utf8');
}

console.log(`✓ Successfully prerendered ${routes.length} pages into dist/`);
