import * as THREE from 'three'

import type { TCameraDefaultValues } from '@/types/data/three/types'

export const cameraDefaultValues: TCameraDefaultValues = {
  camera: {
    makeDefault: true,
    position: new THREE.Vector3(6.5, 6.5, 6.5),
    fov: 75,
    near: 0.1,
    far: 30,
  },
}
