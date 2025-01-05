import { useCallback, useEffect, useState } from 'react'

export default function useScroll(triggerId?: string) {
  const [y, setY] = useState<number>(0)
  const [offsetHeight, setOffsetHeight] = useState<number>(0)
  const [clientHeight, setClientHeight] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [scrollPercentage, setScrollPercentage] = useState<number>(0)
  const [scrollFlow, setScrollFlow] = useState<'up' | 'down'>('down')

  useEffect(() => {
    setOffsetHeight(document.documentElement.offsetHeight)
    setClientHeight(document.documentElement.clientHeight)
    setHeight(document.documentElement.offsetHeight - document.documentElement.clientHeight)
  }, [])

  const handleScroll = useCallback(
    (e: Event) => {
      setScrollPercentage((y * 100) / height)
      if (y > window.scrollY) {
        if (scrollFlow !== 'down') setScrollFlow('down')
      } else if (y < window.scrollY) {
        if (scrollFlow !== 'up') setScrollFlow('up')
      }
      // if (triggerId) console.log(document.getElementById(triggerId)!.getBoundingClientRect().top - window.scrollY)
      // !triggerId ? (window.scrollY) : document.getElementById(triggerId)!.getBoundingClientRect().top - window.scrollY
      // @ts-ignore
      !triggerId ? setY(window.scrollY) : setY(e.target.scrollTop)
    },
    [y, height, scrollFlow],
  )

  useEffect(() => {
    !triggerId
      ? window.addEventListener('scroll', handleScroll, {
          passive: true,
          capture: true,
        })
      : document.getElementById(triggerId)!.addEventListener('scroll', handleScroll, {
          passive: true,
          capture: true,
        })
    return () => {
      !triggerId
        ? window.removeEventListener('scroll', handleScroll)
        : document.getElementById(triggerId)!.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return {
    y,
    offsetHeight,
    clientHeight,
    scrollPercentage,
    scrollFlow,
  }
}
