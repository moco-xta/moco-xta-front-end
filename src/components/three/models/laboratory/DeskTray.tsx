import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { materialsData } from '@/data/about/three/materialsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function DeskTray(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(glbConstants.LABORATORY.DESK_TRAY) as GLTFResult

  return (
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
  )
}

useGLTF.preload(glbConstants.LABORATORY.DESK_TRAY)
