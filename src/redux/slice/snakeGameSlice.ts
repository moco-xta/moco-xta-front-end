import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { SnakeGameInterface } from '@/interfaces/new/snakeGameInterfaces'

import {
  generateFood,
  generateGrid,
  generateSnake,
  nextStep,
  updateGrid,
} from '@/helpers/new/snakeGameHelpers'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

const initialState: SnakeGameInterface = {
  isPlaying: false,
  snake: generateSnake(),
  grid: generateGrid(),
  food: null,
  direction: snakeGameConstants.SNAKE_GAME.SNAKE.DEFAULT.DIRECTION,
  nextMove: snakeGameConstants.SNAKE_GAME.SNAKE.DEFAULT.NEXT_MOVE,
  score: 0,
  level: 1,
}

const snakeGameSlice = createSlice({
  name: 'SnakeGame',
  initialState,
  reducers: {
    setSnakeGame: (state) => {
      state.food = generateFood(state.snake)
      state.grid = updateGrid(state.snake, state.food)
    },
    setIsPlaying: (state) => {
      state.isPlaying = !state.isPlaying
    },
    setNextMove: (state, action: PayloadAction<string>) => {
      state.nextMove = action.payload
    },
    setNextStep: (state) => {
      const {
        newIsPlaying,
        newSnake,
        newGrid,
        newFood,
        newDirection,
        newNextMove,
        newScore,
      } = nextStep(state)
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

export const { setIsPlaying, setNextMove, setNextStep, setSnakeGame } =
  snakeGameSlice.actions

export default snakeGameSlice.reducer
