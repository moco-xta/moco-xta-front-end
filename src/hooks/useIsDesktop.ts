import { useEffect, useState } from 'react'

export default function useIsDesktop() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 700)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 700)
  }

  useEffect(() => {
    document.addEventListener('resize', updateMedia)
    return () => document.removeEventListener('resize', updateMedia)
  }, [])

  return { isDesktop }
}
