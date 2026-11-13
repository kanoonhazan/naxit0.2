import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  onCloseModal?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCloseModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (onCloseModal) {
      onCloseModal();
    }

    if (targetId === 'contact') {
      navigate('/contact');
      return;
    }

    if (targetId === 'pricing') {
      navigate('/pricing');
      return;
    }

    if (targetId === 'portfolio') {
      navigate('/portfolio');
      return;
    }

    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
      return;
    }

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const lenis = (window as any).lenis;
        if (lenis) {
          lenis.scrollTo(element, { offset: 0, duration: 1.5 });
        } else {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    }, 100);
  };

  const navLinks = [
    { name: 'About', target: 'about', href: '/#about' },
    { name: 'Services', target: 'services', href: '/#services' },
    { name: 'Pricing', target: 'pricing', href: '/pricing' },
    { name: 'Work', target: 'portfolio', href: '/portfolio' },
    { name: 'FAQ', target: 'faq', href: '/#faq' },
    { name: 'Contact', target: 'contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-2 md:top-4 left-0 right-0 mx-auto w-[95%] md:w-[90%] max-w-[1920px] z-50 border border-white/10 glass bg-black/50 backdrop-blur-md rounded-xl md:rounded-2xl">
      <nav aria-label="Primary Navigation">
        <div className="w-full mx-auto px-4 md:px-6 py-1 md:py-3 flex items-center justify-between">
          <a href="/#hero" onClick={(e) => handleScroll(e, 'hero')} className="flex items-center" aria-label="NAXIT Homepage">
            <picture>
              <source srcSet="/assets/logo.webp" type="image/webp" />
              <img
                src="/assets/logo.png"
                width={202}
                height={106}
                alt="NAXIT Micro Agency - Best Digital Solutions in Mannar, Sri Lanka"
                className="h-7 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                fetchPriority="high"
                decoding="async"
                loading="eager"
              />
            </picture>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.target)}
                className="hover:text-naxit-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <LanguageSwitcher slug="web-design-sri-lanka" currentLang="en" />
            <button
              type="button"
              onClick={(e) => handleScroll(e, 'contact')}
              className="bg-naxit-royal hover:bg-naxit-cyan hover:text-black text-white px-7 py-1.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,85,255,0.3)]"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 text-white hover:text-naxit-cyan transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-navigation" className="md:hidden overflow-hidden border-t border-white/10">
            <div className="flex flex-col items-center py-8 gap-6 text-sm font-medium tracking-widest uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.target)}
                  className="w-full text-center py-4 hover:text-naxit-cyan transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <LanguageSwitcher slug="web-design-sri-lanka" currentLang="en" />
              </div>
              <button
                type="button"
                onClick={(e) => handleScroll(e, 'contact')}
                className="bg-naxit-royal hover:bg-naxit-cyan hover:text-black text-white px-8 py-3 rounded-full text-sm font-bold transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
