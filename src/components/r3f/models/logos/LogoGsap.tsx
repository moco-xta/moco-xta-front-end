import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoGsap: THREE.Mesh
  }
  materials: {
    ['logo_gsap_#87cf01']: THREE.MeshStandardMaterial
  }
}

export const LogoGsap = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoGsap({}, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_GSAP) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[9, 6, 0]}
    >
      <mesh
        geometry={nodes.LogoGsap.geometry}
        material={materials['logo_gsap_#87cf01']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_GSAP)