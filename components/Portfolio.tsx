
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, Database, Cpu } from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Xenon Quantum Interface',
    category: 'Design',
    tagline: 'Redefining human-AI interaction through spatial computing.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop',
    impact: '+140% User Depth',
    tech: ['React Three Fiber', 'WebGPU', 'Framer Motion'],
    challenge: 'Architecting a 4D navigation system for complex neural data visualization.',
    approach: 'We developed a fluid, motion-first spatial interface that uses dynamic lighting to guide user focus through multi-dimensional datasets.',
    fullDescription: 'Traditional 2D interfaces failed to convey the complexity of Xenon\'s quantum computing datasets. Our team reinvented the workspace, moving into a 3D environment where data is represented as manipulatable geometric clusters.',
    problem: {
      title: 'The Problem',
      content: [
        'Xenon is a conceptual data platform handling large, complex datasets.',
        'The challenge was making this data easy to understand and explore without overwhelming users.',
        'Traditional flat dashboards made it difficult to see patterns and relationships clearly.'
      ]
    },
    solution: {
      title: 'Our Solution',
      content: [
        'We designed a visual-first interface concept that helps users navigate complex data more intuitively.',
        'Instead of dense tables and charts, information is grouped visually, allowing users to:',
        'Focus on key data points',
        'Understand relationships faster',
        'Explore information step by step',
        'The interface prioritizes clarity, smooth interaction, and user focus.'
      ]
    },
    designDecisions: [
      'Clean, distraction-free layout',
      'Motion used only to guide attention',
      'Clear visual hierarchy for complex information',
      'Designed for performance and scalability',
      'Every element exists to reduce confusion and improve understanding.'
    ],
    resultOutcome: {
      title: 'Result (Concept Outcome)',
      content: [
        'This concept demonstrates how complex data can be presented in a way that feels organized, understandable, and professional.',
        'It showcases NAXIT’s ability to think through real product problems, not just create visuals.'
      ]
    },
    gallery: [
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000'
    ]
  },
  {
    id: '02',
    title: 'Aethelgard AI Core',
    category: 'AI',
    tagline: 'Autonomous supply-chain optimization for global logistics.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop',
    impact: '99.2% Accuracy',
    tech: ['PyTorch', 'Next.js', 'TensorFlow'],
    challenge: 'Reducing latency in real-time predictive modeling for oceanic freight.',
    approach: 'By deploying edge computing nodes on maritime vessels, we removed the 5-second latency barrier that previously hampered real-time adjustments.',
    fullDescription: 'Logistics giants faced massive losses due to unexpected weather shifts. Aethelgard integrates satellite data directly with on-ship AI to predict turbulence and optimize routes in under 50ms.',
    problem: {
      title: 'The Problem',
      content: [
        'Global logistics companies face extreme unpredictability in trans-oceanic freight routes.',
        'Delayed data transmission led to massive fuel waste and safety risks.',
        'Traditional shore-to-ship modeling couldn\'t react fast enough to localized weather shifts.'
      ]
    },
    solution: {
      title: 'Our Solution',
      content: [
        'We implemented an edge-AI system that runs locally on maritime hardware.',
        'The system processes satellite telemetry in real-time, allowing for:',
        'Under-50ms route adjustments',
        '99.2% fuel optimization accuracy',
        'Autonomous navigation assistance in high-risk zones'
      ]
    },
    designDecisions: [
      'Low-latency data processing architecture',
      'Offline-first synchronization protocols',
      'Ruggedized hardware interface design',
      'Predictive safety overrides'
    ],
    resultOutcome: {
      title: 'Result (Operational Efficiency)',
      content: [
        'Aethelgard set a new benchmark for maritime AI, reducing operational costs by 30% for early adopters.',
        'It demonstrates NAXIT’s capability in high-stakes engineering and real-time AI processing.'
      ]
    },
    gallery: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000',
      'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2000',
      'https://images.unsplash.com/photo-1454165833767-1316b34464d7?q=80&w=2000'
    ]
  },
  {
    id: '03',
    title: 'Vanguard Brand Identity',
    category: 'Strategy',
    tagline: 'A legacy-first digital rebirth for a century-old firm.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop',
    impact: '3.2x Valuation',
    tech: ['Strategic Design', 'Visual Narratives', 'CGI'],
    challenge: 'Translating industrial heritage into a digital-native visual language.',
    approach: 'We stripped away the clutter and focused on the core engineering prowess of the firm, using high-end CGI to showcase their physical assets in a digital space.',
    fullDescription: 'Vanguard had incredible history but looked "old" to new investors. We crafted a brand narrative focused on "Precision Over Time," utilizing monochromatic palettes and sharp geometric layouts.',
    problem: {
      title: 'The Problem',
      content: [
        'A century-old engineering firm was struggling to attract modern venture capital.',
        'The brand identity felt industrial and dated, failing to communicate their modern technological capabilities.',
        'Communication gaps between legacy operations and new digital-first investors.'
      ]
    },
    solution: {
      title: 'Our Solution',
      content: [
        'We redesigned the entire visual ecosystem around the concept of "Quantum Heritage."',
        'Merging traditional precision with digital-native aesthetics through:',
        'High-fidelity CGI asset creation',
        'Minimalist typographic systems',
        'Kinetic brand narratives on digital platforms'
      ]
    },
    designDecisions: [
      'Monochromatic color theory for authority',
      'Geometric grid-based layout systems',
      'Custom font sets for technical clarity',
      'Interactive digital annual reports'
    ],
    resultOutcome: {
      title: 'Result (Valuation Surge)',
      content: [
        'The rebranding directly contributed to a 3.2x surge in firm valuation during the subsequent funding round.',
        'This proves NAXIT’s ability to bridge the gap between legacy industries and modern digital capital.'
      ]
    },
    gallery: [
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2000',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000',
      'https://images.unsplash.com/photo-1600880212319-7524391cfc1e?q=80&w=2000'
    ]
  },
  {
    id: '04',
    title: 'Nebula Cloud Infrastructure',
    category: 'Engineering',
    tagline: 'Edge computing redefined for low-latency neural processing.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
    impact: '15ms Latency',
    tech: ['Rust', 'Kubernetes', 'gRPC'],
    challenge: 'Deploying high-compute nodes across 42 global zones with zero downtime.',
    approach: 'A Rust-based container orchestrator was custom-built to handle sub-millisecond switching between nodes during high-load peaks.',
    fullDescription: 'Nebula needed a serverless architecture that didn\'t sacrifice the raw performance required for LLM training. We architected a system that behaves like local hardware but scales like the cloud.',
    problem: {
      title: 'The Problem',
      content: [
        'Standard cloud providers introduced too much latency for localized AI inference.',
        'Infrastructure scaling often required downtime, unacceptable for real-time applications.',
        'Data sovereignty issues in specific global regions hindered deployment.'
      ]
    },
    solution: {
      title: 'Our Solution',
      content: [
        'We custom-built a Rust-based edge orchestrator for sub-15ms processing.',
        'A decentralized infrastructure model that provides:',
        'Zone-specific data containment',
        'Zero-downtime hot-swapping of compute nodes',
        'Native support for heavy neural payloads'
      ]
    },
    designDecisions: [
      'Memory-safe Rust codebase',
      'Custom gRPC communication layers',
      'Automated zone replication',
      'Encrypted transit for all AI weights'
    ],
    resultOutcome: {
      title: 'Result (Global Scale)',
      content: [
        'Nebula now processes millions of inference requests daily with 99.999% uptime.',
        'It showcases NAXIT’s high-frequency infrastructure and backend engineering prowess.'
      ]
    },
    gallery: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000',
      'https://images.unsplash.com/photo-1504384308090-c89e1207a8f0?q=80&w=2000'
    ]
  }
];

