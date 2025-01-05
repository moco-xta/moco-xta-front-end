import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoNextjs_1: THREE.Mesh
    LogoNextjs_2: THREE.Mesh
  }
  materials: {
    ['logo_nextjs_simple_#000000']: THREE.MeshStandardMaterial
    ['logo_nextjs_simple_#ffffff']: THREE.MeshStandardMaterial
  }
}

const LogoNextjs = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_NEXTJS) as GLTFResult

  ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
    materials[key].side = THREE.DoubleSide
  })

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoNextjs_1.geometry}
        material={materials['logo_nextjs_simple_#000000']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoNextjs_2.geometry}
        material={materials['logo_nextjs_simple_#ffffff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.RESOURCES.LOGO_NEXTJS)

export default LogoNextjs
