import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoGraphql: THREE.Mesh
  }
  materials: {
    ['logo_graphql_#f7159f']: THREE.MeshStandardMaterial
  }
}

export const LogoGraphql = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoGraphql({ position, rotation, scale }, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_GRAPHQL) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <mesh
        geometry={nodes.LogoGraphql.geometry}
        material={materials['logo_graphql_#f7159f']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_GRAPHQL)
