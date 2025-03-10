import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoTheBrink = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes } = useGLTF(glbConstants.LOGOS.LOGO_THE_BRINK) as GLTFResult

  return (
    <group
      ref={ref}
      {...rest}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoTheBrink.geometry}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={'#ff4407'}
          roughness={1}
          metalness={0}
          // emissive={'#ff4407'}
          // emissiveIntensity={1}
        />
      </mesh>
    </group>
  )
})

LogoTheBrink.displayName = 'LogoTheBrink'

useGLTF.preload(glbConstants.LOGOS.LOGO_THE_BRINK)

export default LogoTheBrink
