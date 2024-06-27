import { PositionInterface } from '@/interfaces/new/newSnakeGameInterfaces'

export function setSnakeCellCornerType(
  direction: string,
  snakeCellPosition: PositionInterface,
  previewSnakeCellPosition: PositionInterface,
) {
  switch (direction) {
    case 'NORTH':
      return snakeCellPosition.x - previewSnakeCellPosition.x > 0 ? 'SOUTH_TO_WEST' : 'SOUTH_TO_EAST'
    case 'SOUTH':
      return snakeCellPosition.x - previewSnakeCellPosition.x > 0 ? 'NORTH_TO_WEST' : 'NORTH_TO_EAST'
    case 'WEST':
      return snakeCellPosition.z - previewSnakeCellPosition.z > 0 ? 'WEST_TO_NORTH' : 'WEST_TO_SOUTH'
    default:
      return snakeCellPosition.z - previewSnakeCellPosition.z > 0 ? 'EAST_TO_NORTH' : 'EAST_TO_SOUTH'
  }
}
