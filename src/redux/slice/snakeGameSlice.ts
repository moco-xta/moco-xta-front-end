import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { SnakeGameInterface } from '@/interfaces/snakeGameInterfaces'

import { generateSnakeGame, nextStep } from '@/helpers/snake_game'

const initialState: SnakeGameInterface = generateSnakeGame()

const snakeGameSlice = createSlice({
  name: 'SnakeGame',
  initialState,
  reducers: {
    setIsPlaying: (state) => {
      state.isPlaying = !state.isPlaying
    },
    setNextMove: (state, action: PayloadAction<string>) => {
      state.nextMove = action.payload
    },
    setNextStep: (state) => {
      const { newIsPlaying, newSnake, newGrid, newFood, newDirection, newNextMove, newScore } =
        nextStep(state)
      state.isPlaying = newIsPlaying
      state.snake = newSnake
      state.grid = newGrid
      state.food = newFood
      state.direction = newDirection
      state.nextMove = newNextMove
      state.score = newScore
    },
  },
})

export const { setIsPlaying, setNextMove, setNextStep } = snakeGameSlice.actions

export default snakeGameSlice.reducer
