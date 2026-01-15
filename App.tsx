
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Helmet } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';

import Preloader from './components/Preloader';
import NeuralBackground from './components/NeuralBackground';
import LandingPage from './components/LandingPage';
import ServicePage from './components/ServicePage';

const AppContent: React.FC = () => {
  useEffect(() => {
    console.log("NAXIT - Natives Empower Innovation. System Online.");

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative selection:bg-naxit-cyan selection:text-naxit-charcoal bg-naxit-charcoal min-h-screen">
      <Helmet>
        <html lang="en-LK" />
      </Helmet>
      <NeuralBackground />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
      <Analytics />
    </div>
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
