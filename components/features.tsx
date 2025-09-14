"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturesContent {
  title: string
  subtitle: string
}

const defaultContent: FeaturesContent = {
  title: "Pourquoi choisir Tracksy?",
  subtitle: "Découvrez notre approche tout-en-un pour les freelances",
}

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("tracksy-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.features) {
          setContent(parsed.features)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
      <div className="text-center mb-12">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-[#F2F3F5] sm:text-5xl">
          {content.title}
        </h2>
        <p className="text-xl text-[#A1A5B0] max-w-2xl mx-auto">
          Tout ce dont tu as besoin pour gérer ton business de freelance en un seul endroit
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Projects & Clients Card */}
        <Card className="liquid-glass border border-[#1E232C] bg-[#141820] backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-[#A1A5B0]">PROJETS & CLIENTS</p>
            <CardTitle className="mt-1 text-xl text-[#F2F3F5]">Organise ton travail par client et projet</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#0B0E12] rounded-lg border border-[#1E232C]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#D5FF3F] rounded-full flex items-center justify-center text-[#0B0E12] font-semibold text-sm">A</div>
                  <div>
                    <div className="text-[#F2F3F5] font-medium">Agence Alpha</div>
                    <div className="text-[#A1A5B0] text-sm">3 projets actifs</div>
                  </div>
                </div>
                <div className="text-[#3DDC97] text-sm font-medium">24h cette semaine</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#0B0E12] rounded-lg border border-[#1E232C]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#3DDC97] rounded-full flex items-center justify-center text-[#0B0E12] font-semibold text-sm">B</div>
                  <div>
                    <div className="text-[#F2F3F5] font-medium">Boutique Beta</div>
                    <div className="text-[#A1A5B0] text-sm">1 projet actif</div>
                  </div>
                </div>
                <div className="text-[#D5FF3F] text-sm font-medium">8h cette semaine</div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Time Tracking Card */}
        <Card className="liquid-glass border border-[#1E232C] bg-[#141820] backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-[#A1A5B0]">TIME TRACKING</p>
            <CardTitle className="mt-1 text-xl text-[#F2F3F5]">Timer précis et sessions automatiques</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#0B0E12] rounded-lg border border-[#1E232C]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#D5FF3F] rounded-full animate-pulse"></div>
                  <span className="text-[#F2F3F5] font-medium">Projet Client A</span>
                </div>
                <span className="text-[#D5FF3F] font-mono text-lg">02:34:12</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-[#A1A5B0]">Aujourd'hui: <span className="text-[#F2F3F5]">6h 45m</span></div>
                <div className="text-[#A1A5B0]">Cette semaine: <span className="text-[#F2F3F5]">32h 15m</span></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Billing & Reports Card */}
        <Card className="liquid-glass border border-[#1E232C] bg-[#141820] backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-[#A1A5B0]">FACTURATION</p>
            <CardTitle className="mt-1 text-xl text-[#F2F3F5]">
              Génère tes factures en 1 clic et garde le contrôle de tes revenus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#0B0E12] rounded-lg border border-[#1E232C]">
                <div>
                  <div className="text-[#F2F3F5] font-medium">Revenus ce mois</div>
                  <div className="text-2xl font-bold text-[#3DDC97]">4,250 CAD</div>
                </div>
                <div className="text-right">
                  <div className="text-[#A1A5B0] text-sm">Factures envoyées</div>
                  <div className="text-[#D5FF3F] font-semibold">12/12 payées</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-[#A1A5B0]">Taux horaire moyen: <span className="text-[#F2F3F5]">85 CAD/h</span></div>
                <div className="text-[#A1A5B0]">Heures facturées: <span className="text-[#F2F3F5]">50h</span></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
