import {
  GenerateSnakeBodyInterface,
  GridCellInterface,
  SnakeCellInterface,
  SnakeGameInterface,
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
  console.log('grid', grid)
  return grid
}

export function updateGrid(boardWidth: number, boardHeight: number, snake: SnakeInterface) {
  const newGrid: GridCellInterface[][] = generateGrid(boardWidth, boardWidth)
  snake.snakeBody.forEach(snakeCell => {
    newGrid[snakeCell.position.x][snakeCell.position.y].status = 'SNAKE'
  })
  return newGrid
}

function generateSnakeBody(boardWidth: number, boardHeight: number, length: number) {
  const snakeBody: SnakeCellInterface[] = []
  for(let i = 0; i < length; i++) {
    snakeBody.push({
      position: {
        x: i === 0 ? boardWidth / 2 : (boardWidth / 2) - i,
        y: boardHeight / 2,
        z: 0
      }
    })
  }
  console.log('snakeBody', snakeBody)
  return snakeBody
}

export function generateSnake(
  boardWidth: number,
  boardHeight: number,
  length: number
) {
  const snake: SnakeInterface = {
    length: length,
    direction: 'RIGHT',
    snakeBody: generateSnakeBody(boardWidth, boardHeight, length)
  }
  console.log('snake', snake)
  return snake
}