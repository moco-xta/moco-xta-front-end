import * as THREE from 'three'

import type { TCameraData } from '@/types/three/camerasTypes'

import { default as cameraConstants } from '@/constants/projects/three/cameraConstants.json'

export const cameraDefaultValues: TCameraData = {
  defaultValues: {
    camera: {
      makeDefault: cameraConstants.defualtValue.camera.makeDefault,
      position: new THREE.Vector3(
        cameraConstants.defualtValue.camera.position.x,
        cameraConstants.defualtValue.camera.position.y,
        cameraConstants.defualtValue.camera.position.z,
      ),
      fov: cameraConstants.defualtValue.camera.fov,
      near: cameraConstants.defualtValue.camera.near,
      far: cameraConstants.defualtValue.camera.far,
    },
  },
}
