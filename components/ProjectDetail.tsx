
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Project } from '../types';
import {
  ArrowLeft, Cpu, Target, Zap, Layout, Globe, MessageCircle,
  ChevronRight, ChevronLeft, CheckCircle2, X, ZoomIn, ZoomOut, Maximize2
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getOptimizedImage } from '../utils';
import Footer from './Footer';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const controls = useAnimation();



  // Listen for escape key and navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImageIndex !== null) {
          setSelectedImageIndex(null);
          setZoom(1);
        } else {
          onBack();
        }
      }
      if (selectedImageIndex !== null) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
      }
    };

    const lenis = (window as any).lenis;

    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = 'unset';
      if (lenis) lenis.start();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      if (lenis) lenis.start();
    };
  }, [onBack, selectedImageIndex]);

  const handleWhatsApp = () => {
    window.open('https://wa.me/94758089209', '_blank');
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % project.gallery.length);
    setZoom(1);
  };

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + project.gallery.length) % project.gallery.length);
    setZoom(1);
  };



  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.5, 1));
  };

  const toggleZoom = () => {
    setZoom(prev => prev > 1 ? 1 : 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen cursor-auto"
    >
      <Helmet>
        <title>{project.title} | Naxit Portfolio</title>
        <meta name="description" content={project.tagline} />
        <meta property="og:title" content={`${project.title} | Naxit Portfolio`} />
        <meta property="og:description" content={project.tagline} />
        <meta property="og:image" content={project.image} />
      </Helmet>
      {/* Header Overlay - Floating above content */}
      <div className="absolute top-0 left-0 right-0 z-[160] w-full pt-20 md:pt-[7rem] pb-6 px-4 md:px-12 pointer-events-none bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-[0px]">
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-4">
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={onBack}
            className="pointer-events-auto glass px-4 md:px-6 py-2.5 md:py-3 rounded-full border border-white/10 hover:border-naxit-cyan transition-colors flex items-center gap-2 md:gap-3 group flex-1 md:flex-initial justify-center"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[9px] md:text-[10px] font-mono tracking-widest uppercase">Return [ESC]</span>
          </motion.button>

          <motion.button
            onClick={handleWhatsApp}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pointer-events-auto bg-white text-black px-4 md:px-8 py-2.5 md:py-3 rounded-full text-[9px] md:text-[10px] font-mono tracking-widest uppercase font-bold hover:scale-105 transition-all flex items-center gap-2 md:gap-3 flex-1 md:flex-initial justify-center"
          >
            Contact WhatsApp <MessageCircle className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative">
        {/* Hero */}
        <section className="relative min-h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
          <motion.div
            layoutId={`image-${project.id}`}
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 top-0 z-0 gpu-accel">
            <img src={getOptimizedImage(project.image)} alt={`${project.title} - Project Hero in Mannar, Sri Lanka`} className="w-full h-full object-cover opacity-60 grayscale-[0.2]" />
            <div className="absolute inset-0 bg-gradient-to-t from-naxit-charcoal via-transparent to-transparent" />
          </motion.div>

          <div className="relative z-10 text-center max-w-5xl px-4 mt-32 md:mt-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-naxit-cyan font-mono text-xs tracking-[0.5em] uppercase mb-8"
            >
              Strategic Deployment / {project.category}
            </motion.div>
            <motion.h1
              layoutId={`title-${project.id}`}
              className="text-5xl md:text-[11rem] font-display font-extrabold text-white leading-[0.85] tracking-tighter"
            >
              {project.title.split(' ').map((w, i) => (
                <span key={i} className="block">{w === 'Quantum' ? <span className="text-gradient">Quantum</span> : w}</span>
              ))}
            </motion.h1>
          </div>
        </section>

        {/* Narrative Grid - Re-engineered for optimal spacial utility */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-32 relative overflow-hidden">
          {/* Enhanced Background Decorations to fix void spaces */}
          <div className="hidden lg:block absolute -left-20 top-1/4 text-white/[0.01] text-[15rem] font-display font-black pointer-events-none select-none -rotate-90 origin-center leading-none">
            {project.title.toUpperCase()}
          </div>
          <div className="hidden lg:block absolute -right-24 top-2/3 text-white/[0.01] text-[15rem] font-display font-black pointer-events-none select-none rotate-90 origin-center leading-none">
            {project.category.split(' ')[0].toUpperCase()}
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:60px_60px] pointer-events-none" />

          <div className="relative z-10 space-y-24 md:space-y-40">
            {/* Context/Overview + Impact Strip */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 space-y-8 md:space-y-10"
              >
                <div className="flex items-center gap-4 text-naxit-cyan">
                  <div className="w-12 h-[1px] bg-naxit-cyan" />
                  <span className="font-mono text-[10px] tracking-[0.4em] uppercase">Context & Objective</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.2] tracking-tight">{project.challenge}</h2>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                  {project.fullDescription}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <div className="glass p-10 md:p-14 rounded-[3rem] border border-naxit-cyan/20 bg-gradient-to-br from-naxit-cyan/10 to-transparent relative group overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-naxit-cyan/20 blur-[80px] rounded-full group-hover:bg-naxit-cyan/30 transition-colors" />
                  <div className="relative z-10">
                    <div className="text-[10px] font-mono text-gray-400 mb-8 tracking-[0.3em] uppercase">System Impact</div>
                    <div className="text-6xl md:text-8xl font-display font-bold text-gradient mb-6 leading-none">{project.impact}</div>
                    <div className="h-[1px] w-full bg-white/10 mb-6" />
                    <p className="text-gray-500 text-[10px] font-mono leading-relaxed uppercase tracking-wider">
                      Strategic deployment benchmark / operational phase
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Problem & Solution - Integrated Comparison */}
            {(project.problem || project.solution) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl">
                {/* Problem Section */}
                {project.problem && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-10 md:p-20 bg-naxit-charcoal space-y-12"
                  >
                    <div className="flex items-center gap-4 text-red-500/60">
                      <Target className="w-5 h-5" />
                      <span className="font-mono text-[10px] tracking-[0.4em] uppercase">{project.problem.title}</span>
                    </div>
                    <div className="space-y-6 md:space-y-8">
                      {project.problem.content.map((paragraph, i) => (
                        <p key={i} className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Solution Section */}
                {project.solution && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-10 md:p-20 bg-white/[0.03] space-y-12 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-4 text-naxit-cyan">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-mono text-[10px] tracking-[0.4em] uppercase">{project.solution.title}</span>
                    </div>
                    <div className="space-y-6 md:space-y-8">
                      {project.solution.content.map((line, i) => (
                        <div key={i} className="flex gap-5 items-start">
                          <ChevronRight className="w-5 h-5 text-naxit-cyan mt-1.5 flex-shrink-0" />
                          <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed">
                            {line}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Approach & Logic & Tech Stack Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-stretch">
              {/* Left Column: Strategy */}
              <div className="lg:col-span-7 space-y-20">
                {project.approach && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-4 text-naxit-cyan">
                      <div className="w-10 h-[1px] bg-naxit-cyan/30" />
                      <span className="font-mono text-[10px] tracking-[0.4em] uppercase">Tactical Deployment</span>
                    </div>
                    <p className="text-gray-300 text-2xl md:text-4xl font-light leading-[1.2] tracking-tight">
                      {project.approach}
                    </p>
                  </motion.div>
                )}

                {project.designDecisions && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass p-10 md:p-16 rounded-[3.5rem] border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent relative overflow-hidden shadow-2xl"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-20">
                      <Zap className="w-12 h-12 text-naxit-cyan" />
                    </div>
                    <h4 className="font-mono text-[11px] tracking-[0.4em] uppercase text-naxit-cyan mb-12 flex items-center gap-3">
                      <Layout className="w-4 h-4" /> Execution Logic
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                      {project.designDecisions.map((decision, i) => (
                        <div key={i} className="flex gap-4 group">
                          <div className="w-2 h-2 rounded-full bg-naxit-cyan mt-2 flex-shrink-0 group-hover:scale-150 transition-transform shadow-[0_0_12px_rgba(0,187,255,1)]" />
                          <p className="text-gray-400 font-light leading-relaxed text-base md:text-lg">
                            {decision}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Right Column: Technical & Outcomes */}
              <div className="lg:col-span-5 h-full">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass p-10 md:p-14 rounded-[3.5rem] border border-white/5 h-full flex flex-col justify-between bg-black/40 backdrop-blur-xl shadow-2xl"
                >
                  <div className="space-y-16">
                    <div className="space-y-10">
                      <div className="flex items-center gap-4 text-naxit-cyan">
                        <Cpu className="w-6 h-6" />
                        <span className="font-mono text-[11px] tracking-[0.4em] uppercase">Neural Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-3 md:gap-4">
                        {project.tech.map((t) => (
                          <span key={t} className="px-5 py-3 glass rounded-2xl text-xs font-mono border border-white/10 text-gray-400 hover:text-naxit-cyan hover:border-naxit-cyan/50 transition-all cursor-default hover:bg-white/5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.resultOutcome && (
                      <div className="pt-12 border-t border-white/10 space-y-10">
                        <div className="flex items-center gap-4 text-naxit-cyan">
                          <div className="w-8 h-[1px] bg-naxit-cyan" />
                          <span className="font-mono text-[10px] tracking-[0.4em] uppercase">{project.resultOutcome.title}</span>
                        </div>
                        <div className="space-y-8">
                          {project.resultOutcome.content.map((paragraph, i) => (
                            <p key={i} className="text-gray-400 text-base md:text-lg font-light leading-relaxed italic border-l-2 border-naxit-cyan/30 pl-8">
                              "{paragraph}"
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-20 pt-10 border-t border-white/5 text-center">
                    <span className="font-mono text-[10px] text-white/10 uppercase tracking-[0.6em]">System: High-Performance Operational</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Behance-Style Vertical Gallery Stack */}
        <section className="bg-black/20 pt-10 pb-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <div className="flex items-center gap-4 text-naxit-cyan mb-4">
                  <Layout className="w-5 h-5" />
                  <span className="font-mono text-[10px] tracking-[0.4em] uppercase">Visual Artifacts</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-display font-bold">Execution <span className="text-gradient">Gallery</span></h2>
              </div>
              <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em] max-w-xs text-left md:text-right">
                High-fidelity captures from the final deployment phase.
              </p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-0">
            {project.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group cursor-zoom-in w-full overflow-hidden"
                onClick={() => setSelectedImageIndex(idx)}
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-naxit-royal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-[100px] pointer-events-none" />

                <div className="max-w-[1400px] mx-auto overflow-hidden shadow-2xl md:shadow-none group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)] transition-shadow duration-700">
                  <img
                    src={getOptimizedImage(img, 2000)}
                    alt={`${project.title} Exhibit ${idx + 1}`}
                    className="w-full h-auto object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-[2s] ease-out will-change-transform"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Info Overlay (Visible on hover) */}
                <div className="absolute bottom-10 left-10 md:left-20 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 hidden md:block">
                  <div className="glass px-6 py-4 rounded-2xl border border-white/10 backdrop-blur-md">
                    <span className="text-naxit-cyan font-mono text-[10px] tracking-widest uppercase block mb-1">Artifact {idx + 1}</span>
                    <span className="text-white text-sm font-display font-medium uppercase tracking-tighter">View in High Resolution</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-transparent group-hover:bg-black/20 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </section>


        {/* Full View Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[2000] bg-black/98 backdrop-blur-2xl flex flex-col items-center justify-center p-2 md:p-8 cursor-zoom-out"
              onClick={() => { setSelectedImageIndex(null); setZoom(1); }}
            >
              <div
                className="absolute top-0 left-0 right-0 p-4 md:p-6 flex flex-col md:flex-row justify-between items-center gap-4 z-[2001]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-white/40 font-mono text-[8px] md:text-[10px] tracking-widest uppercase text-center md:text-left order-2 md:order-1">
                  {project.title} <span className="hidden md:inline">/</span> <br className="md:hidden" /> Artifact {selectedImageIndex + 1} of {project.gallery.length}
                </div>
                <div className="flex items-center gap-2 md:gap-4 order-1 md:order-2 w-full md:w-auto justify-between md:justify-end">
                  <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10 glass shrink-0">
                    <button
                      onClick={handleZoomOut}
                      disabled={zoom <= 1}
                      className="p-2 rounded-full text-white hover:text-naxit-cyan disabled:opacity-30 disabled:hover:text-white transition-all"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <div className="px-1 md:px-2 text-[9px] md:text-[10px] font-mono text-white/60 min-w-[2.5rem] md:min-w-[3.5rem] text-center">
                      {(zoom * 100).toFixed(0)}%
                    </div>
                    <button
                      onClick={handleZoomIn}
                      disabled={zoom >= 3}
                      className="p-2 rounded-full text-white hover:text-naxit-cyan disabled:opacity-30 disabled:hover:text-white transition-all"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => { setSelectedImageIndex(null); setZoom(1); }}
                    className="p-2.5 md:p-3 rounded-full glass border border-white/10 text-white hover:text-red-500 hover:border-red-500/50 transition-all shrink-0"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div
                className="relative w-full h-full flex items-center justify-center overflow-hidden touch-none"
                ref={containerRef}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute left-2 md:left-8 z-[2005] p-3 md:p-4 rounded-full glass border border-white/10 text-white hover:text-naxit-cyan hover:border-naxit-cyan transition-all group backdrop-blur-md bg-black/20"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
                </button>

                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: zoom,
                    cursor: zoom > 1 ? 'grab' : 'zoom-in'
                  }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="w-full h-full flex items-center justify-center p-2 md:p-4 touch-none"
                >
                  <motion.img
                    key={`img-${selectedImageIndex}`}
                    drag={zoom > 1}
                    dragConstraints={containerRef}
                    dragElastic={0.2}
                    dragMomentum={true}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    src={getOptimizedImage(project.gallery[selectedImageIndex])}
                    alt="Gallery artifact full view"
                    className="max-w-[95vw] max-h-[75vh] md:max-h-[80vh] object-contain shadow-2xl select-none pointer-events-auto"
                    style={{
                      cursor: zoom > 1 ? 'grab' : 'zoom-in',
                      touchAction: 'none'
                    }}
                    onDragStart={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      if (zoom === 1) {
                        e.stopPropagation();
                        toggleZoom();
                      } else {
                        e.stopPropagation();
                      }
                    }}
                  />
                </motion.div>

                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute right-2 md:right-8 z-[2005] p-3 md:p-4 rounded-full glass border border-white/10 text-white hover:text-naxit-cyan hover:border-naxit-cyan transition-all group backdrop-blur-md bg-black/20"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden md:flex gap-2 z-[2001]"
                onClick={(e) => e.stopPropagation()}
              >
                {project.gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImageIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${i === selectedImageIndex ? 'bg-naxit-cyan w-8' : 'bg-white/20 hover:bg-white/40'
                      }`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Closing CTA */}
        <section className="py-24 md:py-48 text-center px-4 bg-gradient-to-b from-transparent to-black/20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold mb-10 md:mb-14 tracking-tighter"
          >
            Ready for <br /><span className="text-gradient">Expansion?</span>
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button
              onClick={handleWhatsApp}
              className="group relative flex items-center gap-3 bg-white text-black font-bold py-5 md:py-6 px-10 md:px-12 rounded-2xl hover:scale-105 transition-all text-base md:text-lg shadow-[0_20px_40px_rgba(255,255,255,0.1)] w-full md:w-auto justify-center"
            >
              <MessageCircle className="w-6 h-6 fill-black" />
              <span>Talk to us on WhatsApp</span>
            </button>
            <button
              onClick={onBack}
              className="glass border border-white/10 px-10 md:px-12 py-5 md:py-6 rounded-2xl font-bold text-gray-400 hover:text-white transition-all text-base md:text-lg w-full md:w-auto justify-center"
            >
              Return to Naxit
            </button>
          </div>
        </section>

        {/* Footer */}
        <Footer onCloseModal={onBack} />
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
