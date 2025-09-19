"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const formContent = (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="flex flex-col space-y-4 sm:space-y-6"
    >
      <motion.input
        whileFocus={{ boxShadow: "0 0 15px #7C71B2" }}
        type="text"
        placeholder="Your Name"
        className="px-4 sm:px-6 py-3 rounded-xl bg-black/20 backdrop-blur-md border border-white/20 text-white focus:border-[#7C71B2] outline-none text-sm sm:text-base transition-all"
      />
      <motion.input
        whileFocus={{ boxShadow: "0 0 15px #7C71B2" }}
        type="email"
        placeholder="Your Email"
        className="px-4 sm:px-6 py-3 rounded-xl bg-black/20 backdrop-blur-md border border-white/20 text-white focus:border-[#7C71B2] outline-none text-sm sm:text-base transition-all"
      />
      <motion.textarea
        whileFocus={{ boxShadow: "0 0 15px #7C71B2" }}
        placeholder="Your Message"
        rows={4}
        className="px-4 sm:px-6 py-3 rounded-xl bg-black/20 backdrop-blur-md border border-white/20 text-white focus:border-[#7C71B2] outline-none text-sm sm:text-base transition-all"
      />
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px #7C71B2" }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="m-auto justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium 
                   bg-gradient-to-r from-[#7C71B2]/30 to-[#4A00E0]/30 border border-white/20 
                   hover:from-[#7C71B2]/60 hover:to-[#4A00E0]/60 transition-all"
      >
        Send Signal
      </motion.button>
    </motion.form>
  );

  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 py-16 md:px-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-3xl md:text-5xl font-extrabold mb-6 
                     bg-clip-text text-transparent bg-gradient-to-r from-[#7C71B2] to-[#4A00E0]"
        >
          Connect with NEXORA
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#B0B0B0] text-sm sm:text-base md:text-lg mb-8"
        >
          Questions. Ideas. Collaborations. The channel is open.
        </motion.p>

        {isDesktop ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm border border-white/20 shadow-lg opacity-90 hover:shadow-violet-500/30 transition-shadow duration-500"
          >
            {formContent}
          </motion.div>
        ) : (
          <div>{formContent}</div>
        )}
      </div>
    </section>
  );
}
