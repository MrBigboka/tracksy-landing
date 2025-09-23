"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

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
  const { t } = useTranslation()
  const [openPlan, setOpenPlan] = useState<null | "Trial" | "Pro" | "Business">(null)
  const [currency, setCurrency] = useState<Currency>("CAD")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
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

  // Helper function to safely get translations
  const safeT = (key: string): string | string[] => {
    if (!mounted) {
      // Return fallback values during SSR
      const fallbacks: Record<string, any> = {
        'pricing.badge': 'Our Pricing',
        'pricing.title': 'Simple. Transparent. Effective.',
        'pricing.subtitle': 'No hidden fees. Start free and scale as you grow.',
        'pricing.mainCta': 'Start for free',
        'pricing.free.title': 'Free',
        'pricing.free.price': '$0',
        'pricing.free.period': 'forever',
        'pricing.free.cta': 'Start for free',
        'pricing.free.features': ['1 client', '3 projects', 'Timer and time tracking', 'Basic reports', 'PDF export (with watermark)'],
        'pricing.pro.title': 'Pro',
        'pricing.pro.price': '$9 USD',
        'pricing.pro.period': '/month',
        'pricing.pro.popular': 'POPULAR',
        'pricing.pro.trial': '14-day free trial',
        'pricing.pro.cta': 'Start free trial',
        'pricing.pro.features': ['Everything in Free +', 'Unlimited clients & projects', 'Advanced reports and analytics', 'Custom invoice templates', 'Clean PDF/CSV export', 'Priority email support'],
        'pricing.business.title': 'Business',
        'pricing.business.price': 'Custom pricing',
        'pricing.business.period': '',
        'pricing.business.cta': 'Contact us',
        'pricing.business.features': ['Everything in Pro +', 'Team collaboration', 'Advanced integrations', 'Dedicated phone support', 'Custom training']
      }
      return fallbacks[key] || key
    }
    return t(key)
  }

  return (
    <section id="pricing" className="text-white" itemScope itemType="https://schema.org/PriceSpecification">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
            style={{ backgroundColor: "rgba(213,255,63,0.12)", color: ACCENT }}
          >
            {safeT('pricing.badge')}
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-[#F2F3F5] sm:text-5xl" itemProp="name">
            {safeT('pricing.title')}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-[#A1A5B0]" itemProp="description">
            {safeT('pricing.subtitle')}
          </p>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full px-8 py-3 text-[#0B0E12] hover:brightness-95 font-semibold"
              style={{ backgroundColor: ACCENT }}
            >
              <Link href="#contact" target="_blank">
                {safeT('pricing.mainCta')}
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Free */}
          <Card
            className="relative overflow-hidden rounded-2xl bg-[#141820] border border-[#1E232C] shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-[#F2F3F5]" itemProp="name">
                {safeT('pricing.free.title')}
              </div>
              <div className="flex items-end gap-2 text-[#F2F3F5]">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {safeT('pricing.free.price')}
                </div>
                <span className="pb-0.5 text-[11px] text-[#A1A5B0]">{safeT('pricing.free.period')}</span>
                <meta itemProp="priceCurrency" content="USD" />
              </div>
              <div className="flex gap-2">
                <Button
                  asChild
                  className="w-full rounded-full px-4 py-2 text-sm font-medium border border-[#1E232C] text-[#F2F3F5] hover:bg-[#1A1F27] transition-colors"
                >
                  <Link href="/signup?plan=free">{safeT('pricing.free.cta')}</Link>
                </Button>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {(Array.isArray(safeT('pricing.free.features')) ? safeT('pricing.free.features') as string[] : []).map((f: string, i: number) => (
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
              {safeT('pricing.pro.popular')}
            </div>
            <div
              className="absolute right-4 top-11 rounded-full px-2 py-0.5 text-[10px] mt-6"
              style={{ backgroundColor: "#3DDC97", color: "#0B0E12" }}
            >
              {safeT('pricing.pro.trial')}
            </div>
            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-[#F2F3F5]" itemProp="name">
                {safeT('pricing.pro.title')}
              </div>
              <div className="flex items-end gap-2 text-[#F2F3F5]">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {safeT('pricing.pro.price')}
                </div>
                <span className="pb-0.5 text-[11px] text-[#A1A5B0]">{safeT('pricing.pro.period')}</span>
                <meta itemProp="priceCurrency" content={currency} />
              </div>

              <div className="flex gap-2">
                <Button
                  asChild
                  className="w-full rounded-full px-4 py-2 text-sm font-medium text-[#0B0E12] shadow transition-[box-shadow,transform,filter] active:translate-y-[1px]"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Link href="/signup?plan=pro">{safeT('pricing.pro.cta')}</Link>
                </Button>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {(Array.isArray(safeT('pricing.pro.features')) ? safeT('pricing.pro.features') as string[] : []).map((f: string, i: number) => (
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
                {safeT('pricing.business.title')}
              </div>
              <div className="flex items-end gap-2 text-[#F2F3F5]">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {safeT('pricing.business.price')}
                </div>
                <span className="pb-0.5 text-[11px] text-[#A1A5B0]">{safeT('pricing.business.period')}</span>
                <meta itemProp="priceCurrency" content={currency} />
              </div>
              <div className="flex gap-2">
                <Button
                  asChild
                  className="w-full rounded-full px-4 py-2 text-sm font-medium border border-[#1E232C] text-[#F2F3F5] hover:bg-[#1A1F27] transition-colors"
                >
                  <Link href="/contact">{safeT('pricing.business.cta')}</Link>
                </Button>
              </div>
            </CardHeader>

            <CardContent className="relative pt-0">
              <ul className="grid gap-2" itemProp="description">
                {(Array.isArray(safeT('pricing.business.features')) ? safeT('pricing.business.features') as string[] : []).map((f: string, i: number) => (
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
