import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export const MetroSignboardPutain = forwardRef<THREE.Group, GroupProps>(
  function MetroSignBoard(props, ref) {
    const { nodes, materials } = useGLTF(glbConstants.CONTACT.METRO_SIGNBOARD) as GLTFResult

    return (
      <group
        ref={ref}
        {...props}
        dispose={null}
      >
        <mesh
          geometry={nodes.MetroSignboardPutain_1.geometry}
          material={materials['metro_paris_#fff']}
        />
        <mesh
          geometry={nodes.MetroSignboardPutain_2.geometry}
          material={materials.metro_paris_signboard}
        />
        <mesh
          geometry={nodes.MetroSignboardPutain_3.geometry}
          material={materials['metro_paris_#0C208F']}
        />
      </group>
    )
  },
)

MetroSignboardPutain.displayName = 'MetroSignboardPutain'

useGLTF.preload(glbConstants.CONTACT.METRO_SIGNBOARD)

export default MetroSignboardPutain
