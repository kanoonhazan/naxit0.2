
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);



  const titleWords = "The Digital Engine for Local Business.".split(" ");

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-28">
      {/* Subtle Static Background Orbs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-naxit-royal/10 rounded-full blur-[140px] pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        style={{ y: useTransform(scrollY, [0, 500], [0, -150]) }}
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-naxit-cyan/5 rounded-full blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.07, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="relative z-10 text-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, letterSpacing: '1em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block text-naxit-cyan font-display text-sm md:text-base uppercase mb-6 gpu-accel"
        >
          Intelligence Unleashed
        </motion.div>

        <h1 className="text-6xl md:text-[8rem] font-display font-extrabold leading-[1.1] mb-6 tracking-tighter text-white overflow-hidden">
          {titleWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-4">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`inline-block gpu-accel ${i === 2 ? 'text-gradient' : ''}`}
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
          We design and build the software tools that help Sri Lankan shops, schools, and startups grow without the technical headache.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-10 py-5 bg-white text-black font-bold rounded-2xl overflow-hidden active:scale-95 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_20px_40px_rgba(0,212,255,0.2)]"
          >
            <span className="relative z-10">Launch Your Vision</span>
            <div className="absolute inset-0 bg-naxit-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-5 glass rounded-2xl font-medium border border-white/10 hover:border-naxit-cyan/30 transition-all hover:bg-white/5"
          >
            Explore Expertise
          </button>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.button
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-naxit-cyan via-white/10 to-transparent" />
      </motion.button>
    </section>
  );
};

export default Hero;
