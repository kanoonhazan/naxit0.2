
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
    <section id="contact" className="py-40 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="glass p-8 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-naxit-royal/10 rounded-full blur-[120px]" />
          
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="relative z-10 mb-16">
                  <span className="text-naxit-cyan font-mono text-xs tracking-[0.4em] uppercase mb-4 block">Secure Uplink</span>
                  <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">Ready to <br/><span className="text-gradient">Integrate?</span></h2>
                  <p className="text-gray-400 text-lg max-w-md">Our neural network is ready to process your vision. Start the transmission below.</p>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  <div className="flex flex-col gap-3 group">
                    <label className="text-[10px] font-mono text-gray-500 tracking-widest group-focus-within:text-naxit-cyan transition-colors">IDENTIFIER</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe" 
                      className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 focus:outline-none focus:border-naxit-cyan/50 transition-all focus:bg-white/[0.04]"
                    />
                  </div>
                  <div className="flex flex-col gap-3 group">
                    <label className="text-[10px] font-mono text-gray-500 tracking-widest group-focus-within:text-naxit-cyan transition-colors">SIGNAL SOURCE</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@future.io" 
                      className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 focus:outline-none focus:border-naxit-cyan/50 transition-all focus:bg-white/[0.04]"
                    />
                  </div>
                  <div className="flex flex-col gap-3 md:col-span-2 group">
                    <label className="text-[10px] font-mono text-gray-500 tracking-widest group-focus-within:text-naxit-cyan transition-colors">MISSION PARAMETERS</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Define your digital objectives..." 
                      className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 focus:outline-none focus:border-naxit-cyan/50 transition-all focus:bg-white/[0.04] resize-none"
                    />
                  </div>
                  <div className="md:col-span-2 flex justify-start mt-4">
                    <button 
                      disabled={status === 'sending'}
                      className="group relative flex items-center gap-3 bg-white text-black font-bold py-5 px-10 rounded-2xl hover:scale-105 transition-all active:scale-95 disabled:opacity-50"
                    >
                      {status === 'sending' ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      )}
                      <span>Execute Transmission</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-24 h-24 bg-naxit-cyan/20 rounded-full flex items-center justify-center mb-8 border border-naxit-cyan/30">
                  <CheckCircle2 className="w-12 h-12 text-naxit-cyan" />
                </div>
                <h3 className="text-4xl font-display font-bold mb-4">Transmission Successful</h3>
                <p className="text-gray-400 max-w-sm">Your data has been indexed. Our primary intelligence will contact you within 24 operational hours.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-10 text-xs font-mono text-naxit-cyan tracking-[0.3em] uppercase hover:opacity-100 opacity-60 transition-opacity"
                >
                  New Transmission
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Contact;
