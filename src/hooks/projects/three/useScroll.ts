import { useCallback, useEffect, useRef } from 'react'

export const useScrollAnimation = () => {
  const speedRef = useRef<number>(0)
  const positionRef = useRef<number>(0)
  const roundedRef = useRef<number>(0)

  const handleScroll = useCallback((event: WheelEvent) => {
    speedRef.current += event.deltaY * 0.0003
  }, [])

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: true })
    return () => window.removeEventListener('wheel', handleScroll)
  }, [handleScroll])

  return { speedRef, positionRef, roundedRef }
}
