"use client"

import { useEffect, useState } from 'react'

export function useSplashScreen() {
  const [showSplash, setShowSplash] = useState(true)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    // Check if this is the first load of the session
    const hasLoadedBefore = sessionStorage.getItem('tracksy-loaded')
    
    if (hasLoadedBefore) {
      setShowSplash(false)
      setIsFirstLoad(false)
    } else {
      // Mark that we've loaded the splash screen
      sessionStorage.setItem('tracksy-loaded', 'true')
    }
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
    setIsFirstLoad(false)
  }

  return {
    showSplash: showSplash && isFirstLoad,
    handleSplashComplete
  }
}