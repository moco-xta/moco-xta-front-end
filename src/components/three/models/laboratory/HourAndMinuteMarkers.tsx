import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    HourAndMinuteMarkers: THREE.Mesh
  }
  materials: {
    wall_clock_black_plastic_material: THREE.MeshStandardMaterial
  }
}

export function HourAndMinuteMarkers(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    glbConstants.LABORATORY.HOUR_AND_MINUTE_MARKERS,
  ) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.HourAndMinuteMarkers.geometry}
        material={materials.wall_clock_black_plastic_material}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.HOUR_AND_MINUTE_MARKERS)
