"use client"

import { useSplashScreen } from "@/hooks/use-splash-screen"
import { SplashScreen } from "@/components/splash-screen"

interface ClientWrapperProps {
  children: React.ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  const { showSplash, handleSplashComplete } = useSplashScreen()

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {children}
    </>
  )
}