import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoAws_1: THREE.Mesh
    LogoAws_2: THREE.Mesh
  }
  materials: {
    ['logo_aws_#252f3e']: THREE.MeshStandardMaterial
    ['logo_aws_#ff9900']: THREE.MeshStandardMaterial
  }
}

export const LogoAws = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoAws({}, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_AWS) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[18, 15, 0]}
    >
      <mesh
        geometry={nodes.LogoAws_1.geometry}
        material={materials['logo_aws_#252f3e']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoAws_2.geometry}
        material={materials['logo_aws_#ff9900']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_AWS)
