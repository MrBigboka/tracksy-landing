"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Timer, Users, FileText } from "lucide-react"

export function TracksyHero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0E12] via-[#141820] to-[#0B0E12]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D5FF3F" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#141820] border border-[#1E232C] mb-8">
            <span className="text-[#D5FF3F] text-sm font-medium">🚀 Conçu pour les freelances québécois</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F2F3F5] mb-6 leading-tight">
            Track your time.{" "}
            <span className="text-[#D5FF3F]">Simplify</span> your business.
          </h1>

          {/* Subheading */}
          <p className="text-xl text-[#A1A5B0] mb-8 max-w-2xl mx-auto leading-relaxed">
            Fini de jongler entre Toggl, QuickBooks et Excel. Tracksy combine tout en un seul outil : 
            suivi du temps, gestion de projets, facturation automatique.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-[#D5FF3F] text-[#0B0E12] hover:bg-[#B9E832] font-semibold px-8 py-4 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Commencer gratuitement
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#1E232C] text-[#F2F3F5] hover:bg-[#1A1F27] px-8 py-4 text-lg"
            >
              Voir la démo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-[#A1A5B0] text-sm">
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4 text-[#D5FF3F]" />
              <span>14 jours d'essai gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#D5FF3F]" />
              <span>Aucune carte requise</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#D5FF3F]" />
              <span>Setup en 2 minutes</span>
            </div>
          </div>
        </div>

        {/* Hero visual placeholder */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-br from-[#141820] to-[#1A1F27] border border-[#1E232C] p-8 shadow-2xl">
            <div className="aspect-video bg-[#0B0E12] rounded-xl border border-[#1E232C] flex items-center justify-center">
              <div className="text-center">
                <Timer className="w-16 h-16 text-[#D5FF3F] mx-auto mb-4" />
                <p className="text-[#A1A5B0] text-lg">Interface Tracksy - Aperçu bientôt disponible</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-[#D5FF3F] text-[#0B0E12] px-4 py-2 rounded-lg font-semibold text-sm">
              ⏱️ Timer actif
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#3DDC97] text-[#0B0E12] px-4 py-2 rounded-lg font-semibold text-sm">
              💰 Facture générée
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
