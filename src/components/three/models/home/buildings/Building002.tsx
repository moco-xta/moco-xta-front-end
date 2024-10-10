import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Building002_1: THREE.Mesh
    Building002_2: THREE.Mesh
    Building002_3: THREE.Mesh
  }
  materials: {
    building_002: THREE.MeshStandardMaterial
    building_002_glass: THREE.MeshStandardMaterial
    building_002_right_wall: THREE.MeshStandardMaterial
  }
}

export function Building002(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(gltfConstants.HOME.BUILDING_002) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <group
        name='Building002'
        position={[20.7, 0, 0]}
      >
        <mesh
          name='Building002_1'
          geometry={nodes.Building002_1.geometry}
          material={materials.building_002}
          receiveShadow
          castShadow
        />
        <mesh
          name='Building002_2'
          geometry={nodes.Building002_2.geometry}
          material={materials.building_002_glass}
          receiveShadow
          castShadow
        />
        <mesh
          name='Building002_3'
          geometry={nodes.Building002_3.geometry}
          material={materials.building_002_right_wall}
          receiveShadow
          castShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload(gltfConstants.HOME.BUILDING_002)
