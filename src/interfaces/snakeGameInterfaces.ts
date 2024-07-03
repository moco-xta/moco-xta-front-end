export interface PositionInterface {
  x: number
  z: number
}

export interface SnakeGameInterface {
  isPlaying: boolean
  snake: SnakeCellInterface[]
  food: FoodInterface
  grid: GridCellInterface[][]
  direction: string
  nextMove: string
  score: number
  level: number
}

export interface SnakeCellInterface {
  type: 'HEAD' | 'STRAIGHT' | 'CORNER'
  position: PositionInterface
  direction: string
  cornerType: string | null
}

export interface FoodInterface {
  position: PositionInterface
}

export interface GridCellInterface {
  status: 'EMPTY' | 'SNAKE_HEAD' | 'SNAKE_STRAIGHT' | 'SNAKE_CORNER' | 'FOOD'
  position: PositionInterface
  snake: {
    direction: string | null
    cornerType: string | null
  }
}

export interface CellComponentInterface {
  cell: GridCellInterface
}

export interface NextStepInterface {
  newIsPlaying: boolean
  newSnake: SnakeCellInterface[]
  newFood: FoodInterface
  newGrid: GridCellInterface[][]
  newDirection: string
  newNextMove: string
  newScore: number
  newLevel: number
}

export interface UpdateCameraInterface {
  newGroupPosition: {
    x: number
    y: number
    z: number
  }
  newGroupRotation: {
    x: number
    y: number
    z: number
  }
  newCameraRotation: {
    x: number
    y: number
    z: number
  }
}

export interface UpdateSnakeInterface {
  newSnake: SnakeCellInterface[]
  newDirection: string
  newNextMove: string
  needFood: boolean
  newScore: number
}

export interface UpdateSnakeHeadInterface {
  newSnakeHead: SnakeCellInterface
  newDirection: string
  newNextMove: string
  needFood: boolean
  newScore: number
}
