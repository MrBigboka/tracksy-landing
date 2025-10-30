"use client"

import { useTranslation } from "@/hooks/use-translation"
import { Clock, TrendingUp, FileText } from "lucide-react"
import Image from "next/image"

export default function FeaturesSimple() {
  const { t } = useTranslation()

  // Helper function to safely get translations with fallback
  const safeT = (key: string, fallback: string): string => {
    const translation = t(key)
    if (typeof translation === 'string' && translation !== key) {
      return translation
    }
    return fallback
  }

  return (
    <section 
      id="features" 
      className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 relative"
    >
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 px-4">
          {safeT('features.title', 'Why choose Tracksy?')}
        </h2>
        <p className="text-sm sm:text-base text-white/50 max-w-xl mx-auto px-4">
          {safeT('features.subtitle', 'Three essential features to manage your business')}
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Feature 1 - Timer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-[#D5FF3F] text-xs sm:text-sm">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-medium">{safeT('features.feature1.badge', 'Time tracking')}</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              {safeT('features.feature1.title', 'Precise and automatic timer')}
            </h3>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed">
              {safeT('features.feature1.description', 'Start your timer with one click and track every minute worked. Tracksy automatically records your sessions by client and project.')}
            </p>
          </div>
          
          <div className="relative w-full max-w-lg mx-auto">
            <Image 
              src="/timer.png" 
              alt="Timer Tracksy" 
              width={900} 
              height={675} 
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Feature 2 - Facturation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative w-full max-w-lg mx-auto order-2 lg:order-1">
            <Image 
              src="/facturation.png" 
              alt="Facturation Tracksy" 
              width={900} 
              height={675} 
              className="w-full h-auto"
            />
          </div>
          
          <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-[#D5FF3F] text-xs sm:text-sm">
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-medium">{safeT('features.feature2.badge', 'Invoicing')}</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              {safeT('features.feature2.title', 'Invoices in 1 click')}
            </h3>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed">
              {safeT('features.feature2.description', 'Generate your professional invoices automatically based on your recorded time. No more manual paperwork.')}
            </p>
          </div>
        </div>

        {/* Feature 3 - Revenus en temps réel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-[#D5FF3F] text-xs sm:text-sm">
              <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-medium">{safeT('features.feature3.badge', 'Real-time revenue')}</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              {safeT('features.feature3.title', 'See your earnings instantly')}
            </h3>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed">
              {safeT('features.feature3.description', 'Every minute worked transforms into visible revenue. No need to wait until the end of the month to know how much you\'ve earned.')}
            </p>
          </div>
          
          <div className="relative w-full max-w-lg mx-auto">
            <Image 
              src="/1click.png" 
              alt="Revenus Tracksy" 
              width={900} 
              height={675} 
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
