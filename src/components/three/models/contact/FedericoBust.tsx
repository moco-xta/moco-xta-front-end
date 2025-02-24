import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const FedericoBust = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.CONTACT.FEDERICO_BUST) as GLTFResult

  return (
    <mesh
      ref={ref}
      geometry={nodes.Mesh_0002.geometry}
      material={materials['Material_0.002']}
      receiveShadow
      castShadow
      {...props}
      dispose={null}
    />
  )
})

FedericoBust.displayName = 'FedericoBust'

useGLTF.preload(glbConstants.CONTACT.FEDERICO_BUST)

export default FedericoBust
