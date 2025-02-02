import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { baseCubeData } from '@/data/skills/rubiks_cube/three/baseCubeData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function BaseCube(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.BASE_CUBE) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.BaseCube.geometry}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          attach='material'
          color={baseCubeData.defaultValues.material.color}
          roughness={baseCubeData.defaultValues.material.roughness}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload(glbConstants.RUBIKS_CUBE.BASE_CUBE)
