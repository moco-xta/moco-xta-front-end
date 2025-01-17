import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function LogoTheBrink(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(glbConstants.LOGOS.LOGO_THE_BRINK) as GLTFResult

  return (
    <group
      {...props}
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
          emissive={'#ff4407'}
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload(glbConstants.LOGOS.LOGO_THE_BRINK)
