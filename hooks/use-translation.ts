'use client'

import { createContext, useContext } from 'react'

// Type definitions
export type Language = 'fr' | 'en'

export interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: Record<string, string | number>) => string
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

// Hook to use translation
export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}