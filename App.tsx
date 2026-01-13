
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import Services from './components/Services';
import Process from './components/Process';
import Matrix from './components/Matrix';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import ServiceDetail from './components/ServiceDetail';
import NeuralBackground from './components/NeuralBackground';

import Preloader from './components/Preloader';
import { Project, Service } from './types';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(!sessionStorage.getItem('hasVisited'));

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

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const height = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  // Prevent main scroll when detail view is open (only for project modal, not service page)
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  const handlePreloaderComplete = () => {
    try {
      sessionStorage.setItem('hasVisited', 'true');
    } catch (e) {
      // Ignore storage errors
    }
    setLoading(false);
  };

  return (
    <div className="relative selection:bg-naxit-cyan selection:text-naxit-charcoal bg-naxit-charcoal">
      <AnimatePresence>
        {loading && <Preloader key="loader" onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      <NeuralBackground />
      <Navbar onCloseModal={() => setSelectedProject(null)} />

      <main className="relative z-10">
        <motion.div
          animate={{
            scale: selectedProject ? 0.95 : 1,
            filter: selectedProject ? 'blur(10px) brightness(0.5)' : 'blur(0px) brightness(1)',
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
          style={{ display: selectedService ? 'none' : 'block' }}
        >
          <Hero />

          <div className="relative">
            <LogoCloud />

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="bg-gradient-to-b from-naxit-charcoal via-[#080808] to-naxit-charcoal">
              <Services onSelectService={(s) => setSelectedService(s)} />
              <div className="max-w-7xl mx-auto px-4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-naxit-cyan/20 to-transparent" />
              </div>
              <Process />
              <div className="max-w-7xl mx-auto px-4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-naxit-cyan/20 to-transparent" />
              </div>
              <Matrix />
              <div className="max-w-7xl mx-auto px-4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-naxit-cyan/20 to-transparent" />
              </div>
              <Portfolio onSelectProject={(p) => setSelectedProject(p)} />
              <div className="max-w-7xl mx-auto px-4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
              <Contact />
              <Footer onCloseModal={() => setSelectedProject(null)} />
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectDetail
              key="detail"
              project={selectedProject}
              onBack={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedService && (
            <ServiceDetail
              key="service-detail"
              service={selectedService}
              onBack={() => setSelectedService(null)}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Vertical Progress Indicator */}
      {!selectedProject && !selectedService && !loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed right-10 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col items-center gap-8"
        >
          <div className="text-[10px] font-mono text-gray-600 rotate-90 tracking-[0.4em] mb-4">JOURNEY</div>
          <div className="w-[1px] h-32 bg-white/5 relative">
            <motion.div
              className="absolute top-0 left-0 w-full bg-naxit-cyan shadow-[0_0_8px_#00d4ff]"
              style={{ height }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default App;
