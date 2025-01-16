import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function MondaineWallClockBackground(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    glbConstants.LABORATORY.MONDAINE_WALL_CLOCK_BACKGROUND,
  ) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.MondaineWallClockBackground.geometry}
        material={materials.material_mondaine_wall_clock}
        position={[-28.6, 25.4, -10.007]}
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.MONDAINE_WALL_CLOCK_BACKGROUND)
