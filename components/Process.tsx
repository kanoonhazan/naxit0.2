import React from 'react';
import { motion } from 'framer-motion';
import { Search, Map, Layers, Rocket, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    id: '01',
    title: 'Understand',
    subtitle: 'Business & Goal Ingestion',
    icon: <Search className="w-5 h-5 md:w-6 md:h-6" />,
    description: 'We decode your business DNA. No assumptions, no trends—just raw clarity on what actually moves your bottom line. We study your customers and define success before a single pixel is moved.',
    deliverables: ['Goal Identification', 'Market Context', 'User Archetypes'],
    accent: 'from-naxit-cyan/20 to-transparent'
  },
  {
    id: '02',
    title: 'Plan',
    subtitle: 'Architecture & Strategy',
    icon: <Map className="w-5 h-5 md:w-6 md:h-6" />,
    description: 'We map the shortest path to value. We decide which platforms matter and which features are noise. This phase eliminates guesswork, saving you time and capital while ensuring a solid foundation.',
    deliverables: ['System Roadmap', 'Logic Flows', 'Resource Allocation'],
    accent: 'from-naxit-royal/20 to-transparent'
  },
  {
    id: '03',
    title: 'Build',
    subtitle: 'Precision Development',
    icon: <Layers className="w-5 h-5 md:w-6 md:h-6" />,
    description: 'High-fidelity execution. We design and build in tight feedback loops, ensuring every component is clean, professional, and optimized for performance. You see progress in real-time, not in a void.',
    deliverables: ['Interactive Prototyping', 'Clean Code Architecture', 'Visual Integrity'],
    accent: 'from-white/10 to-transparent'
  },
  {
    id: '04',
    title: 'Evolve',
    subtitle: 'Launch & Continuous Support',
    icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
    description: 'Launch is the beginning, not the end. we ensure everything scales, monitoring performance and providing a steady hand as you grow. We guide you on what to improve next based on real data.',
    deliverables: ['Deployment Sync', 'Performance Audits', 'Growth Advisory'],
    accent: 'from-naxit-cyan/30 to-transparent'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-48 relative overflow-hidden bg-transparent">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-naxit-cyan/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-naxit-royal/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-naxit-cyan font-mono text-[10px] tracking-[0.5em] uppercase mb-8 flex items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-naxit-cyan/30" />
            Operational Framework
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-[8rem] font-display font-bold leading-[0.85] tracking-tighter"
            >
              How We <br /><span className="text-gradient">Work</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed max-w-xl"
            >
              A strategic roadmap engineered for clarity. We eliminate complexity to deliver predictable, high-impact results for your business.
            </motion.p>
          </div>
        </div>

        {/* Roadmap Items */}
        <div className="space-y-12 md:space-y-24">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
                {/* Visual Connector & Index */}
                <div className="lg:col-span-1 hidden lg:flex flex-col items-center">
                  <div className="text-2xl font-display font-bold text-naxit-cyan/20 group-hover:text-naxit-cyan transition-colors duration-500">
                    {step.id}
                  </div>
                  <div className="flex-grow w-[1px] bg-gradient-to-b from-naxit-cyan/20 to-transparent mt-4 mb-4" />
                </div>

                {/* Main Content Card */}
                <div className={`lg:col-span-11 glass rounded-[3rem] p-8 md:p-16 border border-white/5 hover:border-naxit-cyan/20 transition-all duration-700 bg-gradient-to-br ${step.accent} relative overflow-hidden`}>
                  {/* Step ID for Mobile */}
                  <div className="lg:hidden text-naxit-cyan font-mono text-xs tracking-widest mb-4">STEP {step.id}</div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
                    <div className="space-y-8">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-white/5 flex items-center justify-center text-naxit-cyan group-hover:bg-naxit-cyan group-hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] group-hover:text-black transition-all duration-700">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">{step.title}</h3>
                          <p className="text-naxit-cyan font-mono text-[10px] tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="space-y-8 lg:pl-12 lg:border-l border-white/5">
                      <h4 className="text-[10px] font-mono text-gray-500 tracking-[0.4em] uppercase">Core Deliverables</h4>
                      <div className="space-y-4">
                        {step.deliverables.map((item, i) => (
                          <div key={i} className="flex items-center gap-4 group/item">
                            <div className="w-5 h-5 rounded-full bg-naxit-cyan/10 flex items-center justify-center text-naxit-cyan group-hover/item:bg-naxit-cyan group-hover/item:text-black transition-colors">
                              <CheckCircle2 className="w-3 h-3" />
                            </div>
                            <span className="text-gray-300 text-base md:text-lg font-light group-hover/item:text-white transition-colors">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Corner Decoration */}
                      <div className="absolute top-0 right-0 p-8 text-white/[0.02] font-display font-black text-9xl pointer-events-none select-none -translate-x-1/4 translate-y-1/4 scale-150 rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                        {step.id}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Result Section - UX Refinement: Positioned after steps as a conclusion */}
        <div className="max-w-7xl mx-auto px-4 mt-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 md:p-20 rounded-[3.5rem] border border-naxit-cyan/20 bg-gradient-to-br from-naxit-royal/10 via-transparent to-transparent flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Decorative Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-naxit-cyan/5 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-naxit-cyan/10 rounded-full pointer-events-none" />

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-20 h-20 rounded-full bg-naxit-cyan/10 flex items-center justify-center mb-10 border border-naxit-cyan/30 shadow-[0_0_30px_rgba(0,212,255,0.15)]"
            >
              <Rocket className="w-10 h-10 text-naxit-cyan" />
            </motion.div>

            <h4 className="text-[10px] font-mono text-naxit-cyan tracking-[0.5em] uppercase mb-6">The Result</h4>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 max-w-2xl leading-tight">
              <span className="text-gradient">Less confusion. Faster progress. Results that make sense for your business.</span>
            </h2>

            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-naxit-cyan/40 to-transparent mb-8" />

            <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em]">
              Built for Business | Not Guesswork
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Process;
