
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, MessageCircle, Phone, Cpu, Zap, Target, Layout, ChevronRight } from 'lucide-react';
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
            <div className="absolute top-0 left-0 right-0 z-[210] w-full pt-[6.5rem] pb-6 px-6 md:pt-[7rem] md:pb-12 md:px-12 pointer-events-none bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-[0px]">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <motion.button
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        onClick={onBack}
                        className="pointer-events-auto glass px-6 py-3 rounded-full border border-white/10 hover:border-naxit-cyan transition-colors flex items-center gap-3 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-mono tracking-widest uppercase">Return to Nexus [ESC]</span>
                    </motion.button>

                    <motion.button
                        onClick={handleWhatsApp}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="pointer-events-auto bg-white text-black px-8 py-3 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold hover:scale-105 transition-all flex items-center gap-3"
                    >
                        Quick Intel <MessageCircle className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative">
                {/* Hero Section */}
                <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
                    {/* Background Decorative Element */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-naxit-royal/20 via-transparent to-naxit-cyan/10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-naxit-royal/5 blur-[150px] rounded-full" />
                    </div>

                    <div className="relative z-10 text-center max-w-5xl px-4 mt-20 md:mt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-naxit-cyan font-mono text-xs md:text-sm tracking-[0.5em] uppercase mb-8"
                        >
                            {service.badge || 'Service Protocol'} // {service.tag}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="text-6xl md:text-[10rem] font-display font-extrabold text-white leading-[0.85] tracking-tighter"
                        >
                            {service.title.split(' ').map((w, i) => (
                                <span key={i} className="block">{w}</span>
                            ))}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="text-gray-400 text-xl md:text-2xl font-light max-w-2xl mx-auto mt-12"
                        >
                            {service.subtitle}
                        </motion.p>
                    </div>
                </section>

                {/* Narrative Grid */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-32">

                        {/* Problem Section */}
                        {service.problem && (
                            <div className="space-y-10">
                                <div className="flex items-center gap-4 text-naxit-cyan">
                                    <div className="w-10 h-[1px] bg-naxit-cyan" />
                                    <span className="font-mono text-[10px] tracking-[0.4em] uppercase">{service.problemTitle || 'The Problem'}</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight decoration-naxit-cyan/30 underline-offset-8">
                                    {service.problem}
                                </h2>
                            </div>
                        )}

                        {/* Inclusions / Solution Section */}
                        {service.inclusions && service.inclusions.length > 0 && (
                            <div className="space-y-16">
                                <div className="flex items-center gap-4 text-naxit-cyan">
                                    <div className="w-10 h-[1px] bg-naxit-cyan" />
                                    <span className="font-mono text-[10px] tracking-[0.4em] uppercase">{service.inclusionsTitle || 'The Neural Stack'}</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {service.inclusions.map((inclusion, index) => (
                                        <div key={index} className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-naxit-cyan/20 transition-all group">
                                            <div className="w-10 h-10 bg-naxit-cyan/10 border border-naxit-cyan/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-naxit-cyan group-hover:text-black transition-all">
                                                <Check className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-xl font-bold mb-4">{inclusion.title}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">{inclusion.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Results Section */}
                        {service.result && (
                            <div className="glass p-12 md:p-20 rounded-[3rem] border border-naxit-cyan/20 relative overflow-hidden bg-gradient-to-br from-naxit-cyan/[0.03] to-transparent">
                                <div className="absolute -right-20 -top-20 w-80 h-80 bg-naxit-cyan/10 rounded-full blur-[100px]" />
                                <div className="flex items-center gap-4 text-naxit-cyan mb-12">
                                    <Zap className="w-5 h-5" />
                                    <span className="font-mono text-[10px] tracking-[0.4em] uppercase">{service.resultTitle || 'The Outcome'}</span>
                                </div>
                                <p className="text-gray-200 leading-relaxed italic text-2xl md:text-3xl font-light">
                                    "{service.result}"
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-16">
                        {/* Target Audience Sidebar */}
                        {service.targetAudience && service.targetAudience.length > 0 && (
                            <div className="glass p-10 rounded-[2.5rem] border border-naxit-cyan/10 bg-gradient-to-br from-naxit-royal/10 to-transparent">
                                <div className="flex items-center gap-3 text-naxit-cyan mb-8">
                                    <Target className="w-5 h-5" />
                                    <span className="font-mono text-[10px] tracking-[0.4em] uppercase">{service.targetAudienceTitle || 'Target Sectors'}</span>
                                </div>
                                <div className="space-y-4">
                                    {service.targetAudience.map((audience, index) => (
                                        <div key={index} className="flex items-center gap-3 text-gray-300">
                                            <div className="w-1 h-1 rounded-full bg-naxit-cyan" />
                                            <span className="text-sm font-medium">{audience}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Status Sidebar */}
                        <div className="glass p-10 rounded-[2.5rem] border border-white/5">
                            <div className="flex items-center gap-3 text-gray-500 mb-8 font-mono text-[9px] tracking-widest uppercase">
                                <Cpu className="w-4 h-4" />
                                Operational Status
                            </div>
                            <p className="text-gray-400 text-sm mb-6">This service is currently at peak efficiency for new local deployments.</p>
                            <div className="flex items-center gap-3 text-naxit-cyan font-mono text-[10px]">
                                <span className="flex h-2 w-2 rounded-full bg-naxit-cyan animate-pulse" />
                                LIVE // SEATS AVAILABLE
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing CTA */}
                <section className="py-60 text-center px-4 bg-gradient-to-b from-transparent to-black/20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-display font-bold mb-16 tracking-tighter"
                    >
                        Ready for <br /><span className="text-gradient">Activation?</span>
                    </motion.h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button
                            onClick={handleWhatsApp}
                            className="group relative flex items-center gap-3 bg-white text-black font-bold py-6 px-12 rounded-2xl hover:scale-105 transition-all text-lg shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                        >
                            <MessageCircle className="w-6 h-6 fill-black" />
                            <span>{service.ctaPrimary || 'Initialize via WhatsApp'}</span>
                        </button>

                        {service.ctaSecondary && (
                            <button
                                onClick={handleCall}
                                className="glass border border-white/10 px-12 py-6 rounded-2xl font-bold text-gray-400 hover:text-white transition-all text-lg"
                            >
                                <Phone className="w-5 h-5" />
                                <span>{service.ctaSecondary}</span>
                            </button>
                        )}
                    </div>
                </section>

                {/* Footer */}
                <Footer onCloseModal={onBack} />
            </div>
        </motion.div>
    );
};

export default ServiceDetail;
