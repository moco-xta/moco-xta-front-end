import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { RatingStarInterface } from '@/interfaces/r3fInterfaces'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    RatingStar: THREE.Mesh
  }
  materials: {}
}

export function RatingStar({ color, ...props }: RatingStarInterface) {
  const { nodes } = useGLTF(GltfConstants.RATING_STAR) as GLTFResult
  return (
    <mesh
      geometry={nodes.RatingStar.geometry}
      {...props}
    >
      <meshStandardMaterial
        attach='material'
        roughness={0}
        color={color}
      />
    </mesh>
  )
}

useGLTF.preload(GltfConstants.RATING_STAR)
