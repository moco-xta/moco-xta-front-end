import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { materialsData } from '@/data/about/three/materialsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function MacBookPro(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.MAC_BOOK_PRO) as GLTFResult

  return (
    <group
      position={[0, 9.182, -8]}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.MacBookPro_1.geometry}
        material={materials.mac_book_pro}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.MacBookPro_2.geometry}
        material={materialsData.toDoMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.MacBookPro_3.geometry}
        material={materials.mac_book_pro_keyboard}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.MAC_BOOK_PRO)
