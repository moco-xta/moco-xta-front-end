import { Ref } from 'react'
import { ThreeEvent } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'

export function radiansToDegrees(radians: number) {
  return radians * (180 / Math.PI)
}

export function degreesToRadians(degrees: number) {
  return (degrees * Math.PI) / 180
}

export function getUvMousePositionOnMesh(event: ThreeEvent<PointerEvent>, name: string) {
  const pointCoordinates = event.point
  const max = {
    // @ts-ignore
    // prettier-ignore
    x: event.intersections.find((object) => (object.object.name = name)).object.geometry.boundingBox.max.x,
    // @ts-ignore
    // prettier-ignore
    y: event.intersections.find((object) => (object.object.name = name)).object.geometry.boundingBox.max.y,
  }
  return {
    x: (100 * pointCoordinates.x) / max.x,
    y: (100 * pointCoordinates.y) / max.y,
  }
}

export function setCubeGroupCoordinates(x: number, y: number, z: number) {
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

export function setPadRotation(coordinates: THREE.Vector3, index: number) {
  function createEuler(x: number, y: number, z: number) {
    return new THREE.Euler(
      THREE.MathUtils.degToRad(x),
      THREE.MathUtils.degToRad(y),
      THREE.MathUtils.degToRad(z),
    )
  }

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

  return createEuler(rotationX, rotationY, rotationZ)
}

function rotate(
  rubiksCubeRef: THREE.Group,
  rotationGroupRef: THREE.Group,
  axis: string,
  limit: number,
  multiplier: number,
  setIsRotating: (value: boolean) => void,
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
      // @ts-ignore
      return limit < 0 ? c.position[axis] < limit : c.position[axis] > limit
    })
    .forEach(function (c) {
      rotationGroupRef.attach(c)
    })

  gsap.to(rotationGroupRef.rotation, {
    duration: 1,
    ease: 'power3.out',
    [axis]: THREE.MathUtils.degToRad(90) * multiplier,
    onComplete: () => {
      setIsRotating(false)
    },
  })
}

export const handleBackCCW = (
  e: ThreeEvent<MouseEvent>,
  rubiksCubeRef: Ref<THREE.Group>,
  rotationGroupRef: Ref<THREE.Group>,
  isRotating: boolean,
  setIsRotating: (value: boolean) => void,
) => {
  if (!isRotating) {
    e.stopPropagation()
    setIsRotating(true)
    rotate(
      // @ts-ignore
      rubiksCubeRef.current,
      // @ts-ignore
      rotationGroupRef.current,
      'z',
      -1,
      -1,
      setIsRotating,
    )
  }
}

export const handleBackCW = (
  e: ThreeEvent<MouseEvent>,
  rubiksCubeRef: Ref<THREE.Group>,
  rotationGroupRef: Ref<THREE.Group>,
  isRotating: boolean,
  setIsRotating: (value: boolean) => void,
) => {
  if (!isRotating) {
    e.stopPropagation()
    setIsRotating(true)
    rotate(
      // @ts-ignore
      rubiksCubeRef.current,
      // @ts-ignore
      rotationGroupRef.current,
      'z',
      -1,
      1,
      setIsRotating,
    )
  }
}

export const handleBottomCW = (
  e: ThreeEvent<MouseEvent>,
  rubiksCubeRef: Ref<THREE.Group>,
  rotationGroupRef: Ref<THREE.Group>,
  isRotating: boolean,
  setIsRotating: (value: boolean) => void,
) => {
  if (!isRotating) {
    e.stopPropagation()
    setIsRotating(true)
    rotate(
      // @ts-ignore
      rubiksCubeRef.current,
      // @ts-ignore
      rotationGroupRef.current,
      'y',
      -1,
      1,
      setIsRotating,
    )
  }
}

export const handleBottomCCW = (
  e: ThreeEvent<MouseEvent>,
  rubiksCubeRef: Ref<THREE.Group>,
  rotationGroupRef: Ref<THREE.Group>,
  isRotating: boolean,
  setIsRotating: (value: boolean) => void,
) => {
  if (!isRotating) {
    e.stopPropagation()
    setIsRotating(true)
    rotate(
      // @ts-ignore
      rubiksCubeRef.current,
      // @ts-ignore
      rotationGroupRef.current,
      'y',
      -1,
      -1,
      setIsRotating,
    )
  }
}

