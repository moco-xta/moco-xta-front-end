import * as THREE from 'three'

export function setSnakeCellCornerRotation(cornerType: string) {
  switch (cornerType) {
    case 'NORTH_TO_WEST':
      return new THREE.Euler(0, THREE.MathUtils.degToRad(90), 0)
    case 'NORTH_TO_EAST':
      return new THREE.Euler(0, THREE.MathUtils.degToRad(90), 0)
    case 'SOUTH_TO_WEST':
      return new THREE.Euler(0, THREE.MathUtils.degToRad(-90), 0)
    case 'SOUTH_TO_EAST':
      return new THREE.Euler(0, THREE.MathUtils.degToRad(-90), 0)
    case 'WEST_TO_SOUTH':
      return new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)
    case 'WEST_TO_NORTH':
      return new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)
    case 'EAST_TO_NORTH':
      return new THREE.Euler(0, 0, 0)
    default:
      return new THREE.Euler(0, 0, 0)
  }
}
