
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, MessageCircle, Phone, Cpu, Zap, Target, Layout, ChevronRight, BarChart3, ShieldCheck, Clock } from 'lucide-react';
import { Service } from '../types';
import { getOptimizedImage } from '../utils';
import Footer from './Footer';

interface ServiceDetailProps {
    service: Service;
    onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
    // Listen for escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onBack();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onBack]);

    const handleWhatsApp = () => {
        window.open('https://wa.me/94758089209', '_blank');
    };

    const handleCall = () => {
        window.location.href = 'tel:058089209';
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
                <title>{service.title} | Naxit</title>
                <meta name="description" content={service.description} />
                <link rel="canonical" href={`https://www.naxitofficial.de/services/${service.slug}`} />
                <meta property="og:title" content={`${service.title} | Naxit`} />
                <meta property="og:description" content={service.description} />
                <meta property="og:url" content={`https://www.naxitofficial.de/services/${service.slug}`} />
            </Helmet>

            {/* Header Overlay - Floating above content */}
            <div className="absolute top-0 left-0 right-0 z-[210] w-full pt-20 md:pt-[7rem] pb-6 px-4 md:px-12 pointer-events-none bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-[0px]">
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
                        Whatsapp <MessageCircle className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative">
                {/* Hero Section */}
                <section className="relative min-h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 z-0 gpu-accel"
                    >
                        <img src={getOptimizedImage(service.image || 'https://wuwzcvobruampagkumre.supabase.co/storage/v1/object/public/public-assets/Branding%20digitalization%20/branding-digitalization')} alt={`${service.title} - Professional Service in Mannar, Sri Lanka`} className="w-full h-full object-cover opacity-60 grayscale-[0.2]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-naxit-charcoal via-transparent to-transparent" />
                    </motion.div>

                    <div className="relative z-10 text-center max-w-5xl px-4 mt-32 md:mt-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-naxit-cyan font-mono text-xs tracking-[0.5em] uppercase mb-8"
                        >
                            {service.badge || 'Service Protocol'} / {service.tag}
                        </motion.div>
                        <motion.h1
                            className="text-5xl md:text-[8rem] font-display font-extrabold text-white leading-[0.85] tracking-tighter"
                        >
                            {service.title.split(' ').map((w, i) => (
                                <span key={i} className="block">{w}</span>
                            ))}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-10"
                        >
                            <p className="text-gray-400 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                                {service.subtitle}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Content Narrative - Engineered for Spatial Utility */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-32 relative overflow-hidden">
                    {/* Background Decorations */}
                    <div className="hidden lg:block absolute -left-20 top-1/4 text-white/[0.01] text-[15rem] font-display font-black pointer-events-none select-none -rotate-90 origin-center leading-none">
                        {service.title.toUpperCase().split(' ')[0]}
                    </div>
                    <div className="hidden lg:block absolute -right-24 top-2/3 text-white/[0.01] text-[15rem] font-display font-black pointer-events-none select-none rotate-90 origin-center leading-none">
                        STRATEGY
                    </div>
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:60px_60px] pointer-events-none" />

