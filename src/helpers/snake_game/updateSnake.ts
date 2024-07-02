import {
  FoodInterface,
  PositionInterface,
  SnakeCellInterface,
  UpdateSnakeInterface,
} from '@/interfaces/new/newSnakeGameInterfaces'

import { setSnakeCellType, setSnakeCellCornerType, updateSnakeHead } from '@/helpers/snake_game'

export function updateSnake(
  snake: SnakeCellInterface[],
  food: FoodInterface,
  direction: string,
  nextMove: string,
  score: number,
): UpdateSnakeInterface {
  const newSnake: SnakeCellInterface[] = []
  const { newSnakeHead, newDirection, newNextMove, needFood, newScore } = updateSnakeHead(
    snake[0],
    food,
    direction,
    nextMove,
    score,
  )
  newSnake[0] = newSnakeHead
  for (let i = 1; i < snake.length + Number(needFood); i++) {
    const newSnakeCellType: 'STRAIGHT' | 'CORNER' | 'HEAD' =
      i === 1 ? setSnakeCellType(snake[i - 1], newSnake[0]) : snake[i - 1].type
    const newSnakeCellPosition: PositionInterface = {
      x: snake[i - 1].position.x,
      z: snake[i - 1].position.z,
    }
    const newSnakeCellDirection: string = snake[i - 1].direction
    const newSnakeCellCornerType =
      newSnakeCellType === 'CORNER'
        ? i === 1
          ? setSnakeCellCornerType(
              newSnakeCellDirection,
              newSnakeCellPosition,
              newSnake[0].position,
            )
          : snake[i - 1].cornerType
        : null

    const newSnakeCell: SnakeCellInterface = {
      type: newSnakeCellType,
      position: {
        ...newSnakeCellPosition,
      },
      direction: newSnakeCellDirection,
      cornerType: newSnakeCellCornerType,
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
