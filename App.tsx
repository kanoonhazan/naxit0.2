import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Helmet } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';

import Preloader from './components/Preloader';
import StaticBackground from './components/StaticBackground';
import { ProjectProvider } from './context/ProjectContext';

import LandingPage from './components/LandingPage';
import KeywordServicePage from './components/KeywordServicePage';
import { SEO_PAGES } from './data/seoPages';
import Pricing from './components/Pricing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load subpages for code splitting
const ServicePage = lazy(() => import('./components/ServicePage'));
const ProjectPage = lazy(() => import('./components/ProjectPage'));
const PortfolioPage = lazy(() => import('./components/PortfolioPage'));
const PrivacyPage = lazy(() => import('./components/PrivacyPage'));
const TermsPage = lazy(() => import('./components/TermsPage'));
const Admin = lazy(() => import('./components/Admin'));
const NotFound = lazy(() => import('./components/NotFound'));

// Loading fallback for Suspense - refined for high performance
const PageLoader = () => (
  <div className="fixed inset-0 bg-naxit-charcoal flex items-center justify-center z-50">
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="w-8 h-8 rounded-full border border-naxit-cyan/20 border-t-naxit-cyan"
    />
  </div>
);

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-naxit-charcoal text-white selection:bg-naxit-cyan selection:text-naxit-charcoal">
      <Helmet>
        <title>Pricing & Packages Sri Lanka | Web & Software Rates | NAXIT</title>
        <meta name="description" content="Transparent price list for web design, branding, graphic design, and retail software in Sri Lanka. Fast delivery, fair prices." />
        <link rel="canonical" href="https://www.naxitofficial.de/pricing" />
      </Helmet>
      <Navbar onCloseModal={() => {}} />
      <main className="pt-24 pb-12">
        <Pricing />
      </main>
      <Footer onCloseModal={() => {}} />
    </div>
  );
};

const ScrollToHash: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const lenis = (window as any).lenis;
          if (lenis) {
            lenis.scrollTo(element, { offset: 0, duration: 1.5 });
          } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, [hash]);

  return null;
};

const AppContent: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Smoother Lenis configuration
    const lenis = new Lenis({
      lerp: 0.08, // Slightly slower for more "weight" and smoothness
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8, // Slightly more responsive on touch
      infinite: false,
    });

    // Expose lenis to window for global access (like in Navbar/ScrollToHash)
    (window as any).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      (window as any).lenis = undefined;
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-naxit-cyan selection:text-naxit-charcoal overflow-x-hidden">
      <Helmet>
        <html lang="en-LK" />
      </Helmet>
      <ScrollToHash />
      <StaticBackground />
      <ProjectProvider>
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'linear' }}
            >
              <Routes location={location}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/pricing" element={<PricingPage />} />

                {/* 6 Target Keyword Services in 3 Languages (EN, TA, SI) */}
                {SEO_PAGES.map((page) => (
                  <React.Fragment key={page.id}>
                    {/* English URL (Default) */}
                    <Route path={`/${page.slug}`} element={<KeywordServicePage pageData={page} lang="en" />} />
                    {page.aliases.map((alias) => (
                      <Route key={`en-${alias}`} path={`/${alias}`} element={<KeywordServicePage pageData={page} lang="en" />} />
                    ))}

                    {/* Tamil URL (/ta/) */}
                    <Route path={`/ta/${page.slug}`} element={<KeywordServicePage pageData={page} lang="ta" />} />
                    {page.aliases.map((alias) => (
                      <Route key={`ta-${alias}`} path={`/ta/${alias}`} element={<KeywordServicePage pageData={page} lang="ta" />} />
                    ))}

                    {/* Sinhala URL (/si/) */}
                    <Route path={`/si/${page.slug}`} element={<KeywordServicePage pageData={page} lang="si" />} />
                    {page.aliases.map((alias) => (
                      <Route key={`si-${alias}`} path={`/si/${alias}`} element={<KeywordServicePage pageData={page} lang="si" />} />
                    ))}
                  </React.Fragment>
                ))}

                <Route path="/services/:slug" element={<ServicePage />} />
                <Route path="/portfolio/:slug" element={<ProjectPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/terms-of-service" element={<TermsPage />} />
                <Route path="/agb" element={<TermsPage />} />
                <Route path="/nutzungsbedingungen" element={<TermsPage />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </ProjectProvider>
      <Analytics />
    </div>
  );
};

const App: React.FC = () => {
  // Logic: Only show the intensive preloader on the home page for FIRST visit.
  // Direct links to projects/services skip the visual preloader for "speed first" experience.
  const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html';
  const hasVisited = sessionStorage.getItem('hasVisited');

  const [loading, setLoading] = useState(!hasVisited && isHome);

  const handlePreloaderComplete = React.useCallback(() => {
    try {
      sessionStorage.setItem('hasVisited', 'true');
    } catch (e) { }
    setLoading(false);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader key="loader" onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>
      {!loading && <AppContent />}
    </Router>
  );
};

export default App;
