import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'
import Cell from '../snake_game_canvas/Cell'

export default function Board() {
  const snakeGameState = useSelector((state: RootState) => state.snakeGame)

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
