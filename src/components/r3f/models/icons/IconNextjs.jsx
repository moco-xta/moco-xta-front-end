import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconNextjs(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_NEXTJS)
  return (
    <group
      {...props}
      dispose={null}
      position={[-12, 0, 0]}
    >
      <mesh
        geometry={nodes.IconNextjs.geometry}
        material={materials['icon_nextjs_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_NEXTJS)
