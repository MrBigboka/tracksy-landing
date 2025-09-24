"use client"

import { useTranslation } from "@/hooks/use-translation"
import { useEffect, useRef, useState } from "react"

export default function Features() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="container mx-auto px-4 py-24 sm:py-32"
    >
      <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          {t('features.title')}
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          {t('features.subtitle')}
        </p>
      </div>

      {/* Features Grid - Simplifié */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* Feature 1 - Time Tracking */}
        <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#0B0E12] to-[#141820] border border-white/10 hover:border-[#C8D64F]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#C8D64F]/10">
          <div className="w-14 h-14 rounded-xl bg-[#C8D64F]/10 border border-[#C8D64F]/20 flex items-center justify-center mb-6">
            <svg className="w-7 h-7 text-[#C8D64F]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            {t('features.timer.title')}
          </h3>
          <p className="text-white/60 leading-relaxed">
            {t('features.timer.subtitle')}
          </p>
        </div>

        {/* Feature 2 - Project Management */}
        <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#0B0E12] to-[#141820] border border-white/10 hover:border-[#C8D64F]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#C8D64F]/10">
          <div className="w-14 h-14 rounded-xl bg-[#C8D64F]/10 border border-[#C8D64F]/20 flex items-center justify-center mb-6">
            <svg className="w-7 h-7 text-[#C8D64F]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            {t('features.organizework.title')}
          </h3>
          <p className="text-white/60 leading-relaxed">
            {t('features.organizework.subtitle')}
          </p>
        </div>

        {/* Feature 3 - Billing */}
        <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#0B0E12] to-[#141820] border border-white/10 hover:border-[#C8D64F]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#C8D64F]/10">
          <div className="w-14 h-14 rounded-xl bg-[#C8D64F]/10 border border-[#C8D64F]/20 flex items-center justify-center mb-6">
            <svg className="w-7 h-7 text-[#C8D64F]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            {t('features.billing.title')}
          </h3>
          <p className="text-white/60 leading-relaxed">
            {t('features.billing.subtitle')}
          </p>
        </div>

      </div>
    </section>
  );
}