import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    const lenis = (window as any).lenis;
    if (lenis && el) {
      lenis.scrollTo(el, { offset: 0, duration: 1.5 });
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-36 pb-20 md:pt-32 md:pb-28">
      {/* Subtle Static Background Orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-20 w-96 h-96 bg-naxit-royal/10 rounded-full blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-naxit-cyan/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 text-center max-w-6xl">
        <div className="inline-block text-naxit-cyan font-display text-sm md:text-base uppercase tracking-[0.4em] mb-6">
          Intelligence Unleashed
        </div>

        <h1
          id="hero-heading"
          className="text-4xl md:text-[5.5rem] lg:text-[7rem] font-display font-extrabold leading-[1.08] md:leading-[1.02] mb-6 tracking-tighter text-white"
        >
          Web Design &amp;{' '}
          <span className="text-gradient">Digital Solutions</span>{' '}
          for Sri Lankan Businesses
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto mb-6 leading-relaxed">
          NAXIT is a digital agency in Sri Lanka. We build fast websites, clean user interfaces, and business tools like ROP. We help local shops, schools, and startups grow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="group relative px-10 py-5 bg-white text-black font-bold rounded-2xl overflow-hidden active:scale-95 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_20px_40px_rgba(0,212,255,0.2)]"
          >
            <span className="relative z-10">Launch Your Vision</span>
            <div className="absolute inset-0 bg-naxit-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('services')}
            className="px-10 py-5 glass rounded-2xl font-medium border border-white/10 hover:border-naxit-cyan/30 transition-all hover:bg-white/5 text-white"
          >
            Explore Expertise
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        type="button"
        aria-label="Scroll to services"
        onClick={() => scrollToSection('services')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer p-3 opacity-60 hover:opacity-100 transition-opacity"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-naxit-cyan via-white/20 to-transparent" aria-hidden="true" />
      </button>
    </section>
  );
};

export default Hero;
