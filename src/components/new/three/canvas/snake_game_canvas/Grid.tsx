import React, { useEffect } from 'react'

import useSnakeGame from '@/hooks/new/useSnakeGame'

import Cell from './Cell'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export default function Grid() {
  const { grid, snake, handleNextStep } = useSnakeGame()

  const nextStep = setInterval(() => {
    handleNextStep(snake)
  }, snakeGameConstants.SNAKE_GAME.INITIAL_SPEED)

  useEffect(() => {
    return () => clearInterval(nextStep)
  }, [nextStep])

  return (
    <group>
      {grid.map((cellsColumn, columnIndex) =>
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
