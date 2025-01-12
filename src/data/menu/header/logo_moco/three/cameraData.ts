import * as THREE from 'three'

import type { TCameraData } from '@/types/data/components/three/types'

export const cameraDefaultValues: TCameraData = {
  defaultValues: {
    camera: {
      makeDefault: true,
      position: new THREE.Vector3(0, 0, 14),
      fov: 15,
      near: 0.1,
      far: 20,
    },
  },
}
