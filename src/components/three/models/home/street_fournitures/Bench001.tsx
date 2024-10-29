import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Bench001_1: THREE.Mesh
    Bench001_2: THREE.Mesh
    Bench001_3: THREE.Mesh
    Bench001_4: THREE.Mesh
    Bench001_5: THREE.Mesh
  }
  materials: {
    bench_leg_front: THREE.MeshStandardMaterial
    bench_leg_side: THREE.MeshStandardMaterial
    bench_wooden_boards_front: THREE.MeshStandardMaterial
    bench_wooden_boards_back: THREE.MeshStandardMaterial
    bench_wooden_board_up: THREE.MeshStandardMaterial
  }
}

export function Bench001(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(gltfConstants.HOME.BENCH_001) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <group
        name='Bench001'
        position={[-4, 0, 5]}
      >
        <mesh
          name='Bench001_1'
          geometry={nodes.Bench001_1.geometry}
          material={materials.bench_leg_front}
          receiveShadow
          castShadow
        />
        <mesh
          name='Bench001_2'
          geometry={nodes.Bench001_2.geometry}
          material={materials.bench_leg_side}
          receiveShadow
          castShadow
        />
        <mesh
          name='Bench001_3'
          geometry={nodes.Bench001_3.geometry}
          material={materials.bench_wooden_boards_front}
          receiveShadow
          castShadow
        />
        <mesh
          name='Bench001_4'
          geometry={nodes.Bench001_4.geometry}
          material={materials.bench_wooden_boards_back}
          receiveShadow
          castShadow
        />
        <mesh
          name='Bench001_5'
          geometry={nodes.Bench001_5.geometry}
          material={materials.bench_wooden_board_up}
          receiveShadow
          castShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload(gltfConstants.HOME.BENCH_001)
