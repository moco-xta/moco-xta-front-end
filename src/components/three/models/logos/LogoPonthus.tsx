import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoPonthus = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes } = useGLTF(glbConstants.LOGOS.LOGO_PONTHUS) as GLTFResult

  return (
    <group
      ref={ref}
      {...rest}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoPonthus.geometry}
        material={nodes.LogoPonthus.material}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={'#2B245F'}
          roughness={1}
          metalness={0}
          emissive={'#2B245F'}
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  )
})

LogoPonthus.displayName = 'LogoPonthus'

useGLTF.preload(glbConstants.LOGOS.LOGO_PONTHUS)

export default LogoPonthus
