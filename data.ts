
import React from 'react';
import { Palette, Code, Globe, Sparkles } from 'lucide-react';
import { Service } from './types';

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
