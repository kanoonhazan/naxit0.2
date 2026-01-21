import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Helmet } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';

import Preloader from './components/Preloader';
import NeuralBackground from './components/NeuralBackground';
import LandingPage from './components/LandingPage';
import ServicePage from './components/ServicePage';
import ProjectPage from './components/ProjectPage';
import PortfolioPage from './components/PortfolioPage';
import Admin from './components/Admin';
import NotFound from './components/NotFound';
import { ProjectProvider } from './context/ProjectContext';

const AppContent: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("NAXIT - Natives Empower Innovation. System Online.");

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
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
        <AnimatePresence mode="wait">
          <div key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={
                <PageWrapper>
                  <LandingPage />
                </PageWrapper>
              } />
              <Route path="/services/:slug" element={
                <PageWrapper>
                  <ServicePage />
                </PageWrapper>
              } />
              <Route path="/portfolio/:slug" element={
                <PageWrapper>
                  <ProjectPage />
                </PageWrapper>
              } />
              <Route path="/portfolio" element={
                <PageWrapper>
                  <PortfolioPage />
                </PageWrapper>
              } />
              <Route path="/admin" element={
                <PageWrapper>
                  <Admin />
                </PageWrapper>
              } />
              <Route path="*" element={
                <PageWrapper>
                  <NotFound />
                </PageWrapper>
              } />
            </Routes>
          </div>
        </AnimatePresence>
      </ProjectProvider>
      <Analytics />
    </div>
  );
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(!sessionStorage.getItem('hasVisited'));

  const handlePreloaderComplete = () => {
    try {
      sessionStorage.setItem('hasVisited', 'true');
    } catch (e) {
      // Ignore storage errors
    }
    setLoading(false);
  };

  return (
    <Router>
      <AnimatePresence>
        {loading && <Preloader key="loader" onComplete={handlePreloaderComplete} />}
      </AnimatePresence>
      {!loading && <AppContent />}
    </Router>
  );
};

export default App;
