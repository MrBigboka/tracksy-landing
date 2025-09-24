"use client"

import { useEffect, useState } from 'react'

export function useSplashScreen() {
  const [showSplash, setShowSplash] = useState(true)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Only access sessionStorage after we're client-side
    try {
      const hasLoadedBefore = typeof window !== 'undefined' ? sessionStorage.getItem('tracksy-loaded') : null
      
      if (hasLoadedBefore) {
        setShowSplash(false)
        setIsFirstLoad(false)
      } else {
        // Show splash screen for 3.5 seconds minimum on first load
        const timer = setTimeout(() => {
          if (typeof window !== 'undefined') {
            sessionStorage.setItem('tracksy-loaded', 'true')
          }
        }, 3500)
        
        return () => clearTimeout(timer)
      }
    } catch (error) {
      console.warn('SessionStorage not available, showing splash anyway:', error)
      // Always show splash if sessionStorage fails
    }
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
    setIsFirstLoad(false)
    
    // Safely set sessionStorage
    try {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('tracksy-loaded', 'true')
      }
    } catch (error) {
      console.warn('Could not save to sessionStorage:', error)
    }
  }

  return {
    showSplash: isClient && showSplash && isFirstLoad,
    handleSplashComplete,
    isClient
  }
}