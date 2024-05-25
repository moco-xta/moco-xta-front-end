import {
  FoodInterface,
  GridCellInterface,
  SnakeCellInterface,
  SnakeInterface,
} from '@/interfaces/new/snakeGameInterfaces'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export function generateGrid(width: number, height: number) {
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

export function generateSnake(
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

function testFoodPosition(food: FoodInterface, snake: SnakeCellInterface[]) {
  let foodPositionIsValid: boolean = true
  snake.forEach((snakeCell) => {
    if (snakeCell === food) foodPositionIsValid = false
  })
  return foodPositionIsValid
}

export function generateFood(snake: SnakeCellInterface[]) {
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

export function updateGrid(snake: SnakeCellInterface[], food: FoodInterface) {
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

function updateSnakeHead(direction: string, snake: SnakeCellInterface[]) {
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
  return newSnakeHead
}

export function updateSnake(direction: string, snake: SnakeCellInterface[]) {
  const newSnake: SnakeCellInterface[] = []
  newSnake[0] = updateSnakeHead(direction, snake)
  for (let i = 1; i < snake.length; i++) {
    newSnake[i] = snake[i - 1]
  }
  console.log('newSnake', newSnake[1].position)
  return newSnake
}

export function updateDirection(initialSnakeDirection: string, key: string) {
  let newDirection: string = ''
  switch (initialSnakeDirection) {
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
      newDirection = initialSnakeDirection
      break
  }
  return newDirection
}

function getRandomPosition(max: number) {
  return Math.floor(Math.random() * max)
}
