import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const SorayaBust = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.CONTACT.SORAYA_BUST) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.SorayaBust.geometry}
        material={materials.Material_0}
        castShadow
        receiveShadow
      />
    </group>
  )
})

SorayaBust.displayName = 'SorayaBust'

useGLTF.preload(glbConstants.CONTACT.SORAYA_BUST)

export default SorayaBust
