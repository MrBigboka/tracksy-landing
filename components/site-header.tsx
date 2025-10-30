"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Briefcase, Tag, HelpCircle, FileText, Info, Zap } from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"
import { useTranslation } from "@/hooks/use-translation"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  
  const links = [
    { href: "#features", label: t('nav.features'), icon: Tag },
    { href: "#pricing", label: t('nav.pricing'), icon: HelpCircle },
    { href: "#faq", label: t('nav.faq'), icon: FileText },
  ]

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
          <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-[#D5FF3F] transition-colors"
              >
                {l.label}
              </Link>
            ))}
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
                className="liquid-glass border-gray-800 p-0 w-64 flex flex-col"
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
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-[#D5FF3F] transition-colors"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* Language Selector */}
                <div className="mt-4 px-4">
                  <LanguageSelector />
                </div>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4">
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
