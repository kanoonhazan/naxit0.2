import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { PROJECTS } from '../data';
import { ExternalLink, Database, Cpu, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const CATEGORIES = ['All', 'Website Design', 'UI/UX Design', 'Digital Branding', 'Graphic Design'] as const;

/* =======================
   PROJECT CARD
======================= */

interface ProjectCardProps {
  project: Project;
  onSelect: (p: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(project)}
      className="group relative h-[420px] md:h-[520px] lg:h-[600px]
                 rounded-3xl md:rounded-[2.5rem]
                 overflow-hidden glass border border-white/5 cursor-pointer"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-50 grayscale
                     group-hover:grayscale-0 group-hover:scale-110
                     transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-naxit-charcoal via-naxit-charcoal/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-5 md:p-8 lg:p-10 flex flex-col justify-between z-10">
        {/* Header */}
        <div className="flex justify-between items-start gap-4">
          <div>
            <span className="text-naxit-cyan font-mono text-[10px] tracking-[0.4em] uppercase">
              {project.id} / {project.category}
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                           font-display font-bold tracking-tight text-white
                           group-hover:text-naxit-cyan transition-colors">
              {project.title}
            </h3>
          </div>

          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full glass border border-white/10
                          flex items-center justify-center text-white shrink-0">
            <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-md">
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light mb-6">
            {project.tagline}
          </p>

          {/* Always visible on mobile, hover on desktop */}
          <div
            className="grid grid-cols-2 gap-4 md:gap-6
                       opacity-100 translate-y-0
                       md:opacity-0 md:translate-y-8
                       md:group-hover:opacity-100 md:group-hover:translate-y-0
                       transition-all duration-500 delay-100"
          >
            <div>
              <div className="text-[10px] font-mono text-gray-400 mb-2 flex items-center gap-2">
                <Database className="w-3 h-3 text-naxit-cyan" /> THE IMPACT
              </div>
              <div className="text-naxit-cyan font-bold text-lg">
                {project.impact}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono text-gray-400 mb-2 flex items-center gap-2">
                <Cpu className="w-3 h-3 text-naxit-cyan" /> TECH STACK
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] bg-white/5 px-2 py-1 rounded
                               border border-white/10 text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* =======================
   PORTFOLIO SECTION
======================= */

interface PortfolioProps {
  onSelectProject: (p: Project) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const navigate = useNavigate();

  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 4);

  return (
    <section id="portfolio" className="py-28 md:py-40 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="text-naxit-cyan font-mono text-sm tracking-[0.4em] uppercase mb-4">
              Case Studies
            </div>
            <h2 className="text-6xl sm:text-8xl md:text-6xl lg:text-8xl
                           font-display font-bold tracking-tighter">
              Selected <br />
              <span className="text-gradient">Featured Works</span>
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* See All Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate('/portfolio')}
            className="group inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>View All Masterworks</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
