import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/redux/store'

import NewCell from './NewCell'

export default function NewBoard() {
  const dispatch = useDispatch<AppDispatch>()
  const snakeGameState = useSelector((state: RootState) => state.snakeGame)

  useEffect(() => {
    /* dispatch(setSnakeGame()) */
  }, [dispatch])

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
