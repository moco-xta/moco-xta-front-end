interface PositionInterface {
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
}

export interface FoodInterface {
  position: PositionInterface
}

export interface GridCellInterface {
  status: 'EMPTY' | 'SNAKE_HEAD' | 'SNAKE_STRAIGHT' | 'SNAKE_CORNER' | 'FOOD'
  position: PositionInterface
  snake: {
    direction: string | null
    // direction: 'NORTH' | 'SOUTH' | 'WEST' | 'EAST',
    corner: string | null
    // corner?: 'NORTH_TO_WEST' | 'NORTH_TO_EAST' | 'SOUTH_TO_EAST' | 'SOUTH_TO_WEST' | 'WEST_TO_SOUTH' | 'WEST_TO_NORTH' | 'EAST_TO_NORTH' | 'EAST_TO_SOUTH'
  }
}

export interface CellComponentInterface {
  cell: GridCellInterface
}
