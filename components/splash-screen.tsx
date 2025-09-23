"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [animationPhase, setAnimationPhase] = useState<'initial' | 'logo' | 'fadeOut'>('initial')

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationPhase('logo')
    }, 500)

    const timer2 = setTimeout(() => {
      setAnimationPhase('fadeOut')
    }, 2500)

    const timer3 = setTimeout(() => {
      setIsVisible(false)
      onComplete()
    }, 3200)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0E12] transition-opacity duration-700 ${
      animationPhase === 'fadeOut' ? 'opacity-0' : 'opacity-100'
    }`}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Plasma-like background */}
        <div className="absolute inset-0 bg-gradient-radial from-[#C8D64F]/20 via-[#0B0E12] to-[#0B0E12] animate-pulse"></div>
        
        {/* Floating particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#C8D64F] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo container with scaling animation */}
        <div className={`transition-all duration-1000 ease-out ${
          animationPhase === 'initial' ? 'scale-0 opacity-0 rotate-180' :
          animationPhase === 'logo' ? 'scale-100 opacity-100 rotate-0' :
          'scale-110 opacity-80'
        }`}>
          <div className="relative">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-[#C8D64F] blur-3xl opacity-30 scale-150 animate-pulse"></div>
            
            {/* Logo */}
            <div className="relative">
              <Image 
                src="/Tracksy_logo.png" 
                alt="Tracksy" 
                width={280} 
                height={90} 
                className="h-20 w-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Loading text with typewriter effect */}
        <div className={`mt-8 transition-all duration-500 delay-1000 ${
          animationPhase === 'logo' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex items-center gap-3">
            <span className="text-[#A1A5B0] text-lg font-light tracking-wide">
              Initializing Tracksy
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#C8D64F] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-[#C8D64F] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-[#C8D64F] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className={`mt-6 w-64 h-1 bg-[#1E232C] rounded-full overflow-hidden transition-opacity duration-500 delay-1200 ${
          animationPhase === 'logo' ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="h-full bg-gradient-to-r from-[#C8D64F] to-[#A8B940] rounded-full animate-progress"></div>
        </div>
      </div>

      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          {/* Outer ring */}
          <div className={`absolute w-96 h-96 border border-[#C8D64F]/20 rounded-full transition-all duration-2000 ${
            animationPhase === 'logo' ? 'animate-spin-slow scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}></div>
          
          {/* Inner ring */}
          <div className={`absolute w-72 h-72 border border-[#A8B940]/30 rounded-full transition-all duration-2000 delay-300 ${
            animationPhase === 'logo' ? 'animate-spin-slow-reverse scale-100 opacity-100' : 'scale-0 opacity-0'
          }`} style={{ top: '3rem', left: '3rem' }}></div>
        </div>
      </div>
    </div>
  )
}