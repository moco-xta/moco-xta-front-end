/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 WebPage.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/WebPage.gltf')
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.CloseButton.geometry}
        material={nodes.CloseButton.material}
      />
      <mesh
        geometry={nodes.FullScreenButton.geometry}
        material={nodes.FullScreenButton.material}
      />
      <mesh
        geometry={nodes.MinimizeButton.geometry}
        material={nodes.MinimizeButton.material}
      />
      <mesh
        geometry={nodes.Page.geometry}
        material={materials.Material}
      />
      <mesh
        geometry={nodes.Frame.geometry}
        material={materials.Material}
      />
      <mesh
        geometry={nodes.Logo.geometry}
        material={nodes.Logo.material}
      />
    </group>
  )
}

useGLTF.preload('/WebPage.gltf')