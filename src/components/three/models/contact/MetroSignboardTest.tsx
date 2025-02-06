import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export const MetroSignboard = forwardRef<THREE.Group, GroupProps>(function MetroSignboard(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.CONTACT.METRO_SIGNBOARD) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.MetroSignboard_1.geometry}
        material={materials['metro_paris_#fff']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.MetroSignboard_2.geometry}
        material={materials.metro_paris_signboard}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.MetroSignboard_3.geometry}
        material={materials['metro_paris_#0C208F']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

MetroSignboard.displayName = 'MetroSignboard'

useGLTF.preload(glbConstants.CONTACT.METRO_SIGNBOARD)

export default MetroSignboard
