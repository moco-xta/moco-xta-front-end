import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoGmail = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_GMAIL) as GLTFResult

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
        geometry={nodes.LogoGmail_1.geometry}
        material={materials['logo_gmail_#4285F4']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoGmail_2.geometry}
        material={materials['logo_gmail_#C5221F']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoGmail_3.geometry}
        material={materials['logo_gmail_#EA4336']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoGmail_4.geometry}
        material={materials['logo_gmail_#FBBD05']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoGmail_5.geometry}
        material={materials['logo_gmail_#34A853']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoGmail.displayName = 'LogoGmail'

useGLTF.preload(glbConstants.LOGOS.LOGO_GMAIL)

export default LogoGmail
