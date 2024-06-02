import {
  FoodInterface,
  NextStepInterface,
  SnakeGameInterface,
} from '@/interfaces/new/newSnakeGameInterfaces'

import { generateFood, updateGrid, updateSnake } from '@/helpers/new/snake_game'

export function nextStep(state: SnakeGameInterface): NextStepInterface {
  const { newSnake, newDirection, newNextMove, needFood, newScore } =
    updateSnake(
      state.snake,
      state.food,
      state.direction,
      state.nextMove,
      state.score,
    )
  const newFood: FoodInterface = !needFood ? state.food : generateFood(newSnake)
  const newGrid = updateGrid(newSnake, newFood)

  return {
    newIsPlaying: state.isPlaying,
    newSnake: newSnake,
    newGrid: newGrid,
    newFood: newFood,
    newDirection: newDirection,
    newNextMove: newNextMove,
    newScore: newScore,
  } as NextStepInterface
}
