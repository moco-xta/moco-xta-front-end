import { useCallback, useEffect, useState } from 'react'

export default function useMouseMove() {
  const [mouseX, setMouseX] = useState<number>(0)
  const [mouseY, setMouseY] = useState<number>(0)
  const [deltaX, setDeltaX] = useState<number>(0)
  const [deltaY, setDeltaY] = useState<number>(0)
  const [horizontalFlow, setHorizontalFlow] = useState<'left' | 'right'>('left')
  const [verticalFlow, setVerticalFlow] = useState<'up' | 'down'>('up')

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (mouseX > e.clientX) {
        setHorizontalFlow('left')
      } else if (mouseX < e.clientX) {
        setHorizontalFlow('right')
      }
      setMouseX(e.clientX)
      setDeltaX(e.movementX)

      if (mouseY > e.clientY) {
        setVerticalFlow('up')
      } else if (mouseY < e.clientY) {
        setVerticalFlow('down')
      }
      setMouseY(e.clientY)
      setDeltaY(e.movementY)
    },
    [mouseX, mouseY],
  )

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return {
    mouseX,
    mouseY,
    deltaX,
    deltaY,
    horizontalFlow,
    verticalFlow,
  }
}
