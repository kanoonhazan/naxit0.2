
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('Initializing Neural Core...');

  useEffect(() => {
    const sequence = [
      { p: 15, t: 'Calibrating Visual Shaders...' },
      { p: 40, t: 'Establishing Secure Uplink...' },
      { p: 65, t: 'Processing Local Talent Data...' },
      { p: 85, t: 'Optimizing Innovation Nodes...' },
      { p: 100, t: 'NAXIT System Online.' }
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < sequence.length) {
        setProgress(sequence[current].p);
        setText(sequence[current].t);
        current++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[200] bg-naxit-charcoal flex flex-col items-center justify-center p-6"
    >
      <div className="w-full max-w-xs">
        <div className="flex justify-between items-end mb-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-display font-bold tracking-tighter"
          >
            NAXIT<span className="text-naxit-cyan">.</span>
          </motion.div>
          <div className="text-[10px] font-mono text-naxit-cyan opacity-60">
            {progress}%
          </div>
        </div>
        
        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden mb-4">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-naxit-cyan shadow-[0_0_10px_rgba(0,212,255,0.5)]"
          />
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={text}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] text-center"
          >
            {text}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-naxit-royal rounded-full blur-[150px] animate-pulse" />
      </div>
    </motion.div>
  );
};

export default Preloader;
