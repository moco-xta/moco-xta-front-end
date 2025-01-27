import type { MutableRefObject } from 'react'
import * as THREE from 'three'
import type { ThreeEvent } from '@react-three/fiber'
import { gsap } from 'gsap'

import type { TCoordinatesData } from '@/types/data/components/three/types'

import { getDegreeEuler } from './threeHelpers'

import { rubiksCubeData } from '@/data/skills/rubiks_cube/three/rubiksCubeData'
import { padsData } from '@/data/skills/rubiks_cube/three/padsData'

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

export function getRotationAndMaterial(
  coordinates: THREE.Vector3,
  index: number,
): {
  rotation: THREE.Euler
  material: THREE.MeshStandardMaterial
} {
  const rotation = setPadRotation(coordinates, index)

  const normal = new THREE.Vector3(0, 1, 0)
  const euler = new THREE.Euler(rotation.x, rotation.y, rotation.z, 'XYZ')
  normal.applyEuler(euler)
  const color = setPadColor(normal, padsData.padColors)

  return {
    rotation: rotation,
    material: new THREE.MeshStandardMaterial({
      color: color,
      roughness: padsData.defaultValues.material.roughness,
    }),
  }
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

export function getDofTargetPosition(A: THREE.Vector3, B: THREE.Vector3, cubeHalfSize: number) {
  const direction = new THREE.Vector3().subVectors(B, A).normalize()
  const intersection = new THREE.Vector3()
  const t =
    cubeHalfSize / Math.max(Math.abs(direction.x), Math.abs(direction.y), Math.abs(direction.z))
  intersection.copy(A).add(direction.multiplyScalar(t))
  return intersection
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
  return parseFloat((0.2 + t * (0.2 - 0.001)).toFixed(1))
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
