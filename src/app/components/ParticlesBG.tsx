"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const FloatingParticles = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const particleCount = 50; // reduce number for performance

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isDesktop) return null; // do not render on mobile

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(particleCount)].map((_, i) => {
        const size = Math.random() * 8 + 6; // 6px to 14px balls
        const xMovement = Math.random() * 200 - 100; // horizontal float range
        const yMovement = Math.random() * 200 - 100; // vertical float range
        const delay = Math.random() * 5; // random start delay
        const color = Math.random() > 0.5 ? '#0d0548ff' : '#B0B0B0'; // dark bluish / grayish

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6,
            }}
            animate={{
              x: [0, xMovement, 0],
              y: [0, yMovement, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: Math.random() * 6 + 4, // 4s to 10s
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }}
          />
        );
      })}
    </div>
  );
};
