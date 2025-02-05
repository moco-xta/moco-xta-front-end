import * as THREE from 'three'
import { ThreeEvent } from '@react-three/fiber'

import type {
  TCoordinatesData,
  TRandomRangePosition,
  TRandomRotationSelectedAxis,
} from '@/types/data/components/three/types'

import { getRandomInt, randomPositiveOrNegative } from './mathHelpers'

export const getRandomPosition = ({ min, max, decimal = 1 }: TRandomRangePosition) => {
  return new THREE.Vector3(
    randomPositiveOrNegative() *
      getRandomInt({
        min: typeof min !== 'object' ? min : (min.x ?? 0),
        max: typeof max !== 'object' ? max : (max.x ?? 0),
        decimal: decimal,
      }),
    randomPositiveOrNegative() *
      getRandomInt({
        min: typeof min !== 'object' ? min : (min.y ?? 0),
        max: typeof max !== 'object' ? max : (max.y ?? 0),
        decimal: decimal,
      }),
    randomPositiveOrNegative() *
      getRandomInt({
        min: typeof min !== 'object' ? min : (min.z ?? 0),
        max: typeof max !== 'object' ? max : (max.z ?? 0),
        decimal: decimal,
      }),
  )
}

export const getRandomRotation = ({ x, y, z }: TRandomRotationSelectedAxis) => {
  return new THREE.Euler(
    x ? THREE.MathUtils.degToRad(getRandomInt({ min: 0, max: 360 })) : 0,
    y ? THREE.MathUtils.degToRad(getRandomInt({ min: 0, max: 360 })) : 0,
    z ? THREE.MathUtils.degToRad(getRandomInt({ min: 0, max: 360 })) : 0,
  )
}

export function setGroupSize(boundingBox: THREE.Box3, object: THREE.Group, size: number) {
  const objectSize = new THREE.Vector3()
  boundingBox.getSize(objectSize)
  const scaleFactor = size / Math.max(objectSize.x, objectSize.y)
  object.children.forEach((child) => {
    if (child instanceof THREE.Mesh) {
      child.scale.set(scaleFactor, scaleFactor, scaleFactor)
      child.updateWorldMatrix(true, false)
    }
  })
}

export function getDegreeEuler(rotationData: TCoordinatesData) {
  return new THREE.Euler(
    rotationData.x ? THREE.MathUtils.degToRad(rotationData.x) : 0,
    rotationData.y ? THREE.MathUtils.degToRad(rotationData.y) : 0,
    rotationData.z ? THREE.MathUtils.degToRad(rotationData.z) : 0,
    'XYZ',
  )
}

export function getUvMousePositionOnMesh(event: ThreeEvent<PointerEvent>) {
  const pointCoordinates = event.point
  return {
    x: 100 * pointCoordinates.x,
    y: 100 * pointCoordinates.y,
  }
}

export function generateRandomHexGrey(min: number, max: number) {
  const decimalValue = Math.round(Math.random() * (max - min) + min)
  const hexadecimalValue = decimalValue.toString(16)
  return new THREE.Color('#' + hexadecimalValue + hexadecimalValue + hexadecimalValue)
}
