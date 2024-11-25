import React from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

export default function Me() {
  const meMap = new THREE.TextureLoader().load(texturesConstants.HOME.HERO.ME)
  meMap.magFilter = THREE.NearestFilter

  const material = new THREE.MeshStandardMaterial({
    map: meMap,
    transparent: true,
  })

  return (
    <Plane
      args={[10, 10]}
      material={material}
    />
  )
}
