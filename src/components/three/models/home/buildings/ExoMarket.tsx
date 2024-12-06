import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import variables from '@/styles/variables.module.scss'

type GLTFResult = GLTF & {
  nodes: {
    ExoMarket_1: THREE.Mesh
    ExoMarket_2: THREE.Mesh
    ExoMarket_3: THREE.Mesh
    ExoMarket_4: THREE.Mesh
  }
  materials: {
    exo_market: THREE.MeshStandardMaterial
    exo_market_signboard: THREE.MeshStandardMaterial
    exo_market_signboard_text: THREE.MeshStandardMaterial
    exo_market_windows: THREE.MeshStandardMaterial
  }
}

export function ExoMarket(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(glbConstants.HOME.EXO_MARKET) as GLTFResult

  /* const risographMaterial = new RisographShaderMaterial() */

  const exoMarketMaterial = new THREE.MeshStandardMaterial({
    color: variables.grey_dark,
    roughness: 0,
  })

  const signBoardMaterial = new THREE.MeshStandardMaterial({
    color: variables.grey_dark,
    roughness: 0,
    // metalness: 1,
    emissive: variables.grey_dark,
    emissiveIntensity: 0.5,
  })

  const signBoardTextMaterial = new THREE.MeshStandardMaterial({
    color: variables.white,
    emissive: variables.white,
    emissiveIntensity: 1,
  })

  const windowsMaterial = new THREE.MeshStandardMaterial({
    color: variables.white,
    emissive: variables.white,
    emissiveIntensity: 2,
  })

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        name='ExoMarket_1'
        geometry={nodes.ExoMarket_1.geometry}
        // material={risographMaterial}
        material={exoMarketMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='ExoMarket_2'
        geometry={nodes.ExoMarket_2.geometry}
        material={signBoardTextMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='ExoMarket_3'
        geometry={nodes.ExoMarket_3.geometry}
        material={windowsMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='ExoMarket_4'
        geometry={nodes.ExoMarket_4.geometry}
        material={signBoardMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.HOME.EXO_MARKET)
