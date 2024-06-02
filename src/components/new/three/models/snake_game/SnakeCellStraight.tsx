import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import {
  snakeGreenXL,
  snakeGreenL,
  snakeGreenM,
  snakeGreenD,
  snakeGreenXD,
  snakeYellowXL,
  snakeYellowL,
  snakeYellowM,
  snakeYellowD,
  snakeYellowXD,
} from '../../materials/snakeGameMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    SnakeCellStraight_1: THREE.Mesh
    SnakeCellStraight_2: THREE.Mesh
    SnakeCellStraight_3: THREE.Mesh
    SnakeCellStraight_4: THREE.Mesh
    SnakeCellStraight_5: THREE.Mesh
    SnakeCellStraight_6: THREE.Mesh
    SnakeCellStraight_7: THREE.Mesh
    SnakeCellStraight_8: THREE.Mesh
    SnakeCellStraight_9: THREE.Mesh
    SnakeCellStraight_10: THREE.Mesh
  }
  materials: {}
}

export function SnakeCellStraight(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    gltfConstants.SNAKE_GAME.SNAKE_CELL_STRAIGHT,
  ) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.SnakeCellStraight_1.geometry}
        material={snakeGreenM}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellStraight_2.geometry}
        material={snakeGreenXL}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellStraight_3.geometry}
        material={snakeGreenXD}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellStraight_4.geometry}
        material={snakeGreenD}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellStraight_5.geometry}
        material={snakeGreenL}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellStraight_6.geometry}
        material={snakeYellowXL}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellStraight_7.geometry}
        material={snakeYellowXD}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellStraight_8.geometry}
        material={snakeYellowD}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellStraight_9.geometry}
        material={snakeYellowM}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellStraight_10.geometry}
        material={snakeYellowL}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.SNAKE_GAME.SNAKE_CELL_STRAIGHT)
