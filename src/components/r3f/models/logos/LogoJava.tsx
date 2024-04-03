import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoJava_1: THREE.Mesh
    LogoJava_2: THREE.Mesh
  }
  materials: {
    ['logo_java_#5382a1']: THREE.MeshStandardMaterial
    ['logo_java_#e76f01']: THREE.MeshStandardMaterial
  }
}

export const LogoJava = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoJava({ position, rotation, scale }, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_JAVA) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <mesh
        geometry={nodes.LogoJava_1.geometry}
        material={materials['logo_java_#5382a1']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoJava_2.geometry}
        material={materials['logo_java_#e76f01']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_JAVA)
