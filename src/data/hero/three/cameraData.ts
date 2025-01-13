import * as THREE from 'three'

import type { TCameraDefaultValues } from '@/types/data/components/three/types'

import { default as cameraConstants } from '@/constants/hero/three/cameraConstants.json'

export const cameraDefaultValues: TCameraDefaultValues = {
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
  /* float: {
    speed: cameraConstants.defualtValue.float.speed,
    rotationIntensity: cameraConstants.defualtValue.float.rotationIntensity,
  }, */
}
