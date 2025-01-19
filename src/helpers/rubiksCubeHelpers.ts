import * as THREE from 'three'

import { getDegreeEuler } from './threeHelpers'

export function setCubeCoordinates(x: number, y: number, z: number) {
  function setCoordinate(value: number) {
    return value * 2 - 2
  }
  return new THREE.Vector3(setCoordinate(x), setCoordinate(y), setCoordinate(z))
}

export function setRoundedCubeType(coordinates: THREE.Vector3) {
  let maxNumberOfPads = 3
  Object.entries(coordinates).forEach(([_, value]) => {
    if (value === 0) maxNumberOfPads -= 1
  })
  return maxNumberOfPads
}

export const setPadRotation = (coordinates: THREE.Vector3, index: number): THREE.Euler => {
  let rotationX = 0,
    rotationY = 0,
    rotationZ = 0

  if (index === 0) {
    if (coordinates.y === -2) rotationZ = 180
    else if (coordinates.y === 0) {
      if (coordinates.x === 2) rotationZ = -90
      else if (coordinates.x === -2) rotationZ = 90
      else {
        coordinates.z > 0 ? (rotationX = 90) : (rotationX = -90)
      }
    }
  } else if (index === 1) {
    if (coordinates.y === -2) {
      if (coordinates.z === 2) rotationX = 90
      else if (coordinates.z === -2) (rotationX = -90), (rotationY = 90)
      else {
        coordinates.x > 0 ? (rotationZ = -90) : (rotationZ = 90)
      }
    } else if (coordinates.y === 0) {
      coordinates.z > 0 ? (rotationX = 90) : (rotationX = -90)
    } else {
      if (coordinates.x === 2) rotationZ = -90
      else if (coordinates.x === -2) rotationZ = 90
      else {
        coordinates.z > 0 ? (rotationX = 90) : (rotationX = -90)
      }
    }
  } else {
    if (coordinates.y === -2) {
      coordinates.x > 0 ? (rotationZ = -90) : (rotationZ = 90)
    } else {
      coordinates.z > 0 ? (rotationX = 90) : (rotationX = -90)
    }
  }

  return getDegreeEuler({ x: rotationX, y: rotationY, z: rotationZ })
}

export const setPadColor = (normal: THREE.Vector3, colors: string[]): THREE.Color => {
  const normalizedNormal = normal.clone().normalize()
  let colorIndex = 0

  if (
    Math.abs(normalizedNormal.x) > Math.abs(normalizedNormal.y) &&
    Math.abs(normalizedNormal.x) > Math.abs(normalizedNormal.z)
  ) {
    colorIndex = normalizedNormal.x > 0 ? 0 : 5
  } else if (Math.abs(normalizedNormal.y) > Math.abs(normalizedNormal.z)) {
    colorIndex = normalizedNormal.y > 0 ? 1 : 3
  } else {
    colorIndex = normalizedNormal.z > 0 ? 2 : 4
  }

  return new THREE.Color(colors[colorIndex])
}
