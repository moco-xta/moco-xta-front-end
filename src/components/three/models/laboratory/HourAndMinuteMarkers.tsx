import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

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
