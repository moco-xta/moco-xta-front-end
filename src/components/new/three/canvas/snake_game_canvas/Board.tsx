import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNextStep, setSnakeGame } from '@/redux/slice/snakeGameSlice'

import { AppDispatch, RootState } from '@/redux/store'

import useSnakeGame from '@/hooks/new/useSnakeGame'

import Cell from './Cell'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export default function Board() {
  const dispatch = useDispatch<AppDispatch>()
  const snakeGameState = useSelector((state: RootState) => state.snakeGame)

  useSnakeGame()

  useEffect(() => {
    dispatch(setSnakeGame())
  }, [])

  const nextStep = setInterval(() => {
    if (snakeGameState.isPlaying) {
      dispatch(setNextStep())
    }
  }, snakeGameConstants.SNAKE_GAME.INITIAL_SPEED)

  useEffect(() => {
    return () => clearInterval(nextStep)
  }, [nextStep])

  return (
    <group>
      {snakeGameState.grid.map((cellsColumn, columnIndex) =>
        cellsColumn.map((cell, rowIndex) => (
          <Cell
            key={`grid_cell_${columnIndex}_${rowIndex}`}
            cell={cell}
          />
        )),
      )}
    </group>
  )
}
