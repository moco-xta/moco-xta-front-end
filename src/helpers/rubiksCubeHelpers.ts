import type { MutableRefObject } from 'react'
import * as THREE from 'three'
import type { ThreeEvent } from '@react-three/fiber'
import { gsap } from 'gsap'

import { getDegreeEuler } from './threeHelpers'

import { rubiksCubeData } from '@/data/skills/rubiks_cube/three/rubiksCubeData'

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
  const mix: gsap.TweenVars = {}
  Array.from({ length: 10 }).forEach((_, index) => {
    mix[`${index * 10}%`] = {
      onComplete: () => {
        pickRandomFunction(functions)(rubiksCubeRef, rotationGroupRef, false)
      },
    }
  })
  console.log('mix', mix)
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
