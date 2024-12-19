import * as THREE from 'three'

import { DirectionalLightInterface } from '@/interfaces/three'

export const directionalLightsData: DirectionalLightInterface = {
  default: {
    color: '#fff',
    intensity: 0.1,
    positions: [
      new THREE.Vector3(10, 10, 10),
      new THREE.Vector3(-10, 10, 10),
      new THREE.Vector3(0, 0, 10),
    ],
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
}
