
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Users, Globe, BarChart3, Fingerprint } from 'lucide-react';

const OPERATIONAL_DATA = [
  {
    label: 'Deployment Velocity',
    value: '7.2 Days',
    icon: <Zap className="w-4 h-4" />,
    status: 'High-Frequency',
    desc: 'Average time from vision to global launch.'
  },
  {
    label: 'Native Talent Yield',
    value: 'Top 0.8%',
    icon: <Fingerprint className="w-4 h-4" />,
    status: 'Curated',
    desc: 'Elite local innovators hand-picked for projects.'
  },
  {
    label: 'Transformation ROI',
    value: '+310%',
    icon: <BarChart3 className="w-4 h-4" />,
    status: 'Aggressive',
    desc: 'Average increase in client brand equity post-launch.'
  },
  {
    label: 'Innovation Nodes',
    value: '42 Active',
    icon: <Users className="w-4 h-4" />,
    status: 'Synced',
    desc: 'Global network of native specialists.'
  },
  {
    label: 'Digital Sovereignty',
    value: '100% Owned',
    icon: <Target className="w-4 h-4" />,
    status: 'Encrypted',
    desc: 'Zero-debt tech stacks for our partners.'
  },
  {
    label: 'Global Uplink',
    value: 'Tier-1',
    icon: <Globe className="w-4 h-4" />,
    status: 'Operational',
    desc: 'Infrastructure ready for planetary scale.'
  },
];

const Matrix: React.FC = () => {
  return (
    <section id="matrix" className="py-40 px-4 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Narrative Branding */}
          <div className="lg:col-span-5 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-naxit-cyan font-mono text-[10px] tracking-[0.5em] uppercase mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-naxit-cyan"></span>
              Strategic Intelligence v4.0
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold leading-[0.9] mb-8 tracking-tighter"
            >
              The NAXIT <br />
              <span className="text-gradient">Efficiency</span> <br />
              Protocol
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-400 text-lg font-light max-w-md leading-relaxed"
            >
              We don't just build websites; we engineer digital dominance. Our micro-agency structure allows for sub-atomic focus on every pixel, measured against global performance benchmarks.
            </motion.p>
          </div>

          {/* Terminal View */}
          <div className="lg:col-span-7">
            <div className="glass rounded-[3rem] border border-white/10 overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-naxit-charcoal/80">

              {/* Terminal Header */}
              <div className="bg-white/5 px-8 py-5 border-b border-white/10 flex justify-between items-center">
                <div className="flex gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                </div>
                <div className="text-[10px] font-mono text-naxit-cyan/60 tracking-[0.3em] uppercase animate-pulse">
                  System_Diagnostic_Running...
                </div>
              </div>

              {/* Data Grid */}
              <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 relative">
                {/* Background Scanning Line */}
                <motion.div
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-0 w-full h-[1px] bg-naxit-cyan/20 z-0 pointer-events-none blur-[1px] will-change-[top]"
                />

                {OPERATIONAL_DATA.map((point, i) => (
                  <motion.div
                    key={point.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative group cursor-default"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-naxit-cyan group-hover:scale-110 transition-transform duration-300">
                        {point.icon}
                      </div>
                      <div className="h-[1px] flex-grow bg-white/5 group-hover:bg-naxit-cyan/20 transition-colors" />
                      <div className="text-[10px] font-mono text-naxit-cyan/40 uppercase tracking-tighter">
                        {point.status}
                      </div>
                    </div>

                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-1 group-hover:text-gray-400 transition-colors">
                      {point.label}
                    </div>
                    <div className="text-4xl font-display font-bold text-white mb-2 group-hover:text-naxit-cyan transition-colors">
                      {point.value}
                    </div>
                    <p className="text-[10px] text-gray-600 font-mono leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                      // {point.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Visualization Footer */}
              <div className="px-8 pb-8 pt-4">
                <div className="flex justify-between items-end gap-12">
                  <div className="flex-grow space-y-4">
                    <div className="flex justify-between text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                      <span>Agency Agility Index</span>
                      <span className="text-naxit-cyan">98.4%</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '98.4%' }}
                        className="h-full bg-gradient-to-r from-naxit-royal via-naxit-cyan to-naxit-royal bg-[length:200%_100%] animate-[gradient_3s_linear_infinite]"
                      />
                    </div>
                  </div>
                  <div className="hidden md:block text-[9px] font-mono text-gray-600 leading-none text-right">
                    AUTH_NODE: 0x82...F92 <br />
                    STATUS: SECURE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Decals */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-naxit-cyan" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-naxit-cyan" />
      </div>
    </section>
  );
};

export default Matrix;
