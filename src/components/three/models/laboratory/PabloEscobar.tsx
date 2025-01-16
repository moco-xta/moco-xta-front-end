import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function PabloEscobar(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.PABLO_ESCOBAR) as GLTFResult

  return (
    <group
      position={[4.936, 18.127, -15.546]}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.PabloEscobar.geometry}
        material={materials.material_pablo_escobar}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.PABLO_ESCOBAR)
