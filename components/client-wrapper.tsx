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

  // Prevent hydration issues by not rendering client-only components on SSR
  if (!isClient) {
    return <div className="min-h-screen bg-black">{children}</div>
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {children}
    </>
  )
}