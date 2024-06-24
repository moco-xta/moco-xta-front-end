import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    CeilingLampFrame: THREE.Mesh
  }
  materials: {}
}

export function CeilingLampFrame({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.CEILING_LAMP_FRAME,
  ) as GLTFResult

  const ceilingLampFrameMaterial = new THREE.MeshStandardMaterial({
    color: '#fff',
  })

  return (
    <mesh
      geometry={nodes.CeilingLampFrame.geometry}
      material={ceilingLampFrameMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.CEILING_LAMP_FRAME)
