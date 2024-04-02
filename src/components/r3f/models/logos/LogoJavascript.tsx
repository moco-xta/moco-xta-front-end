import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoJavascript_1: THREE.Mesh
    LogoJavascript_2: THREE.Mesh
  }
  materials: {
    ['logo_javascript_#000000']: THREE.MeshStandardMaterial
    ['logo_javascript_#f4e11e']: THREE.MeshStandardMaterial
  }
}

export const LogoJavascript = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoJavascript({}, ref) {
  const { nodes, materials } = useGLTF(
    GltfConstants.LOGO_JAVASCRIPT,
  ) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[6, 6, 0]}
    >
      <mesh
        geometry={nodes.LogoJavascript_1.geometry}
        material={materials['logo_javascript_#000000']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoJavascript_2.geometry}
        material={materials['logo_javascript_#f4e11e']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_JAVASCRIPT)
