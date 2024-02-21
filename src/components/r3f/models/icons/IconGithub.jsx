import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconGithub(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_GITHUB)
  return (
    <group
      {...props}
      dispose={null}
      position={[0, 0, 0]}
    >
      <mesh
        geometry={nodes.IconGithub.geometry}
        material={materials['icon_github_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_GITHUB)
