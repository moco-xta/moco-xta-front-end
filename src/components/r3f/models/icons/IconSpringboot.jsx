import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconSpringboot(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_SPRINGBOOT)
  return (
    <group
      {...props}
      dispose={null}
      position={[-1.5, 0, 0]}
    >
      <mesh
        geometry={nodes.IconSpringboot_1.geometry}
        material={materials['icon_springboot_#68bd45']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconSpringboot_2.geometry}
        material={materials['icon_springboot_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_SPRINGBOOT)
