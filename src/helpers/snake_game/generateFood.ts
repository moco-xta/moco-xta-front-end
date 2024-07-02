import { FoodInterface, SnakeCellInterface } from '@/interfaces/new/newSnakeGameInterfaces'

import { getRandomPosition, testFoodPosition } from '@/helpers/snake_game'

import { default as snakeGameConstants } from '@/constants/canvas/snakeGameConstants.json'

export function generateFood(snake: SnakeCellInterface[]): FoodInterface {
  let newFood: FoodInterface
  do {
    newFood = {
      position: {
        x: getRandomPosition(snakeGameConstants.SNAKE_GAME.BOARD.WIDTH),
        z: getRandomPosition(snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT),
      },
    }
  } while (!testFoodPosition(newFood, snake))
  return newFood
}
