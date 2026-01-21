import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Terminal } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-naxit-royal/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-naxit-cyan/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
            >
                <div className="flex justify-center mb-8">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl group"
                    >
                        <Terminal className="w-10 h-10 text-naxit-cyan group-hover:scale-110 transition-transform duration-500" />
                    </motion.div>
                </div>

                <h1 className="text-8xl md:text-[12rem] font-display font-bold tracking-tighter mb-4 relative">
                    <span className="text-white">4</span>
                    <span className="text-naxit-cyan inline-block scale-110">0</span>
                    <span className="text-white">4</span>
                    <motion.div
                        animate={{
                            opacity: [0, 1, 0],
                            x: [-2, 2, -2]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            times: [0, 0.5, 1]
                        }}
                        className="absolute -top-4 -right-4 text-xs font-mono text-naxit-cyan opacity-50 uppercase tracking-widest bg-naxit-cyan/10 px-2 py-1 rounded border border-naxit-cyan/20"
                    >
                        System_Fault
                    </motion.div>
                </h1>

                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 tracking-tight">
                    Lost in the Data Stream?
                </h2>

                <p className="text-gray-400 max-w-md mx-auto mb-12 text-sm md:text-base leading-relaxed">
                    The node you are looking for has been decommissioned or moved to a different sector.
                    Return to the neural core to continue your journey.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-white text-naxit-charcoal px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-naxit-cyan hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300"
                        >
                            <Home className="w-4 h-4" />
                            RETURN HOME
                        </motion.button>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white/10 transition-all duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        GO BACK
                    </button>
                </div>
            </motion.div>

            {/* Decorative Matrix-like elements */}
            <div className="absolute bottom-10 left-10 opacity-20 hidden lg:block">
                <pre className="text-[10px] font-mono text-naxit-cyan leading-none text-left">
                    {`> INITIALIZING RECOVERY_PROTOCOL\n> STATUS: 404_NOT_FOUND\n> ATTEMPTING_RECONNECT... FAILED\n> ERR_NODE_ACCESS_DENIED`}
                </pre>
            </div>

            <div className="absolute top-10 right-10 opacity-20 hidden lg:block">
                <pre className="text-[10px] font-mono text-white leading-none text-right">
                    {`X: ${Math.random().toFixed(4)}\nY: ${Math.random().toFixed(4)}\nZ: ${Math.random().toFixed(4)}`}
                </pre>
            </div>
        </div>
    );
};

export default NotFound;
