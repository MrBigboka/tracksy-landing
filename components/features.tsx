"use client"

import { useTranslation } from "@/hooks/use-translation"
import { useEffect, useRef, useState } from "react"
import { PhoneMockup } from "./phone-mockup"

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
      className="max-w-[1400px] mx-auto px-8 lg:px-12 py-24 sm:py-32"
    >
      <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-6xl sm:text-7xl font-bold tracking-tight text-white mb-8">
          {t('features.title')}
        </h2>
        <p className="text-2xl text-white/70 max-w-3xl mx-auto">
          {t('features.subtitle')}
        </p>
      </div>

      {/* Phone Mockups Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* Timer Feature */}
        <PhoneMockup
          screenshot="/mockups/timer-screen.png"
          alt="Tracksy Timer Interface"
          title={t('features.timer.title') as string}
          description={t('features.timer.subtitle') as string}
        />

        {/* Projects Feature */}
        <PhoneMockup
          screenshot="/mockups/projects-screen.png"
          alt="Tracksy Projects Dashboard"
          title={t('features.organizework.title') as string}
          description={t('features.organizework.subtitle') as string}
        />

        {/* Billing Feature */}
        <PhoneMockup
          screenshot="/mockups/billing-screen.png"
          alt="Tracksy Billing Interface"
          title={t('features.billing.title') as string}
          description={t('features.billing.subtitle') as string}
        />

      </div>
    </section>
  );
}