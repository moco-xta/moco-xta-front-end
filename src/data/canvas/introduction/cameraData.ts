import * as THREE from 'three'

import type { TCameraDefaultValues } from '@/types/data/three/types'

export const cameraDefaultValues: TCameraDefaultValues = {
  camera: {
    makeDefault: true,
    position: new THREE.Vector3(0, 0, 8),
    fov: 50,
    near: 0.1,
    far: 300,
  },
}
