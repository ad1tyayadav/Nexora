"use client"

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function Hero() {
    // Memoize variants to prevent unnecessary re-renders
    const backgroundTextVariants = useMemo(() => ({
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 0.1,
            y: 0,
            transition: {
                duration: 1.5,
                ease: "easeOut"
            }
        }
    }), []);

    const floatingVariants = useMemo(() => ({
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }), []);

    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }), []);

    const itemVariants = useMemo(() => ({
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }), []);

    // Reduce animation intensity on mobile
    const isReducedMotion = typeof window !== 'undefined' ?
        window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

    return (
        <div className="relative px-4 sm:px-6 py-20 md:px-12 bg-[#0A0A0A] min-h-screen flex items-center">
            {/* Giant Background Text with Animation - Reduced on mobile */}
            <div className="hidden sm:block absolute inset-0 flex items-center justify-center overflow-hidden">
                <motion.h1
                    className="text-[3rem] sm:text-[5rem] md:text-[10rem] lg:text-[12rem] font-extrabold text-white select-none pointer-events-none"
                    variants={isReducedMotion ? undefined : backgroundTextVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ willChange: 'transform, opacity' }} // Hint browser for optimization
                >
                    <motion.span
                        className="block text-center"
                        variants={isReducedMotion ? undefined : floatingVariants}
                        animate={isReducedMotion ? undefined : "animate"}
                        style={{ willChange: 'transform' }}
                    >
                        TRUTH
                    </motion.span>
                    <motion.span
                        className="block text-center mt-4 md:mt-8"
                        variants={isReducedMotion ? undefined : floatingVariants}
                        animate={isReducedMotion ? undefined : "animate"}
                        transition={{ delay: 0.5 }}
                        style={{ willChange: 'transform' }}
                    >
                        IMMUNESYSTEM
                    </motion.span>
                    <motion.span
                        className="block text-center mt-4 md:mt-8"
                        variants={isReducedMotion ? undefined : floatingVariants}
                        animate={isReducedMotion ? undefined : "animate"}
                        transition={{ delay: 1 }}
                        style={{ willChange: 'transform' }}
                    >
                        TRUTH
                    </motion.span>
                </motion.h1>
            </div>

            {/* Main Card Content */}
            <div className="relative z-10 max-w-4xl mx-auto w-full">
                <motion.div
                    className="w-full rounded-2xl p-6 md:p-12 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-violet-500/20 transition-all duration-500"
                    initial={isReducedMotion ? false : { opacity: 0, y: 30 }}
                    animate={isReducedMotion ? false : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <motion.div
                        variants={isReducedMotion ? undefined : containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-2xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white"
                            variants={isReducedMotion ? undefined : itemVariants}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            Defending truth<br />in the digital age
                        </motion.h1>

                        <motion.p
                            className="text-[#B0B0B0] text-md md:text-xl mb-8 max-w-2xl"
                            variants={isReducedMotion ? undefined : itemVariants}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            At Nexora, an AI-driven platform, we&apos;re revolutionizing the fight against misinformation by providing cutting facts to strengthen the integrity of information.
                        </motion.p>

                        <motion.button
                            className="px-8 py-4 rounded-xl font-semibold text-white border border-white/20 bg-gradient-to-r from-[#7C71B2]/20 to-[#4A00E0]/20 hover:from-[#7C71B2]/50 hover:to-[#4A00E0]/50 hover:shadow-[0_0_20px_#7C71B2] transition-all duration-300"
                            variants={isReducedMotion ? undefined : itemVariants}
                            whileHover={isReducedMotion ? undefined : {
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={isReducedMotion ? undefined : { scale: 0.95 }}
                            style={{ willChange: 'transform' }}
                        >
                            Get Started
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}