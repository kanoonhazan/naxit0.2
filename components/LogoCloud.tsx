import React from 'react';

const PARTNERS = [
  { name: 'Auramax', tech: 'Logistics', logo: '/assets/brands/auramax-sm.png', logoWebp: '/assets/brands/auramax-sm.webp' },
  { name: 'My Travels', tech: 'Travel & Tours', logo: '/assets/brands/my-travels-sm.png', logoWebp: '/assets/brands/my-travels-sm.webp' },
  { name: 'Auramax', tech: 'Logistics', logo: '/assets/brands/auramax-sm.png', logoWebp: '/assets/brands/auramax-sm.webp' },
  { name: 'My Travels', tech: 'Travel & Tours', logo: '/assets/brands/my-travels-sm.png', logoWebp: '/assets/brands/my-travels-sm.webp' },
  { name: 'Auramax', tech: 'Logistics', logo: '/assets/brands/auramax-sm.png', logoWebp: '/assets/brands/auramax-sm.webp' },
  { name: 'My Travels', tech: 'Travel & Tours', logo: '/assets/brands/my-travels-sm.png', logoWebp: '/assets/brands/my-travels-sm.webp' },
  { name: 'Auramax', tech: 'Logistics', logo: '/assets/brands/auramax-sm.png', logoWebp: '/assets/brands/auramax-sm.webp' },
  { name: 'My Travels', tech: 'Travel & Tours', logo: '/assets/brands/my-travels-sm.png', logoWebp: '/assets/brands/my-travels-sm.webp' },
];

const LogoCloud: React.FC = () => {
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <div className="relative py-12 md:py-20 border-y border-white/5 bg-black/40 overflow-hidden group">
      {/* Edge fades */}
      <div aria-hidden="true" className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-naxit-charcoal to-transparent z-10 pointer-events-none" />
      <div aria-hidden="true" className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-naxit-charcoal to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col items-center mb-10">
        <p className="text-[10px] font-mono text-naxit-cyan tracking-[0.5em] uppercase">
          Brands we&apos;ve helped grow
        </p>
      </div>

      <div className="animate-marquee whitespace-nowrap">
        {items.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            aria-hidden={index >= PARTNERS.length ? true : undefined}
            className="flex items-center justify-center gap-1 px-2 transition-all duration-500 opacity-60 grayscale hover:grayscale-0 hover:opacity-100"
          >
            <div className="min-w-[280px] flex justify-center">
              <picture>
                <source srcSet={partner.logoWebp} type="image/webp" />
                <img
                  src={partner.logo}
                  width={320}
                  height={160}
                  alt={index >= PARTNERS.length ? '' : `${partner.name} - Trusted Partner in Sri Lanka Digital Ecosystem`}
                  className="h-20 w-auto object-contain opacity-90"
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        ))}
      </div>

      {/* Ambient glow */}
      <div aria-hidden="true" className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1/2 bg-naxit-royal/5 blur-[120px] pointer-events-none" />
    </div>
  );
};

export default LogoCloud;
