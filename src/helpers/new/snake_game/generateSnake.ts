import { SnakeCellInterface } from '@/interfaces/new/newSnakeGameInterfaces'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export function generateSnake(): SnakeCellInterface[] {
  const snake: SnakeCellInterface[] = []
  for (let i = 0; i < snakeGameConstants.SNAKE_GAME.SNAKE.DEFAULT.LENGTH; i++) {
    snake.push({
      type: i === 0 ? 'HEAD' : 'STRAIGHT',
      position: {
        x:
          i === 0
            ? snakeGameConstants.SNAKE_GAME.BOARD.WIDTH / 2
            : snakeGameConstants.SNAKE_GAME.BOARD.WIDTH / 2 - i,
        z: snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT / 2,
      },
      direction: snakeGameConstants.SNAKE_GAME.SNAKE.DEFAULT.DIRECTION,
    })
  }
  return snake
}
