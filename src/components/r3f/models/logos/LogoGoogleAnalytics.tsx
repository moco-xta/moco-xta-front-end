import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoGoogleAnalytics_1: THREE.Mesh
    LogoGoogleAnalytics_2: THREE.Mesh
  }
  materials: {
    ['logo_google_analytics_#f9aa00']: THREE.MeshStandardMaterial
    ['logo_google_analytics_#e37401']: THREE.MeshStandardMaterial
  }
}

export const LogoGoogleAnalytics = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoGoogleAnalytics({}, ref) {
  const { nodes, materials } = useGLTF(
    GltfConstants.LOGO_GOOGLE_ANALYTICS,
  ) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[15, 12, 0]}
    >
      <mesh
        geometry={nodes.LogoGoogleAnalytics_1.geometry}
        material={materials['logo_google_analytics_#f9aa00']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoGoogleAnalytics_2.geometry}
        material={materials['logo_google_analytics_#e37401']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_GOOGLE_ANALYTICS)
