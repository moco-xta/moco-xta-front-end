import * as THREE from 'three'

import type { TCameraDefaultValues } from '@/types/data/three/types'

export const cameraDefaultValues: TCameraDefaultValues = {
  camera: {
    makeDefault: true,
    position: new THREE.Vector3(20, 20, 20),
    fov: 75,
    near: 0.1,
    far: 30,
  },
}
