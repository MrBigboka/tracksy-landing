"use client"

import Image from "next/image"
import { useState } from "react"

interface PhoneMockupProps {
  screenshot: string
  alt: string
  title: string
  description: string
}

export function PhoneMockup({ screenshot, alt, title, description }: PhoneMockupProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="relative group">
      <div className="relative mx-auto max-w-sm">
        {/* Phone Frame - Inspired by Aceternity */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-2 rounded-[2.5rem] shadow-2xl">
          <div className="bg-black rounded-[2.25rem] overflow-hidden">
            {/* Notch */}
            <div className="bg-black w-32 h-6 mx-auto relative top-0 rounded-b-lg"></div>
            
            {/* Screen */}
            <div className="relative w-full h-[600px] bg-black overflow-hidden">
              {/* Placeholder with app preview */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B0E12] to-[#141820] p-8 flex flex-col">
                <div className="bg-[#C8D64F]/10 rounded-lg p-4 mb-4">
                  <div className="w-full h-3 bg-[#C8D64F]/20 rounded mb-2"></div>
                  <div className="w-3/4 h-3 bg-[#C8D64F]/20 rounded"></div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="w-full h-2 bg-white/10 rounded mb-1"></div>
                    <div className="w-2/3 h-2 bg-white/10 rounded"></div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="w-full h-2 bg-white/10 rounded mb-1"></div>
                    <div className="w-1/2 h-2 bg-white/10 rounded"></div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="w-full h-2 bg-white/10 rounded mb-1"></div>
                    <div className="w-4/5 h-2 bg-white/10 rounded"></div>
                  </div>
                </div>
                
                {/* Central feature icon */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#C8D64F]/20 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#C8D64F] rounded opacity-60"></div>
                  </div>
                </div>
              </div>
              
              {/* Try to load real image if available */}
              <Image
                src={screenshot}
                alt={alt}
                fill
                className={`object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(false)}
                sizes="(max-width: 768px) 300px, 400px"
              />
              
              {/* Overlay glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#C8D64F]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Home indicator */}
            <div className="w-32 h-1 bg-white/30 rounded-full mx-auto mb-2"></div>
          </div>
        </div>
        
        {/* Floating reflection */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-[2.5rem] pointer-events-none group-hover:from-white/10 transition-colors duration-300"></div>
      </div>
      
      {/* Text content */}
      <div className="text-center mt-8 px-4">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}