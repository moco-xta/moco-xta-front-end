import React from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

export default function Map() {
  const mapMap = new THREE.TextureLoader().load(texturesConstants.HOME.MAP)
  mapMap.magFilter = THREE.NearestFilter

  const material = new THREE.MeshStandardMaterial({
    map: mapMap,
    roughness: 1,
    transparent: true,
    side: THREE.DoubleSide,
  })

  return (
    <Plane
      args={[15, 10.5]}
      position={new THREE.Vector3(0, -3, 0)}
      rotation={new THREE.Euler(THREE.MathUtils.degToRad(-90), 0, 0)}
      material={material}
    />
  )
}
