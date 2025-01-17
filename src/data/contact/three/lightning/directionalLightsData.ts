import * as THREE from 'three'

import type { TDirectionalLightData } from '@/types/components/three/types'

import { default as directionalLightsConstants } from '@/constants/contact/three/lightning/directionalLightsConstants.json'

export function directionalLightsDefaultValues(): TDirectionalLightData[] {
  const directionalLightsData: TDirectionalLightData[] = []

  directionalLightsConstants.defaultValues.positions.forEach((_, index) => {
    directionalLightsData.push({
      color: '#fff',
      intensity: directionalLightsConstants.defaultValues.intensity,
      position: new THREE.Vector3(
        directionalLightsConstants.defaultValues.positions[index].x,
        directionalLightsConstants.defaultValues.positions[index].y,
        directionalLightsConstants.defaultValues.positions[index].z,
      ),
      target: new THREE.Object3D(),
      castShadow: true,
      'shadow-mapSize': [
        directionalLightsConstants.defaultValues['shadow-mapSize'],
        directionalLightsConstants.defaultValues['shadow-mapSize'],
      ],
      'shadow-camera-far': directionalLightsConstants.defaultValues['shadow-camera-far'],
      'shadow-camera-left': directionalLightsConstants.defaultValues['shadow-camera-left'],
      'shadow-camera-right': directionalLightsConstants.defaultValues['shadow-camera-right'],
      'shadow-camera-top': directionalLightsConstants.defaultValues['shadow-camera-top'],
      'shadow-camera-bottom': directionalLightsConstants.defaultValues['shadow-camera-bottom'],
      'shadow-radius': directionalLightsConstants.defaultValues['shadow-radius'],
      'shadow-bias': directionalLightsConstants.defaultValues['shadow-bias'],
    })
  })

  return directionalLightsData
}
