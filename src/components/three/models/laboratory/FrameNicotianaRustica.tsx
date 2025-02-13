import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function FrameNicotianaRustica(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    glbConstants.LABORATORY.FRAME_NICOTIANA_RUSTICA,
  ) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <group position={[10.2, 14.912, -16]}>
        <mesh
          geometry={nodes.FrameNicotianaRustica_1.geometry}
          material={materials['nicotiana_rustica_frame.001']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.FrameNicotianaRustica_2.geometry}
          material={materials.nicotina_rustica}
          receiveShadow
          castShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.FRAME_NICOTIANA_RUSTICA)
