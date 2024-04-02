import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoSass: THREE.Mesh
  }
  materials: {
    ['icon_sass_#ce679b']: THREE.MeshStandardMaterial
  }
}

export const LogoSass = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoSass({}, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_SASS) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[3, 9, 0]}
    >
      <mesh
        geometry={nodes.LogoSass.geometry}
        material={materials['icon_sass_#ce679b']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_SASS)
