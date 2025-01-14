import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Screen_1: THREE.Mesh
    Screen_2: THREE.Mesh
  }
  materials: {
    screen_black_plastic: THREE.MeshStandardMaterial
    screen: THREE.MeshStandardMaterial
  }
}

export function Screen(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.SCREEN) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group position={[0, 3.01, 0]}>
        <mesh geometry={nodes.Screen_1.geometry} material={materials.screen_black_plastic} />
        <mesh geometry={nodes.Screen_2.geometry} material={materials.screen} />
      </group>
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.SCREEN)
