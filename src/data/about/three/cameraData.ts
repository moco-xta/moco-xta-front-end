import * as THREE from 'three'

import type { TCameraDefaultValues } from '@/types/data/components/three/types'

import { getDegreeEuler } from '@/helpers/threeHelpers'

export const cameraDefaultValues: TCameraDefaultValues = {
  rigidBody: {
    position: new THREE.Vector3(18, 28, 8),
  },
  camera: {
    makeDefault: true,
    // position: new THREE.Vector3(0, 14, 0),
    rotation: getDegreeEuler({ x: -3, y: 43, z: 0 }),
    fov: 50,
    near: 0.01,
    far: 500,
  },
}
