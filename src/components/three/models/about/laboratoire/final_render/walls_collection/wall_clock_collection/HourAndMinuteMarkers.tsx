import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    HourAndMinuteMarkers: THREE.Mesh
  }
  materials: {}
}

export function HourAndMinuteMarkers({}: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION
      .HOUR_AND_MINUTE_MARKERS,
  ) as GLTFResult

  const hourAndMinuteMarkersMaterial = new THREE.MeshStandardMaterial({
    color: '#000',
    roughness: 1,
  })

  return (
    <mesh
      geometry={nodes.HourAndMinuteMarkers.geometry}
      material={hourAndMinuteMarkersMaterial}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION
    .HOUR_AND_MINUTE_MARKERS,
)
