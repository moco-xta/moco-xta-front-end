import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { lifeGameInterface } from '@/interfaces/reduxSlicesInterfaces'

const GRID_COLUMNS = Math.round(window.innerWidth / 60)
const GRID_ROWS = Math.round(window.innerHeight / 60)

console.log(
  Math.round(window.innerWidth / 60),
  Math.round(window.innerHeight / 60),
)

const OPERATIONS = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
]

const generateEmptyGrid = () => {
  const rows: number[][] = []
  for (let i = 0; i < GRID_COLUMNS; i++) {
    rows.push(
      Array.from(Array(GRID_ROWS), () => (Math.random() >= 0.5 ? 1 : 0)),
    )
    /* rows.push(Array.from(Array(GRID_ROWS), () => 0)) */
  }
  return rows
}

const initialState: lifeGameInterface = {
  grid: generateEmptyGrid(),
  columns: GRID_COLUMNS,
  rows: GRID_ROWS,
}

interface SetCellStateInterface {
  columnIndex: number
  rowIndex: number
}

const lifeGameSlice = createSlice({
  name: 'LifeGame',
  initialState,
  reducers: {
    setCellState: (state, action: PayloadAction<SetCellStateInterface>) => {
      state.grid[action.payload.columnIndex][action.payload.rowIndex] =
        state.grid[action.payload.columnIndex][action.payload.rowIndex] === 0
          ? 1
          : 0
    },
    setNextState: (state, action: PayloadAction) => {
      const newGrid: number[][] = [...state.grid]
      for (let i = 0; i < GRID_COLUMNS; i++) {
        for (let j = 0; j < GRID_ROWS; j++) {
          let neighbours = 0
          OPERATIONS.forEach(([x, y]) => {
            const newI = i + x
            const newJ = j + y
            if (
              newI >= 0 &&
              newI < GRID_COLUMNS &&
              newJ >= 0 &&
              newJ < GRID_ROWS
            ) {
              neighbours += [...state.grid][newI][newJ]
            }
          })
          if (neighbours < 2 || neighbours > 3) {
            newGrid[i][j] = 0
          } else if ([...state.grid][i][j] === 0 && neighbours === 3) {
            newGrid[i][j] = 1
          }
        }
      }
      state.grid = newGrid
    },
  },
})

export const { setCellState, setNextState } = lifeGameSlice.actions

export default lifeGameSlice.reducer
