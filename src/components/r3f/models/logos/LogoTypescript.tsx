import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoTypescript_1: THREE.Mesh
    LogoTypescript_2: THREE.Mesh
  }
  materials: {
    ['icon_typescript_#2f78c7']: THREE.MeshStandardMaterial
    ['icon_typescript_#ffffff']: THREE.MeshStandardMaterial
  }
}

export const LogoTypescript = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoTypescript({}, ref) {
  const { nodes, materials } = useGLTF(
    GltfConstants.LOGO_TYPESCRIPT,
  ) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[6, 3, 0]}
    >
      <mesh
        geometry={nodes.LogoTypescript_1.geometry}
        material={materials['icon_typescript_#2f78c7']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoTypescript_2.geometry}
        material={materials['icon_typescript_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_TYPESCRIPT)
