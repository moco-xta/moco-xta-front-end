import type { MutableRefObject } from 'react'
import * as THREE from 'three'
import type { ThreeEvent } from '@react-three/fiber'
import { gsap } from 'gsap'

import { getDegreeEuler } from './threeHelpers'

import { rubiksCubeData } from '@/data/skills/rubiks_cube/three/rubiksCubeData'
import { TCoordinatesData } from '@/types/data/components/three/types'

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

export function getDofTargetPosition(A: TCoordinatesData, B: TCoordinatesData, cubeSize: number) {
  const halfSize = cubeSize / 2

  const xmin = (A.x ?? 0) - halfSize
  const xmax = (A.x ?? 0) + halfSize
  const ymin = (A.y ?? 0) - halfSize
  const ymax = (A.y ?? 0) + halfSize
  const zmin = (A.z ?? 0) - halfSize
  const zmax = (A.z ?? 0) + halfSize

  const dy = (B.y ?? 0) - (A.y ?? 0)
  const dx = (B.x ?? 0) - (A.x ?? 0)
  const dz = (B.z ?? 0) - (A.z ?? 0)

  interface IntersectionPoint {
    x: number
    y: number
    z: number
    t: number
  }

  function intersectPlane(
    coord: number,
    dCoord: number,
    fixedValue: number,
    bounds1: [number, number],
    bounds2: [number, number],
  ): IntersectionPoint | null {
    if (dCoord === 0) return null
    const t = (fixedValue - coord) / dCoord
    const x = (A.x ?? 0) + t * dx
    const y = (A.y ?? 0) + t * dy
    const z = (A.z ?? 0) + t * dz

    if (t >= 0 && bounds1[0] <= x && x <= bounds1[1] && bounds2[0] <= y && y <= bounds2[1]) {
      return { x, y, z, t }
    }
    return null
  }

  const candidates = [
    intersectPlane(A.x ?? 0, dx, xmin, [ymin, ymax], [zmin, zmax]),
    intersectPlane(A.x ?? 0, dx, xmax, [ymin, ymax], [zmin, zmax]),
    intersectPlane(A.y ?? 0, dy, ymin, [xmin, xmax], [zmin, zmax]),
    intersectPlane(A.y ?? 0, dy, ymax, [xmin, xmax], [zmin, zmax]),
    intersectPlane(A.z ?? 0, dz, zmin, [xmin, xmax], [ymin, ymax]),
    intersectPlane(A.z ?? 0, dz, zmax, [xmin, xmax], [ymin, ymax]),
  ].filter((point) => point !== null)

  if (candidates.length === 0) {
    return null
  }
  candidates.sort((a, b) => a.t - b.t)
  const { x, y, z } = candidates[0] as IntersectionPoint
  return new THREE.Vector3(x, y, z)
}

export function getDofFocalLength(A: TCoordinatesData, B: TCoordinatesData, P: TCoordinatesData) {
  const lengthAB = Math.sqrt(
    ((B.x ?? 0) - (A.x ?? 0)) ** 2 +
      ((B.y ?? 0) - (A.y ?? 0)) ** 2 +
      ((B.z ?? 0) - (A.z ?? 0)) ** 2,
  )

  const lengthAP = Math.sqrt(
    ((P.x ?? 0) - (A.x ?? 0)) ** 2 +
      ((P.y ?? 0) - (A.y ?? 0)) ** 2 +
      ((P.z ?? 0) - (A.z ?? 0)) ** 2,
  )

  const t = lengthAP / lengthAB

  console.log('folcalLength', 0.1 + t * (0.6 - 0.1))

  return 0.1 + t * (0.6 - 0.1)
}

export function getCameraDestinationPosition(
  A: TCoordinatesData,
  B: TCoordinatesData,
  distanceAC: number,
) {
  const AB = {
    x: (B.x ?? 0) - (A.x ?? 0),
    y: (B.y ?? 0) - (A.y ?? 0),
    z: (B.z ?? 0) - (A.z ?? 0),
  }

  const lengthAB = Math.sqrt(AB.x ** 2 + AB.y ** 2 + AB.z ** 2)

  const unitAB = {
    x: AB.x / lengthAB,
    y: AB.y / lengthAB,
    z: AB.z / lengthAB,
  }

  const scaledVector = {
    x: unitAB.x * distanceAC,
    y: unitAB.y * distanceAC,
    z: unitAB.z * distanceAC,
  }

  const C = {
    x: (A.x ?? 0) + scaledVector.x,
    y: (A.y ?? 0) + scaledVector.y,
    z: (A.z ?? 0) + scaledVector.z,
  }

  return C
}

