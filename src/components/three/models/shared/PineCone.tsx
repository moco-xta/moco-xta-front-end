import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import useTextureLoader from '@/hooks/three/useTextureLoader'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

export function PineCone(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(glbConstants.SHARED.PINE_CONE) as GLTFResult

  const christusMap = useTextureLoader(texturesConstants.MATCAPS.PINE_CONE)

  const pineConeMaterial = new THREE.MeshMatcapMaterial({
    matcap: christusMap,
    transparent: true,
    opacity: 1,
  })

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.PineCone.geometry}
        material={pineConeMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.SHARED.PINE_CONE)
