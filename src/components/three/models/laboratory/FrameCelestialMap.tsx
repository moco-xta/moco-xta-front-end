import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function FrameCelestialMap(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.FRAME_CELESTIAL_MAP) as GLTFResult

  return (
    <group
      position={[10.1, 12.2, -16]}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.FrameCelestialMap_1.geometry}
        material={materials['celestial_map_frame_material.001']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.FrameCelestialMap_2.geometry}
        material={materials['celestial_map_material.001']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.FRAME_CELESTIAL_MAP)
