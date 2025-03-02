import * as THREE from 'three'

import type { TCameraDefaultValues } from '@/types/data/three/types'

export const cameraDefaultValues: TCameraDefaultValues = {
  camera: {
    makeDefault: true,
    position: new THREE.Vector3(0, 0, 15),
    fov: 32.5,
    near: 0.1,
    far: 33,
  },
}
