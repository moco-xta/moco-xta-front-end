import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/new/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as imgConstants } from '@/constants/new/assets/imgConstants.json'
import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

import variables from '@/styles/new/variables.module.scss'

type GLTFResult = GLTF & {
  nodes: {
    SnakeCell: THREE.Mesh
  }
  materials: {
    ['snake_cell_texture']: THREE.MeshStandardMaterial
  }
}

export function SnakeCell(props: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(
    gltfConstants.SNAKE_GAME.SNAKE_CELL,
  ) as GLTFResult

  const map = useTextureLoader(imgConstants.SNAKE_GAME.TEXTURES.SNAKE_CELL)
  map.wrapS = THREE.RepeatWrapping
  map.wrapT = THREE.RepeatWrapping
  map.repeat.set(1, -1)

  const material = new THREE.MeshStandardMaterial({
    map: map,
  })

  return (
    <mesh
      geometry={nodes.SnakeCell.geometry}
      material={materials['snake_cell_texture']}
      receiveShadow
      castShadow
      {...props}
    >
      <meshPhysicalMaterial
        attach='material'
        map={map}
        roughness={snakeGameConstants.SNAKE_GAME.MODELS.SNAKE_CELL.ROUGHNESS}
        metalness={0}
        transparent
        opacity={snakeGameConstants.SNAKE_GAME.MODELS.SNAKE_CELL.OPACITY}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.SNAKE_GAME.SNAKE_CELL)
