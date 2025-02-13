import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function FrameAmorLlamaAmor(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.FRAME_AMOR_LLAMA_AMOR) as GLTFResult

  return (
    <group
      position={[-11.2, 10, -16]}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.FrameAmorLlamaAmor_1.geometry}
        material={materials.amor_llama_amor_frame}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.FrameAmorLlamaAmor_2.geometry}
        material={materials.amor_llama_amor}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.FRAME_AMOR_LLAMA_AMOR)
