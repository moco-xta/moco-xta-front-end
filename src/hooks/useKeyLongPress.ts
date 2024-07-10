import { useCallback, useRef, useState } from 'react'

const useKeyLongPress = (
  onLongPress: () => void,
  onClick: () => void,
  { shouldPreventDefault = true, delay = 300 } = {},
) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false)
  const timeout = useRef<number>(null!)
  const target = useRef<EventTarget>(null!)

  const start = useCallback(
    (event: any) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener('touchend', preventDefault, {
          passive: false,
        })
        target.current = event.target
      }
      timeout.current = window.setTimeout(() => {
        onLongPress()
        setLongPressTriggered(true)
      }, delay)
    },
    [onLongPress, delay, shouldPreventDefault],
  )

  const clear = useCallback(
    (_: null, shouldTriggerClick = true) => {
      timeout.current && clearTimeout(timeout.current)
      shouldTriggerClick && !longPressTriggered && onClick()
      setLongPressTriggered(false)
      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener('touchend', preventDefault)
      }
    },
    [shouldPreventDefault, onClick, longPressTriggered],
  )

  return {
    onClick: (e: any) => start(e),
    /* onTouchStart: (e: Event) => start(e), */
    onMouseUp: () => clear(null),
    /* onMouseLeave: () => clear(null, false), */
    /* onTouchEnd: () => clear(null), */
  }
}

const isTouchEvent = (event: Event) => {
  return 'touches' in event
}

const preventDefault = (event: Event) => {
  if (!isTouchEvent(event)) return

  // @ts-ignore
  if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault()
  }
}

export default useKeyLongPress
