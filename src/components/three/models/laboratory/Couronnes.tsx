import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function Couronnes(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.COURONNES) as GLTFResult

  return (
    <group
      position={[0, 25.6, -16]}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Couronnes_1.geometry}
        material={materials.couronnes_border}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Couronnes_2.geometry}
        material={materials.couronnes_material}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.COURONNES)
