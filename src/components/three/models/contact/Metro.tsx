import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export const Metro = forwardRef<THREE.Group, GroupProps>(function Metro(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.CONTACT.METRO) as GLTFResult

  return (
    <group
      ref={ref}
      position={[2, -0.7, 0]}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Metro.geometry}
        material={materials['metro_paris_#0C208F']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

Metro.displayName = 'Metro'

useGLTF.preload(glbConstants.CONTACT.METRO)

export default Metro
