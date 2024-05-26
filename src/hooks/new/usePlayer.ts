import { useEffect, useState } from 'react'

export const usePlayer = () => {
  const moves: {
    [key: string]: string
  } = {
    ArrowUp: 'forward',
    ArrowDown: 'backward',
    ArrowLeft: 'left',
    ArrowRight: 'right',
    Space: 'jump',
  }

  const getMove = (code: string) => moves[code]

  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  })

  const setMovementStatus = (code: string, status: boolean) => {
    setMovement((movement) => ({ ...movement, [code]: status }))
  }

  useEffect(() => {
    console.log('movement', movement)
  }, [movement])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setMovementStatus(getMove(event.code), true)
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      setMovementStatus(getMove(event.code), false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return movement
}
