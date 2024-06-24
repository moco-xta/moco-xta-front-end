import React from 'react'
import * as THREE from 'three'
import { usePlane } from '@react-three/cannon'
/* import { groundTexture } from './textures' */

import useTextureLoader from '@/hooks/new/useTextureLoader'

import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

export default function Ground() {
  const [ref] = usePlane<THREE.Mesh>(() => ({
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0]
  }))

  const groundMap = useTextureLoader(
    texturesConstants.MINECRAFT.GRASS,
  )
  groundMap.magFilter = THREE.NearestFilter
  groundMap.wrapS = THREE.RepeatWrapping
  groundMap.wrapT = THREE.RepeatWrapping
  groundMap.repeat.set(100, 100)

  const groundMaterial = new THREE.MeshStandardMaterial({
    map: groundMap
  })

  return (
    <mesh
      ref={ref}
      material={groundMaterial}
    >
      <planeGeometry attach='geometry' args={[100, 100]} />
    </mesh>
  )
}