export const handleFrontCCW = (
  e: ThreeEvent<MouseEvent>,
  rubiksCubeRef: Ref<THREE.Group>,
  rotationGroupRef: Ref<THREE.Group>,
  isRotating: boolean,
  setIsRotating: (value: boolean) => void,
) => {
  if (!isRotating) {
    e.stopPropagation()
    setIsRotating(true)
    rotate(
      // @ts-ignore
      rubiksCubeRef.current,
      // @ts-ignore
      rotationGroupRef.current,
      'z',
      1,
      1,
      setIsRotating,
    )
  }
}

export const handleFrontCW = (
  e: ThreeEvent<MouseEvent>,
  rubiksCubeRef: Ref<THREE.Group>,
  rotationGroupRef: Ref<THREE.Group>,
  isRotating: boolean,
  setIsRotating: (value: boolean) => void,
) => {
  if (!isRotating) {
    e.stopPropagation()
    setIsRotating(true)
    rotate(
      // @ts-ignore
      rubiksCubeRef.current,
      // @ts-ignore
      rotationGroupRef.current,
      'z',
      1,
      -1,
      setIsRotating,
    )
  }
}

export const handleLeftCCW = (
  e: ThreeEvent<MouseEvent>,
  rubiksCubeRef: Ref<THREE.Group>,
  rotationGroupRef: Ref<THREE.Group>,
  isRotating: boolean,
  setIsRotating: (value: boolean) => void,
) => {
  if (!isRotating) {
    e.stopPropagation()
    setIsRotating(true)
    rotate(
      // @ts-ignore
      rubiksCubeRef.current,
      // @ts-ignore
      rotationGroupRef.current,
      'x',
      -1,
      -1,
      setIsRotating,
    )
  }
}

export const handleLeftCW = (
  e: ThreeEvent<MouseEvent>,
  rubiksCubeRef: Ref<THREE.Group>,
  rotationGroupRef: Ref<THREE.Group>,
  isRotating: boolean,
  setIsRotating: (value: boolean) => void,
) => {
  if (!isRotating) {
    e.stopPropagation()
    setIsRotating(true)
    rotate(
      // @ts-ignore
      rubiksCubeRef.current,
      // @ts-ignore
      rotationGroupRef.current,
      'x',
      -1,
      1,
      setIsRotating,
    )
  }
}

export const handleRightCCW = (
  e: ThreeEvent<MouseEvent>,
  rubiksCubeRef: Ref<THREE.Group>,
  rotationGroupRef: Ref<THREE.Group>,
  isRotating: boolean,
  setIsRotating: (value: boolean) => void,
) => {
  if (!isRotating) {
    e.stopPropagation()
    setIsRotating(true)
    rotate(
      // @ts-ignore
      rubiksCubeRef.current,
      // @ts-ignore
      rotationGroupRef.current,
      'x',
      1,
      1,
      setIsRotating,
    )
  }
}

export const handleRightCW = (
  e: ThreeEvent<MouseEvent>,
  rubiksCubeRef: Ref<THREE.Group>,
  rotationGroupRef: Ref<THREE.Group>,
  isRotating: boolean,
  setIsRotating: (value: boolean) => void,
) => {
  if (!isRotating) {
    e.stopPropagation()
    setIsRotating(true)
    rotate(
      // @ts-ignore
      rubiksCubeRef.current,
      // @ts-ignore
      rotationGroupRef.current,
      'x',
      1,
      -1,
      setIsRotating,
    )
  }
}

export const handleTopCCW = (
  e: ThreeEvent<MouseEvent>,
  rubiksCubeRef: Ref<THREE.Group>,
  rotationGroupRef: Ref<THREE.Group>,
  isRotating: boolean,
  setIsRotating: (value: boolean) => void,
) => {
  if (!isRotating) {
    e.stopPropagation()
    setIsRotating(true)
    rotate(
      // @ts-ignore
      rubiksCubeRef.current,
      // @ts-ignore
      rotationGroupRef.current,
      'y',
      1,
      1,
      setIsRotating,
    )
  }
}

export const handleTopCW = (
  e: ThreeEvent<MouseEvent>,
  rubiksCubeRef: Ref<THREE.Group>,
  rotationGroupRef: Ref<THREE.Group>,
  isRotating: boolean,
  setIsRotating: (value: boolean) => void,
) => {
  if (!isRotating) {
    e.stopPropagation()
    setIsRotating(true)
    rotate(
      // @ts-ignore
      rubiksCubeRef.current,
      // @ts-ignore
      rotationGroupRef.current,
      'y',
      1,
      -1,
      setIsRotating,
    )
  }
}
