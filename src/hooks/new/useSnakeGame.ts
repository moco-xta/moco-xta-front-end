import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/redux/store'
import { setIsPlaying, setNextMove } from '@/redux/slice/snakeGameSlice'

export default function useSnakeGame() {
  const dispatch = useDispatch<AppDispatch>()
  const isPlaying = useSelector((state: RootState) => state.snakeGame.isPlaying)

  function handleKeyDown(event: KeyboardEvent) {
    console.log('event.code', event.code)
    if (
      event.code === 'ArrowUp' ||
      event.code === 'ArrowLeft' ||
      event.code === 'ArrowRight'
    ) {
      if (isPlaying) dispatch(setNextMove(event.code))
    }
    if (event.code === 'Space') {
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
