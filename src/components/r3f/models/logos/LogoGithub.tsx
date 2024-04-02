import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoGithub: THREE.Mesh
  }
  materials: {
    ['logo_github_#ffffff']: THREE.MeshStandardMaterial
  }
}

export const LogoGithub = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoGithub({}, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_GITHUB) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[6, 9, 0]}
    >
      <mesh
        geometry={nodes.LogoGithub.geometry}
        material={materials['logo_github_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_GITHUB)