                    <div className="relative z-10 space-y-24 md:space-y-40">
                        {/* Phase 1: Context & Ecosystem */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-7 space-y-8 md:space-y-12"
                            >
                                <div className="flex items-center gap-4 text-naxit-cyan">
                                    <div className="w-12 h-[1px] bg-naxit-cyan" />
                                    <span className="font-mono text-[10px] tracking-[0.4em] uppercase">{service.problemTitle || 'Development Objective'}</span>
                                </div>
                                <h2 className="text-2xl md:text-4xl font-display font-bold leading-[1.3] tracking-tight text-gray-200">
                                    {service.problem || service.description}
                                </h2>

                                {/* Metrics Strip Integrated Early for visual weight */}
                                <div className="grid grid-cols-3 gap-4 pt-12 border-t border-white/5">
                                    <div className="space-y-2">
                                        <div className="text-2xl md:text-3xl font-display font-bold">+99%</div>
                                        <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">Efficiency</div>
                                    </div>
                                    <div className="space-y-2 border-x border-white/5 px-4">
                                        <div className="text-2xl md:text-3xl font-display font-bold">L-4</div>
                                        <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">Security</div>
                                    </div>
                                    <div className="space-y-2 pl-4">
                                        <div className="text-2xl md:text-3xl font-display font-bold">24/7</div>
                                        <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">Uptime</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-5"
                            >
                                {service.targetAudience && service.targetAudience.length > 0 && (
                                    <div className="glass p-10 md:p-14 rounded-[3rem] border border-naxit-cyan/10 bg-gradient-to-br from-naxit-royal/10 to-transparent relative group overflow-hidden">
                                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-naxit-cyan/10 blur-[80px] rounded-full" />
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 text-naxit-cyan mb-10">
                                                <Target className="w-5 h-5" />
                                                <span className="font-mono text-[10px] tracking-[0.4em] uppercase">{service.targetAudienceTitle || 'Target Sectors'}</span>
                                            </div>
                                            <div className="space-y-5">
                                                {service.targetAudience.map((audience, index) => (
                                                    <div key={index} className="flex items-center gap-4 text-gray-400 group/item">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-naxit-cyan/30 group-hover/item:bg-naxit-cyan transition-colors shadow-[0_0_8px_rgba(0,187,255,0)] group-hover/item:shadow-[0_0_8px_rgba(0,187,255,1)]" />
                                                        <span className="text-base md:text-lg font-light tracking-wide group-hover/item:text-white transition-colors">{audience}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-naxit-cyan font-mono text-[8px] tracking-widest uppercase bg-naxit-cyan/5 px-3 py-1.5 rounded-full border border-naxit-cyan/20">
                                                    <span className="flex h-1.5 w-1.5 rounded-full bg-naxit-cyan animate-pulse" />
                                                    High Density Node
                                                </div>
                                                <Cpu className="w-4 h-4 text-gray-600" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        {/* Phase 2: The Neural Stack (Inclusions) */}
                        {service.inclusions && service.inclusions.length > 0 && (
                            <div className="space-y-16">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-6"
                                >
                                    <div className="flex flex-col">
                                        <span className="font-mono text-[10px] text-naxit-cyan tracking-[0.5em] uppercase mb-4">Functional Matrix</span>
                                        <h3 className="text-4xl md:text-6xl font-display font-bold">{service.inclusionsTitle || 'The Neural Stack'}</h3>
                                    </div>
                                    <div className="hidden md:block flex-grow h-[1px] bg-gradient-to-r from-naxit-cyan/30 to-transparent" />
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-[4rem] overflow-hidden border border-white/5">
                                    {service.inclusions.map((inclusion, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-naxit-charcoal p-10 md:p-14 hover:bg-white/[0.02] transition-all group relative"
                                        >
                                            <div className="relative z-10 space-y-8">
                                                <div className="w-14 h-14 bg-naxit-cyan/10 border border-naxit-cyan/20 rounded-2xl flex items-center justify-center group-hover:bg-naxit-cyan group-hover:text-black group-hover:scale-110 transition-all duration-500">
                                                    <Check className="w-6 h-6" />
                                                </div>
                                                <div className="space-y-4">
                                                    <h4 className="text-2xl font-bold tracking-tight group-hover:text-naxit-cyan transition-colors">{inclusion.title}</h4>
                                                    <p className="text-gray-400 text-lg font-light leading-relaxed">{inclusion.description}</p>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-10 right-10 text-white/[0.03] font-mono text-6xl font-black select-none pointer-events-none group-hover:text-naxit-cyan/5 transition-colors">
                                                {String(index + 1).padStart(2, '0')}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Phase 3: Strategic Outcome */}
                        {service.result && (
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-naxit-cyan/5 blur-[120px] rounded-full scale-150 pointer-events-none" />
                                <div className="glass p-12 md:p-32 rounded-[4rem] md:rounded-[6rem] border border-naxit-cyan/20 relative overflow-hidden bg-gradient-to-br from-naxit-cyan/[0.08] via-transparent to-transparent text-center">
                                    <div className="flex flex-col items-center gap-12 relative z-10">
                                        <div className="flex items-center gap-4 text-naxit-cyan">
                                            <Zap className="w-6 h-6" />
                                            <span className="font-mono text-[11px] tracking-[0.5em] uppercase">{service.resultTitle || 'The Outcome'}</span>
                                        </div>
                                        <p className="text-gray-100 leading-[1.3] italic text-2xl md:text-4xl font-display font-medium tracking-tight max-w-5xl">
                                            "{service.result}"
                                        </p>
                                        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-naxit-cyan to-transparent opacity-50" />
                                        <div className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.6em]">System Response Optimized</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* Closing CTA */}
                <section className="py-24 md:py-48 text-center px-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-naxit-cyan/[0.02] to-black" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative z-10 space-y-10 md:space-y-16"
                    >
                        <h2 className="text-5xl md:text-[9rem] font-display font-extrabold mb-10 md:mb-14 tracking-tighter leading-none">
                            Ready to <br /><span className="text-gradient">Start?</span>
                        </h2>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                            <button
                                onClick={handleWhatsApp}
                                className="group relative flex items-center gap-3 md:gap-4 bg-white text-black font-bold py-5 md:py-6 px-10 md:px-14 rounded-2xl md:rounded-[2rem] hover:scale-105 transition-all text-lg md:text-2xl shadow-[0_20px_80px_rgba(255,255,255,0.15)] w-full md:w-auto justify-center"
                            >
                                <MessageCircle className="w-6 h-6 md:w-8 md:h-8 fill-black" />
                                <span>{service.ctaPrimary || 'Message on WhatsApp'}</span>
                            </button>

                            {service.ctaSecondary && (
                                <button
                                    onClick={handleCall}
                                    className="glass border border-white/10 px-10 md:px-14 py-5 md:py-6 rounded-2xl md:rounded-[2rem] font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-all text-lg md:text-2xl w-full md:w-auto justify-center"
                                >
                                    <Phone className="w-6 h-6 md:w-7 md:h-7" />
                                    <span>{service.ctaSecondary}</span>
                                </button>
                            )}
                        </div>

                        <p className="text-gray-500 font-mono text-[9px] md:text-[10px] tracking-[0.5em] uppercase pt-12 md:pt-16 border-t border-white/5 w-fit mx-auto mt-20">
                            © 2026 NAXIT MICRO AGENCY
                        </p>
                    </motion.div>
                </section>

                {/* Footer */}
                <Footer onCloseModal={onBack} />
            </div>
        </motion.div >
    );
};

export default ServiceDetail;
