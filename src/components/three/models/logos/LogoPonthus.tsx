import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoPonthus = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.LOGOS.LOGO_PONTHUS) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
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
