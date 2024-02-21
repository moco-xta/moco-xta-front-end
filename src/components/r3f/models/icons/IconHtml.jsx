import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconHtml(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_HTML)
  return (
    <group
      {...props}
      dispose={null}
      position={[0, 0, 0]}
    >
      <mesh
        geometry={nodes.IconHtml_1.geometry}
        material={materials['icon_html_#f16529']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconHtml_2.geometry}
        material={materials['icon_html_#e44d26']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconHtml_3.geometry}
        material={materials['icon_html_#ffffff']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconHtml_4.geometry}
        material={materials['icon_html_#ebebeb']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_HTML)
