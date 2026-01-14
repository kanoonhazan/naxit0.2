
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Loader2, MessageSquare, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-48 px-4 relative overflow-hidden">
      {/* Background Ambient Effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-naxit-royal/5 blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-naxit-cyan/5 blur-[150px] translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Identity Hub (Brand & Authority) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-naxit-cyan"
              >
                <div className="w-8 h-[1px] bg-naxit-cyan" />
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase">Official Intel</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.85] text-white"
              >
                Contact <br /><span className="text-gradient">NAXIT</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-gray-400 text-lg md:text-xl font-light leading-relaxed"
              >
                Tell us a little about your business and what you need. We’ll guide you honestly and recommend the right next step.
              </motion.p>
            </div>

            {/* Founder Authority Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-8 glass rounded-[2.5rem] border border-white/5 relative group overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent shadow-2xl"
            >
              <div className="flex items-center gap-6">
                <div className="relative shrink-0">
                  <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-naxit-royal/30 to-naxit-cyan/30 p-[1px]">
                    <div className="w-full h-full rounded-full bg-naxit-charcoal flex items-center justify-center overflow-hidden">
                      <img src="/assets/Kanoon Hazan.png" alt="Hazan K." className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-naxit-cyan rounded-full border-2 border-naxit-charcoal" />
                </div>
                <div>
                  <div className="text-white font-bold text-xl tracking-tight leading-tight">Hazan K.</div>
                  <div className="text-naxit-cyan font-mono text-[10px] uppercase tracking-[0.3em] font-bold mt-1">Founder, NAXIT</div>
                </div>
              </div>
              <p className="text-gray-400 font-display text-sm mt-6 leading-relaxed italic opacity-80">
                "Focused on building practical digital solutions for real businesses."
              </p>
            </motion.div>
          </div>

          {/* Operational Deck (Contact Channels & Transmission) */}
          <div className="lg:col-span-8 flex flex-col gap-6 w-full">
            {/* Communication Hub (Top Stack) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Chat', value: 'WhatsApp', href: 'https://wa.me/94758089209', icon: <MessageSquare className="w-5 h-5" /> },
                { label: 'Connect', value: '058 089 209', href: 'tel:058089209', icon: <Phone className="w-5 h-5" /> },
                { label: 'Index', value: 'Email Inbox', href: 'mailto:naxitofficial@gmail.com', icon: <Mail className="w-5 h-5" /> }
              ].map((node, i) => (
                <motion.a
                  key={node.label}
                  href={node.href}
                  target={node.label === 'Chat' ? "_blank" : undefined}
                  rel={node.label === 'Chat' ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 rounded-3xl border border-white/5 hover:border-naxit-cyan/20 transition-all group flex items-center gap-5"
                >
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-white/10 text-naxit-cyan group-hover:bg-naxit-cyan group-hover:text-black transition-all duration-300">
                    {node.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">{node.label}</div>
                    <div className="text-white font-bold text-xs mt-0.5 tracking-tight group-hover:text-naxit-cyan transition-colors">{node.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Transmission Interface (Main Body) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass p-8 md:p-12 lg:p-14 rounded-[3.5rem] border border-white/5 relative overflow-hidden shadow-2xl bg-white/[0.01]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-naxit-cyan/5 rounded-full blur-[100px] pointer-events-none" />

              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <div className="relative z-10 mb-12">
                      <div className="text-naxit-cyan font-mono text-[10px] tracking-[0.5em] uppercase mb-4">Transmission Gateway</div>
                      <h3 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">Initialize Your <br /><span className="text-gradient">Protocol</span></h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                        <div className="flex flex-col gap-3 group">
                          <label className="text-[10px] font-mono text-gray-500 tracking-widest group-focus-within:text-naxit-cyan transition-colors uppercase">Full Name</label>
                          <input
                            required
                            type="text"
                            placeholder="Ruwan Perera"
                            className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 focus:outline-none focus:border-naxit-cyan/50 transition-all focus:bg-white/[0.05] placeholder:text-gray-700"
                          />
                        </div>
                        <div className="flex flex-col gap-3 group">
                          <label className="text-[10px] font-mono text-gray-500 tracking-widest group-focus-within:text-naxit-cyan transition-colors uppercase">Email Address</label>
                          <input
                            required
                            type="email"
                            placeholder="name@company.com"
                            className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 focus:outline-none focus:border-naxit-cyan/50 transition-all focus:bg-white/[0.05] placeholder:text-gray-700"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 group text-white">
                        <label className="text-[10px] font-mono text-gray-500 tracking-widest group-focus-within:text-naxit-cyan transition-colors uppercase">Mission Parameters</label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Briefly tell us what you need..."
                          className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 focus:outline-none focus:border-naxit-cyan/50 transition-all focus:bg-white/[0.05] resize-none placeholder:text-gray-700"
                        />
                      </div>

                      <div className="pt-4">
                        <button
                          disabled={status === 'sending'}
                          className="group relative w-full flex items-center justify-center gap-4 bg-white text-black font-bold py-6 px-12 rounded-2xl hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-naxit-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                          <span className="relative z-10 flex items-center gap-3 uppercase tracking-widest font-mono text-xs">
                            {status === 'sending' ? (
                              <Loader2 className="w-5 h-5 animate-spin text-black" />
                            ) : (
                              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            )}
                            Send Message
                          </span>
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-24 text-center"
                  >
                    <div className="w-24 h-24 bg-naxit-cyan/10 rounded-full flex items-center justify-center mb-10 border border-naxit-cyan/20 animate-pulse">
                      <CheckCircle2 className="w-12 h-12 text-naxit-cyan" />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight leading-tight">Transmission <br /> Successful.</h3>
                    <p className="text-gray-400 text-lg max-w-sm leading-relaxed mb-12 font-light">Your protocol has been indexed. Our lead architect will contact you within 24 hours.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-xs font-mono text-naxit-cyan tracking-[0.4em] uppercase border-b border-naxit-cyan/30 pb-1 hover:text-white hover:border-white transition-colors"
                    >
                      Initialize New Uplink
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
