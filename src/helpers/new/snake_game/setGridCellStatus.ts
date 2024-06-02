export function setGridCellStatus(
  snakeCellType: 'HEAD' | 'STRAIGHT' | 'CORNER',
) {
  switch (snakeCellType) {
    case 'HEAD':
      return 'SNAKE_HEAD'
    case 'STRAIGHT':
      return 'SNAKE_STRAIGHT'
    default:
      return 'SNAKE_CORNER'
  }
}
