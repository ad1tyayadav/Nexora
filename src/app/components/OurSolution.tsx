"use client";

import React, { useState, useEffect } from "react";
import { Search, MapPin, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function Solutions() {
  const solutions = [
    {
      icon: <Search size={28} />,
      title: "Intercept Shield",
      details: "Stops lies the moment they touch your screen.",
    },
    {
      icon: <MapPin size={28} />,
      title: "The Reality Forge",
      details: "Transforms scattered claims into a living map of truth.",
    },
    {
      icon: <RotateCcw size={28} />,
      title: "Chaos Mirror",
      details: "Reveals the chaos a single lie can unleash — before it happens.",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    // Detect screen size
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleCard = (index: number) => {
    if (isMobile) {
      setActiveCard(activeCard === index ? null : index);
    }
  };

  return (
    <section id="solutions" className="relative -top-20 px-6 py-20 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7C71B2] to-[#4A00E0]"
        >
          The Sentinel Suite
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#B0B0B0] text-md md:text-xl mb-12 max-w-3xl mx-auto"
        >
          Three shields. One immune system. Zero tolerance for lies.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => toggleCard(i)}
              className="relative group rounded-2xl p-6 sm:p-8 
                         backdrop-blur-md border border-white/20 shadow-lg
                         bg-gradient-to-br from-white/10 to-white/5
                         overflow-hidden cursor-pointer select-none"
            >
              {/* Default Content */}
              <div className="relative z-10 pointer-events-none">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 
                             border border-white/30 rounded-full flex items-center justify-center 
                             text-white bg-white/5 backdrop-blur-sm
                             group-hover:shadow-[0_0_15px_#7C71B2] transition-shadow duration-300"
                >
                  {s.icon}
                </div>
                <h3 className="text-md sm:text-2xl font-semibold text-white">
                  {s.title}
                </h3>
              </div>

              {/* Hover / Tap Layer */}
              <div
                className={`absolute inset-0 z-20 flex items-center justify-center
                  bg-gradient-to-br from-[#2e006d]/90 to-[#000000] 
                  text-white p-6 rounded-2xl transform transition-transform duration-500 ease-out
                  shadow-[0_0_25px_#7C71B2,0_0_50px_#4A00E0]
                  ${
                    isMobile
                      ? activeCard === i
                        ? "translate-y-0"
                        : "translate-y-full"
                      : "translate-y-full group-hover:translate-y-0"
                  }`}
              >
                <p className="text-sm sm:text-base font-medium tracking-wide text-center">
                  {s.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
