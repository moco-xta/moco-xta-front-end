import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function WebPage(props) {
  const { nodes, materials } = useGLTF(GltfConstants.WEB_PAGE)
  return (
    <group
      name={'web_page'}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.CloseButton.geometry}
        material={nodes.CloseButton.material}
        position={[-3, 1.6, 0.04]}
      />
      <mesh
        geometry={nodes.FullScreenButton.geometry}
        material={nodes.FullScreenButton.material}
        position={[-2.7, 1.6, 0.04]}
      />
      <mesh
        geometry={nodes.MinimizeButton.geometry}
        material={nodes.MinimizeButton.material}
        position={[-2.85, 1.6, 0.04]}
      />
      <mesh
        geometry={nodes.Page.geometry}
        material={materials.Material}
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.WEB_PAGE)
