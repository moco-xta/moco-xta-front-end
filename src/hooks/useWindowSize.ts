import { useState, useEffect } from 'react'

import styles from '@/styles/variables.module.scss'

export const useWindowSize = () => {
  const screenBreakpoint = parseInt(styles.screenBreakpoint, 10)

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(window.innerWidth < screenBreakpoint)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      setIsSmallScreen(window.innerWidth < screenBreakpoint)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [screenBreakpoint])

  return { windowSize, isSmallScreen }
}
