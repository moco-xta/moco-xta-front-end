import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoSpring: THREE.Mesh
  }
  materials: {
    ['logo_spring_#74b61d']: THREE.MeshStandardMaterial
  }
}

export const LogoSpring = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoSpring({}, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_SPRING) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[15, 9, 0]}
    >
      <mesh
        geometry={nodes.LogoSpring.geometry}
        material={materials['logo_spring_#74b61d']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_SPRING)
