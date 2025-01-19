import * as THREE from 'three'
import { ThreeEvent } from '@react-three/fiber'

import type { TCoordinatesData } from '@/types/data/components/three/types'

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
