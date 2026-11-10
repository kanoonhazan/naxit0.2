import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Globe, Palette, MapPin, ShoppingBag, Sparkles, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceItem {
  id: string;
  title: string;
  keywordLinkText: string;
  tag: string;
  description: string;
  price: string;
  delivery: string;
  slug: string;
  icon: React.ReactNode;
}

const HOMEPAGE_SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Web Design in Sri Lanka',
    keywordLinkText: 'Web design in Sri Lanka',
    tag: 'Websites & Landing Pages',
    description: 'Fast, mobile-first websites for shops, schools, and startups. Landing pages from LKR 5,000 ready in 3 days.',
    price: 'From LKR 5,000',
    delivery: 'Within 3 days',
    slug: 'web-design-sri-lanka',
    icon: <Globe className="w-7 h-7" />
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design Studio',
    keywordLinkText: 'UI UX designer Sri Lanka',
    tag: 'App & Web Prototyping',
    description: 'Clear, user-tested wireframes and interactive prototypes. Scalable design systems built before coding starts.',
    price: 'Quoted per project',
    delivery: 'Milestone agreed',
    slug: 'ui-ux-design-sri-lanka',
    icon: <Palette className="w-7 h-7" />
  },
  {
    id: 'mannar-jaffna',
    title: 'Mannar & Northern Province Web Dev',
    keywordLinkText: 'Web design Mannar & Jaffna',
    tag: 'Local Regional Support',
    description: 'Local web design and Google Maps verification for businesses across Mannar, Jaffna, Vavuniya, and Kilinochchi.',
    price: 'From LKR 5,000',
    delivery: '2-3 days local',
    slug: 'web-development-mannar-jaffna',
    icon: <MapPin className="w-7 h-7" />
  },
  {
    id: 'rop-software',
    title: 'ROP Retail Software Sri Lanka',
    keywordLinkText: 'Retail software Sri Lanka & POS',
    tag: 'Offline Shop Billing & Stock',
    description: 'Fully offline retail billing, stock tracking, and supplier accounting on basic tablets and phones with zero internet required.',
    price: 'LKR 1,999 + LKR 399/mo',
    delivery: 'Instant on-device',
    slug: 'rop-retail-software-sri-lanka',
    icon: <ShoppingBag className="w-7 h-7" />
  },
  {
    id: 'graphic-branding',
    title: 'Graphic Design & Branding',
    keywordLinkText: 'Graphic design & branding Sri Lanka',
    tag: 'Logos, Kits & Social',
    description: 'Clean logos, flyers, social media packs, and comprehensive brand identity kits for Sri Lankan trade and commerce.',
    price: 'From LKR 500',
    delivery: '1 day to 1 week',
    slug: 'graphic-design-branding-sri-lanka',
    icon: <Sparkles className="w-7 h-7" />
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    keywordLinkText: 'Mobile app development Sri Lanka',
    tag: 'Android Engineering',
    description: 'From idea to Google Play Store. Hands-on production experience building real offline-first applications like ROP.',
    price: 'Project-based quote',
    delivery: 'Phased delivery',
    slug: 'mobile-app-development-sri-lanka',
    icon: <Smartphone className="w-7 h-7" />
  }
];

const TiltCard: React.FC<{ item: ServiceItem; index: number }> = React.memo(({ item, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="glass p-8 rounded-[2.5rem] group glass-hover transition-all duration-500 flex flex-col justify-between min-h-[380px] relative overflow-hidden gpu-accel border border-white/5 hover:border-naxit-cyan/30"
    >
      <div className="relative z-10" style={{ transform: 'translateZ(40px)' }}>
        <div className="flex items-center justify-between mb-6">
          <div className="p-3.5 bg-naxit-royal/10 border border-naxit-royal/20 rounded-2xl w-fit text-naxit-cyan group-hover:bg-naxit-cyan group-hover:text-black transition-all duration-300">
            {item.icon}
          </div>
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest px-3 py-1 glass rounded-full border border-white/5">
            {item.price}
          </span>
        </div>

        <div className="text-[10px] font-mono text-naxit-cyan tracking-[0.3em] uppercase mb-3 opacity-80">
          {item.tag}
        </div>

        <h3 className="text-2xl font-display font-bold mb-4 tracking-tight text-white group-hover:text-naxit-cyan transition-colors">
          <Link to={`/${item.slug}`} className="hover:underline">
            {item.title}
          </Link>
        </h3>

        <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed text-sm md:text-base">
          {item.description}
        </p>
      </div>

      <div className="relative z-10 pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
        <Link
          to={`/${item.slug}`}
          className="text-xs font-bold text-naxit-cyan hover:text-white flex items-center gap-2 group-hover:translate-x-1 transition-all"
        >
          <span>{item.keywordLinkText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <span className="text-[10px] font-mono text-gray-400">
          {item.delivery}
        </span>
      </div>

      <motion.div
        style={{
          background: useTransform(
            mouseXSpring,
            [-0.5, 0.5],
            [
              'radial-gradient(circle at 0% 0%, rgba(0, 212, 255, 0.12), transparent)',
              'radial-gradient(circle at 100% 100%, rgba(0, 212, 255, 0.12), transparent)'
            ]
          )
        }}
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </motion.div>
  );
});

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 md:py-44 px-4 relative overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-naxit-royal/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-naxit-cyan/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-naxit-cyan font-mono text-[10px] tracking-[0.4em] uppercase mb-4"
            >
              <div className="w-8 h-[1px] bg-naxit-cyan" />
              <span>Dedicated Service Architecture</span>
            </motion.div>

            <motion.h2
              id="services-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.05] mb-6"
            >
              Our Core <span className="text-gradient">Services</span>
            </motion.h2>

            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
              Explore dedicated solutions built specifically for Sri Lankan businesses, local shops, and ambitious enterprises.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/#pricing"
              className="px-6 py-3 glass rounded-2xl border border-white/10 hover:border-naxit-cyan/30 text-white font-medium text-xs uppercase tracking-wider transition-all"
            >
              View Full Price List
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOMEPAGE_SERVICES.map((item, index) => (
            <TiltCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
