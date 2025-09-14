"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { ExamplesDialog } from "./examples-dialog"

type Feature = { text: string; muted?: boolean }

const ACCENT = "#D5FF3F"

function FeatureItem({ text, muted = false }: Feature) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
      <span className={`text-sm ${muted ? "text-neutral-500" : "text-neutral-200"}`}>{text}</span>
    </li>
  )
}

type Currency = "INR" | "CAD"

const PRICES: Record<Currency, { trial: string; pro: string; business: string; save: string }> = {
  INR: {
    trial: "₹0",
    pro: "₹1,500",
    business: "₹3,900",
    save: "14 jours gratuits",
  },
  CAD: {
    trial: "0 CAD",
    pro: "19 CAD",
    business: "49 CAD",
    save: "14 jours gratuits",
  },
}

function guessLocalCurrency(): Currency {
  const lang = typeof navigator !== "undefined" ? navigator.language : ""
  const tz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : ""
  if (/-(IN|PK|BD)\b/i.test(lang) || /(Kolkata|Karachi|Dhaka)/i.test(tz || "")) return "INR"
  return "CAD"
}

// Startup demo videos
const startupVideos = [
  "ysz5S6PUM-U",
  "aqz-KE-bpKQ",
  "ScMzIvxBSi4",
  "dQw4w9WgXcQ",
  "VYOjWnS4cMY",
  "9bZkp7q19f0",
  "3JZ_D3ELwOQ",
  "e-ORhEE9VVg",
  "fJ9rUzIMcZQ",
]

// Pro demo videos
const proVideos = [
  "ASV2myPRfKA",
  "eTfS2lqwf6A",
  "KALbYHmGV4I",
  "Go0AA9hZ4as",
  "sB7RZ9QCOAg",
  "TK2WboJOJaw",
  "5Xq7UdXXOxI",
  "kMjWCidQSK0",
  "RKKdQvwKOhQ",
]

// Premium demo videos
const premiumVideos = [
  "v2AC41dglnM",
  "pRpeEdMmmQ0",
  "3AtDnEC4zak",
  "JRfuAukYTKg",
  "LsoLEjrDogU",
  "RB-RcX5DS5A",
  "hTWKbfoikeg",
  "YQHsXMglC9A",
  "09R8_2nJtjg",
]

export function Pricing() {
  const [openPlan, setOpenPlan] = useState<null | "Trial" | "Pro" | "Business">(null)
  const [currency, setCurrency] = useState<Currency>("CAD")

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch("/api/geo", { cache: "no-store" })
        if (!res.ok) throw new Error("geo failed")
        const data = await res.json()
        if (!cancelled) setCurrency(data?.currency === "INR" ? "INR" : "CAD")
      } catch {
        if (!cancelled) setCurrency(guessLocalCurrency())
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="pricing" className="text-white" itemScope itemType="https://schema.org/PriceSpecification">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
            style={{ backgroundColor: "rgba(213,255,63,0.12)", color: ACCENT }}
          >
            Nos tarifs
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-[#F2F3F5] sm:text-5xl" itemProp="name">
            Simple. Transparent. Efficace.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-[#A1A5B0]" itemProp="description">
            Aucun frais cachés. Commencez gratuitement et évoluez selon vos besoins.
          </p>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full px-8 py-3 text-[#0B0E12] hover:brightness-95 font-semibold"
              style={{ backgroundColor: ACCENT }}
            >
              <Link href="#contact" target="_blank">
                Commencer gratuitement
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Free Trial */}
          <Card
            className="relative overflow-hidden rounded-2xl bg-[#141820] border border-[#1E232C] shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div
              className="absolute right-4 top-11 rounded-full px-2 py-0.5 text-[10px]"
              style={{ backgroundColor: "#3DDC97", color: "#0B0E12" }}
            >
              {PRICES[currency].save}
            </div>

            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-[#F2F3F5]" itemProp="name">
                Essai gratuit
              </div>
              <div className="flex items-end gap-2 text-[#F2F3F5]">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {PRICES[currency].trial}
                </div>
                <span className="pb-0.5 text-[11px] text-[#A1A5B0]">pendant 14 jours</span>
                <meta itemProp="priceCurrency" content={currency} />
              </div>
              <div className="flex gap-2">
                <Button
                  asChild
                  className="w-full rounded-full px-4 py-2 text-sm font-medium text-[#0B0E12] shadow transition-[box-shadow,transform,filter] active:translate-y-[1px]"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Link href="/signup?plan=trial">Commencer maintenant</Link>
                </Button>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Toutes les fonctionnalités",
                  "Projets et clients illimités",
                  "Timer et suivi du temps",
                  "Génération de factures",
                  "Rapports de base",
                  "Support par email",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          {/* Pro */}
          <Card
            className="relative overflow-hidden rounded-2xl bg-[#141820] border-2 border-[#D5FF3F] shadow-[0_12px_40px_rgba(213,255,63,0.2)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div
              className="absolute right-4 top-4 rounded-full px-2 py-0.5 text-[10px] font-semibold"
              style={{ backgroundColor: ACCENT, color: "#0B0E12" }}
            >
              POPULAIRE
            </div>
            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-[#F2F3F5]" itemProp="name">
                Pro
              </div>
              <div className="flex items-end gap-2 text-[#F2F3F5]">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {PRICES[currency].pro}
                </div>
                <span className="pb-0.5 text-[11px] text-[#A1A5B0]">/mois</span>
                <meta itemProp="priceCurrency" content={currency} />
              </div>

              <div className="flex gap-2">
                <Button
                  asChild
                  className="w-full rounded-full px-4 py-2 text-sm font-medium text-[#0B0E12] shadow transition-[box-shadow,transform,filter] active:translate-y-[1px]"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Link href="/signup?plan=pro">Choisir Pro</Link>
                </Button>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Tout de l'essai gratuit +",
                  "Rapports avancés et analytics",
                  "Intégration fiscale québécoise",
                  "Templates de factures personnalisés",
                  "Export PDF/CSV avancé",
                  "Support prioritaire",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          {/* Business */}
          <Card
            className="relative overflow-hidden rounded-2xl bg-[#141820] border border-[#1E232C] shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <CardHeader className="relative space-y-3 pb-4">
              <div className="text-sm font-semibold text-[#F2F3F5]" itemProp="name">
                Business
              </div>
              <div className="flex items-end gap-2 text-[#F2F3F5]">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {PRICES[currency].business}
                </div>
                <span className="pb-0.5 text-[11px] text-[#A1A5B0]">/mois</span>
                <meta itemProp="priceCurrency" content={currency} />
              </div>
              <div className="flex gap-2">
                <Button
                  asChild
                  className="w-full rounded-full px-4 py-2 text-sm font-medium border border-[#1E232C] text-[#F2F3F5] hover:bg-[#1A1F27] transition-colors"
                >
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </CardHeader>

            <CardContent className="relative pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Tout du plan Pro +",
                  "Gestion d'équipe (jusqu'à 10 membres)",
                  "Tableaux de bord collaboratifs",
                  "API et intégrations avancées",
                  "Support téléphonique dédié",
                  "Onboarding personnalisé",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
                    <span className="text-sm text-[#F2F3F5]">{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>
        </div>
      </div>

      {/* Note: Modals removed for Tracksy - no video examples needed */}
    </section>
  )
}
