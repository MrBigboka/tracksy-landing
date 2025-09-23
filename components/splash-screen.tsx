"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [animationPhase, setAnimationPhase] = useState<'initial' | 'whitePhase' | 'greenFill' | 'complete' | 'fadeOut'>('initial')

  useEffect(() => {
    // Initial logo appearance
    const timer1 = setTimeout(() => {
      setAnimationPhase('whitePhase')
    }, 300)

    // Start green fill animation
    const timer2 = setTimeout(() => {
      setAnimationPhase('greenFill')
    }, 1000)

    // Animation complete
    const timer3 = setTimeout(() => {
      setAnimationPhase('complete')
    }, 2200)

    // Start fade out
    const timer4 = setTimeout(() => {
      setAnimationPhase('fadeOut')
    }, 2800)

    // Remove splash screen
    const timer5 = setTimeout(() => {
      setIsVisible(false)
      onComplete()
    }, 3500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-all duration-700 ${
      animationPhase === 'fadeOut' ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo container with color-fill animation */}
        <div className={`relative transition-all duration-500 ease-out ${
          animationPhase === 'initial' ? 'scale-0 opacity-0' :
          animationPhase === 'complete' ? 'scale-110' : 'scale-100 opacity-100'
        }`}>
          {/* Logo with shadow to color fill effect */}
          <div className="relative">
            {/* Background logo (shadow/silhouette) */}
            <div className="relative">
              <Image 
                src="/Tracksy_logo.png" 
                alt="Tracksy" 
                width={320} 
                height={106} 
                className="h-24 w-auto"
                style={{ 
                  filter: 'brightness(0) saturate(0) contrast(100%) opacity(0.3)'
                }}
                priority
              />
            </div>

            {/* Animated color overlay that fills the logo */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: animationPhase === 'greenFill' || animationPhase === 'complete' ? 
                  'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                transition: 'clip-path 1500ms ease-out'
              }}
            >
              <Image 
                src="/Tracksy_logo.png" 
                alt="Tracksy" 
                width={320} 
                height={106} 
                className="h-24 w-auto"
              />
            </div>

            {/* Subtle glow effect */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${
              animationPhase === 'complete' ? 'opacity-20' : 'opacity-0'
            }`}>
              <div className="absolute inset-0 bg-[#C8D64F] blur-2xl scale-110"></div>
            </div>
          </div>
        </div>

        {/* Elegant loading indicator */}
        <div className={`mt-12 transition-all duration-500 ${
          animationPhase === 'whitePhase' || animationPhase === 'greenFill' ? 'opacity-100 translate-y-0' : 
          animationPhase === 'complete' ? 'opacity-80' : 'opacity-0 translate-y-4'
        }`}>
          {/* Animated dots */}
          <div className="flex items-center justify-center gap-2">
            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              animationPhase === 'whitePhase' ? 'bg-gray-500 animate-pulse' :
              animationPhase === 'greenFill' || animationPhase === 'complete' ? 'bg-[#C8D64F] animate-bounce' : 'bg-gray-600'
            }`} style={{ animationDelay: '0ms' }}></div>
            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              animationPhase === 'whitePhase' ? 'bg-gray-500 animate-pulse' :
              animationPhase === 'greenFill' || animationPhase === 'complete' ? 'bg-[#C8D64F] animate-bounce' : 'bg-gray-600'
            }`} style={{ animationDelay: '150ms' }}></div>
            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              animationPhase === 'whitePhase' ? 'bg-gray-500 animate-pulse' :
              animationPhase === 'greenFill' || animationPhase === 'complete' ? 'bg-[#C8D64F] animate-bounce' : 'bg-gray-600'
            }`} style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>

      {/* Subtle background animation */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute inset-0 transition-all duration-2000 ${
          animationPhase === 'greenFill' || animationPhase === 'complete' ? 
          'bg-gradient-radial from-[#C8D64F]/10 via-transparent to-transparent scale-150' : 
          'bg-gradient-radial from-gray-500/5 via-transparent to-transparent scale-100'
        }`}></div>
      </div>
    </div>
  )
}