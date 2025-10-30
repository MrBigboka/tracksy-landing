"use client"

import Image from "next/image"
import { Clock, FileText, TrendingUp } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { useState } from "react"

export default function FeaturesBento() {
  const { t } = useTranslation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const safeT = (key: string, fallback: string): string => {
    const translation = t(key)
    if (typeof translation === 'string' && translation !== key) {
      return translation
    }
    return fallback
  }

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Gradient transition from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #D5FF3F 1px, transparent 1px),
            linear-gradient(to bottom, #D5FF3F 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
          {safeT('features.title', 'Why choose Tracksy?')}
        </h2>
        <p className="text-sm sm:text-base text-white/50">
          {safeT('features.subtitle', 'Three essential features to manage your business')}
        </p>
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        
        {/* Feature 1 - Timer (Large) */}
        <div 
          className="group relative md:col-span-2 lg:col-span-2 lg:row-span-2 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden hover:border-[#D5FF3F]/30 transition-all duration-300"
          onMouseMove={handleMouseMove}
        >
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(213, 255, 63, 0.04), transparent 50%)`
            }}
          />
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center gap-2 text-[#D5FF3F] text-xs sm:text-sm mb-4">
              <Clock className="w-4 h-4" />
              <span className="font-medium">{safeT('features.feature1.badge', 'Time tracking')}</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              {safeT('features.feature1.title', 'Precise and automatic timer')}
            </h3>
            
            <p className="text-sm sm:text-base text-white/60 mb-6 max-w-xl">
              {safeT('features.feature1.description', 'Start your timer with one click and track every minute worked. Tracksy automatically records your sessions by client and project.')}
            </p>
            
            <div className="mt-auto relative overflow-hidden rounded-lg">
              <Image 
                src="/timer.png" 
                alt="Timer Tracksy" 
                width={800} 
                height={600} 
                className="relative w-full h-auto rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Feature 2 - Facturation (Medium) */}
        <div 
          className="group relative lg:col-span-1 lg:row-span-1 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-[#D5FF3F]/30 transition-all duration-300"
          onMouseMove={handleMouseMove}
        >
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(213, 255, 63, 0.04), transparent 50%)`
            }}
          />
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center gap-2 text-[#D5FF3F] text-xs sm:text-sm mb-3">
              <FileText className="w-4 h-4" />
              <span className="font-medium">{safeT('features.feature2.badge', 'Invoicing')}</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {safeT('features.feature2.title', 'Invoices in 1 click')}
            </h3>
            
            <p className="text-xs sm:text-sm text-white/60 mb-4">
              {safeT('features.feature2.description', 'Generate your professional invoices automatically based on your recorded time.')}
            </p>
            
            <div className="mt-auto relative overflow-hidden rounded-lg">
              <Image 
                src="/facturation.png" 
                alt="Facturation Tracksy" 
                width={600} 
                height={450} 
                className="relative w-full h-auto rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Feature 3 - Revenus (Medium) */}
        <div 
          className="group relative lg:col-span-1 lg:row-span-1 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-[#D5FF3F]/30 transition-all duration-300"
          onMouseMove={handleMouseMove}
        >
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(213, 255, 63, 0.04), transparent 50%)`
            }}
          />
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center gap-2 text-[#D5FF3F] text-xs sm:text-sm mb-3">
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">{safeT('features.feature3.badge', 'Real-time revenue')}</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {safeT('features.feature3.title', 'See your earnings instantly')}
            </h3>
            
            <p className="text-xs sm:text-sm text-white/60 mb-4">
              {safeT('features.feature3.description', 'Every minute worked transforms into visible revenue.')}
            </p>
            
            <div className="mt-auto relative overflow-hidden rounded-lg">
              <Image 
                src="/1click.png" 
                alt="Revenus Tracksy" 
                width={600} 
                height={450} 
                className="relative w-full h-auto rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
