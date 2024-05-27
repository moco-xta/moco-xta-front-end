import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { setNextMove } from '@/redux/slice/snakeGameSlice'

export default function useSnakeGame() {
  const dispatch = useDispatch<AppDispatch>()

  const nextMove = useSelector((state: RootState) => state.snakeGame.nextMove)

  useEffect(() => {
    console.log('nextMove', nextMove)
  }, [nextMove])

  function handleKeyDown(event: KeyboardEvent) {
    if (
      event.key === 'ArrowUp' ||
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowRight'
    ) {
      dispatch(setNextMove(event.key))
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
