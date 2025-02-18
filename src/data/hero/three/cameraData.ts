import * as THREE from 'three'

import type { TCameraDefaultValues } from '@/types/data/components/three/types'

import { default as cameraConstants } from '@/constants/hero/three/cameraConstants.json'

export type TCameraDefaultValuesSignature = {
  terminalType: 'isDesktop' | 'isMobile'
}

export function cameraDefaultValues({
  terminalType,
}: TCameraDefaultValuesSignature): TCameraDefaultValues {
  return {
    camera: {
      makeDefault: cameraConstants.defualtValues.camera.makeDefault,
      position: new THREE.Vector3(
        cameraConstants.defualtValues.camera.position[terminalType].x,
        cameraConstants.defualtValues.camera.position[terminalType].y,
        cameraConstants.defualtValues.camera.position[terminalType].z,
      ),
      fov: cameraConstants.defualtValues.camera.fov,
      near: cameraConstants.defualtValues.camera.near,
      far: cameraConstants.defualtValues.camera.far,
    },
    /* float: {
      speed: cameraConstants.defualtValue.float.speed,
      rotationIntensity: cameraConstants.defualtValue.float.rotationIntensity,
    } */
  }
}
