import { useEffect, useState } from 'react'

import {
  FoodInterface,
  GridCellInterface,
  SnakeCellInterface,
} from '@/interfaces/new/snakeGameInterfaces'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export default function useSnakeGame() {

  // GENERATE FUNCTIONS

  function generateGrid(width: number, height: number) {
    const grid: GridCellInterface[][] = []
    for (let i = 0; i < width; i++) {
      grid.push([])
      for (let j = 0; j < height; j++) {
        const newCell: GridCellInterface = {
          status: 'EMPTY',
          position: { x: i, y: j },
        }
        grid[i].push(newCell)
      }
    }
    return grid
  }

  function generateSnake(
    boardWidth: number,
    boardHeight: number,
    length: number,
  ) {
    const snake: SnakeCellInterface[] = []
    for (let i = 0; i < length; i++) {
      snake.push({
        position: {
          x: i === 0 ? boardWidth / 2 : boardWidth / 2 - i,
          y: boardHeight / 2,
          z: 0,
        },
      })
    }
    return snake
  }

  function getRandomPosition(max: number) {
    return Math.floor(Math.random() * max)
  }

  function testFoodPosition(food: FoodInterface, snake: SnakeCellInterface[]) {
    let foodPositionIsValid: boolean = true
    snake.forEach((snakeCell) => {
      if (snakeCell === food) foodPositionIsValid = false
    })
    return foodPositionIsValid
  }
  
  function generateFood() {
    let newFood: FoodInterface
    do {
      newFood = {
        position: {
          x: getRandomPosition(snakeGameConstants.SNAKE_GAME.BOARD.WIDTH),
          y: getRandomPosition(snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT),
          z: 0,
        },
      }
    } while (!testFoodPosition(newFood, snake))
    return newFood
  }

  // STATES

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
  const [food, setFood] = useState<FoodInterface>(generateFood())
  const [length, setLength] = useState<number>(
    snakeGameConstants.SNAKE_GAME.SNAKE.DEFAULT.LENGTH,
  )
  const [direction, setDirection] = useState<string>(
    snakeGameConstants.SNAKE_GAME.SNAKE.DEFAULT.DIRECTION,
  )

  // UPDATE FUNCTIONS

  function updateSnakeHead(snake: SnakeCellInterface[]) {
    const newSnakeHead: SnakeCellInterface = {
      position: {
        x:
          direction === 'LEFT' || direction === 'RIGHT'
            ? direction === 'LEFT'
              ? snake[0].position.x - 1 < 0
                ? snakeGameConstants.SNAKE_GAME.BOARD.WIDTH - 1
                : snake[0].position.x - 1
              : snake[0].position.x + 1 >=
                  snakeGameConstants.SNAKE_GAME.BOARD.WIDTH
                ? 0
                : snake[0].position.x + 1
            : snake[0].position.x,
        y:
          direction === 'TOP' || direction === 'BOTTOM'
            ? direction === 'TOP'
              ? snake[0].position.y + 1 >=
                snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT
                ? 0
                : snake[0].position.y + 1
              : snake[0].position.y - 1 < 0
                ? snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT - 1
                : snake[0].position.y - 1
            : snake[0].position.y,
        z: 0,
      },
    }
    if(newSnakeHead.position === food.position) {
      setLength(length + 1)
      generateFood()
    }
    return newSnakeHead
  }

  function updateSnake(snake: SnakeCellInterface[]) {
    const newSnake: SnakeCellInterface[] = []
    newSnake[0] = updateSnakeHead(snake)
    for (let i = 1; i < snake.length; i++) {
      newSnake[i] = snake[i - 1]
    }
    console.log('newSnake', newSnake[1].position)
    return newSnake
  }

  function updateGrid(snake: SnakeCellInterface[]) {
    const newGrid: GridCellInterface[][] = generateGrid(
      snakeGameConstants.SNAKE_GAME.BOARD.WIDTH,
      snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT,
    )
    snake.forEach((snakeCell) => {
      newGrid[snakeCell.position.x][snakeCell.position.y].status = 'SNAKE'
    })
    newGrid[food.position.x][food.position.y].status = 'FOOD'
    return newGrid
  }

  // CONTROLS

  function handleNextStep(snake: SnakeCellInterface[]) {
    setSnake(updateSnake(snake))
  }

  useEffect(() => {
    setGrid(updateGrid(snake))
  }, [snake])

  // DIRECTION

  function updateDirection(key: string) {
    let newDirection: string = ''
    switch (direction) {
      case 'TOP':
        newDirection = key === 'ArrowLeft' ? 'LEFT' : 'RIGHT'
        break
      case 'BOTTOM':
        newDirection = key === 'ArrowLeft' ? 'RIGHT' : 'LEFT'
        break
      case 'LEFT':
        newDirection = key === 'ArrowLeft' ? 'BOTTOM' : 'TOP'
        break
      case 'RIGHT':
        newDirection = key === 'ArrowLeft' ? 'TOP' : 'BOTTOM'
        break
      default:
        newDirection = direction
        break
    }
    return newDirection
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      setDirection(updateDirection(event.key))
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])



  /* 

  useEffect(() => {
    setGrid(updateGrid(snake, food))
  }, [snake])

  function handleSetSnake(snake: SnakeCellInterface[]) {
    setSnake([...updateSnake(direction, snake)])
    if(snake[0].position.x === food.position.x && snake[0].position.y === food.position.y) {
      setLength(length + 1)
    }
  } */

  return { grid, snake, handleNextStep }
}
