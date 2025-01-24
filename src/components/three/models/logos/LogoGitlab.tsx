import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoGitlab = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_GITLAB) as GLTFResult

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
        geometry={nodes.LogoGitlab_1.geometry}
        material={materials['logo_gitlab_#E24328']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoGitlab_2.geometry}
        material={materials['logo_gitlab_#FC6D25']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoGitlab_3.geometry}
        material={materials['logo_gitlab_#FBA326']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoGitlab.displayName = 'LogoGitlab'

useGLTF.preload(glbConstants.LOGOS.LOGO_GITLAB)

export default LogoGitlab
