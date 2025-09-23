'use client'

import { useTranslation } from '@/hooks/use-translation'
import { SiteHeader } from '@/components/site-header'
import { AppverseFooter } from '@/components/appverse-footer'
import { PrivacyContent } from '@/components/privacy-content'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const { language } = useTranslation()

  return (
    <>
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#0B0E12]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D5FF3F] rounded-full blur-3xl animate-pulse" style={{animationDuration: '3s'}}></div>
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#B9E832] rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      <main className="relative min-h-screen bg-transparent text-[#F2F3F5] z-10">
        <SiteHeader />
        
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button 
                asChild
                variant="ghost" 
                className="mb-4 rounded-2xl hover:bg-white/5 text-[#F2F3F5] hover:text-[#D5FF3F]"
              >
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {language === 'fr' ? 'Retour' : 'Back'}
                </Link>
              </Button>
              <h1 className="text-3xl font-bold text-[#F2F3F5] mb-2">
                {language === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
              </h1>
              <p className="text-[#A1A5B0]">
                {language === 'fr' ? 'Dernière mise à jour : 11 août 2025' : 'Last updated: August 11, 2025'}
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1A1F2E]/80 via-[#141820]/90 to-[#0B0E12] border border-[#2A2F3C] rounded-3xl p-8">
              <PrivacyContent />
            </div>
          </div>
        </div>

        <AppverseFooter />
      </main>
    </>
  )
}