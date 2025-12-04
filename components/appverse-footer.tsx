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
        'footer.terms': 'Terms of Service',
        'footer.product': 'Product',
        'footer.roadmap': 'Roadmap',
        'footer.changelog': 'Changelog',
        'footer.company': 'Company',
        'footer.about': 'About Us',
        'footer.careers': 'Careers',
        'footer.press': 'Press Kit',
        'footer.resources': 'Resources',
        'footer.community': 'Community',
        'footer.contact': 'Contact',
        'footer.docs': 'Documentation',
        'footer.legal': 'Legal',
        'footer.instagram': 'Instagram'
      }
      return fallbacks[key] || key
    }
    return t(key)
  }

  return (
    <section className="text-white">

      {/* Download the app */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
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
                  <a href="https://app.tracksy.me" rel="noopener noreferrer">
                    {safeT('mobile.cta')}
                  </a>
                </Button>
                
                {/* App Store Buttons */}
                <div className="flex gap-3">
                  <div 
                    className="flex items-center gap-2 bg-black rounded-lg px-4 py-2 border border-gray-600 opacity-60 cursor-not-allowed"
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-[#D5FF3F] font-medium">Soon</div>
                      <div className="text-sm font-semibold text-white">App Store</div>
                    </div>
                  </div>
                  
                  <div 
                    className="flex items-center gap-2 bg-black rounded-lg px-4 py-2 border border-gray-600 opacity-60 cursor-not-allowed"
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-[#D5FF3F] font-medium">Soon</div>
                      <div className="text-sm font-semibold text-white">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right mockup */}
            <div className="mx-auto w-full max-w-[300px] group">
              <Image 
                src="/DemoTracksy.png" 
                alt="Tracksy Mobile App - Suivez votre temps partout" 
                width={600} 
                height={338} 
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </div>
        </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 sm:gap-12 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
              {/* Brand */}
              <div className="col-span-2 md:col-span-1 lg:col-span-1">
                <Link href="/" className="flex items-center mb-4">
                  <Image src="/Tracksy_logo.png" alt="Tracksy" width={160} height={55} className="h-12 w-auto" />
                </Link>
                <p className="text-sm text-neutral-500 max-w-[200px]">
                  Simple time tracking for freelancers. No bloat.
                </p>
              </div>

              {/* Product */}
              <div>
                <h5 className="mb-4 text-sm font-semibold text-white">{safeT('footer.product')}</h5>
                <ul className="space-y-3 text-sm text-neutral-400">
                  <li><Link href="/#features" className="hover:text-white transition-colors">{safeT('nav.features')}</Link></li>
                  <li><Link href="/pricing" className="hover:text-white transition-colors">{safeT('nav.pricing')}</Link></li>
                  <li><Link href="/toggl-alternative" className="hover:text-white transition-colors">vs Toggl</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h5 className="mb-4 text-sm font-semibold text-white">{safeT('footer.company')}</h5>
                <ul className="space-y-3 text-sm text-neutral-400">
                  <li><Link href="/about" className="hover:text-white transition-colors">{safeT('footer.about')}</Link></li>
                  <li><Link href="/use-cases/freelance-consultant-time-tracking" className="hover:text-white transition-colors">Use Cases</Link></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h5 className="mb-4 text-sm font-semibold text-white">Support</h5>
                <ul className="space-y-3 text-sm text-neutral-400">
                  <li><Link href="/faq" className="hover:text-white transition-colors">{safeT('nav.faq')}</Link></li>
                  <li><a href="mailto:support@tracksy.me" className="hover:text-white transition-colors">{safeT('footer.contact')}</a></li>
                </ul>
              </div>

              {/* Social & Legal */}
              <div>
                <h5 className="mb-4 text-sm font-semibold text-white">Connect</h5>
                <ul className="space-y-3 text-sm text-neutral-400">
                  <li>
                    <a 
                      href="https://twitter.com/TracksyApp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.youtube.com/@tracksy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                      <Youtube className="h-4 w-4" />
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
              <p>{safeT('mobile.copyright')}</p>
              <div className="flex items-center gap-6">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  {safeT('footer.privacy')}
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  {safeT('footer.terms')}
                </Link>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
