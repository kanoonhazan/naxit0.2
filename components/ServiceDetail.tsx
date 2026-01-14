
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, MessageCircle, Phone } from 'lucide-react';
import { Service } from '../types';
import Footer from './Footer';

interface ServiceDetailProps {
    service: Service;
    onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
    const handleWhatsApp = () => {
        window.open('https://wa.me/94777123456', '_blank');
    };

    const handleCall = () => {
        window.location.href = 'tel:+94777123456';
    };

    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[200] bg-naxit-charcoal overflow-y-auto"
            data-lenis-prevent
        >
            {/* Header with Back Button */}
            <div className="sticky top-0 z-[210] bg-naxit-charcoal/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 py-6 flex items-center gap-4">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                        <div className="w-10 h-10 glass rounded-full flex items-center justify-center group-hover:bg-white/10 transition-all">
                            <ArrowLeft className="w-5 h-5" />
                        </div>
                        <span className="hidden sm:inline font-medium">Back to Services</span>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
                {/* Header */}
                <div className="text-center mb-16">
                    {service.badge && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 bg-naxit-cyan/10 border border-naxit-cyan/30 rounded-full text-naxit-cyan text-sm font-mono tracking-wider uppercase mb-6"
                        >
                            {service.badge}
                        </motion.div>
                    )}

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight"
                    >
                        {service.title}
                    </motion.h1>

                    {service.subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
                        >
                            {service.subtitle}
                        </motion.p>
                    )}
                </div>

                {/* Problem Section */}
                {service.problem && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="glass p-8 md:p-12 rounded-3xl mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                            {service.problemTitle || 'Why do you need this?'}
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {service.problem}
                        </p>
                    </motion.div>
                )}

                {/* Target Audience */}
                {service.targetAudience && service.targetAudience.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">
                            {service.targetAudienceTitle || 'Who is this for?'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.targetAudience.map((audience, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + index * 0.05 }}
                                    className="flex items-center gap-3 glass p-4 rounded-2xl hover:bg-white/5 transition-colors"
                                >
                                    <div className="w-2 h-2 bg-naxit-cyan rounded-full flex-shrink-0" />
                                    <span className="text-gray-300">{audience}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Inclusions */}
                {service.inclusions && service.inclusions.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">
                            {service.inclusionsTitle || 'What is included?'}
                        </h2>
                        <div className="space-y-6">
                            {service.inclusions.map((inclusion, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 + index * 0.1 }}
                                    className="glass p-6 md:p-8 rounded-2xl hover:border-naxit-cyan/30 transition-all group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-naxit-cyan/10 border border-naxit-cyan/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-naxit-cyan group-hover:border-naxit-cyan transition-all">
                                            <Check className="w-4 h-4 text-naxit-cyan group-hover:text-black transition-colors" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2">{inclusion.title}</h3>
                                            <p className="text-gray-400 leading-relaxed">{inclusion.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Result Section */}
                {service.result && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="glass p-8 md:p-12 rounded-3xl mb-12 border-2 border-naxit-cyan/20"
                    >
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                            {service.resultTitle || 'The Result'}
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {service.result}
                        </p>
                    </motion.div>
                )}

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="text-center glass p-8 md:p-12 rounded-3xl mb-16"
                >
                    {service.ctaText && (
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            {service.ctaText}
                        </h2>
                    )}
                    {service.ctaSubtext && (
                        <p className="text-gray-400 mb-8 text-lg">
                            {service.ctaSubtext}
                        </p>
                    )}

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={handleWhatsApp}
                            className="group relative flex items-center gap-3 bg-naxit-cyan text-black font-bold py-5 px-8 rounded-2xl hover:scale-105 transition-all active:scale-95 w-full sm:w-auto"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>{service.ctaPrimary || 'Get a Quote on WhatsApp'}</span>
                        </button>

                        {service.ctaSecondary && (
                            <button
                                onClick={handleCall}
                                className="group relative flex items-center gap-3 glass border border-white/10 font-bold py-5 px-8 rounded-2xl hover:bg-white/5 transition-all w-full sm:w-auto"
                            >
                                <Phone className="w-5 h-5" />
                                <span>{service.ctaSecondary}</span>
                            </button>
                        )}
                    </div>
                </motion.div>

                {/* Footer */}
                <Footer onCloseModal={onBack} />
            </div>
        </motion.div>
    );
};

export default ServiceDetail;
