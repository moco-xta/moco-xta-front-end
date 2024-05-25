import {
  GridCellInterface,
  SnakeCellInterface,
  SnakeInterface,
} from '@/interfaces/new/snakeGameInterfaces'

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
  /* console.log('grid', grid) */
  return grid
}

export function updateGrid(
  boardWidth: number,
  boardHeight: number,
  snake: SnakeInterface,
) {
  const newGrid: GridCellInterface[][] = generateGrid(boardWidth, boardWidth)
  snake.snakeBody.forEach((snakeCell) => {
    newGrid[snakeCell.position.x][snakeCell.position.y].status = 'SNAKE'
  })
  return newGrid
}

function generateSnakeBody(
  boardWidth: number,
  boardHeight: number,
  length: number,
) {
  const snakeBody: SnakeCellInterface[] = []
  for (let i = 0; i < length; i++) {
    snakeBody.push({
      position: {
        x: i === 0 ? boardWidth / 2 : boardWidth / 2 - i,
        y: boardHeight / 2,
        z: 0,
      },
    })
  }
  /* console.log('snakeBody', snakeBody) */
  return snakeBody
}

export function generateSnake(
  boardWidth: number,
  boardHeight: number,
  length: number,
) {
  const snake: SnakeInterface = {
    length: length,
    direction: 'RIGHT',
    snakeBody: generateSnakeBody(boardWidth, boardHeight, length),
  }
  /* console.log('snake', snake) */
  return snake
}

export function updateSnake(snake: SnakeInterface) {
  const newSnake: SnakeInterface = {
    length: snake.length,
    direction: 'RIGHT',
    snakeBody: snake.snakeBody,
  }

  return newSnake
}

export function updateSnakeDirection(
  initialSnakeDirection: string,
  key: string,
) {
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
  console.log('newDirection', newDirection)
  return newDirection
}
