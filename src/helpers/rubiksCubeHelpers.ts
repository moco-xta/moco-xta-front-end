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

export function setPadRotation(coordinates: THREE.Vector3, index: number) {
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

export function setPadColor(normal: THREE.Vector3, colors: string[]) {
  let color = new THREE.Color()
  Object.entries(normal).forEach(([key, value]) => {
    if (key === 'x' && (value > 0.5 || value < -0.5)) {
      value === 1 ? color.set(colors[0]) : color.set(colors[1])
    } else if (key === 'y' && (value > 0.5 || value < -0.5)) {
      value === 1 ? color.set(colors[2]) : color.set(colors[3])
    } else if (key === 'z' && (value > 0.5 || value < -0.5)) {
      value === 1 ? color.set(colors[4]) : color.set(colors[5])
    }
  })
  return color
}
