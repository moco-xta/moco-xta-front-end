import * as THREE from 'three'

import type { TCameraData } from '@/types/data/components/three/types'
import { getDegreeEuler } from '@/helpers/threeHelpers'

export const cameraData: TCameraData = {
  defaultValues: {
    perspectiveCamera: {
      makeDefault: true,
      position: new THREE.Vector3(0, 14, 0),
      rotation: getDegreeEuler({ x: 0, y: 0, z: 0 }),
      fov: 50,
      near: 0.01,
      far: 50,
    },
  },
}
