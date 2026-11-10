
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useProjects } from '../context/ProjectContext';
import { Project } from '../types';
import { getOptimizedImage } from '../utils';

import Breadcrumbs from './Breadcrumbs';

const CATEGORIES = ['All', 'Website Design', 'UI/UX Design', 'Digital Branding', 'Graphic Design'] as const;

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="group relative h-[420px] md:h-[500px] lg:h-[580px] rounded-[2.5rem] overflow-hidden glass border border-white/5 gpu-accel"
    >
        <Link
            to={`/portfolio/${project.slug}`}
            aria-label={`View ${project.title} case study`}
            className="block w-full h-full relative"
        >
            <div className="absolute inset-0">
                <motion.img
                    src={getOptimizedImage(project.image, 800)}
                    width={800}
                    height={580}
                    alt={`${project.title} - Featured Project in Mannar, Sri Lanka`}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-all duration-1000 ease-out"
                    loading="lazy"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-naxit-charcoal via-naxit-charcoal/40 to-transparent" />
            </div>
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-naxit-cyan font-mono text-[10px] tracking-[0.4em] uppercase">
                            {project.category}
                        </span>
                        <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold text-white group-hover:text-naxit-cyan transition-colors tracking-tighter">
                            {project.title}
                        </h2>
                    </div>
                    <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:border-naxit-cyan/50 transition-colors" aria-hidden="true">
                        <ExternalLink className="w-5 h-5" />
                    </div>
                </div>
                <div>
                    <p className="text-gray-300 text-lg font-light mb-6 line-clamp-2 max-w-md">{project.tagline}</p>
                    <div className="flex justify-between items-end">
                        <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500">
                            <div className="text-[10px] font-mono text-gray-400 mb-2 tracking-widest uppercase">The Impact</div>
                            <div className="text-naxit-cyan font-bold text-xl">{project.impact}</div>
                        </div>
                        <div className="flex gap-2">
                            {project.tech.slice(0, 2).map(t => (
                                <span key={t} className="text-[10px] bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 text-gray-300 font-mono">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </motion.div>
);

const PortfolioPage: React.FC = () => {
    const navigate = useNavigate();
    const { projects } = useProjects();
    const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All');

    useEffect(() => {
        const lenis = (window as any).lenis;
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen border-none">
            <Helmet>
                <title>Portfolio | Naxit Masterworks</title>
                <meta name="description" content="Recent NAXIT work: food delivery UX, brand logos, websites and apps for Sri Lankan businesses. See the case studies." />
                <link rel="canonical" href="https://www.naxitofficial.de/portfolio" />
                <link rel="alternate" hrefLang="en-LK" href="https://www.naxitofficial.de/portfolio" />
                <link rel="alternate" hrefLang="x-default" href="https://www.naxitofficial.de/portfolio" />
            </Helmet>

            <Navbar onCloseModal={() => { }} />

            <main className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <Breadcrumbs items={[{ label: 'Portfolio', path: '/portfolio' }]} />
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                        <div className="max-w-2xl">
                            <motion.button
                                onClick={() => navigate('/')}
                                className="flex items-center gap-2 text-naxit-cyan font-mono text-xs tracking-widest uppercase mb-8 hover:gap-4 transition-all"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back to Home
                            </motion.button>
                            <h1 className="text-5xl md:text-[6.5rem] lg:text-[8rem] font-display font-extrabold leading-[1.05] md:leading-[1] mb-6 tracking-tighter text-white">
                                Full <span className="text-gradient">Portfolio</span>
                            </h1>
                            <p className="text-gray-300 text-lg font-light">
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
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
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
