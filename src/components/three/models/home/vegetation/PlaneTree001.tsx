import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    PlaneTree001_1: THREE.Mesh
    PlaneTree001_2: THREE.Mesh
  }
  materials: {
    plane_tree_trunck: THREE.MeshStandardMaterial
    plane_tree_leaves: THREE.MeshStandardMaterial
  }
}

export function PlaneTree001(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(gltfConstants.HOME.PLANE_TREE_001) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <group
        name='PlaneTree001'
        position={[-9, 0, 5]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <mesh
          name='PlaneTree001_1'
          geometry={nodes.PlaneTree001_1.geometry}
          material={materials.plane_tree_trunck}
        />
        <mesh
          name='PlaneTree001_2'
          geometry={nodes.PlaneTree001_2.geometry}
          material={materials.plane_tree_leaves}
        />
      </group>
    </group>
  )
}

useGLTF.preload(gltfConstants.HOME.PLANE_TREE_001)
