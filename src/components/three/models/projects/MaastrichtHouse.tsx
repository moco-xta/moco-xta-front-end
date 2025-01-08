import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    MaastrichtHouse: THREE.Mesh
  }
  materials: {
    ['material_maastricht_house']: THREE.MeshStandardMaterial
  }
}

export function MaastrichtHouse(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.PROJECTS.MAASTRICHT_HOUSE) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.MaastrichtHouse.geometry}
        material={materials['material_maastricht_house']}
        castShadow
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.PROJECTS.MAASTRICHT_HOUSE)
