
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
        image: 'https://wuwzcvobruampagkumre.supabase.co/storage/v1/object/public/public-assets/Website%20development/website-development',
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
        image: 'https://wuwzcvobruampagkumre.supabase.co/storage/v1/object/public/public-assets/Branding%20digitalization%20/branding-digitalization',
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
        image: 'https://wuwzcvobruampagkumre.supabase.co/storage/v1/object/public/public-assets/Ui%20Ux%20design%20/ui-ux-design',
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
        image: 'https://wuwzcvobruampagkumre.supabase.co/storage/v1/object/public/public-assets/Graphic%20design%20/Graphic-design',
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
        slug: 'yumdrop-food-delivery-ux',
        title: 'YumDrop',
        category: 'UI/UX Design',
        featured: true,
        tagline: 'Improving order placement and real-time delivery tracking.',
        image: 'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917873/Page_15_vyezqf.png',
        impact: 'Clearer ordering, fewer errors, better delivery visibility',
        tech: ['UX Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
        challenge: 'Users struggled with complex ordering steps, unclear checkout, and unreliable delivery tracking.',
        approach: 'We studied user behavior, identified key friction points, and redesigned the ordering and tracking experience with clarity and simplicity as priorities.',
        fullDescription: 'YumDrop is a food delivery platform project completed as part of an internship assignment at Dilimatrix. The focus was on improving the user experience of order placement and real-time delivery tracking, aligning user needs with business goals such as order completion and customer satisfaction.',
        gallery: [
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917596/Page_2_tul7hh.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917597/Page_3_hg7099.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917651/Page_4_bownno.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917612/Page_5_dlwmzk.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917606/Page_6_al98di.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917636/Page_7_lnjtef.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917549/Page_8_eddr19.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917551/Page_9_ups3sl.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917590/Page_10_adpt2g.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917627/Page_11_yp3aex.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917608/Page_12_imab1d.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917553/Page_13_shucry.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917557/Page_14_v7dc7q.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917873/Page_15_vyezqf.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917664/Page_16_sbqh51.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917577/Page_17_aicqlg.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768917570/Page_18_nadvjn.png'
        ],
        problem: {
            title: 'The Problem',
            content: [
                'Users found it difficult to discover products and navigate menus.',
                'The checkout process was long and confusing, leading to order errors.',
                'Delivery tracking lacked real-time updates and clear time estimates.',
                'These issues caused frustration and reduced user confidence.'
            ]
        },
        solution: {
            title: 'Our Solution',
            content: [
                'Simplified menu navigation and product discovery.',
                'Streamlined checkout with clearer steps and fewer required inputs.',
                'Instant order confirmation to reduce uncertainty.',
                'Improved delivery tracking with real-time status updates and clearer time estimates.'
            ]
        },
        designDecisions: [
            'Guest checkout to reduce friction',
            'Clear separation of mandatory and optional fields',
            'Progress indicators during checkout',
            'Simplified icons and labels for delivery tracking',
            'Focus on clarity over visual complexity'
        ],
        resultOutcome: {
            title: 'Result (Concept Outcome)',
            content: [
                'Users could place orders faster with fewer mistakes.',
                'Delivery status was easier to understand, improving user confidence.',
                'The redesign supported better order completion and customer satisfaction.',
                'The project demonstrated a user-centered design approach aligned with business goals.'
            ]
        }
    },

    {
        id: '02',
        slug: 'eduaid-bridge-platform',
        title: 'EduAid Bridge',
        category: 'UI/UX Design',
        featured: true,
        tagline: 'Connecting donors and students through a clear, community-driven platform.',
        image:
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975147/efc18a05-859a-4e1d-8fe7-89d52ce0e41d.png',
        impact: 'Trusted Community Connections',
        tech: [
            'UX Research',
            'Wireframing',
            'Prototyping',
            'Usability Testing',
            'Accessibility Design'
        ],
        challenge:
            'Students facing financial difficulties struggle to access support, while donors lack a reliable and transparent way to connect with students who need help.',
        approach:
            'We designed a user-centric platform that simplifies discovery, builds trust through transparent profiles, and encourages community engagement through forums and dashboards.',
        fullDescription:
            'EduAid Bridge is a cross-platform product concept designed to connect donors with students in need of financial and educational support.',
        gallery: [
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768974994/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0001_iebqqx.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768974997/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0002_u6dj4m.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768974996/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0003_so1mck.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975001/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0006_tyejhh.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975003/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0007_fvnr0h.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975005/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0008_qgnrjg.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975008/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0009_yso2yy.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975011/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0011_jtj6iy.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975016/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0012_hrq93h.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975014/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0013_bkfwni.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975103/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0014_tyrn3a.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975107/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0016_wqmvbo.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975111/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0017_xpnxxt.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975113/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0018_ew9aax.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975116/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0019_gj38vb.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975118/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0020_h3rwou.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975122/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0021_ygc8rt.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975123/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0022_ppf0ys.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975126/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0023_kqrk6i.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975131/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0025_lujzlt.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975132/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0026_hsnhxp.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975137/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0028_ypbrea.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768975139/Google-UX-Design-Certificate_-_-Portfolio-Project-3_-_-Case-study-EduAid_page-0029_rj9plf.jpg'
        ],
        problem: {
            title: 'The Problem',
            content: [
                'Students with financial constraints struggle to find reliable educational support.',
                'Donors lack a clear platform to discover and support students directly.',
                'Existing solutions do not effectively balance trust, transparency, and usability.',
                'Both groups need a simple, human-centered way to connect and collaborate.'
            ]
        },
        solution: {
            title: 'Our Solution',
            content: [
                'Designed detailed student profiles that clearly communicate needs and achievements.',
                'Introduced smart filters to help donors find students by location, grade, and support type.',
                'Built a community forum to encourage discussion, mentorship, and engagement.',
                'Created intuitive dashboards tailored for donors and students.'
            ]
        },
        designDecisions: [
            'Clear separation of donor and student user flows',
            'Transparent profiles to build trust and informed decision-making',
            'Customizable filters for precise matching',
            'Minimal, distraction-free layouts for better accessibility',
            'Keyboard navigation and strong color contrast'
        ],
        resultOutcome: {
            title: 'Result (Operational Efficiency)',
            content: [
                'Users found the platform easy to navigate and understand.',
                'Student profiles improved trust and decision-making for donors.',
                'Community forums encouraged engagement and knowledge sharing.',
                'The design demonstrated how UX can support social impact and real-world challenges.'
            ]
        }
    },

    {
        id: '03',
        slug: 'lanka-wraps-vehicle-branding',
        title: 'Lanka Wraps',
        category: 'Graphic Design',
        featured: true,
        tagline: 'Premium vehicle branding and custom sticker solutions in Mannar.',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop',
        impact: 'Maximum Road Presence',
        tech: ['Print Design', 'Brand Strategy', 'Illustration'],
        challenge: 'The client needed a vibrant, durable visual identity for their vehicle wrapping business that stands out on the road.',
        approach: 'We created a high-contrast logo and a set of custom livery designs optimized for large-scale vehicle printing in Sri Lanka.',
        fullDescription: 'Lanka Wraps is a premier vehicle branding service based in Mannar. We collaborated to define a bold visual language that works across different vehicle types, ensuring their clients get maximum visibility while maintaining a professional look.',
        gallery: [
            'https://images.unsplash.com/photo-1611080626919-7cf5a9bcab53?q=80&w=2000',
            'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=2000',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000'
        ],
        problem: {
            title: 'The Problem',
            content: [
                'Local vehicle wrapping businesses often look generic and fail to stand out.',
                'Designs need to be scalable from small cars to large delivery trucks.',
                'The branding must be legible from a distance and in motion.',
                'A need for a durable, professional identity that builds trust with corporate clients.'
            ]
        },
        solution: {
            title: 'Our Solution',
            content: [
                'We developed a kinetic brand identity that looks great at 60mph.',
                'Created a custom color palette optimized for vinyl printing.',
                'Designed a modular logo system for various placement scenarios.',
                'Produced full-scale mockups to visualize the branding on multiple vehicle models.'
            ]
        },
        designDecisions: [
            'High-contrast typography for mobility',
            'Saturated color schemes for sunlight visibility',
            'Weather-resistant visual elements',
            'Strategic contact info placement on rear and side panels'
        ],
        resultOutcome: {
            title: 'Result (Brand Growth)',
            content: [
                'Lanka Wraps saw a significant increase in inquiries after the rebrand.',
                'The business successfully landed three major corporate fleet contracts.',
                'Their vehicles are now easily recognizable across Mannar and surrounding areas.',
                'The project established them as a premium service provider in the local market.'
            ]
        }
    },

    {
        id: '04',
        slug: 'amaanah-charity-portal',
        title: 'Amaanah',
        category: 'Website Design',
        featured: true,
        tagline: 'A transparent donation platform for local community projects.',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop',
        impact: 'Transparent Local Giving',
        tech: ['Web Development', 'Payment Integration', 'UI/UX'],
        challenge: 'Local community organizers lacked a central, trusted platform to raise funds for small-scale development projects in Mannar.',
        approach: 'We built a secure, easy-to-use donation portal with real-time progress tracking to ensure complete transparency for donors.',
        fullDescription: 'Amaanah is a dedicated platform designed to bridge the gap between donors and community-led initiatives. By focusing on transparency and ease of use, we helped the organization build trust and increase participation in local welfare projects.',
        gallery: [
            'https://images.unsplash.com/photo-1469571486292-0ba58a3f019a?q=80&w=2000',
            'https://images.unsplash.com/photo-1493123314175-ce99788bb860?q=80&w=2000',
            'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000'
        ],
        problem: {
            title: 'The Problem',
            content: [
                'Lack of trust in traditional offline donation methods.',
                'Difficulty in tracking how funds are utilized for specific projects.',
                'Limited reach beyond the immediate local community.',
                'Complex donation processes that discourage potential contributors.'
            ]
        },
        solution: {
            title: 'Our Solution',
            content: [
                'Developed a real-time "Impact Tracker" for every project.',
                'Integrated secure and local payment methods for seamless giving.',
                'Designed a donor dashboard to track lifetime contributions.',
                'Implemented social sharing tools to expand project reach.'
            ]
        },
        designDecisions: [
            'Trust-oriented color palette (Blues and Navys)',
            'Priority on mobile-first accessibility',
            'Minimalist forms to reduce dropout rates',
            'Image-heavy layouts to show real-world impact'
        ],
        resultOutcome: {
            title: 'Result (Community Impact)',
            content: [
                'The platform facilitated a 40% increase in monthly donations.',
                'Successfully funded 12 local development projects in the first quarter.',
                'High donor retention rate due to improved transparency features.',
                'Recognized as a leading digital initiative for social good in the region.'
            ]
        }
    },

    {
        id: '05',
        slug: 'tee-rex-brand-logo',
        title: 'TEE-REX',
        category: 'Graphic Design',
        featured: true,
        tagline: 'A bold T-shirt brand identity inspired by classic Jurassic themes.',
        image: 'https://res.cloudinary.com/dwdya29vh/image/upload/v1768973089/TEE_REX_MOCKUP_01_kstxg0.jpg',
        impact: 'Bold Brand Identity',
        tech: ['Logo Design', 'Brand Identity', 'Illustration'],
        challenge: 'The client wanted a logo inspired by the Jurassic Park theme without directly copying it, while still feeling powerful, fun, and suitable for a T-shirt brand.',
        approach: 'We translated the client’s inspiration into an original logo concept that captures the energy of the Jurassic theme while remaining unique and brand safe.',
        fullDescription: 'Tee-Rex is a T-shirt brand concept built around a bold, playful identity inspired by Jurassic-era visuals. The client wanted a logo that instantly communicates strength and attitude, similar to the iconic Jurassic Park style, while clearly representing a modern apparel brand.',
        gallery: [
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768973089/TEE_REX_MOCKUP_01_kstxg0.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768973083/TEE_REX_MAIN_LOGO_JPG_lswm5b.jpg',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768973070/TEE_REX_02_prbahq.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768973068/TEE_REX_03_pjsy6c.png',
            'https://res.cloudinary.com/dwdya29vh/image/upload/v1768973082/TEE_REX_MOCKUP_04_m7ylj3.jpg'
        ],
        problem: {
            title: 'The Problem',
            content: [
                'The client wanted a strong Jurassic Park–inspired look without copying the original movie logo.',
                'The logo needed to feel bold and memorable on T-shirts.',
                'The dinosaur character had to clearly connect to clothing, not entertainment or movies.',
                'The design needed to work well across prints, tags, and social media.'
            ]
        },
        solution: {
            title: 'Our Solution',
            content: [
                'Created an original dinosaur illustration inspired by Jurassic-era styling.',
                'Designed the dinosaur holding a T-shirt to clearly represent the apparel focus.',
                'Used bold shapes and strong outlines to ensure high visibility on fabric.',
                'Developed a logo that feels familiar, fun, and brandable without copyright risk.'
            ]
        },
        designDecisions: [
            'Custom dinosaur illustration for originality',
            'Strong circular badge structure for easy printing',
            'High-contrast shapes for fabric visibility',
            'Typography inspired by adventure themes, adapted for apparel branding',
            'Designed to scale across T-shirts, labels, and digital platforms'
        ],
        resultOutcome: {
            title: 'Result (Design Outcome)',
            content: [
                'A bold and memorable logo that clearly communicates the brand identity.',
                'Strong visual appeal suitable for T-shirt printing and merchandise.',
                'A design that feels inspired by pop culture while remaining original.',
                'The logo sets a strong foundation for future brand expansion.'
            ]
        }
    },
];
