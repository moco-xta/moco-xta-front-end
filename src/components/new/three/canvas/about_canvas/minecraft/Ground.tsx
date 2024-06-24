import React from 'react'
import * as THREE from 'three'
import { usePlane } from '@react-three/cannon'
/* import { groundTexture } from './textures' */

import useTextureLoader from '@/hooks/new/useTextureLoader'

import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'
import textures from './textures'

export default function Ground() {
  const [ref] = usePlane<THREE.Mesh>(() => ({
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
  }))

  const groundMap = textures['groundTexture']
  groundMap.repeat.set(100, 100)

  return (
    <mesh ref={ref}>
      <planeGeometry
        attach='geometry'
        args={[100, 100]}
      />
      <meshStandardMaterial
        attach='material'
        map={groundMap}
      />
    </mesh>
  )
}
