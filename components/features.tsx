export default function Features() {
  const content = {
    title: "Pourquoi choisir Tracksy?",
  };

  return (
    <section id="features" className="container mx-auto px-4 py-24 sm:py-32">
      <div className="text-center mb-20">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#D5FF3F]/10 border border-[#D5FF3F]/20 mb-6">
          <span className="text-[#D5FF3F] text-sm font-medium">✨ Fonctionnalités</span>
        </div>
        <h2 className="mb-6 text-5xl font-bold tracking-tight text-[#F2F3F5] sm:text-6xl bg-gradient-to-r from-[#F2F3F5] to-[#D5FF3F] bg-clip-text text-transparent">
          {content.title}
        </h2>
        <p className="text-xl text-[#A1A5B0] max-w-3xl mx-auto leading-relaxed">
          Tout ce dont tu as besoin pour gérer ton business de freelance en un seul endroit
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D5FF3F] to-[#3DDC97] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0B0E12]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F2F3F5] mb-1">
                  Organise ton travail par client et projet
                </h3>
                <p className="text-[#A1A5B0] text-sm">
                  Suivi en temps réel de tes projets et clients
                </p>
              </div>
            </div>
          </div>
          
          {/* Clients Grid */}
          <div className="relative z-10 grid grid-cols-2 gap-6 mt-8">
            <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-[#0B0E12]/60 to-[#1A1F2E]/40 rounded-xl border border-[#2A2F3C]/50 hover:border-[#D5FF3F]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#D5FF3F]/10">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face" 
                  alt="Sarah Chen" 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#D5FF3F]/20 group-hover:ring-[#D5FF3F]/40 transition-all"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#3DDC97] rounded-full border-2 border-[#0B0E12] animate-pulse"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[#F2F3F5] font-semibold text-base truncate">Sarah Chen</div>
                <div className="text-[#A1A5B0] text-sm">UX Designer</div>
              </div>
              <div className="text-[#3DDC97] text-sm font-bold bg-[#3DDC97]/10 px-2 py-1 rounded-lg">24h</div>
            </div>
            
            <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-[#0B0E12]/60 to-[#1A1F2E]/40 rounded-xl border border-[#2A2F3C]/50 hover:border-[#D5FF3F]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#D5FF3F]/10">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" 
                  alt="Marcus Johnson" 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#D5FF3F]/20 group-hover:ring-[#D5FF3F]/40 transition-all"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#D5FF3F] rounded-full border-2 border-[#0B0E12]"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[#F2F3F5] font-semibold text-base truncate">Marcus Johnson</div>
                <div className="text-[#A1A5B0] text-sm">Tech CEO</div>
              </div>
              <div className="text-[#D5FF3F] text-sm font-bold bg-[#D5FF3F]/10 px-2 py-1 rounded-lg">18h</div>
            </div>
            
            <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-[#0B0E12]/60 to-[#1A1F2E]/40 rounded-xl border border-[#2A2F3C]/50 hover:border-[#D5FF3F]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#D5FF3F]/10">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=48&h=48&fit=crop&crop=face" 
                  alt="Emma Rodriguez" 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#D5FF3F]/20 group-hover:ring-[#D5FF3F]/40 transition-all"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#3DDC97] rounded-full border-2 border-[#0B0E12] animate-pulse"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[#F2F3F5] font-semibold text-base truncate">Emma Rodriguez</div>
                <div className="text-[#A1A5B0] text-sm">E-commerce</div>
              </div>
              <div className="text-[#3DDC97] text-sm font-bold bg-[#3DDC97]/10 px-2 py-1 rounded-lg">32h</div>
            </div>
            
            <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-[#0B0E12]/60 to-[#1A1F2E]/40 rounded-xl border border-[#2A2F3C]/50 hover:border-[#D5FF3F]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#D5FF3F]/10">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=48&h=48&fit=crop&crop=face" 
                  alt="Alex Kim" 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#D5FF3F]/20 group-hover:ring-[#D5FF3F]/40 transition-all"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#D5FF3F] rounded-full border-2 border-[#0B0E12]"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[#F2F3F5] font-semibold text-base truncate">Alex Kim</div>
                <div className="text-[#A1A5B0] text-sm">Creative Agency</div>
              </div>
              <div className="text-[#D5FF3F] text-sm font-bold bg-[#D5FF3F]/10 px-2 py-1 rounded-lg">15h</div>
            </div>
          </div>
        </div>

        {/* Time Tracking Card */}
        <div className="group/bento hover:shadow-2xl hover:shadow-[#3DDC97]/10 transition-all duration-500 p-8 rounded-2xl bg-gradient-to-br from-[#1A1F2E]/80 via-[#141820]/90 to-[#0B0E12] border border-[#2A2F3C] backdrop-blur-xl relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3DDC97]/5 via-transparent to-[#D5FF3F]/5 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 group-hover/bento:translate-x-2 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3DDC97] to-[#D5FF3F] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0B0E12]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F2F3F5] mb-1">
                  Timer précis
                </h3>
                <p className="text-[#A1A5B0] text-sm">
                  Sessions automatiques
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mt-8">
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#0B0E12]/60 to-[#1A1F2E]/40 rounded-xl border border-[#2A2F3C]/50 mb-6 hover:border-[#3DDC97]/40 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-[#3DDC97] rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-[#3DDC97] rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                    alt="Sarah" 
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-[#3DDC97]/30"
                  />
                  <span className="text-[#F2F3F5] font-semibold text-base">Sarah</span>
                </div>
              </div>
              <span className="text-[#3DDC97] font-mono text-2xl font-bold">02:34:12</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-[#0B0E12]/40 to-[#1A1F2E]/20 rounded-xl border border-[#2A2F3C]/30">
                <div className="text-[#A1A5B0] text-sm mb-1">Aujourd'hui</div>
                <div className="text-[#F2F3F5] text-xl font-bold">6h 45m</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#0B0E12]/40 to-[#1A1F2E]/20 rounded-xl border border-[#2A2F3C]/30">
                <div className="text-[#A1A5B0] text-sm mb-1">Cette semaine</div>
                <div className="text-[#F2F3F5] text-xl font-bold">32h 15m</div>
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D5FF3F] to-[#3DDC97] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0B0E12]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F2F3F5] mb-1">
                  Génère tes factures en 1 clic et garde le contrôle de tes revenus
                </h3>
                <p className="text-[#A1A5B0] text-sm">
                  Facturation automatique et suivi des paiements
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {/* Revenue Overview */}
            <div className="flex items-center justify-between p-4 bg-[#0B0E12]/50 rounded-lg border border-[#1E232C]/50">
              <div>
                <div className="text-[#F2F3F5] font-medium">Revenus ce mois</div>
                <div className="text-2xl font-bold text-[#3DDC97]">4,250 CAD</div>
              </div>
              <div className="text-right">
                <div className="text-[#A1A5B0] text-sm">Factures</div>
                <div className="text-[#D5FF3F] font-semibold">12/12 payées</div>
              </div>
            </div>
            
            {/* Recent Invoices */}
            <div className="space-y-2">
              <div className="text-[#F2F3F5] text-sm font-medium mb-2">Factures récentes</div>
              <div className="flex items-center justify-between p-3 bg-[#0B0E12]/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face" 
                    alt="Sarah" 
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-[#F2F3F5] text-xs font-medium">#2025-001</div>
                    <div className="text-[#A1A5B0] text-xs">Sarah Chen</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[#3DDC97] text-xs font-semibold">1,850 CAD</div>
                  <div className="text-[#A1A5B0] text-xs">Payée</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#0B0E12]/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face" 
                    alt="Marcus" 
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-[#F2F3F5] text-xs font-medium">#2025-002</div>
                    <div className="text-[#A1A5B0] text-xs">Marcus Johnson</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[#D5FF3F] text-xs font-semibold">680 CAD</div>
                  <div className="text-[#A1A5B0] text-xs">En attente</div>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="space-y-3">
              <div className="text-[#F2F3F5] text-sm font-medium mb-2">Statistiques</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#A1A5B0]">Taux horaire moyen</span>
                  <span className="text-[#F2F3F5] font-medium">85 CAD/h</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#A1A5B0]">Heures facturées</span>
                  <span className="text-[#F2F3F5] font-medium">50h</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#A1A5B0]">Clients actifs</span>
                  <span className="text-[#F2F3F5] font-medium">4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
