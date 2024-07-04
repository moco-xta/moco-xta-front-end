import { useEffect, useState } from 'react'

import { default as globalConstants } from '@/constants/globalConstants.json'

export default function useIsLargeScreen() {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.innerWidth > globalConstants.DESKTOP_LIMIT,
  )
  function handleResize() {
    window.innerWidth > globalConstants.DESKTOP_LIMIT
      ? setIsLargeScreen(true)
      : setIsLargeScreen(false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    isLargeScreen,
  }
}
