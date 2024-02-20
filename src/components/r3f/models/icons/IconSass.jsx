import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconSass(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_SASS)
  return (
    <group
      {...props}
      dispose={null}
      position={[-6, 0, 0]}
    >
      <mesh
        geometry={nodes.IconSass.geometry}
        material={materials['icon_sass_#ce679b']}
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_SASS)
