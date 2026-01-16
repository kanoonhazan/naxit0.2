
import React from 'react';
import { Palette, Code, Globe, Sparkles } from 'lucide-react';
import { Service, Project } from './types';

export const SERVICES: Service[] = [
    {
        id: '1',
        title: 'Professional Business Website',
        slug: 'website-design-sri-lanka',
        description: 'Top-tier website design services for Sri Lankan businesses. A clean, secure website that helps local customers trust your business.',
        icon: React.createElement(Globe, { className: "w-8 h-8" }),
        tag: 'Web Design',
        badge: 'Popular in Sri Lanka',
        subtitle: 'Professional website design in Sri Lanka. Look professional online, be easy to find, and grow your local business.',
        problemTitle: 'Why do you need this?',
        problem: 'Many good businesses in Sri Lanka lose customers because they are hard to find online. If customers in Colombo, Kandy, or your local area can’t find you on Google, they go to your competitors.',
        targetAudienceTitle: 'Who is this for?',
        targetAudience: [
            'Sri Lankan Retail Shops',
            'Tuition Classes & Academies',
            'Law Firms & Consultancies',
            'Medical Centers in Sri Lanka',
            'Restaurants & Hotels',
            'Construction Companies'
        ],
        inclusionsTitle: 'What is included?',
        inclusions: [
            {
                title: 'Professional Design',
                description: 'A dedicated design tailored for the Sri Lankan market that shows your services clearly.'
            },
            {
                title: 'Mobile Friendly',
                description: 'Optimized for all devices, ensuring your site looks great on every smartphone in Sri Lanka.'
            },
            {
                title: '.COM or .LK Domain',
                description: 'We register your official internet address (e.g., www.yourbusiness.lk).'
            },
            {
                title: 'Google Maps Setup',
                description: 'We verify your location on Google Maps so local customers can drive to you easily.'
            },
            {
                title: 'Hosting & Security',
                description: 'Fast, secure hosting with HTTPS included to keep your data safe.'
            },
            {
                title: 'WhatsApp Button',
                description: 'A direct link for Sri Lankan customers to message you immediately via WhatsApp.'
            }
        ],
        resultTitle: 'The Result',
        result: 'A high-performing website that ranks well in Sri Lanka. Your business looks professional, and local customers trust you enough to call.',
        ctaText: 'Get your business online',
        ctaSubtext: 'Projects typically take 5-7 days.',
        ctaPrimary: 'Get a Quote on WhatsApp',
        ctaSecondary: ''
    },
    {
        id: '2',
        title: 'Digital Presence Setup',
        slug: 'digital-presence-sri-lanka',
        description: 'Complete digital presence setup for Sri Lankan businesses. We help you dominate local search results.',
        icon: React.createElement(Code, { className: "w-8 h-8" }),
        tag: 'SEO & Presence',
        badge: 'Essential for Locals',
        subtitle: 'Be visible when customers in Sri Lanka search for your services.',
        problemTitle: 'The Problem',
        problem: 'When Sri Lankan customers search "near me" or check Facebook, they need to find you. If your shop doesn\'t appear on Google Maps or looks inactive, you are losing sales to the shop next door.',
        targetAudienceTitle: 'Who is this for?',
        targetAudience: [
            'Restaurants & Cafes',
            'Salons & Spas',
            'Medical Centers',
            'Service Stations',
            'Local Retailers',
            'Home Bakers'
        ],
        inclusionsTitle: 'What is included?',
        inclusions: [
            {
                title: 'Google Maps Verification',
                description: 'We claim your business location and help you verify completely on Google Maps.'
            },
            {
                title: 'Facebook Page Setup',
                description: 'A professional cover photo, automated greeting messages, and correct contact info setup.'
            },
            {
                title: 'WhatsApp for Business',
                description: 'Setup auto-replies, business catalog, and quick response messages.'
            },
            {
                title: 'Local SEO Strategy',
                description: 'We ensure your business name appears correctly when people search for your services in your city.'
            }
        ],
        resultTitle: 'The Result',
        result: 'When a customer searches "open now" in your area, you show up. You look active, open, and ready for business in Sri Lanka.',
        ctaText: 'Get found online today',
        ctaSubtext: 'Quick setup in 2-3 days.',
        ctaPrimary: 'Chat with us',
        ctaSecondary: ''
    },
    {
        id: '3',
        title: 'UI/UX Design',
        slug: 'ui-ux-design-sri-lanka',
        description: 'World-class UI/UX design for Sri Lankan startups. Clear, user-focused design before you code.',
        icon: React.createElement(Palette, { className: "w-8 h-8" }),
        tag: 'UI/UX Design',
        badge: 'For Startups',
        subtitle: 'Turn your idea into a professional design with a leading UI/UX design company in Sri Lanka.',
        problemTitle: 'The Problem',
        problem: 'You explain your app idea to developers, but they build something hard to use. As a premier UI/UX design agency, we solve this by creating clear blueprints before you spend money on coding.',
        targetAudienceTitle: 'Who is this for?',
        targetAudience: [
            'Tech Startup Founders',
            'Entrepreneurs with App Ideas',
            'Software Companies',
            'Enterprises in Sri Lanka'
        ],
        inclusionsTitle: 'What is included?',
        inclusions: [
            {
                title: 'User Flow Diagrams',
                description: 'We map out exactly how a user moves through your app, screen by screen.'
            },
            {
                title: 'Wireframes',
                description: 'Blueprints of the app structure focusing on functionality and user experience.'
            },
            {
                title: 'High-Fidelity UI',
                description: 'Beautiful, full-color designs that show exactly what the final app will look like.'
            },
            {
                title: 'Clickable Prototype',
                description: 'A simulation of your app that investors and developers can test on their phones.'
            }
        ],
        resultTitle: 'The Result',
        result: 'You get a complete design file from a top UI/UX design company in Sri Lanka. Developers know exactly what to build, and investors are impressed.',
        ctaText: 'Visualize your idea',
        ctaSubtext: 'Packages start from simple prototypes to full systems.',
        ctaPrimary: 'Discuss my Idea',
        ctaSecondary: ''
    },
    {
        id: '4',
        title: 'Social Media Graphics',
        slug: 'brand-identity-sri-lanka',
        description: 'Premium brand identity design for ambitious Sri Lankan businesses. Logos and visuals that build trust.',
        icon: React.createElement(Sparkles, { className: "w-8 h-8" }),
        tag: 'Branding',
        badge: 'Strategic Design',
        subtitle: 'Look big, even if you are small. Professional branding from a leading Brand Identity Agency in Sri Lanka.',
        problemTitle: 'The Problem',
        problem: 'Posting blurry photos or having a messy logo makes customers think your product quality is low. In the competitive Sri Lankan market, first impressions matter more than ever.',
        targetAudienceTitle: 'Who is this for?',
        targetAudience: [
            'Clothing Brands',
            'Educational Institutes',
            'Food & Beverage Brands',
            'Real Estate Companies',
            'Event Planners'
        ],
        inclusionsTitle: 'What is included?',
        inclusions: [
            {
                title: 'Logo Design',
                description: 'A unique, professional logo that stands out. Delivered in all valid formats.'
            },
            {
                title: 'Social Media Posts',
                description: 'Beautiful templates for your Facebook and Instagram posts that you can reuse.'
            },
            {
                title: 'Print Materials',
                description: 'Design for business cards, flyers, banners, and letterheads ready for printing.'
            },
            {
                title: 'Brand Guidelines',
                description: 'A guide on how to use your colors and fonts to keep your brand consistent.'
            }
        ],
        resultTitle: 'The Result',
        result: 'A consistent, trustworthy look across your shop board, business card, and online profiles. Sri Lankan customers take you seriously.',
        ctaText: 'Upgrade your brand',
        ctaSubtext: 'Fast turnaround times.',
        ctaPrimary: 'Get a Quote',
        ctaSecondary: ''
    }
];

export const PROJECTS: Project[] = [
    {
        id: '01',
        slug: 'xenon-quantum-interface',
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
        slug: 'aethelgard-ai-core',
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
        slug: 'vanguard-brand-identity',
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
        slug: 'nebula-cloud-infrastructure',
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
