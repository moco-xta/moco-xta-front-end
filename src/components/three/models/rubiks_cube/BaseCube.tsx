import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { baseCubeData } from '@/data/skills/rubiks_cube/three/baseCubeData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    BaseCube: THREE.Mesh
  }
  materials: object
}

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
