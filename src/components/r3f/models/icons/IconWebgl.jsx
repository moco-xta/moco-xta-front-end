import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconWebgl(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_WEBGL)
  return (
    <group
      {...props}
      dispose={null}
      position={[7.5, 0, 0]}
    >
      <mesh
        geometry={nodes.IconWebgl.geometry}
        material={materials['icon_webgl_#990001']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_WEBGL)
