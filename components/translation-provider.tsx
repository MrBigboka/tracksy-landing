'use client'

import { useState, useEffect, ReactNode } from 'react'
import { TranslationContext, type Language } from '@/hooks/use-translation'

// Translation data will be loaded dynamically
let translationsCache: Record<Language, any> = { fr: {}, en: {} }

// Load translations function
const loadTranslations = async (lang: Language) => {
  if (Object.keys(translationsCache[lang]).length === 0) {
    try {
      const translations = await import(`../locales/${lang}.json`)
      translationsCache[lang] = translations.default
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error)
      // Fallback to empty object
      translationsCache[lang] = {}
    }
  }
  return translationsCache[lang]
}

// Helper function to get nested value from object using dot notation
const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path
}

// Translation function with parameter replacement
const translate = (translations: any, key: string, params?: Record<string, string | number>): string => {
  let text = getNestedValue(translations, key)
  
  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{${param}}`, String(value))
    })
  }
  
  return text
}

// Provider component
interface TranslationProviderProps {
  children: ReactNode
  defaultLanguage?: Language
}

export function TranslationProvider({ children, defaultLanguage = 'en' }: TranslationProviderProps) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)
  const [translations, setTranslations] = useState<any>({})
  const [isLoading, setIsLoading] = useState(true)

  // Load translations when language changes
  useEffect(() => {
    const loadAndSetTranslations = async () => {
      setIsLoading(true)
      const newTranslations = await loadTranslations(language)
      setTranslations(newTranslations)
      setIsLoading(false)
    }
    loadAndSetTranslations()
  }, [language])

  // Load initial language from localStorage on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('tracksy-language') as Language
      if (savedLanguage && ['fr', 'en'].includes(savedLanguage)) {
        setLanguageState(savedLanguage)
      } else {
        // Detect browser language
        const browserLang = navigator.language.split('-')[0] as Language
        if (['fr', 'en'].includes(browserLang)) {
          setLanguageState(browserLang)
        }
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('tracksy-language', lang)
    }
  }

  const t = (key: string, params?: Record<string, string | number>): string => {
    if (isLoading || !translations) {
      return key // Return key as fallback while loading
    }
    return translate(translations, key, params)
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}