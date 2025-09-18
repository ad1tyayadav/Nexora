"use client"

import React, { useState, useEffect } from "react";

function AboutSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Inner content wrapper
  const innerContent = (
    <>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
        About <span className="text-gray-300">Nexora</span>
      </h2>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
        Nexora is an AI-powered platform built to protect truth in the digital age.  
        We focus on identifying misinformation, validating facts, and restoring 
        trust in online platforms through AI and human insight.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-6">
        <div className="rounded-2xl p-4 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">Our Mission</h3>
          <p className="text-gray-300 text-sm sm:text-base">
            To empower people with accurate, transparent, and reliable information.
          </p>
        </div>
        <div className="rounded-2xl p-4 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">Our Vision</h3>
          <p className="text-gray-300 text-sm sm:text-base">
            A future where digital platforms serve as a space of truth and accountability.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Our Core Values</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <li className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-300 text-sm sm:text-base">
            🔍 Transparency in information
          </li>
          <li className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-300 text-sm sm:text-base">
            🤝 Responsibility towards society
          </li>
          <li className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-300 text-sm sm:text-base">
            ⚡ Innovation with AI-powered solutions
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <section id="about" className="relative px-4 sm:px-6 py-16 md:px-12">
      <div className="max-w-5xl mx-auto">
        {isDesktop ? (
          <div className="rounded-3xl p-6 sm:p-8 md:p-12 bg-gradient-to-br from-gray-800/40 to-black
                          backdrop-blur-md border border-white/20 shadow-lg">
            {innerContent}
          </div>
        ) : (
          <div>{innerContent}</div> // Mobile: no outer card
        )}
      </div>
    </section>
  );
}

export default AboutSection;
