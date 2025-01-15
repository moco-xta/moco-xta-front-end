import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export const Smiley = forwardRef<THREE.Mesh, MeshProps>(function Smiley(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HERO.MOCO.SMILEY) as GLTFResult

  return (
    <mesh
      ref={ref}
      name='Smiley'
      geometry={nodes.Smiley.geometry}
      material={materials.smiley}
      {...props}
    />
  )
})

useGLTF.preload(glbConstants.HERO.MOCO.SMILEY)
