
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
            className="min-h-screen bg-naxit-charcoal overflow-y-auto cursor-auto"
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
                        <img src={getOptimizedImage(service.image || 'https://wuwzcvobruampagkumre.supabase.co/storage/v1/object/public/public-assets/Branding%20digitalization%20/branding-digitalization')} alt={service.title} className="w-full h-full object-cover opacity-60 grayscale-[0.2]" />
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

                {/* Narrative Grid */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 relative overflow-hidden">
                    {/* Background floating text to fill whitespace */}
                    <div className="hidden lg:block absolute -left-20 top-1/4 text-white/[0.02] text-[15rem] font-display font-black pointer-events-none select-none -rotate-90 origin-center leading-none">
                        SYSTEM
                    </div>
                    <div className="hidden lg:block absolute -right-20 top-2/3 text-white/[0.02] text-[15rem] font-display font-black pointer-events-none select-none rotate-90 origin-center leading-none">
                        PROTOCOL
                    </div>

                    <div className="lg:col-span-8 space-y-20 md:space-y-28">

                        {/* Problem Section */}
                        {service.problem && (
                            <div className="space-y-6 md:space-y-10">
                                <div className="flex items-center gap-4 md:gap-6 text-naxit-cyan">
                                    <div className="w-12 md:w-16 h-[1px] bg-naxit-cyan" />
                                    <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase">{service.problemTitle || 'The Problem'}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-display font-medium leading-tight md:leading-[1.25] tracking-tight">
                                    {service.problem}
                                </h2>
                            </div>
                        )}

                        {/* Inclusions / Solution Section */}
                        {service.inclusions && service.inclusions.length > 0 && (
                            <div className="space-y-10 md:space-y-16">
                                <div className="flex items-center gap-4 md:gap-6 text-naxit-cyan">
                                    <div className="w-12 md:w-16 h-[1px] bg-naxit-cyan" />
                                    <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase">{service.inclusionsTitle || 'The Neural Stack'}</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                                    {service.inclusions.map((inclusion, index) => (
                                        <div key={index} className="glass p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-white/5 hover:border-naxit-cyan/30 transition-all group relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-naxit-cyan/5 rounded-full blur-3xl -mr-12 md:-mr-16 -mt-12 md:-mt-16 group-hover:bg-naxit-cyan/10 transition-colors" />
                                            <div className="w-12 h-12 md:w-14 md:h-14 bg-naxit-cyan/10 border border-naxit-cyan/30 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-naxit-cyan group-hover:text-black transition-all">
                                                <Check className="w-6 h-6 md:w-7 md:h-7" />
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tight">{inclusion.title}</h3>
                                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">{inclusion.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Impact Metrics - New Section to fill whitespace */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 border-y border-white/5">
                            <div className="text-center space-y-4">
                                <BarChart3 className="w-8 h-8 text-naxit-cyan mx-auto mb-6" />
                                <div className="text-4xl font-display font-bold">+99%</div>
                                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Efficiency Gain</div>
                            </div>
                            <div className="text-center space-y-4 border-x border-white/5">
                                <ShieldCheck className="w-8 h-8 text-naxit-cyan mx-auto mb-6" />
                                <div className="text-4xl font-display font-bold">Secure</div>
                                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Data Integrity</div>
                            </div>
                            <div className="text-center space-y-4">
                                <Clock className="w-8 h-8 text-naxit-cyan mx-auto mb-6" />
                                <div className="text-4xl font-display font-bold">24/7</div>
                                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">System Uptime</div>
                            </div>
                        </div>

                        {/* Results Section */}
                        {service.result && (
                            <div className="glass p-10 md:p-24 rounded-[2.5rem] md:rounded-[3.5rem] border border-naxit-cyan/20 relative overflow-hidden bg-gradient-to-br from-naxit-cyan/[0.05] to-transparent">
                                <div className="absolute -right-40 -top-40 w-[500px] h-[500px] bg-naxit-cyan/10 rounded-full blur-[150px]" />
                                <div className="flex items-center gap-4 md:gap-6 text-naxit-cyan mb-8 md:mb-12">
                                    <Zap className="w-5 h-5 md:w-6 md:h-6" />
                                    <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase">{service.resultTitle || 'The Outcome'}</span>
                                </div>
                                <p className="text-gray-100 leading-[1.3] italic text-2xl md:text-5xl font-display font-medium tracking-tight">
                                    "{service.result}"
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-12 md:space-y-20">
                        {/* Target Audience Sidebar */}
                        {service.targetAudience && service.targetAudience.length > 0 && (
                            <div className="glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-naxit-cyan/10 bg-gradient-to-br from-naxit-royal/10 to-transparent lg:sticky lg:top-40">
                                <div className="flex items-center gap-4 text-naxit-cyan mb-8 md:mb-12">
                                    <Target className="w-5 h-5 md:w-6 md:h-6" />
                                    <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase">{service.targetAudienceTitle || 'Impact Sectors'}</span>
                                </div>
                                <div className="space-y-4 md:space-y-6">
                                    {service.targetAudience.map((audience, index) => (
                                        <div key={index} className="flex items-center gap-4 md:gap-6 text-gray-300 group">
                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-naxit-cyan/50 group-hover:bg-naxit-cyan transition-colors" />
                                            <span className="text-base md:text-lg font-light tracking-wide group-hover:text-white transition-colors">{audience}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-white/5 space-y-8 md:space-y-12">
                                    {/* Operational Status Integrated Here */}
                                    <div className="space-y-4 md:space-y-6">
                                        <div className="flex items-center gap-3 text-gray-500 font-mono text-[9px] md:text-[10px] tracking-widest uppercase">
                                            <Cpu className="w-4 h-4" />
                                            Node Priority
                                        </div>
                                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                                            Priority implementation available for the sectors listed above.
                                        </p>
                                        <div className="flex items-center gap-3 text-naxit-cyan font-mono text-[9px] md:text-[10px] bg-naxit-cyan/5 border border-naxit-cyan/20 w-fit px-4 py-2 rounded-full">
                                            <span className="flex h-2 w-2 rounded-full bg-naxit-cyan animate-pulse" />
                                            ACTIVE // HIGH PRIORITY
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                            © 2026 NAXIT DEFENSE SYSTEMS // SYSTEM ONLINE
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
