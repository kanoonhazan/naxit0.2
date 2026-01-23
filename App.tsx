import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';

import Preloader from './components/Preloader';
import NeuralBackground from './components/NeuralBackground';
import { ProjectProvider } from './context/ProjectContext';

// Lazy load components for code splitting
const LandingPage = lazy(() => import('./components/LandingPage'));
const ServicePage = lazy(() => import('./components/ServicePage'));
const ProjectPage = lazy(() => import('./components/ProjectPage'));
const PortfolioPage = lazy(() => import('./components/PortfolioPage'));
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

const AppContent: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Smoother Lenis configuration
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-naxit-charcoal min-h-screen selection:bg-naxit-cyan selection:text-naxit-charcoal overflow-x-hidden">
      <Helmet>
        <html lang="en-LK" />
      </Helmet>
      <NeuralBackground />
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
                <Route path="/services/:slug" element={<ServicePage />} />
                <Route path="/portfolio/:slug" element={<ProjectPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
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

  const handlePreloaderComplete = () => {
    try {
      sessionStorage.setItem('hasVisited', 'true');
    } catch (e) { }
    setLoading(false);
  };

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
