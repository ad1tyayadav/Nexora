  "use client";

import React from "react";
import { Search, MapPin, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function Solutions() {
  const solutions = [
    { icon: <Search size={28} />, title: "Misinformation Detection" },
    { icon: <MapPin size={28} />, title: "Truth-Maps" },
    { icon: <RotateCcw size={28} />, title: "Chaos Mirror" },
  ];

  // Variants for staggered animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const} },
  };

  return (
    <section
      id="solutions"
      className="relative px-6 py-20 md:px-12 bg-[#0A0A0A]"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7C71B2] to-[#4A00E0]"
        >
          Our Solutions
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#B0B0B0] text-md md:text-xl mb-12 max-w-3xl mx-auto"
        >
          Our suite of AI-powered tools is designed to detect, analyze, and combat misinformation across digital platforms.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="rounded-2xl p-4 sm:p-8 bg-black/10 backdrop-blur-lg border border-white/20 shadow-lg
                         hover:shadow-violet-500/30 hover:border-[#7C71B2]/50
                         transition-all duration-300 transform hover:scale-105"
            >
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 border border-white/30 rounded-full flex items-center justify-center text-white
                              hover:shadow-[0_0_15px_#7C71B2] transition-shadow duration-300"
              >
                {s.icon}
              </div>
              <h3 className="text-md sm:text-2xl font-semibold text-white">
                {s.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
