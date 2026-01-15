
import React from 'react';
import { Palette, Code, Globe, Sparkles } from 'lucide-react';
import { Service } from './types';

export const SERVICES: Service[] = [
    {
        id: '1',
        title: 'Professional Business Website',
        slug: 'website-design-sri-lanka',
        description: 'A clean, secure website that helps customers trust your business and contact you easily.',
        icon: React.createElement(Globe, { className: "w-8 h-8" }),
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
        slug: 'digital-presence-sri-lanka',
        description: 'We set up your online profiles so local customers can find and trust your business.',
        icon: React.createElement(Code, { className: "w-8 h-8" }),
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
        slug: 'ui-ux-design-sri-lanka',
        description: 'Clear, user-focused design before you invest money in development.',
        icon: React.createElement(Palette, { className: "w-8 h-8" }),
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
        slug: 'brand-identity-sri-lanka',
        description: 'Professional visuals that keep your brand consistent and trustworthy.',
        icon: React.createElement(Sparkles, { className: "w-8 h-8" }),
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