function pickRandomFunction(functions: typeof rubiksCubeData.functions) {
  const keys = Object.keys(functions)
  const randomKey = keys[Math.floor(Math.random() * keys.length)]
  return functions[randomKey as keyof typeof rubiksCubeData.functions]
}

export function mixRubiksCube(
  rubiksCubeRef: MutableRefObject<THREE.Group>,
  rotationGroupRef: MutableRefObject<THREE.Group>,
  functions: typeof rubiksCubeData.functions,
) {
  const generatePercentages = (steps: number) =>
    Array.from({ length: steps }, (_, index) => `${(index * 100) / steps}%`)

  const mix: gsap.TweenVars = {}
  const percentages = generatePercentages(10)

  percentages.forEach((percent) => {
    mix[percent] = {
      onComplete: () => {
        if (functions && Object.keys(functions).length > 0) {
          pickRandomFunction(functions)(rubiksCubeRef, rotationGroupRef, false)
        } else {
          console.warn("No functions available for mixing the Rubik's Cube")
        }
      },
    }
  })

  return mix
}

function rotate(
  rubiksCubeRef: THREE.Group,
  rotationGroupRef: THREE.Group,
  axis: keyof THREE.Vector3,
  limit: number,
  multiplier: number,
  setIsRotating?: (value: boolean) => void,
) {
  rotationGroupRef.children
    .slice()
    .reverse()
    .forEach(function (c: THREE.Object3D) {
      rubiksCubeRef.attach(c)
    })
  rotationGroupRef.quaternion.set(0, 0, 0, 1)

  rubiksCubeRef.children
    .slice()
    .reverse()
    .filter(function (c: THREE.Object3D) {
      const positionValue = c.position[axis] as number
      return limit < 0 ? positionValue < limit : positionValue > limit
    })
    .forEach(function (c) {
      rotationGroupRef.attach(c)
    })

  gsap.to(rotationGroupRef.rotation, {
    duration: 1,
    ease: 'power3.out',
    [axis]: THREE.MathUtils.degToRad(90) * multiplier,
    onComplete: () => {
      if (setIsRotating) setIsRotating(false)
      rubiksCubeRef.updateWorldMatrix(true, false)
    },
  })
}

function handleRotation(
  rubiksCubeRef: MutableRefObject<THREE.Group>,
  rotationGroupRef: MutableRefObject<THREE.Group>,
  axis: keyof THREE.Vector3,
  limit: number,
  multiplier: number,
  isRotating: boolean,
  setIsRotating?: (value: boolean) => void,
  e?: ThreeEvent<MouseEvent>,
) {
  if (!isRotating) {
    if (e) e.stopPropagation()
    if (setIsRotating) setIsRotating(true)
    rotate(rubiksCubeRef.current, rotationGroupRef.current, axis, limit, multiplier, setIsRotating)
  }
}

export const handleBackCCW = (
  rubiksCubeRef: MutableRefObject<THREE.Group>,
  rotationGroupRef: MutableRefObject<THREE.Group>,
  isRotating: boolean,
  setIsRotating?: (value: boolean) => void,
  e?: ThreeEvent<MouseEvent>,
) => handleRotation(rubiksCubeRef, rotationGroupRef, 'z', -1, -1, isRotating, setIsRotating, e)

export const handleBackCW = (
  rubiksCubeRef: MutableRefObject<THREE.Group>,
  rotationGroupRef: MutableRefObject<THREE.Group>,
  isRotating: boolean,
  setIsRotating?: (value: boolean) => void,
  e?: ThreeEvent<MouseEvent>,
) => handleRotation(rubiksCubeRef, rotationGroupRef, 'z', -1, 1, isRotating, setIsRotating, e)

