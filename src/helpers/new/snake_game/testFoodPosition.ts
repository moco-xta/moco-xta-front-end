import {
  FoodInterface,
  SnakeCellInterface,
} from '@/interfaces/new/newSnakeGameInterfaces'

export function testFoodPosition(
  food: FoodInterface,
  snake: SnakeCellInterface[],
) {
  let foodPositionIsValid: boolean = true
  snake.forEach((snakeCell) => {
    if (
      snakeCell.position.x === food.position.x &&
      snakeCell.position.z === food.position.z
    )
      foodPositionIsValid = false
  })
  return foodPositionIsValid
}
