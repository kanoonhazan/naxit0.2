import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, MessageSquare, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONFIRMED_PRICE_LIST } from '../data/seoPages';

interface PricingProps {
  isDedicatedPage?: boolean;
}

export const Pricing: React.FC<PricingProps> = ({ isDedicatedPage = false }) => {
  return (
    <section id="pricing" className="py-24 md:py-36 px-4 relative overflow-hidden bg-transparent">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-naxit-royal/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-naxit-cyan font-mono text-[10px] tracking-[0.4em] uppercase mb-6"
          >
            <div className="w-8 h-[1px] bg-naxit-cyan" />
            <span>Honest, Transparent Pricing</span>
          </motion.div>

          {isDedicatedPage ? (
            <motion.h1
              id="pricing-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.05] mb-6"
            >
              Simple, <span className="text-gradient">Fixed Prices</span>
            </motion.h1>
          ) : (
            <motion.h2
              id="pricing-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.05] mb-6"
            >
              Clear Prices. <span className="text-gradient">Real Deadlines.</span>
            </motion.h2>
          )}

          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            Confirmed rates in Sri Lankan Rupees (LKR) with guaranteed turnaround times. No hidden agency markups, no vague estimates.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {CONFIRMED_PRICE_LIST.map((item, index) => {
            const whatsappText = encodeURIComponent(`Hi NAXIT, I am inquiring about ${item.service} (${item.startingPrice}).`);
            const whatsappUrl = `https://wa.me/94756811228?text=${whatsappText}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-naxit-cyan/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-naxit-cyan uppercase tracking-widest px-3 py-1 glass rounded-full border border-naxit-cyan/20">
                      Tier 0{index + 1}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                      <Clock className="w-3.5 h-3.5 text-naxit-cyan" />
                      <span>{item.deliveryTime}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-naxit-cyan transition-colors">
                      {item.service}
                    </h3>
                    <div className="text-2xl sm:text-3xl font-display font-black text-white mt-3 font-mono">
                      {item.startingPrice}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      <span>Explore details & keywords</span>
                      <ArrowRight className="w-3.5 h-3.5 text-naxit-cyan" />
                    </Link>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 glass rounded-xl border border-white/10 hover:border-naxit-cyan/40 hover:bg-white/5 font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 text-white group-hover:bg-naxit-royal group-hover:border-naxit-royal transition-all duration-300"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Get Fixed Quote</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <div className="glass p-6 md:p-8 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl glass border border-naxit-cyan/30 flex items-center justify-center text-naxit-cyan shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-display font-bold text-white">
                NAXIT Guarantee
              </h4>
              <p className="text-xs text-gray-400">
                Fixed quote agreed before any work starts. Milestone reviews throughout development.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/94756811228"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-naxit-cyan transition-colors shrink-0"
          >
            Direct WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

