import * as THREE from 'three'

import type { TCameraDefaultValues } from '@/types/data/components/three/types'

export const cameraDefaultValues: TCameraDefaultValues = {
  camera: {
    makeDefault: true,
    position: new THREE.Vector3(0.5, 6.5, 4.5),
    // position: new THREE.Vector3(0, 0, 10),
    fov: 55,
    near: 0.1,
    far: 20,
  },
}
