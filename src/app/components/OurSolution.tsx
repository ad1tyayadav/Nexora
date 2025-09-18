import React from "react";
import { Search, MapPin, RotateCcw } from "lucide-react";

export default function Solutions() {
  const solutions = [
    { icon: <Search size={28} />, title: "Misinformation Detection" },
    { icon: <MapPin size={28} />, title: "Truth-Maps" },
    { icon: <RotateCcw size={28} />, title: "Chaos Mirror" },
  ];

  return (
    <section id="solutions" className="relative px-6 py-20 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Solutions</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Our suite of AI-powered tools is designed to detect, analyze, and combat
          misinformation across digital platforms.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((s, i) => (
            <div key={i} className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-gray-800/40 to-black 
                            backdrop-blur-md border border-white/10 shadow-lg 
                            hover:border-white/30 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 border border-white/30 rounded-full flex items-center justify-center text-white">
                {s.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
