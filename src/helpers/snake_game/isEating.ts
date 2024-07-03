import { FoodInterface, SnakeCellInterface } from '@/interfaces/snakeGameInterfaces'

export function isEating(snakeHead: SnakeCellInterface, food: FoodInterface): boolean {
  return snakeHead.position.x === food.position.x && snakeHead.position.z === food.position.z
}
