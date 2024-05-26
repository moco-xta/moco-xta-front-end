import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import useSnakeGame from '@/hooks/new/useSnakeGame'

import Cell from './Cell'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export default function Grid() {
  const isPlaying = useSelector((state: RootState) => state.snakeGame.isPlaying)
  const grid = useSelector((state: RootState) => state.snakeGame.grid)

  const nextStep = setInterval(() => {
    if (isPlaying) console.log('PLAYING')
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
