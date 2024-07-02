import * as THREE from 'three'
import React from 'react'
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
  snakeRedXXL,
  snakeRedM,
  snakeRedXD,
} from '../../materials/snakeGameMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    SnakeHead_1: THREE.Mesh
    SnakeHead_2: THREE.Mesh
    SnakeHead_3: THREE.Mesh
    SnakeHead_4: THREE.Mesh
    SnakeHead_5: THREE.Mesh
    SnakeHead_6: THREE.Mesh
    SnakeHead_7: THREE.Mesh
    SnakeHead_8: THREE.Mesh
    SnakeHead_9: THREE.Mesh
    SnakeHead_10: THREE.Mesh
  }
  materials: {}
}

export function SnakeHead(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.SNAKE_GAME.SNAKE_HEAD) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.SnakeHead_1.geometry}
        material={snakeBlack}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeHead_2.geometry}
        material={snakeTurquoiseD}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeHead_3.geometry}
        material={snakeOrangeD}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeHead_4.geometry}
        material={snakeBrown}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeHead_5.geometry}
        material={snakeBlue}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeHead_6.geometry}
        material={snakeRedM}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeHead_7.geometry}
        material={snakeRedXD}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeHead_8.geometry}
        material={snakeRedXXL}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeHead_9.geometry}
        material={snakeTurquoiseL}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SnakeHead_10.geometry}
        material={snakeOrangeL}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.SNAKE_GAME.SNAKE_HEAD)
