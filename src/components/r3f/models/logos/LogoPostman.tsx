import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoPostman_1: THREE.Mesh
    LogoPostman_2: THREE.Mesh
  }
  materials: {
    ['logo_postman_#000000']: THREE.MeshStandardMaterial
    ['logo_postman_#fe6c37']: THREE.MeshStandardMaterial
  }
}

export const LogoPostman = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoPostman({}, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_POSTMAN) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[15, 6, 0]}
    >
      <mesh
        geometry={nodes.LogoPostman_1.geometry}
        material={materials['logo_postman_#000000']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoPostman_2.geometry}
        material={materials['logo_postman_#fe6c37']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_POSTMAN)