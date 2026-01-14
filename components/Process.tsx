
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, Map, Layers, Rocket, ChevronRight, ChevronLeft } from 'lucide-react';

const STEPS = [
  {
    id: '01',
    title: 'Learn',
    subtitle: 'Problem Ingestion',
    icon: <Search className="w-6 h-6" />,
    description: 'We start by understanding the real problem - not just the request. We review your business goals, technical constraints, users, and existing systems to define what success actually looks like.'
  },
  {
    id: '02',
    title: 'Strategy',
    subtitle: 'System Architecture',
    icon: <Map className="w-6 h-6" />,
    description: 'Decisions before design. Direction before execution. We map user flows, define system boundaries, choose the right technologies, and align brand direction - so every decision has a reason.'
  },
  {
    id: '03',
    title: 'Design & Build',
    subtitle: 'High-Fidelity Assembly',
    icon: <Layers className="w-6 h-6" />,
    description: 'Design that developers can ship without friction. We iterate fast, validate early, and deliver structured, developer-ready assets - logic, components, and tokens, not just visuals.'
  },
  {
    id: '04',
    title: 'Launch & Iterate',
    subtitle: 'Continuous Evolution',
    icon: <Rocket className="w-6 h-6" />,
    description: 'Launch is not the finish line. We track performance, gather feedback, and refine where it matters - improving outcomes, not just aesthetics.'
  }
];

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragX, setDragX] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Calculate constraints based on window width
  const [dragConstraints, setDragConstraints] = useState({ left: -800, right: 0 });

  const getStep = () => {
    const isMobile = window.innerWidth < 768;
    const cardWidth = isMobile ? 320 : 450;
    const gap = 32;
    return cardWidth + gap;
  };
  useEffect(() => {
    const calculateConstraints = () => {
      if (containerRef.current) {
        const step = getStep();
        const maxIndex = STEPS.length - 1;

        setDragConstraints({
          left: -maxIndex * step,
          right: 0
        });


      }
    };

    calculateConstraints();
    window.addEventListener('resize', calculateConstraints);
    return () => window.removeEventListener('resize', calculateConstraints);
  }, []);



  // Navigation functions with functional state updates and clamping
  const snapToIndex = useCallback((index: number) => {
    const clamped = Math.min(
      STEPS.length - 1,
      Math.max(0, index)
    );

    setCurrentCardIndex(clamped);
    setDragX(-clamped * getStep());
  }, []);



  const scrollLeft = () => snapToIndex(currentCardIndex - 1);
  const scrollRight = () => snapToIndex(currentCardIndex + 1);




  // Calculate which card is currently centered
  // useEffect(() => {
  //   const cardWidth = window.innerWidth > 768 ? 450 : 320;
  //   const gap = 32;
  //   const index = Math.round(Math.abs(dragX) / (cardWidth + gap));
  //   setCurrentCardIndex(Math.min(index, STEPS.length - 1));
  // }, [dragX]);
  // useEffect(() => {
  //   const cardWidth = window.innerWidth > 768 ? 450 : 320;
  //   const gap = 32;
  //   const step = cardWidth + gap;

  //   const rawIndex = Math.round(Math.abs(dragX) / step);
  //   const clampedIndex = Math.min(
  //     STEPS.length - 1,
  //     Math.max(0, rawIndex)
  //   );

  //   setCurrentCardIndex(clampedIndex);
  // }, [dragX]);


  return (
    <section id="process" className="py-24 md:py-40 relative overflow-hidden bg-[#080808]">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-naxit-cyan/10 to-transparent" />
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-naxit-royal/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-naxit-cyan font-mono text-[10px] tracking-[0.5em] uppercase mb-6 flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-naxit-cyan/30" />
              Operational Framework
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter"
            >
              How We <span className="text-gradient">Work</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              Predictable process. Measurable progress. People don't buy services — they buy <span className="text-white">clarity and control</span>.
              Our process is designed to reduce uncertainty, align teams early, and keep delivery moving without surprises.
            </p>
          </div>
        </div>
      </div>

      {/* Draggable Step Container */}
      <div className="relative z-10" ref={containerRef}>
        <div className="cursor-grab active:cursor-grabbing overflow-visible">
          <motion.div
            drag="x"
            dragConstraints={dragConstraints}
            className="flex gap-8 px-4 md:px-[calc((100vw-1280px)/2)]"
            animate={{ x: dragX }}
            dragElastic={0.08}

            onDragEnd={(e, info) => {
              const step = getStep();
              const movedIndex = Math.round(
                Math.abs(dragX + info.offset.x) / step
              );

              snapToIndex(movedIndex);
            }}



            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {STEPS.map((step, i) => {
              const isActive = i === currentCardIndex;
              return (
                <motion.div
                  key={step.id}
                  className="min-w-[320px] md:min-w-[450px] glass p-10 rounded-[3rem] border border-white/5 relative group transition-colors hover:border-naxit-cyan/20"
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    opacity: isActive ? 1 : 0.7
                  }}
                  whileHover={window.innerWidth > 768 ? { y: -10, scale: 1 } : undefined}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Step Header */}
                  <div className="flex justify-between items-start mb-10 md:mb-16">
                    <div className="flex flex-col">
                      <span className="text-naxit-cyan font-mono text-xs tracking-[0.3em] uppercase mb-2">Step {step.id}</span>
                      <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{step.subtitle}</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl text-naxit-cyan group-hover:bg-naxit-cyan group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Body */}
                  <h3 className="text-4xl font-display font-bold mb-6 text-white group-hover:text-naxit-cyan transition-colors">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                    {step.description}
                  </p>

                  {/* Vertical progression line */}
                  {i < STEPS.length - 1 && (
                    <div className="absolute top-1/2 -right-12 w-16 h-[1px] bg-gradient-to-r from-naxit-cyan/30 to-transparent hidden xl:block" />
                  )}

                  {/* Accent glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-naxit-royal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem] pointer-events-none" />

                  {/* Active card indicator */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 border-2 border-naxit-cyan/30 rounded-[3rem] pointer-events-none"
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Navigation Hint - Centered below cards */}
        <div className="max-w-7xl mx-auto px-4 mt-8 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-3 glass py-2 px-4 rounded-full border border-white/5"
          >
            <button
              onClick={scrollLeft}
              disabled={currentCardIndex === 0}
              className={`text-naxit-cyan transition-transform ${currentCardIndex === 0
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:scale-125 cursor-pointer'
                }`}
            >

              <ChevronLeft className="w-3 h-3 animate-pulse" />
            </button>
            <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">Swipe left or right to navigate</span>
            <button
              onClick={scrollRight}
              disabled={currentCardIndex === STEPS.length - 1}
              className={`text-naxit-cyan transition-transform ${currentCardIndex === STEPS.length - 1
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:scale-125 cursor-pointer'
                }`}
            >

              <ChevronRight className="w-3 h-3 animate-pulse" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Result Section - UX Refinement: Positioned after steps as a conclusion */}
      <div className="max-w-7xl mx-auto px-4 mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-20 rounded-[3.5rem] border border-naxit-cyan/20 bg-gradient-to-br from-naxit-royal/10 via-transparent to-transparent flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-naxit-cyan/5 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-naxit-cyan/10 rounded-full pointer-events-none" />

          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-20 h-20 rounded-full bg-naxit-cyan/10 flex items-center justify-center mb-10 border border-naxit-cyan/30 shadow-[0_0_30px_rgba(0,212,255,0.15)]"
          >
            <Rocket className="w-10 h-10 text-naxit-cyan" />
          </motion.div>

          <h4 className="text-[10px] font-mono text-naxit-cyan tracking-[0.5em] uppercase mb-6">The Synthesis</h4>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 max-w-2xl leading-tight">
            Result: <span className="text-gradient">Fewer surprises. Faster decisions. Confident launches.</span>
          </h2>

          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-naxit-cyan/40 to-transparent mb-8" />

          <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em]">
            Protocol Optimization Complete // Ready for Integration
          </p>
        </motion.div>
      </div>

      {/* Mobile Dot Indicators */}
      <div className="md:hidden flex justify-center mt-12 gap-3">
        {STEPS.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentCardIndex
              ? 'bg-naxit-cyan scale-125'
              : 'bg-naxit-cyan/20'
              }`}
          />
        ))}

      </div>
    </section>
  );
};

export default Process;
