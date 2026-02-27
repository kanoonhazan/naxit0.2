
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

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

    // Close any open modal first
    if (onCloseModal) {
      onCloseModal();
    }

    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
      return;
    }

    // Wait a bit for modal to close, then scroll
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
    { name: 'Home', target: 'hero' },
    { name: 'Services', target: 'services' },
    { name: 'Work', target: 'portfolio' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-2 md:top-4 left-0 right-0 mx-auto w-[95%] md:w-[90%] max-w-[1920px] z-50 border border-white/10 glass bg-black/50 backdrop-blur-md rounded-xl md:rounded-2xl"
    >
      <div className="w-full mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <a href="/#hero" onClick={(e) => handleScroll(e, 'hero')}>
          <img
            src="/assets/logo.png"
            alt="NAXIT Micro Agency - Best Digital Solutions in Mannar, Sri Lanka"
            className="h-7 cursor-pointer hover:opacity-80 transition-opacity"
            fetchPriority="high"
            decoding="async"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 text-sm font-medium tracking-widest uppercase items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`/#${link.target}`}
              onClick={(e) => handleScroll(e, link.target)}
              className="hover:text-naxit-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={(e) => handleScroll(e, 'contact')}
            className="bg-naxit-royal hover:bg-naxit-cyan text-white px-8 py-1.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,85,255,0.3)]"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-naxit-cyan transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="flex flex-col items-center py-8 gap-6 text-sm font-medium tracking-widest uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`/#${link.target}`}
                  onClick={(e) => handleScroll(e, link.target)}
                  className="w-full text-center py-4 hover:text-naxit-cyan transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={(e) => handleScroll(e, 'contact')}
                className="bg-naxit-royal hover:bg-naxit-cyan text-white px-8 py-3 rounded-full text-sm font-bold transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
