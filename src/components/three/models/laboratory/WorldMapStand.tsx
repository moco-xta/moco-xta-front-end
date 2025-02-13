import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function WorldMapStand(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.WORLD_MAP_STAND) as GLTFResult

  return (
    <group position={[-12.2, 10.333, -14.1]} rotation={[0, Math.PI / 6, 0]} {...props} dispose={null}>
        <mesh geometry={nodes.WorldMapStand_1.geometry} material={materials['world_map_stand_marble.001']}
        receiveShadow
        castShadow />
        <mesh geometry={nodes.WorldMapStand_2.geometry} material={materials.world_map_stand_metal}
        receiveShadow
        castShadow />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.WORLD_MAP_STAND)
