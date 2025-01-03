import { useState, useEffect, MutableRefObject } from 'react'

export default function useSectionIsVisible(ref: MutableRefObject<HTMLElement>) {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false)
  const [rootMargin] = useState<string>(`-${window.innerHeight - 500}px`)

  useEffect(() => {
    console.log('ref', ref)
    console.log('window.innerHeight', window.innerHeight)
    console.log('rootMargin', rootMargin)
  }, [isIntersecting])

  useEffect(() => {
    // Create an IntersectionObserver to observe the ref's visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { rootMargin: '-300px' },
      // { rootMargin: rootMargin.toString() }
      /* {
        rootMargin: '0px 0px 100px'
      } */
    )

    // Start observing the element
    observer.observe(ref.current)

    // Cleanup the observer when the component unmounts or ref changes
    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isIntersecting
}
