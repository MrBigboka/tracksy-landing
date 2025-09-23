"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"
import Image from "next/image"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center justify-center">
            <Image src="/Tracksy_logo.png" alt="Tracksy logo" width={200} height={60} className="h-12 w-auto" />
          </div>
          <h1 className="mt-6 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-[#F2F3F5]">{t('hero.title')}</span>
            <span className="block text-[#D5FF3F] drop-shadow-[0_0_20px_rgba(213,255,63,0.35)]">{t('hero.titleHighlight')}</span>
            <span className="block text-[#F2F3F5]">{t('hero.titleEnd')}</span>
          </h1>
          <p className="mt-6 text-center text-xl text-[#A1A5B0] max-w-3xl mx-auto leading-relaxed mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild className="rounded-full bg-[#D5FF3F] px-8 py-3 text-[#0B0E12] hover:bg-[#B9E832] font-semibold text-lg">
              <a href="#contact" rel="noopener noreferrer">
                {t('hero.cta')}
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-[#1E232C] bg-transparent px-8 py-3 text-[#F2F3F5] hover:bg-[#1A1F27] hover:text-[#F2F3F5] text-lg">
              <a href="#demo" rel="noopener noreferrer">
                {t('hero.watchDemo')}
              </a>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[#A1A5B0] text-sm">
            <span>✓ {t('hero.freeTrial')}</span>
            <span>✓ {t('hero.noCard')}</span>
            <span>✓ {t('hero.quickSetup')}</span>
          </div>

          {/* Tracksy App Preview - Real Demo Video */}
          <div className="mt-16 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-xl bg-[#0B0E12] border border-[#1E232C] overflow-hidden shadow-2xl">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <video
                  className="absolute top-0 left-0 w-full h-full object-contain rounded-xl bg-[#0B0E12]"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster="https://www.tracksy.me/tracksy.me.mp4#t=1"
                  onLoadedMetadata={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.currentTime = 1;
                  }}
                >
                  <source src="https://www.tracksy.me/tracksy.me.mp4" type="video/mp4" />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#141820] to-[#0B0E12]">
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#D5FF3F] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#0B0E12]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-[#A1A5B0] text-lg sm:text-xl font-medium px-4">{t('hero.browserNotSupported')}</p>
                    </div>
                  </div>
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

