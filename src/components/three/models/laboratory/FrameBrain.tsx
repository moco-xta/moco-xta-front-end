import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function FrameBrain(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.FRAME_BRAIN) as GLTFResult

  return (
    <group
      position={[-19.06, 10, -16]}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.FrameBrain_1.geometry}
        material={materials.Material}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.FrameBrain_2.geometry}
        material={materials.brain_material}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.FRAME_BRAIN)
