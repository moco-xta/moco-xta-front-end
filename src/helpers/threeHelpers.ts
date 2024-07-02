import * as THREE from 'three'
import { ThreeEvent } from '@react-three/fiber'

export function generateRandomRgbGrey(min: number, max: number) {
  const value = Math.round(Math.random() * (max - min) + min)
  return new THREE.Color(`rgb(${value}, ${value}, ${value})`)
}

export function generateRandomHexGrey(min: number, max: number) {
  const decimalValue = Math.round(Math.random() * (max - min) + min)
  var hexadecimalValue = decimalValue.toString(16)
  return new THREE.Color('#' + hexadecimalValue + hexadecimalValue + hexadecimalValue)
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
