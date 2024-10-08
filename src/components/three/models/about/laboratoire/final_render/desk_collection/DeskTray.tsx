import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { glassMaterial } from '@/components/three/materials/about/laboratoire/laboratoireMaterials'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    DeskTray: THREE.Mesh
  }
  materials: {}
}

export function DeskTray({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.DESK_TRAY,
  ) as GLTFResult

  return (
    <mesh
      name='DeskTray'
      geometry={nodes.DeskTray.geometry}
      material={glassMaterial}
      position={position}
      receiveShadow
      /* castShadow */
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.DESK_TRAY)
