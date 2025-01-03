import { useCallback, useEffect, useState } from 'react'

export default function useMouseMove() {
  const [x, setX] = useState<number>(0)
  const [y, setY] = useState<number>(0)
  const [uvX, setUvX] = useState<number>(0)
  const [uvY, setUvY] = useState<number>(0)
  const [deltaX, setDeltaX] = useState<number>(0)
  const [deltaY, setDeltaY] = useState<number>(0)
  const [horizontalFlow, setHorizontalFlow] = useState<'left' | 'right'>('left')
  const [verticalFlow, setVerticalFlow] = useState<'up' | 'down'>('up')

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (x > e.clientX) {
        setHorizontalFlow('left')
      } else if (x < e.clientX) {
        setHorizontalFlow('right')
      }
      setX(e.clientX)
      setUvX(((100 / (window.innerWidth / 2)) * (e.clientX - window.innerWidth / 2)) / 100)
      setDeltaX(e.movementX)

      if (y > e.clientY) {
        setVerticalFlow('up')
      } else if (y < e.clientY) {
        setVerticalFlow('down')
      }
      setY(e.clientY)
      setUvY(-((100 / (window.innerHeight / 2)) * (e.clientY - window.innerHeight / 2)) / 100)
      setDeltaY(e.movementY)
    },
    [x, y],
  )

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return {
    x,
    y,
    uvX,
    uvY,
    deltaX,
    deltaY,
    horizontalFlow,
    verticalFlow,
  }
}
