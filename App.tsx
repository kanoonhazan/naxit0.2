import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import StaticBackground from './components/StaticBackground';
import { ProjectProvider } from './context/ProjectContext';
import LandingPage from './components/LandingPage';
import { SEO_ROUTES } from './data/seoRoutes';
import { initLeadClickTracking } from './lib/analytics';

// Lazy load subpages & non-critical modules for code splitting
const KeywordServicePage = lazy(() => import('./components/KeywordServicePage'));
const PricingPage = lazy(() => import('./components/PricingPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const ServicePage = lazy(() => import('./components/ServicePage'));
const ProjectPage = lazy(() => import('./components/ProjectPage'));
const PortfolioPage = lazy(() => import('./components/PortfolioPage'));
const PrivacyPage = lazy(() => import('./components/PrivacyPage'));
const TermsPage = lazy(() => import('./components/TermsPage'));
const Admin = lazy(() => import('./components/Admin'));
const NotFound = lazy(() => import('./components/NotFound'));
const DeferredAnalytics = lazy(() =>
  import('@vercel/analytics/react').then((mod) => ({ default: mod.Analytics }))
);

const PageLoader = () => (
  <div className="fixed inset-0 bg-naxit-charcoal flex items-center justify-center z-50" role="status" aria-label="Loading page">
    <div className="w-8 h-8 rounded-full border border-naxit-cyan/20 border-t-naxit-cyan animate-spin" />
  </div>
);

const ScrollToHash: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    let attempts = 0;
    let timerId: number;

    const tryScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const lenis = (window as any).lenis;
        if (lenis) {
          lenis.scrollTo(element, { offset: 0, duration: 1.5 });
        } else {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return;
      }
      if (attempts < 20) {
        attempts += 1;
        timerId = window.setTimeout(tryScroll, 80);
      }
    };

    timerId = window.setTimeout(tryScroll, 50);
    return () => window.clearTimeout(timerId);
  }, [hash]);

  return null;
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    const cleanupClickTracking = initLeadClickTracking();

    let cancelled = false;
    let lenisInstance: any;
    let rafId: number | undefined;

    const initDesktopSmoothScroll = async () => {
      if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
        return;
      }
      try {
        const [{ default: Lenis }] = await Promise.all([
          import('lenis'),
          import('lenis/dist/lenis.css'),
        ]);
        if (cancelled) return;
        lenisInstance = new Lenis({
          lerp: 0.08,
          duration: 1.5,
          smoothWheel: true,
          wheelMultiplier: 1.0,
          touchMultiplier: 1.8,
          infinite: false,
        });
        (window as any).lenis = lenisInstance;

        const raf = (time: number) => {
          lenisInstance.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      } catch {
        // Native scrolling fallback if dynamic import fails
      }
    };

    const scheduleIdle = () => {
      const host = window.location.hostname;
      if (host !== 'localhost' && host !== '127.0.0.1') {
        setShowAnalytics(true);
      }
      initDesktopSmoothScroll();
    };

    let idleHandle: number;
    const win = window as any;
    if (typeof win.requestIdleCallback === 'function') {
      idleHandle = win.requestIdleCallback(scheduleIdle, { timeout: 2000 });
    } else {
      idleHandle = window.setTimeout(scheduleIdle, 1200);
    }

    return () => {
      cleanupClickTracking();
      cancelled = true;
      if (typeof win.cancelIdleCallback === 'function') {
        win.cancelIdleCallback(idleHandle);
      } else {
        window.clearTimeout(idleHandle);
      }
      if (rafId !== undefined) cancelAnimationFrame(rafId);
      if (lenisInstance) lenisInstance.destroy();
      (window as any).lenis = undefined;
    };
  }, []);

  const currentCanonical = `https://www.naxitofficial.de${location.pathname === '/' ? '/' : location.pathname}`;

  return (
    <div className="relative min-h-screen selection:bg-naxit-cyan selection:text-naxit-charcoal overflow-x-hidden">
      <Helmet>
        <html lang="en-LK" />
        <link rel="canonical" href={currentCanonical} />
      </Helmet>
      <ScrollToHash />
      <StaticBackground />
      <ProjectProvider>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* 6 Target Keyword Services in 3 Languages (EN, TA, SI) */}
            {SEO_ROUTES.map((page) => (
              <React.Fragment key={page.id}>
                {/* English URL (Default) */}
                <Route path={`/${page.slug}`} element={<KeywordServicePage pageId={page.id} lang="en" />} />
                {page.aliases.map((alias) => (
                  <React.Fragment key={`en-${alias}`}>
                    <Route path={`/${alias}`} element={<KeywordServicePage pageId={page.id} lang="en" />} />
                  </React.Fragment>
                ))}

                {/* Tamil URL (/ta/) */}
                <Route path={`/ta/${page.slug}`} element={<KeywordServicePage pageId={page.id} lang="ta" />} />
                {page.aliases.map((alias) => (
                  <React.Fragment key={`ta-${alias}`}>
                    <Route path={`/ta/${alias}`} element={<KeywordServicePage pageId={page.id} lang="ta" />} />
                  </React.Fragment>
                ))}

                {/* Sinhala URL (/si/) */}
                <Route path={`/si/${page.slug}`} element={<KeywordServicePage pageId={page.id} lang="si" />} />
                {page.aliases.map((alias) => (
                  <React.Fragment key={`si-${alias}`}>
                    <Route path={`/si/${alias}`} element={<KeywordServicePage pageId={page.id} lang="si" />} />
                  </React.Fragment>
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
        </Suspense>
      </ProjectProvider>
      {showAnalytics && (
        <Suspense fallback={null}>
          <DeferredAnalytics />
        </Suspense>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
