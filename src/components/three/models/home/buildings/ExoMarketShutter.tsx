import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import variables from '@/styles/variables.module.scss'

type GLTFResult = GLTF & {
  nodes: {
    ExoMarketShutter: THREE.Mesh
  }
  materials: {
    exo_market_shutter: THREE.MeshStandardMaterial
  }
}

export function ExoMarketShutter(props: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(glbConstants.HOME.EXO_MARKET_SHUTTER) as GLTFResult

  const exoMarketMaterial = new THREE.MeshStandardMaterial({
    color: variables.gamma_violet,
    roughness: 0,
  })

  return (
    <mesh
      dispose={null}
      geometry={nodes.ExoMarketShutter.geometry}
      material={exoMarketMaterial}
      {...props}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(glbConstants.HOME.EXO_MARKET_SHUTTER)
