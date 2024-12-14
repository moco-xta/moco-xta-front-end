import React, { forwardRef } from 'react'
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
    mac_book_pro_bottom_part: THREE.MeshStandardMaterial
    mac_book_pro_top_part: THREE.MeshStandardMaterial
  }
}

export const MacBookPro = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>(
  function MacBookPro(props, ref) {
    const { nodes } = useGLTF(glbConstants.HOME.MAC_BOOK_PRO) as GLTFResult

    const material = new THREE.MeshStandardMaterial({
      color: 'white',
    })

    return (
      <group
        ref={ref}
        {...props}
      >
        <mesh
          name='MacBookPro_1'
          geometry={nodes.MacBookPro_1.geometry}
          material={material}
          castShadow
          receiveShadow
        />
        <mesh
          name='MacBookPro_2'
          geometry={nodes.MacBookPro_2.geometry}
          material={material}
          castShadow
          receiveShadow
        />
      </group>
    )
  },
)

useGLTF.preload(glbConstants.HOME.MAC_BOOK_PRO)
