import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  BadgeCheck,
  Star,
  Loader2,
  ArrowLeft
} from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import { trackFormSubmit } from '../lib/analytics';

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [mountTime, setMountTime] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Professional Business Website',
    message: '',
    botcheck: '' // honeypot
  });
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
    setMountTime(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedMessage = formData.message.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();

    if (!trimmedName || !trimmedMessage) {
      setStatus('error');
      setErrorMessage('Please fill in both your name and project details.');
      return;
    }

    if (!trimmedEmail && !trimmedPhone) {
      setStatus('error');
      setErrorMessage('Please provide either an email address or a phone number so we can reach you.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Pre-build WhatsApp fallback link
    const waText = `Hi NAXIT, my name is ${trimmedName}.
*Needed Service:* ${formData.service}
${trimmedMessage}
*Contact:* ${trimmedEmail || trimmedPhone || 'Via WhatsApp'}`;
    const waUrl = `https://wa.me/94756811228?text=${encodeURIComponent(waText)}`;
    setLastWhatsappUrl(waUrl);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          service: formData.service,
          message: trimmedMessage,
          botcheck: formData.botcheck,
          _ts: mountTime,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.success === false) {
        throw new Error(data.error || 'Server rejected submission');
      }

      // Successful delivery
      trackFormSubmit(formData.service);
      setStatus('success');
    } catch (err: any) {
      console.warn('Backend transmission failure, falling back to direct channels:', err);
      // If serverless is unavailable (e.g. static dev environment), provide graceful fallback
      // but do not falsely claim backend delivery without clear status
      setStatus('error');
      setErrorMessage(
        err.message || 'Unable to connect to the mail server. You can still message us directly on WhatsApp or call our line.'
      );
    }
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact NAXIT | Mannar, Sri Lanka',
    description: 'Contact NAXIT in Mannar, Northern Province, Sri Lanka. Open 24 hours every day. Phone: +94 75 681 1228, Email: naxitofficial@gmail.com.',
    url: 'https://www.naxitofficial.de/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'NAXIT',
      telephone: '+94756811228',
      email: 'naxitofficial@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '191, 11 Moor St',
        addressLocality: 'Mannar',
        addressRegion: 'Northern Province',
        postalCode: '41000',
        addressCountry: 'LK'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 8.9829285,
        longitude: 79.9118736
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-naxit-charcoal text-white relative selection:bg-naxit-cyan selection:text-naxit-charcoal">
      <Helmet>
        <title>Contact NAXIT | Mannar, Sri Lanka</title>
        <meta
          name="description"
          content="Contact NAXIT in Mannar, Northern Province, Sri Lanka. Web design, UI/UX, branding and retail software studio. Open 24 hours every day. Phone: +94 75 681 1228, Email: naxitofficial@gmail.com."
        />
        <link rel="canonical" href="https://www.naxitofficial.de/contact" />
        <meta property="og:title" content="Contact NAXIT | Mannar, Sri Lanka" />
        <meta
          property="og:description"
          content="Contact NAXIT in Mannar, Northern Province, Sri Lanka. Open 24 hours every day. Phone: +94 75 681 1228, Email: naxitofficial@gmail.com. Address: 191, 11 Moor St, Mannar."
        />
        <meta property="og:url" content="https://www.naxitofficial.de/contact" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
      </Helmet>

      {/* Top Navbar Header */}
      <header className="sticky top-0 z-50 glass backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 group" aria-label="NAXIT Home">
            <picture>
              <source srcSet="/assets/logo.webp" type="image/webp" />
              <img
                src="/assets/logo.png"
                width={150}
                height={78}
                alt="NAXIT Logo"
                className="h-7 w-auto transition-opacity group-hover:opacity-80"
              />
            </picture>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-xs font-mono tracking-widest uppercase text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
            <a
              href="https://wa.me/94756811228"
              target="_blank"
              rel="noopener noreferrer"
              data-track-location="header"
              className="bg-naxit-royal hover:bg-naxit-cyan hover:text-black text-white px-5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Contact', path: '/contact' }]} />
        </div>

        {/* Page Hero */}
        <section className="mb-16">
          <div className="flex items-center gap-2 text-naxit-cyan font-mono text-xs uppercase tracking-[0.3em] mb-4">
            <div className="w-8 h-[1px] bg-naxit-cyan" />
            <span>Official Studio Contact • Mannar, Sri Lanka</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white mb-6">
            Contact NAXIT in Mannar
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
            Our primary studio is located at 191, 11 Moor St, Mannar. We work directly with businesses across Mannar,
            Jaffna, Vavuniya, and island-wide. We are open 24 hours every day with transparent pricing, honest technical
            guidance, and direct local support.
          </p>
        </section>

        {/* Rapid Contact Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <a
            href="https://wa.me/94756811228"
            target="_blank"
            rel="noopener noreferrer"
            data-track-location="contact_section"
            className="glass p-6 rounded-3xl border border-white/5 hover:border-naxit-cyan/30 transition-all flex items-start gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center text-naxit-cyan group-hover:bg-naxit-cyan group-hover:text-black transition-all shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">WhatsApp Chat</div>
              <div className="text-white font-bold text-sm mt-1 group-hover:text-naxit-cyan transition-colors">+94 75 681 1228</div>
              <p className="text-[11px] text-gray-400 mt-1">Instant quotes & support</p>
            </div>
          </a>

          <a
            href="tel:+94756811228"
            data-track-location="contact_section"
            className="glass p-6 rounded-3xl border border-white/5 hover:border-naxit-cyan/30 transition-all flex items-start gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center text-naxit-cyan group-hover:bg-naxit-cyan group-hover:text-black transition-all shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Direct Phone</div>
              <div className="text-white font-bold text-sm mt-1 group-hover:text-naxit-cyan transition-colors">+94 75 681 1228</div>
              <p className="text-[11px] text-gray-400 mt-1">Voice call & inquiries</p>
            </div>
          </a>

          <a
            href="mailto:naxitofficial@gmail.com"
            data-track-location="contact_section"
            className="glass p-6 rounded-3xl border border-white/5 hover:border-naxit-cyan/30 transition-all flex items-start gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center text-naxit-cyan group-hover:bg-naxit-cyan group-hover:text-black transition-all shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Official Email</div>
              <div className="text-white font-bold text-sm mt-1 group-hover:text-naxit-cyan transition-colors truncate max-w-[150px]">naxitofficial@gmail.com</div>
              <p className="text-[11px] text-gray-400 mt-1">Formal project proposals</p>
            </div>
          </a>

          <div className="glass p-6 rounded-3xl border border-white/5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center text-naxit-cyan shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Operating Schedule</div>
              <div className="text-white font-bold text-sm mt-1">Open 24 Hours</div>
              <p className="text-[11px] text-gray-400 mt-1">Mon - Sun (00:00 - 23:59)</p>
            </div>
          </div>
        </section>

        {/* 2-Column Interface: Details + Real Backend Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20" id="contact">
          {/* Left Column: Physical Location & Studio Credentials */}
          <section className="lg:col-span-5 space-y-6">
            <div className="glass p-6 md:p-8 rounded-[2.5rem] border border-white/5 space-y-6">
              <div>
                <span className="text-naxit-cyan font-mono text-[10px] uppercase tracking-[0.4em]">Studio Headquarters</span>
                <h2 className="text-2xl font-display font-bold text-white mt-2">191, 11 Moor St, Mannar</h2>
                <p className="text-gray-400 text-sm mt-1">Northern Province, Postcode 41000, Sri Lanka</p>
              </div>

              {/* Map Embed */}
              <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  title="NAXIT Studio Location - 191, 11 Moor St, Mannar"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8828277240355!2d79.9118736!3d8.9829285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afdd9e633c0c94b%3A0x2f2a54bcb84897b9!2sNAXIT!5e0!3m2!1sen!2slk!4v1768412728561!5m2!1sen!2slk"
                  className="w-full h-full border-0 grayscale invert opacity-75 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-naxit-cyan" />
                  <span className="text-xs text-gray-300">Google Verified Place</span>
                </div>
                <a
                  href="https://share.google/kLF8l3VpKfylUEVqX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-naxit-cyan hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Local Trust Note */}
            <div className="glass p-6 rounded-3xl border border-white/5 space-y-2 text-xs text-gray-300 leading-relaxed">
              <div className="text-white font-bold font-display text-sm">Founded in 2022 • Hazan Kanoon</div>
              <p className="text-gray-400">
                Founded in Mannar to give local firms access to high-standard web engineering, clear UI design, and dedicated regional software solutions.
              </p>
            </div>
          </section>

          {/* Right Column: Transmission Form with Backend Delivery */}
          <section className="lg:col-span-7">
            <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-16 text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-naxit-cyan/10 rounded-full flex items-center justify-center mx-auto border border-naxit-cyan/20">
                      <CheckCircle2 className="w-10 h-10 text-naxit-cyan" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-3xl font-display font-bold text-white">Transmission Successful</h2>
                      <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                        Your message has been delivered to NAXIT. Our team reviews all incoming inquiries promptly.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                      {lastWhatsappUrl && (
                        <a
                          href={lastWhatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-naxit-cyan text-black font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-white transition-colors"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Open in WhatsApp</span>
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          setStatus('idle');
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            service: 'Professional Business Website',
                            message: '',
                            botcheck: '',
                          });
                        }}
                        className="text-xs font-mono text-gray-400 hover:text-white uppercase tracking-wider transition-colors px-4 py-3"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-naxit-cyan font-mono text-[10px] uppercase tracking-[0.4em]">Direct Dispatch</span>
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">Send a Message</h2>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1">
                        Fill in your requirements below. Your message delivers directly to our studio inbox.
                      </p>
                    </div>

                    {status === 'error' && (
                      <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-xs flex items-start gap-3">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold">Message could not be delivered</div>
                          <div className="mt-0.5">{errorMessage}</div>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Honeypot field (hidden offscreen for bot traps) */}
                      <div className="hidden" aria-hidden="true">
                        <label htmlFor="botcheck">Leave this field blank</label>
                        <input
                          type="text"
                          id="botcheck"
                          name="botcheck"
                          tabIndex={-1}
                          autoComplete="off"
                          value={formData.botcheck}
                          onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label htmlFor="contact-name" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                            Your Name *
                          </label>
                          <input
                            required
                            type="text"
                            id="contact-name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Ruwan Perera"
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-naxit-cyan/50 transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="contact-service" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                            Service Needed *
                          </label>
                          <select
                            id="contact-service"
                            name="service"
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full bg-naxit-charcoal border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-naxit-cyan/50 transition-colors"
                          >
                            <option value="Professional Business Website">Professional Business Website</option>
                            <option value="UI/UX Design Studio">UI/UX Design Studio</option>
                            <option value="Mannar & Northern Web Dev">Mannar & Northern Web Dev</option>
                            <option value="ROP Retail Software">ROP Retail Software</option>
                            <option value="Graphic Design & Branding">Graphic Design & Branding</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="Digital Strategy & Audit">Digital Strategy & Audit</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label htmlFor="contact-email" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="contact-email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@company.com"
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-naxit-cyan/50 transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="contact-phone" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                            Phone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            id="contact-phone"
                            name="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+94 7X XXX XXXX"
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-naxit-cyan/50 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="contact-message" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                          Project Details *
                        </label>
                        <textarea
                          required
                          rows={4}
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us what you're looking to build (goals, timeline, store location)..."
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-naxit-cyan/50 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-white hover:bg-naxit-cyan hover:text-black text-black font-bold py-4 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Transmitting...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message to NAXIT</span>
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
