import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { MeshProps } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    hartZBrush_defualt_group_Heart_Tex_0: THREE.Mesh
  }
  materials: {
    heart_material: THREE.MeshStandardMaterial
  }
}

export const Heart = forwardRef<THREE.Mesh, MeshProps>(function Heart(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.PORTRAIT.HEART) as GLTFResult

  return (
    <mesh
      ref={ref}
      dispose={null}
      name='Ganesh'
      geometry={nodes.hartZBrush_defualt_group_Heart_Tex_0.geometry}
      material={materials.heart_material}
      {...props}
      receiveShadow
      castShadow
    />
  )
})

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.HEART)
