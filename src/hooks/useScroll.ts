'use client'

import { useCallback, useEffect, useState } from 'react'

export default function useScroll() {
  const [y, setY] = useState<number>(0)
  const [offsetHeight, setOffsetHeight] = useState<number>(0)
  const [clientHeight, setClientHeight] = useState<number>(0)
  const [scrollFlow, setScrollFlow] = useState<'up' | 'down'>('down')

  useEffect(() => {
    setOffsetHeight(document.documentElement.offsetHeight)
    setClientHeight(document.documentElement.clientHeight)
  })

  const handleScroll = useCallback(
    (e: any) => {
      const window = e.currentTarget
      if (y > window.scrollY) {
        setScrollFlow('down')
      } else if (y < window.scrollY) {
        setScrollFlow('up')
      }
      setY(window.scrollY)
    },
    [y],
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return { y, offsetHeight, clientHeight, scrollFlow }
}
