import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    HourAndMinuteMarkers: THREE.Mesh
  }
  materials: {}
}

export function HourAndMinuteMarkers({
  position,
}: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.HOUR_AND_MINUTE_MARKERS,
  ) as GLTFResult

  const hourAndMinuteMarkersMaterial = new THREE.MeshStandardMaterial({
    color: '#000',
    roughness: 1,
  })

  return (
    <mesh
      geometry={nodes.HourAndMinuteMarkers.geometry}
      material={hourAndMinuteMarkersMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.HOUR_AND_MINUTE_MARKERS)
