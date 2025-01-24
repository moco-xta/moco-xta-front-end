import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoJira = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_JIRA) as GLTFResult

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
        geometry={nodes.LogoJira.geometry}
        material={materials['logo_jira_#2584FE']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoJira.displayName = 'LogoJira'

useGLTF.preload(glbConstants.LOGOS.LOGO_JIRA)

export default LogoJira
