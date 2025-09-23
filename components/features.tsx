"use client"

import { useTranslation } from "@/hooks/use-translation"

export default function Features() {
  const { t } = useTranslation()

  return (
    <section id="features" className="container mx-auto px-4 py-24 sm:py-32">
      <div className="text-center mb-20">
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          {t('features.title')}
        </h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          {t('features.subtitle')}
        </p>
      </div>

      {/* Bento Grid Layout inspired by Aceternity UI */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Projects & Clients - Large Card */}
        <div className="lg:col-span-2 group/bento hover:shadow-2xl hover:shadow-[#D5FF3F]/10 transition-all duration-500 p-8 rounded-2xl bg-gradient-to-br from-[#1A1F2E]/80 via-[#141820]/90 to-[#0B0E12] border border-[#2A2F3C] backdrop-blur-xl relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#D5FF3F]/5 via-transparent to-[#3DDC97]/5 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 group-hover/bento:translate-x-2 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F2F3F5] mb-1">
                  {t('features.organizework.title')}
                </h3>
                <p className="text-[#A1A5B0] text-sm">
                  {t('features.organizework.subtitle')}
                </p>
              </div>
            </div>
          </div>
          
          {/* Client Projects Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {/* TechFlow Inc - Website Redesign */}
            <div className="group p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">TF</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">TechFlow Inc</div>
                    <div className="text-white/60 text-xs">Sarah Chen • Contact</div>
                  </div>
                </div>
                <div className="text-white/80 text-sm font-bold bg-white/10 px-2 py-1 rounded-lg">24h</div>
              </div>
              <div className="text-[#C8D64F] font-medium text-sm">Website Redesign</div>
              <div className="text-white/60 text-xs mt-1">UX/UI Design • Active</div>
            </div>
            
            {/* StartupLab - Mobile App */}
            <div className="group p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SL</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">StartupLab</div>
                    <div className="text-white/60 text-xs">Marcus Johnson • CEO</div>
                  </div>
                </div>
                <div className="text-white/80 text-sm font-bold bg-white/10 px-2 py-1 rounded-lg">18h</div>
              </div>
              <div className="text-[#C8D64F] font-medium text-sm">Mobile App Development</div>
              <div className="text-white/60 text-xs mt-1">React Native • In Progress</div>
            </div>
            
            {/* E-Store Solutions - Database */}
            <div className="group p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">ES</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">E-Store Solutions</div>
                    <div className="text-white/60 text-xs">Emma Rodriguez • CTO</div>
                  </div>
                </div>
                <div className="text-white/80 text-sm font-bold bg-white/10 px-2 py-1 rounded-lg">32h</div>
              </div>
              <div className="text-[#C8D64F] font-medium text-sm">Database Optimization</div>
              <div className="text-white/60 text-xs mt-1">Backend • Completed</div>
            </div>
            
            {/* Creative Studio X - Branding */}
            <div className="group p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CS</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Creative Studio X</div>
                    <div className="text-white/60 text-xs">Alex Kim • Director</div>
                  </div>
                </div>
                <div className="text-white/80 text-sm font-bold bg-white/10 px-2 py-1 rounded-lg">15h</div>
              </div>
              <div className="text-[#C8D64F] font-medium text-sm">Brand Identity Design</div>
              <div className="text-white/60 text-xs mt-1">Creative • Planning</div>
            </div>
          </div>
        </div>

        {/* Time Tracking Card */}
        <div className="group/bento hover:shadow-2xl hover:shadow-[#3DDC97]/10 transition-all duration-500 p-8 rounded-2xl bg-gradient-to-br from-[#1A1F2E]/80 via-[#141820]/90 to-[#0B0E12] border border-[#2A2F3C] backdrop-blur-xl relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3DDC97]/5 via-transparent to-[#D5FF3F]/5 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 group-hover/bento:translate-x-2 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F2F3F5] mb-1">
                  {t('features.timer.title')}
                </h3>
                <p className="text-[#A1A5B0] text-sm">
                  {t('features.timer.subtitle')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mt-8 space-y-5">
            {/* Active Timer - Featured */}
            <div className="p-5 bg-gradient-to-r from-[#0B0E12]/80 to-[#1A1F2E]/60 rounded-xl border-2 border-[#3DDC97]/40 hover:border-[#3DDC97]/60 transition-all duration-300 shadow-lg shadow-[#3DDC97]/10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-4 h-4 bg-[#3DDC97] rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-[#3DDC97] rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span className="text-[#3DDC97] font-bold text-sm tracking-wider">ACTIVE SESSION</span>
                </div>
                <span className="text-[#3DDC97] font-mono text-2xl font-bold">02:34:12</span>
              </div>
              <div className="text-[#F2F3F5] font-semibold text-lg">TechFlow Inc • Website Redesign</div>
              <div className="text-[#A1A5B0]">UX Research & Wireframing</div>
            </div>

            {/* Time Summary Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-[#0B0E12]/60 to-[#1A1F2E]/40 rounded-xl border border-[#2A2F3C]/50 hover:border-[#D5FF3F]/30 transition-all">
                <div className="text-[#A1A5B0] text-sm mb-2">{t('features.today')}</div>
                <div className="text-[#F2F3F5] text-2xl font-bold">6h 45m</div>
                <div className="text-[#3DDC97] text-xs font-medium">+2h vs yesterday</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#0B0E12]/60 to-[#1A1F2E]/40 rounded-xl border border-[#2A2F3C]/50 hover:border-[#D5FF3F]/30 transition-all">
                <div className="text-[#A1A5B0] text-sm mb-2">{t('features.thisWeek')}</div>
                <div className="text-[#F2F3F5] text-2xl font-bold">32h 15m</div>
                <div className="text-[#D5FF3F] text-xs font-medium">4 clients active</div>
              </div>
            </div>

          </div>
        </div>

        {/* Billing Card - Full Width */}
        <div className="lg:col-span-3 group/bento hover:shadow-2xl hover:shadow-[#D5FF3F]/10 transition-all duration-500 p-8 rounded-2xl bg-gradient-to-br from-[#1A1F2E]/80 via-[#141820]/90 to-[#0B0E12] border border-[#2A2F3C] backdrop-blur-xl relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#D5FF3F]/5 via-[#3DDC97]/3 to-[#D5FF3F]/5 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 group-hover/bento:translate-x-2 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F2F3F5] mb-1">
                  {t('features.billing.title')}
                </h3>
                <p className="text-[#A1A5B0] text-sm">
                  {t('features.billing.subtitle')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Left side - Revenue & Invoices */}
            <div className="space-y-4">
              {/* Revenue Overview */}
              <div className="p-6 bg-gradient-to-br from-[#0B0E12]/60 to-[#1A1F2E]/40 rounded-xl border border-[#2A2F3C]/50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-[#A1A5B0] text-sm">{t('features.billing.revenueThisMonth')}</div>
                    <div className="text-3xl font-bold text-[#3DDC97]">6,290 CAD</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#A1A5B0] text-sm">{t('features.billing.invoices')}</div>
                    <div className="text-[#D5FF3F] font-semibold text-lg">2/3 {t('features.billing.paid')}</div>
                  </div>
                </div>
                
                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#2A2F3C]/30">
                  <div className="text-center">
                    <div className="text-[#F2F3F5] font-bold">82 CAD</div>
                    <div className="text-[#A1A5B0] text-xs">Taux/h</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#F2F3F5] font-bold">89h</div>
                    <div className="text-[#A1A5B0] text-xs">Facturées</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#F2F3F5] font-bold">4</div>
                    <div className="text-[#A1A5B0] text-xs">Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Recent Invoices */}
            <div className="space-y-4">
              <div className="text-[#F2F3F5] font-medium mb-3">{t('features.billing.recentInvoices')}</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#0B0E12]/60 to-[#1A1F2E]/40 rounded-xl border border-[#2A2F3C]/50 hover:border-[#3DDC97]/40 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                      <span className="text-white font-bold">TF</span>
                    </div>
                    <div>
                      <div className="text-[#F2F3F5] font-medium">#2025-001</div>
                      <div className="text-[#A1A5B0] text-sm">TechFlow Inc</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#3DDC97] font-bold">2,040 CAD</div>
                    <div className="text-[#3DDC97] text-xs bg-[#3DDC97]/10 px-2 py-1 rounded">Payée</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#0B0E12]/60 to-[#1A1F2E]/40 rounded-xl border border-[#2A2F3C]/50 hover:border-[#D5FF3F]/40 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                      <span className="text-white font-bold">SL</span>
                    </div>
                    <div>
                      <div className="text-[#F2F3F5] font-medium">#2025-002</div>
                      <div className="text-[#A1A5B0] text-sm">StartupLab</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#D5FF3F] font-bold">1,530 CAD</div>
                    <div className="text-[#D5FF3F] text-xs bg-[#D5FF3F]/10 px-2 py-1 rounded">{t('features.billing.pending')}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#0B0E12]/60 to-[#1A1F2E]/40 rounded-xl border border-[#2A2F3C]/50 hover:border-[#3DDC97]/40 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                      <span className="text-white font-bold">ES</span>
                    </div>
                    <div>
                      <div className="text-[#F2F3F5] font-medium">#2024-078</div>
                      <div className="text-[#A1A5B0] text-sm">E-Store Solutions</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#3DDC97] font-bold">2,720 CAD</div>
                    <div className="text-[#3DDC97] text-xs bg-[#3DDC97]/10 px-2 py-1 rounded">Payée</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
