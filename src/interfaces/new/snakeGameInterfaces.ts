export interface SnakeGameInterface {
  isPlaying: boolean
  grid: GridCellInterface[][]
  snake: SnakeCellInterface[]
  food: FoodInterface | null
  direction: string
  nextMove: string
  score: number
  level: number
}

export interface GridCellInterface {
  status: 'EMPTY' | 'SNAKE_HEAD' | 'SNAKE' | 'FOOD'
  position: {
    x: number
    z: number
  }
}

export interface CellComponentInterface {
  cell: GridCellInterface
}

export interface SnakeCellInterface {
  head: boolean
  position: {
    x: number
    z: number
  }
}

export interface SnakeInterface {
  length: number
  direction: string
  snakeBody: SnakeCellInterface[]
}

export interface GenerateSnakeBodyInterface {
  board: {
    width: number
    height: number
  }
  length: number
  direction: string
}

export interface SetSnakeDirectionActionInterface {
  initialSnakeDirection: string
  key: string
}

export interface FoodInterface {
  position: {
    x: number
    z: number
  }
}
