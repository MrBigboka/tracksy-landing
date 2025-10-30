"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function FAQ() {
  const { t } = useTranslation()
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  // Get FAQ items with fallback for build time
  const getFaqItems = (): Array<{question: string, answer: string}> => {
    const items = t('faq.items')
    if (Array.isArray(items)) {
      return items
    }
    // Fallback for build time
    return []
  }

  return (
    <section id="faq" className="relative py-16 sm:py-20 md:py-24">
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
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 px-4">
            {t('faq.title')}
          </h2>
          <p className="text-sm sm:text-base text-white/50 max-w-xl mx-auto px-4">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {getFaqItems().map((item, index) => (
              <div
                key={index}
                className={`border border-white/10 rounded-xl bg-black/20 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all duration-300 ${
                  openItems.includes(index) ? "scale-105" : "scale-100"
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-semibold text-[#F2F3F5] pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D5FF3F] transition-transform flex-shrink-0 ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-[#1E232C]">
                      <p className="text-[#A1A5B0] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Simple end of FAQ */}
          <div className="text-center mt-12">
            <p className="text-[#A1A5B0]">
              {t('faq.moreQuestions')} <a href="#contact" className="text-[#D5FF3F] hover:underline">{t('faq.contactUs')}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
