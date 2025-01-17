import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function MaastrichtScene(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.PROJECTS.MAASTRICHT_SCENE) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Rock001.geometry}
        material={materials.material_rock_001}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Cow.geometry}
        material={materials.material_cow}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Roaster.geometry}
        material={materials.material_roaster}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Tree001.geometry}
        material={materials.material_tree_001}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.MaastrichtHouse.geometry}
        material={materials.material_maastricht_house}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Ground.geometry}
        material={materials.material_ground}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Ruins.geometry}
        material={materials.material_ruins}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Rock002.geometry}
        material={materials.material_rock_002}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Rock003.geometry}
        material={materials.material_rock_003}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Tree002.geometry}
        material={materials.material_tree_002}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Falcon.geometry}
        material={materials.material_falcon}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Tree003.geometry}
        material={materials.material_trees_003_004}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Tree004.geometry}
        material={materials.material_trees_003_004}
        castShadow
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.PROJECTS.MAASTRICHT_SCENE)
