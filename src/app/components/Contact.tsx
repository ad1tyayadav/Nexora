"use client"

import React, { useState, useEffect } from "react";

export default function Contact() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formContent = (
    <form className="flex flex-col space-y-4 sm:space-y-6">
      <input 
        type="text" 
        placeholder="Your Name" 
        className="px-4 sm:px-6 py-3 rounded-xl bg-black/50 border border-white/20 text-white focus:border-white/40 outline-none text-sm sm:text-base" 
      />
      <input 
        type="email" 
        placeholder="Your Email" 
        className="px-4 sm:px-6 py-3 rounded-xl bg-black/50 border border-white/20 text-white focus:border-white/40 outline-none text-sm sm:text-base" 
      />
      <textarea 
        placeholder="Your Message" 
        rows={4}
        className="px-4 sm:px-6 py-3 rounded-xl bg-black/50 border border-white/20 text-white focus:border-white/40 outline-none text-sm sm:text-base" 
      />
      <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium bg-white/10 border border-white/30 hover:bg-white/20 transition-colors">
        Send Message
      </button>
    </form>
  );

  return (
    <section id="contact" className="relative px-4 sm:px-6 py-16 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-white">
          Contact Us
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8">
          Have questions or want to collaborate? Reach out to our team!
        </p>

        {isDesktop ? (
          <div className="rounded-3xl p-6 sm:p-8 md:p-12 bg-gradient-to-br from-gray-800/40 to-black 
                          backdrop-blur-md border border-white/20 shadow-lg">
            {formContent}
          </div>
        ) : (
          <div>{formContent}</div> // Mobile: no outer card
        )}
      </div>
    </section>
  );
}
