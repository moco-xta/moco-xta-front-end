export interface GridCellInterface {
  status: 'EMPTY' | 'SNAKE' | 'FOOD'
  position: {
    x: number
    y: number
  }
}

export interface CellComponentInterface {
  cell: GridCellInterface
}

export interface SnakeCellInterface {
  position: {
    x: number
    y: number
    z: number
  }
}

export interface SnakeInterface {
  length: number
  direction: string
  snakeBody: SnakeCellInterface[]
}

export interface SnakeGameInterface {
  grid: GridCellInterface[][]
  snake: SnakeInterface
}

export interface SnakeCellInterface {
  position: {
    x: number
    y: number
    z: number
  }
}

export interface GenerateSnakeBodyInterface {
  board: {
    width: number
    height: number
  }
  length: number
  direction: string
}
