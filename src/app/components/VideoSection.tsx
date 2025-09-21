"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VideoSection() {
  const videos = [
    { id: "8C7Qd0rS5yI", title: "⚡ Truth in action (Prototype)" },
    { id: "7q_wTYivUZ0", title: "🛡️ Nexora — The Sentinel Mesh" },
  ];

  return (
    <section id="videos" className="relative px-6 py-20 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-6 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-[#7C71B2] to-[#4A00E0]
                     drop-shadow-[0_0_15px_rgba(124,113,178,0.6)]"
        >
          See It in Action
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#B0B0B0] text-lg md:text-xl mb-12 max-w-3xl mx-auto"
        >
          Experience our technology through real demonstrations — built to defend
          truth and expose lies.
        </motion.p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative group rounded-2xl overflow-hidden 
                         border border-white/10
                         shadow-[0_0_15px_rgba(124,113,178,0.4)]
                         hover:shadow-[0_0_30px_#7C71B2,0_0_60px_#4A00E0]
                         transition-all duration-500 ease-out"
            >
              {/* Video Frame */}
              <div className="aspect-video relative">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                />
              </div>

              {/* Video Title */}
              <div className=" backdrop-blur-md border-t border-white/10 p-4">
                <p className="text-lg font-semibold text-transparent bg-clip-text 
                               bg-gradient-to-r from-[#7C71B2] to-[#4A00E0]
                               tracking-wide drop-shadow-[0_0_10px_rgba(124,113,178,0.6)]">
                  {v.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
