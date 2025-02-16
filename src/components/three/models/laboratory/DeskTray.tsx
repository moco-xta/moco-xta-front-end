import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import type { GLTFResult } from '@/types/data/components/three/types'

import { materialsData } from '@/data/about/three/materialsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function DeskTray(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(glbConstants.LABORATORY.DESK_TRAY) as GLTFResult

  return (
    <RigidBody>
      <group
        {...props}
        dispose={null}
      >
        <mesh
          geometry={nodes.DeskTray.geometry}
          material={materialsData.glassMaterial}
          position={[0, 9.092, -10.05]}
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload(glbConstants.LABORATORY.DESK_TRAY)
