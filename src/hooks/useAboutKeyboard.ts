import { useCallback, useEffect, useState } from 'react'

const actionByKey = (key: string): string => {
  const keyActionMap: {
    [key: string]: string
  } = {
    KeyW: 'moveForward',
    ArrowUp: 'moveForward',
    KeyS: 'moveBackward',
    ArrowDown: 'moveBackward',
    KeyA: 'moveLeft',
    ArrowLeft: 'moveLeft',
    KeyD: 'moveRight',
    ArrowRight: 'moveRight',
    Space: 'jump',
    Digit1: 'dirt',
    Numpad1: 'dirt',
    Digit2: 'grass',
    Numpad2: 'grass',
    Digit3: 'glass',
    Numpad3: 'glass',
    Digit4: 'wood',
    Numpad4: 'wood',
    Digit5: 'log',
    Numpad5: 'log',
  }
  return keyActionMap[key]
}

export const useAboutKeyboard = () => {
  const [actions, setActions] = useState<{
    [key: string]: boolean
  }>({
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
    escape: false,
  })

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    console.log('e.code', e.code)
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
    /* console.log('e.code', e.code) */
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

  const handleOnTouchStart = (code: string) => {
    const action = actionByKey(code)
    if (action) {
      setActions((prev) => {
        return {
          ...prev,
          [action]: true,
        }
      })
    }
  }

  const handleOnTouchEnd = (code: string) => {
    const action = actionByKey(code)
    if (action) {
      setActions((prev) => {
        return {
          ...prev,
          [action]: false,
        }
      })
    }
  }

  return {
    actions,
    handleOnTouchStart: (code: string) => handleOnTouchStart(code),
    handleOnTouchEnd: (code: string) => handleOnTouchEnd(code),
  }
}
