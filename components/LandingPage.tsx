
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import LogoCloud from './LogoCloud';
import Services from './Services';
import Process from './Process';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import ProjectDetail from './ProjectDetail';
import NeuralBackground from './NeuralBackground'; // Assuming this is global background
import { Project, Service } from '../types';

const LandingPage: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const navigate = useNavigate();

    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const height = useTransform(scaleY, [0, 1], ["0%", "100%"]);

    // Prevent main scroll when project detail is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto'; // Re-enable scroll when strictly on landing page with no modal
        }
        // Cleanup
        return () => { document.body.style.overflow = 'auto'; };
    }, [selectedProject]);

    return (
        <div className="relative">
            <Navbar onCloseModal={() => setSelectedProject(null)} />

            <main className="relative z-10">
                <motion.div
                    animate={{
                        scale: selectedProject ? 0.95 : 1,
                        filter: selectedProject ? 'blur(10px) brightness(0.5)' : 'blur(0px) brightness(1)',
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <Hero />

                    <div className="relative">
                        <LogoCloud />

                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        <div className="bg-gradient-to-b from-naxit-charcoal via-[#080808] to-naxit-charcoal">
                            <Services onSelectService={(s) => navigate(`/services/${s.slug}`)} />
                            <div className="max-w-7xl mx-auto px-4">
                                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-naxit-cyan/20 to-transparent" />
                            </div>
                            <Process />
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
            </main>

            {/* Vertical Progress Indicator */}
            {!selectedProject && (
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

export default LandingPage;
