import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoOpenclassrooms = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_OPENCLASSROOMS) as GLTFResult

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
        geometry={nodes.LogoOpenclassrooms.geometry}
        material={materials['logo_openclassrooms_#7450ea']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoOpenclassrooms.displayName = 'LogoOpenclassrooms'

useGLTF.preload(glbConstants.LOGOS.LOGO_OPENCLASSROOMS)

export default LogoOpenclassrooms
