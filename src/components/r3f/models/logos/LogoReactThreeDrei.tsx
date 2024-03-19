import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoReactThreeDrei_1: THREE.Mesh
    LogoReactThreeDrei_2: THREE.Mesh
  }
  materials: {
    ['react-three_drei_#f10055']: THREE.MeshStandardMaterial
    ['react-three_drei_#ffffff']: THREE.MeshStandardMaterial
  }
}

export function LogoReactThreeDrei(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    GltfConstants.LOGO_REACT_THREE_DREI,
  ) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoReactThreeDrei_1.geometry}
        material={materials['react-three_drei_#f10055']}
      />
      <mesh
        geometry={nodes.LogoReactThreeDrei_2.geometry}
        material={materials['react-three_drei_#ffffff']}
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.LOGO_REACT_THREE_DREI)
