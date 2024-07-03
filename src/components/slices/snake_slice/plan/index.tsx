import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import './index.scss'

export default function Plan() {
  const snakeGameState = useSelector((state: RootState) => state.snakeGame)

  return (
    <div id='plan'>
      {snakeGameState.grid.map((cellsColumn, columnIndex) => (
        <div
          key={`column_plan_${columnIndex}`}
          className='column'
        >
          {cellsColumn.map((cell, rowIndex) => (
            <div
              key={`cell_plan_${columnIndex}_${rowIndex}`}
              className={`cell ${cell.status === 'FOOD' ? 'food' : cell.status === 'SNAKE_HEAD' || cell.status === 'SNAKE_STRAIGHT' || cell.status === 'SNAKE_CORNER' ? 'snake_cell' : ''}`}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
