import * as THREE from 'three'

import type { TCameraData } from '@/types/data/components/three/types'

export const cameraDefaultValues: TCameraData = {
  defaultValues: {
    camera: {
      makeDefault: true,
      position: new THREE.Vector3(0, 2, 0),
      fov: 50,
      near: 0.01,
      far: 150,
    },
  },
}
