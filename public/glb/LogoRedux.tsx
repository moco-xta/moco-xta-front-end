/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 LogoRedux.glb --types -k 
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    LogoRedux: THREE.Mesh
  }
  materials: {
    ['icon_redux_#764abc']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/LogoRedux.glb') as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        name='LogoRedux'
        geometry={nodes.LogoRedux.geometry}
        material={materials['icon_redux_#764abc']}
      />
    </group>
  )
}

useGLTF.preload('/LogoRedux.glb')