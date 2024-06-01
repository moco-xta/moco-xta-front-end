import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

import variables from '@/styles/new/variables.module.scss'

type GLTFResult = GLTF & {
  nodes: {
    Fruit_1: THREE.Mesh
    Fruit_2: THREE.Mesh
    Fruit_3: THREE.Mesh
    Fruit_4: THREE.Mesh
    Fruit_5: THREE.Mesh
    Fruit_6: THREE.Mesh
    Fruit_7: THREE.Mesh
    Fruit_8: THREE.Mesh
    Fruit_9: THREE.Mesh
  }
  materials: {
    fruit_red_M: THREE.MeshStandardMaterial
    fruit_red_L: THREE.MeshStandardMaterial
    fruit_red_D: THREE.MeshStandardMaterial
    fruit_red_XD: THREE.MeshStandardMaterial
    fruit_red_XL: THREE.MeshStandardMaterial
    fruit_red_XXL: THREE.MeshStandardMaterial
    fruit_green_M: THREE.MeshStandardMaterial
    fruit_green_L: THREE.MeshStandardMaterial
    fruit_green_D: THREE.MeshStandardMaterial
  }
}

export function Fruit(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    gltfConstants.SNAKE_GAME.FRUIT,
  ) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
      scale={0.5}
    >
      <mesh
        geometry={nodes.Fruit_1.geometry}
        material={materials.fruit_red_M}
      />
      <mesh
        geometry={nodes.Fruit_2.geometry}
        material={materials.fruit_red_L}
      />
      <mesh
        geometry={nodes.Fruit_3.geometry}
        material={materials.fruit_red_D}
      />
      <mesh
        geometry={nodes.Fruit_4.geometry}
        material={materials.fruit_red_XD}
      />
      <mesh
        geometry={nodes.Fruit_5.geometry}
        material={materials.fruit_red_XL}
      />
      <mesh
        geometry={nodes.Fruit_6.geometry}
        material={materials.fruit_red_XXL}
      />
      <mesh
        geometry={nodes.Fruit_7.geometry}
        material={materials.fruit_green_M}
      />
      <mesh
        geometry={nodes.Fruit_8.geometry}
        material={materials.fruit_green_L}
      />
      <mesh
        geometry={nodes.Fruit_9.geometry}
        material={materials.fruit_green_D}
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.SNAKE_GAME.FRUIT)
