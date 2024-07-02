import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    CeilingLampFrame: THREE.Mesh
  }
  materials: {}
}

export function CeilingLampFrame({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.LIGHTS_COLLECTION.CEILING_LAMP_FRAME,
  ) as GLTFResult

  const ceilingLampFrameMaterial = new THREE.MeshStandardMaterial({
    color: '#fff',
  })

  return (
    <mesh
      name='CeilingLampFrame'
      geometry={nodes.CeilingLampFrame.geometry}
      material={ceilingLampFrameMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.LIGHTS_COLLECTION.CEILING_LAMP_FRAME)