export const handleBottomCW = (
  rubiksCubeRef: MutableRefObject<THREE.Group>,
  rotationGroupRef: MutableRefObject<THREE.Group>,
  isRotating: boolean,
  setIsRotating?: (value: boolean) => void,
  e?: ThreeEvent<MouseEvent>,
) => handleRotation(rubiksCubeRef, rotationGroupRef, 'y', -1, 1, isRotating, setIsRotating, e)

export const handleBottomCCW = (
  rubiksCubeRef: MutableRefObject<THREE.Group>,
  rotationGroupRef: MutableRefObject<THREE.Group>,
  isRotating: boolean,
  setIsRotating?: (value: boolean) => void,
  e?: ThreeEvent<MouseEvent>,
) => handleRotation(rubiksCubeRef, rotationGroupRef, 'y', -1, -1, isRotating, setIsRotating, e)

export const handleFrontCCW = (
  rubiksCubeRef: MutableRefObject<THREE.Group>,
  rotationGroupRef: MutableRefObject<THREE.Group>,
  isRotating: boolean,
  setIsRotating?: (value: boolean) => void,
  e?: ThreeEvent<MouseEvent>,
) => handleRotation(rubiksCubeRef, rotationGroupRef, 'z', 1, 1, isRotating, setIsRotating, e)

export const handleFrontCW = (
  rubiksCubeRef: MutableRefObject<THREE.Group>,
  rotationGroupRef: MutableRefObject<THREE.Group>,
  isRotating: boolean,
  setIsRotating?: (value: boolean) => void,
  e?: ThreeEvent<MouseEvent>,
) => handleRotation(rubiksCubeRef, rotationGroupRef, 'z', 1, -1, isRotating, setIsRotating, e)

export const handleLeftCCW = (
  rubiksCubeRef: MutableRefObject<THREE.Group>,
  rotationGroupRef: MutableRefObject<THREE.Group>,
  isRotating: boolean,
  setIsRotating?: (value: boolean) => void,
  e?: ThreeEvent<MouseEvent>,
) => handleRotation(rubiksCubeRef, rotationGroupRef, 'x', -1, -1, isRotating, setIsRotating, e)

export const handleLeftCW = (
  rubiksCubeRef: MutableRefObject<THREE.Group>,
  rotationGroupRef: MutableRefObject<THREE.Group>,
  isRotating: boolean,
  setIsRotating?: (value: boolean) => void,
  e?: ThreeEvent<MouseEvent>,
) => handleRotation(rubiksCubeRef, rotationGroupRef, 'x', -1, 1, isRotating, setIsRotating, e)

export const handleRightCCW = (
  rubiksCubeRef: MutableRefObject<THREE.Group>,
  rotationGroupRef: MutableRefObject<THREE.Group>,
  isRotating: boolean,
  setIsRotating?: (value: boolean) => void,
  e?: ThreeEvent<MouseEvent>,
) => handleRotation(rubiksCubeRef, rotationGroupRef, 'x', 1, 1, isRotating, setIsRotating, e)

export const handleRightCW = (
  rubiksCubeRef: MutableRefObject<THREE.Group>,
  rotationGroupRef: MutableRefObject<THREE.Group>,
  isRotating: boolean,
  setIsRotating?: (value: boolean) => void,
  e?: ThreeEvent<MouseEvent>,
) => handleRotation(rubiksCubeRef, rotationGroupRef, 'x', 1, -1, isRotating, setIsRotating, e)

export const handleTopCCW = (
  rubiksCubeRef: MutableRefObject<THREE.Group>,
  rotationGroupRef: MutableRefObject<THREE.Group>,
  isRotating: boolean,
  setIsRotating?: (value: boolean) => void,
  e?: ThreeEvent<MouseEvent>,
) => handleRotation(rubiksCubeRef, rotationGroupRef, 'y', 1, 1, isRotating, setIsRotating, e)

export const handleTopCW = (
  rubiksCubeRef: MutableRefObject<THREE.Group>,
  rotationGroupRef: MutableRefObject<THREE.Group>,
  isRotating: boolean,
  setIsRotating?: (value: boolean) => void,
  e?: ThreeEvent<MouseEvent>,
) => handleRotation(rubiksCubeRef, rotationGroupRef, 'y', 1, -1, isRotating, setIsRotating, e)
