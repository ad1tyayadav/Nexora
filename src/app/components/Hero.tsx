"use client"

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import HeroText from "./HeroText";

export default function Hero() {
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
                ease: "easeOut" as const
            }
        }
    }), []);

    // Reduce animation intensity on mobile
    const isReducedMotion = typeof window !== 'undefined' ?
        window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

    return (
        <div className="relative px-4 sm:px-6 py-20 md:px-12 min-h-screen flex items-center">
            {/* Giant Background Text with Animation - Reduced on mobile */}
           <HeroText />

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