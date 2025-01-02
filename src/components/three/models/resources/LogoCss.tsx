import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoCss_1: THREE.Mesh
    LogoCss_2: THREE.Mesh
    LogoCss_3: THREE.Mesh
    LogoCss_4: THREE.Mesh
  }
  materials: {
    ['logo_css_#ebebeb']: THREE.MeshStandardMaterial
    ['logo_css_#3769b2']: THREE.MeshStandardMaterial
    ['logo_css_#499fd8']: THREE.MeshStandardMaterial
    ['logo_css_#ffffff']: THREE.MeshStandardMaterial
  }
}

const LogoCss = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_CSS) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].side = THREE.DoubleSide
    })
  }, [materials])

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoCss_1.geometry}
        material={materials['logo_css_#ebebeb']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoCss_2.geometry}
        material={materials['logo_css_#3769b2']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoCss_3.geometry}
        material={materials['logo_css_#499fd8']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoCss_4.geometry}
        material={materials['logo_css_#ffffff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.RESOURCES.LOGO_CSS)

export default LogoCss
