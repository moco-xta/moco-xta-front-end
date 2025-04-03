import * as THREE from 'three'

import type { TCameraDefaultValues } from '@/types/data/three/types'

import { getDegreeEuler } from '@/helpers/threeHelpers'

export const cameraDefaultValues: TCameraDefaultValues = {
  camera: {
    makeDefault: true,
    position: new THREE.Vector3(35, 35, 35),
    // rotation: getDegreeEuler({ x: 0, y: 43, z: 0 }),
    fov: 50,
    near: 0.01,
    far: 500,
  },
}
