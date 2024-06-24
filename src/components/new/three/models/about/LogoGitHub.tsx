import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoGitHub: THREE.Mesh
  }
  materials: {}
}

export function LogoGitHub({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.LOGO_GUTHUB) as GLTFResult

  const logoTwitterMaterial = new THREE.MeshStandardMaterial({
    color: '#fff',
  })

  return (
    <group position={position}>
      <mesh
        geometry={nodes.LogoGitHub.geometry}
        material={logoTwitterMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.LOGO_GUTHUB)
