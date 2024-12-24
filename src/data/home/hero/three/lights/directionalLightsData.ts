import * as THREE from 'three'

import { TDirectionalLightData } from '@/types/three/lightsTypes'

import { default as directionalLightsConstants } from '@/constants/home/hero/three/lights/directionalLightsConstants.json'

export function directionalLightsData(): TDirectionalLightData[] {
  const directionalLightsData: TDirectionalLightData[] = []

  directionalLightsConstants.defaultValues.positions.forEach((_, index) => {
    directionalLightsData.push({
      defaultValues: {
        color: '#fff',
        intensity: 0.1,
        position: new THREE.Vector3(
          directionalLightsConstants.defaultValues.positions[index].x,
          directionalLightsConstants.defaultValues.positions[index].y,
          directionalLightsConstants.defaultValues.positions[index].z,
        ),
        target: new THREE.Object3D(),
        castShadow: true,
        'shadow-mapSize': [4096, 4096],
        'shadow-camera-far': 20,
        'shadow-camera-left': -20,
        'shadow-camera-right': 20,
        'shadow-camera-top': 20,
        'shadow-camera-bottom': -20,
        'shadow-radius': 13,
        'shadow-bias': 0.0001,
      },
    })
  })

  return directionalLightsData
}
