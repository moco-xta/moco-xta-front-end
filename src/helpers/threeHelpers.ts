import * as THREE from 'three'
import { ThreeEvent } from '@react-three/fiber'

import { getRandomInt, randomPositiveOrNegative } from './mathHelpers'

interface CoordinatesInterface {
  x: number
  y: number
  z: number
}

interface SelectedAxisInterface {
  x?: boolean
  y?: boolean
  z?: boolean
}

export interface RandomRangePositionInterface {
  min: number | CoordinatesInterface
  max: number | CoordinatesInterface
  decimal?: number
}

export const setRandomPosition = ({ min, max, decimal = 1 }: RandomRangePositionInterface) => {
  return new THREE.Vector3(
    randomPositiveOrNegative() *
      getRandomInt({
        min: typeof min !== 'object' ? min : min.x,
        max: typeof max !== 'object' ? max : max.x,
        decimal: decimal,
      }),
    randomPositiveOrNegative() *
      getRandomInt({
        min: typeof min !== 'object' ? min : min.y,
        max: typeof max !== 'object' ? max : max.y,
        decimal: decimal,
      }),
    randomPositiveOrNegative() *
      getRandomInt({
        min: typeof min !== 'object' ? min : min.z,
        max: typeof max !== 'object' ? max : max.z,
        decimal: decimal,
      }),
  )
}

export const setRandomRotation = ({ x, y, z }: SelectedAxisInterface) => {
  return new THREE.Euler(
    x ? THREE.MathUtils.degToRad(getRandomInt({ min: 0, max: 360 })) : 0,
    y ? THREE.MathUtils.degToRad(getRandomInt({ min: 0, max: 360 })) : 0,
    z ? THREE.MathUtils.degToRad(getRandomInt({ min: 0, max: 360 })) : 0,
  )
}

export function getUvMousePositionOnMesh(event: ThreeEvent<PointerEvent>) {
  const pointCoordinates = event.point
  return {
    x: 100 * pointCoordinates.x,
    y: 100 * pointCoordinates.y,
  }
}

export function generateRandomRgbGrey(min: number, max: number) {
  const value = Math.round(Math.random() * (max - min) + min)
  return new THREE.Color(`rgb(${value}, ${value}, ${value})`)
}

export function generateRandomHexGrey(min: number, max: number) {
  const decimalValue = Math.round(Math.random() * (max - min) + min)
  var hexadecimalValue = decimalValue.toString(16)
  return new THREE.Color('#' + hexadecimalValue + hexadecimalValue + hexadecimalValue)
}
