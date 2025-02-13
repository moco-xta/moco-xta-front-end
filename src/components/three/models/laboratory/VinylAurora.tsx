import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function VinylAurora(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.VINYL_AURORA) as GLTFResult

  return (
    <group
      position={[7.8, 1.59, -7.5]}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.VinylAurora_1.geometry}
        material={materials['vinyl_background.001']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.VinylAurora_2.geometry}
        material={materials.vinyl_cover_Aurora}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.VINYL_AURORA)
