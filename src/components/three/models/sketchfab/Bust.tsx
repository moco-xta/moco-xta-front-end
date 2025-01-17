import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const Bust = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.SKETCHFAB.BUST) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Face.geometry}
        material={materials.bust_material}
        receiveShadow
        castShadow
      />
    </group>
  )
})

Bust.displayName = 'Bust'

useGLTF.preload(glbConstants.SKETCHFAB.BUST)

export default Bust
