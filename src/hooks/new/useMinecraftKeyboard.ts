import { useCallback, useEffect, useState } from 'react'

const actionByKey = (key: string): string => {
  const keyActionMap: { [key: string]: string } = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
    Digit1: 'dirt',
    Digit2: 'grass',
    Digit3: 'glass',
    Digit4: 'wood',
    Digit5: 'log',
  }
  return keyActionMap[key]
}

export const useMinecraftKeyboard = () => {
  const [actions, setActions] = useState<{ [key: string]: boolean }>({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false,
  })

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const action = actionByKey(e.code)
    if (action) {
      setActions((prev) => {
        return {
          ...prev,
          [action]: true,
        }
      })
    }
  }, [])

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    const action = actionByKey(e.code)
    if (action) {
      setActions((prev) => {
        return {
          ...prev,
          [action]: false,
        }
      })
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  return actions
}
