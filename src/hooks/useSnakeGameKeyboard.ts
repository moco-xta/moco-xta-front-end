import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/redux/store'
import { setIsPlaying, setNextMove } from '@/redux/slice/snakeGameSlice'

export default function useSnakeGameKeyboard() {
  const dispatch = useDispatch<AppDispatch>()
  const isPlaying = useSelector((state: RootState) => state.snakeGame.isPlaying)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === 'ArrowUp' || event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
        if (isPlaying) dispatch(setNextMove(event.code))
      }
      if (event.code === 'Space') {
        dispatch(setIsPlaying())
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [dispatch, isPlaying])

  return {}
}
