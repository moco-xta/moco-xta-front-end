import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoNextjs: THREE.Mesh
  }
  materials: {
    ['logo_nextjs_#ffffff']: THREE.MeshStandardMaterial
  }
}

export function LogoNextjs(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_NEXTJS) as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.LogoNextjs.geometry} material={materials['logo_nextjs_#ffffff']} />
    </group>
  )
}

useGLTF.preload(GltfConstants.LOGO_NEXTJS)
