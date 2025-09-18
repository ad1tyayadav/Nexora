"use client"

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // close mobile menu when a link is clicked
  };

  return (
    <nav className="flex items-center justify-between px-6 py-6 md:px-12 relative z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">
        NEXORA
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#home" className="text-white hover:text-gray-300 transition-colors">Home</a>
        <a href="#about" className="text-white hover:text-gray-300 transition-colors">About</a>
        <a href="#solutions" className="text-white hover:text-gray-300 transition-colors">Solutions</a>
        <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
        <button className="border border-gray-600 px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          absolute top-full left-0 w-full md:hidden
          transform transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
        `}
      >
        <div className="relative flex flex-col items-center space-y-6 py-8 border-t border-white/20 shadow-lg rounded-b-2xl overflow-hidden">
          {/* Background Blur */}
          <div
            className={`
              absolute inset-0 backdrop-blur-md transition-opacity duration-500
              ${isOpen ? "bg-black/40 opacity-100" : "bg-black/10 opacity-0"}
            `}
          />
          
          {/* Foreground Links */}
          <div className="relative z-10 flex flex-col items-center space-y-6">
            <a href="#home" onClick={handleLinkClick} className="text-white hover:text-gray-300 transition-colors">Home</a>
            <a href="#about" onClick={handleLinkClick} className="text-white hover:text-gray-300 transition-colors">About</a>
            <a href="#solutions" onClick={handleLinkClick} className="text-white hover:text-gray-300 transition-colors">Solutions</a>
            <a href="#contact" onClick={handleLinkClick} className="text-white hover:text-gray-300 transition-colors">Contact</a>
            <button 
              onClick={handleLinkClick}
              className="border border-white/30 px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
