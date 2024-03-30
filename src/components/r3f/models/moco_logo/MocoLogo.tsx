import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    MocoLogo: THREE.Mesh
  }
  materials: {}
}

export function MocoLogo(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(GltfConstants.MOCO_LOGO) as GLTFResult
  return (
    <mesh
      geometry={nodes.MocoLogo.geometry}
      scale={[2, 2, 2]}
      receiveShadow
      castShadow
    >
      <meshNormalMaterial />
    </mesh>
  )
}

useGLTF.preload(GltfConstants.MOCO_LOGO)
