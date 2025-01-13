import { useCallback, useEffect, useState } from 'react'

const keyActionMap: { [key: string]: string } = {
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

const actionByKey = (key: string): string | undefined => keyActionMap[key]

export const useKeyboard = () => {
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
  })

  const updateAction = useCallback((key: string, value: boolean) => {
    const action = actionByKey(key)
    if (action) {
      setActions((prev) => ({ ...prev, [action]: value }))
    }
  }, [])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => updateAction(e.code, true),
    [updateAction],
  )
  const handleKeyUp = useCallback((e: KeyboardEvent) => updateAction(e.code, false), [updateAction])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  const handleTouchStart = useCallback((code: string) => updateAction(code, true), [updateAction])
  const handleTouchEnd = useCallback((code: string) => updateAction(code, false), [updateAction])

  return {
    actions,
    handleOnClick: handleTouchStart,
    handleOnTouchStart: handleTouchStart,
    handleOnTouchEnd: handleTouchEnd,
  }
}
