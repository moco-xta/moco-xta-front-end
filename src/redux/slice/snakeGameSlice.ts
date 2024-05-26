import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { SnakeGameInterface } from '@/interfaces/new/snakeGameInterfaces'

import { generateGrid, generateSnake } from '@/helpers/new/snakeGameHelpers'

const initialState: SnakeGameInterface = {
  isPlaying: false,
  grid: generateGrid(),
  snake: generateSnake(),
  food: null,
}

const snakeGameSlice = createSlice({
  name: 'SnakeGame',
  initialState,
  reducers: {},
})

export const {} = snakeGameSlice.actions

export default snakeGameSlice.reducer
