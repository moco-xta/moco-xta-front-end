import React from 'react'
import * as THREE from 'three'
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
    SnakeCellCorner_1: THREE.Mesh
    SnakeCellCorner_2: THREE.Mesh
    SnakeCellCorner_3: THREE.Mesh
    SnakeCellCorner_4: THREE.Mesh
    SnakeCellCorner_5: THREE.Mesh
    SnakeCellCorner_6: THREE.Mesh
    SnakeCellCorner_7: THREE.Mesh
    SnakeCellCorner_8: THREE.Mesh
    SnakeCellCorner_9: THREE.Mesh
    SnakeCellCorner_10: THREE.Mesh
  }
  materials: {}
}

export function SnakeCellCorner(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    gltfConstants.SNAKE_GAME.SNAKE_CELL_CORNER,
  ) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.SnakeCellCorner_1.geometry}
        material={snakeGreenM}
      />
      <mesh
        geometry={nodes.SnakeCellCorner_2.geometry}
        material={snakeGreenL}
      />
      <mesh
        geometry={nodes.SnakeCellCorner_3.geometry}
        material={snakeGreenXL}
      />
      <mesh
        geometry={nodes.SnakeCellCorner_4.geometry}
        material={snakeGreenD}
      />
      <mesh
        geometry={nodes.SnakeCellCorner_5.geometry}
        material={snakeGreenXD}
      />
      <mesh
        geometry={nodes.SnakeCellCorner_6.geometry}
        material={snakeYellowM}
      />
      <mesh
        geometry={nodes.SnakeCellCorner_7.geometry}
        material={snakeYellowL}
      />
      <mesh
        geometry={nodes.SnakeCellCorner_8.geometry}
        material={snakeYellowXL}
      />
      <mesh
        geometry={nodes.SnakeCellCorner_9.geometry}
        material={snakeYellowD}
      />
      <mesh
        geometry={nodes.SnakeCellCorner_10.geometry}
        material={snakeYellowXD}
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.SNAKE_GAME.SNAKE_CELL_CORNER)
