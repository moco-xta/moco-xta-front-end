import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconPhotoshop(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_PHOTOSHOP)
  return (
    <group
      {...props}
      dispose={null}
      position={[-0.75, 0, 0]}
    >
      <mesh
        geometry={nodes.IconPhotoshop_1.geometry}
        material={materials['icon_photoshop_#051e37']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconPhotoshop_2.geometry}
        material={materials['icon_photoshop_#39a9ff']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_PHOTOSHOP)
