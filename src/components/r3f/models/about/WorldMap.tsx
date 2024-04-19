import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/gltfConstants.json'
import { default as texturesConstants } from '@/constants/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    WorldMap: THREE.Mesh
  }
  materials: {}
}

export function WorldMap({ position, rotation }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.WORLD_MAP) as GLTFResult
  return (
    <group
      position={position}
      rotation={rotation}
    >
      <mesh geometry={nodes.WorldMap.geometry} receiveShadow castShadow>
        <meshStandardMaterial
          attach='material'
          color={'white'}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload(gltfConstants.WORLD_MAP)
