import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { GridCellInterface, SnakeGameInterface } from '@/interfaces/new/snakeGameInterfaces'

import { generateGrid, generateSnake, updateGrid } from '@/helpers/new/snakeGameHelpers'

import { default as snakGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

const initialState: SnakeGameInterface = {
  grid: generateGrid(
    snakGameConstants.SNAKE_GAME.BOARD.WIDTH,
    snakGameConstants.SNAKE_GAME.BOARD.HEIGHT,
  ),
  snake: generateSnake(
    snakGameConstants.SNAKE_GAME.BOARD.WIDTH,
    snakGameConstants.SNAKE_GAME.BOARD.HEIGHT,
    snakGameConstants.SNAKE_GAME.SNAKE.DEFAULT.LENGTH,
  )
}

const snakeGameSlice = createSlice({
  name: 'SnakeGame',
  initialState,
  reducers: {
    setGrid: (state, action: PayloadAction<GridCellInterface[][]>) => {
      console.log('test')
      state.grid = action.payload
    },
  },
})

export const { setGrid } = snakeGameSlice.actions

export default snakeGameSlice.reducer
