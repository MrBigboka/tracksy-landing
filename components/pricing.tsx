"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

type Feature = { text: string; muted?: boolean; excluded?: boolean }

function FeatureItem({ text, muted = false, excluded = false }: Feature) {
  return (
    <li className="flex items-start gap-3">
      {excluded ? (
        <XCircle className="mt-0.5 h-4 w-4 text-white/30 flex-shrink-0" />
      ) : (
        <CheckCircle2 className="mt-0.5 h-4 w-4 text-white/60 flex-shrink-0" />
      )}
      <span className={`text-sm ${excluded ? "text-white/30 line-through" : muted ? "text-white/40" : "text-white/80"}`}>{text}</span>
    </li>
  )
}

export function Pricing() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Fallback translations
  const fallbacks: Record<string, any> = {
    'pricing.badge': 'Pricing',
    'pricing.title': 'Choose Your Plan',
    'pricing.subtitle': 'Start free, then unlock full features with Pro. 14-day free trial included.',
    // Free Plan
    'pricing.free.category': 'Starter',
    'pricing.free.categoryDesc': 'For freelancers getting started',
    'pricing.free.title': 'Free',
    'pricing.free.price': '$0',
    'pricing.free.period': 'forever',
    'pricing.free.cta': 'Start for free',
    'pricing.free.feature1': '1 client max',
    'pricing.free.feature2': '2 projects max',
    'pricing.free.feature3': '5 sessions/day',
    'pricing.free.feature4': 'PDF with watermark',
    'pricing.free.feature5': 'CSV export',
    // Pro Monthly
    'pricing.proMonthly.category': 'Professional',
    'pricing.proMonthly.categoryDesc': 'Full access, billed monthly',
    'pricing.proMonthly.title': 'Pro Monthly',
    'pricing.proMonthly.price': '$7.99',
    'pricing.proMonthly.period': '/month',
    'pricing.proMonthly.cta': 'Start 14-day trial',
    'pricing.proMonthly.feature1': 'Unlimited clients',
    'pricing.proMonthly.feature2': 'Unlimited projects',
    'pricing.proMonthly.feature3': 'Unlimited sessions',
    'pricing.proMonthly.feature4': 'PDF without watermark',
    'pricing.proMonthly.feature5': 'CSV export included',
    'pricing.proMonthly.feature6': 'Priority support',
    // Pro Annual
    'pricing.proAnnual.category': 'Professional',
    'pricing.proAnnual.categoryDesc': 'Best value, billed yearly',
    'pricing.proAnnual.title': 'Pro Annual',
    'pricing.proAnnual.price': '$6.58',
    'pricing.proAnnual.period': '/month',
    'pricing.proAnnual.save': 'Save 30%',
    'pricing.proAnnual.billedAs': 'Billed as $79/year',
    'pricing.proAnnual.cta': 'Start 14-day trial',
    'pricing.proAnnual.feature1': 'Everything in Pro Monthly',
    'pricing.proAnnual.feature2': 'Save 30% vs monthly',
    'pricing.proAnnual.feature3': 'All future updates',
    // Lifetime
    'pricing.lifetime.category': 'Premium',
    'pricing.lifetime.categoryDesc': 'Pay once, use forever',
    'pricing.lifetime.title': 'Lifetime',
    'pricing.lifetime.price': '$39.99',
    'pricing.lifetime.period': 'one-time',
    'pricing.lifetime.bestValue': 'LIMITED OFFER',
    'pricing.lifetime.cta': 'Get Lifetime Access',
    'pricing.lifetime.feature1': 'Everything in Pro',
    'pricing.lifetime.feature2': 'Pay once, use forever',
    'pricing.lifetime.feature3': 'All future updates included',
    'pricing.lifetime.feature4': 'Priority support forever',
    'pricing.trialInfo': '14-day free trial on all Pro plans. No credit card required to start.'
  }

  // Helper function to safely get translations
  const safeT = (key: string): string | string[] => {
    const translation = t(key)
    // If translation returns the key itself or is empty, use fallback
    if (!translation || translation === key || translation.startsWith('pricing.')) {
      return fallbacks[key] || key
    }
    return translation
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
                  <FeatureItem text={safeT('pricing.free.feature1') as string} muted />
                  <FeatureItem text={safeT('pricing.free.feature2') as string} muted />
                  <FeatureItem text={safeT('pricing.free.feature3') as string} muted />
                  <FeatureItem text={safeT('pricing.free.feature4') as string} muted />
                  <FeatureItem text={safeT('pricing.free.feature5') as string} excluded />
                </ul>
              </div>
            </div>

            {/* Pro Monthly */}
            <div className="relative group hover:scale-105 transition-all duration-300">
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300 flex flex-col shadow-xl">
                <div className="mb-6">
                  <div className="mb-4 pb-4 border-b border-white/10">
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">{safeT('pricing.proMonthly.category')}</p>
                    <p className="text-sm text-white/60">{safeT('pricing.proMonthly.categoryDesc')}</p>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {safeT('pricing.proMonthly.title')}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{safeT('pricing.proMonthly.price')}</span>
                    <span className="text-white/60 text-sm">{safeT('pricing.proMonthly.period')}</span>
                  </div>
                </div>
                
                <Button 
                  asChild
                  className="w-full mb-6 bg-white/10 text-white hover:bg-white/20 font-semibold rounded-full border border-white/20"
                >
                  <a href="https://app.tracksy.me" rel="noopener noreferrer">{safeT('pricing.proMonthly.cta')}</a>
                </Button>

                <ul className="space-y-3 flex-1">
                  <FeatureItem text={safeT('pricing.proMonthly.feature1') as string} />
                  <FeatureItem text={safeT('pricing.proMonthly.feature2') as string} />
                  <FeatureItem text={safeT('pricing.proMonthly.feature3') as string} />
                  <FeatureItem text={safeT('pricing.proMonthly.feature4') as string} />
                  <FeatureItem text={safeT('pricing.proMonthly.feature5') as string} />
                  <FeatureItem text={safeT('pricing.proMonthly.feature6') as string} />
                </ul>
              </div>
            </div>

            {/* Pro Annual - Featured */}
            <div className="relative group hover:scale-105 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-[#D5FF3F] text-black text-xs font-semibold px-3 py-1 rounded-full">
                  {safeT('pricing.proAnnual.save')}
                </div>
              </div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-[#D5FF3F]/30 rounded-2xl p-6 h-full group-hover:border-[#D5FF3F]/50 group-hover:bg-white/10 transition-all duration-300 flex flex-col shadow-xl">
                <div className="mb-6">
                  <div className="mb-4 pb-4 border-b border-white/10">
                    <p className="text-xs font-semibold text-[#D5FF3F] uppercase tracking-wider mb-1">{safeT('pricing.proAnnual.category')}</p>
                    <p className="text-sm text-white/60">{safeT('pricing.proAnnual.categoryDesc')}</p>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {safeT('pricing.proAnnual.title')}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{safeT('pricing.proAnnual.price')}</span>
                    <span className="text-white/60 text-sm">{safeT('pricing.proAnnual.period')}</span>
                  </div>
                  <p className="text-xs text-white/40 mt-1">{safeT('pricing.proAnnual.billedAs')}</p>
                </div>
                
                <Button 
                  asChild
                  className="w-full mb-6 bg-[#D5FF3F] text-black hover:bg-[#C8D64F] font-semibold rounded-full"
                >
                  <a href="https://app.tracksy.me" rel="noopener noreferrer">{safeT('pricing.proAnnual.cta')}</a>
                </Button>

                <ul className="space-y-3 flex-1">
                  <FeatureItem text={safeT('pricing.proAnnual.feature1') as string} />
                  <FeatureItem text={safeT('pricing.proAnnual.feature2') as string} />
                  <FeatureItem text={safeT('pricing.proAnnual.feature3') as string} />
                </ul>
              </div>
            </div>

            {/* Lifetime */}
            <div className="relative group hover:scale-105 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {safeT('pricing.lifetime.bestValue')}
                </div>
              </div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full group-hover:border-amber-500/30 group-hover:bg-white/10 transition-all duration-300 flex flex-col shadow-xl">
                <div className="mb-6">
                  <div className="mb-4 pb-4 border-b border-white/10">
                    <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">{safeT('pricing.lifetime.category')}</p>
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
                  className="w-full mb-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 font-semibold rounded-full"
                >
                  <a href="https://app.tracksy.me" rel="noopener noreferrer">{safeT('pricing.lifetime.cta')}</a>
                </Button>

                <ul className="space-y-3 flex-1">
                  <FeatureItem text={safeT('pricing.lifetime.feature1') as string} />
                  <FeatureItem text={safeT('pricing.lifetime.feature2') as string} />
                  <FeatureItem text={safeT('pricing.lifetime.feature3') as string} />
                  <FeatureItem text={safeT('pricing.lifetime.feature4') as string} />
                </ul>
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