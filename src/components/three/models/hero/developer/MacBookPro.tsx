import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

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
