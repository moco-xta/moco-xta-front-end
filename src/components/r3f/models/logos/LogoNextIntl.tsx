import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoNextIntl: THREE.Mesh
  }
  materials: {
    ['logo_next_intl_#5fc3e7']: THREE.MeshStandardMaterial
  }
}

export const LogoNextIntl = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoNextIntl({}, ref) {
  const { nodes, materials } = useGLTF(
    GltfConstants.LOGO_NEXT_INTL,
  ) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[18, 6, 0]}
    >
      <mesh
        geometry={nodes.LogoNextIntl.geometry}
        material={materials['logo_next_intl_#5fc3e7']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_NEXT_INTL)
