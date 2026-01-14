
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Mouse Parallax for orbs
  const mouseX = useSpring(0, { damping: 50 });
  const mouseY = useSpring(0, { damping: 50 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 40);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const titleWords = "The Digital Engine for Local Business.".split(" ");

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-28">
      {/* Dynamic Background Orbs */}
      <motion.div
        style={{ y: y1, x: mouseX }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-naxit-royal/10 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollY, [0, 500], [0, -150]), x: useTransform(mouseX, x => x * -1.5) }}
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-naxit-cyan/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 text-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, letterSpacing: '1em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block text-naxit-cyan font-display text-sm md:text-base uppercase mb-6"
        >
          Intelligence Unleashed
        </motion.div>

        <h1 className="text-6xl md:text-[8rem] font-display font-extrabold leading-[1.1] mb-6 tracking-tighter text-white overflow-hidden">
          {titleWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-4">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`inline-block ${i === 2 ? 'text-gradient' : ''}`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-1xl text-gray-400 font-light max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          Crafting high-end digital experiences where Gen-AI intuition meets world-class engineering. We turn local vision into global powerhouses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-10 py-5 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95">
            <span className="relative z-10">Launch Your Vision</span>
            <div className="absolute inset-0 bg-naxit-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </button>
          <button className="px-10 py-5 glass rounded-2xl font-medium border border-white/10 hover:border-naxit-cyan/30 transition-all hover:bg-white/5">
            Explore Expertise
          </button>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >

        <div className="w-[1px] h-12 bg-gradient-to-b from-naxit-cyan via-white/10 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
