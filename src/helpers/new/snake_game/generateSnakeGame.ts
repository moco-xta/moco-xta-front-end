import {
  generateFood,
  generateSnake,
  updateGrid,
} from '@/helpers/new/snake_game'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export function generateSnakeGame() {
  const snake = generateSnake()
  const food = generateFood(snake)
  const grid = updateGrid(snake, food)
  console.log('snake', snake)
  console.log('food', food)
  console.log('grid', grid)
  return {
    isPlaying: false,
    snake: snake,
    food: food,
    grid: grid,
    direction: snakeGameConstants.SNAKE_GAME.DEFAULT.DIRECTION,
    nextMove: snakeGameConstants.SNAKE_GAME.DEFAULT.NEXT_MOVE,
    score: 0,
    level: 1,
  }
}
