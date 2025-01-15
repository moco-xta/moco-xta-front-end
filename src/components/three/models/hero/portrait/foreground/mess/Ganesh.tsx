import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as ganeshComponentConstants } from '@/constants/hero/three/portrait/foreground/mess/ganeshComponentConstants.json'

export const Ganesh = forwardRef<THREE.Mesh, MeshProps>(function Ganesh(props, ref) {
  const { nodes, materials } = useGLTF(
    glbConstants.HERO.PORTRAIT.FOREGROUND.MESS.GANESH,
  ) as GLTFResult

  useLayoutEffect(() => {
    materials.ganesh_material.transparent =
      ganeshComponentConstants.defaultValues.material.transparent
    materials.ganesh_material.opacity = ganeshComponentConstants.defaultValues.material.opacity
  }, [materials])

  return (
    <mesh
      ref={ref}
      name='Ganesh'
      geometry={nodes.Ganesh.geometry}
      material={materials.ganesh_material}
      {...props}
      receiveShadow
      castShadow
    />
  )
})

useGLTF.preload(glbConstants.HERO.PORTRAIT.FOREGROUND.MESS.GANESH)
