import { useEffect, useState } from 'react'

import { default as globalConstants } from '@/constants/globalConstants.json'

export default function useResize() {
  const [isDesktop, setisDesktop] = useState<boolean>(
    window.innerWidth > globalConstants.DESKTOP_LIMIT,
  )
  const [innerWidth, setInnerWidth] = useState<number>(0)
  const [innerHeight, setInnerHeight] = useState<number>(0)

  function handleResize() {
    window.innerWidth > globalConstants.DESKTOP_LIMIT ? setisDesktop(true) : setisDesktop(false)
    setInnerWidth(window.innerWidth)
    setInnerHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    isDesktop,
    innerWidth,
    innerHeight,
  }
}
