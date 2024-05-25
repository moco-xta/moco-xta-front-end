import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GridCellInterface } from '@/interfaces/new/snakeGameInterfaces'

import { AppDispatch, RootState } from '@/redux/store'
import { setGrid } from '@/redux/slice/snakeGameSlice'

import Cell from './Cell'

import { updateGrid } from '@/helpers/new/snakeGameHelpers'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export default function Grid() {
  const dispatch = useDispatch<AppDispatch>()

  const grid = useSelector((state: RootState) => state.snakeGameSlice.grid)
  const snake = useSelector((state: RootState) => state.snakeGameSlice.snake)

  useEffect(() => {
    const nextStep = setInterval(() => {
      const newGrid: GridCellInterface[][] = updateGrid(snakeGameConstants.SNAKE_GAME.BOARD.WIDTH, snakeGameConstants.SNAKE_GAME.BOARD.WIDTH, snake)
      dispatch(setGrid(newGrid))
    }, snakeGameConstants.SNAKE_GAME.INITIAL_SPEED)

    return () => clearInterval(nextStep)
  }, [])

  return (
    <>
      {grid.map((cellsColumn, columnIndex) =>
        cellsColumn.map((cell, rowIndex) => <Cell cell={cell} />),
      )}
    </>
  )
}
