import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoIonic: THREE.Mesh
  }
  materials: {
    ['logo_ionic_#387fff']: THREE.MeshStandardMaterial
  }
}

export const LogoIonic = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoIonic({}, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_IONIC) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[12, 0, 0]}
    >
      <mesh
        geometry={nodes.LogoIonic.geometry}
        material={materials['logo_ionic_#387fff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_IONIC)
