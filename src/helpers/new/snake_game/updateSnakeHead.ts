import {
  FoodInterface,
  SnakeCellInterface,
  UpdateSnakeHeadInterface,
} from '@/interfaces/new/newSnakeGameInterfaces'

import { isEating, updateDirection } from '@/helpers/new/snake_game'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export function updateSnakeHead(
  snakeHead: SnakeCellInterface,
  food: FoodInterface,
  direction: string,
  nextMove: string,
  score: number,
): UpdateSnakeHeadInterface {
  let newDirection: string = direction
  if (nextMove !== 'ArrowUp')
    newDirection = updateDirection(direction, nextMove)
  let newSnakeHead: SnakeCellInterface
  newSnakeHead = {
    type: 'HEAD',
    position: {
      x:
        newDirection === 'WEST' || newDirection === 'EAST'
          ? newDirection === 'WEST'
            ? snakeHead.position.x - 1 < 0
              ? snakeGameConstants.SNAKE_GAME.BOARD.WIDTH - 1
              : snakeHead.position.x - 1
            : snakeHead.position.x + 1 >=
                snakeGameConstants.SNAKE_GAME.BOARD.WIDTH
              ? 0
              : snakeHead.position.x + 1
          : snakeHead.position.x,
      z:
        newDirection === 'NORTH' || newDirection === 'SOUTH'
          ? newDirection === 'NORTH'
            ? snakeHead.position.z + 1 >=
              snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT
              ? 0
              : snakeHead.position.z + 1
            : snakeHead.position.z - 1 < 0
              ? snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT - 1
              : snakeHead.position.z - 1
          : snakeHead.position.z,
    },
    direction: newDirection,
    cornerType: null,
  }
  return {
    newSnakeHead: newSnakeHead,
    newDirection: newDirection,
    newNextMove: snakeGameConstants.SNAKE_GAME.SNAKE.DEFAULT.NEXT_MOVE,
    needFood: isEating(newSnakeHead, food),
    newScore: !isEating(newSnakeHead, food) ? score : score + 5,
  } as UpdateSnakeHeadInterface
}
