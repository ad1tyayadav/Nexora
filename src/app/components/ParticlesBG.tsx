"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const FloatingParticles = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const particleCount = 40; // fewer particles for performance

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(particleCount)].map((_, i) => {
        const size = Math.random() * 6 + 4; // 4px to 10px
        const xStart = Math.random() * 100;
        const yStart = Math.random() * 100;
        const xEnd = xStart + (Math.random() * 30 - 15); // move slightly left/right
        const yEnd = yStart + (Math.random() * 30 - 15); // move slightly up/down
        const delay = Math.random() * 5;
        const color = Math.random() > 0.5 ? "#FFFFFF" : "#7C71B2";

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              left: `${xStart}%`,
              top: `${yStart}%`,
              opacity: 0.6,
            }}
            animate={{
              x: [0, xEnd * (window.innerWidth / 100)],
              y: [0, yEnd * (window.innerHeight / 100)],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: Math.random() * 10 + 5, // 5s to 15s
              repeat: Infinity,
              ease: "linear",
              delay,
            }}
          />
        );
      })}
    </div>
  );
};
