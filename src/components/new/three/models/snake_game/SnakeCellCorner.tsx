import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import {
  snakeTurquoiseL,
  snakeTurquoiseD,
  snakeBlack,
  snakeBlue,
  snakeBrown,
  snakeOrangeL,
  snakeOrangeD,
  snakeRedM,
  snakeRedXXL,
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
        material={snakeTurquoiseD}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellCorner_2.geometry}
        material={snakeBlack}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellCorner_3.geometry}
        material={snakeRedM}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellCorner_4.geometry}
        material={snakeRedXXL}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellCorner_5.geometry}
        material={snakeBlue}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellCorner_6.geometry}
        material={snakeBrown}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellCorner_7.geometry}
        material={snakeOrangeD}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellCorner_8.geometry}
        material={snakeTurquoiseL}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellCorner_9.geometry}
        material={snakeOrangeL}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.SNAKE_GAME.SNAKE_CELL_CORNER)
