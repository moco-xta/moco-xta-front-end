import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { degreesToRadians } from '@/helpers/r3fHelpers'

type GLTFResult = GLTF & {
  nodes: {
    LogoAngular_1: THREE.Mesh
    LogoAngular_2: THREE.Mesh
    LogoAngular_3: THREE.Mesh
  }
  materials: {
    ['logo_angular_#dd002d']: THREE.MeshStandardMaterial
    ['logo_angular_#ffffff']: THREE.MeshStandardMaterial
    ['logo_angular_#c4002b']: THREE.MeshStandardMaterial
  }
}

export const LogoAngular = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoAngular({ position, rotation, scale }, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_ANGULAR) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <mesh
        geometry={nodes.LogoAngular_1.geometry}
        material={materials['logo_angular_#dd002d']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoAngular_2.geometry}
        material={materials['logo_angular_#ffffff']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoAngular_3.geometry}
        material={materials['logo_angular_#c4002b']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_ANGULAR)
