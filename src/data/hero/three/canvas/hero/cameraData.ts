import * as THREE from 'three'

import { CameraInterface, FloatInterface } from '@/interfaces/three'

export const cameraData: CameraInterface = {
  default: {
    makeDefault: true,
    position: new THREE.Vector3(0, 0, 8),
    fov: 50,
    near: 0.01,
    far: 20,
  },
}

export const floatData: FloatInterface = {
  speed: 2,
  rotationIntensity: 4,
}
