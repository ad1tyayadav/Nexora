"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 w-full flex items-center justify-between px-6 py-4 md:px-12 z-50
                     backdrop-blur-md shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-white">
        NEXORA
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {["Home", "About", "Solutions", "Contact"].map((link, i) => (
          <a
            key={i}
            href={`#${link.toLowerCase()}`}
            className="text-white font-medium hover:text-white/80 hover:scale-105 transition-all duration-300"
          >
            {link}
          </a>
        ))}
        <button className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#7C71B2]/20 to-[#4A00E0]/20 border border-white/20 hover:from-[#7C71B2]/50 hover:to-[#4A00E0]/50 hover:shadow-[0_0_10px_#7C71B2] transition-all transform hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full md:hidden transform transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
      >
        <div className="relative flex flex-col items-center space-y-6 py-8 border-t border-white/20 shadow-lg rounded-b-2xl overflow-hidden bg-black/90 backdrop-blur-lg">
          {["Home", "About", "Solutions", "Contact"].map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              onClick={handleLinkClick}
              className="text-white font-medium hover:text-white/80 hover:scale-105 transition-all duration-300"
            >
              {link}
            </a>
          ))}
          <button
            onClick={handleLinkClick}
            className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#7C71B2]/20 to-[#4A00E0]/20 border border-white/20 hover:from-[#7C71B2]/50 hover:to-[#4A00E0]/50 hover:shadow-[0_0_10px_#7C71B2] transition-all transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
