
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Palette, Code, Globe, Sparkles, ArrowRight } from 'lucide-react';
import { Service } from '../types';

// const SERVICES: Service[] = [
//   {
//     id: '1',
//     title: 'Professional Business Website',
//     description: 'A clean, secure website that helps customers trust your business and contact you easily.',
//     icon: <Globe className="w-8 h-8" />,
//     tag: 'Website',
//     badge: 'Most Popular Service',
//     subtitle: 'Be found on Google. Look trustworthy. Grow your business.',
//     problemTitle: 'Why do you need this?',
//     problem: 'You have a good business, but when new customers search for you on their phones, they find nothing. Or worse, they find outdated information. This makes them worry that you might be closed or unprofessional, so they go to your competitor instead.',
//     targetAudienceTitle: 'Who is this for?',
//     targetAudience: [
//       'Hardware Stores & Shops',
//       'Tuition Classes & Academies',
//       'Law Firms & Consultancies',
//       'Medical Centers & Pharmacies',
//       'Restaurants & Bakeries',
//       'Construction Companies'
//     ],
//     inclusionsTitle: 'What is included?',
//     inclusions: [
//       {
//         title: 'Professional Design',
//         description: 'A clean, one-page layout that shows your services, photos, and contact info clearly.'
//       },
//       {
//         title: 'Mobile Friendly',
//         description: 'Most customers use phones. Your site will look perfect on iPhone and Android.'
//       },
//       {
//         title: '.COM or .LK Domain',
//         description: 'We register your official internet address (e.g., www.yourshop.com).'
//       },
//       {
//         title: 'Google Maps Setup',
//         description: 'We verify your location on Google Maps so customers can drive to you easily.'
//       },
//       {
//         title: 'Hosting & Security',
//         description: '1 year of fast server hosting included. Secure with HTTPS (padlock icon).'
//       },
//       {
//         title: 'WhatsApp Button',
//         description: 'A direct link for customers to message you immediately.'
//       }
//     ],
//     resultTitle: 'The Result',
//     result: 'You look like a serious business. When people search for you, they see your photos, your location, and your services. They trust you enough to call.',
//     ctaText: 'Get your business online',
//     ctaSubtext: 'Projects typically take 5-7 days. Contact us for a fixed price quote.',
//     ctaPrimary: 'Get a Quote on WhatsApp',
//     ctaSecondary: ''
//   },
//   {
//     id: '2',
//     title: 'Digital Presence Setup',
//     description: 'We set up your Google and social profiles so local customers can find you with confidence.',
//     icon: <Code className="w-8 h-8" />,
//     tag: 'Presence',
//     badge: 'Essential for Locals',
//     subtitle: 'Be visible where your customers are looking.',
//     problemTitle: 'The Problem',
//     problem: 'People search "hardware store near me" or check Facebook for reviews before visiting. If your shop doesn\'t appear on Google Maps or looks abandoned on Facebook, you are losing customers to the shop down the road.',
//     targetAudienceTitle: 'Who is this for?',
//     targetAudience: [
//       'Restaurants & Cafes',
//       'Salons & Barbers',
//       'Medical Centers',
//       'Car Service Stations',
//       'Local Retail Shops',
//       'Home Bakers'
//     ],
//     inclusionsTitle: 'What is included?',
//     inclusions: [
//       {
//         title: 'Google Maps Verification',
//         description: 'We claim your business location, set correct hours, add photos, and help you get the verification code.'
//       },
//       {
//         title: 'Facebook Page Setup',
//         description: 'A professional cover photo, automated greeting messages, and correct contact info setup.'
//       },
//       {
//         title: 'WhatsApp for Business',
//         description: 'Setup auto-replies, business catalog (menu/prices), and quick response messages.'
//       },
//       {
//         title: 'Basic SEO',
//         description: 'We ensure your business name appears correctly when people search for your services nearby.'
//       }
//     ],
//     resultTitle: 'The Result',
//     result: 'When a customer searches "open now" or looks for your service, you show up. You look active, open, and ready for business.',
//     ctaText: 'Get found online today',
//     ctaSubtext: 'Quick setup in 2-3 days. One-time fee.',
//     ctaPrimary: 'Chat with us',
//     ctaSecondary: ''
//   },
//   {
//     id: '3',
//     title: 'UI/UX Design',
//     description: 'Clear, user-focused design before you invest money in development.',
//     icon: <Palette className="w-8 h-8" />,
//     tag: 'Design',
//     badge: 'For Startups & Founders',
//     subtitle: 'Turn your idea into a professional design before you spend money on coding.',
//     problemTitle: 'The Problem',
//     problem: 'You explain your app idea to developers, but they build something ugly or hard to use. Changing code is expensive and slow. Investors won\'t fund an app that looks amateur.',
//     targetAudienceTitle: 'Who is this for?',
//     targetAudience: [
//       'Tech Startup Founders',
//       'Entrepreneurs with App Ideas',
//       'Companies building internal tools',
//       'Anyone hiring freelance developers'
//     ],
//     inclusionsTitle: 'What is included?',
//     inclusions: [
//       {
//         title: 'User Flow Diagrams',
//         description: 'We map out exactly how a user moves through your app, screen by screen.'
//       },
//       {
//         title: 'Wireframes',
//         description: 'Blueprints of the app structure without colors, focusing on functionality.'
//       },
//       {
//         title: 'High-Fidelity UI',
//         description: 'Beautiful, full-color designs that show exactly what the final app will look like.'
//       },
//       {
//         title: 'Clickable Prototype',
//         description: 'A simulation of your app that you can tap through on your phone to test the feel.'
//       }
//     ],
//     resultTitle: 'The Result',
//     result: 'You get a complete design file. You can give this to any developer and they will know exactly what to build. No more guessing.',
//     ctaText: 'Visualize your idea',
//     ctaSubtext: 'Packages start from simple 5-screen prototypes to full systems.',
//     ctaPrimary: 'Discuss my Idea',
//     ctaSecondary: ''
//   },
//   {
//     id: '4',
//     title: 'Social Media Graphics',
//     description: 'Logos, posters, and social media designs that look professional and consistent.',
//     icon: <Sparkles className="w-8 h-8" />,
//     tag: 'Creative',
//     badge: 'Branding & Marketing',
//     subtitle: 'Look big, even if you are small. Professional designs for your brand.',
//     problemTitle: 'The Problem',
//     problem: 'Posting blurry photos, using "Paint" for logos, or having messy flyers makes customers think your product quality is low. First impressions matter.',
//     targetAudienceTitle: 'Who is this for?',
//     targetAudience: [
//       'Clothing Shops',
//       'Tuition Classes',
//       'Food Brands',
//       'Real Estate Agents',
//       'Event Organizers'
//     ],
//     inclusionsTitle: 'What is included?',
//     inclusions: [
//       {
//         title: 'Logo Design',
//         description: 'A unique, professional logo that stands out. We provide all file formats (PNG, SVG, PDF).'
//       },
//       {
//         title: 'Social Media Posts',
//         description: 'Beautiful templates for your Facebook and Instagram posts that you can reuse.'
//       },
//       {
//         title: 'Print Materials',
//         description: 'Design for business cards, flyers, banners, and letterheads ready for printing.'
//       },
//       {
//         title: 'Photo Editing',
//         description: 'Professional retouching for your product photos to make them look appetizing or attractive.'
//       }
//     ],
//     resultTitle: 'The Result',
//     result: 'A consistent, trustworthy look across your shop board, business card, and Facebook page. Customers take you seriously.',
//     ctaText: 'Upgrade your brand',
//     ctaSubtext: 'Fast turnaround times. Packages available for monthly support.',
//     ctaPrimary: 'Get a Quote',
//     ctaSecondary: ''
//   }
// ];

