import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as ganeshComponentConstants } from '@/constants/hero/three/portrait/foreground/mess/ganeshComponentConstants.json'

import { MeshProps } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Ganesh: THREE.Mesh
  }
  materials: {
    ganesh_material: THREE.MeshStandardMaterial
  }
}

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
