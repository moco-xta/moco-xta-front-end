import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Building001Wall: THREE.Mesh
  }
  materials: {}
}

export function Building001Wall(props: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.BUILDING_001_WALL) as GLTFResult

  const building001WallMap = new THREE.TextureLoader().load(
    texturesConstants.HOME.BUILDING_001_WALL.DIFFUSE,
  )
  building001WallMap.flipY = false

  const building001WallRoughnessMap = new THREE.TextureLoader().load(
    texturesConstants.HOME.BUILDING_001_WALL.ROUGHNESS,
  )
  building001WallRoughnessMap.flipY = false

  const building001WallNormalMap = new THREE.TextureLoader().load(
    texturesConstants.HOME.BUILDING_001_WALL.NORMAL,
  )
  building001WallNormalMap.flipY = false

  const building001WallMaterial = new THREE.MeshStandardMaterial({
    map: building001WallMap,
    roughnessMap: building001WallRoughnessMap,
    normalMap: building001WallNormalMap,
    normalScale: new THREE.Vector2(1, -1),
    /* displacementMap: building001WallDisplacementMap,
    displacementScale: -1,
    bumpMap: building001WallDisplacementMap,
    bumpScale: 2, */
    /* wireframe: true */
  })

  return (
    <mesh
      name='Building001Wall'
      geometry={nodes.Building001Wall.geometry}
      material={building001WallMaterial}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(glbConstants.HOME.BUILDING_001_WALL)
