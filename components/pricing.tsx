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
    const fallbacks: Record<string, any> = {
      'pricing.badge': 'Pricing',
        'pricing.title': 'Choose Your Plan',
        'pricing.subtitle': 'Start free or unlock full features. No hidden fees.',
        'pricing.free.category': 'Starter',
        'pricing.free.categoryDesc': 'For freelancers getting started',
        'pricing.free.title': 'Free',
        'pricing.free.price': '$0',
        'pricing.free.period': 'forever',
        'pricing.free.cta': 'Start for free',
        'pricing.free.features': ['1 client', '3 projects', 'Basic time tracking', 'Basic reports', 'Email support'],
        'pricing.pro.category': 'Professional',
        'pricing.pro.categoryDesc': 'For established freelancers',
        'pricing.pro.title': 'Pro',
        'pricing.pro.price': '$5',
        'pricing.pro.period': '/month',
        'pricing.pro.popular': 'Popular',
        'pricing.pro.cta': 'Start free trial',
        'pricing.pro.features': ['Everything in Free', 'Unlimited clients & projects', 'Advanced reports', 'Custom invoicing', 'Priority support'],
        'pricing.lifetime.category': 'Premium',
        'pricing.lifetime.categoryDesc': 'Best long-term value',
        'pricing.lifetime.title': 'Lifetime Access',
        'pricing.lifetime.price': '$29.99',
        'pricing.lifetime.period': 'one-time',
        'pricing.lifetime.bestValue': 'BEST VALUE',
        'pricing.lifetime.cta': 'Get Lifetime Access',
        'pricing.lifetime.feature1': 'Everything in Pro',
        'pricing.lifetime.feature2': 'Pay once, use forever',
        'pricing.lifetime.feature3': 'All future updates included',
        'pricing.business.category': 'Enterprise',
        'pricing.business.categoryDesc': 'For teams and businesses',
        'pricing.business.title': 'Business',
        'pricing.business.price': 'Custom pricing',
        'pricing.business.cta': 'Contact us',
        'pricing.business.features': ['Everything in Pro', 'Team collaboration', 'Advanced integrations', 'Dedicated support', 'Custom training'],
        'pricing.business.sectionTitle': 'Business & Teams',
        'pricing.business.sectionDescription': 'Need collaborative features for your team? We offer custom solutions for businesses with advanced needs.',
        'pricing.trialInfo': 'All plans include a 14-day free trial. No credit card required.'
    }
    
    if (!mounted) {
      return fallbacks[key] || key
    }
    
    const translation = t(key)
    return translation || fallbacks[key] || key
  }

  return (
    <section id="pricing" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #D5FF3F 1px, transparent 1px),
            linear-gradient(to bottom, #D5FF3F 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="max-w-7xl mx-auto relative">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 px-4">
            {safeT('pricing.title')}
          </h2>
          <p className="text-sm sm:text-base text-white/50 max-w-xl mx-auto px-4">
            {safeT('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
            {/* Free Plan */}
            <div className="relative group hover:scale-105 transition-all duration-300">
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300 flex flex-col shadow-xl">
                <div className="mb-6">
                  <div className="mb-4 pb-4 border-b border-white/10">
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">{safeT('pricing.free.category')}</p>
                    <p className="text-sm text-white/60">{safeT('pricing.free.categoryDesc')}</p>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {safeT('pricing.free.title')}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{safeT('pricing.free.price')}</span>
                    <span className="text-white/60 text-sm">{safeT('pricing.free.period')}</span>
                  </div>
                </div>
                
                <Button 
                  asChild 
                  variant="outline"
                  className="w-full mb-6 bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/40 rounded-full"
                >
                  <a href="https://app.tracksy.me" rel="noopener noreferrer">{safeT('pricing.free.cta')}</a>
                </Button>

                <ul className="space-y-3 flex-1">
                  {(Array.isArray(safeT('pricing.free.features')) ? safeT('pricing.free.features') as string[] : []).map((feature: string, i: number) => (
                    <FeatureItem key={i} text={feature} />
                  ))}
                </ul>
              </div>
            </div>

            {/* Pro Plan - Monthly */}
            <div className="relative group hover:scale-105 transition-all duration-300">
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300 flex flex-col shadow-xl">
                <div className="mb-6">
                  <div className="mb-4 pb-4 border-b border-white/10">
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">{safeT('pricing.pro.category')}</p>
                    <p className="text-sm text-white/60">{safeT('pricing.pro.categoryDesc')}</p>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {safeT('pricing.pro.title')}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{safeT('pricing.pro.price')}</span>
                    <span className="text-white/60 text-sm">{safeT('pricing.pro.period')}</span>
                  </div>
                </div>
                
                <Button 
                  asChild
                  className="w-full mb-6 bg-[#C8D64F] text-black hover:bg-[#A8B940] font-semibold rounded-full"
                >
                  <a href="https://app.tracksy.me" rel="noopener noreferrer">{safeT('pricing.pro.cta')}</a>
                </Button>

                <ul className="space-y-3 flex-1">
                  {(Array.isArray(safeT('pricing.pro.features')) ? safeT('pricing.pro.features') as string[] : []).map((feature: string, i: number) => (
                    <FeatureItem key={i} text={feature} />
                  ))}
                </ul>
              </div>
            </div>

            {/* Lifetime Plan - Featured */}
            <div className="relative group hover:scale-105 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-[#D5FF3F] text-black text-xs font-semibold px-3 py-1 rounded-full">
                  {safeT('pricing.lifetime.bestValue')}
                </div>
              </div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full group-hover:border-[#D5FF3F]/30 group-hover:bg-white/10 transition-all duration-300 flex flex-col shadow-xl">
                <div className="mb-6">
                  <div className="mb-4 pb-4 border-b border-white/10">
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">{safeT('pricing.lifetime.category')}</p>
                    <p className="text-sm text-white/60">{safeT('pricing.lifetime.categoryDesc')}</p>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {safeT('pricing.lifetime.title')}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{safeT('pricing.lifetime.price')}</span>
                    <span className="text-white/60 text-sm">{safeT('pricing.lifetime.period')}</span>
                  </div>
                </div>
                
                <Button 
                  asChild
                  className="w-full mb-6 bg-[#D5FF3F] text-black hover:bg-[#C8D64F] font-semibold rounded-full"
                >
                  <a href="https://app.tracksy.me" rel="noopener noreferrer">{safeT('pricing.lifetime.cta')}</a>
                </Button>

                <ul className="space-y-3 flex-1">
                  <FeatureItem text={safeT('pricing.lifetime.feature1') as string} />
                  <FeatureItem text={safeT('pricing.lifetime.feature2') as string} />
                  <FeatureItem text={safeT('pricing.lifetime.feature3') as string} />
                </ul>
              </div>
            </div>

            {/* Business Plan - 4th column */}
            <div className="relative group hover:scale-105 transition-all duration-300">
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300 flex flex-col shadow-xl">
                <div className="mb-6">
                  <div className="mb-4 pb-4 border-b border-white/10">
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">{safeT('pricing.business.category')}</p>
                    <p className="text-sm text-white/60">{safeT('pricing.business.categoryDesc')}</p>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {safeT('pricing.business.sectionTitle')}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-white">{safeT('pricing.business.price')}</span>
                  </div>
                </div>
                
                <Button 
                  asChild 
                  variant="outline"
                  className="w-full mb-6 bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/40 rounded-full"
                >
                  <a href="mailto:support@tracksy.me">{safeT('pricing.business.cta')}</a>
                </Button>

                <div className="text-sm text-white/60 text-left flex-1">
                  <p>{safeT('pricing.business.sectionDescription')}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom info */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">
            {safeT('pricing.trialInfo')}
          </p>
        </div>

      </div>
    </section>
  )
}