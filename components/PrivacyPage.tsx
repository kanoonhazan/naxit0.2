import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from './Breadcrumbs';
import {
  ArrowLeft,
  Shield,
  ShieldCheck,
  Lock,
  Camera,
  Bluetooth,
  MapPin,
  Usb,
  RefreshCw,
  FolderLock,
  Database,
  Server,
  Trash2,
  Users,
  FileCheck,
  Mail,
  Building2,
  Sparkles,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyPage: React.FC = () => {
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
    { id: 'collection', label: '1. Data Collection' },
    { id: 'permissions', label: '2. Hardware & Permissions' },
    { id: 'usage', label: '3. Data Usage' },
    { id: 'security', label: '4. Storage & Security' },
    { id: 'third-party', label: '5. Third-Party Services' },
    { id: 'retention', label: '6. Retention & Deletion' },
    { id: 'children', label: '7. Children\'s Privacy' },
    { id: 'changes', label: '8. Policy Updates' },
    { id: 'contact', label: '9. Contact Us' },
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
    <div className="min-h-screen border-none selection:bg-naxit-cyan selection:text-naxit-charcoal">
      <Helmet>
        <title>Privacy Policy - Naxit ROP | NAXIT</title>
        <meta
          name="description"
          content="Privacy Policy for Naxit ROP (Retail Operating Platform). Learn how we collect, use, and protect your business and transaction data."
        />
        <link rel="canonical" href="https://www.naxitofficial.de/privacy" />
        <link rel="alternate" hrefLang="en-LK" href="https://www.naxitofficial.de/privacy" />
        <link rel="alternate" hrefLang="x-default" href="https://www.naxitofficial.de/privacy" />
      </Helmet>

      <Navbar onCloseModal={() => { }} />

      <main className="pt-32 pb-24 px-4 sm:px-6 relative">
        {/* Decorative Background Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-naxit-royal/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-96 right-10 w-[400px] h-[400px] bg-naxit-cyan/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <Breadcrumbs items={[{ label: 'Privacy Policy', path: '/privacy' }]} />
          {/* Back button & Breadcrumb */}
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
              <span>ACTIVE PROTOCOL</span>
            </div>
          </motion.div>

          {/* Header Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-md bg-naxit-royal/20 text-naxit-cyan text-xs font-mono tracking-widest uppercase border border-naxit-royal/40">
                Naxit ROP Legal Protocol
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-4">
              Privacy <span className="text-gradient">Policy</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-gray-400 pb-6 border-b border-white/10">
              <span className="flex items-center gap-1.5 text-naxit-cyan">
                <ShieldCheck className="w-4 h-4" /> Retail Operating Platform (ROP)
              </span>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <span>Effective Date: August 17, 2026</span>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <span>Last Updated: August 17, 2026</span>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <Link to="/terms" className="text-naxit-cyan hover:underline flex items-center gap-1">
                View Terms of Service &rarr;
              </Link>
            </div>
          </motion.div>

          {/* Navigation Quick Jump Pills */}
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

          {/* Main Content Container */}
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
                This Privacy Policy describes how <strong className="text-white font-semibold">Naxit ROP</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;the Application&quot;), developed by <strong className="text-white font-semibold">Naxit</strong>, collects, uses, and protects your information when you use our Point-of-Sale (POS) and Retail Operating Platform mobile application.
              </p>

              {/* Highlight Box - Core Commitment */}
              <div className="relative rounded-2xl p-5 sm:p-6 bg-gradient-to-r from-naxit-royal/20 via-naxit-cyan/10 to-transparent border border-naxit-cyan/30">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-naxit-cyan/20 border border-naxit-cyan/40 flex items-center justify-center text-naxit-cyan shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-naxit-cyan font-display font-bold text-base sm:text-lg mb-1 flex items-center gap-2">
                      Core Commitment
                    </h2>
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                      We respect your business and personal privacy. We do <strong className="text-white underline decoration-naxit-cyan decoration-2">not</strong> sell, rent, or trade your data to third parties for advertising or marketing purposes.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 1: Information We Collect */}
            <motion.section
              id="collection"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-naxit-cyan">
                  <Database className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  1. Information We Collect
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                When using Naxit ROP, we collect information necessary to deliver retail management and point-of-sale functionality:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-naxit-cyan/30 transition-all">
                  <div className="text-naxit-cyan font-mono text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Business & Account
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Store name, contact email, user login credentials, store settings, and billing configurations.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-naxit-cyan/30 transition-all">
                  <div className="text-naxit-cyan font-mono text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                    <FileCheck className="w-4 h-4" /> Operations & Transactions
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Inventory item names, stock quantities, sales receipts, transaction history, customer ledger entries, invoices, and payment summaries.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-naxit-cyan/30 transition-all">
                  <div className="text-naxit-cyan font-mono text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4" /> Device & Diagnostics
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Device model, operating system version, app version, crash reports, and performance analytics to ensure application stability.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 2: Permissions and Hardware Access */}
            <motion.section
              id="permissions"
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
                  2. Permissions and Hardware Access
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                To provide core POS features, the Application requests the following permissions:
              </p>

              <div className="space-y-3">
                {[
                  {
                    icon: <Camera className="w-5 h-5 text-naxit-cyan" />,
                    title: 'Camera',
                    code: 'android.permission.CAMERA',
                    desc: 'Used solely for barcode scanning to look up products and process checkout items quickly. We do not store or transmit captured camera video or photos.',
                  },
                  {
                    icon: <Bluetooth className="w-5 h-5 text-naxit-cyan" />,
                    title: 'Bluetooth & Nearby Devices',
                    code: 'BLUETOOTH_CONNECT, BLUETOOTH_SCAN',
                    desc: 'Used exclusively to discover, pair with, and send print commands to ESC/POS thermal receipt printers.',
                  },
                  {
                    icon: <MapPin className="w-5 h-5 text-naxit-cyan" />,
                    title: 'Location',
                    code: 'ACCESS_FINE_LOCATION',
                    desc: 'Required by legacy Android versions (Android 10/11) to discover nearby Bluetooth printers. We do NOT track or store your physical location.',
                  },
                  {
                    icon: <Usb className="w-5 h-5 text-naxit-cyan" />,
                    title: 'USB Host / OTG',
                    code: 'USB_PRINTER_ACCESS',
                    desc: 'Used to communicate directly with USB-connected thermal printers for receipt printing.',
                  },
                  {
                    icon: <RefreshCw className="w-5 h-5 text-naxit-cyan" />,
                    title: 'Foreground Service',
                    code: 'FOREGROUND_SERVICE_DATA_SYNC',
                    desc: 'Used to perform reliable background data synchronization with your cloud backend without interrupting active sales transactions.',
                  },
                  {
                    icon: <FolderLock className="w-5 h-5 text-naxit-cyan" />,
                    title: 'Storage / Files',
                    code: 'FILE_SYSTEM_ACCESS',
                    desc: 'Used when you explicitly choose to import or export business reports, receipts, database backups, or CSV files.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-naxit-cyan/30 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-white font-semibold text-sm sm:text-base">{item.title}</span>
                        <code className="text-[11px] font-mono px-2 py-0.5 rounded bg-naxit-cyan/10 text-naxit-cyan border border-naxit-cyan/20">
                          {item.code}
                        </code>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Section 3: How We Use Your Information */}
            <motion.section
              id="usage"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-naxit-cyan">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  3. How We Use Your Information
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                We use the collected information exclusively for the following operational purposes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Processing retail sales, issuing receipts, and maintaining accurate real-time inventory levels.',
                  'Managing customer credit records, accounts receivable, and transaction histories.',
                  'Synchronizing your business data securely across your authorized devices and cloud storage.',
                  'Diagnosing technical issues, preventing fraud, and ensuring maximum app stability and performance.',
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="w-6 h-6 rounded-full bg-naxit-royal/30 text-naxit-cyan flex items-center justify-center font-mono text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Section 4: Data Storage and Security */}
            <motion.section
              id="security"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-naxit-cyan">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  4. Data Storage and Security
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6 font-light">
                Your data is stored locally on your device using encrypted, high-performance local storage (MMKV and secure Keychain) for seamless offline operation. When connected to the internet, data synchronizes with our secure cloud infrastructure powered by Supabase using industry-standard TLS/SSL encryption in transit and at rest.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-naxit-cyan font-mono text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4" /> Offline-First Encryption
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Local device storage is secured with hardware-backed encryption keys, ensuring offline POS speed with zero compromise on data safety.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-naxit-cyan font-mono text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Server className="w-4 h-4" /> Cloud Sync & TLS/SSL
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    All network communications are protected via TLS 1.3 encryption protocols, preventing unauthorized eavesdropping or tampering.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 5: Third-Party Services */}
            <motion.section
              id="third-party"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-naxit-cyan">
                  <Server className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  5. Third-Party Services
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                The Application integrates with trusted third-party service providers that assist in data synchronization and platform stability:
              </p>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold text-base">Supabase</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Encrypted Cloud Backend
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Used for cloud authentication, real-time database sync, and encrypted data backup.
                </p>
              </div>

              <p className="text-gray-400 text-sm italic">
                We do <strong className="text-gray-200">not</strong> use third-party behavioral advertising trackers or marketing analytics SDKs.
              </p>
            </motion.section>

            {/* Section 6: Data Retention and Deletion */}
            <motion.section
              id="retention"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-naxit-cyan">
                  <Trash2 className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  6. Data Retention and Deletion
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                We retain your business and transaction records as long as your account remains active. You have full ownership of your data. You may export your transaction data, reset your local database, or request the complete deletion of your cloud account and associated data by contacting our support team.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-naxit-cyan" /> Full Data Ownership
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-naxit-cyan" /> On-Demand Data Export
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-naxit-cyan" /> Complete Account Erasure
                </div>
              </div>
            </motion.section>

            {/* Section 7: Children's Privacy */}
            <motion.section
              id="children"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-naxit-cyan">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  7. Children&apos;s Privacy
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed font-light">
                Naxit ROP is a business-to-business retail application and is not intended for use by children under the age of 13. We do not knowingly collect personal information from children.
              </p>
            </motion.section>

            {/* Section 8: Changes to This Privacy Policy */}
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
                  8. Changes to This Privacy Policy
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed font-light">
                We may update this Privacy Policy from time to time. Any modifications will be reflected on this page with an updated effective date. Continued use of the Application signifies acceptance of the revised terms.
              </p>
            </motion.section>

            {/* Section 9: Contact Us */}
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
                  9. Contact Us
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:
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
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Direct Inquiries</div>
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
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Developer</div>
                    <div className="text-white font-medium">Naxit Technologies</div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center text-xs font-mono text-gray-400">
            &copy; 2026 Naxit ROP. All rights reserved. NAXIT Technologies.
          </div>
        </div>
      </main>

      <Footer onCloseModal={() => { }} />
    </div>
  );
};

export default PrivacyPage;
