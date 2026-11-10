import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Pricing from './Pricing';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-naxit-charcoal text-white selection:bg-naxit-cyan selection:text-naxit-charcoal">
      <Helmet>
        <title>Pricing & Packages Sri Lanka | Web & Software Rates | NAXIT</title>
        <meta
          name="description"
          content="Simple fixed prices: graphic design from LKR 500 within a day, branding LKR 1,000 in 1 week, static websites LKR 5,000 in 3 days."
        />
        <link rel="canonical" href="https://www.naxitofficial.de/pricing" />
        <link rel="alternate" hrefLang="en-LK" href="https://www.naxitofficial.de/pricing" />
        <link rel="alternate" hrefLang="x-default" href="https://www.naxitofficial.de/pricing" />
      </Helmet>
      <Navbar onCloseModal={() => { }} />
      <main className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Pricing', path: '/pricing' }]} />
        </div>
        <Pricing isDedicatedPage={true} />
      </main>
      <Footer onCloseModal={() => { }} />
    </div>
  );
};

export default PricingPage;

