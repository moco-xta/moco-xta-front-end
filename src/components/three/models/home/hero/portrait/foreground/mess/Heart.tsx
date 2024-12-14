import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as heartComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/heartComponentConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    hartZBrush_defualt_group_Heart_Tex_0: THREE.Mesh
  }
  materials: {
    heart_material: THREE.MeshStandardMaterial
  }
}

export const Heart = forwardRef<THREE.Mesh, MeshProps>(function Heart(props, ref) {
  const { nodes, materials } = useGLTF(
    glbConstants.HOME.HERO.PORTRAIT.FOREGROUND.MESS.HEART,
  ) as GLTFResult

  useLayoutEffect(() => {
    materials.heart_material.transparent =
      heartComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.TRANSPARENT
    materials.heart_material.opacity =
      heartComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY
  }, [materials])

  return (
    <mesh
      ref={ref}
      name='Ganesh'
      geometry={nodes.hartZBrush_defualt_group_Heart_Tex_0.geometry}
      material={materials.heart_material}
      receiveShadow
      castShadow
      {...props}
    />
  )
})

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.FOREGROUND.MESS.HEART)
