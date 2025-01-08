import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    MaastrichtHouse002: THREE.Mesh
  }
  materials: {
    ['material_maastricht_house_002']: THREE.MeshStandardMaterial
  }
}

export function MaastrichtHouse002(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.PROJECTS.MAASTRICHT_HOUSE_002) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.MaastrichtHouse002.geometry}
        material={materials['material_maastricht_house_002']}
        castShadow
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.PROJECTS.MAASTRICHT_HOUSE_002)
