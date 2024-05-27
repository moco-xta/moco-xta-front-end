import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch, RootState } from '@/redux/store'
import { setIsPlaying, setNextMove } from '@/redux/slice/snakeGameSlice'

export default function useSnakeGame() {
  const dispatch = useDispatch<AppDispatch>()

  function handleKeyDown(event: KeyboardEvent) {
    console.log('event.code', event.code )
    if (
      event.code === 'ArrowUp' ||
      event.code === 'ArrowLeft' ||
      event.code === 'ArrowRight'
    ) {
      dispatch(setNextMove(event.code))
    }
    if (
      event.code === 'Space'
    ) {
      dispatch(setIsPlaying())
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return {}
}
