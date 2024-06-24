import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    MacBookPro_1: THREE.Mesh
    MacBookPro_2: THREE.Mesh
    MacBookPro_3: THREE.Mesh
  }
  materials: {}
}

const macBookProMaterial = new THREE.MeshStandardMaterial({
  color: '#7f8081',
  metalness: 0.4,
  roughness: 0.4,
})

const macBookProScreenMaterial = new THREE.MeshStandardMaterial({
  color: '#000',
  metalness: 0,
  roughness: 0,
})

const macBookProKeyboardMaterial = new THREE.MeshStandardMaterial({
  color: '#000',
  metalness: 0.1,
  roughness: 0.5,
})

export function MacBookPro({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.MAC_BOOK_PRO) as GLTFResult

  return (
    <group
      position={position}
      dispose={null}
    >
      <mesh
        name='MacBookPro_1'
        geometry={nodes.MacBookPro_1.geometry}
        material={macBookProMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='MacBookPro_2'
        geometry={nodes.MacBookPro_2.geometry}
        material={macBookProScreenMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='MacBookPro_3'
        geometry={nodes.MacBookPro_3.geometry}
        material={macBookProKeyboardMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.MAC_BOOK_PRO)
