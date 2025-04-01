import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function Montmartre(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.MONTMARTRE) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Google_3D_Tiles.geometry}
        material={materials['Material.001']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Google_3D_Tiles002.geometry}
        material={materials.Material}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.MONTMARTRE)
