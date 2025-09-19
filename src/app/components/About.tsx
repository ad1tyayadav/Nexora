"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function AboutSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const innerContent = (
    <>
      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl text-center md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7C71B2] to-[#4A00E0]"
      >
        Why NEXORA Exists
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-[#B0B0B0] text-sm sm:text-base md:text-lg leading-relaxed mb-8"
      >
        Nexora is not an app — it’s the immune system for truth. Built on AI and human insight, it intercepts lies, verifies reality, and restores trust across digital platforms. Our purpose is simple: defend civilization from the chaos of misinformation.
      </motion.p>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-6">
        {[
          {
            title: "Our Mission",
            desc: "To shield every human with untouchable truth",
          },
          {
            title: "Our Vision",
            desc: "A world where misinformation dies before it spreads.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
            className="rounded-2xl p-4 sm:p-6 bg-black/20 backdrop-blur-lg border border-white/20
                       hover:border-[#7C71B2]/50 hover:shadow-[0_0_20px_#7C71B2] transition-all duration-300"
          >
            <h3 className="text-lg sm:text-2xl font-semibold mb-2 text-white">{item.title}</h3>
            <p className="text-[#B0B0B0] text-sm sm:text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Core Values */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-10"
      >
        <h3 className="text-xl sm:text-3xl font-semibold mb-6 text-white">
          Our Core Values
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Transparency as a weapon",
            "Accountability over algorithms",
            "AI built for defense, not deception",
          ].map((value, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px #7C71B2" }}
              className="p-4 rounded-2xl bg-black/20 border border-white/20 text-[#B0B0B0] text-sm sm:text-base transition-all duration-300"
            >
              {value}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </>
  );

  return (
    <section id="about" className="relative px-4 sm:px-6 py-16 md:px-12">
      <div className="max-w-5xl mx-auto">
        {isDesktop ? (
          <div className="rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm border border-white/20 shadow-lg opacity-90">
            {innerContent}
          </div>
        ) : (
          <div>{innerContent}</div>
        )}
      </div>
    </section>
  );
}

export default AboutSection;
