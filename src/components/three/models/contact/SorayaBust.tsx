import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const SorayaBust = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.CONTACT.SORAYA_BUST) as GLTFResult

  return (
    <mesh
      ref={ref}
      geometry={nodes.SorayaBust.geometry}
      material={materials.Material_0}
      castShadow
      receiveShadow
      {...props}
      dispose={null}
    />
  )
})

SorayaBust.displayName = 'SorayaBust'

useGLTF.preload(glbConstants.CONTACT.SORAYA_BUST)

export default SorayaBust
