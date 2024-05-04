import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

export default function useIsDesktop() {
  const [isDesktop, setDesktop] = useState(!isMobile || window.innerWidth > 1200)

  const updateMedia = () => {
    setDesktop(!isMobile || window.innerWidth > 1200)
  }

  useEffect(() => {
    document.addEventListener('resize', updateMedia)
    return () => document.removeEventListener('resize', updateMedia)
  }, [])

  return { isDesktop }
}
