import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    MaastrichtHouse003: THREE.Mesh
  }
  materials: {
    ['material_maastricht_house_003']: THREE.MeshStandardMaterial
  }
}

export function MaastrichtHouse003(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.PROJECTS.MAASTRICHT_HOUSE_003) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.MaastrichtHouse003.geometry}
        material={materials['material_maastricht_house_003']}
        castShadow
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.PROJECTS.MAASTRICHT_HOUSE_003)
