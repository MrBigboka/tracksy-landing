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
    <section id="faq" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#D5FF3F]/10 border border-[#D5FF3F]/20 mb-6">
            <span className="text-[#D5FF3F] text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F2F3F5] mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-[#A1A5B0] max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {getFaqItems().map((item, index) => (
              <div
                key={index}
                className="border border-[#1E232C] rounded-xl bg-gradient-to-br from-[#141820] to-[#0B0E12] overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#1A1F27] transition-colors"
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
