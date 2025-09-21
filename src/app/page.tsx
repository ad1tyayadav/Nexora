import React from 'react';
import Hero from './components/Hero';
import Solutions from './components/OurSolution';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FloatingParticles } from './components/ParticlesBG';
import VideoSection from './components/VideoSection';

function Nexora() {
  return (
    <div className="min-h-auto text-white">
      <FloatingParticles />
      <div className=" pt-8 ">
        {/* <Navbar /> */}

        {/* Hero Section */}
        <Hero />

        {/* Solutions Section */}
        <Solutions />
        <VideoSection />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Nexora;
