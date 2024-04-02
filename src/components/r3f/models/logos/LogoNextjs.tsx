import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoNextjs: THREE.Mesh
  }
  materials: {
    ['logo_nextjs_#ffffff']: THREE.MeshStandardMaterial
  }
}

export const LogoNextjs = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoNextjs({}, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_NEXTJS) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[3, 3, 0]}
    >
      <mesh
        geometry={nodes.LogoNextjs.geometry}
        material={materials['logo_nextjs_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_NEXTJS)
