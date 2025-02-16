import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function FrameTrinity(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.FRAME_TRINITY) as GLTFResult

  return (
    <group
      position={[-17.09, 20.96, -16]}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.FrameTrinity_1.geometry}
        material={materials['Material.001']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.FrameTrinity_2.geometry}
        material={materials.trinity_material}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.FRAME_TRINITY)
