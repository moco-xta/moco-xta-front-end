import {
  FoodInterface,
  GridCellInterface,
  SnakeCellInterface,
} from '@/interfaces/new/newSnakeGameInterfaces'

import { generateGrid, setGridCellStatus } from '@/helpers/new/snake_game'

export function updateGrid(snake: SnakeCellInterface[], food: FoodInterface) {
  const newGrid: GridCellInterface[][] = generateGrid()
  snake.forEach((snakeCell) => {
    newGrid[snakeCell.position.x][snakeCell.position.z].status =
      setGridCellStatus(snakeCell.type)
    newGrid[snakeCell.position.x][snakeCell.position.z].snake.direction =
      snakeCell.direction
  })
  newGrid[food!.position.x][food!.position.z].status = 'FOOD'
  return newGrid
}
