
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUp, Linkedin, Instagram, Facebook, MessageCircle, Cpu, Globe, MapPin } from 'lucide-react';

interface FooterProps {
  onCloseModal?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onCloseModal }) => {
  const scrollToTop = () => {
    // Close modal first if it exists
    if (onCloseModal) {
      onCloseModal();
    }

    // Wait for modal to close, then scroll
    setTimeout(() => {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    // Close ServiceDetail FIRST
    if (onCloseModal) {
      onCloseModal();
    }

    // Wait for modal to unmount, then scroll the real page
    setTimeout(() => {
      const el = document.getElementById(targetId);
      const lenis = (window as any).lenis;
      if (lenis && el) {
        lenis.scrollTo(el, { offset: 0, duration: 1.5 });
      } else if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300); // match your exit animation duration
  };


  return (
    <footer className="relative pt-20 pb-10 px-4 border-t border-white/5 bg-naxit-charcoal overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-naxit-royal/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">

          {/* Brand & Status Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <picture>
                <source srcSet="/assets/logo.webp" type="image/webp" />
                <img
                  src="/assets/logo.png"
                  width={202}
                  height={106}
                  loading="lazy"
                  decoding="async"
                  alt="NAXIT Micro Agency - Innovation Partner in Mannar, Sri Lanka"
                  className="h-10 w-auto"
                />
              </picture>
            </div>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-sm">
              Empowering global innovation through native talent. A high-frequency micro-agency for the next generation of digital giants.
            </p>

            {/* Operational Status (UX: Trust Indicator) */}
            <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/5 w-fit">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-naxit-cyan animate-ping absolute inset-0" />
                <div className="w-2 h-2 rounded-full bg-naxit-cyan relative" />
              </div>
              <div className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                Location Base: <span className="text-naxit-cyan">Mannar | Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Sitemap Column */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-mono text-gray-500 tracking-[0.4em] uppercase mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Pricing', id: 'pricing' },
                { name: 'Work', id: 'portfolio' },
                { name: 'FAQ', id: 'faq' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleScroll(e, item.id)}
                    className="text-gray-400 hover:text-naxit-cyan transition-colors font-medium text-sm inline-block group cursor-pointer"
                  >
                    {item.name}
                    <span className="block h-[1px] w-0 group-hover:w-full bg-naxit-cyan transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dedicated Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-mono text-gray-500 tracking-[0.4em] uppercase mb-8">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Web Design Sri Lanka', url: '/web-design-sri-lanka' },
                { name: 'UI/UX Design Studio', url: '/ui-ux-design-sri-lanka' },
                { name: 'Mannar & Jaffna Web Dev', url: '/web-development-mannar-jaffna' },
                { name: 'ROP Retail Software', url: '/rop-retail-software-sri-lanka' },
                { name: 'Graphic Design & Branding', url: '/graphic-design-branding-sri-lanka' },
                { name: 'Mobile App Development', url: '/mobile-app-development-sri-lanka' }
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-400 hover:text-naxit-cyan text-xs transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-naxit-royal group-hover:bg-naxit-cyan transition-colors" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-white/5 space-y-1 text-xs text-gray-400">
              <p>Phone: <a href="tel:+94756811228" className="hover:text-white">+94 75 681 1228</a></p>
              <p>Email: <a href="mailto:naxitofficial@gmail.com" className="hover:text-white">naxitofficial@gmail.com</a></p>
              <p className="text-[11px] text-gray-500">Main St, Mannar, Northern Province, Sri Lanka</p>
            </div>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-mono text-gray-500 tracking-[0.4em] uppercase mb-8">Social Intel</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Linkedin className="w-4 h-4" />, label: 'LI', aria: 'NAXIT on LinkedIn', url: 'https://www.linkedin.com/company/naxitofficial/' },
                { icon: <Instagram className="w-4 h-4" />, label: 'IG', aria: 'NAXIT on Instagram', url: 'https://www.instagram.com/naxitofficial' },
                { icon: <Facebook className="w-4 h-4" />, label: 'FB', aria: 'NAXIT on Facebook', url: 'https://www.facebook.com/naxitofficial' },
                { icon: <MapPin className="w-4 h-4" />, label: 'GB', aria: 'Review NAXIT on Google', url: 'https://share.google/kLF8l3VpKfylUEVqX' },
                { icon: <MessageCircle className="w-4 h-4" />, label: 'WA', aria: 'NAXIT WhatsApp channel', url: 'https://whatsapp.com/channel/0029VaCY8ulCHDyowtpSzx30' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.aria}
                  className="glass p-3 rounded-xl border border-white/5 flex items-center justify-center hover:border-naxit-cyan/40 hover:text-naxit-cyan hover:scale-110 transition-all group cursor-pointer"
                  title={social.label}
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>{social.icon}</motion.div>
                </a>
              ))}
            </div>
            <div className="mt-8">
              <button
                onClick={scrollToTop}
                className="w-full flex items-center justify-between px-6 py-4 glass rounded-2xl border border-white/5 hover:border-naxit-cyan transition-all group"
              >
                <span className="text-[10px] font-mono tracking-widest text-gray-500 group-hover:text-white uppercase">Return to Top</span>
                <ArrowUp className="w-4 h-4 text-naxit-cyan group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap items-center gap-6 font-mono text-[9px] tracking-[0.2em] text-gray-600 uppercase">
            <span className="text-gray-400">© 2026 NAXIT INC.</span>
            <Link to="/privacy" className="hover:text-naxit-cyan transition-colors">Privacy Protocol</Link>
            <Link to="/terms" className="hover:text-naxit-cyan transition-colors">Terms of Service</Link>
            <Link to="/#pricing" className="hover:text-naxit-cyan transition-colors">Pricing</Link>
          </div>
          <div className="flex items-center gap-6">
            <nav className="lang-switch flex items-center gap-2 text-xs font-mono" aria-label="Language options">
              <a href="/web-design-sri-lanka" hrefLang="en" className="text-gray-400 hover:text-white">English</a>
              <span className="text-gray-600">|</span>
              <a href="/ta/web-design-sri-lanka" hrefLang="ta" lang="ta" className="text-gray-400 hover:text-white">தமிழ்</a>
              <span className="text-gray-600">|</span>
              <a href="/si/web-design-sri-lanka" hrefLang="si" lang="si" className="text-gray-400 hover:text-white">සිංහල</a>
            </nav>
            <div className="flex items-center gap-2 text-gray-600">
              <Globe className="w-3 h-3" />
              <span className="text-[9px] font-mono uppercase tracking-widest">Sri Lanka</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Cpu className="w-3 h-3" />
              <span className="text-[9px] font-mono uppercase tracking-widest">Encrypted Hub</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
