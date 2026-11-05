import React from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, Layers, ArrowRight, Sparkles } from 'lucide-react';

const QA_ITEMS = [
  {
    question: "What does a UI/UX design agency do?",
    answer: "A UI/UX design agency creates websites and mobile apps that feel simple and clear to use. The team studies real buyers, plans page layouts, and tests clean screens. These user-friendly digital tools help local businesses hold customer interest, gain new inquiries, and turn more visitors into paying buyers every day."
  },
  {
    question: "How do I get my business online in Sri Lanka?",
    answer: "Getting your business online in Sri Lanka starts with a good web address and a fast mobile website. Next, add a direct WhatsApp chat link and simple local payment choices. Finally, set up your Google Business Profile and local search tags so buyers near you can find your shop quickly."
  },
  {
    question: "Why should Sri Lankan SMEs invest in custom web design?",
    answer: "Custom web design gives Sri Lankan small businesses a unique look that standard site templates cannot match. Custom pages load much faster on mobile phones, rank higher on search engines, and match local buyer habits. A custom site builds strong trust with clients and brings steady calls and visits."
  },
  {
    question: "What is ROP, NAXIT's retail operations platform?",
    answer: "ROP is a simple retail platform made by NAXIT for Sri Lankan shops, mini-marts, and distributors. It tracks daily shelf stock, creates quick sales receipts, and tracks supplier bills in one easy screen. ROP works on basic computers and tablets without complex setups or high monthly fees."
  }
];

const STEPS = [
  {
    number: "01",
    title: "Set Goals and Buyer Needs",
    detail: "Pick what your website must do, determine your primary offer, and define the exact customers you want to reach across Sri Lanka."
  },
  {
    number: "02",
    title: "Plan Your Site Pages",
    detail: "List your main services, organize authentic project photos, and place prominent direct WhatsApp contact buttons for fast customer inquiries."
  },
  {
    number: "03",
    title: "Build Clean Screen Layouts",
    detail: "Ensure page layouts display clearly on budget smartphones and desktop monitors with fast load times on local mobile networks."
  },
  {
    number: "04",
    title: "Code for Speed and SEO",
    detail: "Develop clean semantic HTML, include schema markup, and optimize image formats so search engines index your pages accurately."
  },
  {
    number: "05",
    title: "Go Live and Share Your Link",
    detail: "Publish on your custom domain, connect your verified Google Business Profile, and share your new digital identity with customers."
  }
];

const PACKAGES = [
  { feature: "Target Business Type", starter: "Sole Traders & Micro Shops", growth: "Growing SMEs & Schools", enterprise: "Multi-Store & Wholesale" },
  { feature: "Project Delivery Time", starter: "1 to 2 Weeks", growth: "2 to 3 Weeks", enterprise: "4 to 6 Weeks" },
  { feature: "Mobile-First Web Layout", starter: "Included", growth: "Included", enterprise: "Included" },
  { feature: "WhatsApp Inquiry Link", starter: "Included", growth: "Included", enterprise: "Included" },
  { feature: "Google Search & Schema", starter: "Core Setup", growth: "Full Local SEO", enterprise: "Advanced GEO Architecture" },
  { feature: "ROP Retail Software", starter: "Not Included", growth: "Available Add-on", enterprise: "Full Integration Included" },
  { feature: "Post-Launch Care", starter: "30 Days Support", growth: "60 Days Priority", enterprise: "Dedicated Support Retainer" }
];

const Insights: React.FC = () => {
  return (
    <section id="insights" className="py-24 md:py-36 px-4 relative overflow-hidden bg-transparent">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-naxit-cyan/5 blur-[160px] -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-naxit-cyan font-mono text-[10px] tracking-[0.4em] uppercase mb-6"
          >
            <div className="w-8 h-[1px] bg-naxit-cyan" />
            <span>Digital Knowledge & Strategy</span>
          </motion.div>

          <motion.h2
            id="insights-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.05] mb-8"
          >
            Answers for <span className="text-gradient">Local Growth</span>
          </motion.h2>

          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            Practical guidance and clear answers designed to help Sri Lankan business owners make informed digital decisions without technical confusion.
          </p>
        </div>

        {/* 4 Question Headings with 40-60 Word Direct Answers (P1-5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {QA_ITEMS.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 space-y-4 hover:border-naxit-cyan/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-naxit-cyan text-xs font-mono uppercase tracking-widest mb-3">
                  <HelpCircle className="w-4 h-4" />
                  <span>Topic 0{index + 1}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white leading-snug mb-4">
                  {item.question}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* 'How to' Heading with Ordered List (P1-5) */}
        <div className="mb-24">
          <div className="glass p-8 md:p-14 rounded-[3rem] border border-white/5 relative overflow-hidden">
            <div className="max-w-3xl mb-12">
              <div className="text-[10px] font-mono text-naxit-cyan uppercase tracking-[0.4em] mb-4">
                Implementation Guide
              </div>
              <h3 id="how-to-launch-website" className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
                How to Launch a Successful Business Website in 5 Steps
              </h3>
              <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
                Follow this sequential roadmap to establish an effective online presence that builds customer trust and converts local traffic.
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-5 gap-6 list-none p-0 m-0">
              {STEPS.map((step, idx) => (
                <li key={idx} className="glass p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-3xl font-display font-black text-naxit-cyan block mb-3 font-mono">
                      {step.number}
                    </span>
                    <h4 className="text-base font-display font-bold text-white mb-2 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* 3+ Column Comparison Table (P1-5) */}
        <div id="packages" className="space-y-8">
          <div className="max-w-2xl">
            <div className="text-[10px] font-mono text-naxit-cyan uppercase tracking-[0.4em] mb-3">
              Clear Investment Options
            </div>
            <h3 id="service-comparison-heading" className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
              Service Package Comparison
            </h3>
            <p className="text-gray-400 text-base font-light">
              Compare our structured service tiers to select the right digital scope for your organizational size and goals.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 glass">
            <table className="w-full text-left text-sm text-gray-300 min-w-[650px]">
              <thead className="bg-white/5 text-xs font-mono uppercase tracking-wider text-naxit-cyan border-b border-white/10">
                <tr>
                  <th scope="col" className="py-5 px-6 font-bold">Service Deliverable</th>
                  <th scope="col" className="py-5 px-6 font-bold">Starter Presence</th>
                  <th scope="col" className="py-5 px-6 font-bold">Business Growth</th>
                  <th scope="col" className="py-5 px-6 font-bold">Custom Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                {PACKAGES.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <th scope="row" className="py-4 px-6 font-medium text-white whitespace-nowrap">
                      {row.feature}
                    </th>
                    <td className="py-4 px-6 text-gray-300">
                      {row.starter}
                    </td>
                    <td className="py-4 px-6 text-naxit-cyan font-medium">
                      {row.growth}
                    </td>
                    <td className="py-4 px-6 text-gray-300">
                      {row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;

