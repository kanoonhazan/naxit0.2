import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from './Breadcrumbs';
import {
  ArrowLeft,
  FileText,
  ShieldCheck,
  Scale,
  Building2,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  CheckCircle2,
  Ban,
  AlertTriangle,
  Gavel,
  Briefcase,
  Globe,
  RefreshCw,
  Printer,
  Lock,
  Cpu,
  BookOpen
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const TermsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const sections = [
    { id: 'trader-status', label: '1. Trader Status & Legal Notice' },
    { id: 'scope', label: '2. Scope & Applicability' },
    { id: 'acceptable-use', label: '3. Acceptable Use Policy' },
    { id: 'accounts', label: '4. Accounts & Security' },
    { id: 'ip-rights', label: '5. Intellectual Property' },
    { id: 'hardware', label: '6. Hardware & Thermal Printers' },
    { id: 'disclaimer', label: '7. Disclaimer of Warranties' },
    { id: 'liability', label: '8. Limitation of Liability' },
    { id: 'termination', label: '9. Account Termination' },
    { id: 'consumer-rights', label: '10. Consumer Rights (EEA/UK)' },
    { id: 'governing-law', label: '11. Governing Law' },
    { id: 'changes', label: '12. Updates to Terms' },
    { id: 'contact', label: '13. Contact Information' },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -100, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="min-h-screen border-none selection:bg-naxit-cyan selection:text-naxit-charcoal bg-naxit-charcoal">
      <Helmet>
        <title>Terms of Service & Trader Declaration - Naxit ROP | NAXIT</title>
        <meta
          name="description"
          content="Terms of Service, Acceptable Use, and Trader Status declaration for Naxit ROP (Retail Operating Platform) mobile application and NAXIT services."
        />
        <link rel="canonical" href="https://www.naxitofficial.de/terms" />
      </Helmet>

      <Navbar onCloseModal={() => { }} />

      <main className="pt-32 pb-24 px-4 sm:px-6 relative">
        {/* Decorative Background Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-naxit-royal/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-96 right-10 w-[400px] h-[400px] bg-naxit-cyan/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
          {/* Back button & Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-8"
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-naxit-cyan font-mono text-xs tracking-widest uppercase hover:gap-3 transition-all group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 text-[11px] font-mono text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>COMMERCIAL TRADER VERIFIED</span>
            </div>
          </motion.div>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-md bg-naxit-royal/20 text-naxit-cyan text-xs font-mono tracking-widest uppercase border border-naxit-royal/40">
                Naxit ROP Legal Protocol
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 text-gray-300 text-xs font-mono tracking-wider border border-white/10">
                AGB / Nutzungsbedingungen
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-4">
              Terms of <span className="text-gradient">Service</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-gray-400 pb-6 border-b border-white/10">
              <span className="flex items-center gap-1.5 text-naxit-cyan">
                <ShieldCheck className="w-4 h-4" /> Retail Operating Platform (ROP)
              </span>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <span>Effective Date: August 17, 2026</span>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <span>Last Updated: November 4, 2026</span>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <Link to="/privacy" className="text-naxit-cyan hover:underline flex items-center gap-1">
                View Privacy Policy &rarr;
              </Link>
            </div>
          </motion.div>

          {/* Quick Navigation Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 p-4 glass rounded-2xl border border-white/10"
          >
            <div className="text-[11px] font-mono text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-naxit-cyan" />
              Quick Navigation
            </div>
            <div className="flex flex-wrap gap-2">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-naxit-royal/30 text-gray-300 hover:text-white border border-white/5 hover:border-naxit-cyan/30 transition-all font-mono"
                >
                  {sec.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Main Content Sections */}
          <div className="space-y-10">

            {/* Introduction Card */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-naxit-cyan/5 rounded-full blur-3xl pointer-events-none" />

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
                These Terms of Service (&quot;Terms&quot;, &quot;Agreement&quot;) constitute a legally binding agreement between you (&quot;User&quot;, &quot;Merchant&quot;, &quot;You&quot;) and <strong className="text-white font-semibold">NAXIT Technologies</strong> (&quot;NAXIT&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) governing your access to and use of the <strong className="text-white font-semibold">Naxit ROP (Retail Operating Platform)</strong> mobile application, related web portals, APIs, and cloud services (collectively, the &quot;Application&quot; or &quot;Service&quot;).
              </p>

              <div className="relative rounded-2xl p-5 sm:p-6 bg-gradient-to-r from-naxit-royal/20 via-naxit-cyan/10 to-transparent border border-naxit-cyan/30">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-naxit-cyan/20 border border-naxit-cyan/40 flex items-center justify-center text-naxit-cyan shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-naxit-cyan font-display font-bold text-base sm:text-lg mb-1 flex items-center gap-2">
                      Agreement to Terms
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                      By downloading, installing, accessing, or using Naxit ROP from the Google Play Store or authorized distribution channels, you confirm that you have read, understood, and agreed to be bound by these Terms of Service and our associated Privacy Policy. If you do not agree, you must immediately refrain from installing or using the Application.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 1: Trader Status & Legal Notice (Google Play & EU DSA Compliance) */}
            <motion.section
              id="trader-status"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-naxit-cyan">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  1. Trader Status & Commercial Entity Declaration
                </h2>
              </div>

              <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-sm text-gray-200 leading-relaxed">
                  <strong className="text-white">Google Play & EU Digital Services Act (DSA) Trader Confirmation:</strong> NAXIT Technologies acts as a verified <strong className="text-emerald-400">commercial trader</strong> in relation to this Application. Under European Union consumer protection laws and Google Play developer requirements, this Application is provided in connection with our trade, business, craft, or commercial profession.
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                Pursuant to statutory disclosure requirements (including Article 30 of the EU Digital Services Act and the EU Consumer Rights Directive 2011/83/EU), the commercial developer information is publicly disclosed below:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-naxit-cyan font-mono text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Commercial Developer Name
                  </div>
                  <div className="text-white font-semibold text-base mb-1">NAXIT Technologies</div>
                  <div className="text-gray-400 text-xs">High-Frequency Micro-Agency & Digital Software Solutions</div>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-naxit-cyan font-mono text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Principal Place of Business
                  </div>
                  <div className="text-white font-semibold text-base mb-1">Mannar, Northern Province</div>
                  <div className="text-gray-400 text-xs">Postal Code / Country: Sri Lanka (LK)</div>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-naxit-cyan font-mono text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Direct Developer Support Email
                  </div>
                  <a href="mailto:support@naxit.com" className="text-white font-semibold text-base hover:text-naxit-cyan transition-colors">
                    support@naxit.com
                  </a>
                  <div className="text-gray-400 text-xs mt-1">Dedicated response team for technical and commercial inquiries</div>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-naxit-cyan font-mono text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Telephone Contact
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <a href="tel:+94756811228" className="text-white font-semibold text-base hover:text-naxit-cyan transition-colors">
                      +94 75 681 1228
                    </a>
                    <span className="text-gray-500 text-xs">/</span>
                    <a href="tel:+949911228" className="text-white font-semibold text-base hover:text-naxit-cyan transition-colors">
                      +94 99 11228
                    </a>
                  </div>
                  <div className="text-gray-400 text-xs mt-1">Official voice & WhatsApp (+94 75 681 1228) communication channels</div>
                </div>
              </div>
            </motion.section>

            {/* Section 2: Scope & Applicability */}
            <motion.section
              id="scope"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-naxit-cyan">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  2. Scope & Applicability to the App
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4 font-light">
                These Terms apply specifically and directly to the <strong className="text-white font-semibold">Naxit ROP (Retail Operating Platform)</strong> software application. Naxit ROP is designed as a high-performance, offline-first point-of-sale (POS) and inventory operating system for retail merchants, small-to-medium businesses (SMBs), and independent store owners.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-naxit-cyan shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">
                    <strong className="text-white">Eligibility:</strong> You must be at least 18 years old or possess legal capacity under the laws of your jurisdiction to form a binding contract. If using the Service on behalf of a company, partnership, or organization, you represent that you hold proper legal authorization to bind that entity to these Terms.
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-naxit-cyan shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">
                    <strong className="text-white">Commercial Nature (B2B):</strong> The Application is primarily engineered as a business-to-business (B2B) operational platform for enterprise inventory, sales register processing, and retail transaction management.
                  </span>
                </div>
              </div>
            </motion.section>

            {/* Section 3: Acceptable Use Policy */}
            <motion.section
              id="acceptable-use"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-naxit-cyan">
                  <Ban className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  3. Acceptable Use Policy
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                You agree to use Naxit ROP only for lawful business operations and in strict accordance with this Agreement. You explicitly agree that you shall <strong className="text-white">NOT</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Reverse Engineering & Decompilation',
                    desc: 'Decompile, reverse engineer, disassemble, decrypt, or attempt to derive the source code or architectural secrets of the Application or any component thereof.',
                  },
                  {
                    title: 'Security Tampering & Exploitation',
                    desc: 'Bypass, disable, circumvent, or probe any security mechanisms, digital rights management, encryption keys, or licensing authentications within the app.',
                  },
                  {
                    title: 'Malicious Injections',
                    desc: 'Transmit, inject, or propagate any virus, worm, Trojan horse, spyware, ransomware, or other malicious, destructive, or unauthorized code.',
                  },
                  {
                    title: 'Automated Scraping & Extraction',
                    desc: 'Use automated scrapers, spiders, crawlers, or harvesting tools to extract data from our APIs, backend endpoints, or cloud synchronizers.',
                  },
                  {
                    title: 'Unlawful Transactions & Fraud',
                    desc: 'Utilize the Application to conduct unlawful commerce, illegal money transfers, fraudulent transactions, or sales of prohibited substances under applicable laws.',
                  },
                  {
                    title: 'Sublicensing & Commercial Redistribution',
                    desc: 'Rent, lease, lend, sell, sublicense, distribute, or white-label the Application to unauthorized third parties without our express written consent.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-rose-500/30 transition-all">
                    <div className="text-rose-400 font-mono text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Ban className="w-3.5 h-3.5 text-rose-400" /> {item.title}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Section 4: Accounts, Credentials & Security */}
            <motion.section
              id="accounts"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-naxit-cyan">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  4. Accounts, Access Credentials & Security
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                To access certain cloud sync, multi-terminal, or administrative features, you may be required to register a store account and establish access credentials:
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-white font-medium text-sm mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-naxit-cyan" /> Credential Safeguarding
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    You are solely responsible for maintaining the strict confidentiality of your account login credentials, PIN numbers, and master encryption keys. You agree not to share your administrative credentials with unauthorized personnel.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-white font-medium text-sm mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-naxit-cyan" /> Accountability for Terminal Activity
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    You accept full responsibility for all activities, sales transactions, refunds, and adjustments executed through your account and POS devices, whether authorized by you or carried out through compromised staff credentials.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-white font-medium text-sm mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-naxit-cyan" /> Breach Notification
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    You must notify NAXIT Technologies immediately at <a href="mailto:support@naxit.com" className="text-naxit-cyan underline">support@naxit.com</a> if you discover or suspect any unauthorized access, security incident, or breach of your merchant credentials.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 5: Intellectual Property Rights */}
            <motion.section
              id="ip-rights"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-naxit-cyan">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  5. Intellectual Property Rights
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-naxit-cyan font-mono text-xs uppercase tracking-wider mb-2">
                    NAXIT Intellectual Property
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    All software architecture, binary code, interface designs, trade secrets, logos, artwork, trademarks, system documentation, and algorithms embodied in Naxit ROP remain the sole and exclusive property of NAXIT Technologies and its licensors. All rights not expressly granted herein are reserved.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-naxit-cyan font-mono text-xs uppercase tracking-wider mb-2">
                    Limited License Grant
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Subject to your ongoing compliance with these Terms, NAXIT grants you a revocable, non-exclusive, non-transferable, non-sublicensable limited license to download, install, and execute the Application on your authorized mobile or tablet devices solely for your internal business operations.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-naxit-royal/10 border border-naxit-royal/30 text-sm text-gray-200">
                <strong className="text-white">Your Business Data Remains Yours:</strong> You retain full title, ownership, and copyright in your retail sales records, item catalog, customer contacts, and transaction ledger. NAXIT does not claim any ownership over your proprietary inventory or business data.
              </div>
            </motion.section>

            {/* Section 6: Hardware & Peripheral Integrations */}
            <motion.section
              id="hardware"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-naxit-cyan">
                  <Printer className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  6. Hardware, Thermal Printers & Peripherals
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4 font-light">
                Naxit ROP interfaces with external peripheral hardware to facilitate retail operations:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-white font-medium text-sm mb-1 flex items-center gap-2">
                    <Printer className="w-4 h-4 text-naxit-cyan" /> Bluetooth & USB Thermal Receipt Printers
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    The app supports standard ESC/POS protocol printers over Bluetooth and USB OTG. While we engineer for broad hardware compatibility across standard 58mm and 80mm printers, NAXIT cannot guarantee that every third-party hardware device, firmware variation, or custom printer chipset will be compatible.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-white font-medium text-sm mb-1 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-naxit-cyan" /> Camera Barcode Scanning & Offline Processing
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Camera permissions are utilized strictly for real-time optical scanning of UPC/EAN barcodes. Scans occur locally on the device; raw camera streams are never captured or saved.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 7: Disclaimer of Warranties */}
            <motion.section
              id="disclaimer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  7. Disclaimer of Warranties (&quot;AS IS&quot;)
                </h2>
              </div>

              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-sm text-gray-200 leading-relaxed mb-6 font-mono">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NAXIT ROP AND ALL ASSOCIATED SERVICES, FEATURES, AND DOCUMENTATION ARE PROVIDED STRICTLY ON AN <strong className="text-amber-300">&quot;AS IS&quot;</strong> AND <strong className="text-amber-300">&quot;AS AVAILABLE&quot;</strong> BASIS.
              </div>

              <p className="text-gray-300 leading-relaxed font-light mb-4">
                NAXIT Technologies disclaims all warranties of any kind, whether express, statutory, or implied, including but not limited to:
              </p>

              <ul className="space-y-2 text-gray-400 text-sm pl-4 list-disc marker:text-naxit-cyan mb-6">
                <li>Implied warranties of merchantability, fitness for a particular commercial purpose, title, and non-infringement.</li>
                <li>Warranties that the Application will meet your specific business requirements or achieve anticipated revenue targets.</li>
                <li>Warranties that software operation will be completely uninterrupted, timely, error-free, or devoid of minor glitches or server latency.</li>
                <li>Warranties that historical tax, invoice, or balance computations comply automatically with local jurisdictional tax codes without merchant verification.</li>
              </ul>

              <p className="text-gray-400 text-xs italic">
                Merchants are encouraged to maintain periodic external backups of sales ledgers and verify invoice calculations against local fiscal guidelines.
              </p>
            </motion.section>

            {/* Section 8: Limitation of Liability */}
            <motion.section
              id="liability"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-rose-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  8. Limitation of Liability
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                To the fullest extent permissible by governing law:
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-rose-400 font-mono text-xs uppercase tracking-wider mb-2">
                    Exclusion of Consequential and Indirect Damages
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    In no event shall NAXIT Technologies, its directors, officers, employees, affiliates, or contractors be liable for any indirect, special, incidental, consequential, punitive, or exemplary damages—including but not limited to loss of business profits, lost revenue, lost customer goodwill, business interruption, loss of inventory records, or corrupted data—arising out of or relating to your use or inability to use Naxit ROP, even if advised of the possibility of such damages.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-naxit-cyan font-mono text-xs uppercase tracking-wider mb-2">
                    Aggregate Financial Liability Cap
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    In all events, the total cumulative liability of NAXIT Technologies for any claims, actions, or disputes arising out of these Terms or the Application shall be capped at and limited to the total fees actually paid by you to NAXIT for using the Application in the twelve (12) months preceding the incident giving rise to liability, or fifty euros (€50.00 / USD equivalent), whichever is greater.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 9: Account Termination Rules */}
            <motion.section
              id="termination"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-naxit-cyan">
                  <Ban className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  9. Account Termination & Cancellation
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-naxit-cyan font-mono text-xs uppercase tracking-wider mb-2">
                    Termination by You
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    You may terminate your agreement with us at any time by ceasing all use of Naxit ROP, uninstalling the Application from all devices, and requesting the deletion of your cloud store account by emailing <a href="mailto:support@naxit.com" className="text-naxit-cyan underline">support@naxit.com</a>.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-rose-400 font-mono text-xs uppercase tracking-wider mb-2">
                    Termination by NAXIT
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We reserve the right to suspend or terminate your account and access to the Service at our sole discretion, without liability, if you violate any provision of these Terms, engage in unlawful activity, tamper with security protocols, or fail to satisfy billing subscriptions where applicable.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">Effect of Termination:</strong> Upon termination, all licenses granted to you under these Terms immediately terminate. You remain responsible for exporting your local sales logs prior to uninstallation. Sections relating to Intellectual Property, Disclaimers, Limitation of Liability, and Governing Law shall survive termination.
              </div>
            </motion.section>

            {/* Section 10: European Union & Global Consumer Rights */}
            <motion.section
              id="consumer-rights"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-naxit-cyan">
                  <Globe className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  10. Consumer Protection & Statutory Rights (EEA & UK)
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4 font-light">
                If you are an individual accessing this Application as a consumer residing within the European Economic Area (EEA), the United Kingdom (UK), or jurisdictions with non-waivable statutory consumer protections:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">
                    <strong className="text-white">Mandatory Consumer Guarantees:</strong> Nothing in these Terms shall limit or exclude mandatory statutory consumer rights, legal warranty guarantees against non-conformity of digital content/services, or statutory remedies that cannot be lawfully waived under applicable consumer protection legislation.
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">
                    <strong className="text-white">Online Dispute Resolution:</strong> Consumers in the EU may access the European Commission&apos;s Online Dispute Resolution (ODR) platform at <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-naxit-cyan underline">ec.europa.eu/consumers/odr</a>. We prefer to resolve any disputes directly and amiably via our support email.
                  </span>
                </div>
              </div>
            </motion.section>

            {/* Section 11: Governing Law & Dispute Resolution */}
            <motion.section
              id="governing-law"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-naxit-cyan">
                  <Gavel className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  11. Governing Law & Dispute Resolution
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed font-light mb-4">
                These Terms of Service and any dispute or claim arising out of or in connection with them or their subject matter shall be governed by and construed in accordance with the laws of Sri Lanka, without giving effect to any principles of conflicts of law.
              </p>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">Amicable Settlement First:</strong> In the event of any controversy, controversy, or claim, the parties agree to make good-faith efforts to resolve the dispute amicably by contacting <a href="mailto:support@naxit.com" className="text-naxit-cyan underline">support@naxit.com</a> before commencing formal court proceedings. If unresolved, disputes shall be submitted to the competent commercial courts having jurisdiction.
              </div>
            </motion.section>

            {/* Section 12: Updates to Terms */}
            <motion.section
              id="changes"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-naxit-cyan">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  12. Changes & Amendments to These Terms
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed font-light">
                We reserve the right to revise or update these Terms of Service periodically to reflect changes in software functionality, legal requirements, or market regulations. Any updates will be published on this page with a revised &quot;Last Updated&quot; timestamp. Your continued use of Naxit ROP following the publication of revised Terms signifies your binding acceptance.
              </p>
            </motion.section>

            {/* Section 13: Contact Us & Trader Notice */}
            <motion.section
              id="contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-naxit-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  13. Contact Information & Legal Inquiries
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                If you have questions, regulatory inquiries, or feedback regarding these Terms of Service or our Trader Status declaration, please reach out to our legal and support team:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:support@naxit.com"
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-naxit-cyan/50 hover:bg-white/[0.05] transition-all flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-naxit-royal/20 border border-naxit-royal/40 flex items-center justify-center text-naxit-cyan group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Official Support</div>
                    <div className="text-white font-medium group-hover:text-naxit-cyan transition-colors">
                      support@naxit.com
                    </div>
                  </div>
                </a>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Developer Entity</div>
                    <div className="text-white font-medium">NAXIT Technologies</div>
                  </div>
                </div>

                <a
                  href="tel:+94756811228"
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-naxit-cyan/50 hover:bg-white/[0.05] transition-all flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-naxit-royal/20 border border-naxit-royal/40 flex items-center justify-center text-naxit-cyan group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Phone & WhatsApp</div>
                    <div className="text-white font-medium group-hover:text-naxit-cyan transition-colors">
                      +94 75 681 1228 / +94 99 11228
                    </div>
                  </div>
                </a>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Location</div>
                    <div className="text-white font-medium">Mannar, Sri Lanka</div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center text-xs font-mono text-gray-500">
            &copy; 2026 NAXIT Technologies. All rights reserved. Naxit ROP Retail Operating Platform.
          </div>
        </div>
      </main>

      <Footer onCloseModal={() => { }} />
    </div>
  );
};

export default TermsPage;

