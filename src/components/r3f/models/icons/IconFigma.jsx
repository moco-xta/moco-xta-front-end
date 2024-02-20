import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconFigma(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_FIGMA)

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.IconFigma_1.geometry}
        material={materials['icon_figma_#f24d1d']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconFigma_2.geometry}
        material={materials['icon_figma_#ff7162']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconFigma_3.geometry}
        material={materials['icon_figma_#19bcfe']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconFigma_4.geometry}
        material={materials['icon_figma_#a259ff']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconFigma_5.geometry}
        material={materials['icon_figma_#0dcf82']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_FIGMA)
