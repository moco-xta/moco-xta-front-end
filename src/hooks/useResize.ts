import React, { useEffect, useState } from 'react'

export default function useResize() {
  const [innerWidth, setInnerWidth] = useState<number>(0)
  const [innerHeight, setInnerHeight] = useState<number>(0)

  function handleResize() {
    setInnerWidth(window.innerWidth)
    setInnerHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return { innerWidth, innerHeight }
}
