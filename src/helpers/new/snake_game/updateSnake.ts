import {
  FoodInterface,
  SnakeCellInterface,
  UpdateSnakeInterface,
} from '@/interfaces/new/newSnakeGameInterfaces'

import { setSnakeCellType, updateSnakeHead } from '@/helpers/new/snake_game'

export function updateSnake(
  snake: SnakeCellInterface[],
  food: FoodInterface,
  direction: string,
  nextMove: string,
  score: number,
): UpdateSnakeInterface {
  const newSnake: SnakeCellInterface[] = []
  const { newSnakeHead, newDirection, newNextMove, needFood, newScore } =
    updateSnakeHead(snake[0], food, direction, nextMove, score)
  newSnake[0] = newSnakeHead
  for (let i = 1; i < snake.length + Number(needFood); i++) {
    const newSnakeCell: SnakeCellInterface = {
      type: setSnakeCellType(
        snake[i - 1],
        i === 1 ? newSnake[0] : snake[i - 2],
      ),
      position: {
        x: snake[i - 1].position.x,
        z: snake[i - 1].position.z,
      },
      direction: snake[i - 1].direction,
    }
    newSnake[i] = newSnakeCell
  }

  return {
    newSnake: newSnake,
    newDirection: newDirection,
    newNextMove: newNextMove,
    needFood: needFood,
    newScore: newScore,
  } as UpdateSnakeInterface
}
