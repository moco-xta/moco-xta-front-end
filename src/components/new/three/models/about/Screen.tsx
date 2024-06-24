import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Screen_1: THREE.Mesh
    Screen_2: THREE.Mesh
  }
  materials: {}
}

export function Screen({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.SCREEN) as GLTFResult

  const screenMaterial = new THREE.MeshStandardMaterial({
    color: '#000',
    roughness: 0.5,
  })

  const screenFrameMaterial = new THREE.MeshStandardMaterial({
    color: '#000',
    roughness: 0.1,
  })

  return (
    <group position={position}>
      <mesh
        geometry={nodes.Screen_1.geometry}
        material={screenMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Screen_2.geometry}
        material={screenFrameMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.SCREEN)
