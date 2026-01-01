
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowLeft, Cpu, Target, Zap, Layout, Globe } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  // Listen for escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onBack();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onBack]);

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[150] bg-naxit-charcoal/95 backdrop-blur-3xl overflow-y-auto cursor-auto"
    >
      {/* Header Overlay */}
      <div className="sticky top-0 z-[160] w-full p-8 md:p-12 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={onBack}
            className="pointer-events-auto glass px-6 py-3 rounded-full border border-white/10 hover:border-naxit-cyan transition-colors flex items-center gap-3 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-mono tracking-widest uppercase">Terminate View [ESC]</span>
          </motion.button>

          <motion.a
            href="#"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pointer-events-auto bg-white text-black px-8 py-3 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold hover:scale-105 transition-all flex items-center gap-3"
          >
            Live Intel <Globe className="w-4 h-4" />
          </motion.a>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative">
        {/* Hero */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <motion.div
            layoutId={`image-${project.id}`}
            className="absolute inset-0 z-0"
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-naxit-charcoal via-transparent to-transparent" />
          </motion.div>

          <div className="relative z-10 text-center max-w-5xl px-4">
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
              className="text-7xl md:text-[11rem] font-display font-extrabold text-white leading-[0.85] tracking-tighter"
            >
              {project.title.split(' ').map((w, i) => (
                <span key={i} className="block">{w}</span>
              ))}
            </motion.h1>
          </div>
        </section>

        {/* Narrative */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 text-naxit-cyan mb-10">
              <div className="w-10 h-[1px] bg-naxit-cyan" />
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase">The Directive</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-[1.1]">{project.challenge}</h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed mb-20">
              {project.fullDescription}
            </p>

            <div className="glass p-12 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-naxit-royal/5 rounded-full blur-[100px]" />
              <div className="flex items-center gap-4 text-naxit-cyan mb-8">
                <Zap className="w-5 h-5" />
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase">Execution Logic</span>
              </div>
              <p className="text-gray-200 leading-relaxed italic text-2xl font-light">
                "{project.approach}"
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-16">
            <div className="glass p-12 rounded-[2.5rem] border border-naxit-cyan/10 bg-gradient-to-br from-naxit-royal/10 to-transparent">
              <div className="text-[10px] font-mono text-gray-500 mb-8 tracking-widest uppercase">System Impact</div>
              <div className="text-7xl font-display font-bold text-gradient mb-4">{project.impact}</div>
              <p className="text-gray-500 text-sm leading-relaxed">Performance benchmark exceeded during operational phase.</p>
            </div>

            <div>
              <div className="flex items-center gap-4 text-naxit-cyan mb-8">
                <Cpu className="w-5 h-5" />
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase">Neural Stack</span>
              </div>
              <div className="flex flex-wrap gap-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-6 py-3 glass rounded-2xl text-xs font-mono border border-white/10 text-gray-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-32">
          <div className="flex items-center gap-4 text-naxit-cyan mb-20">
            <Layout className="w-5 h-5" />
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase">Visual Evidence</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {project.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`rounded-[3rem] overflow-hidden ${idx % 3 === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square'}`}
              >
                <img
                  src={img}
                  alt="Visual artifact"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="py-60 text-center px-4">
          <h2 className="text-6xl md:text-9xl font-display font-bold mb-16 tracking-tighter">Ready for <br /><span className="text-gradient">Expansion?</span></h2>
          <button className="bg-white text-black px-16 py-6 rounded-2xl font-bold hover:scale-105 transition-all text-lg">
            Initialize Cooperation
          </button>
        </section>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
