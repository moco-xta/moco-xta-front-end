import { useCallback, useEffect, useState } from 'react'

export default function useWindowSize() {
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [height, setHeight] = useState<number>(window.innerHeight)

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize, {
      passive: true,
      capture: true,
    })
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return {
    width,
    height,
  }
}
