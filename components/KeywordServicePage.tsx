import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, MessageSquare, Phone, MapPin, ArrowRight, Clock, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO_PAGES, SeoPageData, Language } from '../data/seoPages';
import LanguageSwitcher from './LanguageSwitcher';
import Breadcrumbs from './Breadcrumbs';

interface KeywordServicePageProps {
  pageData?: SeoPageData;
  pageId?: string;
  lang: Language;
}

export const KeywordServicePage: React.FC<KeywordServicePageProps> = ({ pageData: propPageData, pageId, lang }) => {
  const pageData = propPageData || SEO_PAGES.find(p => p.id === pageId) || SEO_PAGES[0];
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const data = pageData[lang];

  const canonicalUrl = lang === 'en'
    ? `https://www.naxitofficial.de/${pageData.slug}`
    : `https://www.naxitofficial.de/${lang}/${pageData.slug}`;

  const enUrl = `https://www.naxitofficial.de/${pageData.slug}`;
  const taUrl = `https://www.naxitofficial.de/ta/${pageData.slug}`;
  const siUrl = `https://www.naxitofficial.de/si/${pageData.slug}`;

  // WhatsApp click handler
  const whatsappText = encodeURIComponent(`Hi NAXIT, I am interested in ${pageData.en.h1}. Can you provide more details?`);
  const whatsappUrl = `https://wa.me/94756811228?text=${whatsappText}`;

  // Other 5 services for internal linking
  const otherPages = SEO_PAGES.filter(p => p.id !== pageData.id);

  // Schema: FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  };

  // Schema: Service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.h1,
    description: data.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'NAXIT',
      telephone: '+94756811228',
      url: 'https://www.naxitofficial.de/',
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
  };

  const appSchema = pageData.isRop ? {
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
      url: 'https://www.naxitofficial.de/'
    },
    installUrl: 'https://play.google.com/store/apps/details?id=com.naxit.rop'
  } : null;

  return (
    <div className="min-h-screen bg-naxit-charcoal text-white relative selection:bg-naxit-cyan selection:text-naxit-charcoal">
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* hreflang tags for internationalization */}
        <link rel="alternate" hrefLang="en" href={enUrl} />
        <link rel="alternate" hrefLang="ta" href={taUrl} />
        <link rel="alternate" hrefLang="si" href={siUrl} />
        <link rel="alternate" hrefLang="x-default" href={enUrl} />

        <html lang={lang === 'en' ? 'en-LK' : lang} />

        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.naxitofficial.de/assets/og-image.png" />

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        {appSchema && <script type="application/ld+json">{JSON.stringify(appSchema)}</script>}
      </Helmet>

      {/* Top Navbar Header */}
      <header className="sticky top-0 z-50 glass backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 group" aria-label="NAXIT Home">
            <picture>
              <source srcSet="/assets/logo.webp" type="image/webp" />
              <img
                src="/assets/logo.png"
                width={150}
                height={78}
                alt="NAXIT Logo"
                className="h-7 w-auto transition-opacity group-hover:opacity-80"
              />
            </picture>
          </Link>

          <div className="flex items-center gap-6">
            <LanguageSwitcher slug={pageData.slug} currentLang={lang} />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 bg-naxit-royal hover:bg-naxit-cyan hover:text-black text-white text-xs font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,85,255,0.3)]"
            >
              <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
              <span>WhatsApp Quote</span>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 px-4 py-12 md:py-20 max-w-7xl mx-auto">
        <Breadcrumbs
          items={[
            { label: 'Services', path: '/#services' },
            { label: data.breadcrumbLabel || data.h1, path: lang === 'en' ? `/${pageData.slug}` : `/${lang}/${pageData.slug}` }
          ]}
        />

        {/* Hero Section */}
        <section className="mb-20 pt-6" data-track-location="hero">
          <div className="max-w-4xl">
            {data.badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full border border-naxit-cyan/30 text-naxit-cyan font-mono text-[11px] uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{data.badge}</span>
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.1] mb-6">
              {data.h1}
            </h1>

            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-8">
              {data.intro}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-naxit-cyan transition-all duration-300 shadow-[0_10px_30px_rgba(0,212,255,0.25)] hover:shadow-[0_15px_40px_rgba(0,212,255,0.4)] transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5 text-black" aria-hidden="true" />
                <span>{data.ctaButtonText}</span>
              </a>

              {pageData.isRop && (
                <a
                  href="https://play.google.com/store/apps/details?id=com.naxit.rop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-4 bg-naxit-royal hover:bg-naxit-cyan hover:text-black text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_10px_25px_rgba(0,85,255,0.3)] transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <svg
                    className="w-5 h-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M3.61 1.814L13.793 12 3.61 22.186a1.75 1.75 0 0 1-.61-1.335V3.149c0-.517.224-.993.61-1.335zm10.89 10.893l2.637 2.637-9.89 5.66 7.253-8.297zm3.438-3.438l2.742 1.569c.887.508.887 1.816 0 2.324l-2.742 1.569-2.838-2.731 2.838-2.731zM7.247 3l9.89 5.66-2.637 2.637L7.247 3z" />
                  </svg>
                  <span>Get it on Google Play</span>
                </a>
              )}

              <a
                href="tel:+94756811228"
                className="inline-flex items-center gap-2 px-6 py-4 glass text-white font-medium rounded-2xl border border-white/10 hover:border-naxit-cyan/30 hover:bg-white/5 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-naxit-cyan" aria-hidden="true" />
                <span>Call +94 75 681 1228</span>
              </a>
            </div>
          </div>
        </section>

        {/* Feature Grid: What you get */}
        <section className="mb-20">
          <div className="mb-10">
            <span className="text-naxit-cyan font-mono text-xs uppercase tracking-[0.3em]">
              {data.whatYouGetKicker || 'Deliverables'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mt-2">
              {data.whatYouGetTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whatYouGet.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-3xl border border-white/5 hover:border-naxit-cyan/30 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-xl glass border border-naxit-cyan/30 flex items-center justify-center shrink-0 text-naxit-cyan mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Optional: Who we build for & How it works */}
        {(data.whoWeBuildFor || (data.howItWorks && data.howItWorks.length > 0)) && (
          <section className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {data.whoWeBuildFor && (
              <div className={`${data.howItWorks && data.howItWorks.length > 0 ? 'lg:col-span-5' : 'lg:col-span-12 max-w-4xl'} glass p-8 rounded-3xl border border-white/5 space-y-4`}>
                <span className="text-naxit-cyan font-mono text-xs uppercase tracking-[0.3em]">
                  {data.whoWeBuildForTitle || 'Target Audience'}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  {data.whoWeBuildForHeading || 'Built for Local Trade & Enterprises'}
                </h3>
                {data.whoWeBuildFor.split('\n\n').map((para, pIdx) => (
                  <p key={pIdx} className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            )}

            {data.howItWorks && data.howItWorks.length > 0 && (
              <div className={`glass p-8 rounded-3xl border border-white/5 space-y-6 ${data.whoWeBuildFor ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
                <div>
                  <span className="text-naxit-cyan font-mono text-xs uppercase tracking-[0.3em]">Implementation</span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                    {data.howItWorksTitle || 'How it works'}
                  </h3>
                </div>
                <ol className="space-y-4 list-none p-0 m-0">
                  {data.howItWorks.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-4">
                      <span className="w-7 h-7 rounded-lg glass border border-white/10 text-naxit-cyan font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        0{sIdx + 1}
                      </span>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </section>
        )}

        {/* Pricing & Value Card */}
        {data.pricingHighlight && (
          <section className="mb-20" data-track-location="cta">
            <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-naxit-cyan/20 relative overflow-hidden bg-gradient-to-br from-white/[0.03] to-naxit-royal/[0.05]">
              <div className="max-w-3xl space-y-4">
                <div className="flex items-center gap-2 text-naxit-cyan text-xs font-mono uppercase tracking-widest">
                  <Clock className="w-4 h-4" />
                  <span>{data.pricingHighlightTitle || 'Guaranteed Turnaround'}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {data.pricingHighlight}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  All work carries direct WhatsApp milestones, fixed scope agreements, and zero unexpected charges.
                </p>
                <div className="pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-naxit-royal hover:bg-naxit-cyan hover:text-black text-white text-sm font-bold rounded-xl transition-all shadow-lg"
                  >
                    <span>Request Fixed Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Mannar Map Embed if Page C */}
        {pageData.isMannar && (
          <section className="mb-20 glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-6">
            <div>
              <span className="text-naxit-cyan font-mono text-xs uppercase tracking-[0.3em]">Local Headquarters</span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mt-1">
                Visit or Contact Us in Mannar
              </h2>
              <p className="text-gray-300 text-sm md:text-base mt-2">
                191, 11 Moor St, Mannar, Northern Province 41000, Sri Lanka. Serving Mannar, Jaffna, Vavuniya, and island-wide.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 h-72 rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  title="NAXIT Mannar Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8828277240355!2d79.9118736!3d8.9829285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afdd9e633c0c94b%3A0x2f2a54bcb84897b9!2sNAXIT!5e0!3m2!1sen!2slk!4v1768412728561!5m2!1sen!2slk"
                  className="w-full h-full border-0 grayscale invert opacity-70 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="glass p-6 rounded-2xl border border-white/5 flex flex-col justify-between space-y-4 text-sm text-gray-300">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-naxit-cyan shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Office Address</div>
                      <p className="text-xs text-gray-400">191, 11 Moor St, Mannar 41000, Northern Province, Sri Lanka</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-naxit-cyan shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Direct Line</div>
                      <p className="text-xs text-gray-400">+94 75 681 1228</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-naxit-cyan shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Opening Hours</div>
                      <p className="text-xs text-gray-400">Open 24 hours every day</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://share.google/kLF8l3VpKfylUEVqX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl glass border border-white/10 hover:border-naxit-cyan/30 text-white font-medium text-xs transition-colors"
                >
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span>View Verified Google Profile</span>
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Mannar Service Relevance Section for UI/UX & Graphic Design (Section 6) */}
        {(pageId === 'ui-ux-design' || pageId === 'graphic-design-branding') && (
          <section className="mb-20 glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-2xl">
                <span className="text-naxit-cyan font-mono text-xs uppercase tracking-[0.3em]">
                  {lang === 'ta' ? 'உள்ளூர் நிபுணத்துவம் • மன்னார்' : lang === 'si' ? 'දේශීය ප්‍රවීණතාවය • මන්නාරම' : 'Local Studio Relevance • Mannar'}
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mt-1">
                  {pageId === 'ui-ux-design'
                    ? (lang === 'ta' ? 'மன்னாரில் UI/UX வடிவமைப்பு சேவைகள்' : lang === 'si' ? 'මන්නාරමේ UI/UX සැලසුම් සේවා' : 'UI/UX Design in Mannar & Regional Sri Lanka')
                    : (lang === 'ta' ? 'மன்னாரில் கிராபிக் டிசைன் & பிராண்டிங்' : lang === 'si' ? 'මන්නාරමේ ග්‍රැෆික් නිර්මාණ සහ බ්‍රෑන්ඩින්' : 'Graphic Design & Brand Identity in Mannar')}
                </h2>
                <p className="text-gray-300 text-sm md:text-base mt-2 leading-relaxed">
                  {pageId === 'ui-ux-design'
                    ? (lang === 'ta'
                        ? 'NAXIT இன் முதன்மை வடிவமைப்பு ஸ்டுடியோ மன்னார் 191, 11 மூர் வீதியில் அமைந்துள்ளது. பயனர் flows, wireframes, Figma prototypes மற்றும் மொபைல்/வலைத்தள இடைமுகங்களை நாங்கள் நேரில் கலந்துரையாடி உருவாக்குகிறோம்.'
                        : lang === 'si'
                        ? 'NAXIT හි ප්‍රධාන නිර්මාණ මැදිරිය මන්නාරම 191, 11 මූර් වීදියේ පිහිටා ඇත. පරිශීලක flows, wireframes, Figma prototypes සහ ජංගම/වෙබ් අතුරුමුහුණත් අපි සෘජුව නිර්මාණය කරමු.'
                        : 'NAXIT operates directly from our studio at 191, 11 Moor St, Mannar. We design intuitive user flows, clear wireframes, interactive Figma prototypes, and production-ready mobile and web interfaces with direct local communication.')
                    : (lang === 'ta'
                        ? 'மன்னார் 191, 11 மூர் வீதியில் உள்ள எங்கள் ஸ்டுடியோவிலிருந்து லோகோக்கள், விசிட்டிங் கார்டுகள், துண்டுப் பிரசுரங்கள் மற்றும் சமூக ஊடக பிராண்டிங் தொகுப்புகளை விரைவாக வழங்குகிறோம்.'
                        : lang === 'si'
                        ? 'මන්නාරම 191, 11 මූර් වීදියේ පිහිටි අපගේ මැදිරියෙන් ලාංඡන, ව්‍යාපාරික කාඩ්පත්, පත්‍රිකා සහ සමාජ මාධ්‍ය බ්‍රෑන්ඩින් පැකේජ කඩිනමින් නිර්මාණය කර දෙනු ලැබේ.'
                        : 'From our studio at 191, 11 Moor St, Mannar, NAXIT crafts memorable logos, complete brand kits, business cards, flyers, and digital marketing graphics tailored to local businesses.')}
                </p>
              </div>

              <Link
                to="/web-development-mannar-jaffna"
                className="inline-flex items-center gap-2 text-xs font-mono text-naxit-cyan hover:underline shrink-0"
              >
                <span>{lang === 'ta' ? 'மன்னார் வெப் டெவலப்மென்ட் காண்க' : lang === 'si' ? 'මන්නාරම වෙබ් සංවර්ධනය බලන්න' : 'Explore Mannar & Jaffna Web Dev'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Approved Case Study Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
              {pageId === 'ui-ux-design' ? (
                <>
                  <Link
                    to="/portfolio/yumdrop-food-delivery-ux"
                    className="glass p-6 rounded-2xl border border-white/5 hover:border-naxit-cyan/30 transition-all group block"
                  >
                    <div className="text-[10px] font-mono text-naxit-cyan uppercase tracking-widest mb-1">Approved Case Study</div>
                    <div className="text-white font-bold text-lg group-hover:text-naxit-cyan transition-colors flex items-center justify-between">
                      <span>YumDrop Food Delivery UX</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      Complete UX research, user journey mapping, and interactive Figma prototypes simplifying order placement and live delivery tracking.
                    </p>
                  </Link>

                  <Link
                    to="/portfolio/eduaid-bridge-platform"
                    className="glass p-6 rounded-2xl border border-white/5 hover:border-naxit-cyan/30 transition-all group block"
                  >
                    <div className="text-[10px] font-mono text-naxit-cyan uppercase tracking-widest mb-1">Approved Case Study</div>
                    <div className="text-white font-bold text-lg group-hover:text-naxit-cyan transition-colors flex items-center justify-between">
                      <span>EduAid Bridge Community UX</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      Cross-platform UX concept with accessibility-first design, donor-student dashboards, and intuitive wireframed flows.
                    </p>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/portfolio/tee-rex-brand-logo"
                    className="glass p-6 rounded-2xl border border-white/5 hover:border-naxit-cyan/30 transition-all group block"
                  >
                    <div className="text-[10px] font-mono text-naxit-cyan uppercase tracking-widest mb-1">Approved Case Study</div>
                    <div className="text-white font-bold text-lg group-hover:text-naxit-cyan transition-colors flex items-center justify-between">
                      <span>Tee-Rex Apparel Brand Identity</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      Full vector brand identity suite, typography hierarchy, and versatile garment logo placement guidelines.
                    </p>
                  </Link>

                  <Link
                    to="/portfolio/local-brand-logo-design"
                    className="glass p-6 rounded-2xl border border-white/5 hover:border-naxit-cyan/30 transition-all group block"
                  >
                    <div className="text-[10px] font-mono text-naxit-cyan uppercase tracking-widest mb-1">Approved Case Study</div>
                    <div className="text-white font-bold text-lg group-hover:text-naxit-cyan transition-colors flex items-center justify-between">
                      <span>Local Brand Identity &amp; Logo</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      High-contrast local business brand mark, print-ready business cards, and social media digital asset kits.
                    </p>
                  </Link>
                </>
              )}
            </div>

            {/* Local Studio Contact Strip */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-naxit-cyan shrink-0" />
                <span>191, 11 Moor St, Mannar, 41000 • Open 24 hours every day</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="tel:+94756811228" className="hover:text-white flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-naxit-cyan" />
                  <span>+94 75 681 1228</span>
                </a>
                <Link to="/contact" className="text-naxit-cyan hover:underline font-bold">
                  {lang === 'ta' ? 'தொடர்பு பக்கம்' : lang === 'si' ? 'සම්බන්ධතා පිටුව' : 'View Contact Page'} &rarr;
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Accordion */}
        <section className="mb-20">
          <div className="mb-10 max-w-2xl">
            <span className="text-naxit-cyan font-mono text-xs uppercase tracking-[0.3em]">Common Queries</span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {data.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="glass rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
                >
                  <h3 className="text-base sm:text-lg font-display font-bold text-white">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02]"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span className={`w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-naxit-cyan' : 'text-gray-300'}`} aria-hidden="true">
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-gray-300 text-sm md:text-base leading-relaxed border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Explore Other Services Grid (Section 5 requirement) */}
        <section className="mb-20 pt-10 border-t border-white/10">
          <div className="mb-8">
            <span className="text-naxit-cyan font-mono text-xs uppercase tracking-[0.3em]">Discover More</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
              Other Digital Services by NAXIT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPages.map((other) => {
              const otherUrl = lang === 'en' ? `/${other.slug}` : `/${lang}/${other.slug}`;
              const otherData = other[lang];
              return (
                <Link
                  key={other.id}
                  to={otherUrl}
                  className="glass p-6 rounded-3xl border border-white/5 hover:border-naxit-cyan/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-naxit-cyan uppercase tracking-widest block mb-2">
                      {other.category}
                    </span>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-naxit-cyan transition-colors mb-2">
                      {otherData.h1}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-2">
                      {otherData.intro}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-naxit-cyan mt-4">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA Block */}
        <section data-track-location="cta" className="glass p-8 md:p-14 rounded-[3rem] border border-white/10 text-center relative overflow-hidden bg-gradient-to-b from-white/[0.02] to-naxit-cyan/[0.05]">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="inline-block text-naxit-cyan font-mono text-xs uppercase tracking-widest">
              Ready to grow your business?
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Get Started with NAXIT Today
            </h2>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
              Message us on WhatsApp with what you need. We confirm the price before starting and share drafts for your review.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-naxit-cyan transition-all duration-300 shadow-xl"
              >
                Chat on WhatsApp (+94 75 681 1228)
              </a>
              <Link
                to="/#contact"
                className="w-full sm:w-auto px-8 py-4 glass text-white font-medium rounded-2xl border border-white/10 hover:border-naxit-cyan/30 transition-all duration-300"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-4 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 NAXIT. All rights reserved. Mannar, Sri Lanka.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KeywordServicePage;

