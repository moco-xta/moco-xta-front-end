import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { arrowTestPink } from '../../materials/snakeGameMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ArrowTest: THREE.Mesh
  }
  materials: {}
}

export function ArrowTest(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    gltfConstants.SNAKE_GAME.ARROW_TEST,
  ) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.ArrowTest.geometry}
        material={arrowTestPink}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.SNAKE_GAME.ARROW_TEST)
