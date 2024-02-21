import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconNpm(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_NPM)
  return (
    <group
      {...props}
      dispose={null}
      position={[0, 0, 0]}
    >
      <mesh
        geometry={nodes.IconNpm_1.geometry}
        material={materials['icon_npm_#cc3533']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconNpm_2.geometry}
        material={materials['icon_npm_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_NPM)

