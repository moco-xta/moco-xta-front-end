import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoABWerkt_1: THREE.Mesh
    LogoABWerkt_2: THREE.Mesh
    LogoABWerkt_3: THREE.Mesh
  }
  materials: {
    ['logo_abwerkt_#e32017']: THREE.MeshStandardMaterial
    ['logo_abwerkt_#b0c500']: THREE.MeshStandardMaterial
    ['logo_abwerkt_#036361']: THREE.MeshStandardMaterial
  }
}

const LogoABWerkt = forwardRef<
  ForwardRefGltfGroupInterface,
  JSX.IntrinsicElements['group']
>(function LogoABWerkt({ position, rotation, scale }, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_ABWERKT) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <mesh
        geometry={nodes.LogoABWerkt_1.geometry}
        material={materials['logo_abwerkt_#e32017']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoABWerkt_2.geometry}
        material={materials['logo_abwerkt_#b0c500']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoABWerkt_3.geometry}
        material={materials['logo_abwerkt_#036361']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_ABWERKT)

export default LogoABWerkt
