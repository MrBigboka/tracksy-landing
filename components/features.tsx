"use client"

import { useTranslation } from "@/hooks/use-translation"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Clock, TrendingUp, FileText, DollarSign } from "lucide-react"
import { Card3D } from "./ui/card-3d"
import { BorderBeam } from "./ui/border-beam"
import { ParticlesBg } from "./ui/particles-bg"
import { Marquee } from "./ui/marquee"
import { SessionCard } from "./ui/session-card"

export default function Features() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Sessions simulées pour le scroll infini
  const sessions = [
    { client: "Acme Corp", project: "Refonte site web", duration: "3h 24m", revenue: "$272", status: "completed" as const, color: "blue" },
    { client: "TechStart", project: "App mobile iOS", duration: "5h 12m", revenue: "$468", status: "completed" as const, color: "purple" },
    { client: "Design Co", project: "Branding & Logo", duration: "2h 45m", revenue: "$220", status: "active" as const, color: "green" },
    { client: "StartupXYZ", project: "MVP Development", duration: "6h 30m", revenue: "$585", status: "completed" as const, color: "orange" },
    { client: "E-commerce", project: "Intégration Stripe", duration: "4h 15m", revenue: "$380", status: "paused" as const, color: "pink" },
    { client: "FinTech Inc", project: "Dashboard Analytics", duration: "7h 20m", revenue: "$658", status: "completed" as const, color: "cyan" },
    { client: "MediaHub", project: "CMS Custom", duration: "3h 50m", revenue: "$308", status: "active" as const, color: "yellow" },
    { client: "SaaS Platform", project: "API REST", duration: "5h 45m", revenue: "$518", status: "completed" as const, color: "indigo" },
  ]

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
      className="max-w-[1400px] mx-auto px-8 lg:px-12 py-24 sm:py-32 relative"
    >
      {/* Particles Background */}
      <ParticlesBg className="opacity-30" quantity={80} />
      {/* Header */}
      <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-white/70 bg-white/5 rounded-full border border-white/10">
          {t('features.badge')}
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          {t('features.title')}
        </h2>
        <p className="text-xl text-white/60 max-w-3xl mx-auto">
          {t('features.subtitle')}
        </p>
      </div>

      {/* Bento Grid */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* Timer Card - Top Left */}
        <Card3D className="lg:col-span-4 group">
          <div className="h-full bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] rounded-3xl p-8 border border-white/10 hover:border-[#D5FF3F]/30 transition-all duration-300 relative overflow-hidden">
            <BorderBeam size={250} duration={12} delay={0} />
            <div className="absolute inset-0 bg-gradient-to-br from-[#D5FF3F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#D5FF3F]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-[#D5FF3F]" />
              </div>
              <div className="flex items-center gap-2 text-[#D5FF3F] text-sm font-medium">
                <div className="w-2 h-2 bg-[#D5FF3F] rounded-full animate-pulse" />
                En cours
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {t('features.timer.title')}
            </h3>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              {t('features.timer.subtitle')}
            </p>
            
            {/* Timer Visual Example */}
            <div className="mt-auto bg-black/20 rounded-2xl p-6 border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/50 text-sm">Session actuelle</span>
                <span className="text-[#D5FF3F] text-xs font-medium">ACTIF</span>
              </div>
              <div className="text-4xl font-bold text-white mb-2 font-mono">
                02:34:18
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>Client ABC • Projet Web</span>
              </div>
            </div>
            </div>
          </div>
        </Card3D>

        {/* Real-time Revenue Card - Top Center (Large) */}
        <Card3D className="lg:col-span-8 group">
          <div className="h-full bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] rounded-3xl p-8 border border-white/10 hover:border-[#D5FF3F]/30 transition-all duration-300 relative overflow-hidden">
            <BorderBeam size={300} duration={15} delay={2} />
          <div className="absolute inset-0 bg-gradient-to-br from-[#D5FF3F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="w-12 h-12 bg-[#D5FF3F]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-[#D5FF3F]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {t('features.realtime.title')}
              </h3>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                {t('features.realtime.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-[#D5FF3F]">
                  <div className="w-2 h-2 bg-[#D5FF3F] rounded-full animate-pulse" />
                  <span className="text-sm font-medium">{t('features.realtime.liveUpdate')}</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-sm font-medium">{t('features.realtime.perProject')}</span>
                </div>
              </div>
            </div>
            <div className="relative w-full lg:w-auto flex-shrink-0">
              {/* Revenue Dashboard Mockup */}
              <div className="bg-black/30 rounded-2xl p-6 border border-white/10 backdrop-blur-sm w-full lg:w-[320px]">
                <div className="mb-6">
                  <div className="text-white/50 text-sm mb-2">{t('features.today')}</div>
                  <div className="text-5xl font-bold text-white mb-1">$847</div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    <span>+32% vs hier</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <span className="text-white text-sm">Client ABC</span>
                      </div>
                      <span className="text-white font-semibold">$420</span>
                    </div>
                    <div className="text-white/40 text-xs">5.2h • $80/h</div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <span className="text-white text-sm">Projet XYZ</span>
                      </div>
                      <span className="text-white font-semibold">$315</span>
                    </div>
                    <div className="text-white/40 text-xs">3.5h • $90/h</div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-white text-sm">En cours...</span>
                      </div>
                      <span className="text-[#D5FF3F] font-semibold">$112</span>
                    </div>
                    <div className="text-white/40 text-xs">1.4h • $80/h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </Card3D>

        {/* Projects Organization Card - Bottom Left (Large) */}
        <Card3D className="lg:col-span-7 group">
          <div className="h-full bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] rounded-3xl p-8 border border-white/10 hover:border-[#D5FF3F]/30 transition-all duration-300 relative overflow-hidden">
            <BorderBeam size={280} duration={14} delay={4} />
            <div className="absolute inset-0 bg-gradient-to-br from-[#D5FF3F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#D5FF3F]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-[#D5FF3F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#D5FF3F] rounded-full animate-pulse" />
                  <span className="text-[#D5FF3F] text-sm font-medium">Sessions en direct</span>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-3">
                {t('features.organizework.title')}
              </h3>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                {t('features.organizework.subtitle')}
              </p>

              {/* Mini Dashboard Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                  <div className="text-white/50 text-xs mb-2">Projets actifs</div>
                  <div className="text-3xl font-bold text-white">12</div>
                  <div className="text-[#D5FF3F] text-xs mt-1">+3 ce mois</div>
                </div>
                <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                  <div className="text-white/50 text-xs mb-2">Clients</div>
                  <div className="text-3xl font-bold text-white">8</div>
                  <div className="text-blue-400 text-xs mt-1">Tous actifs</div>
                </div>
                <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                  <div className="text-white/50 text-xs mb-2">Cette semaine</div>
                  <div className="text-3xl font-bold text-white">42h</div>
                  <div className="text-green-400 text-xs mt-1">+8h vs avant</div>
                </div>
              </div>

              {/* Infinite Scroll Sessions - Row 1 */}
              <div className="mb-4">
                <Marquee pauseOnHover className="[--duration:30s]">
                  {sessions.slice(0, 4).map((session, idx) => (
                    <SessionCard key={idx} {...session} />
                  ))}
                </Marquee>
              </div>

              {/* Infinite Scroll Sessions - Row 2 (reverse) */}
              <div>
                <Marquee pauseOnHover reverse className="[--duration:35s]">
                  {sessions.slice(4).map((session, idx) => (
                    <SessionCard key={idx} {...session} />
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </Card3D>

        {/* Billing Card - Bottom Right */}
        <Card3D className="lg:col-span-5 group">
          <div className="h-full bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] rounded-3xl p-8 border border-white/10 hover:border-[#D5FF3F]/30 transition-all duration-300 relative overflow-hidden">
            <BorderBeam size={220} duration={13} delay={6} />
          <div className="absolute inset-0 bg-gradient-to-br from-[#D5FF3F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 h-full flex flex-col">
            <div className="w-12 h-12 bg-[#D5FF3F]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-6 h-6 text-[#D5FF3F]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('features.billing.title')}
            </h3>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              {t('features.billing.subtitle')}
            </p>
            
            {/* Billing Stats */}
            <div className="space-y-4 mb-6">
              <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/50 text-sm">{t('features.billing.revenueThisMonth')}</span>
                  <span className="text-green-400 text-xs font-medium">+23%</span>
                </div>
                <div className="text-3xl font-bold text-white">$12,450</div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                  <div className="text-white/50 text-xs mb-1">{t('features.billing.invoices')}</div>
                  <div className="text-xl font-bold text-white">24</div>
                  <div className="text-[#D5FF3F] text-xs mt-1">18 {t('features.billing.paid')}</div>
                </div>
                <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                  <div className="text-white/50 text-xs mb-1">{t('features.billing.activeClients')}</div>
                  <div className="text-xl font-bold text-white">8</div>
                  <div className="text-blue-400 text-xs mt-1">+2 ce mois</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </Card3D>

      </div>
    </section>
  );
}
