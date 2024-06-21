import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { glassSimpleMaterial } from '../../materials/standardsMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    DeskTray: THREE.Mesh
  }
  materials: {}
}

export function DeskTray({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.DESK_TRAY) as GLTFResult

  return (
    <mesh
      geometry={nodes.DeskTray.geometry}
      position={position}
      material={glassSimpleMaterial}
      receiveShadow
      /* castShadow */
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.DESK_TRAY)
