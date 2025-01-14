import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { materialsData } from '@/data/about/three/materialsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    WallClockGlass: THREE.Mesh
  }
  materials: object
}

export function WallClockGlass(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(glbConstants.LABORATORY.WALL_CLOCK_GLASS) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.WallClockGlass.geometry}
        material={materialsData.glassMaterial}
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.WALL_CLOCK_GLASS)
