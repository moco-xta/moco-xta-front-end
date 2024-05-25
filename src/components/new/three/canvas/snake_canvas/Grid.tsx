import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GridCellInterface } from '@/interfaces/new/snakeGameInterfaces'

import useSnakeGame from '@/hooks/new/useSnakeGame'

import { AppDispatch, RootState } from '@/redux/store'
import { setGrid, setSnakeDirection } from '@/redux/slice/snakeGameSlice'

import Cell from './Cell'

import { updateGrid, updateSnake } from '@/helpers/new/snakeGameHelpers'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export default function Grid() {
  const dispatch = useDispatch<AppDispatch>()

  const grid = useSelector((state: RootState) => state.snakeGameSlice.grid)
  const snake = useSelector((state: RootState) => state.snakeGameSlice.snake)

  const { key, updated } = useSnakeGame()

  useEffect(() => {
    console.log('key', key)
    dispatch(
      setSnakeDirection({
        initialSnakeDirection: snake.direction,
        key: key,
      }),
    )
  }, [key, updated])

  useEffect(() => {
    const nextStep = setInterval(() => {
      const newGrid: GridCellInterface[][] = updateGrid(
        snakeGameConstants.SNAKE_GAME.BOARD.WIDTH,
        snakeGameConstants.SNAKE_GAME.BOARD.WIDTH,
        updateSnake(snake),
      )
      dispatch(setGrid(newGrid))
    }, snakeGameConstants.SNAKE_GAME.INITIAL_SPEED)

    return () => clearInterval(nextStep)
  }, [])

  return (
    <>
      {grid.map((cellsColumn, columnIndex) =>
        cellsColumn.map((cell, rowIndex) => (
          <Cell
            key={`grid_cell_${columnIndex}_${rowIndex}`}
            cell={cell}
          />
        )),
      )}
    </>
  )
}
