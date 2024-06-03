export function setGridCellStatus(
  snakeCellType: 'HEAD' | 'STRAIGHT' | 'CORNER',
): 'SNAKE_HEAD' | 'SNAKE_STRAIGHT' | 'SNAKE_CORNER' {
  switch (snakeCellType) {
    case 'HEAD':
      return 'SNAKE_HEAD'
    case 'STRAIGHT':
      return 'SNAKE_STRAIGHT'
    default:
      return 'SNAKE_CORNER'
  }
}
