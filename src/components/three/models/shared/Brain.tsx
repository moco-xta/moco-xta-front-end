import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function Brain(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.SHARED.BRAIN) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Brain.geometry}
        material={materials.brain_material}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.SHARED.BRAIN)
