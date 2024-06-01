import * as THREE from 'three'

import {
  FoodInterface,
  GridCellInterface,
  SnakeCellInterface,
  SnakeGameInterface,
} from '@/interfaces/new/snakeGameInterfaces'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

// GENERATE

export function generateGrid() {
  const grid: GridCellInterface[][] = []
  for (let x = 0; x < snakeGameConstants.SNAKE_GAME.BOARD.WIDTH; x++) {
    grid.push([])
    for (let z = 0; z < snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT; z++) {
      const newCell: GridCellInterface = {
        status: 'EMPTY',
        position: { x: x, z: z },
        snakeCellDirection: null,
      }
      grid[x].push(newCell)
    }
  }
  return grid
}

export function generateSnake() {
  const snake: SnakeCellInterface[] = []
  for (let i = 0; i < snakeGameConstants.SNAKE_GAME.SNAKE.DEFAULT.LENGTH; i++) {
    snake.push({
      head: i === 0,
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

function testFoodPosition(food: FoodInterface, snake: SnakeCellInterface[]) {
  let foodPositionIsValid: boolean = true
  snake.forEach((snakeCell) => {
    if (snakeCell === food) foodPositionIsValid = false
  })
  return foodPositionIsValid
}

function getRandomPosition(max: number) {
  return Math.floor(Math.random() * max)
}

export function generateFood(snake: SnakeCellInterface[]) {
  let newFood: FoodInterface
  do {
    newFood = {
      position: {
        x: getRandomPosition(snakeGameConstants.SNAKE_GAME.BOARD.WIDTH),
        z: getRandomPosition(snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT),
      },
    }
  } while (!testFoodPosition(newFood, snake))
  return newFood
}

// UPDATE

function updateDirection(direction: string, nextMove: string) {
  let newDirection: string = ''
  switch (direction) {
    case 'TOP':
      newDirection = nextMove === 'ArrowLeft' ? 'RIGHT' : 'LEFT'
      break
    case 'BOTTOM':
      newDirection = nextMove === 'ArrowLeft' ? 'LEFT' : 'RIGHT'
      break
    case 'LEFT':
      newDirection = nextMove === 'ArrowLeft' ? 'TOP' : 'BOTTOM'
      break
    case 'RIGHT':
      newDirection = nextMove === 'ArrowLeft' ? 'BOTTOM' : 'TOP'
      break
    default:
      newDirection = direction
      break
  }
  return newDirection
}

function isEating(snakeHead: SnakeCellInterface, food: FoodInterface | null) {
  return (
    snakeHead.position.x === food!.position.x &&
    snakeHead.position.z === food!.position.z
  )
}

function updateSnakeHead(
  snakeHead: SnakeCellInterface,
  food: FoodInterface | null,
  direction: string,
  nextMove: string,
  score: number,
) {
  let newDirection: string = direction
  if (nextMove !== 'ArrowUp')
    newDirection = updateDirection(direction, nextMove)
  let newSnakeHead: SnakeCellInterface
  newSnakeHead = {
    head: true,
    position: {
      x:
        newDirection === 'LEFT' || newDirection === 'RIGHT'
          ? newDirection === 'LEFT'
            ? snakeHead.position.x - 1 < 0
              ? snakeGameConstants.SNAKE_GAME.BOARD.WIDTH - 1
              : snakeHead.position.x - 1
            : snakeHead.position.x + 1 >=
                snakeGameConstants.SNAKE_GAME.BOARD.WIDTH
              ? 0
              : snakeHead.position.x + 1
          : snakeHead.position.x,
      z:
        newDirection === 'TOP' || newDirection === 'BOTTOM'
          ? newDirection === 'TOP'
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
  }
  return {
    newSnakeHead: newSnakeHead,
    newDirection: newDirection,
    newNextMove: snakeGameConstants.SNAKE_GAME.SNAKE.DEFAULT.NEXT_MOVE,
    needFood: isEating(newSnakeHead, food),
    newScore: !isEating(newSnakeHead, food) ? score : score + 5,
  }
}

function updateSnake(
  snake: SnakeCellInterface[],
  food: FoodInterface | null,
  direction: string,
  nextMove: string,
  score: number,
) {
  const newSnake: SnakeCellInterface[] = []
  const { newSnakeHead, newDirection, newNextMove, needFood, newScore } =
    updateSnakeHead(snake[0], food, direction, nextMove, score)
  newSnake[0] = newSnakeHead
  for (let i = 1; i < snake.length + Number(needFood); i++) {
    snake[i - 1].head = false
    newSnake[i] = snake[i - 1]
  }

  return {
    newSnake: newSnake,
    newDirection: newDirection,
    newNextMove: newNextMove,
    needFood: needFood,
    newScore: newScore,
  }
}

export function updateGrid(
  snake: SnakeCellInterface[],
  food: FoodInterface | null,
) {
  const newGrid: GridCellInterface[][] = generateGrid()
  snake.forEach((snakeCell) => {
    newGrid[snakeCell.position.x][snakeCell.position.z].status = snakeCell.head
      ? 'SNAKE_HEAD'
      : 'SNAKE'
    newGrid[snakeCell.position.x][snakeCell.position.z].snakeCellDirection =
      snakeCell.direction
  })
  newGrid[food!.position.x][food!.position.z].status = 'FOOD'
  return newGrid
}

export function nextStep(state: SnakeGameInterface) {
  const { newSnake, newDirection, newNextMove, needFood, newScore } =
    updateSnake(
      state.snake,
      state.food,
      state.direction,
      state.nextMove,
      state.score,
    )
  const newFood: FoodInterface | null = !needFood
    ? state.food
    : generateFood(newSnake)
  const newGrid = updateGrid(newSnake, newFood)

  return {
    newIsPlaying: state.isPlaying,
    newSnake: newSnake,
    newGrid: newGrid,
    newFood: newFood,
    newDirection: newDirection,
    newNextMove: newNextMove,
    newScore: newScore,
  }
}

export function updateCamera(snakeHead: SnakeCellInterface, direction: string) {
  let newGroupPosition = {
    x: 0,
    y: 0,
    z: 0,
  }
  let newGroupRotation = {
    x: 0,
    y: 0,
    z: 0,
  }
  let newCameraRotation = {
    x: 0,
    y: 0,
    z: 0,
  }

  switch (direction) {
    case 'TOP':
      newGroupPosition = {
        x: snakeHead.position.x,
        y: snakeGameConstants.PERSPECTIVE_CAMERA.POSITION.Y,
        z:
          snakeHead.position.z -
          snakeGameConstants.PERSPECTIVE_CAMERA.POSITION
            .DISTANCE_FROM_SNAKE_HEAD,
      }
      newGroupRotation.x = THREE.MathUtils.degToRad(
        snakeGameConstants.PERSPECTIVE_CAMERA.ROTATION.TILT,
      )
      newCameraRotation.y = THREE.MathUtils.degToRad(180)
      break
    case 'BOTTOM':
      newGroupPosition = {
        x: snakeHead.position.x,
        y: snakeGameConstants.PERSPECTIVE_CAMERA.POSITION.Y,
        z:
          snakeHead.position.z +
          snakeGameConstants.PERSPECTIVE_CAMERA.POSITION
            .DISTANCE_FROM_SNAKE_HEAD,
      }
      newGroupRotation.x = THREE.MathUtils.degToRad(
        -snakeGameConstants.PERSPECTIVE_CAMERA.ROTATION.TILT,
      )
      newCameraRotation.y = THREE.MathUtils.degToRad(0)
      break
    case 'LEFT':
      newGroupPosition = {
        x:
          snakeHead.position.x +
          snakeGameConstants.PERSPECTIVE_CAMERA.POSITION
            .DISTANCE_FROM_SNAKE_HEAD,
        y: snakeGameConstants.PERSPECTIVE_CAMERA.POSITION.Y,
        z: snakeHead.position.z,
      }
      newGroupRotation.z = THREE.MathUtils.degToRad(
        snakeGameConstants.PERSPECTIVE_CAMERA.ROTATION.TILT,
      )
      newCameraRotation.y = THREE.MathUtils.degToRad(90)
      break
    case 'RIGHT':
      newGroupPosition = {
        x:
          snakeHead.position.x -
          snakeGameConstants.PERSPECTIVE_CAMERA.POSITION
            .DISTANCE_FROM_SNAKE_HEAD,
        y: snakeGameConstants.PERSPECTIVE_CAMERA.POSITION.Y,
        z: snakeHead.position.z,
      }
      newGroupRotation.z = THREE.MathUtils.degToRad(
        -snakeGameConstants.PERSPECTIVE_CAMERA.ROTATION.TILT,
      )
      newCameraRotation.y = THREE.MathUtils.degToRad(-90)
      break
    default:
      break
  }

  return {
    newGroupPosition: newGroupPosition,
    newGroupRotation: newGroupRotation,
    newCameraRotation: newCameraRotation,
  }
}

export function setSnakeCellRotation(direction: string) {
  switch (direction) {
    case 'TOP':
      return new THREE.Euler(0, THREE.MathUtils.degToRad(-90), 0)
    case 'BOTTOM':
      return new THREE.Euler(0, THREE.MathUtils.degToRad(90), 0)
    case 'LEFT':
      return new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)
    case 'RIGHT':
      return new THREE.Euler(0, THREE.MathUtils.degToRad(0), 0)
    default:
      return new THREE.Euler(0, 0, 0)
  }
}
