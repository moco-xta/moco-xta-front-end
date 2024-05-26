export interface SnakeGameInterface {
  isPlaying: boolean
  grid: GridCellInterface[][]
  snake: SnakeCellInterface[]
  food: FoodInterface | null
}

export interface GridCellInterface {
  status: 'EMPTY' | 'SNAKE' | 'SNAKE_HEAD' | 'FOOD'
  position: {
    x: number
    z: number
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

export interface SetSnakeDirectionActionInterface {
  initialSnakeDirection: string
  key: string
}

export interface FoodInterface {
  position: {
    x: number
    y: number
    z: number
  }
}
