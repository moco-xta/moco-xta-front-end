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

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

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
  }
  materials: {}
}

export function SnakeCellStraight(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(gltfConstants.SNAKE_GAME.SNAKE_CELL_STRAIGHT) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.SnakeCellStraight_1.geometry}
        material={snakeBlack}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellStraight_2.geometry}
        material={snakeTurquoiseD}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellStraight_3.geometry}
        material={snakeOrangeD}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellStraight_4.geometry}
        material={snakeBrown}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellStraight_5.geometry}
        material={snakeBlue}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellStraight_6.geometry}
        material={snakeRedM}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellStraight_7.geometry}
        material={snakeRedXXL}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellStraight_8.geometry}
        material={snakeTurquoiseL}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeCellStraight_9.geometry}
        material={snakeOrangeL}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.SNAKE_GAME.SNAKE_CELL_STRAIGHT)
