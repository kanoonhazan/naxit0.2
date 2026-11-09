
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Hero from './Hero';
import LogoCloud from './LogoCloud';
import About from './About';
import Services from './Services';
import Process from './Process';
import Pricing from './Pricing';
import Insights from './Insights';
import Portfolio from './Portfolio';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';



const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const height = useTransform(scaleY, [0, 1], ["0%", "100%"]);



    return (
        <div className="relative">
            <Helmet>
                <title>Naxit | Best Web Design & Digital Agency in Sri Lanka</title>
                <meta name="description" content="NAXIT is a web design & digital agency in Sri Lanka. We build websites, UI/UX and brand identity that help local businesses get found and grow." />
                <link rel="canonical" href="https://www.naxitofficial.de/" />
            </Helmet>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-naxit-royal focus:text-white focus:rounded-xl focus:shadow-2xl focus:outline-none"
            >
                Skip to main content
            </a>
            <Navbar onCloseModal={() => { }} />

            <main id="main-content" className="relative z-10">
                <motion.div
                    className="relative"
                >
                    <Hero />

                    <div className="relative">
                        <LogoCloud />

                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        <div className="bg-transparent">
                            <About />
                            <div className="max-w-7xl mx-auto px-4">
                                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-naxit-cyan/20 to-transparent" />
                            </div>

                            <Services />
                            <div className="max-w-7xl mx-auto px-4">
                                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-naxit-cyan/20 to-transparent" />
                            </div>

                            <Process />
                            <div className="max-w-7xl mx-auto px-4">
                                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-naxit-cyan/20 to-transparent" />
                            </div>

                            <Pricing />
                            <div className="max-w-7xl mx-auto px-4">
                                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-naxit-cyan/20 to-transparent" />
                            </div>

                            <Insights />
                            <div className="max-w-7xl mx-auto px-4">
                                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-naxit-cyan/20 to-transparent" />
                            </div>

                            <Portfolio onSelectProject={(p) => navigate(`/portfolio/${p.slug}`)} />
                            <div className="max-w-7xl mx-auto px-4">
                                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                            </div>

                            <FAQ />
                            <div className="max-w-7xl mx-auto px-4">
                                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-naxit-cyan/20 to-transparent" />
                            </div>

                            <Contact />
                            <Footer onCloseModal={() => { }} />
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Vertical Progress Indicator */}
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
        </div>
    );
};

export default LandingPage;
