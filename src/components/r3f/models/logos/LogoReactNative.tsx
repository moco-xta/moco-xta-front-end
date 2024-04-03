import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoReactNative: THREE.Mesh
  }
  materials: {
    ['logo_react_native_#61d9fb']: THREE.MeshStandardMaterial
  }
}

export const LogoReactNative = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoReactNative({ position, rotation, scale }, ref) {
  const { nodes, materials } = useGLTF(
    GltfConstants.LOGO_REACT_NATIVE,
  ) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <mesh
        geometry={nodes.LogoReactNative.geometry}
        material={materials['logo_react_native_#61d9fb']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_REACT_NATIVE)
