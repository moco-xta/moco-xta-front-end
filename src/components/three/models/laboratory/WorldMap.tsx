import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function WorldMap(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.WORLD_MAP) as GLTFResult

  return (
    <group position={[-12.188, 12.685, -14.096]} rotation={[0, -Math.PI / 9, 0.262]} {...props} dispose={null}>
      <mesh geometry={nodes.WorldMap.geometry} material={materials.world_map_material}
        receiveShadow
        castShadow />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.WORLD_MAP)
