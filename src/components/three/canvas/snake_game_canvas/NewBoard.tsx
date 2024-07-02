import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useSnakeGameKeyboard from '@/hooks/new/useSnakeGameKeyboard'

import { AppDispatch, RootState } from '@/redux/store'
import { setNextStep } from '@/redux/slice/snakeGameSlice'

import NewCell from './NewCell'

import { default as snakeGameConstants } from '@/constants/canvas/snakeGameConstants.json'

export default function NewBoard() {
  const dispatch = useDispatch<AppDispatch>()
  const snakeGameState = useSelector((state: RootState) => state.snakeGame)

  const {} = useSnakeGameKeyboard()

  const nextStep = setInterval(() => {
    if (snakeGameState.isPlaying) {
      dispatch(setNextStep())
    }
  }, snakeGameConstants.SNAKE_GAME.DEFAULT.SPEED)

  useEffect(() => {
    return () => clearInterval(nextStep)
  }, [nextStep])

  return (
    <group>
      {snakeGameState.grid.map((cellsColumn, columnIndex) =>
        cellsColumn.map((cell, rowIndex) => (
          <NewCell
            key={`grid_cell_${columnIndex}_${rowIndex}`}
            cell={cell}
          />
        )),
      )}
    </group>
  )
}
