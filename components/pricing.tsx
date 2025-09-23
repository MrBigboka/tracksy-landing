"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

type Feature = { text: string; muted?: boolean }

function FeatureItem({ text, muted = false }: Feature) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-white/60 flex-shrink-0" />
      <span className={`text-sm ${muted ? "text-white/40" : "text-white/80"}`}>{text}</span>
    </li>
  )
}

type Currency = "INR" | "CAD"

const PRICES: Record<Currency, { trial: string; pro: string; business: string; save: string }> = {
  INR: {
    trial: "₹0",
    pro: "₹750",
    business: "₹3,900",
    save: "14 jours gratuits",
  },
  CAD: {
    trial: "0 CAD",
    pro: "9 USD",
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

export function Pricing() {
  const { t } = useTranslation()
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
      const fallbacks: Record<string, any> = {
        'pricing.badge': 'Pricing',
        'pricing.title': 'Simple. Transparent. Effective.',
        'pricing.subtitle': 'No hidden fees. Start free and scale as you grow.',
        'pricing.free.title': 'Free',
        'pricing.free.price': '$0',
        'pricing.free.period': 'forever',
        'pricing.free.cta': 'Get started',
        'pricing.free.features': ['1 client', '3 projects', 'Basic time tracking', 'Basic reports', 'Email support'],
        'pricing.pro.title': 'Pro',
        'pricing.pro.price': '$9 USD',
        'pricing.pro.period': '/month',
        'pricing.pro.popular': 'Popular',
        'pricing.pro.cta': 'Start free trial',
        'pricing.pro.features': ['Everything in Free', 'Unlimited clients & projects', 'Advanced reports', 'Custom invoicing', 'Priority support'],
        'pricing.business.title': 'Business',
        'pricing.business.price': 'Custom',
        'pricing.business.period': '',
        'pricing.business.cta': 'Contact sales',
        'pricing.business.features': ['Everything in Pro', 'Team collaboration', 'Advanced integrations', 'Dedicated support', 'Custom training']
      }
      return fallbacks[key] || key
    }
    return t(key)
  }

  return (
    <section id="pricing" className="text-white">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            {safeT('pricing.title')}
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            {safeT('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Free Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-8 h-full">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {safeT('pricing.free.title')}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">$0</span>
                    <span className="text-white/60 text-sm">forever</span>
                  </div>
                </div>
                
                <Button 
                  asChild 
                  variant="outline"
                  className="w-full mb-8 bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/40"
                >
                  <Link href="/signup?plan=free">Get started</Link>
                </Button>

                <ul className="space-y-4">
                  {(Array.isArray(safeT('pricing.free.features')) ? safeT('pricing.free.features') as string[] : []).map((feature: string, i: number) => (
                    <FeatureItem key={i} text={feature} />
                  ))}
                </ul>
              </div>
            </div>

            {/* Pro Plan - Featured */}
            <div className="relative group scale-105 lg:scale-110">
              <div className="absolute inset-0 bg-gradient-to-b from-[#C8D64F]/10 to-[#C8D64F]/5 rounded-2xl"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-[#C8D64F] text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </div>
              </div>
              <div className="relative bg-black/60 backdrop-blur-xl border-2 border-[#C8D64F]/30 rounded-2xl p-8 h-full">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {safeT('pricing.pro.title')}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">$9</span>
                    <span className="text-white/60 text-sm">USD /month</span>
                  </div>
                </div>
                
                <Button 
                  asChild
                  className="w-full mb-8 bg-[#C8D64F] text-black hover:bg-[#A8B940] font-semibold"
                >
                  <Link href="/signup?plan=pro">Start free trial</Link>
                </Button>

                <ul className="space-y-4">
                  {(Array.isArray(safeT('pricing.pro.features')) ? safeT('pricing.pro.features') as string[] : []).map((feature: string, i: number) => (
                    <FeatureItem key={i} text={feature} />
                  ))}
                </ul>
              </div>
            </div>

            {/* Business Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-8 h-full">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {safeT('pricing.business.title')}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-white">Custom</span>
                  </div>
                </div>
                
                <Button 
                  asChild 
                  variant="outline"
                  className="w-full mb-8 bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/40"
                >
                  <Link href="/contact">Contact sales</Link>
                </Button>

                <ul className="space-y-4">
                  {(Array.isArray(safeT('pricing.business.features')) ? safeT('pricing.business.features') as string[] : []).map((feature: string, i: number) => (
                    <FeatureItem key={i} text={feature} />
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/60 mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <Button 
            asChild
            variant="outline"
            className="bg-transparent border-white/20 text-white hover:bg-white/5"
          >
            <Link href="#faq">View FAQ</Link>
          </Button>
        </div>

      </div>
    </section>
  )
}