import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

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

const LogoCss = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(
  function LogoCss({ position, rotation, scale }, ref) {
    const { scene, nodes, materials } = useGLTF(GltfConstants.LOGO_CSS) as GLTFResult

    useLayoutEffect(() => {
      const box = new THREE.Box3().setFromObject(scene)
      // @ts-ignore
      ref.current.width = box.getSize(new THREE.Vector3()).x
    }, [scene, ref])

    return (
      <group
        ref={ref}
        dispose={null}
        position={position}
        rotation={rotation}
        scale={scale}
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
      </group>
    )
  },
)

useGLTF.preload(GltfConstants.LOGO_CSS)

export default LogoCss
