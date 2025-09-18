import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/OurSolution';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FloatingParticles } from './components/ParticlesBG';

function Nexora() {
  return (
    <div className="min-h-auto lg:m-20 text-white bg-[#0A0A0A]">
      <FloatingParticles />
      <div className="bg-black/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12">
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Solutions Section */}
        <Solutions />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Nexora;