const CATEGORIES = ['All', 'Design', 'AI', 'Strategy', 'Engineering'] as const;

interface ProjectCardProps {
  project: Project;
  onSelect: (p: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(project)}
      className="group relative h-[600px] rounded-[2.5rem] overflow-hidden glass border border-white/5 cursor-pointer"
    >
      <div className="absolute inset-0 z-0">
        <motion.img
          layoutId={`image-${project.id}`}
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-naxit-charcoal via-naxit-charcoal/40 to-transparent" />
      </div>

      <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="text-naxit-cyan font-mono text-[10px] tracking-[0.4em] uppercase">{project.id} / {project.category}</span>
            <motion.h3
              layoutId={`title-${project.id}`}
              className="text-4xl font-display font-bold tracking-tight text-white group-hover:text-naxit-cyan transition-colors"
            >
              {project.title}
            </motion.h3>
          </div>
          <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white">
            <ExternalLink className="w-5 h-5" />
          </div>
        </div>

        <div className="max-w-md">
          <p className="text-xl text-gray-300 font-light mb-8 group-hover:text-white transition-colors">
            {project.tagline}
          </p>

          <div className="grid grid-cols-2 gap-6 opacity-100 translate-y-0 md:translate-y-8 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <div>
              <div className="text-[10px] font-mono text-gray-400 mb-2 flex items-center gap-2">
                <Database className="w-3 h-3 text-naxit-cyan" /> THE IMPACT
              </div>
              <div className="text-naxit-cyan font-bold text-lg">{project.impact}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-gray-400 mb-2 flex items-center gap-2">
                <Cpu className="w-3 h-3 text-naxit-cyan" /> TECH STACK
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 2).map(t => (
                  <span key={t} className="text-[10px] bg-white/5 px-2 py-1 rounded border border-white/10 text-gray-400">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface PortfolioProps {
  onSelectProject: (p: Project) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-40 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
          <div className="max-w-2xl">
            <motion.div className="text-naxit-cyan font-mono text-sm tracking-[0.4em] uppercase mb-4">Case Studies</motion.div>
            <motion.h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter">Selected <br /> <span className="text-gradient">Masterworks</span></motion.h2>
          </div>

          <div className="flex flex-wrap gap-2 glass p-2 rounded-2xl border border-white/5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === cat ? 'bg-naxit-royal text-white shadow-[0_0_20px_rgba(0,85,255,0.4)]' : 'text-gray-500 hover:text-white hover:bg-white/5'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={onSelectProject} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
