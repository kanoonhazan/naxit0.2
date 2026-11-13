import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Calendar, User, Mail, MessageSquare, Terminal, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 px-4 relative overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-naxit-royal/5 blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-naxit-cyan font-mono text-[10px] tracking-[0.4em] uppercase mb-6"
          >
            <div className="w-8 h-[1px] bg-naxit-cyan" />
            <span>Entity & Authority</span>
          </motion.div>

          <motion.h2
            id="about-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.05] mb-8"
          >
            About <span className="text-gradient">NAXIT</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg md:text-xl font-light leading-relaxed"
          >
            Founded in 2022 by Hazan Kanoon, NAXIT is a digital agency based at 191, 11 Moor St, Mannar, Northern Province, Sri Lanka. NAXIT was founded to help regional firms grow. Many local shop owners, private schools, and new startups struggle with slow software and high agency fees. NAXIT builds clean, fast websites and practical tools made for our local market. We serve retail shops in Mannar and Jaffna, as well as teams in Colombo. We help native firms build trust, get found on Google, and run daily work with ease. Open 24 hours every day.
          </motion.p>
        </div>

        {/* E-E-A-T Signal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-6 rounded-3xl border border-white/5 space-y-3"
          >
            <div className="w-10 h-10 rounded-2xl glass flex items-center justify-center text-naxit-cyan border border-white/10">
              <User className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Founder & Lead</div>
            <h3 className="text-xl font-display font-bold text-white">Hazan Kanoon</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Design director and software strategist leading digital transformation for Sri Lankan local business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-6 rounded-3xl border border-white/5 space-y-3"
          >
            <div className="w-10 h-10 rounded-2xl glass flex items-center justify-center text-naxit-cyan border border-white/10">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Location Base</div>
            <h3 className="text-xl font-display font-bold text-white">191, 11 Moor St, Mannar</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Open 24 hours every day. Serving retail stores, educational institutes, and SMEs island-wide and globally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass p-6 rounded-3xl border border-white/5 space-y-3"
          >
            <div className="w-10 h-10 rounded-2xl glass flex items-center justify-center text-naxit-cyan border border-white/10">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Protocol Verified</div>
            <h3 className="text-xl font-display font-bold text-white">
              <time dateTime="2026-11-05">Nov 5, 2026</time>
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Active release version 2.0 with current performance, accessibility, and E-E-A-T validation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass p-6 rounded-3xl border border-white/5 space-y-3"
          >
            <div className="w-10 h-10 rounded-2xl glass flex items-center justify-center text-naxit-cyan border border-white/10">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Direct Contact</div>
            <h3 className="text-xl font-display font-bold text-white">Verified Channels</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              WhatsApp: +94 75 681 1228<br />Email: naxitofficial@gmail.com
            </p>
          </motion.div>
        </div>

        {/* Semantic Definition List for Key Terms (P1-5 & P2-2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5"
        >
          <div className="text-[10px] font-mono text-naxit-cyan uppercase tracking-[0.4em] mb-4">
            Key Industry Terms
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
            Digital Foundation Definitions
          </h3>

          <dl className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2 border-l border-naxit-cyan/30 pl-4">
              <dt className="text-white font-bold font-display text-base tracking-wide">NAXIT</dt>
              <dd className="text-gray-400 text-sm leading-relaxed">
                NAXIT is a digital solutions agency in Sri Lanka that builds websites and local retail software.
              </dd>
            </div>
            <div className="space-y-2 border-l border-naxit-cyan/30 pl-4">
              <dt className="text-white font-bold font-display text-base tracking-wide">UI/UX Design</dt>
              <dd className="text-gray-400 text-sm leading-relaxed">
                UI/UX design is a digital practice that makes websites and apps simple and easy for people to use.
              </dd>
            </div>
            <div className="space-y-2 border-l border-naxit-cyan/30 pl-4">
              <dt className="text-white font-bold font-display text-base tracking-wide">ROP Platform</dt>
              <dd className="text-gray-400 text-sm leading-relaxed">
                ROP is a lightweight retail software platform made to manage daily billing and shop stock.
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

