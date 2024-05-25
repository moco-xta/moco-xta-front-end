import { useEffect, useState } from 'react'

import {
  FoodInterface,
  GridCellInterface,
  SnakeCellInterface,
} from '@/interfaces/new/snakeGameInterfaces'

import {
  generateFood,
  generateGrid,
  generateSnake,
  updateDirection,
  updateGrid,
  updateSnake,
} from '@/helpers/new/snakeGameHelpers'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export default function useSnakeGame() {
  const [grid, setGrid] = useState<GridCellInterface[][]>(
    generateGrid(
      snakeGameConstants.SNAKE_GAME.BOARD.WIDTH,
      snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT,
    ),
  )
  const [snake, setSnake] = useState<SnakeCellInterface[]>(
    generateSnake(
      snakeGameConstants.SNAKE_GAME.BOARD.WIDTH,
      snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT,
      snakeGameConstants.SNAKE_GAME.SNAKE.DEFAULT.LENGTH,
    ),
  )
  const [food, setFood] = useState<FoodInterface>(generateFood(snake))
  const [length, setLength] = useState<number>(
    snakeGameConstants.SNAKE_GAME.SNAKE.DEFAULT.LENGTH,
  )
  const [direction, setDirection] = useState<string>(
    snakeGameConstants.SNAKE_GAME.SNAKE.DEFAULT.DIRECTION,
  )
  const [updated, setUpdated] = useState<boolean>(true)

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      setDirection(updateDirection(direction, event.key))
      setUpdated(!updated)
    }
  }

  useEffect(() => {
    setGrid(updateGrid(snake, food))
  }, [snake])

  function handleSetSnake(snake: SnakeCellInterface[]) {
    setSnake([...updateSnake(direction, snake)])
    if(snake[0].position.x === food.position.x && snake[0].position.y === food.position.y) {
      setLength(length + 1)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return { grid, snake, food, length, handleSetSnake }
}
