
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, MessageCircle, Phone, Cpu, Zap, Target, Layout, ChevronRight, BarChart3, ShieldCheck, Clock } from 'lucide-react';
import { Service } from '../types';
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
        window.open('https://wa.me/94777123456', '_blank');
    };

    const handleCall = () => {
        window.location.href = 'tel:+94777123456';
    };

    return (
        <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] bg-naxit-charcoal/95 backdrop-blur-3xl overflow-y-auto cursor-auto"
            data-lenis-prevent
        >
            {/* Header Overlay - Floating above content */}
            <div className="absolute top-0 left-0 right-0 z-[210] w-full pt-20 md:pt-[7rem] pb-6 px-4 md:px-12 pointer-events-none bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-[0px]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <motion.button
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        onClick={onBack}
                        className="pointer-events-auto glass px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-white/10 hover:border-naxit-cyan transition-colors flex items-center gap-3 group w-full md:w-auto justify-center"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[9px] md:text-[10px] font-mono tracking-widest uppercase">Return [ESC]</span>
                    </motion.button>

                    <motion.button
                        onClick={handleWhatsApp}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="pointer-events-auto bg-white text-black px-6 md:px-8 py-2.5 md:py-3 rounded-full text-[9px] md:text-[10px] font-mono tracking-widest uppercase font-bold hover:scale-105 transition-all flex items-center gap-3 w-full md:w-auto justify-center"
                    >
                        Whatsapp <MessageCircle className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative">
                {/* Hero Section */}
                <section className="relative min-h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
                    {/* Background Decorative Element */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-naxit-royal/20 via-transparent to-naxit-cyan/10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-naxit-royal/10 blur-[150px] rounded-full" />

                        {/* Abstract Neural Nodes in Background */}
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-naxit-cyan rounded-full animate-pulse blur-[1px]" />
                        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-naxit-royal rounded-full animate-pulse delay-700 blur-[1px]" />
                        <div className="absolute top-2/3 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-1000" />
                    </div>

                    <div className="relative z-10 text-center max-w-5xl px-4 mt-24 md:mt-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-naxit-cyan font-mono text-xs md:text-sm tracking-[0.5em] uppercase mb-6 md:mb-8"
                        >
                            {service.badge || 'Service Protocol'} // {service.tag}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="text-5xl md:text-[6rem] font-display font-extrabold text-white leading-[1] tracking-tighter"
                        >
                            {service.title.split(' ').map((w, i) => (
                                <span key={i} className="block">{w}</span>
                            ))}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="flex flex-col items-center gap-6 md:gap-8 mt-6 md:mt-10"
                        >
                            <p className="text-gray-400 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-tight italic">
                                {service.subtitle}
                            </p>
                            <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-naxit-cyan/50 to-transparent" />
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
                            Ready for <br /><span className="text-gradient">Activation?</span>
                        </h2>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                            <button
                                onClick={handleWhatsApp}
                                className="group relative flex items-center gap-3 md:gap-4 bg-white text-black font-bold py-5 md:py-6 px-10 md:px-14 rounded-2xl md:rounded-[2rem] hover:scale-105 transition-all text-lg md:text-2xl shadow-[0_20px_80px_rgba(255,255,255,0.15)] w-full md:w-auto justify-center"
                            >
                                <MessageCircle className="w-6 h-6 md:w-8 md:h-8 fill-black" />
                                <span>{service.ctaPrimary || 'Initialize Protocol'}</span>
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
        </motion.div>
    );
};

export default ServiceDetail;
