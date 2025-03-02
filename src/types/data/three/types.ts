import * as THREE from 'three'
import { CanvasProps } from '@react-three/fiber'
import { FloatProps } from '@react-three/drei'

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
  makeDefault?: boolean
  position?: THREE.Vector3
  rotation?: THREE.Euler
  fov?: number
  near?: number
  far?: number
}
