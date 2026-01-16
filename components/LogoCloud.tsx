import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const PARTNERS = [
  { name: 'Auramax', tech: 'Logistics', logo: '/assets/brands/auramax.png' },
  { name: 'My Travels', tech: 'Travel & Tours', logo: '/assets/brands/my-travels.png' },
  { name: 'Auramax', tech: 'Logistics', logo: '/assets/brands/auramax.png' },
  { name: 'My Travels', tech: 'Travel & Tours', logo: '/assets/brands/my-travels.png' },
  { name: 'Auramax', tech: 'Logistics', logo: '/assets/brands/auramax.png' },
  { name: 'My Travels', tech: 'Travel & Tours', logo: '/assets/brands/my-travels.png' },
  { name: 'Auramax', tech: 'Logistics', logo: '/assets/brands/auramax.png' },
  { name: 'My Travels', tech: 'Travel & Tours', logo: '/assets/brands/my-travels.png' },
];

const LogoCloud: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [width, setWidth] = useState(0);

  const items = [...PARTNERS, ...PARTNERS];

  useEffect(() => {
    if (!containerRef.current) return;

    const resize = () => {
      const halfWidth = containerRef.current!.scrollWidth / 2;
      setWidth(halfWidth);
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    if (!width) return;

    controls.start({
      x: [0, -width],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: width / 40,
          ease: 'linear',
        },
      },
    });
  }, [width, controls]);

  return (
    <div className="relative py-20 border-y border-white/5 bg-black/40 overflow-hidden group">
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-naxit-charcoal to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-naxit-charcoal to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col items-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[10px] font-mono text-naxit-cyan/40 tracking-[0.5em] uppercase"
        >
          Trusted by Brands
        </motion.div>
      </div>

      <motion.div
        ref={containerRef}
        className="flex whitespace-nowrap will-change-transform"
        animate={controls}
      >
        {items.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className={`flex items-center justify-center gap-1 px-2 transition-all duration-500 ${partner.logo
              ? 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'
              : 'opacity-30 grayscale hover:grayscale-0'
              }`}
          >
            {partner.logo ? (
              <div className="min-w-[280px] flex justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 w-auto object-contain opacity-80"
                  draggable={false}
                />
              </div>
            ) : (
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold tracking-tighter text-white">
                  {partner.name}
                  <span className="text-naxit-cyan">.</span>
                </span>
                <span className="text-[8px] font-mono text-naxit-cyan/60 uppercase tracking-widest -mt-1">
                  {partner.tech}
                </span>
              </div>
            )}
          </div>
        ))}
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1/2 bg-naxit-royal/5 blur-[120px] pointer-events-none" />
    </div>
  );
};

export default LogoCloud;
