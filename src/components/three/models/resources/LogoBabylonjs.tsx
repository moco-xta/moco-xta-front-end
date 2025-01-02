import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoBabylonjs_1: THREE.Mesh
    LogoBabylonjs_2: THREE.Mesh
    LogoBabylonjs_3: THREE.Mesh
    LogoBabylonjs_4: THREE.Mesh
    LogoBabylonjs_5: THREE.Mesh
  }
  materials: {
    ['logo_babylonjs_#e0684b']: THREE.MeshStandardMaterial
    ['logo_babylonjs_#bb454b']: THREE.MeshStandardMaterial
    ['logo_babylonjs_#d5d2ca']: THREE.MeshStandardMaterial
    ['logo_babylonjs_#ffffff']: THREE.MeshStandardMaterial
    ['logo_babylonjs_#e0ded8']: THREE.MeshStandardMaterial
  }
}

const LogoBabylonjs = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_BABYLONJS) as GLTFResult

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
        name='LogoBabylonjs_1'
        geometry={nodes.LogoBabylonjs_1.geometry}
        material={materials['logo_babylonjs_#e0684b']}
        castShadow
        receiveShadow
      />
      <mesh
        name='LogoBabylonjs_2'
        geometry={nodes.LogoBabylonjs_2.geometry}
        material={materials['logo_babylonjs_#bb454b']}
        castShadow
        receiveShadow
      />
      <mesh
        name='LogoBabylonjs_3'
        geometry={nodes.LogoBabylonjs_3.geometry}
        material={materials['logo_babylonjs_#d5d2ca']}
        castShadow
        receiveShadow
      />
      <mesh
        name='LogoBabylonjs_4'
        geometry={nodes.LogoBabylonjs_4.geometry}
        material={materials['logo_babylonjs_#ffffff']}
        castShadow
        receiveShadow
      />
      <mesh
        name='LogoBabylonjs_5'
        geometry={nodes.LogoBabylonjs_5.geometry}
        material={materials['logo_babylonjs_#e0ded8']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.RESOURCES.LOGO_BABYLONJS)

export default LogoBabylonjs
