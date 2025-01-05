import * as THREE from 'three'

import type { TCameraData } from '@/types/three/camerasTypes'

import { default as cameraConstants } from '@/constants/skills/three/cameraConstants.json'

export const cameraDefaultValues: TCameraData = {
  defaultValues: {
    camera: {
      makeDefault: cameraConstants.defualtValues.camera.makeDefault,
      position: new THREE.Vector3(
        cameraConstants.defualtValues.camera.position.x,
        cameraConstants.defualtValues.camera.position.y,
        cameraConstants.defualtValues.camera.position.z,
      ),
      fov: cameraConstants.defualtValues.camera.fov,
      near: cameraConstants.defualtValues.camera.near,
      far: cameraConstants.defualtValues.camera.far,
    },
  },
}
