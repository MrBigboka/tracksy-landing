"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Tag, HelpCircle, FileText, Info, Zap, ChevronDown, DollarSign, Users, Scale } from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"
import { useTranslation } from "@/hooks/use-translation"
import { useState, useEffect, useRef } from "react"

export function SiteHeader() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const productRef = useRef<HTMLDivElement>(null)
  const companyRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productRef.current && !productRef.current.contains(event.target as Node)) {
        setProductOpen(false)
      }
      if (companyRef.current && !companyRef.current.contains(event.target as Node)) {
        setCompanyOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 p-4 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className={`flex h-14 items-center justify-between px-6 rounded-full transition-all duration-300 ${
          scrolled ? 'liquid-glass-header shadow-lg' : 'bg-transparent'
        }`}>
          {/* Brand Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Tracksy_logo.png"
              alt="Tracksy logo"
              width={160}
              height={55}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 text-sm text-gray-300 md:flex">
            {/* Product Dropdown */}
            <div ref={productRef} className="relative">
              <button
                onClick={() => { setProductOpen(!productOpen); setCompanyOpen(false); }}
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-[#D5FF3F] hover:bg-white/5 transition-colors"
              >
                {t('footer.product')}
                <ChevronDown className={`w-4 h-4 transition-transform ${productOpen ? 'rotate-180' : ''}`} />
              </button>
              {productOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-xl">
                  <Link
                    href="/#features"
                    onClick={() => setProductOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-[#D5FF3F]/10 rounded-lg flex items-center justify-center group-hover:bg-[#D5FF3F]/20">
                      <Tag className="w-4 h-4 text-[#D5FF3F]" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{t('nav.features')}</div>
                      <div className="text-xs text-white/50">Discover all features</div>
                    </div>
                  </Link>
                  <Link
                    href="/pricing"
                    onClick={() => setProductOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-[#D5FF3F]/10 rounded-lg flex items-center justify-center group-hover:bg-[#D5FF3F]/20">
                      <DollarSign className="w-4 h-4 text-[#D5FF3F]" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{t('nav.pricing')}</div>
                      <div className="text-xs text-white/50">Plans & pricing</div>
                    </div>
                  </Link>
                  <Link
                    href="/toggl-alternative"
                    onClick={() => setProductOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-[#D5FF3F]/10 rounded-lg flex items-center justify-center group-hover:bg-[#D5FF3F]/20">
                      <Scale className="w-4 h-4 text-[#D5FF3F]" />
                    </div>
                    <div>
                      <div className="font-medium text-white">vs Toggl</div>
                      <div className="text-xs text-white/50">Compare with Toggl</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div ref={companyRef} className="relative">
              <button
                onClick={() => { setCompanyOpen(!companyOpen); setProductOpen(false); }}
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-[#D5FF3F] hover:bg-white/5 transition-colors"
              >
                {t('footer.company')}
                <ChevronDown className={`w-4 h-4 transition-transform ${companyOpen ? 'rotate-180' : ''}`} />
              </button>
              {companyOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-xl">
                  <Link
                    href="/about"
                    onClick={() => setCompanyOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10">
                      <Info className="w-4 h-4 text-white/60" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{t('footer.about')}</div>
                      <div className="text-xs text-white/50">Learn about us</div>
                    </div>
                  </Link>
                  <Link
                    href="/use-cases/freelance-consultant-time-tracking"
                    onClick={() => setCompanyOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10">
                      <Users className="w-4 h-4 text-white/60" />
                    </div>
                    <div>
                      <div className="font-medium text-white">Use Cases</div>
                      <div className="text-xs text-white/50">For freelancers</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/faq"
              className="px-3 py-2 rounded-lg hover:text-[#D5FF3F] hover:bg-white/5 transition-colors"
            >
              {t('nav.faq')}
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <a href="https://app.tracksy.me" rel="noopener noreferrer">
              <ShimmerButton
                className="px-6 py-2.5 font-semibold text-black text-sm flex items-center gap-2"
                shimmerColor="#ffffff"
                shimmerSize="0.15em"
                shimmerDuration="2s"
                background="linear-gradient(135deg, #D5FF3F 0%, #C8D64F 50%, #B9E832 100%)"
                borderRadius="9999px"
              >
                <Zap className="w-4 h-4" />
                {t('hero.cta')}
              </ShimmerButton>
            </a>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-[#D5FF3F] hover:bg-white/10 transition-colors"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="liquid-glass border-gray-800 p-0 w-72 flex flex-col"
              >
                {/* Brand Header */}
                <div className="flex items-center px-4 py-4 border-b border-gray-800">
                  <Image
                    src="/Tracksy_logo.png"
                    alt="Tracksy logo"
                    width={160}
                    height={55}
                    className="h-12 w-auto"
                  />
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200 overflow-y-auto flex-1">
                  {/* Product Section */}
                  <div className="px-4 py-2">
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">{t('footer.product')}</p>
                    <div className="space-y-1">
                      <Link href="/#features" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
                        <Tag className="w-4 h-4 text-[#D5FF3F]" />
                        <span className="text-sm">{t('nav.features')}</span>
                      </Link>
                      <Link href="/pricing" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
                        <DollarSign className="w-4 h-4 text-[#D5FF3F]" />
                        <span className="text-sm">{t('nav.pricing')}</span>
                      </Link>
                      <Link href="/toggl-alternative" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
                        <Scale className="w-4 h-4 text-[#D5FF3F]" />
                        <span className="text-sm">vs Toggl</span>
                      </Link>
                    </div>
                  </div>

                  {/* Company Section */}
                  <div className="px-4 py-2">
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">{t('footer.company')}</p>
                    <div className="space-y-1">
                      <Link href="/about" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
                        <Info className="w-4 h-4 text-white/60" />
                        <span className="text-sm">{t('footer.about')}</span>
                      </Link>
                      <Link href="/use-cases/freelance-consultant-time-tracking" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
                        <Users className="w-4 h-4 text-white/60" />
                        <span className="text-sm">Use Cases</span>
                      </Link>
                    </div>
                  </div>

                  {/* Support Section */}
                  <div className="px-4 py-2">
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Support</p>
                    <div className="space-y-1">
                      <Link href="/faq" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
                        <HelpCircle className="w-4 h-4 text-white/60" />
                        <span className="text-sm">{t('nav.faq')}</span>
                      </Link>
                      <a href="mailto:support@tracksy.me" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
                        <FileText className="w-4 h-4 text-white/60" />
                        <span className="text-sm">Contact</span>
                      </a>
                    </div>
                  </div>
                </nav>

                {/* Language Selector */}
                <div className="px-4 py-3 border-t border-gray-800">
                  <LanguageSelector />
                </div>

                {/* CTA Button at Bottom */}
                <div className="border-t border-gray-800 p-4">
                  <a href="https://app.tracksy.me" rel="noopener noreferrer" className="block">
                    <ShimmerButton
                      className="w-full px-6 py-2.5 font-semibold text-black text-sm flex items-center justify-center gap-2"
                      shimmerColor="#ffffff"
                      shimmerSize="0.15em"
                      shimmerDuration="2s"
                      background="linear-gradient(135deg, #D5FF3F 0%, #C8D64F 50%, #B9E832 100%)"
                      borderRadius="9999px"
                    >
                      <Zap className="w-4 h-4" />
                      {t('hero.cta')}
                    </ShimmerButton>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
