
import React from 'react';
import { motion } from 'framer-motion';

const StaticBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Primary Glow */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-[0.15] blur-[120px] gpu-accel"
                style={{ background: 'radial-gradient(circle, #00D4FF 0%, transparent 70%)' }}
            />

            {/* Secondary Glow */}
            <div
                className="absolute bottom-[-10%] right-[-20%] w-[60%] h-[60%] rounded-full opacity-[0.1] blur-[120px] gpu-accel"
                style={{ background: 'radial-gradient(circle, #0055FF 0%, transparent 70%)' }}
            />

            {/* Center Accents */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-[0.05] blur-[150px] gpu-accel"
                style={{ background: 'radial-gradient(circle, #00D4FF 0%, transparent 50%)' }}
            />

            {/* Subtle Topography Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 400C100 400 100 350 200 350C300 350 300 400 400 400V0H0V400Z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3Cpath d='M0 350C100 350 100 300 200 300C300 300 300 350 400 350' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3Cpath d='M0 300C100 300 100 250 200 250C300 250 300 300 400 300' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3Cpath d='M0 250C100 250 100 200 200 200C300 200 300 250 400 250' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3Cpath d='M0 200C100 200 100 150 200 150C300 150 300 200 400 200' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3Cpath d='M0 150C100 150 100 100 200 100C300 100 300 150 400 150' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3Cpath d='M0 100C100 100 100 50 200 50C300 50 300 100 400 100' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3Cpath d='M0 50C100 50 100 0 200 0C300 0 300 50 400 50' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
                    backgroundSize: '400px 400px'
                }}
            />

            {/* Dot Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.1]"
                style={{
                    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Premium Animated Silk Wave System */}
            <div className="absolute top-0 right-0 w-full h-[800px] opacity-[0.12] pointer-events-none overflow-hidden">
                <motion.svg
                    viewBox="0 0 1000 1000"
                    preserveAspectRatio="none"
                    className="w-full h-full fill-none stroke-current"
                    animate={{
                        y: [-10, 10, -10],
                        rotate: [0, 1, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {/* Primary Wave - Cyan */}
                    <motion.path
                        d="M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500"
                        className="text-naxit-cyan"
                        strokeWidth="1.5"
                        animate={{
                            d: [
                                "M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500",
                                "M0,500 C200,600 300,400 500,500 C700,600 800,400 1000,500",
                                "M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500"
                            ]
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    {/* Secondary Wave - Royal Blue */}
                    <motion.path
                        d="M0,550 C200,450 300,650 500,550 C700,450 800,650 1000,550"
                        className="text-naxit-royal"
                        strokeWidth="1"
                        opacity="0.6"
                        animate={{
                            d: [
                                "M0,550 C200,450 300,650 500,550 C700,450 800,650 1000,550",
                                "M0,550 C200,650 300,450 500,550 C700,650 800,450 1000,550",
                                "M0,550 C200,450 300,650 500,550 C700,450 800,650 1000,550"
                            ]
                        }}
                        transition={{
                            duration: 22,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />
                    {/* Third Wave Accent */}
                    <motion.path
                        d="M0,450 C200,350 300,550 500,450 C700,350 800,550 1000,450"
                        className="text-white"
                        strokeWidth="0.5"
                        opacity="0.2"
                        animate={{
                            d: [
                                "M0,450 C200,350 300,550 500,450 C700,350 800,550 1000,450",
                                "M0,450 C200,550 300,350 500,450 C700,550 800,350 1000,450",
                                "M0,450 C200,350 300,550 500,450 C700,350 800,550 1000,450"
                            ]
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                    />
                </motion.svg>
            </div>

            {/* Subtle Mesh Texture Layer */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            radial-gradient(circle at 20% 30%, #00D4FF 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, #0055FF 0%, transparent 40%)
          `
                }}
            />
        </div>
    );
};

export default StaticBackground;


