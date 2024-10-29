import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ExoMarket: THREE.Mesh
  }
  materials: {}
}

export function ExoMarket(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.EXO_MARKET) as GLTFResult

  const exoMarketMap = new THREE.TextureLoader().load(texturesConstants.HOME.EXO_MARKET.DIFFUSE)
  exoMarketMap.flipY = false

  const exoMarketRoughnessMap = new THREE.TextureLoader().load(
    texturesConstants.HOME.EXO_MARKET.ROUGHNESS,
  )
  exoMarketRoughnessMap.flipY = false

  const exoMarketMaterial = new THREE.MeshStandardMaterial({
    map: exoMarketMap,
    /* roughnessMap: exoMarketRoughnessMap, */
  })

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        name='ExoMarket'
        geometry={nodes.ExoMarket.geometry}
        material={exoMarketMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.HOME.EXO_MARKET)
