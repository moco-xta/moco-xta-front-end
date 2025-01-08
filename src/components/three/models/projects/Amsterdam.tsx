import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Amsterdam_1: THREE.Mesh
    Amsterdam_2: THREE.Mesh
    Amsterdam_3: THREE.Mesh
    Amsterdam_4: THREE.Mesh
    Amsterdam_5: THREE.Mesh
    Amsterdam_6: THREE.Mesh
    Amsterdam_7: THREE.Mesh
    Amsterdam_8: THREE.Mesh
    Amsterdam_9: THREE.Mesh
    Amsterdam_10: THREE.Mesh
    Amsterdam_11: THREE.Mesh
    Amsterdam_12: THREE.Mesh
    Amsterdam_13: THREE.Mesh
    Amsterdam_14: THREE.Mesh
  }
  materials: {
    material_amsterdam_house: THREE.MeshStandardMaterial
    ['Material_0.006']: THREE.MeshStandardMaterial
    ['Material_0.009']: THREE.MeshStandardMaterial
    ['Material_0.014']: THREE.MeshStandardMaterial
    Material_0: THREE.MeshStandardMaterial
    ['Material_0.007']: THREE.MeshStandardMaterial
    material_tree_001: THREE.MeshStandardMaterial
    ['Material_0.049']: THREE.MeshStandardMaterial
    ['Material_0.001']: THREE.MeshStandardMaterial
    ['Material_0.013']: THREE.MeshStandardMaterial
    ['Material_0.002']: THREE.MeshStandardMaterial
    ['Material_0.033']: THREE.MeshStandardMaterial
    ['Material_0.003']: THREE.MeshStandardMaterial
    ['Material_0.004']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.PROJECTS.AMSTERDAM) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
        <mesh
          geometry={nodes.Amsterdam_1.geometry}
          material={materials.material_amsterdam_house}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Amsterdam_2.geometry}
          material={materials['Material_0.006']}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Amsterdam_3.geometry}
          material={materials['Material_0.009']}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Amsterdam_4.geometry}
          material={materials['Material_0.014']}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Amsterdam_5.geometry}
          material={materials.Material_0}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Amsterdam_6.geometry}
          material={materials['Material_0.007']}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Amsterdam_7.geometry}
          material={materials.material_tree_001}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Amsterdam_8.geometry}
          material={materials['Material_0.049']}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Amsterdam_9.geometry}
          material={materials['Material_0.001']}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Amsterdam_10.geometry}
          material={materials['Material_0.013']}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Amsterdam_11.geometry}
          material={materials['Material_0.002']}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Amsterdam_12.geometry}
          material={materials['Material_0.033']}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Amsterdam_13.geometry}
          material={materials['Material_0.003']}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Amsterdam_14.geometry}
          material={materials['Material_0.004']}
          castShadow
          receiveShadow
        />
    </group>
  )
}

useGLTF.preload(glbConstants.PROJECTS.AMSTERDAM)
