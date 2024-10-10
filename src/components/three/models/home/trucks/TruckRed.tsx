import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    TruckRed_1: THREE.Mesh
    TruckRed_2: THREE.Mesh
    TruckRed_3: THREE.Mesh
    TruckRed_4: THREE.Mesh
    TruckRed_5: THREE.Mesh
    TruckRed_6: THREE.Mesh
  }
  materials: {
    truck_red_side: THREE.MeshStandardMaterial
    trucks_frame: THREE.MeshStandardMaterial
    truck_red_front: THREE.MeshStandardMaterial
    truck_red_back: THREE.MeshStandardMaterial
    truck_red_side_glass: THREE.MeshStandardMaterial
    truck_red_front_glass: THREE.MeshStandardMaterial
  }
}

export function TruckRed(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(gltfConstants.HOME.TRUCK_RED) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <group
        name='TruckRed'
        position={[9.501, 0, 6]}
      >
        <mesh
          name='TruckRed_1'
          geometry={nodes.TruckRed_1.geometry}
          material={materials.truck_red_side}
          receiveShadow
          castShadow
        />
        <mesh
          name='TruckRed_2'
          geometry={nodes.TruckRed_2.geometry}
          material={materials.trucks_frame}
          receiveShadow
          castShadow
        />
        <mesh
          name='TruckRed_3'
          geometry={nodes.TruckRed_3.geometry}
          material={materials.truck_red_front}
          receiveShadow
          castShadow
        />
        <mesh
          name='TruckRed_4'
          geometry={nodes.TruckRed_4.geometry}
          material={materials.truck_red_back}
          receiveShadow
          castShadow
        />
        <mesh
          name='TruckRed_5'
          geometry={nodes.TruckRed_5.geometry}
          material={materials.truck_red_side_glass}
          receiveShadow
          castShadow
        />
        <mesh
          name='TruckRed_6'
          geometry={nodes.TruckRed_6.geometry}
          material={materials.truck_red_front_glass}
          receiveShadow
          castShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload(gltfConstants.HOME.TRUCK_RED)
