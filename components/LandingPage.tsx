import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Hero from './Hero';
import LogoCloud from './LogoCloud';

const About = lazy(() => import('./About'));
const Services = lazy(() => import('./Services'));
const Process = lazy(() => import('./Process'));
const Pricing = lazy(() => import('./Pricing'));
const Insights = lazy(() => import('./Insights'));
const Portfolio = lazy(() => import('./Portfolio'));
const FAQ = lazy(() => import('./FAQ'));
const Contact = lazy(() => import('./Contact'));
const Footer = lazy(() => import('./Footer'));

const LandingPage: React.FC = () => {
  return (
    <div className="relative">
      <Helmet>
        <title>Naxit | Best Web Design & Digital Agency in Sri Lanka</title>
        <meta
          name="description"
          content="NAXIT is a digital studio in Mannar, Sri Lanka: web design, UI/UX, branding and ROP retail software. Fast delivery, fair fixed prices."
        />
        <link rel="canonical" href="https://www.naxitofficial.de/" />
        <link rel="alternate" hrefLang="en-LK" href="https://www.naxitofficial.de/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.naxitofficial.de/" />
      </Helmet>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-naxit-royal focus:text-white focus:rounded-xl focus:shadow-2xl focus:outline-none"
      >
        Skip to main content
      </a>
      <Navbar onCloseModal={() => {}} />

      <main id="main-content" className="relative z-10">
        <Hero />

        <div className="relative">
          <LogoCloud />

          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <Suspense fallback={null}>
            <div className="bg-transparent">
              <About />
              <div className="max-w-7xl mx-auto px-4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-naxit-cyan/20 to-transparent" />
              </div>

              <Services />
              <div className="max-w-7xl mx-auto px-4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-naxit-cyan/20 to-transparent" />
              </div>

              <Process />
              <div className="max-w-7xl mx-auto px-4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-naxit-cyan/20 to-transparent" />
              </div>

              <Pricing />
              <div className="max-w-7xl mx-auto px-4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-naxit-cyan/20 to-transparent" />
              </div>

              <Insights />
              <div className="max-w-7xl mx-auto px-4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-naxit-cyan/20 to-transparent" />
              </div>

              <Portfolio />
              <div className="max-w-7xl mx-auto px-4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>

              <FAQ />
              <div className="max-w-7xl mx-auto px-4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-naxit-cyan/20 to-transparent" />
              </div>

              <Contact />
              <Footer onCloseModal={() => {}} />
            </div>
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
