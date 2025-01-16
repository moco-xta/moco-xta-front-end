import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function VirgenDeGuadalupe(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.VIRGEN_DE_GUADALUPE) as GLTFResult

  return (
    <group
      position={[-4.512, 18.127, -15.546]}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.VirgenDeGuadalupe.geometry}
        material={materials.material_virgen_de_guadalupe}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.VIRGEN_DE_GUADALUPE)
