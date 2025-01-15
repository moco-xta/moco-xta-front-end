import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function Trestle(props: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.TRESTLE) as GLTFResult

  return (
    <mesh
      geometry={nodes.Trestle.geometry}
      material={materials.Material}
      receiveShadow
      castShadow
      {...props}
    />
  )
}

useGLTF.preload(glbConstants.LABORATORY.TRESTLE)
