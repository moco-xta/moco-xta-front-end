import * as THREE from 'three'

import type { TCameraDefaultValues } from '@/types/data/components/three/types'

import { getDegreeEuler } from '@/helpers/threeHelpers'

export const cameraDefaultValues: TCameraDefaultValues = {
  camera: {
    makeDefault: true,
    position: new THREE.Vector3(4, -1, 10),
    rotation: getDegreeEuler({ x: 0, y: 0, z: 0 }),
    fov: 50,
    near: 0.01,
    far: 150,
  },
}