const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Professional Business Website',
    description: 'A clean, secure website that helps customers trust your business and contact you easily.',
    icon: <Globe className="w-8 h-8" />,
    tag: 'Website',
    badge: 'Most Popular',
    subtitle: 'Look professional online. Be easy to find. Make it simple for customers to contact you.',
    problemTitle: 'Why is this important?',
    problem: 'Many good businesses lose customers because they are hard to find online or look outdated on mobile phones. When people can’t quickly see your services, location, or contact details, they often move on to another business.',
    targetAudienceTitle: 'Who is this for?',
    targetAudience: [
      'Local Shops & Stores',
      'Tuition Classes & Academies',
      'Consultants & Service Providers',
      'Medical Centers & Pharmacies',
      'Restaurants & Bakeries',
      'Construction & Trade Businesses'
    ],
    inclusionsTitle: 'What is included?',
    inclusions: [
      {
        title: 'Professional Website Design',
        description: 'A clean, easy-to-understand layout that clearly shows your services and contact details.'
      },
      {
        title: 'Mobile-Friendly Layout',
        description: 'Your website will work smoothly on all phones and tablets.'
      },
      {
        title: 'Domain Setup (.com or .lk)',
        description: 'We help you set up your official website address.'
      },
      {
        title: 'Google Maps Listing',
        description: 'Your business location is set up so customers can easily find directions.'
      },
      {
        title: 'Hosting & Security',
        description: 'Fast hosting with basic security and HTTPS included.'
      },
      {
        title: 'WhatsApp Contact Button',
        description: 'Customers can message you instantly with one tap.'
      }
    ],
    resultTitle: 'The Result',
    result: 'Your business looks professional and reliable online. Customers can easily find you, understand what you offer, and contact you with confidence.',
    ctaText: 'Get your business online',
    ctaSubtext: 'Typical delivery: 5–7 working days.',
    ctaPrimary: 'Get a Quote on WhatsApp',
    ctaSecondary: ''
  },
  {
    id: '2',
    title: 'Digital Presence Setup',
    description: 'We set up your online profiles so local customers can find and trust your business.',
    icon: <Code className="w-8 h-8" />,
    tag: 'Presence',
    badge: 'Essential',
    subtitle: 'Show up clearly on Google and social media.',
    problemTitle: 'The problem',
    problem: 'Customers often search on Google or Facebook before visiting a business. If your information is missing, inconsistent, or outdated, they may choose another option without contacting you.',
    targetAudienceTitle: 'Who is this for?',
    targetAudience: [
      'Restaurants & Cafes',
      'Salons & Barbers',
      'Medical Centers',
      'Vehicle Service Stations',
      'Retail Shops',
      'Home-Based Businesses'
    ],
    inclusionsTitle: 'What is included?',
    inclusions: [
      {
        title: 'Google Business Profile Setup',
        description: 'Accurate business details, location, working hours, and photos.'
      },
      {
        title: 'Facebook Page Setup',
        description: 'Professional page layout with correct contact details and messaging.'
      },
      {
        title: 'WhatsApp Business Setup',
        description: 'Business profile, auto-replies, and quick responses.'
      },
      {
        title: 'Basic Local SEO',
        description: 'Your business name and services are set up correctly for local searches.'
      }
    ],
    resultTitle: 'The Result',
    result: 'When people search for your service nearby, your business appears clearly and looks active and trustworthy.',
    ctaText: 'Get found online',
    ctaSubtext: 'Quick setup in 2–3 working days.',
    ctaPrimary: 'Chat with us',
    ctaSecondary: ''
  },
  {
    id: '3',
    title: 'UI/UX Design',
    description: 'Clear, user-focused design before you invest money in development.',
    icon: <Palette className="w-8 h-8" />,
    tag: 'Design',
    badge: 'For Startups',
    subtitle: 'Turn your idea into a clear, usable design.',
    problemTitle: 'The problem',
    problem: 'Without proper design, apps often become confusing or expensive to fix later. Developers and designers may interpret ideas differently, leading to wasted time and money.',
    targetAudienceTitle: 'Who is this for?',
    targetAudience: [
      'Startup Founders',
      'Entrepreneurs with App Ideas',
      'Businesses building internal tools',
      'Teams working with developers'
    ],
    inclusionsTitle: 'What is included?',
    inclusions: [
      {
        title: 'User Flow Planning',
        description: 'We map how users move through the product step by step.'
      },
      {
        title: 'Wireframes',
        description: 'Simple layouts that focus on structure and functionality.'
      },
      {
        title: 'High-Fidelity UI Design',
        description: 'Detailed, polished screens showing the final look.'
      },
      {
        title: 'Clickable Prototype',
        description: 'An interactive demo you can test before development.'
      }
    ],
    resultTitle: 'The Result',
    result: 'You receive clear design files that developers can follow easily, reducing confusion and rework.',
    ctaText: 'Visualize your idea',
    ctaSubtext: 'Flexible packages based on project size.',
    ctaPrimary: 'Discuss My Idea',
    ctaSecondary: ''
  },
  {
    id: '4',
    title: 'Social Media Graphics',
    description: 'Professional visuals that keep your brand consistent and trustworthy.',
    icon: <Sparkles className="w-8 h-8" />,
    tag: 'Creative',
    badge: 'Branding',
    subtitle: 'Simple, professional designs that represent your business well.',
    problemTitle: 'The problem',
    problem: 'Inconsistent or low-quality visuals can make a business look unprofessional. First impressions online strongly influence whether customers trust you.',
    targetAudienceTitle: 'Who is this for?',
    targetAudience: [
      'Retail & Clothing Stores',
      'Tuition Classes',
      'Food & Beverage Brands',
      'Real Estate Agents',
      'Event Organizers'
    ],
    inclusionsTitle: 'What is included?',
    inclusions: [
      {
        title: 'Logo Design',
        description: 'A clean, professional logo with all necessary file formats.'
      },
      {
        title: 'Social Media Templates',
        description: 'Reusable designs for Facebook and Instagram posts.'
      },
      {
        title: 'Print Design',
        description: 'Business cards, flyers, banners, and other materials.'
      },
      {
        title: 'Photo Enhancement',
        description: 'Basic editing to improve product and promotional images.'
      }
    ],
    resultTitle: 'The Result',
    result: 'Your business presents a consistent, professional image across online and offline materials.',
    ctaText: 'Upgrade your brand',
    ctaSubtext: 'One-time or monthly support options available.',
    ctaPrimary: 'Get a Quote',
    ctaSecondary: ''
  }
];

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

      <div className="relative z-10 flex items-center gap-3 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
        Learn more <ArrowRight className="w-4 h-4" />
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
