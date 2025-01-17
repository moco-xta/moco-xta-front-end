import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function Hydrangea(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.SHARED.HYDRANGEA) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Hydrangea.geometry}
        material={materials.hydrangea_material}
        position={[1, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.008}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.SHARED.HYDRANGEA)
