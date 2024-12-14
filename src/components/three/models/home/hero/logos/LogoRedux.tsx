import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoRedux: THREE.Mesh
  }
  materials: {
    ['logo_redux_#764abc']: THREE.MeshStandardMaterial
  }
}

export const LogoRedux = forwardRef<THREE.Group, GroupProps>(function LogoRedux(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.LOGOS.LOGO_REDUX) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
    >
      <mesh
        name='LogoRedux'
        geometry={nodes.LogoRedux.geometry}
        material={materials['logo_redux_#764abc']}
      />
    </group>
  )
})

useGLTF.preload(glbConstants.HOME.HERO.LOGOS.LOGO_REDUX)
