import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconIllustrator(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_ILLUSTRATOR)
  return (
    <group
      {...props}
      dispose={null}
      position={[0, 0, 0]}
    >
      <mesh
        geometry={nodes.IconIllustrator_1.geometry}
        material={materials['icon_illustrator_#f89a01']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconIllustrator_2.geometry}
        material={materials['icon_illustrator_#320000']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_ILLUSTRATOR)
