"use client"

import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { useTranslation } from "@/hooks/use-translation"
import { ChevronRight, Sparkles } from "lucide-react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export function Hero() {
  const { t } = useTranslation()

  const scrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault()
    const demoSection = document.getElementById('demo-section')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const titleText = t('hero.title') as string
  const titleWords = titleText.split(' ')

  return (
    <section className="relative isolate overflow-hidden">
      {/* Decorative borders */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-white/5">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-[#D5FF3F] to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-white/5">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-[#D5FF3F] to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-white/5">
        <div className="absolute left-1/2 -translate-x-1/2 h-px w-40 bg-gradient-to-r from-transparent via-[#D5FF3F] to-transparent" />
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center py-10 md:py-20">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center justify-center"
          >
            <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 bg-white/5 border border-white/10 hover:border-[#D5FF3F]/30 transition-all duration-300">
              <Sparkles className="size-3.5 text-[#D5FF3F]" />
              <hr className="mx-2 h-4 w-px shrink-0 bg-white/20" />
              <span className="text-sm font-medium text-white/90">
                Tracksy v2.0 • Lifetime Offer
              </span>
              <ChevronRight className="ml-1 size-3.5 text-white/60 transition-all duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:text-[#D5FF3F]" />
            </div>
          </motion.div>

          {/* Animated Title */}
          <h1 className="relative z-10 mx-auto max-w-5xl text-center text-3xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.08,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
            {" "}
            <motion.span
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: titleWords.length * 0.08,
                ease: "easeInOut",
              }}
              className="inline-block text-[#D5FF3F] drop-shadow-[0_0_20px_rgba(213,255,63,0.35)]"
            >
              {t('hero.titleHighlight')}
            </motion.span>
            {" "}
            <motion.span
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: (titleWords.length + 1) * 0.08,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              {t('hero.titleEnd')}
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="relative z-10 mx-auto mt-6 max-w-2xl px-4 text-center text-base font-normal text-white/70 sm:text-lg md:text-xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="relative z-10 mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
          >
            <a href="https://app.tracksy.me" rel="noopener noreferrer" className="w-full sm:w-auto">
              <ShimmerButton
                className="w-full px-8 py-4 font-semibold text-black text-base flex items-center justify-center gap-2 min-h-[56px]"
                shimmerColor="#ffffff"
                shimmerSize="0.2em"
                shimmerDuration="2.5s"
                background="linear-gradient(135deg, #D5FF3F 0%, #C8D64F 50%, #B9E832 100%)"
                borderRadius="9999px"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {t('hero.cta')}
              </ShimmerButton>
            </a>
            <Button
              onClick={scrollToDemo}
              variant="outline"
              className="w-full sm:w-auto transform rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 font-semibold text-white text-base transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/30 hover:text-white flex items-center gap-2 min-h-[56px]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              {t('hero.watchDemo')}
            </Button>
          </motion.div>

          {/* Features badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.1 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/60 text-xs sm:text-sm"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#D5FF3F]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {t('hero.freeTrial')}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#D5FF3F]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {t('hero.noCard')}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#D5FF3F]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {t('hero.quickSetup')}
            </span>
          </motion.div>

          {/* Demo Preview */}
          <motion.div 
            id="demo-section" 
            className="relative w-full mt-20 max-w-7xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {/* Glow behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D5FF3F]/30 via-[#D5FF3F]/10 to-[#D5FF3F]/30 rounded-2xl blur-2xl opacity-60"></div>
            
            {/* Demo Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-[#D5FF3F]/20 bg-black/40 backdrop-blur-sm p-1">
              <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: 'calc(49.6484375% + 41px)' }}>
                <iframe
                  src="https://demo.arcade.software/ipJQTkzCnEgNaXaHCS3z?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
                  title="Tracksy Demo"
                  frameBorder={0}
                  loading="lazy"
                  allowFullScreen
                  allow="clipboard-write"
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  style={{ colorScheme: 'light' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
