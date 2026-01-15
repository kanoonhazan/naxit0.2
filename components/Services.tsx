
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Palette, Code, Globe, Sparkles, ArrowRight } from 'lucide-react';
import { Service } from '../types';
import { SERVICES } from '../data';

// Define props interface for TiltCard to resolve TypeScript typing issues with React reserved props
interface TiltCardProps {
  service: Service;
  index: number;
  onClick: () => void;
}

// Using React.FC to properly handle React-internal props like key and children
const TiltCard: React.FC<TiltCardProps> = ({ service, index, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="glass p-8 rounded-[2rem] group glass-hover transition-colors duration-500 flex flex-col justify-between min-h-[400px] relative overflow-hidden cursor-pointer"
    >
      <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
        <div className="mb-8 p-4 bg-naxit-royal/10 border border-naxit-royal/20 rounded-2xl w-fit text-naxit-cyan group-hover:bg-naxit-cyan group-hover:text-black transition-all duration-500">
          {service.icon}
        </div>
        <div className="text-[10px] font-mono text-naxit-cyan tracking-[0.3em] uppercase mb-4 opacity-70">{service.tag}</div>
        <h3 className="text-3xl font-display font-bold mb-6 tracking-tight">{service.title}</h3>
        <p className="text-gray-400 group-hover:text-white transition-colors duration-300 leading-relaxed text-lg">
          {service.description}
        </p>
      </div>

      <div className="relative z-10 flex items-center gap-3 text-sm font-bold opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-0 md:translate-y-4 group-hover:translate-y-0">
        Learn more <ArrowRight className="w-4 h-4 text-naxit-cyan" />
      </div>

      {/* Interactive Light Effect */}
      <motion.div
        style={{
          background: useTransform(mouseXSpring, [-0.5, 0.5],
            ["radial-gradient(circle at 0% 0%, rgba(0, 212, 255, 0.15), transparent)",
              "radial-gradient(circle at 100% 100%, rgba(0, 212, 255, 0.15), transparent)"]
          )
        }}
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </motion.div>
  );
};

interface ServicesProps {
  onSelectService?: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-40 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8"
            >
              Our <span className="text-gradient">Services</span>
            </motion.h2>
            <p className="text-gray-400 text-xl font-light">
              Simple digital solutions that help your business look professional, get found, and grow.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center animate-bounce">
              <Code className="w-4 h-4 opacity-40" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <TiltCard
              key={service.id}
              service={service}
              index={index}
              onClick={() => onSelectService?.(service)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
