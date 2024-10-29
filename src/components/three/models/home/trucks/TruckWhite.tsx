import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    TruckWhite_1: THREE.Mesh
    TruckWhite_2: THREE.Mesh
    TruckWhite_3: THREE.Mesh
    TruckWhite_4: THREE.Mesh
    TruckWhite_5: THREE.Mesh
    TruckWhite_6: THREE.Mesh
    TruckWhite_7: THREE.Mesh
  }
  materials: {
    truck_white_side: THREE.MeshStandardMaterial
    trucks_frame: THREE.MeshStandardMaterial
    truck_white_wheels: THREE.MeshStandardMaterial
    truck_white_front: THREE.MeshStandardMaterial
    truck_white_back: THREE.MeshStandardMaterial
    truck_white_front_glass: THREE.MeshStandardMaterial
    truck_white_side_glass: THREE.MeshStandardMaterial
  }
}

export function TruckWhite(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(gltfConstants.HOME.TRUCK_WHITE) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <group
        name='TruckWhite'
        position={[23.501, 0, 5.5]}
      >
        <mesh
          name='TruckWhite_1'
          geometry={nodes.TruckWhite_1.geometry}
          material={materials.truck_white_side}
          receiveShadow
          castShadow
        />
        <mesh
          name='TruckWhite_2'
          geometry={nodes.TruckWhite_2.geometry}
          material={materials.trucks_frame}
          receiveShadow
          castShadow
        />
        <mesh
          name='TruckWhite_3'
          geometry={nodes.TruckWhite_3.geometry}
          material={materials.truck_white_wheels}
          receiveShadow
          castShadow
        />
        <mesh
          name='TruckWhite_4'
          geometry={nodes.TruckWhite_4.geometry}
          material={materials.truck_white_front}
          receiveShadow
          castShadow
        />
        <mesh
          name='TruckWhite_5'
          geometry={nodes.TruckWhite_5.geometry}
          material={materials.truck_white_back}
          receiveShadow
          castShadow
        />
        <mesh
          name='TruckWhite_6'
          geometry={nodes.TruckWhite_6.geometry}
          material={materials.truck_white_front_glass}
          receiveShadow
          castShadow
        />
        <mesh
          name='TruckWhite_7'
          geometry={nodes.TruckWhite_7.geometry}
          material={materials.truck_white_side_glass}
          receiveShadow
          castShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload(gltfConstants.HOME.TRUCK_WHITE)
