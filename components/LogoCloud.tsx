
import React from 'react';
import { motion } from 'framer-motion';

const PARTNERS = [
  { name: 'Xenon', tech: 'Quantum Computing' },
  { name: 'Aethelgard', tech: 'AI Logistics' },
  { name: 'Vanguard', tech: 'Industrial Tech' },
  { name: 'Nebula', tech: 'Cloud Infra' },
  { name: 'Quantum', tech: 'Neural Nets' },
  { name: 'Nova', tech: 'Cyber Security' },
  { name: 'Vector', tech: 'SaaS Design' },
  { name: 'Atoms', tech: 'Nanotech' },
];

const LogoCloud: React.FC = () => {
  // Duplicate the array to create a seamless loop
  const duplicatedPartners = [...PARTNERS, ...PARTNERS];

  return (
    <div className="relative py-20 border-y border-white/5 bg-black/40 overflow-hidden group">
      {/* Decorative side masks for smooth fade-in/out */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-naxit-charcoal to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-naxit-charcoal to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col items-center mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[10px] font-mono text-naxit-cyan/40 tracking-[0.5em] uppercase"
        >
          Trusted by Industry Titans
        </motion.div>
      </div>

      <motion.div 
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <motion.div 
            key={`${partner.name}-${index}`}
            whileHover={{ scale: 1.1, opacity: 1 }}
            className="flex items-center gap-4 px-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 cursor-default"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold tracking-tighter text-white">
                {partner.name}<span className="text-naxit-cyan">.</span>
              </span>
              <span className="text-[8px] font-mono text-naxit-cyan/60 uppercase tracking-widest -mt-1">
                {partner.tech}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Subtle background glow that follows the logos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-naxit-royal/5 blur-[100px] pointer-events-none" />
    </div>
  );
};

export default LogoCloud;
