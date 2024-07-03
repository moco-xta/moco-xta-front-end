export function updateDirection(direction: string, nextMove: string): string {
  let newDirection: string = ''
  switch (direction) {
    case 'NORTH':
      newDirection = nextMove === 'ArrowLeft' ? 'EAST' : 'WEST'
      break
    case 'SOUTH':
      newDirection = nextMove === 'ArrowLeft' ? 'WEST' : 'EAST'
      break
    case 'WEST':
      newDirection = nextMove === 'ArrowLeft' ? 'NORTH' : 'SOUTH'
      break
    case 'EAST':
      newDirection = nextMove === 'ArrowLeft' ? 'SOUTH' : 'NORTH'
      break
    default:
      newDirection = direction
      break
  }
  return newDirection
}
