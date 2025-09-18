import React from 'react'
import { FloatingParticles } from './ParticlesBG'

export default function Hero() {
    return (
        <div className="relative px-4 sm:px-6 py-16 md:px-12">
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <FloatingParticles />
                <div className="hidden md:block text-6xl md:text-8xl lg:text-[8rem] xl:text-[10rem] font-bold text-gray-700 opacity-20 select-none pointer-events-none xl:relative -right-20 leading-tight">
                    Defending <br /> truth,
                    in the digital age
                </div>
            </div>

            {/* Main Content Card */}
            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="
                    w-full 
                    rounded-2xl sm:rounded-3xl 
                    p-6 sm:p-8 md:p-12
                    bg-gradient-to-br from-gray-800/40 to-black/80
                    backdrop-blur-md 
                    border border-white/20 shadow-lg">

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Defending truth<br />
                        in the digital age
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                        At Nexora, an AI-driven platform, we&apos;re revolutionizing the fight against misinformation by providing cutting facts to strengthen the integrity of information.
                    </p>

                    <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium
                       bg-white/10 border border-white/30 
                       hover:bg-white/20 transition-colors">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}
