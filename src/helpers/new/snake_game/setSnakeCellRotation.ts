import * as THREE from 'three'

export function setSnakeCellRotation(direction: string) {
  switch (direction) {
    case 'NORTH':
      return new THREE.Euler(0, THREE.MathUtils.degToRad(-90), 0)
    case 'SOUTH':
      return new THREE.Euler(0, THREE.MathUtils.degToRad(90), 0)
    case 'WEST':
      return new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)
    case 'EAST':
      return new THREE.Euler(0, THREE.MathUtils.degToRad(0), 0)
    default:
      return new THREE.Euler(0, 0, 0)
  }
}
