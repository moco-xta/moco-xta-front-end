import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as heartComponentConstants } from '@/constants/hero/three/portrait/foreground/mess/heartComponentConstants.json'

export const Heart = forwardRef<THREE.Mesh, MeshProps>(function Heart(props, ref) {
  const { nodes, materials } = useGLTF(
    glbConstants.HERO.PORTRAIT.FOREGROUND.MESS.HEART,
  ) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].transparent = heartComponentConstants.defaultValues.material.transparent
      materials[key].opacity = heartComponentConstants.defaultValues.material.opacity
    })
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

useGLTF.preload(glbConstants.HERO.PORTRAIT.FOREGROUND.MESS.HEART)
