import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoCss_1: THREE.Mesh
    LogoCss_2: THREE.Mesh
    LogoCss_3: THREE.Mesh
    LogoCss_4: THREE.Mesh
    LogoCss_5: THREE.Mesh
  }
  materials: {
    ['logo_css_#ebebeb']: THREE.MeshStandardMaterial
    ['logo_css_#3769b2']: THREE.MeshStandardMaterial
    ['logo_css_#499fd8']: THREE.MeshStandardMaterial
    ['logo_css_#ffffff']: THREE.MeshStandardMaterial
    ['logo_css_#000000']: THREE.MeshStandardMaterial
  }
}

export const LogoCss = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoCss({}, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_CSS) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[12, 12, 0]}
    >
      <mesh
        geometry={nodes.LogoCss_1.geometry}
        material={materials['logo_css_#ebebeb']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoCss_2.geometry}
        material={materials['logo_css_#3769b2']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoCss_3.geometry}
        material={materials['logo_css_#499fd8']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoCss_4.geometry}
        material={materials['logo_css_#ffffff']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoCss_5.geometry}
        material={materials['logo_css_#000000']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_CSS)
