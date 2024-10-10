import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Building001_1: THREE.Mesh
    Building001_2: THREE.Mesh
  }
  materials: {
    building_001: THREE.MeshStandardMaterial
    building_001_glass: THREE.MeshStandardMaterial
  }
}

export function Building001(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(gltfConstants.HOME.BUILDING_001) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        name='Building001_1'
        geometry={nodes.Building001_1.geometry}
        material={materials.building_001}
        receiveShadow
        castShadow
      />
      <mesh
        name='Building001_2'
        geometry={nodes.Building001_2.geometry}
        material={materials.building_001_glass}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.HOME.BUILDING_001)
