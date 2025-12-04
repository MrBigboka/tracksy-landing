"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import Script from "next/script"

// SEO-optimized FAQ items for JSON-LD (always in English for Google)
const seoFaqItems = [
  {
    question: "Is Tracksy free?",
    answer: "Yes! Tracksy offers a free plan that includes 1 client, 2 projects, and 5 sessions per day. You can use it forever at no cost. For unlimited features, you can upgrade to Pro starting at $7.99/month or get lifetime access for $39.99."
  },
  {
    question: "Is Tracksy an alternative to Toggl?",
    answer: "Yes, Tracksy is a simple, minimalist alternative to Toggl Track. While Toggl has grown into an enterprise tool with many features, Tracksy focuses on what freelancers actually need: fast time tracking, client management, and PDF report exports. No bloat, just the essentials."
  },
  {
    question: "Does Tracksy generate invoices?",
    answer: "Yes! Tracksy can automatically generate professional invoices based on your tracked time. You can customize invoice templates, add your logo, and export them as PDF. The invoicing feature is available on all Pro plans."
  },
  {
    question: "Does Tracksy export PDF reports?",
    answer: "Absolutely. Tracksy allows you to export detailed PDF reports of your time entries, organized by client and project. Free plan exports include a watermark, while Pro plans offer clean, professional PDFs without watermarks."
  },
  {
    question: "How does the 14-day free trial work?",
    answer: "You can use all Pro features of Tracksy for 14 days without any restrictions. No credit card is required to start. At the end of the trial period, you can choose the paid Pro plan or continue with the limited free plan."
  },
  {
    question: "Is my data secure with Tracksy?",
    answer: "Security is our priority. All your data is encrypted in transit and at rest, hosted on secure servers, and we comply with data protection regulations. Your time tracking data is private and never shared with third parties."
  }
]

export function FAQ() {
  const { t } = useTranslation()
  const [openItems, setOpenItems] = useState<number[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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

      {/* FAQ JSON-LD Structured Data for Rich Snippets */}
      {mounted && (
        <Script
          id="faq-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": seoFaqItems.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            }),
          }}
        />
      )}
    </section>
  )
}
