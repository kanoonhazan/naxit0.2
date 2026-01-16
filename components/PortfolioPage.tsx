
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink, Database, Cpu } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { PROJECTS } from '../data';
import { Project } from '../types';

const CATEGORIES = ['All', 'Website Design', 'UI/UX Design', 'Digital Branding', 'Graphic Design'] as const;

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        onClick={onClick}
        className="group relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden glass border border-white/5 cursor-pointer"
    >
        <div className="absolute inset-0">
            <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-naxit-charcoal via-naxit-charcoal/40 to-transparent" />
        </div>
        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
            <div className="flex justify-between items-start">
                <div>
                    <span className="text-naxit-cyan font-mono text-[10px] tracking-[0.4em] uppercase">
                        {project.id} / {project.category}
                    </span>
                    <h3 className="mt-2 text-2xl font-display font-bold text-white group-hover:text-naxit-cyan transition-colors">
                        {project.title}
                    </h3>
                </div>
                <div className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white">
                    <ExternalLink className="w-4 h-4" />
                </div>
            </div>
            <div>
                <p className="text-gray-300 font-light mb-6 line-clamp-2">{project.tagline}</p>
                <div className="flex justify-between items-end">
                    <div>
                        <div className="text-[10px] font-mono text-gray-500 mb-1 tracking-widest">IMPACT</div>
                        <div className="text-naxit-cyan font-bold">{project.impact}</div>
                    </div>
                    <div className="flex gap-2">
                        {project.tech.slice(0, 2).map(t => (
                            <span key={t} className="text-[9px] bg-white/5 px-2 py-1 rounded border border-white/10 text-gray-400">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

const PortfolioPage: React.FC = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredProjects = activeCategory === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-naxit-charcoal">
            <Helmet>
                <title>Portfolio | Naxit Masterworks</title>
                <meta name="description" content="Explore our selected masterworks in Website Design, UI/UX, and Digital Branding." />
            </Helmet>

            <Navbar onCloseModal={() => { }} />

            <main className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                        <div className="max-w-2xl">
                            <motion.button
                                onClick={() => navigate('/')}
                                className="flex items-center gap-2 text-naxit-cyan font-mono text-xs tracking-widest uppercase mb-8 hover:gap-4 transition-all"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back to Home
                            </motion.button>
                            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-none mb-4">
                                Full <span className="text-gradient">Portfolio</span>
                            </h1>
                            <p className="text-gray-400 text-lg font-light">
                                A comprehensive archive of our strategic deployments and creative masterworks.
                            </p>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap gap-2 glass p-2 rounded-2xl border border-white/5">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeCategory === cat
                                            ? 'bg-naxit-royal text-white shadow-[0_0_20px_rgba(0,85,255,0.4)]'
                                            : 'text-gray-500 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onClick={() => navigate(`/portfolio/${project.slug}`)}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </main>

            <Footer onCloseModal={() => { }} />
        </div>
    );
};

export default PortfolioPage;
