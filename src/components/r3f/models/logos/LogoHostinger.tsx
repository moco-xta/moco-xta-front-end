import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoHostinger: THREE.Mesh
  }
  materials: {
    ['logo_hostinger_#6746c7']: THREE.MeshStandardMaterial
  }
}

export const LogoHostinger = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoHostinger({}, ref) {
  const { nodes, materials } = useGLTF(
    GltfConstants.LOGO_HOSTINGER,
  ) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[15, 15, 0]}
    >
      <mesh
        geometry={nodes.LogoHostinger.geometry}
        material={materials['logo_hostinger_#6746c7']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_HOSTINGER)
