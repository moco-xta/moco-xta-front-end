import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconAnsible(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_ANSIBLE)
  return (
    <group
      {...props}
      dispose={null}
      position={[-4.5, 0, 0]}
    >
      <mesh
        geometry={nodes.IconAnsible_1.geometry}
        material={materials['icon_ansible_#000000']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconAnsible_2.geometry}
        material={materials['icon_ansible_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_ANSIBLE)
