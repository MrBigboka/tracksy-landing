"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Twitter, Youtube, MessageCircle } from "lucide-react"
import LazyVideo from "./lazy-video"
import Image from "next/image"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "Simplifiez votre gestion freelance avec Tracksy. Suivi du temps, facturation et rapports en un seul outil.",
  copyright: "© 2025 — Tracksy",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("tracksy-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white">
      {/* Contact CTA */}
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-full bg-[#D5FF3F] px-6 py-2 text-sm font-medium text-[#0B0E12] shadow-[0_0_20px_rgba(213,255,63,0.35)] hover:bg-[#B9E832]"
          >
            <a href="#contact" target="_blank" rel="noopener noreferrer">
              Commencer gratuitement
            </a>
          </Button>
        </div>
      </div>

      {/* Download the app */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-[#D5FF3F]">PRÊT À COMMENCER?</p>
              <h3 className="text-2xl font-bold leading-tight text-[#F2F3F5] sm:text-3xl">
                Rejoignez des milliers de freelances qui font confiance à Tracksy
              </h3>
              <p className="mt-2 max-w-prose text-sm text-[#A1A5B0]">
                Commencez votre essai gratuit de 14 jours dès aujourd'hui. Aucune carte de crédit requise.
                Setup en 2 minutes.
              </p>
            </div>

            {/* Right mockup */}
            <div className="mx-auto w-full max-w-[320px]">
              <div className="relative rounded-[28px] liquid-glass p-2 shadow-2xl">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
                  {/* Lazy-loaded video fills the screen */}
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#141820] to-[#0B0E12] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#D5FF3F] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-[#0B0E12]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <p className="text-[#A1A5B0] text-sm">App mobile bientôt disponible</p>
                    </div>
                  </div>
                  {/* On-screen content */}
                  <div className="relative p-3">
                    <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="space-y-1 px-1">
                      <div className="text-2xl font-extrabold text-[#D5FF3F]">Tracksy Mobile</div>
                      <p className="text-xs text-[#A1A5B0]">Suivez votre temps partout</p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#D5FF3F]">
                        Bientôt
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Image src="/Tracksy_logo.png" alt="Tracksy logo" width={120} height={40} className="h-8 w-auto" />
              </div>
              <p className="max-w-sm text-sm text-neutral-400">{content.tagline}</p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Navigation</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {["Accueil", "Fonctionnalités", "Tarifs", "FAQ", "Blog", "Support"].map((item, index) => {
                    const hrefs = ["#", "#features", "#pricing", "#faq", "#blog", "#support"];
                    return (
                      <li key={item}>
                        <Link href={hrefs[index]} className="hover:text-[#D5FF3F]">
                          {item}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Social media</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Twitter className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://twitter.com/tracksy_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D5FF3F]"
                      aria-label="Follow Tracksy on Twitter"
                    >
                      X/Twitter
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Youtube className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://www.youtube.com/@tracksy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D5FF3F]"
                      aria-label="Subscribe to Tracksy on YouTube"
                    >
                      YouTube
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://instagram.com/tracksy_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D5FF3F]"
                      aria-label="Follow Tracksy on Instagram"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://threads.com/tracksy_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D5FF3F]"
                      aria-label="Follow Tracksy on Threads"
                    >
                      Threads
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-[#D5FF3F]">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="hover:text-[#D5FF3F]">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
