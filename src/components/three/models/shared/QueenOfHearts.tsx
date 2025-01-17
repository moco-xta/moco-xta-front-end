import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function QueenOfHearts(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.SHARED.QUEEN_OF_HEARTS) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.QueenOfHearts.geometry}
        material={materials.queen_of_hearts_material}
      />
    </group>
  )
}

useGLTF.preload(glbConstants.SHARED.QUEEN_OF_HEARTS)
