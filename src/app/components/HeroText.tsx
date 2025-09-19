import React, { useMemo } from 'react'
import { motion } from "framer-motion"

function HeroText() {

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
                ease: "easeOut" as const
            }
        }
    }), []);

    const floatingVariants = useMemo(() => ({
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut" as const
            }
        }
    }), []);

    const isReducedMotion = typeof window !== 'undefined' ?
        window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

    return (
        <div className=" absolute inset-0 flex items-center justify-center overflow-hidden">
            <motion.h1
                className="text-[5rem] sm:text-[5rem] md:text-[10rem] lg:text-[11rem] font-extrabold text-white select-none pointer-events-none"
                variants={isReducedMotion ? undefined : backgroundTextVariants}
                initial="hidden"
                animate="visible"
                style={{ willChange: 'transform, opacity' }} // Hint browser for optimization
            >
                <motion.span
                    className="block text-center relative bottom-10"
                    variants={isReducedMotion ? undefined : floatingVariants}
                    animate={isReducedMotion ? undefined : "animate"}
                    style={{ willChange: 'transform' }}
                >
                    TRUTH
                </motion.span>
                <motion.span
                    className="block text-center mt-4 md:mt-8 ml-12 "
                    variants={isReducedMotion ? undefined : floatingVariants}
                    animate={isReducedMotion ? undefined : "animate"}
                    transition={{ delay: 0.5 }}
                    style={{ willChange: 'transform' }}
                >
                    IMMUNESYSTEM
                </motion.span>
            </motion.h1>
        </div>
    )
}

export default HeroText