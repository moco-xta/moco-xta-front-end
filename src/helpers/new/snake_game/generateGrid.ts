import { GridCellInterface } from '@/interfaces/new/newSnakeGameInterfaces'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export function generateGrid(): GridCellInterface[][] {
  const grid: GridCellInterface[][] = []
  for (let x = 0; x < snakeGameConstants.SNAKE_GAME.BOARD.WIDTH; x++) {
    grid.push([])
    for (let z = 0; z < snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT; z++) {
      const newCell: GridCellInterface = {
        status: 'EMPTY',
        position: { x: x, z: z },
        snake: {
          direction: null,
          corner: null,
        },
      }
      grid[x].push(newCell)
    }
  }
  return grid
}
