import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    MacBookPro_1: THREE.Mesh
    MacBookPro_2: THREE.Mesh
  }
  materials: {
    material_mac_book_pro_bottom_part: THREE.MeshStandardMaterial
    material_mac_book_pro_top_part: THREE.MeshStandardMaterial
  }
}

export function MacBookPro(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.HERO.DEVELOPER.MAC_BOOK_PRO) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.MacBookPro_1.geometry}
        material={materials.material_mac_book_pro_bottom_part}
      />
      <mesh
        geometry={nodes.MacBookPro_2.geometry}
        material={materials.material_mac_book_pro_top_part}
      />
    </group>
  )
}

useGLTF.preload(glbConstants.HERO.DEVELOPER.MAC_BOOK_PRO)
