import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

import { degreesToRadians } from '@/helpers/r3fHelpers'

type GLTFResult = GLTF & {
  nodes: {
    MacBookPro_1: THREE.Mesh
    MacBookPro_2: THREE.Mesh
    MacBookPro_3: THREE.Mesh
  }
  materials: {
    mac_book_pro_screen: THREE.MeshStandardMaterial
    mac_book_pro_shell: THREE.MeshStandardMaterial
    mac_book_pro_keyboard: THREE.MeshStandardMaterial
  }
}

export function MacBookPro() {
  const { nodes, materials } = useGLTF(gltfConstants.MAC_BOOK_PRO) as GLTFResult
  return (
    <group
      position={[0, 6.19, 8]}
      rotation={[0, degreesToRadians(180), 0]}
    >
      <mesh
        geometry={nodes.MacBookPro_1.geometry}
        material={materials.mac_book_pro_screen}
      ></mesh>
      <mesh
        geometry={nodes.MacBookPro_2.geometry}
        material={materials.mac_book_pro_shell}
      >
        <meshStandardMaterial
          attach='material'
          color={0x616161}
          roughness={0.5}
          metalness={0.2}
        />
      </mesh>
      <mesh
        geometry={nodes.MacBookPro_3.geometry}
        material={materials.mac_book_pro_keyboard}
      >
        <meshStandardMaterial
          attach='material'
          color={0x000000}
          roughness={0}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload(gltfConstants.MAC_BOOK_PRO)
