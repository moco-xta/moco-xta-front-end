import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

import { default as globalConstants } from '@/constants/globalConstants.json'

export default function useIsDesktop() {
  const [isDesktop, setDesktop] = useState(
    !isMobile || window.innerWidth > globalConstants.DESKTOP_LIMIT,
  )

  const updateMedia = () => {
    setDesktop(!isMobile || window.innerWidth > globalConstants.DESKTOP_LIMIT)
  }

  useEffect(() => {
    document.addEventListener('resize', updateMedia)
    return () => document.removeEventListener('resize', updateMedia)
  }, [])

  return { isDesktop }
}
