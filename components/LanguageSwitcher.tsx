import React from 'react';
import { Language } from '../data/seoPages';

interface LanguageSwitcherProps {
  slug?: string;
  currentLang?: Language;
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  slug = 'web-design-sri-lanka',
  currentLang = 'en',
  className = ''
}) => {
  const enUrl = slug === 'home' ? '/' : `/${slug}`;
  const taUrl = `/ta/${slug === 'home' ? 'web-design-sri-lanka' : slug}`;
  const siUrl = `/si/${slug === 'home' ? 'web-design-sri-lanka' : slug}`;

  return (
    <nav className={`lang-switch inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider ${className}`} aria-label="Language Selector">
      <a
        href={enUrl}
        hrefLang="en"
        className={`transition-colors duration-200 ${currentLang === 'en' ? 'text-naxit-cyan font-bold underline underline-offset-4' : 'text-gray-400 hover:text-white'}`}
      >
        English
      </a>
      <span className="text-white/20 select-none">|</span>
      <a
        href={taUrl}
        hrefLang="ta"
        lang="ta"
        className={`transition-colors duration-200 ${currentLang === 'ta' ? 'text-naxit-cyan font-bold underline underline-offset-4' : 'text-gray-400 hover:text-white'}`}
      >
        தமிழ்
      </a>
      <span className="text-white/20 select-none">|</span>
      <a
        href={siUrl}
        hrefLang="si"
        lang="si"
        className={`transition-colors duration-200 ${currentLang === 'si' ? 'text-naxit-cyan font-bold underline underline-offset-4' : 'text-gray-400 hover:text-white'}`}
      >
        සිංහල
      </a>
    </nav>
  );
};

export default LanguageSwitcher;

