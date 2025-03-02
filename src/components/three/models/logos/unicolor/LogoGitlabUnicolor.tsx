import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { type GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/components/three/types'

import { getSkinMaterial } from '@/components/three/materials'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import styles from '@/styles/variables.module.scss'

const LogoGitlabUnicolor = forwardRef<THREE.Group, GroupProps>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.LOGOS.UNICOLOR.LOGO_GITLAB_UNICOLOR) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoGitlabUnicolor.geometry}
        material={getSkinMaterial(styles.blue)}
        receiveShadow
        castShadow
      />
    </group>
  )
})

LogoGitlabUnicolor.displayName = 'LogoGitlabUnicolor'

useGLTF.preload(glbConstants.LOGOS.UNICOLOR.LOGO_GITLAB_UNICOLOR)

export default LogoGitlabUnicolor
