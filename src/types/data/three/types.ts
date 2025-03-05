import * as THREE from 'three'
import type { CanvasProps } from '@react-three/fiber'
import type { FloatProps } from '@react-three/drei'

// CANVAS

export type TCanvasData = Partial<CanvasProps>

// CAMERA

export type TCameraDefaultValues = {
  rigidBody?: {
    position: THREE.Vector3
  }
  camera: TPerspectiveCameraData
  float?: FloatProps
}

export type TPerspectiveCameraData = {
  makeDefault: boolean
  position?: THREE.Vector3
  rotation?: THREE.Euler
  fov?: number
  near?: number
  far?: number
}

// LIGHTS

export type TSpotLightsDefaultValues = {
  orientations: TOrientation[]
  position: TImperativeCoordinatesData
  targetPosition: TImperativeCoordinatesData
  color: string,
  intensity: number
  angle: number
  distance: number
  decay: number
  penumbra: number
  castShadow: boolean
  ['shadow-mapSize-width']: number
  ['shadow-mapSize-height']: number
  ['shadow-camera-near']: number
  ['shadow-camera-far']: number
  ['shadow-camera-left']: number
  ['shadow-camera-right']: number
  ['shadow-camera-top']: number
  ['shadow-camera-bottom']: number
  ['shadow-radius']: number
  ['shadow-bias']: number
}

type TOrientation = [number, number, number]

// COORDINATES

export type TImperativeCoordinatesData = {
  x: number
  y: number
  z: number
}


export type TCoordinatesData = {
  x?: number
  y?: number
  z?: number
}
