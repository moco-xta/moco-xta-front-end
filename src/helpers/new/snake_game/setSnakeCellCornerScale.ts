import * as THREE from 'three'

export function setSnakeCellCornerScale(cornerType: string) {
  switch (cornerType) {
    case 'NORTH_TO_WEST':
      return new THREE.Vector3(1, 1, 1)
    case 'NORTH_TO_EAST':
      return new THREE.Vector3(1, 1, -1)
    case 'SOUTH_TO_WEST':
      return new THREE.Vector3(1, 1, -1)
    case 'SOUTH_TO_EAST':
      return new THREE.Vector3(1, 1, 1)
    case 'WEST_TO_SOUTH':
      return new THREE.Vector3(1, 1, 1)
    case 'WEST_TO_NORTH':
      return new THREE.Vector3(1, 1, -1)
    case 'EAST_TO_NORTH':
      return new THREE.Vector3(1, 1, 1)
    default:
      return new THREE.Vector3(1, 1, -1)
  }
}
