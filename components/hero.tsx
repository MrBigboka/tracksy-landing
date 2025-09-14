import { Button } from "@/components/ui/button"
import Image from "next/image"
import LazyVideo from "./lazy-video"

export function Hero() {
  const buttonNew = (
    <Button asChild className="rounded-full bg-[#D5FF3F] px-6 text-[#0B0E12] hover:bg-[#B9E832]">
      <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer">
        Chat With Us
      </a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center justify-center">
            <Image src="/Tracksy_logo.png" alt="Tracksy logo" width={200} height={60} className="h-12 w-auto" />
          </div>
          <h1 className="mt-6 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-[#F2F3F5]">SUIVEZ VOTRE TEMPS.</span>
            <span className="block text-[#D5FF3F] drop-shadow-[0_0_20px_rgba(213,255,63,0.35)]">SIMPLIFIEZ</span>
            <span className="block text-[#F2F3F5]">VOTRE BUSINESS.</span>
          </h1>
          <p className="mt-6 text-center text-xl text-[#A1A5B0] max-w-3xl mx-auto leading-relaxed mb-8">
            Fini de jongler entre Toggl, QuickBooks et Excel. Tracksy combine tout en un seul outil : 
            suivi du temps, gestion de projets, facturation automatique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild className="rounded-full bg-[#D5FF3F] px-8 py-3 text-[#0B0E12] hover:bg-[#B9E832] font-semibold text-lg">
              <a href="#contact" rel="noopener noreferrer">
                Commencer gratuitement
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-[#1E232C] bg-transparent px-8 py-3 text-[#F2F3F5] hover:bg-[#1A1F27] hover:text-[#F2F3F5] text-lg">
              <a href="#demo" rel="noopener noreferrer">
                Voir la démo
              </a>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[#A1A5B0] text-sm">
            <span>✓ 14 jours d'essai gratuit</span>
            <span>✓ Aucune carte requise</span>
            <span>✓ Setup en 2 minutes</span>
          </div>

          {/* Tracksy App Preview - Real Demo Video */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="relative rounded-xl bg-[#0B0E12] border border-[#1E232C] overflow-hidden shadow-2xl">
              <div className="aspect-video relative min-h-[400px]">
                <video
                  className="absolute inset-0 h-full w-full object-contain rounded-xl bg-[#141820]"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23141820'/%3E%3C/svg%3E"
                >
                  <source src="https://www.tracksy.me/tracksy.me.mp4" type="video/mp4" />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#141820] to-[#0B0E12]">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-[#D5FF3F] rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-[#0B0E12]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-[#A1A5B0] text-xl font-medium">Votre navigateur ne supporte pas la vidéo</p>
                    </div>
                  </div>
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Component removed - using new Tracksy preview instead

// Tracksy features data
const tracksyFeatures = [
  {
    title: "Time Tracking",
    sub: "Démarre/arrête tes sessions avec un clic.",
    tone: "tracking",
    gradient: "from-[#0B0E12] via-[#141820] to-[#1A1F27]",
  },
  {
    title: "Projects & Clients",
    sub: "Organise ton travail facilement.",
    tone: "projects",
    gradient: "from-[#0B0E12] via-[#141820] to-[#1A1F27]",
  },
  {
    title: "Billing & Reports",
    sub: "Génère tes factures automatiquement.",
    tone: "billing",
    gradient: "from-[#0B0E12] via-[#141820] to-[#1A1F27]",
  },
]
