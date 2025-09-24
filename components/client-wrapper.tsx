"use client"

import { useState, useEffect } from "react"
import { useSplashScreen } from "@/hooks/use-splash-screen"
import { SplashScreen } from "@/components/splash-screen"

interface ClientWrapperProps {
  children: React.ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  const { showSplash, handleSplashComplete } = useSplashScreen()
  const [isClient, setIsClient] = useState(false)

  // Avoid hydration mismatch by waiting for client render
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Show loading screen during SSR and splash screen loading
  if (!isClient) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse text-[#C8D64F] text-xl">Loading...</div>
        <div style={{ display: 'none' }}>{children}</div>
      </div>
    )
  }

  // Always show splash screen on client load (mobile and desktop)
  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {!showSplash && children}
    </>
  )
}