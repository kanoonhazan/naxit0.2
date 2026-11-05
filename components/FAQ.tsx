import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const FAQ_DATA = [
  {
    question: "What services does NAXIT offer?",
    answer: "NAXIT offers full digital solutions for Sri Lankan businesses. We build fast modern websites, clean UI/UX mockups, brand logos, and social media graphics. We also create custom shop tools, like ROP, our retail platform that helps shop owners handle daily sales, stock counts, and supplier records with ease."
  },
  {
    question: "How much does a business website cost in Sri Lanka?",
    answer: "A basic business website in Sri Lanka usually costs between 45,000 and 85,000 LKR. Larger sites with custom features or product catalogs range from 95,000 to 220,000 LKR. Total cost depends on page count, custom code, and forms. NAXIT offers clear, fixed project quotes with no hidden costs."
  },
  {
    question: "How long does it take to design and launch a website?",
    answer: "Most simple business websites take two to three weeks from kickoff to final launch. Larger web apps with custom databases or user portals take four to six weeks. We work in quick steps: planning site layout, showing design previews, coding, mobile testing, and submitting your site to Google."
  },
  {
    question: "Does NAXIT work with businesses outside Colombo and outside Sri Lanka?",
    answer: "Yes, NAXIT works with businesses across Sri Lanka, including Jaffna, Kandy, Galle, and Mannar, as well as global teams. We use video calls, live preview links, and WhatsApp chats to make project work smooth and fast, no matter where your office or retail shop is located."
  },
  {
    question: "What is ROP, NAXIT's retail operations platform?",
    answer: "ROP is a simple retail platform made by NAXIT for Sri Lankan shops, mini-marts, and distributors. It tracks daily shelf stock, creates quick sales receipts, and tracks supplier bills in one easy screen. ROP works on basic computers and tablets without complex setups or high monthly fees."
  },
  {
    question: "How does NAXIT help Sri Lankan businesses get found on Google?",
    answer: "We build search engine optimization into every page from the start. We add clear schema markup, boost page speed on mobile data, and set up your Google Business Profile. These steps help your business show up when local customers search for your services on Google and AI tools."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 md:py-36 px-4 relative overflow-hidden bg-transparent">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-naxit-royal/5 blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-naxit-cyan font-mono text-[10px] tracking-[0.4em] uppercase mb-6"
          >
            <div className="w-8 h-[1px] bg-naxit-cyan" />
            <span>Frequently Asked Questions</span>
          </motion.div>

          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.05] mb-6"
          >
            Common <span className="text-gradient">Questions</span>
          </motion.h2>

          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            Everything you need to know about pricing, development timelines, local support, and working with NAXIT.
          </p>
        </div>

        {/* Accordion Questions */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-2xl md:rounded-3xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-naxit-cyan/30"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer"
                >
                  <h3 className="text-lg md:text-xl font-display font-bold text-white tracking-tight leading-snug">
                    {item.question}
                  </h3>
                  <div
                    className={`w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-naxit-cyan text-black border-naxit-cyan' : 'text-gray-400'
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                        <div className="h-[1px] w-full bg-white/5 mb-6" />
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

