"use client"

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import HeroText from "./HeroText";
import toast, { Toaster } from "react-hot-toast";

export default function Hero() {
    const containerVariants = useMemo(
        () => ({
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                },
            },
        }),
        []
    );

    const itemVariants = useMemo(
        () => ({
            hidden: { y: 20, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    ease: "easeOut" as const,
                },
            },
        }),
        []
    );

    const isReducedMotion =
        typeof window !== "undefined"
            ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
            : false;

    const notify = () => {
        toast.custom(
            (t) => (
                <div
                    className={`${t.visible ? "animate-enter" : "animate-leave"
                        } max-w-md w-full bg-gradient-to-br from-[#0d001a]/95 to-[#000000]/95
           border border-[#7C71B2]/40 shadow-[0_0_8px_#7C71B2] rounded-xl p-4 flex items-center gap-4 relative top-20`}
                >
                    {/* Icon with toned-down glow */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center 
                        bg-gradient-to-r from-[#7C71B2] to-[#4A00E0] 
                        shadow-[0_0_5px_#7C71B2,0_0_10px_#4A00E0] animate-pulse">
                        🛠️
                    </div>

                    {/* Text */}
                    <div className="flex-1 text-left">
                        <p className="text-lg font-bold bg-gradient-to-r from-[#7C71B2] to-[#4A00E0] bg-clip-text text-transparent">
                           Shield Building...
                        </p>
                        <p className="text-sm text-[#B0B0B0]">
                            Prototype mode — defenses are under development.
                        </p>
                    </div>
                </div>
            ),
            { duration: 3000 }
        );
    };



    return (
        <div className="relative px-4 sm:px-6 py-20 md:px-12 min-h-screen flex top-18">
            {/* Giant Background Text */}
            <HeroText />

            {/* Main Card Content */}
            <div className="relative z-10 max-w-3xl mx-auto w-full">
                <motion.div
                    className="w-full rounded-2xl p-6 md:p-12 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-violet-500/20 transition-all duration-500"
                    initial={isReducedMotion ? false : { opacity: 0, y: 30 }}
                    animate={isReducedMotion ? false : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    style={{ willChange: "transform, opacity" }}
                >
                    <motion.div
                        variants={isReducedMotion ? undefined : containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-2xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white"
                            variants={isReducedMotion ? undefined : itemVariants}
                        >
                            Reality. Defended.
                        </motion.h1>

                        <motion.p
                            className="text-[#B0B0B0] text-md md:text-xl mb-8 max-w-2xl"
                            variants={isReducedMotion ? undefined : itemVariants}
                        >
                            Intercept. Verify. Immunize. The end of misinformation begins here.
                        </motion.p>

                        <motion.button
                            onClick={notify}
                            className="px-8 py-4 rounded-xl font-semibold text-white border border-white/20 
                         bg-gradient-to-r from-[#7C71B2]/20 to-[#4A00E0]/20 
                         hover:from-[#7C71B2]/50 hover:to-[#4A00E0]/50 
                         hover:shadow-[0_0_20px_#7C71B2] transition-all duration-300"
                            variants={isReducedMotion ? undefined : itemVariants}
                            whileHover={
                                isReducedMotion
                                    ? undefined
                                    : {
                                        scale: 1.05,
                                        transition: { duration: 0.2 },
                                    }
                            }
                            whileTap={isReducedMotion ? undefined : { scale: 0.95 }}
                        >
                            Activate Shield
                        </motion.button>
                    </motion.div>
                </motion.div>
                <Toaster position="top-right" />
            </div>
        </div>
    );
}
