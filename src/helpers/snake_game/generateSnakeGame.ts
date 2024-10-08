import { SnakeGameInterface } from '@/interfaces/snakeGameInterfaces'

import { generateFood, generateSnake, updateGrid } from '@/helpers/snake_game'

import { default as snakeGameConstants } from '@/constants/canvas/snakeGameConstants.json'

export function generateSnakeGame(): SnakeGameInterface {
  const snake = generateSnake()
  const food = generateFood(snake)
  const grid = updateGrid(snake, food)
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
