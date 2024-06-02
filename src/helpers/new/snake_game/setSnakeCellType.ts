import { SnakeCellInterface } from '@/interfaces/new/newSnakeGameInterfaces'

export function setSnakeCellType(
  snakeCell: SnakeCellInterface,
  previewSnakeCell: SnakeCellInterface,
): 'STRAIGHT' | 'CORNER' {
  switch (snakeCell.direction) {
    case 'NORTH':
      if (snakeCell.position.z === previewSnakeCell.position.z) return 'CORNER'
      return 'STRAIGHT'
    case 'SOUTH':
      if (snakeCell.position.z === previewSnakeCell.position.z) return 'CORNER'
      return 'STRAIGHT'
    case 'WEST':
      if (snakeCell.position.x === previewSnakeCell.position.x) return 'CORNER'
      return 'STRAIGHT'
    case 'EAST':
      if (snakeCell.position.x === previewSnakeCell.position.x) return 'CORNER'
      return 'STRAIGHT'
    default:
      return 'STRAIGHT'
  }
}
