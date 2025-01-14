import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { materialsData } from '@/data/about/three/materialsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Walls: THREE.Mesh
  }
  materials: object
}

export function Walls(props: JSX.IntrinsicElements['group']) {
  const { nodes, /* materials */ } = useGLTF(glbConstants.LABORATORY.WALLS) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Walls.geometry}
        material={materialsData.whitePaintMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.WALLS)
