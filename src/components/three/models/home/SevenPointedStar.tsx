import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    SevenPointedStar: THREE.Mesh
  }
  materials: {}
}

export const SevenPointedStar = forwardRef<THREE.Mesh, MeshProps>(
  function SevenPointedStar(props, sevenPointedStarRef) {
    const { nodes } = useGLTF(glbConstants.HOME.SEVEN_POINTED_STAR) as GLTFResult

    const material = new THREE.MeshStandardMaterial({
      color: 'red',
      transparent: true,
      opacity: 0,
    })

    return (
      <mesh
        ref={sevenPointedStarRef}
        name='SevenPointedStar'
        geometry={nodes.SevenPointedStar.geometry}
        material={material}
        {...props}
      />
    )
  },
)

useGLTF.preload(glbConstants.HOME.SEVEN_POINTED_STAR)
