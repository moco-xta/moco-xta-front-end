import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Rock001: THREE.Mesh
    Cow: THREE.Mesh
    Roaster: THREE.Mesh
    Tree001: THREE.Mesh
    MaastrichtHouse: THREE.Mesh
    Ground: THREE.Mesh
    Ruins: THREE.Mesh
    Rock002: THREE.Mesh
    Rock003: THREE.Mesh
    Tree002: THREE.Mesh
    Falcon: THREE.Mesh
    Tree003: THREE.Mesh
    Tree004: THREE.Mesh
  }
  materials: {
    material_rock_001: THREE.MeshStandardMaterial
    material_cow: THREE.MeshStandardMaterial
    material_roaster: THREE.MeshStandardMaterial
    material_tree_001: THREE.MeshStandardMaterial
    material_maastricht_house: THREE.MeshStandardMaterial
    material_ground: THREE.MeshStandardMaterial
    material_ruins: THREE.MeshStandardMaterial
    material_rock_002: THREE.MeshStandardMaterial
    material_rock_003: THREE.MeshStandardMaterial
    material_tree_002: THREE.MeshStandardMaterial
    material_falcon: THREE.MeshStandardMaterial
    material_trees_003_004: THREE.MeshStandardMaterial
  }
}

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
