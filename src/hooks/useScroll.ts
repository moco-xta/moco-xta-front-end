import { useCallback, useEffect, useState } from 'react'

export default function useScroll(triggerId?: string) {
  const [scrollY, setScrollY] = useState<number>(0)
  const [offsetHeight, setOffsetHeight] = useState<number>(0)
  const [clientHeight, setClientHeight] = useState<number>(0)
  const [scrollHeight, setScrollHeight] = useState<number>(0)
  const [scrollPercentage, setScrollPercentage] = useState<number>(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')

  useEffect(() => {
    const documentElement = document.documentElement
    setOffsetHeight(documentElement.offsetHeight)
    setClientHeight(documentElement.clientHeight)
    setScrollHeight(documentElement.scrollHeight - documentElement.clientHeight)
  }, [])

  const handleScroll = useCallback(
    (event: Event) => {
      // Determine the scroll position (either from window or target element)
      const target = triggerId ? (event.target as HTMLElement)?.scrollTop || 0 : window.scrollY

      // Update scroll direction
      setScrollDirection(() => (scrollY > target ? 'up' : 'down'))

      setScrollY(target)
      setScrollPercentage((target * 100) / scrollHeight)
    },
    [triggerId, scrollHeight, scrollY],
  )

  useEffect(() => {
    const targetElement = triggerId ? document.getElementById(triggerId) : window

    if (!targetElement) {
      console.warn(`Element with ID "${triggerId}" not found.`)
      return
    }

    targetElement.addEventListener('scroll', handleScroll, {
      passive: true,
      capture: true,
    })

    return () => {
      targetElement.removeEventListener('scroll', handleScroll)
    }
  }, [triggerId, handleScroll])

  return {
    scrollY,
    offsetHeight,
    clientHeight,
    scrollHeight,
    scrollPercentage,
    scrollDirection,
  }
}
