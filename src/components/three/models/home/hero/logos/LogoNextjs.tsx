import * as THREE from 'three'
import React, { forwardRef } from 'react'
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

const LogoNextjs = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>(
  function LogoNextjs(props, ref) {
    const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.LOGOS.LOGO_NEXTJS) as GLTFResult

    return (
      <group
        ref={ref}
        dispose={null}
        {...props}
      >
        <mesh
          name='LogoNextjs_1'
          geometry={nodes.LogoNextjs_1.geometry}
          material={materials['logo_nextjs_simple_#000000']}
        />
        <mesh
          name='LogoNextjs_2'
          geometry={nodes.LogoNextjs_2.geometry}
          material={materials['logo_nextjs_simple_#ffffff']}
        />
      </group>
    )
  },
)

useGLTF.preload(glbConstants.HOME.HERO.LOGOS.LOGO_NEXTJS)

export default LogoNextjs
