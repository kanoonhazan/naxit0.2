
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-40 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Brand & Direct Channels */}
          <div className="lg:col-span-5 space-y-12">
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
                className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9]"
              >
                Contact <br /><span className="text-gradient">NAXIT</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md"
              >
                Tell us a little about your business and what you need. We’ll guide you honestly and recommend the right next step.
              </motion.p>
            </div>

            {/* Tactical Contact Nodes */}
            <div className="space-y-4">
              {[
                { label: 'Chat on WhatsApp', value: '075 808 9209', href: 'https://wa.me/94758089209', icon: 'WA' },
                { label: 'Call Us Directly', value: '058 089 209', href: 'tel:058089209', icon: 'PH' },
                { label: 'Email', value: 'naxitofficial@gmail.com', href: 'mailto:naxitofficial@gmail.com', icon: 'EM' }
              ].map((node, i) => (
                <motion.a
                  key={node.label}
                  href={node.href}
                  target={node.label === 'WhatsApp' ? "_blank" : undefined}
                  rel={node.label === 'WhatsApp' ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-5 glass rounded-2xl border border-white/5 hover:border-naxit-cyan/30 transition-all group overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-naxit-cyan/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 pointer-events-none" />
                  <div className="w-12 h-12 md:w-14 md:h-14 glass rounded-xl flex items-center justify-center border border-white/10 text-naxit-cyan group-hover:bg-naxit-cyan group-hover:text-black transition-all duration-300 font-mono font-bold text-xs shrink-0 relative z-10">
                    {node.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-1">{node.label}</div>
                    <div className="text-white font-medium text-base md:text-lg tracking-tight group-hover:text-naxit-cyan transition-colors">{node.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Authority Marker / Founder */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pt-10 border-t border-white/5 flex items-center gap-6"
            >
              <div className="relative">
                <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-naxit-royal/30 to-naxit-cyan/30 p-[1px]">
                  <div className="w-full h-full rounded-full bg-naxit-charcoal flex items-center justify-center overflow-hidden">
                    <img src="/assets/Kanoon Hazan.png" alt="Hazan K." className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-naxit-cyan rounded-full border-2 border-naxit-charcoal" />
              </div>
              <div>
                <div className="text-white font-bold text-xl tracking-tight">Hazan K.</div>
                <div className="text-naxit-cyan font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Founder, NAXIT</div>
                <p className="text-gray-500 text-[10px] md:text-xs mt-2 leading-relaxed max-w-[240px]">
                  Focused on building practical digital solutions for real businesses.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Conversion Hub */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-naxit-cyan/5 rounded-full blur-[120px] pointer-events-none" />

              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <div className="relative z-10 mb-12">
                      <div className="text-naxit-cyan font-mono text-[10px] tracking-[0.5em] uppercase mb-4">Uplink Gateway</div>
                      <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white">Tell Us<span className="text-gradient">About Your Project</span></h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-3 group">
                          <label className="text-[10px] font-mono text-gray-500 tracking-widest group-focus-within:text-naxit-cyan transition-colors uppercase">Full Name</label>
                          <input
                            required
                            type="text"
                            placeholder="Ruwan Perera"
                            className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 md:p-6 focus:outline-none focus:border-naxit-cyan/50 transition-all focus:bg-white/[0.05] text-white placeholder:text-gray-700"
                          />
                        </div>
                        <div className="flex flex-col gap-3 group">
                          <label className="text-[10px] font-mono text-gray-500 tracking-widest group-focus-within:text-naxit-cyan transition-colors uppercase">Email Address</label>
                          <input
                            required
                            type="email"
                            placeholder="name@company.com"
                            className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 md:p-6 focus:outline-none focus:border-naxit-cyan/50 transition-all focus:bg-white/[0.05] text-white placeholder:text-gray-700"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 group">
                        <label className="text-[10px] font-mono text-gray-500 tracking-widest group-focus-within:text-naxit-cyan transition-colors uppercase">Project Parameters</label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Briefly tell us what you need (website, online setup, design, etc.)"
                          className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 md:p-6 focus:outline-none focus:border-naxit-cyan/50 transition-all focus:bg-white/[0.05] resize-none text-white placeholder:text-gray-700"
                        />
                      </div>

                      <div className="pt-4">
                        <button
                          disabled={status === 'sending'}
                          className="group relative w-full md:w-auto flex items-center justify-center gap-4 bg-white text-black font-bold py-5 md:py-6 px-12 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-naxit-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                          <span className="relative z-10 flex items-center gap-3">
                            {status === 'sending' ? (
                              <Loader2 className="w-5 h-5 animate-spin" />
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
                    <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight">Transmission Complete.</h3>
                    <p className="text-gray-400 text-lg max-w-sm leading-relaxed mb-12">Your data has been indexed. Our lead architect will contact you within 24 hours.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-[10px] font-mono text-naxit-cyan tracking-[0.4em] uppercase border-b border-naxit-cyan pb-1 hover:text-white hover:border-white transition-colors"
                    >
                      New Transmission
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
