"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Twitter, Youtube } from "lucide-react"
import LazyVideo from "./lazy-video"
import Image from "next/image"
import { useTranslation } from "@/hooks/use-translation"

export function AppverseFooter() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Helper function to safely get translations
  const safeT = (key: string): string => {
    if (!mounted) {
      const fallbacks: Record<string, string> = {
        'mobile.badge': 'READY TO START?',
        'mobile.title': 'Join thousands of freelancers who trust Tracksy',
        'mobile.subtitle': 'Start your 14-day free trial today. No credit card required. 2-minute setup.',
        'mobile.cta': 'Start for free',
        'mobile.appStore': 'Download on',
        'mobile.googlePlay': 'Available on',
        'mobile.appTitle': 'Tracksy Mobile',
        'mobile.appSubtitle': 'Track your time everywhere',
        'mobile.comingSoon': 'Coming soon',
        'mobile.appAvailable': 'Mobile app coming soon',
        'mobile.navigation': 'Navigation',
        'mobile.home': 'Home',
        'mobile.blog': 'Blog',
        'mobile.support': 'Support',
        'mobile.socialMedia': 'Social Media',
        'mobile.copyright': '© 2025 — Tracksy',
        'footer.description': 'Time tracking and business management solution for freelancers.',
        'nav.features': 'Features',
        'nav.pricing': 'Pricing',
        'nav.faq': 'FAQ',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service'
      }
      return fallbacks[key] || key
    }
    return t(key)
  }

  return (
    <section className="text-white">

      {/* Download the app */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-[#D5FF3F]">{safeT('mobile.badge')}</p>
              <h3 className="text-2xl font-bold leading-tight text-[#F2F3F5] sm:text-3xl">
                {safeT('mobile.title')}
              </h3>
              <p className="mt-2 max-w-prose text-sm text-[#A1A5B0] mb-6">
                {safeT('mobile.subtitle')}
              </p>
              <div className="flex flex-col gap-4">
                <Button
                  asChild
                  className="rounded-full bg-[#D5FF3F] px-8 py-3 text-[#0B0E12] hover:bg-[#B9E832] font-semibold text-lg w-fit"
                >
                  <a href="#contact" rel="noopener noreferrer">
                    {safeT('mobile.cta')}
                  </a>
                </Button>
                
                {/* App Store Buttons */}
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="flex items-center gap-2 bg-black rounded-lg px-4 py-2 border border-gray-600 hover:border-[#D5FF3F] transition-colors opacity-60 cursor-not-allowed"
                    aria-disabled="true"
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">{safeT('mobile.appStore')}</div>
                      <div className="text-sm font-semibold text-white">App Store</div>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-2 bg-black rounded-lg px-4 py-2 border border-gray-600 hover:border-[#D5FF3F] transition-colors opacity-60 cursor-not-allowed"
                    aria-disabled="true"
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">{safeT('mobile.googlePlay')}</div>
                      <div className="text-sm font-semibold text-white">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>
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
                      <p className="text-[#A1A5B0] text-sm">{safeT('mobile.appAvailable')}</p>
                    </div>
                  </div>
                  {/* On-screen content */}
                  <div className="relative p-3">
                    <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="space-y-1 px-1">
                      <div className="text-2xl font-extrabold text-[#D5FF3F]">{safeT('mobile.appTitle')}</div>
                      <p className="text-xs text-[#A1A5B0]">{safeT('mobile.appSubtitle')}</p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#D5FF3F]">
                        {safeT('mobile.comingSoon')}
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
                <Image src="/Tracksy_logo.png" alt="Tracksy logo" width={150} height={50} className="h-10 w-auto" />
              </div>
              <p className="max-w-sm text-sm text-neutral-400">{safeT('footer.description')}</p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">{safeT('mobile.navigation')}</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li><Link href="#" className="hover:text-[#D5FF3F]">{safeT('mobile.home')}</Link></li>
                  <li><Link href="#features" className="hover:text-[#D5FF3F]">{safeT('nav.features')}</Link></li>
                  <li><Link href="#pricing" className="hover:text-[#D5FF3F]">{safeT('nav.pricing')}</Link></li>
                  <li><Link href="#faq" className="hover:text-[#D5FF3F]">{safeT('nav.faq')}</Link></li>
                  <li><Link href="#blog" className="hover:text-[#D5FF3F]">{safeT('mobile.blog')}</Link></li>
                  <li><Link href="#support" className="hover:text-[#D5FF3F]">{safeT('mobile.support')}</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">{safeT('mobile.socialMedia')}</h5>
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
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{safeT('mobile.copyright')}</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-[#D5FF3F]">
                {safeT('footer.privacy')}
              </Link>
              <Link href="/terms" className="hover:text-[#D5FF3F]">
                {safeT('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
