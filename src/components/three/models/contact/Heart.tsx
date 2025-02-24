import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export const Heart = forwardRef<THREE.Mesh, MeshProps>(function Heart(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.CONTACT.HEART) as GLTFResult

  return (
    <mesh
      ref={ref}
      name='heart'
      geometry={nodes.hartZBrush_defualt_group_Heart_Tex_0.geometry}
      material={materials.heart_material}
      receiveShadow
      castShadow
      {...props}
    />
  )
})

useGLTF.preload(glbConstants.CONTACT.HEART)
